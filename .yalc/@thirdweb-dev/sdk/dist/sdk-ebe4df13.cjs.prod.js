'use strict';

var defineProperty = require('./defineProperty-b8983092.cjs.prod.js');
var web3_js = require('@solana/web3.js');
var zod = require('zod');
var js = require('@metaplex-foundation/js');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var anchor = require('@project-serum/anchor');
var _ = require('buffer/');
var BN = require('bn.js');
var bs58 = require('bs58');
var EventEmitter = require('eventemitter3');
var invariant = require('tiny-invariant');
var nacl = require('tweetnacl');
var uuid = require('uuid');
var storage = require('@thirdweb-dev/storage');
var splToken = require('@solana/spl-token');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var BN__default = /*#__PURE__*/_interopDefault(BN);
var bs58__default = /*#__PURE__*/_interopDefault(bs58);
var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var nacl__default = /*#__PURE__*/_interopDefault(nacl);

/**
 * @internal
 */

const MAX_BPS = 10000;
/**
 * @internal
 */

const BasisPointsSchema = zod.z.number().max(MAX_BPS, "Cannot exeed 100%").min(0, "Cannot be below 0%");
/**
 * @internal
 */

const PercentSchema = zod.z.number().max(100, "Cannot exeed 100%").min(0, "Cannot be below 0%");
/**
 * @internal
 */

const JsonLiteral = zod.z.union([zod.z.string(), zod.z.number(), zod.z.boolean(), zod.z.null()]);
/**
 * @internal
 */

/**
 * @internal
 */
const PropertiesInput = zod.z.object({}).catchall(zod.z.unknown());
/**
 * @internal
 */

const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional();
/**
 * @internal
 */

const AmountSchema = zod.z.union([zod.z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), zod.z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);
/**
 * @internal
 */

const RawDateSchema = zod.z.date().transform(i => {
  return Math.floor(i.getTime() / 1000);
});
/**
 * @internal
 */

/**
 * @internal
 */
const AddressSchema = zod.z.union([zod.z.string(), zod.z.instanceof(web3_js.PublicKey).transform(key => key.toBase58())]);

const isBrowser = () => typeof window !== "undefined";

const FileOrBufferUnionSchema = isBrowser() ? zod.z.instanceof(File) : zod.z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

/**
 * @internal
 */

const FileOrBufferSchema = zod.z.union([FileOrBufferUnionSchema, zod.z.object({
  data: zod.z.union([FileOrBufferUnionSchema, zod.z.string()]),
  name: zod.z.string()
})]);
/**
 * @internal
 */

const FileOrBufferOrStringSchema = zod.z.union([FileOrBufferSchema, zod.z.string()]);

/**
 * @internal
 */

const LoginOptionsSchema = zod.z.object({
  /**
   * The optional nonce of the login request used to prevent replay attacks
   */
  nonce: zod.z.string().optional(),

  /**
   * The optional time after which the login payload will be invalid
   */
  expirationTime: zod.z.date().optional()
}).optional();
/**
 * @internal
 */

const LoginPayloadDataSchema = zod.z.object({
  /**
   * The domain that the user is attempting to login to
   */
  domain: zod.z.string(),

  /**
   * The public key of the account that is logging in
   */
  address: AddressSchema,

  /**
   * The nonce of the login request used to prevent replay attacks, defaults to a random UUID
   */
  nonce: zod.z.string().default(uuid.v4()),

  /**
   * The time after which the login payload will be invalid, defaults to 5 minutes from now
   */
  expiration_time: zod.z.date().transform(d => d.toISOString())
});
/**
 * @internal
 */

zod.z.object({
  /**
   * The payload data used for login
   */
  payload: LoginPayloadDataSchema,

  /**
   * The signature of the login request used for verification
   */
  signature: zod.z.string()
});
/**
 * @internal
 */

const AuthenticationOptionsSchema = zod.z.object({
  /**
   * The date before which the authentication payload is invalid
   */
  invalidBefore: zod.z.date().optional(),

  /**
   * The date after which the authentication payload is invalid
   */
  expirationTime: zod.z.date().optional()
}).optional();
/**
 * @internal
 */

const AuthenticationPayloadDataSchema = zod.z.object({
  /**
   * The address of the wallet issuing the payload
   */
  iss: zod.z.string(),

  /**
   * The address of the wallet requesting to authenticate
   */
  sub: zod.z.string(),

  /**
   * The domain intended to receive the authentication payload
   */
  aud: zod.z.string(),

  /**
   * The date before which the authentication payload is invalid
   */
  exp: RawDateSchema,

  /**
   * The date after which the authentication payload is invalid
   */
  nbf: RawDateSchema,

  /**
   * The date on which the payload was issued
   */
  iat: RawDateSchema,

  /**
   * The unique identifier of the payload
   */
  jti: zod.z.string().default(uuid.v4())
});
/**
 * @internal
 */

zod.z.object({
  /**
   * The payload data used for authentication
   */
  payload: AuthenticationPayloadDataSchema,

  /**
   * The signature of the authentication payload used for authentication
   */
  signature: zod.z.string()
});
/**
 * @public
 */

/**
 * Wallet Authenticator
 * @remarks The wallet authenticator enables server-side applications to securely identify the
 * connected wallet address of users on the client-side, and also enables users to authenticate
 * to any backend using just their wallet. It implements the JSON Web Token (JWT) authentication
 * standard.
 *
 * @example
 * ```javascript
 * // We specify the domain of the application to authenticate to
 * const domain = "example.com"
 *
 * // On the client side, we can generate a payload for the connected wallet to login
 * const loginPayload = await sdk.auth.login(domain);
 *
 * // Then on the server side, we can securely verify the connected client-side address
 * const address = sdk.auth.verify(domain, loginPayload);
 *
 * // And we can also generate an authentication token to send to the client
 * const token = sdk.auth.generate(domain, loginPayload);
 *
 * // Finally, the token can be send from the client to the server to make authenticated requests
 * // And the server can use the following function to authenticate a token and verify the associated address
 * const address = sdk.auth.authenticate(domain, token);
 * ```
 * @public
 */

class WalletAuthenticator {
  constructor(wallet) {
    defineProperty._defineProperty(this, "wallet", void 0);

    this.wallet = wallet;
  }
  /**
   * Login With Connected Wallet
   * @remarks Client-side function that allows the connected wallet to login to a server-side application.
   * Generates a login payload that can be sent to the server-side for verification or authentication.
   *
   * @param domain - The domain of the server-side application to login to
   * @param options - Optional configuration options for the login request
   * @returns Login payload that can be used on the server-side to verify the login request or authenticate
   *
   * @example
   * ```javascript
   * // Add the domain of the application users will login to, this will be used throughout the login process
   * const domain = "example.com";
   * // Generate a signed login payload for the connected wallet to authenticate with
   * const loginPayload = await sdk.auth.login(domain);
   * ```
   */


  async login(domain, options) {
    const parsedOptions = LoginOptionsSchema.parse(options);
    const signerAddress = this.wallet.getAddress();
    const expirationTime = (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.expirationTime) || new Date(Date.now() + 1000 * 60 * 5);
    const payloadData = LoginPayloadDataSchema.parse({
      domain,
      address: signerAddress,
      nonce: parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.nonce,
      expiration_time: expirationTime
    });
    const message = this.generateMessage(payloadData);
    const signature = await this.wallet.sign(message);
    return {
      payload: payloadData,
      signature
    };
  }
  /**
   * Verify Logged In Address
   * @remarks Server-side function to securely verify the address of the logged in client-side wallet
   * by validating the provided client-side login request.
   *
   * @param domain - The domain of the server-side application to verify the login request for
   * @param payload - The login payload to verify
   * @returns The public key of the logged in wallet
   *
   * @example
   * ```javascript
   * const domain = "example.com";
   * const loginPayload = await sdk.auth.login(domain);
   *
   * // Verify the login request
   * const address = sdk.auth.verify(domain, loginPayload);
   * ```
   */


  verify(domain, payload) {
    // Check that the intended domain matches the domain of the payload
    if (payload.payload.domain !== domain) {
      throw new Error(`Expected domain '${domain}' does not match domain on payload '${payload.payload.domain}'`);
    } // Check that the payload hasn't expired


    const currentTime = new Date();

    if (currentTime > new Date(payload.payload.expiration_time)) {
      throw new Error(`Login request has expired`);
    } // Check that the signing address is the claimed wallet address


    const message = this.generateMessage(payload.payload);
    const isValid = this.wallet.verifySignature(message, payload.signature, payload.payload.address);

    if (!isValid) {
      throw new Error(`Signer address '${payload.payload.address}' did not sign the provided message`);
    }

    return payload.payload.address;
  }
  /**
   * Generate Authentication Token
   * @remarks Server-side function that generates a JWT token from the provided login request that the
   * client-side wallet can use to authenticate to the server-side application.
   *
   * @param domain - The domain of the server-side application to authenticate to
   * @param payload - The login payload to authenticate with
   * @param options - Optional configuration options for the authentication request
   * @returns A authentication token that can be used by the client to make authenticated requests
   *
   * @example
   * ```javascript
   * const domain = "example.com";
   * const loginPayload = await sdk.auth.login(domain);
   *
   * // Generate a JWT token that can be sent to the client-side wallet and used for authentication
   * const token = await sdk.auth.generateAuthToken(domain, loginPayload);
   * ```
   */


  async generateAuthToken(domain, payload, options) {
    if (storage.isBrowser()) {
      throw new Error("Authentication tokens should not be generated in the browser, as they must be signed by a server-side admin wallet.");
    }

    const parsedOptions = AuthenticationOptionsSchema.parse(options);
    const userAddress = this.verify(domain, payload);
    const adminAddress = this.wallet.getAddress();
    const payloadData = AuthenticationPayloadDataSchema.parse({
      iss: adminAddress,
      sub: userAddress,
      aud: domain,
      nbf: (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.invalidBefore) || new Date(),
      exp: (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.expirationTime) || new Date(Date.now() + 1000 * 60 * 60 * 5),
      iat: new Date()
    });
    const message = JSON.stringify(payloadData);
    const signature = await this.wallet.sign(message); // Header used for JWT token specifying hash algorithm

    const header = {
      // Specify ECDSA with SHA-256 for hashing algorithm
      alg: "ES256",
      typ: "JWT"
    };
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64");
    const encodedData = Buffer.from(JSON.stringify(payloadData)).toString("base64").replace(/=/g, "");
    const encodedSignature = Buffer.from(signature).toString("base64"); // Generate a JWT token with base64 encoded header, payload, and signature

    const token = `${encodedHeader}.${encodedData}.${encodedSignature}`;
    return token;
  }
  /**
   * Authenticate With Token
   * @remarks Server-side function that authenticates the provided JWT token. This function verifies that
   * the provided authentication token is valid and returns the address of the authenticated wallet.
   *
   * @param domain - The domain of the server-side application doing authentication
   * @param token - The authentication token being used
   * @returns The address of the authenticated wallet
   *
   * @example
   * ```javascript
   * const domain = "example.com";
   * const loginPayload = await sdk.auth.login(domain);
   * const token = await sdk.auth.generateAuthToken(domain, loginPayload);
   *
   * // Authenticate the token and get the address of authenticating users wallet
   * const address = sdk.auth.authenticate(domain, token);
   * ```
   */


  async authenticate(domain, token) {
    if (storage.isBrowser()) {
      throw new Error("Should not authenticate tokens in the browser, as they must be verified by the server-side admin wallet.");
    }

    const encodedPayload = token.split(".")[1];
    const encodedSignature = token.split(".")[2];
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64").toString());
    const signature = Buffer.from(encodedSignature, "base64").toString(); // Check that the token audience matches the domain

    if (payload.aud !== domain) {
      throw new Error(`Expected token to be for the domain '${domain}', but found token with domain '${payload.aud}'`);
    } // Check that the token is past the invalid before time


    const currentTime = Math.floor(new Date().getTime() / 1000);

    if (currentTime < payload.nbf) {
      throw new Error(`This token is invalid before epoch time '${payload.nbf}', current epoch time is '${currentTime}'`);
    } // Check that the token hasn't expired


    if (currentTime > payload.exp) {
      throw new Error(`This token expired at epoch time '${payload.exp}', current epoch time is '${currentTime}'`);
    } // Check that the connected wallet matches the token issuer


    const connectedAddress = this.wallet.getAddress();

    if (connectedAddress.toLowerCase() !== payload.iss.toLowerCase()) {
      throw new Error(`Expected the connected wallet address '${connectedAddress}' to match the token issuer address '${payload.iss}'`);
    } // Check that the connected wallet signed the token


    const isValid = this.wallet.verifySignature(JSON.stringify(payload), signature, connectedAddress);

    if (!isValid) {
      throw new Error(`The connected wallet address '${connectedAddress}' did not sign the token`);
    }

    return payload.sub;
  }
  /**
   * Generates a SIWS compliant message to sign based on the login payload
   */


  generateMessage(payload) {
    let message = ``; // Add the domain and login address for transparency

    message += `${payload.domain} wants you to sign in with your account:\n${payload.address}\n\n`; // Prompt user to make sure domain is correct to prevent phishing attacks

    message += `Make sure that the requesting domain above matches the URL of the current website.\n\n`;
    message += `Nonce: ${payload.nonce}\n`;
    message += `Expiration Time: ${payload.expiration_time}\n`;
    return message;
  }

}

/**
 * @internal
 */

function toCurrencyValue(amount) {
  return {
    value: amount.basisPoints.toString(),
    displayValue: toDisplayValue(amount)
  };
}

const toDisplayValue = value => {
  if (value.currency.decimals === 0) {
    return `${value.currency.symbol} ${value.basisPoints.toString()}`;
  }

  const power = new BN__default["default"](10).pow(new BN__default["default"](value.currency.decimals));
  const basisPoints = value.basisPoints;
  const {
    div,
    mod
  } = basisPoints.divmod(power);
  const units = `${div.toString()}.${mod.abs().toString(10, value.currency.decimals)}`;
  return `${units}`;
};

/**
 *
 * {@link UserWallet} events that you can subscribe to using `sdk.wallet.events`.
 *
 * @public
 */

/**
 * Handle and view info about the wallet connected to the SDK.
 *
 * @example
 * ```jsx
 * // Connect a wallet to the SDK, pass in a keypair or browser wallet adapter
 * sdk.wallet.connect(signer)
 *
 * // Then you can read data about the connected wallet
 * const address = sdk.wallet.getAddress();
 * ```
 *
 * @public
 */
class UserWallet {
  constructor(metaplex) {
    defineProperty._defineProperty(this, "signer", void 0);

    defineProperty._defineProperty(this, "events", new EventEmitter__default["default"]());

    defineProperty._defineProperty(this, "metaplex", void 0);

    this.metaplex = metaplex;
  }
  /**
   * Connect a signer to the SDK. Can pass in a keypair or browser wallet adapter
   * @param wallet - The signer to connect to the SDK
   *
   * @example
   * ```jsx
   * const signer = Keypair.generate();
   * sdk.wallet.connect(signer);
   * ```
   */


  connect(wallet) {
    this.connectToMetaplex(wallet);
    this.events.emit("connected", wallet);
  }
  /**
   * Disconnect the connect wallet from the SDK
   *
   * @example
   * ```jsx
   * sdk.wallet.disconnect();
   * ```
   */


  disconnect() {
    // TODO implement our own read only identity plugin with our own error messages
    this.metaplex.use(js.guestIdentity());
    this.events.emit("disconnected");
  }
  /**
   * Return whether a wallet is connected
   */


  isConnected() {
    return this.metaplex.identity().publicKey !== web3_js.PublicKey.default;
  }
  /**
   * Get the address of the connected wallet
   * @returns the address of the connected wallet
   *
   * @example
   * ```jsx
   * const address = sdk.wallet.getAddress()
   * ```
   */


  getAddress() {
    return this.metaplex.identity().publicKey.toBase58();
  }
  /**
   * Get the connected signer
   * @returns the signer
   *
   * @example
   * ```jsx
   * const signer = sdk.wallet.getSigner()
   * ```
   */


  getSigner() {
    return this.metaplex.identity();
  }

  async sign(message) {
    const signer = this.getSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58__default["default"].encode(signedMessage);
    return signature;
  }

  verifySignature(message, signature, publicKey) {
    return nacl__default["default"].sign.detached.verify(new TextEncoder().encode(message), bs58__default["default"].decode(signature), bs58__default["default"].decode(publicKey));
  }
  /**
   * Get the native balance of the connected wallet
   * @returns the native balance currency value
   *
   * @example
   * ```jsx
   * const balance = await sdk.wallet.getBalance();
   * console.log(balance.displayValue);
   * ```
   */


  async getBalance() {
    const value = await this.metaplex.connection.getBalance(this.metaplex.identity().publicKey);
    return toCurrencyValue(js.amount(value, js.SOL));
  }

  connectToMetaplex(signer) {
    invariant__default["default"](signer, "Wallet is not connected");
    const plugin = js.isKeypairSigner(signer) ? js.keypairIdentity(web3_js.Keypair.fromSecretKey(signer.secretKey)) : js.isIdentitySigner(signer) ? js.walletAdapterIdentity(signer) : undefined;
    invariant__default["default"](plugin, "Wallet is not compatible with Metaplex");
    this.metaplex.use(plugin);
  }

}

/**
 * @internal
 */

const CommonContractSchema = zod.z.object({
  name: zod.z.string(),
  symbol: zod.z.string().optional(),
  description: zod.z.string().optional(),
  image: FileOrBufferOrStringSchema.optional(),
  external_link: zod.z.string().url().optional()
});
/**
 * @internal
 */

const CommonContractOutputSchema = CommonContractSchema.extend({
  image: zod.z.string().optional()
}).catchall(zod.z.unknown()); /// NFT ///

/**
 * @internal
 */

const CreatorInputSchema = zod.z.object({
  address: zod.z.string(),
  sharePercentage: zod.z.number(),
  verified: zod.z.boolean().default(false)
});
/**
 * @internal
 */

const NFTCollectionMetadataInputSchema = CommonContractSchema.extend({
  creators: zod.z.array(CreatorInputSchema).default([])
});
/**
 * @internal
 */

/// TOKEN ///

/**
 * @internal
 */
const TokenMetadataInputSchema = CommonContractSchema.extend({
  decimals: zod.z.number().default(9),
  initialSupply: AmountSchema
});
/**
 * @public
 */

/**
 * @internal
 */

const CommonTokenInputSchema = zod.z.object({
  name: zod.z.string(),
  symbol: zod.z.string(),
  decimals: zod.z.number(),
  description: zod.z.string().optional(),
  image: defineProperty.FileOrBufferOrStringSchema.optional(),
  external_link: zod.z.string().url().optional()
});
/**
 * @internal
 */

const CurrencyValueSchema = zod.z.object({
  value: zod.z.string(),
  displayValue: zod.z.string()
});
/**
 * Currency value and display value
 * @public
 */

/**
 * @internal
 */
CommonTokenInputSchema.extend({
  image: zod.z.string().optional(),
  supply: CurrencyValueSchema
}).catchall(zod.z.unknown());
/**
 * Metadata for a token
 * @public
 */

/**
 * @internal
 */

const NFTDropInitialConditionsInputSchema = zod.z.object({
  itemsAvailable: AmountSchema
});
/**
 * @internal
 */
// TODO: Handle allow lists and end times

const NFTDropUpdateableConditionsInputSchema = zod.z.object({
  price: AmountSchema.optional(),
  currencyAddress: zod.z.string().optional(),
  primarySaleRecipient: zod.z.string().optional(),
  sellerFeeBasisPoints: defineProperty.BasisPointsSchema.optional(),
  goLiveDate: zod.z.date().optional()
});
/**
 * @internal
 */

const NFTDropUpdateableConditionsOutputSchema = zod.z.object({
  price: CurrencyValueSchema,
  currencyAddress: zod.z.string().nullable(),
  primarySaleRecipient: zod.z.string(),
  sellerFeeBasisPoints: defineProperty.BasisPointsSchema,
  goLiveDate: zod.z.date().nullable(),
  totalAvailableSupply: zod.z.number(),
  lazyMintedSupply: zod.z.number(),
  isReadyToClaim: zod.z.boolean()
});
/**
 * @internal
 */

const NFTDropContractInputSchema = NFTCollectionMetadataInputSchema.merge(NFTDropInitialConditionsInputSchema);
/**
 * @public
 */

/**
 * @internal
 */

function enforceCreator() {
  let creators = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let owner = arguments.length > 1 ? arguments[1] : undefined;

  if (creators.length === 0) {
    // If no creators are specified, we assume the owner is the creator
    creators = creators.concat({
      address: owner.toBase58(),
      sharePercentage: 100,
      verified: true
    });
  }

  return creators.map(creator => ({
    verified: creator.verified || false,
    address: new web3_js.PublicKey(creator.address),
    share: creator.sharePercentage
  }));
}

/**
 * Deploy new programs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Instantiate the SDK and pass in a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Define the metadata for your program
 * const metadata = {
 *   name: "NFT Contract",
 *   image: readFileSync("files/image.jpg"),
 * };
 *
 * // And deploy a new program from the connected wallet
 * const address = await sdk.deployer.createNftCollection(metadata);
 * ```
 *
 * @public
 */
class Deployer {
  constructor(registry, metaplex, storage) {
    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "regsitry", void 0);

    this.metaplex = metaplex;
    this.storage = storage;
    this.regsitry = registry;
  }
  /**
   * Create a new token program
   * @param tokenMetadata - the metadata of the token program
   * @returns - the address of the new token program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My Token",
   *   symbol: "TKN",
   *   initialSupply: 100,
   * };
   *
   * const address = await sdk.deployer.createToken(metadata);
   * ```
   */


  async createToken(tokenMetadata) {
    const tokenMetadataParsed = TokenMetadataInputSchema.parse(tokenMetadata);
    const uri = await this.storage.upload(tokenMetadataParsed);
    const mint = web3_js.Keypair.generate();
    const owner = this.metaplex.identity().publicKey;
    const mintTx = await this.metaplex.tokens().builders().createTokenWithMint({
      decimals: tokenMetadataParsed.decimals,
      initialSupply: js.token(tokenMetadataParsed.initialSupply, tokenMetadataParsed.decimals),
      mint
    });
    const name = tokenMetadataParsed.name;
    const data = {
      name,
      symbol: tokenMetadataParsed.symbol || "",
      sellerFeeBasisPoints: 0,
      uri,
      creators: enforceCreator([], this.metaplex.identity().publicKey),
      collection: null,
      uses: null
    };
    const metadata = js.findMetadataPda(mint.publicKey);
    const metaTx = mplTokenMetadata.createCreateMetadataAccountV2Instruction({
      metadata,
      mint: mint.publicKey,
      mintAuthority: owner,
      payer: owner,
      updateAuthority: owner
    }, {
      createMetadataAccountArgsV2: {
        data,
        isMutable: false
      }
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(mint.publicKey, name, "token");
    await mintTx.add({
      instruction: metaTx,
      signers: [this.metaplex.identity()]
    }).append(...registryInstructions).sendAndConfirm(this.metaplex);
    return mint.publicKey.toBase58();
  }
  /**
   * Create a new NFT collection program
   * @param collectionMetadata - the metadata of the nft collection program
   * @returns - the address of the new nft collection program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My NFT Collection",
   *   symbol: "NFT",
   * };
   *
   * const address = await sdk.deployer.createNftCollection(metadata);
   * ```
   */


  async createNftCollection(collectionMetadata) {
    const parsed = NFTCollectionMetadataInputSchema.parse(collectionMetadata);
    const uri = await this.storage.upload(parsed);
    const collectionMint = web3_js.Keypair.generate();
    const name = parsed.name;
    const collectionTx = await this.metaplex.nfts().builders().create({
      useNewMint: collectionMint,
      name,
      symbol: parsed.symbol,
      sellerFeeBasisPoints: 0,
      uri,
      isCollection: true,
      creators: enforceCreator(parsed.creators, this.metaplex.identity().publicKey)
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(collectionMint.publicKey, name, "nft-collection");
    const result = await collectionTx.append(...registryInstructions).sendAndConfirm(this.metaplex);

    if (!result.response.signature) {
      throw new Error("Transaction failed");
    }

    return collectionMint.publicKey.toBase58();
  }
  /**
   * Create a new NFT drop program
   * @param metadata - the metadata of the nft drop program
   * @returns - the address of the new nft drop program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My NFT Drop",
   *   symbol: "NFT",
   *   itemsAvailable: 5,
   * };
   *
   * const address = await sdk.deployer.createNftDrop(metadata);
   * ```
   */


  async createNftDrop(metadata) {
    const collectionInfo = NFTCollectionMetadataInputSchema.parse(metadata);
    const candyMachineInfo = NFTDropInitialConditionsInputSchema.parse(metadata);
    const uri = await this.storage.upload(collectionInfo);
    const collectionMint = web3_js.Keypair.generate();
    const name = collectionInfo.name;
    const collectionTx = await this.metaplex.nfts().builders().create({
      useNewMint: collectionMint,
      name,
      symbol: collectionInfo.symbol,
      sellerFeeBasisPoints: 0,
      uri,
      isCollection: true,
      creators: enforceCreator(collectionInfo.creators, this.metaplex.identity().publicKey)
    });
    const candyMachineKeypair = web3_js.Keypair.generate(); // initialize candy machine with default config
    // final claim conditions can be updated later

    const candyMachineTx = await this.metaplex.candyMachines().builders().create({
      itemsAvailable: js.toBigNumber(candyMachineInfo.itemsAvailable),
      price: js.sol(0),
      sellerFeeBasisPoints: 0,
      candyMachine: candyMachineKeypair,
      collection: collectionMint.publicKey,
      creators: enforceCreator(collectionInfo.creators, this.metaplex.identity().publicKey)
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(candyMachineKeypair.publicKey, name, "nft-drop"); // Have to split transactions here because it goes over the single transaction size limit
    // We use `signAllTransactions` to sign all the transactions at once so the user only has to sign once

    const block = await this.metaplex.connection.getLatestBlockhash();
    const dropTx = collectionTx.add(candyMachineTx).setFeePayer(this.metaplex.identity()).setTransactionOptions({
      blockhash: block.blockhash,
      feePayer: this.metaplex.identity().publicKey,
      lastValidBlockHeight: block.lastValidBlockHeight
    });
    const regTx = js.TransactionBuilder.make().add(...registryInstructions).setFeePayer(this.metaplex.identity()).setTransactionOptions({
      blockhash: block.blockhash,
      feePayer: this.metaplex.identity().publicKey,
      lastValidBlockHeight: block.lastValidBlockHeight
    });
    const dropSigners = [this.metaplex.identity(), ...dropTx.getSigners()];
    const {
      keypairs
    } = js.getSignerHistogram(dropSigners);
    const dropTransaction = dropTx.toTransaction(); // partially sign with the PDA keypairs

    if (keypairs.length > 0) {
      dropTransaction.partialSign(...keypairs);
    } // make the connected wallet sign both candyMachine + registry transactions


    const signedTx = await this.metaplex.identity().signAllTransactions([dropTransaction, regTx.toTransaction()]); // send the signed transactions

    const signatures = await Promise.all(signedTx.map(async tx => await this.metaplex.connection.sendRawTransaction(tx.serialize()))); // wait for confirmations

    const confirmations = await Promise.all(signatures.map(sig => {
      return this.metaplex.rpc().confirmTransaction(sig);
    }));

    if (confirmations.length === 0) {
      throw new Error("Transaction failed");
    }

    return candyMachineKeypair.publicKey.toBase58();
  }

}

/**
 * @internal
 */

class NFTHelper {
  constructor(metaplex) {
    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "connection", void 0);

    this.metaplex = metaplex;
    this.connection = metaplex.connection;
  }

  async get(nftAddress) {
    const meta = await this.metaplex.nfts().findByMint({
      mintAddress: new web3_js.PublicKey(nftAddress)
    }).run();
    return await this.toNFTMetadata(meta);
  }

  async transfer(receiverAddress, nftAddress) {
    let quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    const result = await this.metaplex.nfts().send({
      mintAddress: new web3_js.PublicKey(nftAddress),
      toOwner: new web3_js.PublicKey(receiverAddress),
      amount: js.token(quantity, 0)
    }).run();
    return {
      signature: result.response.signature
    };
  }

  async balanceOf(walletAddress, nftAddress) {
    const address = await splToken.getAssociatedTokenAddress(new web3_js.PublicKey(nftAddress), new web3_js.PublicKey(walletAddress));

    try {
      const account = await splToken.getAccount(this.connection, address);
      return Number(account.amount);
    } catch (e) {
      return 0;
    }
  }

  async toNFTMetadata(meta) {
    let mint = "mint" in meta ? meta.mint : undefined;

    if (meta.model === "metadata") {
      const fetchedMint = await this.metaplex.nfts().findByMint({
        mintAddress: meta.mintAddress
      }).run();
      mint = fetchedMint.mint;
    }

    if (!mint) {
      throw new Error("No mint found for NFT");
    }

    const id = mint.address.toBase58();
    return {
      metadata: {
        id,
        uri: meta.uri,
        name: meta.name,
        symbol: meta.symbol,
        ...meta.json
      },
      owner: meta.updateAuthorityAddress.toBase58(),
      supply: mint.supply.basisPoints.toNumber(),
      type: "metaplex"
    };
  }

}

/**
 * @internal
 */
const METAPLEX_PROGRAM_ID = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
/**
 * @internal
 */

const TWREGISTRY_PROGRAM_ID = "twregzGdRmyFeAKjPgbPMkRkzgFNy8BHrB4HzwjyH14";

/**
 * A collection of associated NFTs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT collection program
 * const program = await sdk.getNFTCollection("{{contract_address}}");
 * ```
 *
 * @public
 */
class NFTCollection {
  get network() {
    const url = new URL(this.metaplex.connection.rpcEndpoint); // try this first to avoid hitting `custom` network for alchemy urls

    if (url.hostname.includes("devnet")) {
      return "devnet";
    }

    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }

    return this.metaplex.cluster;
  }

  constructor(collectionAddress, metaplex, storage) {
    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "nft", void 0);

    defineProperty._defineProperty(this, "publicKey", void 0);

    defineProperty._defineProperty(this, "accountType", "nft-collection");

    this.storage = storage;
    this.metaplex = metaplex;
    this.nft = new NFTHelper(metaplex);
    this.publicKey = new web3_js.PublicKey(collectionAddress);
  }
  /**
   * Get the metadata for this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata.name);
   * ```
   */


  async getMetadata() {
    const metadata = await this.metaplex.nfts().findByMint({
      mintAddress: this.publicKey
    }).run();
    return (await this.nft.toNFTMetadata(metadata)).metadata;
  }
  /**
   * Get the metadata for a specific NFT
   * @param nftAddress - the mint address of the NFT to get
   * @returns the metadata of the NFT
   *
   * @example
   * ```jsx
   * // Specify the mint address of the NFT to get the data of
   * const nftAddress = "...";
   * // And get the data for the NFT
   * const nft = await program.get(nftAddress);
   * console.log(nft.metadata.name);
   * console.log(nft.owner);
   * ```
   */


  async get(nftAddress) {
    return this.nft.get(nftAddress);
  }
  /**
   * Get the metadata for all NFTs on this collection
   * @returns metadata for all minted NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have been minted on this contract
   * const nfts = await program.getAll();
   * console.log(nfts[0].metadata.name);
   * console.log(nfts[0].owner);
   * ```
   */


  async getAll() {
    const addresses = await this.getAllNFTAddresses();
    return await Promise.all(addresses.map(async a => await this.get(a)));
  }
  /**
   * Get the mint addresses for all NFTs on this collection
   * @returns mint addresses for all minted NFTs
   *
   * @example
   * ```jsx
   * // Get just the addresses of the minted NFTs on this contract
   * const nftsAdresses = await program.getAllNFTAddresses();
   * console.log(nftsAdresses);
   * ```
   */


  async getAllNFTAddresses() {
    const allSignatures = []; // This returns the first 1000, so we need to loop through until we run out of signatures to get.

    let signatures = await this.metaplex.connection.getSignaturesForAddress(this.publicKey);
    allSignatures.push(...signatures);

    do {
      var _signatures;

      const options = {
        before: (_signatures = signatures[signatures.length - 1]) === null || _signatures === void 0 ? void 0 : _signatures.signature
      };
      signatures = await this.metaplex.connection.getSignaturesForAddress(this.publicKey, options);
      allSignatures.push(...signatures);
    } while (signatures.length > 0);

    const metadataAddresses = [];
    const mintAddresses = new Set(); // TODO RPC's will throttle this, need to do some optimizations here

    const batchSize = 1000; // alchemy RPC batch limit

    for (let i = 0; i < allSignatures.length; i += batchSize) {
      const batch = allSignatures.slice(i, Math.min(allSignatures.length, i + batchSize));
      const transactions = await this.metaplex.connection.getTransactions(batch.map(s => s.signature));

      for (const tx of transactions) {
        if (tx) {
          const programIds = tx.transaction.message.programIds().map(p => p.toString());
          const accountKeys = tx.transaction.message.accountKeys.map(p => p.toString()); // Only look in transactions that call the Metaplex token metadata program

          if (programIds.includes(METAPLEX_PROGRAM_ID)) {
            // Go through all instructions in a given transaction
            for (const ix of tx.transaction.message.instructions) {
              // Filter for setAndVerify or verify instructions in the Metaplex token metadata program
              if ((ix.data === "K" || ix.data === "S" || ix.data === "X") && accountKeys[ix.programIdIndex] === METAPLEX_PROGRAM_ID) {
                const metadataAddressIndex = ix.accounts[0];
                const metadata_address = tx.transaction.message.accountKeys[metadataAddressIndex];
                metadataAddresses.push(metadata_address);
              }
            }
          }
        }
      }
    }

    const metadataAccounts = await this.metaplex.rpc().getMultipleAccounts(metadataAddresses);

    for (const account of metadataAccounts) {
      if (account.exists) {
        const [metadata] = mplTokenMetadata.Metadata.deserialize(account.data);
        mintAddresses.add(metadata.mint.toBase58());
      }
    }

    return Array.from(mintAddresses);
  }
  /**
   * Get the NFT balance of the connected wallet
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the NFT balance of the currently connected wallet
   * const balance = await program.balance(nftAddress);
   * console.log(balance);
   * ```
   */


  async balance(nftAddress) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.balanceOf(address, nftAddress);
  }
  /**
   * Get the NFT balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @param nftAddress - the mint address of the NFT to get the balance of
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // Specify the address of the wallet to get the balance of
   * const walletAddress = "..."
   * // Specify the mint address of the NFT to get the balance of
   * const nftAddress = "..."
   * const balance = await program.balanceOf(walletAddress, nftAddress);
   * ```
   */


  async balanceOf(walletAddress, nftAddress) {
    return this.nft.balanceOf(walletAddress, nftAddress);
  }
  /**
   * Get the supply of NFT editions minted from a specific NFT
   * @param nftAddress - the mint address of the NFT to check the supply of
   * @returns the supply of the specified NFT
   *
   * @example
   * ```jsx
   * const address = "...";
   * const supply = await program.supplyOf(addres);
   * ```
   */


  async supplyOf(nftAddress) {
    let editionMarkerNumber = 0;
    let totalSupply = 1;

    cursedBitwiseLogicLoop: while (true) {
      const editionMarkerAddress = js.findEditionMarkerPda(new web3_js.PublicKey(nftAddress), js.toBigNumber(editionMarkerNumber * 248));
      const editionMarker = await mplTokenMetadata.EditionMarker.fromAccountAddress(this.metaplex.connection, editionMarkerAddress); // WARNING: Ugly bitwise operations because of Rust :(

      const indexCap = editionMarkerNumber === 0 ? 247 : 248;

      for (let editionIndex = 0; editionIndex < indexCap; editionIndex++) {
        const ledgerIndex = editionMarkerNumber > 0 ? Math.floor(editionIndex / 8) : editionIndex < 7 ? 0 : Math.floor((editionIndex - 7) / 8) + 1;
        const size = editionMarkerNumber === 0 && ledgerIndex === 0 ? 7 : 8;
        const shiftBase = 0b1 << size - 1;
        const bitmask = ledgerIndex === 0 ? shiftBase >> editionIndex : editionMarkerNumber > 0 ? shiftBase >> editionIndex % (ledgerIndex * 8) : ledgerIndex === 1 ? shiftBase >> editionIndex - 7 : shiftBase >> (editionIndex - 7) % ((ledgerIndex - 1) * 8);
        const editionExists = (editionMarker.ledger[ledgerIndex] & bitmask) !== 0;

        if (editionExists) {
          totalSupply += 1;
        } else {
          break cursedBitwiseLogicLoop;
        }
      }

      editionMarkerNumber++;
    }

    return BigInt(totalSupply);
  }
  /**
   * Transfer the specified NFTs to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param nftAddress - The mint address of the NFT to transfer
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // The wallet address to transfer the NFTs to
   * const to = "...";
   * // The mint address of the NFT to transfer
   * const nftAddress = "...";
   * const tx = await program.transfer(to, nftAddress);
   * ```
   */


  async transfer(receiverAddress, nftAddress) {
    return this.nft.transfer(receiverAddress, nftAddress);
  }
  /**
   * Mint NFTs to the connected wallet
   * @param metadata - the metadata of the NFT to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Add the metadata of your NFT
   * const metadata = {
   *   name: "NFT #1",
   *   description: "My first NFT!",
   *   image: readFileSync("files/image.jpg"),
   *   properties: [
   *     {
   *        name: "coolness",
   *        value: "very cool!"
   *     }
   *   ]
   * }
   *
   * // Then mint the new NFT and get its address
   * const address = await program.mint(metadata);
   * console.log(address);
   * ```
   */


  async mint(metadata) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.mintTo(address, metadata);
  }
  /**
   * Mint an NFT to the specified wallet
   * @param to - the address to mint the NFT to
   * @param metadata - the metadata of the NFT to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Specify who to mint the NFT to
   * const to = "...";
   *
   * // Add the metadata of your NFT
   * const metadata = {
   *   name: "NFT #1",
   *   description: "My first NFT!",
   *   image: readFileSync("files/image.jpg"),
   *   properties: [
   *     {
   *        name: "coolness",
   *        value: "very cool!"
   *     }
   *   ]
   * }
   *
   * // Then mint the new NFT and get its address
   * const address = await program.mintTo(to, metadata);
   * console.log(address);
   * ```
   */


  async mintTo(to, metadata) {
    var _metadata$name;

    // TODO add options param for initial/maximum supply
    const uri = typeof metadata === "string" ? metadata : await this.storage.upload(metadata);
    const name = typeof metadata === "string" ? "" : ((_metadata$name = metadata.name) === null || _metadata$name === void 0 ? void 0 : _metadata$name.toString()) || "";
    const {
      nft
    } = await this.metaplex.nfts().create({
      name,
      uri,
      sellerFeeBasisPoints: 0,
      collection: this.publicKey,
      collectionAuthority: this.metaplex.identity(),
      tokenOwner: new web3_js.PublicKey(to),
      // Always sets max supply to unlimited so editions can be minted
      maxSupply: null
    }).run();
    return nft.address.toBase58();
  }
  /**
   * Mint additional supply of an NFT to the connected wallet
   * @param nftAddress - the mint address to mint additional supply to
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // The address of the already minted NFT
   * const nftAddress = "..."
   * // Mint an additional NFT of the original NFT
   * const address = await program.mintAdditionalSupply(nftAddress);
   * ```
   */


  async mintAdditionalSupply(nftAddress) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.mintAdditionalSupplyTo(address, nftAddress);
  }
  /**
   * Mint additional supply of an NFT to the specified wallet
   * @param to - the address to mint the NFT to
   * @param nftAddress - the mint address to mint additional supply to
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Specify who to mint the additional NFT to
   * const to = "..."
   * // The address of the already minted NFT
   * const nftAddress = "..."
   * // Mint an additional NFT of the original NFT
   * const address = await program.mintAdditionalSupplyTo(to, nftAddress);
   * ```
   */


  async mintAdditionalSupplyTo(to, nftAddress) {
    // TODO add quantity param
    const result = await this.metaplex.nfts().printNewEdition({
      originalMint: new web3_js.PublicKey(nftAddress),
      newOwner: new web3_js.PublicKey(to)
    }).run();
    return result.nft.address.toBase58();
  }
  /**
   * Burn an NFT
   * @param nftAddress - the mint address of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress = "..."
   * // And send the actual burn transaction
   * const tx = await program.burn(nftAddress);
   * ```
   */


  async burn(nftAddress) {
    const tx = await this.metaplex.nfts().delete({
      mintAddress: new web3_js.PublicKey(nftAddress),
      collection: this.publicKey
    }).run();
    return {
      signature: tx.response.signature
    };
  }
  /**
   * Update the settings of the collection
   * @param settings - the settings to update
   */


  async updateSettings(settings) {
    const updateData = { ...(settings.creators && {
        creators: enforceCreator(settings.creators, this.metaplex.identity().publicKey)
      })
    };
    this.metaplex.nfts().update({
      nftOrSft: await this.getCollection(),
      ...updateData
    });
  }

  async getCollection() {
    return await this.metaplex.nfts().findByMint({
      mintAddress: this.publicKey
    }).run();
  }

}

/**
 * Set the claim conditions for your NFT Drop to control how people can claim NFTs
 *
 * @example
 * ```jsx
 * const program = await sdk.getNFTDrop("{{contract_address}}");
 *
 * // Get the data of the claim condition on the drop
 * const claimCondition = await program.claimConditions.get();
 * // View the price of the drop
 * console.log(claimCondition.price);
 * // View the date when the drop will go live
 * console.log(claimCondition.goLiveDate);
 * ```
 *
 * @public
 */

class ClaimConditions {
  constructor(dropAddress, metaplex) {
    defineProperty._defineProperty(this, "dropMintAddress", void 0);

    defineProperty._defineProperty(this, "metaplex", void 0);

    this.dropMintAddress = new web3_js.PublicKey(dropAddress);
    this.metaplex = metaplex;
  }
  /**
   * Get the claim condition for this contract
   * @returns - The claim condition data for this NFT Drop
   *
   * @example
   * ```jsx
   * // Get the data of the claim condition on the drop
   * const claimCondition = await program.claimConditions.get();
   * // View the price of the drop
   * console.log(claimCondition.price);
   * // View the date when the drop will go live
   * console.log(claimCondition.goLiveDate);
   * ```
   */


  async get() {
    var _candyMachine$tokenMi;

    const candyMachine = await this.getCandyMachine();
    const totalAvailableSupply = candyMachine.itemsAvailable.toNumber();
    const lazyMintedSupply = candyMachine.itemsLoaded.toNumber();
    const goLiveDate = candyMachine.goLiveDate ? new Date(candyMachine.goLiveDate.toNumber() * 1000) : null;
    const isWithinGoLiveDate = candyMachine.goLiveDate ? candyMachine.goLiveDate.toNumber() * 1000 >= Date.now() : true; // TODO add allowlist/hidden settings here

    return {
      price: toCurrencyValue(candyMachine.price),
      currencyAddress: ((_candyMachine$tokenMi = candyMachine.tokenMintAddress) === null || _candyMachine$tokenMi === void 0 ? void 0 : _candyMachine$tokenMi.toBase58()) || null,
      primarySaleRecipient: candyMachine.walletAddress.toBase58(),
      sellerFeeBasisPoints: candyMachine.sellerFeeBasisPoints,
      goLiveDate,
      totalAvailableSupply,
      lazyMintedSupply,
      isReadyToClaim: candyMachine.isFullyLoaded && isWithinGoLiveDate
    };
  }
  /**
   * Set the claim condition settings to configure how people can claim your NFT Drop
   * @param metadata - The settings to use for the claim condition of this program
   * @returns - The transaction result of setting the claim condition
   *
   * @example
   * ```jsx
   * // Specify the settings for your claim condition
   * const claimCondition = {
   *   // The price of each NFT in this drop (in SOL or SPL tokens)
   *   price: 0.1,
   *   // The date for this drop to start
   *   goLiveDate: new Date(),
   *   // ...
   * };
   *
   * const tx = await program.claimConditions.set(claimCondition);
   * ```
   */


  async set(metadata) {
    const parsed = NFTDropUpdateableConditionsInputSchema.parse(metadata); // recipients

    const wallet = parsed.primarySaleRecipient ? new web3_js.PublicKey(parsed.primarySaleRecipient) : undefined;
    const sellerFeeBasisPoints = parsed.sellerFeeBasisPoints; // price

    let price = parsed.price ? js.sol(Number(parsed.price)) : undefined;
    let tokenMint = undefined;

    if (parsed.currencyAddress && parsed.price) {
      const fetchedToken = await this.metaplex.tokens().findMintByAddress({
        address: new web3_js.PublicKey(parsed.currencyAddress)
      }).run();
      price = js.token(Number(parsed.price), fetchedToken.decimals);
      tokenMint = fetchedToken.address;
    } // dates


    const goLiveDate = parsed.goLiveDate ? js.toDateTime(parsed.goLiveDate) : undefined; // TODO add allowlist/hidden settings here

    const data = { ...(wallet && {
        wallet
      }),
      ...(tokenMint && {
        tokenMint
      }),
      ...(price && {
        price
      }),
      ...(goLiveDate && {
        goLiveDate
      }),
      ...(sellerFeeBasisPoints && {
        sellerFeeBasisPoints
      })
    };
    const result = await this.metaplex.candyMachines().update({
      candyMachine: await this.getCandyMachine(),
      ...data
    }).run();
    return {
      signature: result.response.signature
    };
  }

  async getCandyMachine() {
    return this.metaplex.candyMachines().findByAddress({
      address: this.dropMintAddress
    }).run();
  }

}

/**
 * A collection of NFTs that can be lazy minted and claimed
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT Drop program
 * const program = await sdk.getNFTDrop("{{contract_address}}");
 * ```
 *
 * @public
 */

class NFTDrop {
  get network() {
    const url = new URL(this.metaplex.connection.rpcEndpoint); // try this first to avoid hitting `custom` network for alchemy urls

    if (url.hostname.includes("devnet")) {
      return "devnet";
    }

    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }

    return this.metaplex.cluster;
  }

  constructor(dropAddress, metaplex, storage) {
    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "nft", void 0);

    defineProperty._defineProperty(this, "accountType", "nft-drop");

    defineProperty._defineProperty(this, "publicKey", void 0);

    defineProperty._defineProperty(this, "claimConditions", void 0);

    this.storage = storage;
    this.metaplex = metaplex;
    this.nft = new NFTHelper(metaplex);
    this.publicKey = new web3_js.PublicKey(dropAddress);
    this.claimConditions = new ClaimConditions(dropAddress, metaplex);
  }
  /**
   * Get the metadata for this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata.name);
   * ```
   */


  async getMetadata() {
    const info = await this.getCandyMachine();
    invariant__default["default"](info.collectionMintAddress, "Collection mint address not found");
    const metadata = await this.metaplex.nfts().findByMint({
      mintAddress: info.collectionMintAddress
    }).run();
    return (await this.nft.toNFTMetadata(metadata)).metadata;
  }
  /**
   * Get the metadata for a specific NFT
   * @param nftAddress - the mint address of the NFT to get
   * @returns the metadata of the NFT
   *
   * @example
   * ```jsx
   * // Specify the mint address of the NFT to get the data of
   * const nftAddress = "...";
   * // And get the data for the NFT
   * const nft = await program.get(nftAddress);
   *
   * console.log(nft.name);
   * ```
   */


  async get(nftAddress) {
    return this.nft.get(nftAddress);
  }
  /**
   * Get the metadata for all NFTs on this drop
   * @returns metadata for all minted NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have been minted on this contract
   * const nfts = await program.getAll();
   *
   * console.log(nfts[0].metadata.name);
   * ```
   */


  async getAll() {
    // TODO: Add pagination to get NFT functions
    const info = await this.getCandyMachine();
    const claimed = await this.getAllClaimed();
    return await Promise.all(info.items.map(async item => {
      // Check if the NFT has been claimed
      // TODO: This only checks name/uri which is potentially not unique
      const claimedNFT = claimed.find(nft => nft.metadata.name === item.name && nft.metadata.uri === item.uri);

      if (claimedNFT) {
        return claimedNFT;
      } // not claimed yet, return a unclaimed NFT with just the metadata


      const metadata = await this.storage.downloadJSON(item.uri);
      return {
        metadata: { ...metadata,
          id: web3_js.PublicKey.default.toBase58(),
          uri: item.uri
        },
        owner: web3_js.PublicKey.default.toBase58(),
        supply: 0,
        type: "metaplex"
      };
    }));
  }
  /**
   * Get the metadata for all the claimed NFTs on this drop
   * @returns metadata for all claimed NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have already been claimed from this drop
   * const nfts = await program.getAllClaimed();
   * console.log(nfts[0].name)
   * ```
   */


  async getAllClaimed() {
    const nfts = await this.metaplex.candyMachines().findMintedNfts({
      candyMachine: this.publicKey
    }).run();
    return await Promise.all(nfts.map(async nft => this.nft.toNFTMetadata(nft)));
  }
  /**
   * Get the NFT balance of the connected wallet
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the NFT balance of the currently connected wallet
   * const balance = await program.balance(nftAddress);
   * console.log(balance);
   * ```
   */


  async balance(nftAddress) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.balanceOf(address, nftAddress);
  }
  /**
   * Get the NFT balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @param nftAddress - the mint address of the NFT to get the balance of
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The address of the wallet to check the balance of
   * const walletAddress = "..."
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the actual NFT balance of the specified wallet
   * const balance = await program.balanceOf(walletAddress, nftAddress);
   * ```
   */


  async balanceOf(walletAddress, nftAddress) {
    return this.nft.balanceOf(walletAddress, nftAddress);
  }
  /**
   * Get the total unclaimed supply of this drop
   * @returns the total supply
   *
   * @example
   * ```jsx
   * // Get the total number of lazy minted NFTs that aren't yet claimed
   * const supply = await program.totalUnclaimedSupply();
   * ```
   */


  async totalUnclaimedSupply() {
    const info = await this.getCandyMachine();
    return Math.min(info.itemsLoaded.toNumber(), info.itemsRemaining.toNumber());
  }
  /**
   * Get the total claimed supply of this drop
   * @returns the total supply
   *
   * @example
   * ```jsx
   * // Get the total number of lazy minted NFTs that have already been claimed
   * const supply = await program.totalClaimedSupply();
   * ```
   */


  async totalClaimedSupply() {
    const info = await this.getCandyMachine();
    return info.itemsMinted.toNumber();
  }
  /**
   * Transfer the specified NFTs to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param nftAddress - The mint address of the NFT to transfer
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // The wallet address to transfer the NFTs to
   * const to = "...";
   * // The mint address of the NFT to transfer
   * const nftAddress = "...";
   * const tx = await program.transfer(to, nftAddress);
   * ```
   */


  async transfer(receiverAddress, nftAddress) {
    return this.nft.transfer(receiverAddress, nftAddress);
  }
  /**
   * Lazy mint NFTs to be claimed later
   * @param metadatas - The metadata of the NFTs to lazy mint
   * @returns the transaction result of the lazy mint
   *
   * @example
   * ```jsx
   * // Add the metadata of your NFTs
   * const metadata = [
   *   {
   *     name: "NFT #1",
   *     description: "My first NFT!",
   *     image: readFileSync("files/image.jpg"),
   *     properties: [
   *       {
   *         name: "coolness",
   *         value: "very cool!"
   *       }
   *     ]
   *   }
   * ];
   *
   * // And lazy mint NFTs to your program
   * const tx = await program.lazyMint(metadatas);
   * ```
   */


  async lazyMint(metadatas, options) {
    const candyMachine = await this.getCandyMachine();
    const parsedMetadatas = metadatas.map(metadata => defineProperty.CommonNFTInput.parse(metadata));
    const uris = await this.storage.uploadBatch(parsedMetadatas, options);
    const items = uris.map((uri, i) => {
      var _parsedMetadatas$i$na;

      return {
        name: ((_parsedMetadatas$i$na = parsedMetadatas[i].name) === null || _parsedMetadatas$i$na === void 0 ? void 0 : _parsedMetadatas$i$na.toString()) || "",
        uri
      };
    });
    const result = await this.metaplex.candyMachines().insertItems({
      candyMachine,
      authority: this.metaplex.identity(),
      items
    }).run();
    return {
      signature: result.response.signature
    };
  }
  /**
   * Claim an NFT from the drop with connected wallet
   * @returns - the mint address of the claimed NFT
   *
   * @example
   * ```jsx
   * // Specify the quantity of NFTs to claim
   * const quantity = 1;
   * // Claim NFTs and get their mint addresses
   * const claimedAddresses = await program.claim(quantity);
   * console.log("Claimed NFT at address", claimedAddresses[0]);
   * ```
   */


  async claim(quantity) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.claimTo(address, quantity);
  }
  /**
   * Claim an NFT from the drop for the specified wallet
   * @returns - the mint address of the claimed NFT
   *
   * @example
   * ```jsx
   * // Specify which address to claim the NFTs to
   * const receiverAddress =  "...";
   * // Claim the NFTs to the specified wallet and get the mint addresses of the NFTs
   * const claimedAddresses = await program.claimTo(receiverAddress, 1);
   * console.log("Claimed NFT at address", claimedAddresses[0]);
   * ```
   */


  async claimTo(receiverAddress, quantity) {
    const candyMachine = await this.getCandyMachine();

    if (!candyMachine.isFullyLoaded) {
      throw new Error(`Drop is not to be claimed - Only ${candyMachine.itemsLoaded} out of ${candyMachine.itemsAvailable} NFTs have been lazy minted`);
    }

    const results = []; // has to claim sequentially

    for (let i = 0; i < quantity; i++) {
      results.push(await this.metaplex.candyMachines().mint({
        candyMachine,
        newOwner: new web3_js.PublicKey(receiverAddress)
      }).run());
    }

    return results.map(result => result.nft.address.toBase58());
  }
  /**
   * Burn an NFT
   * @param nftAddress - the mint address of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress = "..."
   * // And send the actual burn transaction
   * const tx = await program.burn(nftAddress);
   * ```
   */


  async burn(nftAddress) {
    const candyMachine = await this.getCandyMachine();
    const collection = candyMachine.collectionMintAddress ? candyMachine.collectionMintAddress : undefined;
    const tx = await this.metaplex.nfts().delete({
      mintAddress: new web3_js.PublicKey(nftAddress),
      collection
    }).run();
    return {
      signature: tx.response.signature
    };
  }

  async getCandyMachine() {
    return this.metaplex.candyMachines().findByAddress({
      address: this.publicKey
    }).run();
  }

}

/**
 * Dynamic interface for interacting with Solana programs.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your program
 * const program = await sdk.getProgram("{{contract_address}}");
 * ```
 *
 * @public
 */

class Program {
  constructor(programAddress, idl, connection, wallet) {
    defineProperty._defineProperty(this, "program", void 0);

    defineProperty._defineProperty(this, "publicKey", void 0);

    defineProperty._defineProperty(this, "accountType", "program");

    defineProperty._defineProperty(this, "network", void 0);

    this.publicKey = new web3_js.PublicKey(programAddress);
    this.network = js.resolveClusterFromConnection(connection);
    anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    this.program = new anchor.Program(idl, programAddress);
    wallet.events.on("connected", () => {
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
    wallet.events.on("disconnected", () => {
      // identity will be guest in this case
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
  }
  /**
   * Call a function on this program
   * @param functionName - Name of the function to call
   * @param args - Arguments to pass to the function including accounts, data, and signers
   * @returns result of the contract call
   *
   * @example
   * ```jsx
   * const counterAccount = Keypair.generate();
   * await program.call("increment", {
   *   // We need to pass in the public keys of any accounts to interact with
   *   accounts: {
   *     counterAccount: counterAccount.publicKey.toBase58(),
   *   },
   *   // As well as the arguments to pass to the data parameters
   *   data: ["..."],
   *   // And the signer of the account that will be signing the message
   *   signers: [counterAccount]
   * })
   * ```
   */


  async call(functionName, args) {
    return await this.prepareCall(functionName, args).rpc();
  }

  prepareCall(functionName, args) {
    const fn = this.program.methods[functionName];

    if (!fn) {
      throw new Error(`Function ${functionName} not found`);
    }

    const fnWithArgs = args.data ? fn(...args.data) : fn();
    return fnWithArgs.accounts(args.accounts).signers(args.signers || []);
  }
  /**
   * Read account data associated with this program
   * @param accountName - The name of the account type to fetch the data of
   * @param address - The address of the specific account to fetch
   * @returns - The data of the requested account
   *
   * @example
   * ```jsx
   * const accountAddress = "...";
   * // Get the counterAccount at specified address
   * const counterAccount = await program.fetch("counterAccount", accountaddress);
   * ```
   */


  async fetch(accountName, address) {
    const account = this.program.account[accountName];

    if (!account) {
      throw new Error(`Account ${account} not found`);
    }

    return await account.fetch(address);
  }
  /**
   * Read multiple accounts data associated with this program
   * @param accountName - The name of the account type to fetch the data of
   * @param addresses - The addresses of the each account to fetch
   * @returns - The data of the requested accounts
   *
   * @example
   * ```jsx
   * const accountAddresses = ["...", "..."];
   * const counterAccounts = await program.fetchMultiple("counterAccount", accountAddresses);
   * ```
   */


  async fetchMultiple(accountName, addresses) {
    const account = this.program.account[accountName];

    if (!account) {
      throw new Error(`Account ${account} not found`);
    }

    return (await account.fetchMultiple(addresses)).filter(a => a !== null);
  }

}

var program = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Program: Program
});

/**
 * Standard token or cryptocurrency.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your token program
 * const program = await sdk.getToken("{{contract_address}}");
 * ```
 *
 * @public
 */
class Token {
  get network() {
    const url = new URL(this.metaplex.connection.rpcEndpoint); // try this first to avoid hitting `custom` network for alchemy urls

    if (url.hostname.includes("devnet")) {
      return "devnet";
    }

    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }

    return this.metaplex.cluster;
  }

  constructor(tokenAddress, metaplex, storage) {
    defineProperty._defineProperty(this, "connection", void 0);

    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "accountType", "token");

    defineProperty._defineProperty(this, "publicKey", void 0);

    this.storage = storage;
    this.metaplex = metaplex;
    this.connection = metaplex.connection;
    this.publicKey = new web3_js.PublicKey(tokenAddress);
  }
  /**
   * Get the metadata for this token including the name, supply, and decimals.
   * @returns Token metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata.supply);
   * console.log(metadata.decimals);
   * ```
   */


  async getMetadata() {
    const mint = await this.getMint();
    const addr = js.findMetadataPda(this.publicKey);
    const account = await this.metaplex.rpc().getAccount(addr);
    const meta = js.toMetadata(js.toMetadataAccount(account));
    return { ...meta.json,
      id: meta.address.toBase58(),
      uri: meta.uri,
      name: meta.name,
      symbol: meta.symbol,
      decimals: mint.decimals,
      supply: toCurrencyValue(mint.supply)
    };
  }
  /**
   * Get the total minted supply of this token
   * @returns the total supply
   *
   * @example
   * ```jsx
   * const supply = await program.totalSupply();
   * ```
   */


  async totalSupply() {
    const info = await this.getMint();
    return toCurrencyValue(info.supply);
  }
  /**
   * Mints the specified amount of new tokens to the connected wallet
   * @param amount - The amount of tokens to mint
   * @returns the transaction result of the mint
   *
   * @example
   * ```jsx
   * // Specify the amount of tokens to mint
   * const amount = 1;
   * // And then you can mint the tokens
   * const tx = await program.mint(amount);
   * ```
   */


  async mint(amount) {
    return this.mintTo(this.metaplex.identity().publicKey.toBase58(), amount);
  }
  /**
   * Mints the specified amount of new tokens to a specific wallet
   * @param amount - The amount of tokens to mint
   * @returns the transaction result of the mint
   *
   * @example
   * ```jsx
   * // Specify the address to mint tokens to
   * const address = "{{wallet_address}}"";
   * // And the amount of tokens to mint
   * const amount = 1;
   * // And then you can make a mint transaction
   * const tx = await program.mintTo(address, 1);
   * ```
   */


  async mintTo(receiverAddress, amount) {
    const amountParsed = AmountSchema.parse(amount);
    const info = await this.getMint();
    const result = await this.metaplex.tokens().mint({
      amount: js.token(amountParsed, info.decimals),
      mintAddress: this.publicKey,
      toOwner: new web3_js.PublicKey(receiverAddress)
    }).run();
    return {
      signature: result.response.signature
    };
  }
  /**
   * Transfer the specified amount of tokens to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param amount - The amount of tokens to send
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // Specify the address to transfer tokens to
   * const to = "...";
   * // And the amount of tokens to transfer
   * const amount = 1;
   * // And then you can make the transfer transaction
   * const tx = await program.transfer(to, amount);
   * ```
   */


  async transfer(receiverAddress, amount) {
    const info = await this.getMint();
    const result = await this.metaplex.tokens().send({
      mintAddress: this.publicKey,
      amount: js.token(amount, info.decimals),
      toOwner: new web3_js.PublicKey(receiverAddress)
    }).run();
    return {
      signature: result.response.signature
    };
  }
  /**
   * Get the token balance of the connected wallet
   * @returns the currency value balance
   *
   * @example
   * ```jsx
   * const balance = await program.balance();
   * console.log(balance.displayValue);
   * ```
   */


  async balance() {
    return this.balanceOf(this.metaplex.identity().publicKey.toBase58());
  }
  /**
   * Get the token balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @returns the currency value balance
   *
   * @example
   * ```jsx
   * const address = "..."
   * const balance = await program.balanceOf(address);
   * console.log(balance.displayValue);
   * ```
   */


  async balanceOf(walletAddress) {
    const mint = await this.getMint();
    const addr = await splToken.getAssociatedTokenAddress(this.publicKey, new web3_js.PublicKey(walletAddress));

    try {
      const account = await splToken.getAccount(this.connection, addr);
      return toCurrencyValue({
        basisPoints: js.toBigNumber(account.amount.toString()),
        currency: {
          symbol: "",
          decimals: mint.decimals,
          namespace: "spl-token"
        }
      });
    } catch (e) {
      throw Error(`No balance found for address '${walletAddress}' - ${e}`);
    }
  }

  async getMint() {
    return await this.metaplex.tokens().findMintByAddress({
      address: this.publicKey
    }).run(); // TODO abstract types away
  }

}

var TWRegistryIDL = {
	version: "0.1.0",
	name: "tw_registry",
	instructions: [
		{
			name: "initializeRegistrar",
			accounts: [
				{
					name: "registrarAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: true,
					isSigner: true
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false
				}
			],
			args: [
			]
		},
		{
			name: "register",
			accounts: [
				{
					name: "registrarAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "registeredProgramAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: true,
					isSigner: true
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false
				}
			],
			args: [
				{
					name: "programAddress",
					type: "publicKey"
				},
				{
					name: "programName",
					type: "string"
				},
				{
					name: "programType",
					type: "string"
				}
			]
		},
		{
			name: "setVisibility",
			accounts: [
				{
					name: "registeredProgramAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: false,
					isSigner: true
				}
			],
			args: [
				{
					name: "programIndex",
					type: "u64"
				},
				{
					name: "visible",
					type: "bool"
				}
			]
		}
	],
	accounts: [
		{
			name: "RegistrarAccount",
			type: {
				kind: "struct",
				fields: [
					{
						name: "count",
						type: "u64"
					},
					{
						name: "authority",
						type: "publicKey"
					},
					{
						name: "bump",
						type: "u8"
					}
				]
			}
		},
		{
			name: "RegisteredProgramAccount",
			type: {
				kind: "struct",
				fields: [
					{
						name: "authority",
						type: "publicKey"
					},
					{
						name: "programAddress",
						type: "publicKey"
					},
					{
						name: "programName",
						type: "string"
					},
					{
						name: "programType",
						type: "string"
					},
					{
						name: "visible",
						type: "bool"
					},
					{
						name: "bump",
						type: "u8"
					}
				]
			}
		}
	],
	events: [
		{
			name: "RegistrarInitializedEvent",
			fields: [
				{
					name: "authority",
					type: "publicKey",
					index: false
				}
			]
		},
		{
			name: "ProgramRegisteredEvent",
			fields: [
				{
					name: "authority",
					type: "publicKey",
					index: false
				},
				{
					name: "programAddress",
					type: "publicKey",
					index: false
				},
				{
					name: "programName",
					type: "string",
					index: false
				},
				{
					name: "programType",
					type: "string",
					index: false
				}
			]
		}
	],
	metadata: {
		address: "twregzGdRmyFeAKjPgbPMkRkzgFNy8BHrB4HzwjyH14"
	}
};

/**
 * @internal
 */

class Registry {
  constructor(metaplex, userWallet) {
    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "twRegistry", void 0);

    this.metaplex = metaplex;
    this.twRegistry = new Program(TWREGISTRY_PROGRAM_ID, TWRegistryIDL, this.metaplex.connection, userWallet);
  }

  async getProgramType(address) {
    try {
      const candyMachine = await this.metaplex.candyMachines().findByAddress({
        address: new web3_js.PublicKey(address)
      }).run();

      if (candyMachine) {
        return "nft-drop";
      }
    } catch (err) {// ignore and try next
    }

    const metadata = await this.metaplex.nfts().findByMint({
      mintAddress: new web3_js.PublicKey(address)
    }).run();

    if (metadata) {
      if (metadata.collectionDetails) {
        return "nft-collection";
      } else {
        if (metadata.tokenStandard === mplTokenMetadata.TokenStandard.Fungible) {
          return "token";
        }
      }
    }

    throw new Error("Unknown account type");
  }

  async getDeployedPrograms(walletAddress) {
    const wallet = new web3_js.PublicKey(walletAddress);
    const count = await this.getTotalProgramsRegistered(wallet);
    const programAddresses = [];

    for (let i = 0; i < count; i++) {
      programAddresses.push(this.getRegisteredProgramAddress(wallet, i).toBase58());
    }

    const programsRaw = await this.twRegistry.fetchMultiple("registeredProgramAccount", programAddresses);
    return programsRaw.map(raw => this.toRegisteredProgram(raw));
  }

  async getTotalProgramsRegistered(wallet) {
    const accountExists = await this.registrarAccountExists(wallet);

    if (!accountExists) {
      return 0;
    }

    const registrarPda = this.getRegistrarAddress(wallet);
    const data = await this.twRegistry.fetch("registrarAccount", registrarPda.toBase58());
    return data.count.toNumber();
  }

  async getProgramAt(wallet, index) {
    const pda = this.getRegisteredProgramAddress(wallet, index);
    const data = await this.twRegistry.fetch("registeredProgramAccount", pda.toBase58());
    return this.toRegisteredProgram(data);
  }

  getRegistrarAddress(wallet) {
    return js.Pda.find(new web3_js.PublicKey(TWREGISTRY_PROGRAM_ID), [_.Buffer.from("registrar", "utf8"), wallet.toBuffer()]);
  }

  getRegisteredProgramAddress(wallet, index) {
    return js.Pda.find(new web3_js.PublicKey(TWREGISTRY_PROGRAM_ID), [_.Buffer.from("registered_program"), wallet.toBuffer(), _.Buffer.from(index.toString())]);
  }
  /**
   * @internal
   */


  async getAddToRegistryInstructions(programToAdd, programName, programType) {
    const wallet = this.metaplex.identity().publicKey;
    const instructions = [];
    const registrarAccountExists = await this.registrarAccountExists(wallet);

    if (!registrarAccountExists) {
      instructions.push({
        instruction: (await this.getInitializeRegistrarTransaction(wallet)).instructions[0],
        signers: [this.metaplex.identity()]
      });
    }

    instructions.push({
      instruction: (await this.getRegisterProgramTransaction(wallet, programToAdd, programName, programType)).instructions[0],
      signers: [this.metaplex.identity()]
    });
    return instructions;
  }

  async getInitializeRegistrarTransaction(wallet) {
    const registrarPda = this.getRegistrarAddress(wallet);
    return this.twRegistry.prepareCall("initializeRegistrar", {
      accounts: {
        authority: wallet.toBase58(),
        registrarAccount: registrarPda.toBase58()
      }
    }).transaction();
  }

  async getRegisterProgramTransaction(wallet, programAddress, programName, programType) {
    const registrarPda = this.getRegistrarAddress(wallet);
    const registeredProgramAddress = this.getRegisteredProgramAddress(wallet, await this.getTotalProgramsRegistered(wallet));
    return this.twRegistry.prepareCall("register", {
      accounts: {
        authority: wallet.toBase58(),
        registrarAccount: registrarPda.toBase58(),
        registeredProgramAccount: registeredProgramAddress.toBase58()
      },
      data: [programAddress, programName, programType]
    }).transaction();
  }

  async registrarAccountExists(wallet) {
    const registrarPda = this.getRegistrarAddress(wallet);
    const account = await this.metaplex.rpc().getAccount(registrarPda);
    return account.exists;
  }

  getDropForCollection(candyMachines, meta) {
    return candyMachines.find(candyMachine => {
      var _candyMachine$collect;

      return ((_candyMachine$collect = candyMachine.collectionMintAddress) === null || _candyMachine$collect === void 0 ? void 0 : _candyMachine$collect.toBase58()) === meta.mintAddress.toBase58();
    });
  } // TODO probably don't need this anymore, rely on registry instead


  async getOwnedTokenAccounts(walletAddress) {
    const mints = await this.getOwnedTokenAddreses(walletAddress);
    const metadatas = await this.metaplex.nfts().findAllByMintList({
      mints
    }).run();
    const candyMachines = await this.metaplex.candyMachines().findAllBy({
      type: "authority",
      publicKey: new web3_js.PublicKey(walletAddress)
    }).run();
    return metadatas.map(mintMetadata => {
      const meta = mintMetadata;

      if (!meta) {
        return undefined;
      }

      if (meta !== null && meta !== void 0 && meta.collectionDetails) {
        // check if it's part of a candy machine
        const drop = this.getDropForCollection(candyMachines, meta);

        if (drop) {
          return {
            type: "nft-drop",
            address: drop.address.toBase58(),
            name: meta.name
          };
        } else {
          return {
            type: "nft-collection",
            address: meta.mintAddress.toBase58(),
            name: meta.name
          };
        }
      } else {
        if (meta.tokenStandard === mplTokenMetadata.TokenStandard.Fungible) {
          return {
            type: "token",
            address: meta.mintAddress.toBase58(),
            name: meta.name
          };
        }
      }
    }).filter(account => account !== undefined);
  }

  async getOwnedTokenAddreses(walletAddress) {
    return await js.TokenProgram.tokenAccounts(this.metaplex).selectMint().whereOwner(new web3_js.PublicKey(walletAddress)).getDataAsPublicKeys();
  }

  toRegisteredProgram(data) {
    return {
      deployer: data.authority.toBase58(),
      programAddress: data.programAddress.toBase58(),
      programName: data.programName.toString(),
      programType: data.programType.toString(),
      visible: data.visible
    };
  }

}

/**
 * @internal
 * This is a community API key that is subject to rate limiting. Please use your own key.
 */

const DEFAULT_API_KEY = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
/**
 * @internal
 */

function getUrlForNetwork(network) {
  switch (network) {
    case "localnet":
      return "http://127.0.0.1:8899";

    case "testnet":
      return web3_js.clusterApiUrl(network);

    case "mainnet-beta":
      return `https://solana-mainnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "devnet":
      return `https://solana-devnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    default:
      return network;
  }
}

/**
 * The main entry-point for the thirdweb Solana SDK.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Create SDK on specified network, and then pass a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * // Signer can be a keypair or browser wallet adapter
 * sdk.wallet.connect(signer);
 * ```
 *
 * @public
 */

class ThirdwebSDK {
  /**
   * Create a new SDK instance for the specified network
   * @param network - The network to connect to
   * @param storage - The storage provider to use or IPFS by default
   * @returns an SDK instance
   */
  static fromNetwork(network, storage) {
    return new ThirdwebSDK(new web3_js.Connection(getUrlForNetwork(network), {
      disableRetryOnRateLimit: true,
      commitment: "confirmed"
    }), storage);
  }
  /**
   * reate a new SDK instance connected with the given private key
   * @param network - The network to connect to
   * @param privateKey - The private key to use
   * @param storage - The storage provider to use or IPFS by default
   * @returns an SDK instance
   */


  static fromPrivateKey(network, privateKey, storage) {
    const sdk = ThirdwebSDK.fromNetwork(network, storage);
    const keypair = web3_js.Keypair.fromSecretKey(bs58__default["default"].decode(privateKey));
    sdk.wallet.connect(keypair);
    return sdk;
  }

  /**
   * The currently connected network
   */
  get network() {
    const url = new URL(this.connection.rpcEndpoint); // try this first to avoid hitting `custom` network for alchemy urls

    if (url.hostname.includes("devnet")) {
      return "devnet";
    }

    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }

    return this.metaplex.cluster;
  }

  constructor(connection) {
    let storage$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new storage.ThirdwebStorage({
      uploader: new storage.IpfsUploader({
        uploadWithGatewayUrl: true
      })
    });

    defineProperty._defineProperty(this, "connection", void 0);

    defineProperty._defineProperty(this, "metaplex", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "registry", void 0);

    defineProperty._defineProperty(this, "deployer", void 0);

    defineProperty._defineProperty(this, "wallet", void 0);

    defineProperty._defineProperty(this, "auth", void 0);

    this.connection = connection;
    this.storage = storage$1;
    this.metaplex = js.Metaplex.make(this.connection);
    this.wallet = new UserWallet(this.metaplex);
    this.auth = new WalletAuthenticator(this.wallet);
    this.registry = new Registry(this.metaplex, this.wallet);
    this.deployer = new Deployer(this.registry, this.metaplex, this.storage);
  }
  /**
   * Get an SDK interface for an NFT Collection program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */


  async getNFTCollection(address) {
    return this.getProgram(address, "nft-collection");
  }
  /**
   * Get an SDK interface for an NFT Drop program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */


  async getNFTDrop(address) {
    return this.getProgram(address, "nft-drop");
  }
  /**
   * Get an SDK interface for an Token program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */


  async getToken(address) {
    return this.getProgram(address, "token");
  }
  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * // Get the interface for your anchor program
   * const program = await sdk.getProgram("{{contract_address}}");
   * ```
   */


  async getProgram(address, programTypeOrIdl) {
    // if we have a programType or IDL
    if (programTypeOrIdl) {
      // if it's a prebuilt program type
      if (typeof programTypeOrIdl === "string") {
        switch (programTypeOrIdl) {
          case "nft-collection":
            return new NFTCollection(address, this.metaplex, this.storage);

          case "nft-drop":
            return new NFTDrop(address, this.metaplex, this.storage);

          case "token":
            return new Token(address, this.metaplex, this.storage);

          default:
            throw new Error("Invalid program type");
        }
      } // otherwise, it's an IDL, so return a program with that IDL


      return this.getProgramWithIdl(address, programTypeOrIdl);
    }

    const anchor = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@project-serum/anchor')); });
    const idl = await anchor.Program.fetchIdl(address, new anchor.AnchorProvider(this.connection, this.metaplex.identity(), {}));

    if (!idl) {
      throw new Error(`Could not fetch IDL for program at address '${address}'`);
    }

    return this.getProgramWithIdl(address, idl);
  }
  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @param idl - The IDL of the program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * import idl from "path/to/idl.json"
   *
   * // Alternatively, you can pass in your own IDL
   * const program = await sdk.getProgramWithIdl(address, idl);
   * ```
   */


  async getProgramWithIdl(address, idl) {
    const program$1 = await Promise.resolve().then(function () { return program; });
    return new program$1.Program(address, idl, this.connection, this.wallet);
  }

}

exports.AddressSchema = AddressSchema;
exports.AmountSchema = AmountSchema;
exports.BasisPointsSchema = BasisPointsSchema;
exports.CommonContractOutputSchema = CommonContractOutputSchema;
exports.CommonContractSchema = CommonContractSchema;
exports.CreatorInputSchema = CreatorInputSchema;
exports.Deployer = Deployer;
exports.FileOrBufferOrStringSchema = FileOrBufferOrStringSchema;
exports.FileOrBufferSchema = FileOrBufferSchema;
exports.JsonLiteral = JsonLiteral;
exports.MAX_BPS = MAX_BPS;
exports.NFTCollection = NFTCollection;
exports.NFTCollectionMetadataInputSchema = NFTCollectionMetadataInputSchema;
exports.NFTDrop = NFTDrop;
exports.NFTDropContractInputSchema = NFTDropContractInputSchema;
exports.NFTDropInitialConditionsInputSchema = NFTDropInitialConditionsInputSchema;
exports.NFTDropUpdateableConditionsInputSchema = NFTDropUpdateableConditionsInputSchema;
exports.NFTDropUpdateableConditionsOutputSchema = NFTDropUpdateableConditionsOutputSchema;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.PercentSchema = PercentSchema;
exports.Program = Program;
exports.RawDateSchema = RawDateSchema;
exports.ThirdwebSDK = ThirdwebSDK;
exports.Token = Token;
exports.TokenMetadataInputSchema = TokenMetadataInputSchema;
exports.UserWallet = UserWallet;
exports.WalletAuthenticator = WalletAuthenticator;
exports.getUrlForNetwork = getUrlForNetwork;
