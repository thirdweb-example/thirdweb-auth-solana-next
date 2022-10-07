'use strict';

var zod = require('zod');
var defineProperty = require('./defineProperty-b8983092.cjs.prod.js');
var ethers = require('ethers');
var ERC165Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
var Erc721Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
var Erc1155Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
var invariant = require('tiny-invariant');
var EventEmitter = require('eventemitter3');
var fetch = require('cross-fetch');
var ForwarderABI = require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
var IBurnableERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
var IDropSinglePhase = require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
var IMintableERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
var MulticallAbi = require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
var ISignatureMintERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
var IBurnableERC721Abi = require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
var IClaimableERC721 = require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
var DelayedRevealAbi = require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
var Erc721EnumerableAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
var Erc721SupplyAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
var ILazyMintAbi = require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
var IMintableERC721Abi = require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
var SignatureMintERC721Abi = require('@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json');
var DelayedRevealAbi$1 = require('@thirdweb-dev/contracts-js/dist/abis/DelayedReveal.json');
var DropSinglePhase1155 = require('@thirdweb-dev/contracts-js/dist/abis/DropSinglePhase1155.json');
var IBurnableERC1155Abi = require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
var IClaimableERC1155 = require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
var Erc1155EnumerableAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
var IMintableERC1155Abi = require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
var ISignatureMintERC1155Abi = require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
var ERC20MetadataAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
var deepEqual = require('fast-deep-equal');
var uuid = require('uuid');
var ERC721MetadataAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
var ERC1155MetadataAbi = require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
var DeprecatedAbi = require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
var TWFactoryAbi = require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
var TWRegistryABI = require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');
var ContractPublisherAbi = require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
var IThirdwebContractABI = require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
var storage = require('@thirdweb-dev/storage');
var IAppURI = require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
var IContractMetadataAbi = require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
var IPermissionsAbi = require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
var IPermissionsEnumerableAbi = require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
var IThirdwebPlatformFeeAbi = require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
var IThirdwebPrimarySaleAbi = require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
var IThirdwebRoyaltyAbi = require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
var IOwnableAbi = require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');

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

var ERC165Abi__default = /*#__PURE__*/_interopDefault(ERC165Abi);
var Erc721Abi__default = /*#__PURE__*/_interopDefault(Erc721Abi);
var Erc1155Abi__default = /*#__PURE__*/_interopDefault(Erc1155Abi);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);
var fetch__default = /*#__PURE__*/_interopDefault(fetch);
var ForwarderABI__default = /*#__PURE__*/_interopDefault(ForwarderABI);
var IBurnableERC20Abi__default = /*#__PURE__*/_interopDefault(IBurnableERC20Abi);
var IDropSinglePhase__default = /*#__PURE__*/_interopDefault(IDropSinglePhase);
var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);
var IMintableERC20Abi__default = /*#__PURE__*/_interopDefault(IMintableERC20Abi);
var MulticallAbi__default = /*#__PURE__*/_interopDefault(MulticallAbi);
var ISignatureMintERC20Abi__default = /*#__PURE__*/_interopDefault(ISignatureMintERC20Abi);
var IBurnableERC721Abi__default = /*#__PURE__*/_interopDefault(IBurnableERC721Abi);
var IClaimableERC721__default = /*#__PURE__*/_interopDefault(IClaimableERC721);
var DelayedRevealAbi__default = /*#__PURE__*/_interopDefault(DelayedRevealAbi);
var Erc721EnumerableAbi__default = /*#__PURE__*/_interopDefault(Erc721EnumerableAbi);
var Erc721SupplyAbi__default = /*#__PURE__*/_interopDefault(Erc721SupplyAbi);
var ILazyMintAbi__default = /*#__PURE__*/_interopDefault(ILazyMintAbi);
var IMintableERC721Abi__default = /*#__PURE__*/_interopDefault(IMintableERC721Abi);
var SignatureMintERC721Abi__default = /*#__PURE__*/_interopDefault(SignatureMintERC721Abi);
var DelayedRevealAbi__default$1 = /*#__PURE__*/_interopDefault(DelayedRevealAbi$1);
var DropSinglePhase1155__default = /*#__PURE__*/_interopDefault(DropSinglePhase1155);
var IBurnableERC1155Abi__default = /*#__PURE__*/_interopDefault(IBurnableERC1155Abi);
var IClaimableERC1155__default = /*#__PURE__*/_interopDefault(IClaimableERC1155);
var Erc1155EnumerableAbi__default = /*#__PURE__*/_interopDefault(Erc1155EnumerableAbi);
var IMintableERC1155Abi__default = /*#__PURE__*/_interopDefault(IMintableERC1155Abi);
var ISignatureMintERC1155Abi__default = /*#__PURE__*/_interopDefault(ISignatureMintERC1155Abi);
var ERC20MetadataAbi__default = /*#__PURE__*/_interopDefault(ERC20MetadataAbi);
var deepEqual__default = /*#__PURE__*/_interopDefault(deepEqual);
var ERC721MetadataAbi__default = /*#__PURE__*/_interopDefault(ERC721MetadataAbi);
var ERC1155MetadataAbi__default = /*#__PURE__*/_interopDefault(ERC1155MetadataAbi);
var DeprecatedAbi__default = /*#__PURE__*/_interopDefault(DeprecatedAbi);
var TWFactoryAbi__default = /*#__PURE__*/_interopDefault(TWFactoryAbi);
var TWRegistryABI__default = /*#__PURE__*/_interopDefault(TWRegistryABI);
var ContractPublisherAbi__default = /*#__PURE__*/_interopDefault(ContractPublisherAbi);
var IThirdwebContractABI__default = /*#__PURE__*/_interopDefault(IThirdwebContractABI);
var IAppURI__default = /*#__PURE__*/_interopDefault(IAppURI);
var IContractMetadataAbi__default = /*#__PURE__*/_interopDefault(IContractMetadataAbi);
var IPermissionsAbi__default = /*#__PURE__*/_interopDefault(IPermissionsAbi);
var IPermissionsEnumerableAbi__default = /*#__PURE__*/_interopDefault(IPermissionsEnumerableAbi);
var IThirdwebPlatformFeeAbi__default = /*#__PURE__*/_interopDefault(IThirdwebPlatformFeeAbi);
var IThirdwebPrimarySaleAbi__default = /*#__PURE__*/_interopDefault(IThirdwebPrimarySaleAbi);
var IThirdwebRoyaltyAbi__default = /*#__PURE__*/_interopDefault(IThirdwebRoyaltyAbi);
var IOwnableAbi__default = /*#__PURE__*/_interopDefault(IOwnableAbi);

const isBrowser$1 = () => typeof window !== "undefined";

const FileOrBufferUnionSchema = isBrowser$1() ? zod.z.instanceof(File) : zod.z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

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
const MAX_BPS = 10000;
const BytesLikeSchema = zod.z.union([zod.z.array(zod.z.number()), zod.z.string()]);
const BigNumberSchema = zod.z.union([zod.z.string(), zod.z.number(), zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
})]).transform(arg => ethers.BigNumber.from(arg));
const BigNumberishSchema = BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = zod.z.union([zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
})]).transform(arg => {
  return ethers.BigNumber.from(arg).toString();
});
const BasisPointsSchema = zod.z.number().max(MAX_BPS, "Cannot exeed 100%").min(0, "Cannot be below 0%");
const PercentSchema = zod.z.number().max(100, "Cannot exeed 100%").min(0, "Cannot be below 0%");
const AddressSchema = zod.z.string().refine(arg => ethers.utils.isAddress(arg), out => {
  return {
    message: `${out} is not a valid address`
  };
});
const AmountSchema = zod.z.union([zod.z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), zod.z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);
const RawDateSchema = zod.z.date().transform(i => {
  return ethers.BigNumber.from(Math.floor(i.getTime() / 1000));
});
/**
 * Default to now
 */

const StartDateSchema = RawDateSchema.default(new Date(0));
/**
 * Default to 10 years from now
 */

const EndDateSchema = RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10));
const CallOverrideSchema = zod.z.object({
  gasLimit: BigNumberishSchema.optional(),
  gasPrice: BigNumberishSchema.optional(),
  maxFeePerGas: BigNumberishSchema.optional(),
  maxPriorityFeePerGas: BigNumberishSchema.optional(),
  nonce: BigNumberishSchema.optional(),
  value: BigNumberishSchema.optional(),
  blockTag: zod.z.union([zod.z.string(), zod.z.number()]).optional(),
  from: AddressSchema.optional(),
  type: zod.z.number().optional()
}).strict();

/**
 * @public
 */
exports.ChainId = void 0;
/**
 * @public
 */

(function (ChainId) {
  ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
  ChainId[ChainId["Goerli"] = 5] = "Goerli";
  ChainId[ChainId["Polygon"] = 137] = "Polygon";
  ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
  ChainId[ChainId["Harmony"] = 1666600000] = "Harmony";
  ChainId[ChainId["Localhost"] = 1337] = "Localhost";
  ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
  ChainId[ChainId["Fantom"] = 250] = "Fantom";
  ChainId[ChainId["FantomTestnet"] = 4002] = "FantomTestnet";
  ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
  ChainId[ChainId["AvalancheFujiTestnet"] = 43113] = "AvalancheFujiTestnet";
  ChainId[ChainId["Optimism"] = 10] = "Optimism";
  ChainId[ChainId["OptimismGoerli"] = 420] = "OptimismGoerli";
  ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
  ChainId[ChainId["ArbitrumGoerli"] = 421613] = "ArbitrumGoerli";
  ChainId[ChainId["BinanceSmartChainMainnet"] = 56] = "BinanceSmartChainMainnet";
  ChainId[ChainId["BinanceSmartChainTestnet"] = 97] = "BinanceSmartChainTestnet";
})(exports.ChainId || (exports.ChainId = {}));

/**
 * @public
 */
const SUPPORTED_CHAIN_IDS = [exports.ChainId.Mainnet, exports.ChainId.Goerli, exports.ChainId.Polygon, exports.ChainId.Mumbai, exports.ChainId.Fantom, exports.ChainId.FantomTestnet, exports.ChainId.Avalanche, exports.ChainId.AvalancheFujiTestnet, exports.ChainId.Optimism, exports.ChainId.OptimismGoerli, exports.ChainId.Arbitrum, exports.ChainId.ArbitrumGoerli, exports.ChainId.BinanceSmartChainMainnet, exports.ChainId.BinanceSmartChainTestnet];

/**
 * @public
 */

const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
/**
 * @public
 */

const NATIVE_TOKENS = {
  [exports.ChainId.Mainnet]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.Goerli]: {
    name: "Görli Ether",
    symbol: "GOR",
    decimals: 18,
    wrapped: {
      address: "0x0bb7509324ce409f7bbc4b701f932eaca9736ab7",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.Polygon]: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    wrapped: {
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      name: "Wrapped Matic",
      symbol: "WMATIC"
    }
  },
  [exports.ChainId.Mumbai]: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    wrapped: {
      address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      name: "Wrapped Matic",
      symbol: "WMATIC"
    }
  },
  [exports.ChainId.Avalanche]: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    wrapped: {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    }
  },
  [exports.ChainId.AvalancheFujiTestnet]: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    wrapped: {
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    }
  },
  [exports.ChainId.Fantom]: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    wrapped: {
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      name: "Wrapped Fantom",
      symbol: "WFTM"
    }
  },
  [exports.ChainId.FantomTestnet]: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    wrapped: {
      address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
      name: "Wrapped Fantom",
      symbol: "WFTM"
    }
  },
  [exports.ChainId.Arbitrum]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.ArbitrumGoerli]: {
    name: "Arbitrum Goerli Ether",
    symbol: "AGOR",
    decimals: 18,
    wrapped: {
      address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.Optimism]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.OptimismGoerli]: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.Hardhat]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [exports.ChainId.BinanceSmartChainMainnet]: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
    wrapped: {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      name: "Wrapped Binance Chain Token",
      symbol: "WBNB"
    }
  },
  [exports.ChainId.BinanceSmartChainTestnet]: {
    name: "Binance Chain Native Token",
    symbol: "TBNB",
    decimals: 18,
    wrapped: {
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      name: "Wrapped Binance Chain Testnet Token",
      symbol: "WBNB"
    }
  }
};
/**
 * Returns the native token for a given chain
 * @param chainId - the chain id
 * @public
 */

function getNativeTokenByChainId(chainId) {
  return NATIVE_TOKENS[chainId];
}

/**
 * @internal
 */

const CurrencySchema = zod.z.object({
  name: zod.z.string(),
  symbol: zod.z.string(),
  decimals: zod.z.number()
});
/**
 * @internal
 */

const CurrencyValueSchema = CurrencySchema.extend({
  value: BigNumberSchema,
  displayValue: zod.z.string()
});

/**
 * @internal
 */

const MerkleSchema = zod.z.object({
  merkle: zod.z.record(zod.z.string()).default({})
});
/**
 * @internal
 */

const SnapshotAddressInput = zod.z.object({
  address: AddressSchema,
  maxClaimable: AmountSchema.default(0)
});
/**
 * @internal
 */

const SnapshotInputSchema = zod.z.union([zod.z.array(zod.z.string()).transform(strings => strings.map(address => SnapshotAddressInput.parse({
  address
}))), zod.z.array(SnapshotAddressInput)]);
/**
 * @internal
 */

const SnapshotSchema = zod.z.object({
  /**
   * The merkle root
   */
  merkleRoot: zod.z.string(),
  claims: zod.z.array(SnapshotAddressInput.extend({
    proof: zod.z.array(zod.z.string())
  }))
});
/**
 * @internal
 */

const SnapshotInfoSchema = zod.z.object({
  merkleRoot: zod.z.string(),
  snapshotUri: zod.z.string(),
  snapshot: SnapshotSchema
});

/**
 * @internal
 */

const QuantitySchema = zod.z.union([AmountSchema, zod.z.literal("unlimited")]).default("unlimited");
/**
 * @internal
 */

const ClaimConditionInputSchema = zod.z.object({
  startTime: StartDateSchema,
  currencyAddress: zod.z.string().default(NATIVE_TOKEN_ADDRESS),
  price: AmountSchema.default(0),
  maxQuantity: QuantitySchema,
  quantityLimitPerTransaction: QuantitySchema,
  waitInSeconds: BigNumberishSchema.default(0),
  merkleRootHash: BytesLikeSchema.default(ethers.utils.hexZeroPad([0], 32)),
  snapshot: zod.z.optional(SnapshotInputSchema)
});
/**
 * @internal
 */

const ClaimConditionInputArray = zod.z.array(ClaimConditionInputSchema);
/**
 * @internal
 */

const PartialClaimConditionInputSchema = ClaimConditionInputSchema.partial();
/**
 * @internal
 */

const ClaimConditionOutputSchema = ClaimConditionInputSchema.extend({
  availableSupply: QuantitySchema,
  currentMintSupply: QuantitySchema,
  currencyMetadata: CurrencyValueSchema.default({
    value: ethers.BigNumber.from("0"),
    displayValue: "0",
    symbol: "",
    decimals: 18,
    name: ""
  }),
  price: BigNumberSchema,
  waitInSeconds: BigNumberSchema,
  startTime: BigNumberSchema.transform(n => new Date(n.toNumber() * 1000))
});

function resolveOrGenerateId(requestUId) {
  if (requestUId === undefined) {
    const buffer = Buffer.alloc(16);
    uuid.v4({}, buffer);
    return ethers.utils.hexlify(ethers.utils.toUtf8Bytes(buffer.toString("hex")));
  } else {
    return ethers.utils.hexlify(requestUId);
  }
}

/**
 * @internal
 */

const BaseSignaturePayloadInput = zod.z.object({
  to: zod.z.string().default(ethers.constants.AddressZero),
  price: AmountSchema.default(0),
  currencyAddress: zod.z.string().default(NATIVE_TOKEN_ADDRESS),
  mintStartTime: StartDateSchema,
  mintEndTime: EndDateSchema,
  uid: zod.z.string().optional().transform(arg => resolveOrGenerateId(arg)),
  primarySaleRecipient: zod.z.string().default(ethers.constants.AddressZero)
});
/**
 * @internal
 */

const Signature20PayloadInput = BaseSignaturePayloadInput.extend({
  quantity: AmountSchema
});
/**
 * @internal
 */

const Signature20PayloadOutput = Signature20PayloadInput.extend({
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
});
/**
 * @internal
 */

const Signature721PayloadInput = BaseSignaturePayloadInput.extend({
  metadata: defineProperty.NFTInputOrUriSchema,
  royaltyRecipient: zod.z.string().default(ethers.constants.AddressZero),
  royaltyBps: BasisPointsSchema.default(0)
});
/**
 * @internal
 */

const Signature721PayloadOutput = Signature721PayloadInput.extend({
  uri: zod.z.string(),
  royaltyBps: BigNumberSchema,
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
});
/**
 * @internal
 */

const Signature1155PayloadInput = Signature721PayloadInput.extend({
  metadata: defineProperty.NFTInputOrUriSchema.default(""),
  quantity: BigNumberishSchema
});
/**
 * @internal
 */

const Signature1155PayloadInputWithTokenId = Signature1155PayloadInput.extend({
  tokenId: BigNumberishSchema
});
/**
 * @internal
 */

const Signature1155PayloadOutput = Signature721PayloadOutput.extend({
  tokenId: BigNumberSchema,
  quantity: BigNumberSchema
});
/**
 * @internal
 */

const Signature721WithQuantityInput = Signature721PayloadInput.extend({
  metadata: defineProperty.NFTInputOrUriSchema.default(""),
  quantity: BigNumberSchema.default(1)
});
/**
 * @internal
 */

const Signature721WithQuantityOutput = Signature721PayloadOutput.extend({
  quantity: BigNumberSchema.default(1)
});
/**
 * @public
 */

const MintRequest20 = [{
  name: "to",
  type: "address"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest1155 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "tokenId",
  type: "uint256"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721withQuantity = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];

/**
 * @internal
 */

const CommonContractSchema = zod.z.object({
  name: zod.z.string(),
  description: zod.z.string().optional(),
  image: FileOrBufferOrStringSchema.optional(),
  external_link: zod.z.string().url().optional()
});

/**
 * @internal
 */
const CommonContractOutputSchema = CommonContractSchema.extend({
  image: zod.z.string().optional()
}).catchall(zod.z.unknown());
/**
 * @internal
 */

const CommonRoyaltySchema = zod.z.object({
  /**
   * The amount of royalty collected on all royalties represented as basis points.
   * The default is 0 (no royalties).
   *
   * 1 basis point = 0.01%
   *
   * For example: if this value is 100, then the royalty is 1% of the total sales.
   *
   *  @internalremarks used by OpenSea "seller_fee_basis_points"
   */
  seller_fee_basis_points: BasisPointsSchema.default(0),

  /**
   * The address of the royalty recipient. All royalties will be sent
   * to this address.
   * @internalremarks used by OpenSea "fee_recipient"
   */
  fee_recipient: AddressSchema.default(ethers.constants.AddressZero)
});
/**
 * @internal
 */

const CommonPrimarySaleSchema = zod.z.object({
  /**
   * primary sale recipient address
   */
  primary_sale_recipient: AddressSchema
});
/**
 * @internal
 */

const CommonPlatformFeeSchema = zod.z.object({
  /**
   * platform fee basis points
   */
  platform_fee_basis_points: BasisPointsSchema.default(0),

  /**
   * platform fee recipient address
   */
  platform_fee_recipient: AddressSchema.default(ethers.constants.AddressZero)
});
/**
 * @internal
 */

const CommonTrustedForwarderSchema = zod.z.object({
  trusted_forwarders: zod.z.array(AddressSchema).default([])
});
/**
 * @internal
 */

const CommonSymbolSchema = zod.z.object({
  symbol: zod.z.string().optional().default("")
});

const PropertiesInput = zod.z.object({}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));
/**
 * @internal
 */

const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */

const TokenMintInputSchema = zod.z.object({
  toAddress: AddressSchema,
  amount: AmountSchema
});
/**
 * @public
 */

/**
 * @internal
 */

const EditionMetadataOutputSchema = zod.z.object({
  supply: BigNumberSchema,
  metadata: defineProperty.CommonNFTOutput
});
/**
 * @internal
 */

const EditionMetadataWithOwnerOutputSchema = EditionMetadataOutputSchema.extend({
  owner: zod.z.string(),
  quantityOwned: BigNumberSchema
});
/**
 * @internal
 */

const EditionMetadataInputSchema = zod.z.object({
  supply: BigNumberishSchema,
  metadata: defineProperty.CommonNFTInput
});
/**
 * @internal
 */

const EditionMetadataInputOrUriSchema = zod.z.object({
  supply: BigNumberishSchema,
  metadata: defineProperty.NFTInputOrUriSchema
});
/**
 * @public
 */

/**
 * @internal
 */

const OZ_DEFENDER_FORWARDER_ADDRESS = "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81";
const TWRegistry_address = "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd";
const TWFactory_address = "0x5DBC7B840baa9daBcBe9D2492E45D7244B54A2A0";
const ContractPublisher_address = "0x664244560eBa21Bf82d7150C791bE1AbcD5B4cd7"; // Polygon only

/**
 * @internal
 */

const CONTRACT_ADDRESSES = {
  [exports.ChainId.Mainnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x76ce2CB1Ae48Fa067f4fb8c5f803111AE0B24BEA",
    biconomyForwarder: "0x84a0856b038eaAd1cC7E297cF34A7e72685A8693",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.Goerli]: {
    openzeppelinForwarder: "0x5001A14CA6163143316a7C614e30e6041033Ac20",
    openzeppelinForwarderEOA: "0xe73c50cB9c5B378627ff625BB6e6725A4A5D65d2",
    biconomyForwarder: "0xE041608922d06a4F26C0d4c27d8bCD01daf1f792",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0xB1Bd9d7942A250BA2Dce27DD601F2ED4211A60C4"
  },
  [exports.ChainId.Polygon]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x4f247c69184ad61036EC2Bb3213b69F10FbEDe1F",
    biconomyForwarder: "0x86C80a8aa58e0A4fa09A69624c31Ab2a6CAD56b8",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x308473Be900F4185A56587dE54bDFF5E8f7a6AE7"
  },
  [exports.ChainId.Mumbai]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3F17972CB27506eb4a6a3D59659e0B57a43fd16C"
  },
  [exports.ChainId.Avalanche]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x64CD353384109423a966dCd3Aa30D884C9b2E057",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.AvalancheFujiTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xe73c50cB9c5B378627ff625BB6e6725A4A5D65d2",
    biconomyForwarder: "0x6271Ca63D30507f2Dcbf99B52787032506D75BBF",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23"
  },
  [exports.ChainId.Fantom]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x64CD353384109423a966dCd3Aa30D884C9b2E057",
    twFactory: "0x97EA0Fcc552D5A8Fb5e9101316AAd0D62Ea0876B",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.FantomTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x42D3048b595B6e1c28a588d70366CcC2AA4dB47b",
    biconomyForwarder: "0x69FB8Dca8067A5D38703b9e8b39cf2D51473E4b4",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23"
  },
  [exports.ChainId.Arbitrum]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x4f247c69184ad61036EC2Bb3213b69F10FbEDe1F",
    biconomyForwarder: "0xfe0fa3C06d03bDC7fb49c892BbB39113B534fB57",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.ArbitrumGoerli]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0x119704314Ef304EaAAE4b3c7C9ABd59272A28310",
    biconomyForwarder: ethers.constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.Optimism]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x7e80648EB2071E26937F9D42A513ccf4815fc702",
    biconomyForwarder: "0xefba8a2a82ec1fb1273806174f5e28fbb917cf95",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.OptimismGoerli]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0x119704314Ef304EaAAE4b3c7C9ABd59272A28310",
    biconomyForwarder: ethers.constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd",
    twBYOCRegistry: ethers.constants.AddressZero
  },
  [exports.ChainId.BinanceSmartChainMainnet]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0xE8dd2Ff0212F86d3197b4AfDC6dAC6ac47eb10aC",
    biconomyForwarder: "0x86C80a8aa58e0A4fa09A69624c31Ab2a6CAD56b8",
    twBYOCRegistry: ethers.constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd"
  },
  [exports.ChainId.BinanceSmartChainTestnet]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0x7e80648EB2071E26937F9D42A513ccf4815fc702",
    biconomyForwarder: "0x61456BF1715C1415730076BB79ae118E806E74d2",
    twBYOCRegistry: ethers.constants.AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd"
  }
};
/**
 * @internal
 */

function getContractAddressByChainId(chainId, contractName) {
  // for testing only
  if (chainId === exports.ChainId.Hardhat) {
    if (contractName === "twFactory") {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      return process.env.factoryAddress;
    } else if (contractName === "twRegistry") {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      return process.env.registryAddress;
    } else {
      return ethers.constants.AddressZero;
    }
  } // real output here


  return CONTRACT_ADDRESSES[chainId][contractName];
}
/**
 * @internal
 */

function getContractPublisherAddress() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  if (process.env.contractPublisherAddress) {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    return process.env.contractPublisherAddress;
  } else {
    return ContractPublisher_address;
  }
}

/**
 * @internal
 */
/**
 * @internal
 */

const InterfaceId_IERC721 = ethers.utils.arrayify("0x80ac58cd");
/**
 * @internal
 */

const InterfaceId_IERC1155 = ethers.utils.arrayify("0xd9b67a26");

/**
 * @public
 */
exports.EventType = void 0;

(function (EventType) {
  EventType["Transaction"] = "transaction";
  EventType["Signature"] = "signature";
})(exports.EventType || (exports.EventType = {}));

class StaticJsonRpcBatchProvider extends ethers.providers.StaticJsonRpcProvider {
  constructor(url, network) {
    super(url, network);

    defineProperty._defineProperty(this, "_pendingBatchAggregator", void 0);

    defineProperty._defineProperty(this, "_pendingBatch", void 0);

    this._pendingBatchAggregator = null;
    this._pendingBatch = null;
  }

  send(method, params) {
    const request = {
      method: method,
      params: params,
      id: this._nextId++,
      jsonrpc: "2.0"
    };

    if (this._pendingBatch === null) {
      this._pendingBatch = [];
    }

    const inflightRequest = {
      request,
      resolve: null,
      reject: null
    };
    const promise = new Promise((resolve, reject) => {
      inflightRequest.resolve = resolve;
      inflightRequest.reject = reject;
    });

    this._pendingBatch.push(inflightRequest);

    if (!this._pendingBatchAggregator) {
      // Schedule batch for next event loop + short duration
      this._pendingBatchAggregator = setTimeout(() => {
        // Get the current batch and clear it, so new requests
        // go into the next batch
        const batch = this._pendingBatch || [];
        this._pendingBatch = null;
        this._pendingBatchAggregator = null; // Get the request as an array of requests

        const request_ = batch.map(inflight => inflight.request);
        this.emit("debug", {
          action: "requestBatch",
          request: ethers.utils.deepCopy(request),
          provider: this
        });
        return ethers.utils.fetchJson(this.connection, JSON.stringify(request_)).then(result => {
          this.emit("debug", {
            action: "response",
            request: request_,
            response: result,
            provider: this
          }); // For each result, feed it to the correct Promise, depending
          // on whether it was a success or error

          batch.forEach((inflightRequest_, index) => {
            const payload = result[index];

            if (payload.error) {
              const error = new Error(payload.error.message);
              error.code = payload.error.code;
              error.data = payload.error.data;
              inflightRequest_.reject(error);
            } else {
              inflightRequest_.resolve(payload.result);
            }
          });
        }, error => {
          this.emit("debug", {
            action: "response",
            error: error,
            request: request,
            provider: this
          });
          batch.forEach(inflightRequest_ => {
            inflightRequest_.reject(error);
          });
        });
      }, 10);
    }

    return promise;
  }

}

/**
 * @internal
 */

const DEFAULT_IPFS_GATEWAY = "https://gateway.ipfscdn.io/ipfs/";
/**
 * @internal
 */

const PUBLIC_GATEWAYS = ["https://gateway.ipfscdn.io/ipfs/", "https://cloudflare-ipfs.com/ipfs/", "https://ipfs.io/ipfs/"];
/**
 * @internal
 */

const TW_IPFS_SERVER_URL = "https://upload.nftlabs.co";
/**
 * @internal
 */

const PINATA_IPFS_URL = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
/**
 * @internal
 */

/**
 * @internal
 * This is a community API key that is subject to rate limiting. Please use your own key.
 */
const DEFAULT_API_KEY = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
/**
 * @internal
 * @param network - the chain name or rpc url
 * @returns the rpc url for that chain
 */

function getProviderForNetwork(network) {
  if (typeof network !== "string") {
    return network;
  }

  switch (network) {
    case "mumbai":
      return `https://polygon-mumbai.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "rinkeby":
      return `https://eth-rinkeby.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "goerli":
      return `https://eth-goerli.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "polygon":
    case "matic":
      return `https://polygon-mainnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "mainnet":
    case "ethereum":
      return `https://eth-mainnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "optimism":
      // TODO test this RPC
      return `https://opt-mainnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "optimism-kovan":
      // alchemy optimism kovan rpc doesn't link to the testnet sequencer...
      return "https://kovan.optimism.io";

    case "optimism-goerli":
      // TODO test this RPC
      return `https://opt-goerli.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "arbitrum":
      // TODO test this RPC
      return `https://arb-mainnet.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "arbitrum-rinkeby":
      // TODO test this RPC
      return `https://arb-rinkeby.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "arbitrum-goerli":
      // TODO test this RPC
      return `https://arb-goerli.g.alchemy.com/v2/${DEFAULT_API_KEY}`;

    case "fantom":
      return "https://rpc.ftm.tools";

    case "fantom-testnet":
      return "https://rpc.testnet.fantom.network/";

    case "avalanche":
      return "https://api.avax.network/ext/bc/C/rpc";

    case "avalanche-testnet":
    case "avalanche-fuji":
      return "https://api.avax-test.network/ext/bc/C/rpc";

    case "binance":
      return "https://bsc-dataseed1.binance.org";

    case "binance-testnet":
      return "https://data-seed-prebsc-1-s1.binance.org:8545";

    default:
      if (network.startsWith("http") || network.startsWith("ws")) {
        return network;
      } else {
        throw new Error(`Unrecognized chain name or RPC url: ${network}`);
      }

  }
}
/**
 *
 * @param network - the chain name or rpc url
 * @param chainId - the optional chain id
 * @returns the provider
 */

function getReadOnlyProvider(network, chainId) {
  try {
    const match = network.match(/^(ws|http)s?:/i); // try the JSON batch provider if available

    if (match) {
      switch (match[1]) {
        case "http":
          return chainId ? // if we know the chainId we should use the StaticJsonRpcBatchProvider
          new StaticJsonRpcBatchProvider(network, chainId) : // otherwise fall back to the built in json rpc batch provider
          new ethers.providers.JsonRpcBatchProvider(network, chainId);

        case "ws":
          return new ethers.providers.WebSocketProvider(network, chainId);

        default:
          return ethers.ethers.getDefaultProvider(network);
      }
    } else {
      return ethers.ethers.getDefaultProvider(network);
    }
  } catch (e) {
    // fallback to the default provider
    return ethers.ethers.getDefaultProvider(network);
  }
}

/**
 * Error that may get thrown if IPFS returns nothing for a given uri.
 * @internal
 */

class NotFoundError extends Error {
  /** @internal */
  constructor(identifier) {
    super(identifier ? `Object with id ${identifier} NOT FOUND` : "NOT_FOUND");
  }

}
/**
 * Error that may get thrown if an invalid address was passed
 * @internal
 */

class InvalidAddressError extends Error {
  /** @internal */
  constructor(address) {
    super(address ? `'${address}' is an invalid address` : "Invalid address passed");
  }

}
/**
 * @internal
 */

class MissingRoleError extends Error {
  /** @internal */

  /** @internal */
  constructor(address, role) {
    super(`MISSING ROLE: ${address} does not have the '${role}' role`);
  }

}
/**
 * @internal
 */

class AssetNotFoundError extends Error {
  /** @internal */

  /** @internal */
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The asset you're trying to use could not be found.";
    super(`message: ${message}`);
  }

}
/**
 * @internal
 */

class UploadError extends Error {
  /** @internal */
  constructor(message) {
    super(`UPLOAD_FAILED: ${message}`);
  }

}
/**
 * @internal
 */

class FileNameMissingError extends Error {
  /** @internal */
  constructor() {
    super("File name is required when object is not a `File` type object.");
  }

}
/**
 * @internal
 */

class DuplicateFileNameError extends Error {
  /** @internal */
  constructor(fileName) {
    super(`DUPLICATE_FILE_NAME_ERROR: File name ${fileName} was passed for more than one file.`);
  }

}
/**
 * @internal
 */

class NotEnoughTokensError extends Error {
  /** @internal */
  constructor(contractAddress, quantity, available) {
    super(`BALANCE ERROR: you do not have enough balance on contract ${contractAddress} to use ${quantity} tokens. You have ${available} tokens available.`);
  }

}
/**
 * @internal
 */

class MissingOwnerRoleError extends Error {
  /** @internal */
  constructor() {
    super(`LIST ERROR: you should be the owner of the token to list it.`);
  }

}
/**
 * @internal
 */

class QuantityAboveLimitError extends Error {
  /** @internal */
  constructor(quantity) {
    super(`BUY ERROR: You cannot buy more than ${quantity} tokens`);
  }

}
/**
 * Thrown when data fails to fetch from storage.
 * @internal
 */

class FetchError extends Error {
  /** @internal */
  constructor(message, innerError) {
    super(`FETCH_FAILED: ${message}`);

    defineProperty._defineProperty(this, "innerError", void 0);

    this.innerError = innerError;
  }

}
/**
 * Thrown when attempting to create a snapshot with duplicate leafs
 * @internal
 */

class DuplicateLeafsError extends Error {
  constructor(message) {
    super(`DUPLICATE_LEAFS${message ? ` : ${message}` : ""}`);
  }

}
/**
 * Thrown when attempting to update/cancel an auction that already started
 * @internal
 */

class AuctionAlreadyStartedError extends Error {
  constructor(id) {
    super(`Auction already started with existing bid${id ? `, id: ${id}` : ""}`);
  }

}
/**
 * @internal
 */

class FunctionDeprecatedError extends Error {
  /** @internal */
  constructor(message) {
    super(`FUNCTION DEPRECATED. ${message ? `Use ${message} instead` : ""}`);
  }

}
/**
 * Thrown when trying to retrieve a listing from a marketplace that doesn't exist
 * @internal
 */

class ListingNotFoundError extends Error {
  constructor(marketplaceContractAddress, listingId) {
    super(`Could not find listing.${marketplaceContractAddress ? ` marketplace address: ${marketplaceContractAddress}` : ""}${listingId ? ` listing id: ${listingId}` : ""}`);
  }

}
/**
 * Thrown when trying to retrieve a listing of the wrong type
 * @internal
 */

class WrongListingTypeError extends Error {
  constructor(marketplaceContractAddress, listingId, actualType, expectedType) {
    super(`Incorrect listing type. Are you sure you're using the right method?.${marketplaceContractAddress ? ` marketplace address: ${marketplaceContractAddress}` : ""}${listingId ? ` listing id: ${listingId}` : ""}${expectedType ? ` expected type: ${expectedType}` : ""}${actualType ? ` actual type: ${actualType}` : ""}`);
  }

}
/**
 * Thrown when attempting to transfer an asset that has restricted transferability
 * @internal
 */

class RestrictedTransferError extends Error {
  constructor(assetAddress) {
    super(`Failed to transfer asset, transfer is restricted.${assetAddress ? ` Address : ${assetAddress}` : ""}`);
  }

}
/**
 * Thrown when attempting to execute an admin-role function.
 * @internal
 */

class AdminRoleMissingError extends Error {
  constructor(address, contractAddress) {
    let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Failed to execute transaction";
    super(`${message}, admin role is missing${address ? ` on address: ${address}` : ""}${contractAddress ? ` on contract: ${contractAddress}` : ""}`);
  }

}
/**
 * Thrown when attempting to close an auction that has not ended
 * @internal
 */

class AuctionHasNotEndedError extends Error {
  constructor(id, endTime) {
    super(`Auction has not ended yet${id ? `, id: ${id}` : ""}${endTime ? `, end time: ${endTime.toString()}` : ""}`);
  }

}
/**
 * Thrown when attempting to call a contract function that is not implemented
 * @internal
 */

class ExtensionNotImplementedError extends Error {
  constructor(feature) {
    super(`This functionality is not available because the contract does not implement the '${feature.docLinks.contracts}' Extension. Learn how to unlock this functionality at https://portal.thirdweb.com/extensions `);
  }

}
/**
 * @internal
 */

/**
 * @public
 */
class TransactionError extends Error {
  constructor(reason, from, to, data, network, rpcUrl, raw, functionInfo) {
    let builtErrorMsg = "Contract transaction failed\n\n";
    builtErrorMsg += `Message: ${reason}`;
    builtErrorMsg += "\n\n| Transaction info |\n";
    builtErrorMsg += withSpaces("from", from);
    builtErrorMsg += withSpaces("to", to);
    builtErrorMsg += withSpaces(`chain`, `${network.name} (${network.chainId})`);

    if (functionInfo) {
      builtErrorMsg += "\n\n| Failed contract call info |\n";
      builtErrorMsg += withSpaces("function", functionInfo.signature);
      builtErrorMsg += withSpaces(`arguments`, JSON.stringify(functionInfo.inputs, null, 2));

      if (functionInfo.value.gt(0)) {
        var _NATIVE_TOKENS;

        builtErrorMsg += withSpaces("value", `${ethers.ethers.utils.formatEther(functionInfo.value)} ${(_NATIVE_TOKENS = NATIVE_TOKENS[network.chainId]) === null || _NATIVE_TOKENS === void 0 ? void 0 : _NATIVE_TOKENS.symbol}`);
      }
    }

    try {
      const url = new URL(rpcUrl);
      builtErrorMsg += withSpaces(`RPC`, url.hostname);
    } catch (e2) {// ignore if can't parse URL
    }

    builtErrorMsg += "\n\n";
    builtErrorMsg += "Need help with this error? Join our community: https://discord.gg/thirdweb";
    builtErrorMsg += "\n\n\n\n";
    builtErrorMsg += "| Raw error |";
    builtErrorMsg += "\n\n";
    builtErrorMsg += raw;
    super(builtErrorMsg);

    defineProperty._defineProperty(this, "reason", void 0);

    defineProperty._defineProperty(this, "from", void 0);

    defineProperty._defineProperty(this, "to", void 0);

    defineProperty._defineProperty(this, "data", void 0);

    defineProperty._defineProperty(this, "chain", void 0);

    defineProperty._defineProperty(this, "rpcUrl", void 0);

    defineProperty._defineProperty(this, "functionInfo", void 0);

    this.reason = reason;
    this.from = from;
    this.to = to;
    this.data = data;
    this.chain = network;
    this.rpcUrl = rpcUrl;
    this.functionInfo = functionInfo;
  }

}
/**
 * @internal
 * @param data
 * @param contractInterface
 */

function parseFunctionInfo(data, contractInterface) {
  try {
    const fnFragment = contractInterface.parseTransaction({
      data
    });
    const results = {};
    const args = fnFragment.args;
    fnFragment.functionFragment.inputs.forEach((param, index) => {
      if (Array.isArray(args[index])) {
        const obj = {};
        const components = param.components;

        if (components) {
          const arr = args[index];

          for (let i = 0; i < components.length; i++) {
            const name = components[i].name;
            obj[name] = arr[i];
          }

          results[param.name] = obj;
        }
      } else {
        results[param.name] = args[index];
      }
    });
    return {
      signature: fnFragment.signature,
      inputs: results,
      value: fnFragment.value
    };
  } catch (e) {
    return undefined;
  }
}
/**
 * @internal
 * @param error
 * @param network
 * @param signerAddress
 * @param contractAddress
 * @param contractInterface
 */


async function convertToTWError(error, network, signerAddress, contractAddress, contractInterface) {
  let raw;

  if (error.data) {
    // metamask errors comes as objects, apply parsing on data object
    // TODO test errors from other wallets
    raw = JSON.stringify(error.data);
  } else if (error instanceof Error) {
    // regular ethers.js error
    raw = error.message;
  } else {
    // not sure what this is, just throw it back
    raw = error.toString();
  }

  const reason = error.reason || parseMessageParts(/.*?"message[^a-zA-Z0-9]*([^"\\]*).*?/, raw);
  const data = parseMessageParts(/.*?"data[^a-zA-Z0-9]*([^"\\]*).*?/, raw);
  const rpcUrl = parseMessageParts(/.*?"url[^a-zA-Z0-9]*([^"\\]*).*?/, raw);
  let from = parseMessageParts(/.*?"from[^a-zA-Z0-9]*([^"\\]*).*?/, raw);
  let to = parseMessageParts(/.*?"to[^a-zA-Z0-9]*([^"\\]*).*?/, raw);

  if (to === "") {
    // fallback to contractAddress
    to = contractAddress;
  }

  if (from === "") {
    // fallback to signerAddress
    from = signerAddress;
  }

  const functionInfo = data.length > 0 ? parseFunctionInfo(data, contractInterface) : undefined;
  return new TransactionError(reason, from, to, data, network, rpcUrl, raw, functionInfo);
}

function withSpaces(label, content) {
  if (content === "") {
    return content;
  }

  const spaces = Array(10 - label.length).fill(" ").join("");
  return `\n${label}:${spaces}${content}`;
}

function parseMessageParts(regex, raw) {
  const msgMatches = raw.match(regex) || [];
  let extracted = "";

  if ((msgMatches === null || msgMatches === void 0 ? void 0 : msgMatches.length) > 0) {
    extracted += msgMatches[1];
  }

  return extracted;
}
/**
 * @internal
 * @param err
 * @param message
 */


function includesErrorMessage(err, message) {
  return err && err.toString().includes(message) || err.message && err.message.toString().includes(message) || err.error && err.error.toString().includes(message);
}

/**
 * Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS
 * @param snapshotInput - the list of addresses to hash
 * @param tokenDecimals - the token decimals
 * @param storage - the storage to upload to
 * @returns the generated snapshot and URI
 * @internal
 */

async function createSnapshot(snapshotInput, tokenDecimals, storage) {
  const input = SnapshotInputSchema.parse(snapshotInput);
  const addresses = input.map(i => i.address);
  const hasDuplicates = new Set(addresses).size < addresses.length;

  if (hasDuplicates) {
    throw new DuplicateLeafsError();
  }

  const hashedLeafs = input.map(i => hashLeafNode(i.address, ethers.utils.parseUnits(i.maxClaimable, tokenDecimals))); // import dynamically to avoid bloating bundle size for non-merkle tree users

  const MerkleTree = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('merkletreejs')); })).MerkleTree;
  const tree = new MerkleTree(hashedLeafs, ethers.utils.keccak256, {
    sort: true
  });
  const snapshot = SnapshotSchema.parse({
    merkleRoot: tree.getHexRoot(),
    claims: input.map((i, index) => {
      const proof = tree.getHexProof(hashedLeafs[index]);
      return {
        address: i.address,
        maxClaimable: i.maxClaimable,
        proof
      };
    })
  });
  const uri = await storage.upload(snapshot);
  return {
    merkleRoot: tree.getHexRoot(),
    snapshotUri: uri,
    snapshot
  };
}
/**
 * Hash an address and the corresponding claimable amount
 * @internal
 * @param address - the address
 * @param maxClaimableAmount - the amount
 */

function hashLeafNode(address, maxClaimableAmount) {
  return ethers.utils.solidityKeccak256(["address", "uint256"], [address, ethers.BigNumber.from(maxClaimableAmount)]);
}

/**
 *
 * @internal
 */

const roleMap = {
  admin: "",
  transfer: "TRANSFER_ROLE",
  minter: "MINTER_ROLE",
  pauser: "PAUSER_ROLE",
  lister: "LISTER_ROLE",
  asset: "ASSET_ROLE",
  unwrap: "UNWRAP_ROLE",
  factory: "FACTORY_ROLE"
};
/**
 * @public
 */

/**
 * @public
 */
const ALL_ROLES = Object.keys(roleMap);
/**
 * @internal
 */

function getRoleHash(role) {
  if (role === "admin") {
    return ethers.ethers.utils.hexZeroPad([0], 32);
  }

  return ethers.ethers.utils.id(roleMap[role]);
}

const FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS = {
  name: "ERC20ClaimableWithConditions",
  namespace: "token.drop.claim",
  docLinks: {
    sdk: "sdk.erc20dclaimable",
    contracts: "DropSinglePhase"
  },
  abis: [ERC20Abi__default["default"], IDropSinglePhase__default["default"]],
  features: {}
};
const FEATURE_TOKEN_BURNABLE = {
  name: "ERC20Burnable",
  namespace: "token.burn",
  docLinks: {
    sdk: "sdk.erc20burnable",
    contracts: "IBurnableERC20"
  },
  abis: [ERC20Abi__default["default"], IBurnableERC20Abi__default["default"]],
  features: {}
};
const FEATURE_TOKEN_SIGNATURE_MINTABLE = {
  name: "ERC20SignatureMintable",
  namespace: "token.signature",
  docLinks: {
    sdk: "sdk.erc20signaturemintable",
    contracts: "ISignatureMintERC20"
  },
  abis: [ERC20Abi__default["default"], ISignatureMintERC20Abi__default["default"]],
  features: {}
};
const FEATURE_TOKEN_BATCH_MINTABLE = {
  name: "ERC20BatchMintable",
  namespace: "token.mint.batch",
  docLinks: {
    sdk: "sdk.erc20batchmintable",
    contracts: "IMulticall"
  },
  abis: [ERC20Abi__default["default"], IMintableERC20Abi__default["default"], MulticallAbi__default["default"]],
  features: {}
};
const FEATURE_TOKEN_MINTABLE = {
  name: "ERC20Mintable",
  namespace: "token.mint",
  docLinks: {
    sdk: "sdk.erc20mintable",
    contracts: "IMintableERC20"
  },
  abis: [ERC20Abi__default["default"], IMintableERC20Abi__default["default"]],
  features: {
    [FEATURE_TOKEN_BATCH_MINTABLE.name]: FEATURE_TOKEN_BATCH_MINTABLE
  }
};
const FEATURE_TOKEN = {
  name: "ERC20",
  namespace: "token",
  docLinks: {
    sdk: "sdk.erc20",
    contracts: "IERC20"
  },
  abis: [ERC20Abi__default["default"]],
  features: {
    [FEATURE_TOKEN_BURNABLE.name]: FEATURE_TOKEN_BURNABLE,
    [FEATURE_TOKEN_MINTABLE.name]: FEATURE_TOKEN_MINTABLE,
    [FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS.name]: FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS,
    [FEATURE_TOKEN_SIGNATURE_MINTABLE.name]: FEATURE_TOKEN_SIGNATURE_MINTABLE
  }
};

const FEATURE_NFT_BURNABLE = {
  name: "ERC721Burnable",
  namespace: "nft.burn",
  docLinks: {
    sdk: "sdk.erc721burnable",
    contracts: "IBurnableERC721"
  },
  abis: [Erc721Abi__default["default"], IBurnableERC721Abi__default["default"]],
  features: {}
};
const FEATURE_NFT_REVEALABLE = {
  name: "ERC721Revealable",
  namespace: "nft.drop.revealer",
  docLinks: {
    sdk: "sdk.drop.delayedreveal",
    contracts: "DelayedReveal"
  },
  abis: [Erc721Abi__default["default"], ILazyMintAbi__default["default"], DelayedRevealAbi__default["default"]],
  features: {}
};
const FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS = {
  name: "ERC721ClaimableWithConditions",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "DropSinglePhase"
  },
  abis: [Erc721Abi__default["default"], ILazyMintAbi__default["default"], IDropSinglePhase__default["default"]],
  features: {}
};
const FEATURE_NFT_CLAIMABLE = {
  name: "ERC721Claimable",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "IClaimableERC721"
  },
  abis: [Erc721Abi__default["default"], ILazyMintAbi__default["default"], IClaimableERC721__default["default"]],
  features: {}
};
const FEATURE_NFT_LAZY_MINTABLE = {
  name: "ERC721LazyMintable",
  namespace: "nft.drop",
  docLinks: {
    sdk: "sdk.erc721lazymintable",
    contracts: "LazyMint"
  },
  abis: [Erc721Abi__default["default"], ILazyMintAbi__default["default"]],
  features: {
    [FEATURE_NFT_REVEALABLE.name]: FEATURE_NFT_REVEALABLE,
    [FEATURE_NFT_CLAIMABLE.name]: FEATURE_NFT_CLAIMABLE,
    [FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS.name]: FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS
  }
};
const FEATURE_NFT_BATCH_MINTABLE = {
  name: "ERC721BatchMintable",
  namespace: "nft.mint.batch",
  docLinks: {
    sdk: "sdk.erc721batchmintable",
    contracts: "IMulticall"
  },
  abis: [Erc721Abi__default["default"], IMintableERC721Abi__default["default"], MulticallAbi__default["default"]],
  features: {}
};
const FEATURE_NFT_MINTABLE = {
  name: "ERC721Mintable",
  namespace: "nft.mint",
  docLinks: {
    sdk: "sdk.erc721mintable",
    contracts: "IMintableERC721"
  },
  abis: [Erc721Abi__default["default"], IMintableERC721Abi__default["default"]],
  features: {
    [FEATURE_NFT_BATCH_MINTABLE.name]: FEATURE_NFT_BATCH_MINTABLE
  }
};
const FEATURE_NFT_SIGNATURE_MINTABLE = {
  name: "ERC721SignatureMint",
  namespace: "nft.signature",
  docLinks: {
    sdk: "sdk.erc721signaturemint",
    contracts: "ISignatureMintERC721"
  },
  abis: [Erc721Abi__default["default"], SignatureMintERC721Abi__default["default"]],
  features: {}
};
const FEATURE_NFT_ENUMERABLE = {
  name: "ERC721Enumerable",
  namespace: "nft.query.owned",
  docLinks: {
    sdk: "sdk.erc721enumerable",
    contracts: "IERC721Enumerable"
  },
  abis: [Erc721Abi__default["default"], Erc721EnumerableAbi__default["default"]],
  features: {}
};
const FEATURE_NFT_SUPPLY = {
  name: "ERC721Supply",
  namespace: "nft.query",
  docLinks: {
    sdk: "sdk.erc721supply",
    contracts: "IERC721Supply"
  },
  abis: [Erc721Abi__default["default"], Erc721SupplyAbi__default["default"]],
  features: {
    [FEATURE_NFT_ENUMERABLE.name]: FEATURE_NFT_ENUMERABLE
  }
};
const FEATURE_NFT = {
  name: "ERC721",
  namespace: "nft",
  docLinks: {
    sdk: "sdk.erc721",
    contracts: "IERC721"
  },
  abis: [Erc721Abi__default["default"]],
  features: {
    [FEATURE_NFT_BURNABLE.name]: FEATURE_NFT_BURNABLE,
    [FEATURE_NFT_SUPPLY.name]: FEATURE_NFT_SUPPLY,
    [FEATURE_NFT_MINTABLE.name]: FEATURE_NFT_MINTABLE,
    [FEATURE_NFT_LAZY_MINTABLE.name]: FEATURE_NFT_LAZY_MINTABLE,
    [FEATURE_NFT_SIGNATURE_MINTABLE.name]: FEATURE_NFT_SIGNATURE_MINTABLE
  }
};

const FEATURE_EDITION_BURNABLE = {
  name: "ERC1155Burnable",
  namespace: "edition.burn",
  docLinks: {
    sdk: "sdk.erc1155burnable",
    contracts: "IBurnableERC1155"
  },
  abis: [Erc1155Abi__default["default"], IBurnableERC1155Abi__default["default"]],
  features: {}
};
const FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS = {
  name: "ERC1155ClaimableWithConditions",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "DropSinglePhase1155"
  },
  abis: [Erc1155Abi__default["default"], ILazyMintAbi__default["default"], DropSinglePhase1155__default["default"]],
  features: {}
};
const FEATURE_EDITION_CLAIMABLE = {
  name: "ERC1155Claimable",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "IClaimableERC1155"
  },
  abis: [Erc1155Abi__default["default"], ILazyMintAbi__default["default"], IClaimableERC1155__default["default"]],
  features: {}
};
const FEATURE_EDITION_LAZY_MINTABLE = {
  name: "ERC1155LazyMintable",
  namespace: "edition.drop",
  docLinks: {
    sdk: "sdk.erc1155droppable",
    contracts: "LazyMint"
  },
  abis: [Erc1155Abi__default["default"], ILazyMintAbi__default["default"]],
  features: {
    [FEATURE_EDITION_CLAIMABLE.name]: FEATURE_EDITION_CLAIMABLE,
    [FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS.name]: FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS
  }
};
const FEATURE_EDITION_REVEALABLE = {
  name: "ERC1155Revealable",
  namespace: "edition.drop.revealer",
  docLinks: {
    sdk: "sdk.drop.delayedreveal",
    contracts: "DelayedReveal"
  },
  abis: [Erc1155Abi__default["default"], ILazyMintAbi__default["default"], DelayedRevealAbi__default$1["default"]],
  features: {}
};
const FEATURE_EDITION_SIGNATURE_MINTABLE = {
  name: "ERC1155SignatureMintable",
  namespace: "edition.signature",
  docLinks: {
    sdk: "sdk.erc1155signaturemintable",
    contracts: "ISignatureMintERC1155"
  },
  abis: [Erc1155Abi__default["default"], ISignatureMintERC1155Abi__default["default"]],
  features: {}
};
const FEATURE_EDITION_BATCH_MINTABLE = {
  name: "ERC1155BatchMintable",
  namespace: "edition.mint.batch",
  docLinks: {
    sdk: "sdk.erc1155batchmintable",
    contracts: "IMulticall"
  },
  abis: [Erc1155Abi__default["default"], IMintableERC1155Abi__default["default"], MulticallAbi__default["default"]],
  features: {}
};
const FEATURE_EDITION_MINTABLE = {
  name: "ERC1155Mintable",
  namespace: "edition.mint",
  docLinks: {
    sdk: "sdk.erc1155mintable",
    contracts: "IMintableERC1155"
  },
  abis: [Erc1155Abi__default["default"], IMintableERC1155Abi__default["default"]],
  features: {
    [FEATURE_EDITION_BATCH_MINTABLE.name]: FEATURE_EDITION_BATCH_MINTABLE
  }
};
const FEATURE_EDITION_ENUMERABLE = {
  name: "ERC1155Enumerable",
  namespace: "edition.query",
  docLinks: {
    sdk: "sdk.erc1155",
    contracts: "IERC1155"
  },
  abis: [Erc1155Abi__default["default"], Erc1155EnumerableAbi__default["default"]],
  features: {}
};
const FEATURE_EDITION = {
  name: "ERC1155",
  namespace: "edition",
  docLinks: {
    sdk: "sdk.erc1155enumerable",
    contracts: "IERC1155Enumerable"
  },
  abis: [Erc1155Abi__default["default"]],
  features: {
    [FEATURE_EDITION_BURNABLE.name]: FEATURE_EDITION_BURNABLE,
    [FEATURE_EDITION_ENUMERABLE.name]: FEATURE_EDITION_ENUMERABLE,
    [FEATURE_EDITION_MINTABLE.name]: FEATURE_EDITION_MINTABLE,
    [FEATURE_EDITION_LAZY_MINTABLE.name]: FEATURE_EDITION_LAZY_MINTABLE,
    [FEATURE_EDITION_REVEALABLE.name]: FEATURE_EDITION_REVEALABLE,
    [FEATURE_EDITION_SIGNATURE_MINTABLE.name]: FEATURE_EDITION_SIGNATURE_MINTABLE
  }
};

const FEATURE_ROYALTY = {
  name: "Royalty",
  namespace: "royalty",
  docLinks: {
    sdk: "sdk.contractroyalty",
    contracts: "Royalty"
  },
  abis: [IThirdwebRoyaltyAbi__default["default"]],
  features: {}
};
const FEATURE_PRIMARY_SALE = {
  name: "PrimarySale",
  namespace: "sales",
  docLinks: {
    sdk: "sdk.contractprimarysale",
    contracts: "PrimarySale"
  },
  abis: [IThirdwebPrimarySaleAbi__default["default"]],
  features: {}
};
const FEATURE_PLATFORM_FEE = {
  name: "PlatformFee",
  namespace: "platformFee",
  docLinks: {
    sdk: "sdk.platformfee",
    contracts: "PlatformFee"
  },
  abis: [IThirdwebPlatformFeeAbi__default["default"]],
  features: {}
};
const FEATURE_PERMISSIONS_ENUMERABLE = {
  name: "PermissionsEnumerable",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "PermissionsEnumerable"
  },
  abis: [IPermissionsEnumerableAbi__default["default"]],
  features: {}
};
const FEATURE_PERMISSIONS = {
  name: "Permissions",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "Permissions"
  },
  abis: [IPermissionsAbi__default["default"]],
  features: {
    [FEATURE_PERMISSIONS_ENUMERABLE.name]: FEATURE_PERMISSIONS_ENUMERABLE
  }
};
const FEATURE_METADATA = {
  name: "ContractMetadata",
  namespace: "metadata",
  docLinks: {
    sdk: "sdk.contractmetadata",
    contracts: "ContractMetadata"
  },
  abis: [IContractMetadataAbi__default["default"]],
  features: {}
};
const FEATURE_APPURI = {
  name: "AppURI",
  namespace: "appURI",
  docLinks: {
    sdk: "sdk.appURI",
    contracts: "AppURI"
  },
  abis: [IAppURI__default["default"]],
  features: {}
};
const FEATURE_OWNER = {
  name: "Ownable",
  namespace: "owner",
  docLinks: {
    sdk: "sdk.owner",
    contracts: "Ownable"
  },
  abis: [IOwnableAbi__default["default"]],
  features: {}
};

/**
 * @internal
 */

/**
 * @internal
 */
const SUPPORTED_FEATURES = {
  [FEATURE_TOKEN.name]: FEATURE_TOKEN,
  [FEATURE_NFT.name]: FEATURE_NFT,
  [FEATURE_EDITION.name]: FEATURE_EDITION,
  [FEATURE_ROYALTY.name]: FEATURE_ROYALTY,
  [FEATURE_PLATFORM_FEE.name]: FEATURE_PLATFORM_FEE,
  [FEATURE_PRIMARY_SALE.name]: FEATURE_PRIMARY_SALE,
  [FEATURE_PERMISSIONS.name]: FEATURE_PERMISSIONS,
  [FEATURE_METADATA.name]: FEATURE_METADATA,
  [FEATURE_APPURI.name]: FEATURE_APPURI,
  [FEATURE_OWNER.name]: FEATURE_OWNER
};

/**
 * @internal
 * @param abi
 * @param feature
 */
function matchesAbiInterface(abi, feature) {
  // returns true if all the functions in `interfaceToMatch` are found in `contract` (removing any duplicates)
  const contractFn = [...new Set(extractFunctionsFromAbi(abi).map(f => f.name))];
  const interfaceFn = [...new Set(feature.abis.flatMap(i => extractFunctionsFromAbi(i)).map(f => f.name))];
  return contractFn.filter(k => interfaceFn.includes(k)).length === interfaceFn.length;
}
/**
 * @internal
 */


async function extractConstructorParams(predeployMetadataUri, storage) {
  const meta = await fetchPreDeployMetadata(predeployMetadataUri, storage);
  return extractConstructorParamsFromAbi(meta.abi);
}
/**
 * @internal
 * @param predeployMetadataUri
 * @param storage
 */

async function extractFunctions(predeployMetadataUri, storage) {
  const metadata = await fetchPreDeployMetadata(predeployMetadataUri, storage);
  return extractFunctionsFromAbi(metadata.abi, metadata.metadata);
}
/**
 * @internal
 * @param name
 * @param metadata
 * @param type
 */

function extractCommentFromMetadata(name, metadata, type) {
  var _metadata$output, _metadata$output$user, _metadata$output$user2, _metadata$output$user3, _metadata$output2, _metadata$output3, _metadata$output3$dev, _metadata$output3$dev2, _metadata$output3$dev3, _metadata$output4;

  return (metadata === null || metadata === void 0 ? void 0 : (_metadata$output = metadata.output) === null || _metadata$output === void 0 ? void 0 : (_metadata$output$user = _metadata$output.userdoc) === null || _metadata$output$user === void 0 ? void 0 : (_metadata$output$user2 = _metadata$output$user[type]) === null || _metadata$output$user2 === void 0 ? void 0 : (_metadata$output$user3 = _metadata$output$user2[Object.keys((metadata === null || metadata === void 0 ? void 0 : (_metadata$output2 = metadata.output) === null || _metadata$output2 === void 0 ? void 0 : _metadata$output2.userdoc[type]) || {}).find(fn => fn.includes(name || "unknown")) || ""]) === null || _metadata$output$user3 === void 0 ? void 0 : _metadata$output$user3.notice) || (metadata === null || metadata === void 0 ? void 0 : (_metadata$output3 = metadata.output) === null || _metadata$output3 === void 0 ? void 0 : (_metadata$output3$dev = _metadata$output3.devdoc) === null || _metadata$output3$dev === void 0 ? void 0 : (_metadata$output3$dev2 = _metadata$output3$dev[type]) === null || _metadata$output3$dev2 === void 0 ? void 0 : (_metadata$output3$dev3 = _metadata$output3$dev2[Object.keys((metadata === null || metadata === void 0 ? void 0 : (_metadata$output4 = metadata.output) === null || _metadata$output4 === void 0 ? void 0 : _metadata$output4.devdoc[type]) || {}).find(fn => fn.includes(name || "unknown")) || ""]) === null || _metadata$output3$dev3 === void 0 ? void 0 : _metadata$output3$dev3.details);
}
/**
 *
 * @param abi
 * @returns
 * @internal
 */


function extractConstructorParamsFromAbi(abi) {
  for (const input of abi) {
    if (input.type === "constructor") {
      return input.inputs || [];
    }
  }

  return [];
}
/**
 *
 * @param abi
 * @param functionName
 * @returns
 * @internal
 */

function extractFunctionParamsFromAbi(abi, functionName) {
  for (const input of abi) {
    if (input.type === "function" && input.name === functionName) {
      return input.inputs || [];
    }
  }

  return [];
}
/**
 * @internal
 * @param abi
 * @param metadata
 */

function extractFunctionsFromAbi(abi, metadata) {
  const functions = (abi || []).filter(el => el.type === "function");
  const parsed = [];

  for (const f of functions) {
    var _f$inputs, _f$inputs$map, _f$outputs, _f$outputs$map;

    const doc = extractCommentFromMetadata(f.name, metadata, "methods");
    const args = ((_f$inputs = f.inputs) === null || _f$inputs === void 0 ? void 0 : (_f$inputs$map = _f$inputs.map(i => `${i.name || "key"}: ${toJSType(i)}`)) === null || _f$inputs$map === void 0 ? void 0 : _f$inputs$map.join(", ")) || "";
    const fargs = args ? `, ${args}` : "";
    const out = (_f$outputs = f.outputs) === null || _f$outputs === void 0 ? void 0 : (_f$outputs$map = _f$outputs.map(o => toJSType(o, true))) === null || _f$outputs$map === void 0 ? void 0 : _f$outputs$map.join(", ");
    const promise = out ? `: Promise<${out}>` : `: Promise<TransactionResult>`;
    const signature = `contract.call("${f.name}"${fargs})${promise}`;
    parsed.push({
      inputs: f.inputs || [],
      outputs: f.outputs || [],
      name: f.name || "unknown",
      signature,
      stateMutability: f.stateMutability || "",
      comment: doc
    });
  }

  return parsed;
}
/**
 * @internal
 * @param abi
 * @param metadata
 */

function extractEventsFromAbi(abi, metadata) {
  const events = abi.filter(el => el.type === "event");
  const parsed = [];

  for (const e of events) {
    const doc = extractCommentFromMetadata(e.name, metadata, "events");
    parsed.push({
      inputs: e.inputs || [],
      outputs: e.outputs || [],
      name: e.name || "unknown",
      comment: doc
    });
  }

  return parsed;
}

function toJSType(contractType) {
  let isReturnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let withName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let jsType = contractType.type;
  let isArray = false;

  if (jsType.endsWith("[]")) {
    isArray = true;
    jsType = jsType.slice(0, -2);
  }

  if (jsType.startsWith("bytes")) {
    jsType = "BytesLike";
  }

  if (jsType.startsWith("uint") || jsType.startsWith("int")) {
    jsType = isReturnType ? "BigNumber" : "BigNumberish";
  }

  if (jsType.startsWith("bool")) {
    jsType = "boolean";
  }

  if (jsType === "address") {
    jsType = "string";
  }

  if (jsType === "tuple") {
    if (contractType.components) {
      jsType = `{ ${contractType.components.map(a => toJSType(a, false, true)).join(", ")} }`;
    }
  }

  if (isArray) {
    jsType += "[]";
  }

  if (withName) {
    jsType = `${contractType.name}: ${jsType}`;
  }

  return jsType;
}
/**
 * @internal
 * @param address
 * @param provider
 */


async function resolveContractUriFromAddress(address, provider) {
  const bytecode = await provider.getCode(address);

  if (bytecode === "0x") {
    const chain = await provider.getNetwork();
    throw new Error(`Contract at ${address} does not exist on chain '${chain.name}' (chainId: ${chain.chainId})`);
  } // EIP-1167 clone proxy - https://eips.ethereum.org/EIPS/eip-1167


  if (bytecode.startsWith("0x363d3d373d3d3d363d")) {
    const implementationAddress = bytecode.slice(22, 62);
    return await resolveContractUriFromAddress(`0x${implementationAddress}`, provider);
  } // EIP-1967 proxy storage slots - https://eips.ethereum.org/EIPS/eip-1967


  try {
    const proxyStorage = await provider.getStorageAt(address, ethers.BigNumber.from("0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"));
    const implementationAddress = ethers.ethers.utils.hexStripZeros(proxyStorage);

    if (implementationAddress !== "0x") {
      return await resolveContractUriFromAddress(implementationAddress, provider);
    }
  } catch (e) {// ignore
  } // TODO support other types of proxies


  return await extractIPFSHashFromBytecode(bytecode);
}
/**
 * @internal
 * @param bytecode
 */

async function extractIPFSHashFromBytecode(bytecode) {
  const numericBytecode = hexToBytes(bytecode);
  const cborLength = numericBytecode[numericBytecode.length - 2] * 0x100 + numericBytecode[numericBytecode.length - 1];
  const bytecodeBuffer = Uint8Array.from(numericBytecode.slice(numericBytecode.length - 2 - cborLength, -2)); // load these lazily to avoid loading them when they are not needed

  const [cbor, multiHashes] = await Promise.all([Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('cbor-web')); }), Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('multihashes')); })]);
  const cborData = cbor.decodeFirstSync(bytecodeBuffer);

  if (cborData["ipfs"]) {
    return `ipfs://${multiHashes.toB58String(cborData["ipfs"])}`;
  }

  return undefined;
}
/**
 * @internal
 * @param hex
 */


function hexToBytes(hex) {
  hex = hex.toString(16);

  if (!hex.startsWith("0x")) {
    hex = `0x${hex}`;
  }

  if (!isHexStrict(hex)) {
    throw new Error(`Given value "${hex}" is not a valid hex string.`);
  }

  hex = hex.replace(/^0x/i, "");
  const bytes = [];

  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.slice(c, c + 2), 16));
  }

  return bytes;
}
/**
 * @internal
 * @param hex
 */


function isHexStrict(hex) {
  return (typeof hex === "string" || typeof hex === "number") && /^(-)?0x[0-9a-f]*$/i.test(hex.toString());
}
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */


async function fetchContractMetadataFromAddress(address, provider, storage) {
  const compilerMetadataUri = await resolveContractUriFromAddress(address, provider);

  if (!compilerMetadataUri) {
    throw new Error(`Could not resolve metadata for contract at ${address}`);
  }

  return await fetchContractMetadata(compilerMetadataUri, storage);
}
/**
 * @internal
 * @param compilerMetadataUri
 * @param storage
 */

async function fetchContractMetadata(compilerMetadataUri, storage) {
  const metadata = await storage.downloadJSON(compilerMetadataUri);
  const abi = AbiSchema.parse(metadata.output.abi);
  const compilationTarget = metadata.settings.compilationTarget;
  const targets = Object.keys(compilationTarget);
  const name = compilationTarget[targets[0]];
  const info = ContractInfoSchema.parse({
    title: metadata.output.devdoc.title,
    author: metadata.output.devdoc.author,
    details: metadata.output.devdoc.detail,
    notice: metadata.output.userdoc.notice
  });
  const licenses = [...new Set(Object.entries(metadata.sources).map(_ref => {
    let [, src] = _ref;
    return src.license;
  }))];
  return {
    name,
    abi,
    metadata,
    info,
    licenses
  };
}
/**
 * @internal
 * @param publishedMetadata
 * @param storage
 */

async function fetchSourceFilesFromMetadata(publishedMetadata, storage) {
  return await Promise.all(Object.entries(publishedMetadata.metadata.sources).map(async _ref2 => {
    let [path, info] = _ref2;
    const urls = info.urls;
    const ipfsLink = urls.find(url => url.includes("ipfs"));

    if (ipfsLink) {
      const ipfsHash = ipfsLink.split("ipfs/")[1]; // 5 sec timeout for sources that haven't been uploaded to ipfs

      const timeout = new Promise((_r, rej) => setTimeout(() => rej("timeout"), 5000));
      const source = await Promise.race([(await storage.download(`ipfs://${ipfsHash}`)).text(), timeout]);
      return {
        filename: path,
        source
      };
    } else {
      return {
        filename: path,
        source: "Could not find source for this contract"
      };
    }
  }));
}
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */

async function fetchRawPredeployMetadata(publishMetadataUri, storage) {
  return PreDeployMetadata.parse(JSON.parse(await (await storage.download(publishMetadataUri)).text()));
}
/**
 * Fetch the metadata coming from CLI, this is before deploying or releasing the contract.
 * @internal
 * @param publishMetadataUri
 * @param storage
 */

async function fetchPreDeployMetadata(publishMetadataUri, storage) {
  const rawMeta = await fetchRawPredeployMetadata(publishMetadataUri, storage);
  const deployBytecode = await (await storage.download(rawMeta.bytecodeUri)).text();
  const parsedMeta = await fetchContractMetadata(rawMeta.metadataUri, storage);
  return PreDeployMetadataFetchedSchema.parse({ ...rawMeta,
    ...parsedMeta,
    bytecode: deployBytecode
  });
}
/**
 * Fetch and parse the full metadata AFTER creating a release, with all the extra information (version, readme, etc)
 * @internal
 * @param publishMetadataUri
 * @param storage
 */

async function fetchExtendedReleaseMetadata(publishMetadataUri, storage) {
  const meta = await (await storage.download(publishMetadataUri)).text();
  return FullPublishMetadataSchemaOutput.parse(JSON.parse(meta));
}
/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */

function detectFeatures(abi) {
  let features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SUPPORTED_FEATURES;
  const results = {};

  for (const featureKey in features) {
    const feature = features[featureKey];
    const enabled = matchesAbiInterface(abi, feature);
    const childResults = detectFeatures(abi, feature.features);
    results[featureKey] = { ...feature,
      features: childResults,
      enabled
    };
  }

  return results;
}
/**
 * Checks whether the given ABI supports a given feature
 * @internal
 * @param abi
 * @param featureName
 */

function isFeatureEnabled(abi, featureName) {
  const features = detectFeatures(abi);
  return _featureEnabled(features, featureName);
}
/**
 * Checks whether the given DetectableFeature is defined
 * @internal
 * @param namespace The namespace to check
 * @param feature The corresponding feature
 */

function assertEnabled(namespace, feature) {
  if (!namespace) {
    throw new ExtensionNotImplementedError(feature);
  }

  return namespace;
}
/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */

function detectContractFeature(contractWrapper, featureName) {
  return isFeatureEnabled(AbiSchema.parse(contractWrapper.abi), featureName);
}
/**
 * Searches the feature map for featureName and returns whether its enabled
 * @internal
 * @param features
 * @param featureName
 */

function _featureEnabled(features, featureName) {
  const keys = Object.keys(features);

  if (!keys.includes(featureName)) {
    let found = false;

    for (const key of keys) {
      const f = features[key];
      found = _featureEnabled(f.features, featureName);

      if (found) {
        break;
      }
    }

    return found;
  }

  const feature = features[featureName];
  return feature.enabled;
}
/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */


function hasFunction(functionName, contractWrapper) {
  return functionName in contractWrapper.readContract.functions;
}

const MAX_LENGTH = 256;
const NUMERIC_IDENTIFIER = "0|[1-9]\\d*";
const MAIN_VERSION_IDENTIFIER = `(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})`;
const REGEX_MAIN_VERSION = new RegExp(MAIN_VERSION_IDENTIFIER);
/**
 * @internal
 */

/**
 * @internal
 * @param version
 */
function toSemver(version) {
  if (version.length > MAX_LENGTH) {
    throw new Error(`version is longer than ${MAX_LENGTH} characters`);
  }

  const matches = version.trim().match(REGEX_MAIN_VERSION);

  if (!matches || (matches === null || matches === void 0 ? void 0 : matches.length) !== 4) {
    throw new Error(`${version} is not a valid semantic version. Should be in the format of major.minor.patch. Ex: 0.4.1`);
  }

  const major = Number(matches[1]);
  const minor = Number(matches[2]);
  const patch = Number(matches[3]);
  const versionString = [major, minor, patch].join(".");
  return {
    major,
    minor,
    patch,
    versionString
  };
}
/**
 * @internal
 * @param current
 * @param next
 */

function isIncrementalVersion(current, next) {
  const currentSemver = toSemver(current);
  const nextSemver = toSemver(next);

  if (nextSemver.major > currentSemver.major) {
    return true;
  }

  const eqMajor = nextSemver.major === currentSemver.major;

  if (eqMajor && nextSemver.minor > currentSemver.minor) {
    return true;
  }

  const eqMinor = nextSemver.minor === currentSemver.minor;
  return eqMajor && eqMinor && nextSemver.patch > currentSemver.patch;
}
function isDowngradeVersion(current, next) {
  const currentSemver = toSemver(current);
  const nextSemver = toSemver(next);

  if (nextSemver.major < currentSemver.major) {
    return true;
  }

  const eqMajor = nextSemver.major === currentSemver.major;

  if (eqMajor && nextSemver.minor < currentSemver.minor) {
    return true;
  }

  const eqMinor = nextSemver.minor === currentSemver.minor;
  return eqMajor && eqMinor && nextSemver.patch < currentSemver.patch;
}

/**
 * @internal
 */

const BYOCContractMetadataSchema = CommonContractSchema.catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));
/**
 * @internal
 */

/**
 * @internal
 */
const CustomContractInput = BYOCContractMetadataSchema.merge(CommonRoyaltySchema.merge(MerkleSchema).merge(CommonSymbolSchema).partial());
/**
 * @internal
 */

const CustomContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema.merge(MerkleSchema).merge(CommonSymbolSchema).partial());
/**
 * @internal
 */

const CustomContractDeploy = CustomContractInput.merge(CommonPlatformFeeSchema.merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema).partial());
/**
 * @internal
 */

const CustomContractSchema = {
  deploy: CustomContractDeploy,
  output: CustomContractOutput,
  input: CustomContractInput
};
/**
 * @internal
 */

const AbiTypeBaseSchema = zod.z.object({
  type: zod.z.string(),
  name: zod.z.string()
}).catchall(zod.z.any());
/**
 * @internal
 */

const AbiTypeSchema = AbiTypeBaseSchema.extend({
  stateMutability: zod.z.string().optional(),
  components: zod.z.array(AbiTypeBaseSchema).optional()
}).catchall(zod.z.any());
/**
 * @internal
 */

const AbiObjectSchema = zod.z.object({
  type: zod.z.string(),
  name: zod.z.string().default(""),
  inputs: zod.z.array(AbiTypeSchema).default([]),
  outputs: zod.z.array(AbiTypeSchema).default([])
}).catchall(zod.z.any());
/**
 * @internal
 */

const AbiSchema = zod.z.array(AbiObjectSchema);
/**
 * @internal
 */

const PreDeployMetadata = zod.z.object({
  name: zod.z.string(),
  metadataUri: zod.z.string(),
  bytecodeUri: zod.z.string(),
  analytics: zod.z.any().optional()
}).catchall(zod.z.any());
/**
 * @internal
 */

const ChainIdToAddressSchema = zod.z.record(zod.z.string(), zod.z.string());
/**
 * @internal
 */

const FactoryDeploymentSchema = zod.z.object({
  implementationAddresses: ChainIdToAddressSchema,
  implementationInitializerFunction: zod.z.string().default("initialize"),
  factoryAddresses: ChainIdToAddressSchema.optional()
});
/**
 * @internal
 */

const ExtraPublishMetadataSchemaInput = zod.z.object({
  version: zod.z.string().refine(v => {
    try {
      toSemver(v);
      return true;
    } catch (e) {
      return false;
    }
  }, out => {
    return {
      message: `'${out}' is not a valid semantic version. Should be in the format of major.minor.patch. Ex: 0.4.1`
    };
  }),
  displayName: zod.z.string().optional(),
  description: zod.z.string().optional(),
  readme: zod.z.string().optional(),
  license: zod.z.string().optional(),
  changelog: zod.z.string().optional(),
  tags: zod.z.array(zod.z.string()).optional(),
  audit: FileOrBufferOrStringSchema.nullable().optional(),
  logo: FileOrBufferOrStringSchema.nullable().optional(),
  isDeployableViaFactory: zod.z.boolean().optional(),
  isDeployableViaProxy: zod.z.boolean().optional(),
  factoryDeploymentData: FactoryDeploymentSchema.optional()
}).catchall(zod.z.any());
/**
 * @internal
 */

const ExtraPublishMetadataSchemaOutput = ExtraPublishMetadataSchemaInput.extend({
  audit: zod.z.string().nullable().optional(),
  logo: zod.z.string().nullable().optional()
});

/**
 * @internal
 */
const FullPublishMetadataSchemaInput = PreDeployMetadata.merge(ExtraPublishMetadataSchemaInput).extend({
  publisher: AddressSchema.optional()
});
/**
 * @internal
 */

const FullPublishMetadataSchemaOutput = PreDeployMetadata.merge(ExtraPublishMetadataSchemaOutput).extend({
  publisher: AddressSchema.optional()
});

/**
 * @internal
 */
const ProfileSchemaInput = zod.z.object({
  name: zod.z.string().optional(),
  bio: zod.z.string().optional(),
  avatar: FileOrBufferOrStringSchema.nullable().optional(),
  website: zod.z.string().optional(),
  twitter: zod.z.string().optional(),
  telegram: zod.z.string().optional(),
  facebook: zod.z.string().optional(),
  github: zod.z.string().optional(),
  medium: zod.z.string().optional(),
  linkedin: zod.z.string().optional(),
  reddit: zod.z.string().optional(),
  discord: zod.z.string().optional()
});
const ProfileSchemaOutput = ProfileSchemaInput.extend({
  avatar: zod.z.string().nullable().optional()
});

/**
 * @internal
 */
const PublishedContractSchema = zod.z.object({
  id: zod.z.string(),
  timestamp: BigNumberishSchema,
  metadataUri: zod.z.string()
});
/**
 * @internal
 * Follows https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
 */

const ContractInfoSchema = zod.z.object({
  title: zod.z.string().optional(),
  author: zod.z.string().optional(),
  details: zod.z.string().optional(),
  notice: zod.z.string().optional()
});
/**
 * @internal
 */

const CompilerMetadataFetchedSchema = zod.z.object({
  name: zod.z.string(),
  abi: AbiSchema,
  metadata: zod.z.record(zod.z.string(), zod.z.any()),
  info: ContractInfoSchema,
  licenses: zod.z.array(zod.z.string().optional()).default([]).transform(v => {
    return v.filter(license => license !== undefined);
  })
});
/**
 * @internal
 */

const PreDeployMetadataFetchedSchema = PreDeployMetadata.merge(CompilerMetadataFetchedSchema).extend({
  bytecode: zod.z.string()
});

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
  expirationTime: zod.z.date().optional(),

  /**
   * The optional chain ID that the login request was intended for
   */
  chainId: zod.z.number().optional()
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
   * The address of the account that is logging in
   */
  address: AddressSchema,

  /**
   * The nonce of the login request used to prevent replay attacks, defaults to a random UUID
   */
  nonce: zod.z.string().default(uuid.v4()),

  /**
   * The time after which the login payload will be invalid, defaults to 5 minutes from now
   */
  expiration_time: zod.z.date().transform(d => d.toISOString()),

  /**
   * The chain ID that the login request was intended for, defaults to none
   */
  chain_id: zod.z.number().optional()
});
/**
 * @internal
 */

const LoginPayloadSchema = zod.z.object({
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

const VerifyOptionsSchema = zod.z.object({
  /**
   * The optional chain ID to expect the request to be for
   */
  chainId: zod.z.number().optional()
}).optional();
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
  exp: RawDateSchema.transform(b => b.toNumber()),

  /**
   * The date after which the authentication payload is invalid
   */
  nbf: RawDateSchema.transform(b => b.toNumber()),

  /**
   * The date on which the payload was issued
   */
  iat: RawDateSchema.transform(b => b.toNumber()),

  /**
   * The unique identifier of the payload
   */
  jti: zod.z.string().default(uuid.v4())
});
/**
 * @internal
 */

const AuthenticationPayloadSchema = zod.z.object({
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
 * @internal
 */
// @ts-expext-error window is not defined
const isBrowser = () => typeof window !== "undefined";
/**
 * @internal
 */

const isNode = () => !isBrowser();

/**
 * @public
 */

const SDKOptionsSchema = zod.z.object({
  readonlySettings: zod.z.object({
    rpcUrl: zod.z.string().url(),
    chainId: zod.z.number().optional()
  }).optional(),
  gasSettings: zod.z.object({
    maxPriceInGwei: zod.z.number().min(1, "gas price cannot be less than 1").default(300),
    speed: zod.z.enum(["standard", "fast", "fastest"]).default("fastest")
  }).default({
    maxPriceInGwei: 300,
    speed: "fastest"
  }),
  gasless: zod.z.union([zod.z.object({
    openzeppelin: zod.z.object({
      relayerUrl: zod.z.string().url(),
      relayerForwarderAddress: zod.z.string().optional(),
      useEOAForwarder: zod.z.boolean().default(false)
    }),
    experimentalChainlessSupport: zod.z.boolean().default(false)
  }), zod.z.object({
    biconomy: zod.z.object({
      apiId: zod.z.string(),
      apiKey: zod.z.string(),
      deadlineSeconds: zod.z.number().min(1, "deadlineSeconds cannot be les than 1").default(3600)
    })
  })]).optional()
}).default({
  gasSettings: {
    maxPriceInGwei: 300,
    speed: "fastest"
  }
});
/**
 * @public
 * All these configuration options are optional with sane defaults:
 * @example
 * ```javascript
 * {
 *   readonlySettings: {
 *     rpcUrl, // force read calls to go through your own RPC url
 *     chainId, // reduce RPC calls by sepcifying your chain ID
 *   },
 *   gasSettings: {
 *     maxPriceInGwei, // Maximum gas price for transactions (default 300 gwei)
 *     speed, // the tx speed setting: 'standard'|'fast|'fastest' (default: 'fastest')
 *   },
 *   gasless: {
 *     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
 *     openzeppelin: {
 *       relayerUrl, // your OZ Defender relayer URL
 *       relayerForwarderAddress, // the OZ defender relayer address (defaults to the standard one)
 *     },
 *     biconomy: {
 *       apiId, // your Biconomy API Id
 *       apiKey, // your Biconomy API Key
 *       deadlineSeconds, // your Biconomy timeout preference
 *     },
 *   },
 * }
 * ```
 */

/**
 * @internal
 */

class RPCConnectionHandler extends EventEmitter__default["default"] {
  constructor(network, options) {
    super();

    defineProperty._defineProperty(this, "provider", void 0);

    defineProperty._defineProperty(this, "signer", void 0);

    defineProperty._defineProperty(this, "options", void 0);

    const [signer, provider] = getSignerAndProvider(network, options);
    this.signer = signer;
    this.provider = provider;

    try {
      this.options = SDKOptionsSchema.parse(options);
    } catch (optionParseError) {
      console.error("invalid sdk options object passed, falling back to default options", optionParseError);
      this.options = SDKOptionsSchema.parse({});
    }
  }
  /**
   * The function to call whenever the network changes, such as when the users connects their wallet, disconnects their wallet, the connected chain changes, etc.
   *
   * @param network - a network, signer or provider that ethers js can interpret
   */


  updateSignerOrProvider(network) {
    const [signer, provider] = getSignerAndProvider(network, this.options);
    this.signer = signer;
    this.provider = provider;
  }
  /**
   *
   * @returns whether or not a signer is set, `true` if there is no signer so the class is in "read only" mode
   */


  isReadOnly() {
    return !ethers.Signer.isSigner(this.signer);
  }
  /**
   * Explicitly get the active signer.
   * @returns the active signer, if there is one
   */


  getSigner() {
    return this.signer;
  }
  /**
   * Explicitly get the active provider.
   * @returns the active provider
   */


  getProvider() {
    return this.provider;
  }
  /**
   *
   * @returns the current signer if there is one, otherwise the active provider
   */


  getSignerOrProvider() {
    return this.getSigner() || this.getProvider();
  }

}
/**
 * @internal
 */

function getSignerAndProvider(network, options) {
  let signer;
  let provider;

  if (ethers.Signer.isSigner(network)) {
    signer = network;

    if (network.provider) {
      provider = network.provider;
    }
  }

  if (options !== null && options !== void 0 && options.readonlySettings) {
    provider = getReadOnlyProvider(options.readonlySettings.rpcUrl, options.readonlySettings.chainId);
  }

  if (!provider) {
    if (ethers.providers.Provider.isProvider(network)) {
      provider = network;
    } else if (!ethers.Signer.isSigner(network)) {
      if (typeof network === "string") {
        var _options$readonlySett;

        provider = getReadOnlyProvider(network, options === null || options === void 0 ? void 0 : (_options$readonlySett = options.readonlySettings) === null || _options$readonlySett === void 0 ? void 0 : _options$readonlySett.chainId);
      } else {
        // no a signer, not a provider, not a string? try with default provider
        provider = ethers.ethers.getDefaultProvider(network);
      }
    }
  }

  if (!provider) {
    // we should really never hit this case!
    provider = ethers.ethers.getDefaultProvider();
    console.error("No provider found, using default provider on default chain!");
  }

  return [signer, provider];
}

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
class WalletAuthenticator extends RPCConnectionHandler {
  constructor(network, wallet, options) {
    super(network, options);

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
    const signerAddress = await this.wallet.getAddress();
    const expirationTime = (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.expirationTime) || new Date(Date.now() + 1000 * 60 * 5);
    const payloadData = LoginPayloadDataSchema.parse({
      domain,
      address: signerAddress,
      nonce: parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.nonce,
      expiration_time: expirationTime,
      chain_id: parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.chainId
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
   * @returns Address of the logged in wallet
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


  verify(domain, payload, options) {
    const parsedOptions = VerifyOptionsSchema.parse(options); // Check that the intended domain matches the domain of the payload

    if (payload.payload.domain !== domain) {
      throw new Error(`Expected domain '${domain}' does not match domain on payload '${payload.payload.domain}'`);
    } // Check that the payload hasn't expired


    const currentTime = new Date();

    if (currentTime > new Date(payload.payload.expiration_time)) {
      throw new Error(`Login request has expired`);
    } // If chain ID is specified, check that it matches the chain ID of the signature


    if ((parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.chainId) !== undefined && parsedOptions.chainId !== payload.payload.chain_id) {
      throw new Error(`Chain ID '${parsedOptions.chainId}' does not match payload chain ID '${payload.payload.chain_id}'`);
    } // Check that the signing address is the claimed wallet address


    const message = this.generateMessage(payload.payload);
    const userAddress = this.wallet.recoverAddress(message, payload.signature);

    if (userAddress.toLowerCase() !== payload.payload.address.toLowerCase()) {
      throw new Error(`Signer address '${userAddress.toLowerCase()}' does not match payload address '${payload.payload.address.toLowerCase()}'`);
    }

    return userAddress;
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
    if (isBrowser()) {
      throw new Error("Authentication tokens should not be generated in the browser, as they must be signed by a server-side admin wallet.");
    }

    const parsedOptions = AuthenticationOptionsSchema.parse(options);
    const userAddress = this.verify(domain, payload);
    const adminAddress = await this.wallet.getAddress();
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
    if (isBrowser()) {
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


    const connectedAddress = await this.wallet.getAddress();

    if (connectedAddress.toLowerCase() !== payload.iss.toLowerCase()) {
      throw new Error(`Expected the connected wallet address '${connectedAddress}' to match the token issuer address '${payload.iss}'`);
    } // Check that the connected wallet signed the token


    const adminAddress = this.wallet.recoverAddress(JSON.stringify(payload), signature);

    if (connectedAddress.toLowerCase() !== adminAddress.toLowerCase()) {
      throw new Error(`The connected wallet address '${connectedAddress}' did not sign the token`);
    }

    return payload.sub;
  }
  /**
   * Generates a EIP-4361 compliant message to sign based on the login payload
   */


  generateMessage(payload) {
    let message = ``; // Add the domain and login address for transparency

    message += `${payload.domain} wants you to sign in with your account:\n${payload.address}\n\n`; // Prompt user to make sure domain is correct to prevent phishing attacks

    message += `Make sure that the requesting domain above matches the URL of the current website.\n\n`; // Add data fields in compliance with the EIP-4361 standard

    if (payload.chain_id) {
      message += `Chain ID: ${payload.chain_id}\n`;
    }

    message += `Nonce: ${payload.nonce}\n`;
    message += `Expiration Time: ${payload.expiration_time}\n`;
    return message;
  }

}

/**
 * Encodes and decodes Contract functions
 * @public
 */
class ContractEncoder {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Encodes the given contract function with argument
   * @returns the encoded data
   */


  encode(fn, args) {
    return this.contractWrapper.readContract.interface.encodeFunctionData(fn, args);
  }
  /**
   * Decode encoded call data for a given function
   * @param fn - the function to decode
   * @param encodedArgs - the encoded arguments
   */


  decode(fn, encodedArgs) {
    return this.contractWrapper.readContract.interface.decodeFunctionData(fn, encodedArgs);
  }

}

/**
 * Handles metadata for a Contract
 * @remarks Read and update metadata for this contract
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const metadata = await contract.metadata.get();
 * await contract.metadata.set({
 *   name: "My Contract",
 *   description: "My contract description"
 * })
 * ```
 * @public
 */
class ContractMetadata {
  constructor(contractWrapper, schema, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_METADATA.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "schema", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.contractWrapper = contractWrapper;
    this.schema = schema;
    this.storage = storage;
  }
  /**
   * @internal
   */


  parseOutputMetadata(metadata) {
    return this.schema.output.parse(metadata);
  }
  /**
   * @internal
   */


  parseInputMetadata(metadata) {
    return this.schema.input.parse(metadata);
  }
  /**
   * Get the metadata of a contract
   * @remarks Get the metadata of a contract
   * @example
   * ```javascript
   * const metadata = await contract.metadata.get();
   * ```
   * @public
   * @returns the metadata of the given contract
   * @twfeature ContractMetadata
   */


  async get() {
    let data;

    if (this.supportsContractMetadata(this.contractWrapper)) {
      const uri = await this.contractWrapper.readContract.contractURI();

      if (uri && uri.includes("://")) {
        data = await this.storage.downloadJSON(uri);
      }
    }

    if (!data) {
      try {
        // try fetching metadata from bytecode and / or contract itself
        let contractName;

        try {
          if (hasFunction("name", this.contractWrapper)) {
            contractName = await this.contractWrapper.readContract.name();
          }
        } catch (err) {// no-op
        }

        const publishedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.readContract.address, this.contractWrapper.getProvider(), this.storage);
        data = {
          name: contractName || publishedMetadata.name,
          description: publishedMetadata.info.title
        };
      } catch (e) {
        throw new Error("Could not fetch contract metadata");
      }
    }

    return this.parseOutputMetadata(data);
  }
  /**
   * Set the metadata of a contract
   * @remarks OVERWRITE the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.set({
   *  name: "My Contract",
   *  description: "My contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to set
   * @twfeature ContractMetadata
   */


  async set(metadata) {
    const uri = await this._parseAndUploadMetadata(metadata);
    const wrapper = this.contractWrapper;

    if (this.supportsContractMetadata(wrapper)) {
      const receipt = await wrapper.sendTransaction("setContractURI", [uri]);
      return {
        receipt,
        data: this.get
      };
    } else {
      throw new ExtensionNotImplementedError(FEATURE_METADATA);
    }
  }
  /**
   * Update the metadata of a contract
   * @remarks Update the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.update({
   *   name: "My Contract",
   *   description: "My contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to update
   * @twfeature ContractMetadata
   * */


  async update(metadata) {
    return await this.set({ ...(await this.get()),
      ...metadata
    });
  }
  /**
   *
   * @internal
   * @param metadata - the metadata to set
   * @returns
   */


  async _parseAndUploadMetadata(metadata) {
    const parsedMetadata = this.parseInputMetadata(metadata);
    return this.storage.upload(parsedMetadata);
  }

  supportsContractMetadata(contractWrapper) {
    return detectContractFeature(contractWrapper, "ContractMetadata");
  }

}

/**
 * Handle contract permissions
 * @remarks Configure roles and permissions for a contract, to restrict certain actions.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const rolesAndMembers = await contract.roles.getAll();
 * await contract.roles.grantRole("admin", "0x...");
 * ```
 * @public
 */

class ContractRoles {
  /**
   * @internal
   * @remarks This is used for typing inside react hooks which is why it has to be public.
   */
  constructor(contractWrapper, roles) {
    defineProperty._defineProperty(this, "featureName", FEATURE_PERMISSIONS.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "roles", void 0);

    this.contractWrapper = contractWrapper;
    this.roles = roles;
  }
  /** **************************
   * READ FUNCTIONS
   ****************************/

  /**
   * Call this to get get a list of addresses for all supported roles on the contract.
   * @remarks See {@link ContractRoles.get} to get a list of addresses that are members of a specific role.
   * @example
   * ```javascript
   * const rolesAndMembers = await contract.roles.getAll();
   * ```
   * @returns A record of {@link Role}s to lists of addresses that are members of the given role.
   * @throws If the contract does not support roles this will throw an error.
   *
   * @public
   * @twfeature Permissions
   */


  async getAll() {
    invariant__default["default"](this.roles.length, "this contract has no support for roles");
    const roles = {};

    for (const role of this.roles) {
      roles[role] = await this.get(role);
    }

    return roles;
  }
  /**
   * Call this to get a list of addresses that are members of a specific role.
   * @remarks See {@link ContractRoles.getAll} to get get a list of addresses for all supported roles on the contract.
   * @param role - The Role to to get a memberlist for.
   * @returns The list of addresses that are members of the specific role.
   * @throws If you are requestiong a role that does not exist on the contract this will throw an error.
   *
   * @example Say you want to get the list of addresses that are members of the minter role.
   * ```javascript
   * const minterAddresses = await contract.roles.get("minter");
   * ```
   *
   * @public
   * @twfeature Permissions
   */


  async get(role) {
    invariant__default["default"](this.roles.includes(role), `this contract does not support the "${role}" role`);
    const wrapper = this.contractWrapper;

    if (hasFunction("getRoleMemberCount", wrapper) && hasFunction("getRoleMember", wrapper)) {
      const roleHash = getRoleHash(role);
      const count = (await wrapper.readContract.getRoleMemberCount(roleHash)).toNumber();
      return await Promise.all(Array.from(Array(count).keys()).map(i => wrapper.readContract.getRoleMember(roleHash, i)));
    }

    throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.");
  }
  /**
   * Call this to OVERWRITE the list of addresses that are members of specific roles.
   *
   * Every role in the list will be overwritten with the new list of addresses provided with them.
   * If you want to add or remove addresses for a single address use {@link ContractRoles.grant} and {@link ContractRoles.revoke} respectively instead.
   * @param rolesWithAddresses - A record of {@link Role}s to lists of addresses that should be members of the given role.
   * @throws If you are requestiong a role that does not exist on the contract this will throw an error.
   * @example Say you want to overwrite the list of addresses that are members of the minter role.
   * ```javascript
   * const minterAddresses = await contract.roles.get("minter");
   * await contract.roles.setAll({
   *  minter: []
   * });
   * console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []
   * ```
   * @public
   * @twfeature Permissions
   *
   * */


  async setAll(rolesWithAddresses) {
    const roles = Object.keys(rolesWithAddresses);
    invariant__default["default"](roles.length, "you must provide at least one role to set");
    invariant__default["default"](roles.every(role => this.roles.includes(role)), "this contract does not support the given role");
    const currentRoles = await this.getAll();
    const encoded = []; // add / remove admin role at the end so we don't revoke admin then grant

    const sortedRoles = roles.sort(role => role === "admin" ? 1 : -1);

    for (let i = 0; i < sortedRoles.length; i++) {
      const role = sortedRoles[i];
      const addresses = rolesWithAddresses[role] || [];
      const currentAddresses = currentRoles[role] || [];
      const toAdd = addresses.filter(address => !currentAddresses.includes(address));
      const toRemove = currentAddresses.filter(address => !addresses.includes(address));

      if (toAdd.length) {
        toAdd.forEach(address => {
          encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("grantRole", [getRoleHash(role), address]));
        });
      }

      if (toRemove.length) {
        for (let j = 0; j < toRemove.length; j++) {
          const address = toRemove[j];
          const revokeFunctionName = await this.getRevokeRoleFunctionName(address);
          encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData(revokeFunctionName, [getRoleHash(role), address]));
        }
      }
    }

    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }
  /**
   * Throws an error if an address is missing the roles specified.
   *
   * @param roles - The roles to check
   * @param address - The address to check
   *
   * @internal
   */


  async verify(roles, address) {
    await Promise.all(roles.map(async role => {
      const members = await this.get(role);

      if (!members.map(a => a.toLowerCase()).includes(address.toLowerCase())) {
        throw new MissingRoleError(address, role);
      }
    }));
  }
  /** **************************
   * WRITE FUNCTIONS
   ****************************/

  /**
   * Call this to grant a role to a specific address.
   *
   * @remarks Make sure you are sure you want to grant the role to the address.
   *
   * @example
   * ```javascript
   * await contract.roles.grant("minter", "0x1234567890123456789012345678901234567890");
   * ```
   *
   * @param role - The {@link Role} to grant to the address
   * @param address - The address to grant the role to
   * @returns The transaction receipt
   * @throws If you are trying to grant does not exist on the contract this will throw an error.
   *
   * @public
   * @twfeature Permissions
   */


  async grant(role, address) {
    invariant__default["default"](this.roles.includes(role), `this contract does not support the "${role}" role`);
    return {
      receipt: await this.contractWrapper.sendTransaction("grantRole", [getRoleHash(role), address])
    };
  }
  /**
   * Call this to revoke a role from a specific address.
   *
   * @remarks
   *
   * -- Caution --
   *
   * This will let you remove yourself from the role, too.
   * If you remove yourself from the admin role, you will no longer be able to administer the contract.
   * There is no way to recover from this.
   *
   * @example
   * ```javascript
   * await contract.roles.revoke("minter", "0x1234567890123456789012345678901234567890");
   * ```
   *
   * @param role - The {@link Role} to revoke
   * @param address - The address to revoke the role from
   * @returns The transaction receipt
   * @throws If you are trying to revoke does not exist on the module this will throw an error.
   *
   * @public
   * @twfeature Permissions
   */


  async revoke(role, address) {
    invariant__default["default"](this.roles.includes(role), `this contract does not support the "${role}" role`);
    const revokeFunctionName = await this.getRevokeRoleFunctionName(address);
    return {
      receipt: await this.contractWrapper.sendTransaction(revokeFunctionName, [getRoleHash(role), address])
    };
  }
  /** **************************
   * PRIVATE FUNCTIONS
   ****************************/


  async getRevokeRoleFunctionName(address) {
    const signerAddress = await this.contractWrapper.getSignerAddress();

    if (signerAddress.toLowerCase() === address.toLowerCase()) {
      return "renounceRole";
    }

    return "revokeRole";
  }

}

/**
 * Handle contract royalties
 * @remarks Configure royalties for an entire contract or a particular token.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
 * await contract.roles.setTokenRoyaltyInfo(tokenId, {
 *   seller_fee_basis_points: 100, // 1% royalty fee
 *   fee_recipient: "0x...", // the fee recipient
 * });
 * ```
 * @public
 */
class ContractRoyalty {
  constructor(contractWrapper, metadata) {
    defineProperty._defineProperty(this, "featureName", FEATURE_ROYALTY.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "metadata", void 0);

    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }
  /**
   * Gets the royalty recipient and BPS (basis points) of the contract
   * @returns - The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * ```
   * @public
   * @twfeature Royalty
   */


  async getDefaultRoyaltyInfo() {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.readContract.getDefaultRoyaltyInfo(); // parse it on the way out to make sure we default things if they are not set

    return CommonRoyaltySchema.parse({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }
  /**
   * Gets the royalty recipient and BPS (basis points) of a particular token
   * @returns - The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * ```
   * @public
   * @twfeature Royalty
   */


  async getTokenRoyaltyInfo(tokenId) {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.readContract.getRoyaltyInfoForToken(tokenId);
    return CommonRoyaltySchema.parse({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }
  /**
   * Set the royalty recipient and fee for a contract
   * @param royaltyData - the royalty recipient and fee
   *  @example
   * ```javascript
   * await contract.roles.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */


  async setDefaultRoyaltyInfo(royaltyData) {
    // read the metadata from the contract
    const oldMetadata = await this.metadata.get(); // update the metadata with the new royalty data
    // if one of the keys is "undefined" it will be ignored (which is the desired behavior)

    const mergedMetadata = this.metadata.parseInputMetadata({ ...oldMetadata,
      ...royaltyData
    }); // why not use this.metadata.set()? - because that would end up sending it's own separate transaction to `setContractURI`
    // but we want to send both the `setRoyaltyInfo` and `setContractURI` in one transaction!

    const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);

    if (hasFunction("setContractURI", this.contractWrapper)) {
      // encode both the functions we want to send
      const encoded = [this.contractWrapper.readContract.interface.encodeFunctionData("setDefaultRoyaltyInfo", [mergedMetadata.fee_recipient, mergedMetadata.seller_fee_basis_points]), this.contractWrapper.readContract.interface.encodeFunctionData("setContractURI", [contractURI])]; // actually send the transaction and return the receipt + a way to get the new royalty info

      return {
        receipt: await this.contractWrapper.multiCall(encoded),
        data: () => this.getDefaultRoyaltyInfo()
      };
    } else {
      throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.");
    }
  }
  /**
   * Set the royalty recipient and fee for a particular token
   * @param tokenId - the token id
   * @param royaltyData - the royalty recipient and fee
   * @example
   * ```javascript
   * await contract.roles.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */


  async setTokenRoyaltyInfo(tokenId, royaltyData) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setRoyaltyInfoForToken", [tokenId, royaltyData.fee_recipient, royaltyData.seller_fee_basis_points]),
      data: () => this.getDefaultRoyaltyInfo()
    };
  }

}

/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.sales.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
class ContractPrimarySale {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_PRIMARY_SALE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the primary sale recipient.
   * @returns the wallet address.
   * @example
   * ```javascript
   * const salesRecipient = await contract.sales.getRecipient();
   * ```
   * @public
   * @twfeature PrimarySale
   */


  async getRecipient() {
    return await this.contractWrapper.readContract.primarySaleRecipient();
  }
  /**
   * Set the primary sale recipient
   * @param recipient - the wallet address
   * @example
   * ```javascript
   * await contract.sales.setRecipient(recipientWalletAddress);
   * ```
   * @public
   * @twfeature PrimarySale
   */


  async setRecipient(recipient) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setPrimarySaleRecipient", [recipient])
    };
  }

}

const FALLBACK_METADATA = {
  name: "Failed to load NFT metadata"
};
/**
 * fetches the token metadata
 * @param tokenId - the id (to get it back in the output)
 * @param tokenUri - the uri to fetch
 * @param storage - which storage to fetch from
 *
 * @internal
 */

async function fetchTokenMetadata(tokenId, tokenUri, storage) {
  const parsedUri = tokenUri.replace("{id}", ethers.ethers.utils.hexZeroPad(ethers.BigNumber.from(tokenId).toHexString(), 32).slice(2));
  let jsonMetadata;

  try {
    jsonMetadata = await storage.downloadJSON(parsedUri);
  } catch (err) {
    const unparsedTokenIdUri = tokenUri.replace("{id}", ethers.BigNumber.from(tokenId).toString());

    try {
      jsonMetadata = await storage.downloadJSON(unparsedTokenIdUri);
    } catch (e) {
      console.warn(`failed to get token metadata: ${JSON.stringify({
        tokenId: tokenId.toString(),
        tokenUri
      })} -- falling back to default metadata`);
      jsonMetadata = FALLBACK_METADATA;
    }
  }

  return defineProperty.CommonNFTOutput.parse({
    id: ethers.BigNumber.from(tokenId).toString(),
    uri: tokenUri,
    ...jsonMetadata
  });
} // Used for marketplace to fetch NFT metadata from contract address + tokenId

/**
 * @internal
 * @param contractAddress
 * @param provider
 * @param tokenId
 * @param storage
 */

async function fetchTokenMetadataForContract(contractAddress, provider, tokenId, storage) {
  let uri;
  const erc165 = new ethers.Contract(contractAddress, ERC165Abi__default["default"], provider);
  const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
  const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);

  if (isERC721) {
    const erc721 = new ethers.Contract(contractAddress, ERC721MetadataAbi__default["default"], provider);
    uri = await erc721.tokenURI(tokenId);
  } else if (isERC1155) {
    const erc1155 = new ethers.Contract(contractAddress, ERC1155MetadataAbi__default["default"], provider);
    uri = await erc1155.uri(tokenId);
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }

  if (!uri) {
    throw new NotFoundError();
  }

  return fetchTokenMetadata(tokenId, uri, storage);
}
/**
 * @internal
 * @param metadata
 * @param storage
 */

async function uploadOrExtractURI(metadata, storage) {
  if (typeof metadata === "string") {
    return metadata;
  } else {
    return await storage.upload(defineProperty.CommonNFTInput.parse(metadata));
  }
}
/**
 * @internal
 * @param metadatas
 * @param storage
 * @param startNumber
 * @param contractAddress
 * @param signerAddress
 * @param options
 */

async function uploadOrExtractURIs(metadatas, storage, startNumber, options) {
  if (isUriList(metadatas)) {
    return metadatas;
  } else if (isMetadataList(metadatas)) {
    const uris = await storage.uploadBatch(metadatas.map(m => defineProperty.CommonNFTInput.parse(m)), {
      rewriteFileNames: {
        fileStartNumber: startNumber || 0
      },
      onProgress: options === null || options === void 0 ? void 0 : options.onProgress
    });
    return uris;
  } else {
    throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)");
  }
}
function getBaseUriFromBatch(uris) {
  const baseUri = uris[0].substring(0, uris[0].lastIndexOf("/"));

  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i].substring(0, uris[i].lastIndexOf("/"));

    if (baseUri !== uri) {
      throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
    }
  } // Ensure that baseUri ends with trailing slash


  return baseUri.replace(/\/$/, "") + "/";
}

function isUriList(metadatas) {
  return metadatas.find(m => typeof m !== "string") === undefined;
}

function isMetadataList(metadatas) {
  return metadatas.find(m => typeof m !== "object") === undefined;
}

/**
 * Handles delayed reveal logic
 * @public
 */

class DelayedReveal {
  constructor(contractWrapper, storage, fetureName, nextTokenIdToMintFn) {
    defineProperty._defineProperty(this, "featureName", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "nextTokenIdToMintFn", void 0);

    this.featureName = fetureName;
    this.nextTokenIdToMintFn = nextTokenIdToMintFn;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Create a batch of encrypted NFTs that can be revealed at a later time.
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until your reveal them!
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * ```
   * @public
   * @param placeholder - the placeholder NFT to show before the reveal
   * @param metadatas - the final NFTs that will be hidden
   * @param password - the password that will be used to reveal these NFTs
   * @param options - additional options like upload progress
   */


  async createDelayedRevealBatch(placeholder, metadatas, password, options) {
    if (!password) {
      throw new Error("Password is required");
    }

    const placeholderUris = await this.storage.uploadBatch([defineProperty.CommonNFTInput.parse(placeholder)], {
      rewriteFileNames: {
        fileStartNumber: 0
      }
    });
    const placeholderUri = getBaseUriFromBatch(placeholderUris);
    const startFileNumber = await this.nextTokenIdToMintFn();
    const uris = await this.storage.uploadBatch(metadatas.map(m => defineProperty.CommonNFTInput.parse(m)), {
      onProgress: options === null || options === void 0 ? void 0 : options.onProgress,
      rewriteFileNames: {
        fileStartNumber: startFileNumber.toNumber()
      }
    });
    const baseUri = getBaseUriFromBatch(uris);
    const baseUriId = await this.contractWrapper.readContract.getBaseURICount();
    const hashedPassword = await this.hashDelayRevealPasword(baseUriId, password);
    const encryptedBaseUri = await this.contractWrapper.readContract.encryptDecrypt(ethers.ethers.utils.toUtf8Bytes(baseUri), hashedPassword);
    let data;
    const legacyContract = await this.isLegacyContract();

    if (legacyContract) {
      data = encryptedBaseUri;
    } else {
      const chainId = await this.contractWrapper.getChainID();
      const provenanceHash = ethers.ethers.utils.solidityKeccak256(["bytes", "bytes", "uint256"], [ethers.ethers.utils.toUtf8Bytes(baseUri), hashedPassword, chainId]);
      data = ethers.ethers.utils.defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
    }

    const receipt = await this.contractWrapper.sendTransaction("lazyMint", [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, data]);
    const events = this.contractWrapper.parseLogs("TokensLazyMinted", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    const startingIndex = events[0].args.startTokenId;
    const endingIndex = events[0].args.endTokenId;
    const results = [];

    for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt
      });
    }

    return results;
  }
  /**
   * Reveal a batch of hidden NFTs
   * @remarks Reveal the NFTs of a batch using the password.
   * @example
   * ```javascript
   * // the batch to reveal
   * const batchId = 0;
   * // reveal the batch
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   * @public
   * @param batchId - the id of the batch to reveal
   * @param password - the password
   */


  async reveal(batchId, password) {
    if (!password) {
      throw new Error("Password is required");
    }

    const key = await this.hashDelayRevealPasword(batchId, password); // performing the reveal locally to make sure it'd succeed before sending the transaction

    try {
      const decryptedUri = await this.contractWrapper.callStatic().reveal(batchId, key); // basic sanity check for making sure decryptedUri is valid
      // this is optional because invalid decryption key would result in non-utf8 bytes and
      // ethers would throw when trying to decode it

      if (!decryptedUri.includes("://") || !decryptedUri.endsWith("/")) {
        throw new Error("invalid password");
      }
    } catch (e) {
      throw new Error("invalid password");
    }

    return {
      receipt: await this.contractWrapper.sendTransaction("reveal", [batchId, key])
    };
  }
  /**
   * Gets the list of unrevealed NFT batches.
   * @remarks Gets the list of unrevealed NFT batches.
   * @example
   * ```javascript
   * const batches = await contract.revealer.getBatchesToReveal();
   * ```
   * @public
   */


  async getBatchesToReveal() {
    const count = await this.contractWrapper.readContract.getBaseURICount();

    if (count.isZero()) {
      return [];
    }

    const countRangeArray = Array.from(Array(count.toNumber()).keys()); // map over to get the base uri indices, which should be the end token id of every batch

    const uriIndices = await Promise.all(countRangeArray.map(i => {
      if (hasFunction("getBatchIdAtIndex", this.contractWrapper)) {
        return this.contractWrapper.readContract.getBatchIdAtIndex(i);
      }

      if (hasFunction("baseURIIndices", this.contractWrapper)) {
        return this.contractWrapper.readContract.baseURIIndices(i);
      }

      throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.");
    })); // first batch always start from 0. don't need to fetch the last batch so pop it from the range array

    const uriIndicesWithZeroStart = uriIndices.slice(0, uriIndices.length - 1); // returns the token uri for each batches. first batch always starts from token id 0.

    const tokenMetadatas = await Promise.all(Array.from([0, ...uriIndicesWithZeroStart]).map(i => this.getNftMetadata(i.toString()))); // index is the uri indices, which is end token id. different from uris

    const legacyContract = await this.isLegacyContract();
    const encryptedUriData = await Promise.all(Array.from([...uriIndices]).map(i => legacyContract ? this.getLegacyEncryptedData(i) : this.contractWrapper.readContract.encryptedData(i)));
    const encryptedBaseUris = encryptedUriData.map(data => {
      if (ethers.ethers.utils.hexDataLength(data) > 0) {
        if (legacyContract) {
          return data;
        }

        const result = ethers.ethers.utils.defaultAbiCoder.decode(["bytes", "bytes32"], data);
        return result[0];
      } else {
        return data;
      }
    });
    return tokenMetadatas.map((meta, index) => ({
      batchId: ethers.BigNumber.from(index),
      batchUri: meta.uri,
      placeholderMetadata: meta
    })).filter((_, index) => ethers.ethers.utils.hexDataLength(encryptedBaseUris[index]) > 0);
  }
  /**
   * Algorithm to hash delay reveal password, so we don't broadcast the input password on-chain.
   *
   * @internal
   */


  async hashDelayRevealPasword(batchTokenIndex, password) {
    const chainId = await this.contractWrapper.getChainID();
    const contractAddress = this.contractWrapper.readContract.address;
    return ethers.ethers.utils.solidityKeccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchTokenIndex, contractAddress]);
  }

  async getNftMetadata(tokenId) {
    return fetchTokenMetadataForContract(this.contractWrapper.readContract.address, this.contractWrapper.getProvider(), tokenId, this.storage);
  }

  async isLegacyContract() {
    if (hasFunction("contractVersion", this.contractWrapper)) {
      try {
        const version = await this.contractWrapper.readContract.contractVersion();
        return version <= 2;
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  async getLegacyEncryptedData(index) {
    const legacy = new ethers.ethers.Contract(this.contractWrapper.readContract.address, DeprecatedAbi__default["default"], this.contractWrapper.getProvider());
    const result = await legacy.functions["encryptedBaseURI"](index);

    if (result.length > 0) {
      return result[0];
    } else {
      return "0x";
    }
  }

}

/**
 * @internal
 */

const ForwardRequest = [{
  name: "from",
  type: "address"
}, {
  name: "to",
  type: "address"
}, {
  name: "value",
  type: "uint256"
}, {
  name: "gas",
  type: "uint256"
}, {
  name: "nonce",
  type: "uint256"
}, {
  name: "data",
  type: "bytes"
}];
const ChainAwareForwardRequest = [{
  name: "from",
  type: "address"
}, {
  name: "to",
  type: "address"
}, {
  name: "value",
  type: "uint256"
}, {
  name: "gas",
  type: "uint256"
}, {
  name: "nonce",
  type: "uint256"
}, {
  name: "data",
  type: "bytes"
}, {
  name: "chainid",
  type: "uint256"
}];
/**
 * @internal
 */

const BiconomyForwarderAbi = [{
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "uint256",
    name: "batchId",
    type: "uint256"
  }],
  name: "getNonce",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];
const _nonces = {};
const _noncesSyncTimestamp = {};
/**
 * @internal
 */

async function getAndIncrementNonce(forwarder, forwarderFunction, forwarderArgs) {
  // address is only used for internal caching :)
  const address = forwarderArgs.join("|");
  const timestamp = _noncesSyncTimestamp[address]; // if it's within 2 seconds we're optimistically increment the nonce
  // should we always sync?

  const shouldSync = Date.now() - timestamp >= 2000;

  if (!(address in _nonces) || shouldSync) {
    const nonceResult = await forwarder.functions[forwarderFunction](...forwarderArgs);

    if (Array.isArray(nonceResult) && nonceResult.length > 0) {
      _nonces[address] = ethers.BigNumber.from(nonceResult[0]);
    } else {
      _nonces[address] = ethers.BigNumber.from(nonceResult);
    }

    _noncesSyncTimestamp[address] = Date.now();
  }

  const nonce = _nonces[address];
  _nonces[address] = ethers.BigNumber.from(_nonces[address]).add(1);
  return nonce;
}

/**
 * @internal
 */

function getGasStationUrl(chainId) {
  switch (chainId) {
    case exports.ChainId.Polygon:
      return "https://gasstation-mainnet.matic.network/v2";

    case exports.ChainId.Mumbai:
      return "https://gasstation-mumbai.matic.today/v2";
  }
}

const MIN_POLYGON_GAS_PRICE = ethers.ethers.utils.parseUnits("31", "gwei");
const MIN_MUMBAI_GAS_PRICE = ethers.ethers.utils.parseUnits("1", "gwei");
/**
 * @internal
 */

function getDefaultGasFee(chainId) {
  switch (chainId) {
    case exports.ChainId.Polygon:
      return MIN_POLYGON_GAS_PRICE;

    case exports.ChainId.Mumbai:
      return MIN_MUMBAI_GAS_PRICE;
  }
}
/**
 *
 * @returns the gas price
 * @internal
 */


async function getPolygonGasPriorityFee(chainId) {
  const gasStationUrl = getGasStationUrl(chainId);

  try {
    const data = await (await fetch__default["default"](gasStationUrl)).json(); // take the standard speed here, SDK options will define the extra tip

    const priorityFee = data["standard"]["maxPriorityFee"];

    if (priorityFee > 0) {
      const fixedFee = parseFloat(priorityFee).toFixed(9);
      return ethers.ethers.utils.parseUnits(fixedFee, "gwei");
    }
  } catch (e) {
    console.error("failed to fetch gas", e);
  }

  return getDefaultGasFee(chainId);
}

// couldn't find this in barbones ethers export, but "type" should mean it does not increase bundle size either way
/**
 * @internal
 */

/**
 * eip712 sign typed data with different wallet handling including ledger live
 * @internal
 */
async function signTypedDataInternal(signer, domain, types, message) {
  var _provider;

  const provider = signer === null || signer === void 0 ? void 0 : signer.provider;

  if (!provider) {
    throw new Error("missing provider");
  }

  const payload = ethers.ethers.utils._TypedDataEncoder.getPayload(domain, types, message);

  let signature = ""; // an indirect way for accessing walletconnect's underlying provider

  if (provider !== null && provider !== void 0 && (_provider = provider.provider) !== null && _provider !== void 0 && _provider.isWalletConnect) {
    signature = await provider.send("eth_signTypedData", [(await signer.getAddress()).toLowerCase(), JSON.stringify(payload)]);
  } else {
    try {
      signature = await signer._signTypedData(domain, types, message);
    } catch (err) {
      var _err$message;

      if (err !== null && err !== void 0 && (_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes("Method eth_signTypedData_v4 not supported")) {
        signature = await provider.send("eth_signTypedData", [(await signer.getAddress()).toLowerCase(), JSON.stringify(payload)]);
      } else {
        throw err;
      }
    }
  } // fix ledger live where signature result in v = 0, 1. ethers magically fix it in split/join.


  return {
    payload,
    signature: ethers.ethers.utils.joinSignature(ethers.ethers.utils.splitSignature(signature))
  };
}

const NAME_ABI = [{
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
const DOMAIN_SEPARATOR_ABI = [{
  constant: true,
  inputs: [],
  name: "DOMAIN_SEPARATOR",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getDomainSeperator",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}];
const NONCES_ABI = [{
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "nonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "user",
    type: "address"
  }],
  name: "getNonce",
  outputs: [{
    internalType: "uint256",
    name: "nonce",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];

async function getSignerNonce(signer, contractAddress) {
  const contract = new ethers.Contract(contractAddress, NONCES_ABI, signer);

  try {
    return await contract.nonces(await signer.getAddress());
  } catch (err) {
    return await contract.getNonce(await signer.getAddress());
  }
}

async function getDomainSeperator(signer, contractAddress) {
  const contract = new ethers.Contract(contractAddress, DOMAIN_SEPARATOR_ABI, signer);

  try {
    return await contract.DOMAIN_SEPARATOR();
  } catch (err) {
    return await contract.getDomainSeperator();
  }
}

async function getTokenName(signer, contractAddress) {
  return new ethers.Contract(contractAddress, NAME_ABI, signer).name();
}
/**
 * Polygon chain has different EIP712 domain separator for USDC, DAI compared to other chains and slightly different than EIP-2612.
 */


async function getChainDomainSeperator(signer, domain) {
  const contractDomainSeparator = await getDomainSeperator(signer, domain.verifyingContract);
  const polygonDomain = {
    name: domain.name,
    version: domain.version,
    verifyingContract: domain.verifyingContract,
    salt: ethers.ethers.utils.hexZeroPad(ethers.BigNumber.from(domain.chainId).toHexString(), 32)
  };

  if (ethers.ethers.utils._TypedDataEncoder.hashDomain(polygonDomain) === contractDomainSeparator) {
    return polygonDomain;
  }

  return domain;
}
/**
 * @internal
 */

async function signEIP2612Permit(signer, currencyAddress, owner, spender, value, deadline, nonce) {
  const domain = await getChainDomainSeperator(signer, {
    name: await getTokenName(signer, currencyAddress),
    version: "1",
    chainId: await signer.getChainId(),
    verifyingContract: currencyAddress
  });
  nonce = nonce || (await getSignerNonce(signer, currencyAddress)).toString();
  deadline = deadline || ethers.ethers.constants.MaxUint256;
  const message = {
    owner,
    spender,
    value,
    nonce,
    deadline
  };
  const types = {
    Permit: [{
      name: "owner",
      type: "address"
    }, {
      name: "spender",
      type: "address"
    }, {
      name: "value",
      type: "uint256"
    }, {
      name: "nonce",
      type: "uint256"
    }, {
      name: "deadline",
      type: "uint256"
    }]
  };
  const {
    signature
  } = await signTypedDataInternal(signer, domain, types, message);
  return {
    message,
    signature
  };
}

const DropErc721ContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc721ContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc721ContractDeploy = DropErc721ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc721ContractSchema = {
  deploy: DropErc721ContractDeploy,
  output: DropErc721ContractOutput,
  input: DropErc721ContractInput
};

const DropErc1155ContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc1155ContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc1155ContractDeploy = DropErc1155ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc1155ContractSchema = {
  deploy: DropErc1155ContractDeploy,
  output: DropErc1155ContractOutput,
  input: DropErc1155ContractInput
};

const MarketplaceContractInput = CommonContractSchema;
const MarketplaceContractOutput = CommonContractOutputSchema;
const MarketplaceContractDeploy = MarketplaceContractInput.merge(CommonPlatformFeeSchema).merge(CommonTrustedForwarderSchema);
const MarketplaceContractSchema = {
  deploy: MarketplaceContractDeploy,
  output: MarketplaceContractOutput,
  input: MarketplaceContractInput
};

const PackContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const PackContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const PackContractDeploy = PackContractInput.merge(CommonPlatformFeeSchema).merge(CommonTrustedForwarderSchema);
const PackContractSchema = {
  deploy: PackContractDeploy,
  output: PackContractOutput,
  input: PackContractInput
};

const SplitRecipientInputSchema = zod.z.object({
  address: AddressSchema,
  sharesBps: BasisPointsSchema.gt(0, "Shares must be greater than 0")
});
const SplitRecipientOuputSchema = SplitRecipientInputSchema.extend({
  address: AddressSchema,
  sharesBps: BasisPointsSchema
});
const SplitsContractInput = CommonContractSchema.extend({
  recipients: zod.z.array(SplitRecipientInputSchema).default([]).superRefine((val, context) => {
    const addressMap = {};
    let totalShares = 0;

    for (let index = 0; index < val.length; index++) {
      const entry = val[index];

      if (addressMap[entry.address]) {
        context.addIssue({
          code: zod.z.ZodIssueCode.custom,
          message: `Duplicate address.`,
          path: [index, `address`]
        });
      }

      addressMap[entry.address] = true;
      totalShares += entry.sharesBps;

      if (totalShares > 10000) {
        context.addIssue({
          code: zod.z.ZodIssueCode.custom,
          message: `Total shares cannot go over 100%.`,
          path: [index, `sharesBps`]
        });
      }
    }

    if (totalShares !== 10000) {
      context.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Total shares need to add up to 100%. Total shares are currently ${totalShares / 100}%`,
        path: []
      });
    }
  })
});
const SplitsContractOutput = CommonContractOutputSchema.extend({
  recipients: zod.z.array(SplitRecipientOuputSchema)
});
const SplitsContractDeploy = SplitsContractInput.merge(SplitsContractInput).merge(CommonTrustedForwarderSchema);
const SplitsContractSchema = {
  deploy: SplitsContractDeploy,
  output: SplitsContractOutput,
  input: SplitsContractInput
};

const TokenErc20ContractInput = CommonContractSchema.merge(CommonSymbolSchema);
const TokenErc20ContractOutput = CommonContractOutputSchema.merge(CommonSymbolSchema);
const TokenErc20ContractDeploy = TokenErc20ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc20ContractSchema = {
  deploy: TokenErc20ContractDeploy,
  output: TokenErc20ContractOutput,
  input: TokenErc20ContractInput
};

const TokenErc721ContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc721ContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc721ContractDeploy = TokenErc721ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc721ContractSchema = {
  deploy: TokenErc721ContractDeploy,
  output: TokenErc721ContractOutput,
  input: TokenErc721ContractInput
};

const TokenErc1155ContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc1155ContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc1155ContractDeploy = TokenErc1155ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc1155ContractSchema = {
  deploy: TokenErc1155ContractDeploy,
  output: TokenErc1155ContractOutput,
  input: TokenErc1155ContractInput
};

const VoteSettingsInputSchema = zod.z.object({
  voting_delay_in_blocks: zod.z.number().min(0).default(0),
  voting_period_in_blocks: zod.z.number().min(1).default(1),
  voting_token_address: AddressSchema,
  voting_quorum_fraction: PercentSchema.default(0),
  proposal_token_threshold: BigNumberishSchema.default(1)
});
const VoteSettingsOuputSchema = VoteSettingsInputSchema.extend({
  proposal_token_threshold: BigNumberSchema
});
const VoteContractInput = CommonContractSchema.merge(VoteSettingsInputSchema);
const VoteContractOutput = CommonContractOutputSchema.merge(VoteSettingsOuputSchema);
const VoteContractDeploy = VoteContractInput.merge(CommonTrustedForwarderSchema);
const VoteContractSchema = {
  deploy: VoteContractDeploy,
  output: VoteContractOutput,
  input: VoteContractInput
};
zod.z.object({
  proposalId: BigNumberSchema,
  proposer: zod.z.string(),
  targets: zod.z.array(zod.z.string()),
  values: zod.z.array(BigNumberSchema),
  signatures: zod.z.array(zod.z.string()),
  calldatas: zod.z.array(zod.z.string()),
  startBlock: BigNumberSchema,
  endBlock: BigNumberSchema,
  description: zod.z.string()
});

/**
 * @internal
 */

class ContractWrapper extends RPCConnectionHandler {
  /**
   * @internal
   */
  constructor(network, contractAddress, contractAbi, options) {
    super(network, options);

    defineProperty._defineProperty(this, "isValidContract", false);

    defineProperty._defineProperty(this, "customOverrides", () => ({}));

    defineProperty._defineProperty(this, "writeContract", void 0);

    defineProperty._defineProperty(this, "readContract", void 0);

    defineProperty._defineProperty(this, "abi", void 0);

    this.abi = contractAbi; // set up the contract

    this.writeContract = new ethers.Contract(contractAddress, contractAbi, this.getSignerOrProvider()); // setup the read only contract

    this.readContract = this.writeContract.connect(this.getProvider());
  }

  updateSignerOrProvider(network) {
    // update the underlying base class
    super.updateSignerOrProvider(network); // re-connect the contract with the new signer / provider

    this.writeContract = this.writeContract.connect(this.getSignerOrProvider()); // setup the read only contract

    this.readContract = this.writeContract.connect(this.getProvider());
  }
  /**
   * @internal
   */


  async getChainID() {
    const provider = this.getProvider();
    const {
      chainId
    } = await provider.getNetwork();
    return chainId;
  }
  /**
   * @internal
   */


  async getSignerAddress() {
    const signer = this.getSigner();

    if (!signer) {
      throw new Error("This action requires a connected wallet to sign the transaction. Please pass a valid signer to the SDK.");
    }

    return await signer.getAddress();
  }
  /**
   * @internal
   */


  callStatic() {
    return this.writeContract.callStatic;
  }
  /**
   * @internal
   */


  async getCallOverrides() {
    if (isBrowser()) {
      // When running in the browser, let the wallet suggest gas estimates
      // this means that the gas speed preferences set in the SDK options are ignored in a browser context
      // but it also allows users to select their own gas speed prefs per tx from their wallet directly
      return {};
    }

    const feeData = await this.getProvider().getFeeData();
    const supports1559 = feeData.maxFeePerGas && feeData.maxPriorityFeePerGas;

    if (supports1559) {
      const chainId = await this.getChainID();
      const block = await this.getProvider().getBlock("latest");
      const baseBlockFee = block && block.baseFeePerGas ? block.baseFeePerGas : ethers.ethers.utils.parseUnits("1", "gwei");
      let defaultPriorityFee;

      if (chainId === exports.ChainId.Mumbai || chainId === exports.ChainId.Polygon) {
        // for polygon, get fee data from gas station
        defaultPriorityFee = await getPolygonGasPriorityFee(chainId);
      } else {
        // otherwise get it from ethers
        defaultPriorityFee = ethers.BigNumber.from(feeData.maxPriorityFeePerGas);
      } // then add additional fee based on user preferences


      const maxPriorityFeePerGas = this.getPreferredPriorityFee(defaultPriorityFee); // See: https://eips.ethereum.org/EIPS/eip-1559 for formula

      const baseMaxFeePerGas = baseBlockFee.mul(2);
      const maxFeePerGas = baseMaxFeePerGas.add(maxPriorityFeePerGas);
      return {
        maxFeePerGas,
        maxPriorityFeePerGas
      };
    } else {
      return {
        gasPrice: await this.getPreferredGasPrice()
      };
    }
  }
  /**
   * Calculates the priority fee per gas according to user preferences
   * @param defaultPriorityFeePerGas - the base priority fee
   */


  getPreferredPriorityFee(defaultPriorityFeePerGas) {
    const speed = this.options.gasSettings.speed;
    const maxGasPrice = this.options.gasSettings.maxPriceInGwei;
    let extraTip;

    switch (speed) {
      case "standard":
        extraTip = ethers.BigNumber.from(0); // default is 2.5 gwei for ETH, 31 gwei for polygon

        break;

      case "fast":
        extraTip = defaultPriorityFeePerGas.div(100).mul(5); // + 5% - 2.625 gwei / 32.5 gwei

        break;

      case "fastest":
        extraTip = defaultPriorityFeePerGas.div(100).mul(10); // + 10% - 2.75 gwei / 34.1 gwei

        break;
    }

    let txGasPrice = defaultPriorityFeePerGas.add(extraTip);
    const max = ethers.ethers.utils.parseUnits(maxGasPrice.toString(), "gwei"); // no more than max gas setting

    const min = ethers.ethers.utils.parseUnits("2.5", "gwei"); // no less than 2.5 gwei

    if (txGasPrice.gt(max)) {
      txGasPrice = max;
    }

    if (txGasPrice.lt(min)) {
      txGasPrice = min;
    }

    return txGasPrice;
  }
  /**
   * Calculates the gas price for transactions according to user preferences
   */


  async getPreferredGasPrice() {
    const gasPrice = await this.getProvider().getGasPrice();
    const speed = this.options.gasSettings.speed;
    const maxGasPrice = this.options.gasSettings.maxPriceInGwei;
    let txGasPrice = gasPrice;
    let extraTip;

    switch (speed) {
      case "standard":
        extraTip = ethers.BigNumber.from(1); // min 1 wei

        break;

      case "fast":
        extraTip = gasPrice.div(100).mul(5); // + 5%

        break;

      case "fastest":
        extraTip = gasPrice.div(100).mul(10); // + 10%

        break;
    }

    txGasPrice = txGasPrice.add(extraTip);
    const max = ethers.ethers.utils.parseUnits(maxGasPrice.toString(), "gwei");

    if (txGasPrice.gt(max)) {
      txGasPrice = max;
    }

    return txGasPrice;
  }
  /**
   * @internal
   */


  emitTransactionEvent(status, transactionHash) {
    this.emit(exports.EventType.Transaction, {
      status,
      transactionHash
    });
  }
  /**
   * @internal
   */


  async multiCall(encoded) {
    return this.sendTransaction("multicall", [encoded]);
  }
  /**
   * @internal
   */


  async estimateGas(fn, args) {
    return this.writeContract.estimateGas[fn](...args);
  }
  /**
   * @internal
   */


  withTransactionOverride(hook) {
    this.customOverrides = hook;
  }
  /**
   * @internal
   */


  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // parse last arg as tx options if present
    let txOptions;

    try {
      if (args.length > 0 && typeof args[args.length - 1] === "object") {
        const last = args[args.length - 1];
        txOptions = CallOverrideSchema.parse(last); // if call overrides found, remove it from args array

        args = args.slice(0, args.length - 1);
      }
    } catch (e) {// no-op
    }

    const functions = extractFunctionsFromAbi(AbiSchema.parse(this.abi)).filter(f => f.name === functionName);

    if (!functions.length) {
      throw new Error(`Function "${functionName}" not found in contract. Check your dashboard for the list of functions available`);
    }

    const fn = functions.find(f => f.name === functionName && f.inputs.length === args.length); // TODO extract this and re-use for deploy function to check constructor args

    if (!fn) {
      throw new Error(`Function "${functionName}" requires ${functions[0].inputs.length} arguments, but ${args.length} were provided.\nExpected function signature: ${functions[0].signature}`);
    }

    const ethersFnName = `${functionName}(${fn.inputs.map(i => i.type).join()})`; // check if the function exists on the contract, otherwise use the name passed in

    const fnName = ethersFnName in this.readContract.functions ? ethersFnName : functionName; // TODO validate each argument

    if (fn.stateMutability === "view" || fn.stateMutability === "pure") {
      // read function
      return this.readContract[fnName](...args);
    } else {
      // write function
      const receipt = await this.sendTransaction(fnName, args, txOptions);
      return {
        receipt
      };
    }
  }
  /**
   * @internal
   */


  async sendTransaction(fn, args, callOverrides) {
    var _this$options;

    if (!callOverrides) {
      callOverrides = await this.getCallOverrides();
    } // if a custom override is set, merge our override with the custom one


    callOverrides = { ...callOverrides,
      ...this.customOverrides()
    }; // clear up the override (single use)

    this.customOverrides = () => ({});

    if ((_this$options = this.options) !== null && _this$options !== void 0 && _this$options.gasless && ("openzeppelin" in this.options.gasless || "biconomy" in this.options.gasless)) {
      const provider = this.getProvider();
      const txHash = await this.sendGaslessTransaction(fn, args, callOverrides);
      this.emitTransactionEvent("submitted", txHash);
      const receipt = await provider.waitForTransaction(txHash);
      this.emitTransactionEvent("completed", txHash);
      return receipt;
    } else {
      // one time verification that this is a valid contract (to avoid sending funds to wrong addresses)
      if (!this.isValidContract) {
        const code = await this.getProvider().getCode(this.readContract.address);
        this.isValidContract = code !== "0x";

        if (!this.isValidContract) {
          throw new Error("The address you're trying to send a transaction to is not a smart contract. Make sure you are on the correct network and the contract address is correct");
        }
      }

      const tx = await this.sendTransactionByFunction(fn, args, callOverrides);
      this.emitTransactionEvent("submitted", tx.hash);
      const receipt = tx.wait();
      this.emitTransactionEvent("completed", tx.hash);
      return receipt;
    }
  }
  /**
   * @internal
   */


  async sendTransactionByFunction(fn, args, callOverrides) {
    const func = this.writeContract.functions[fn];

    if (!func) {
      throw new Error(`invalid function: "${fn.toString()}"`);
    }

    try {
      return await func(...args, callOverrides);
    } catch (e) {
      const network = await this.getProvider().getNetwork();
      const signerAddress = await this.getSignerAddress();
      const contractAddress = await this.readContract.address;
      throw await convertToTWError(e, network, signerAddress, contractAddress, this.readContract.interface);
    }
  }
  /**
   * @internal
   */


  async sendGaslessTransaction(fn) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let callOverrides = arguments.length > 2 ? arguments[2] : undefined;
    const signer = this.getSigner();
    invariant__default["default"](signer, "Cannot execute gasless transaction without valid signer");
    const chainId = await this.getChainID();
    const from = await this.getSignerAddress();
    const to = this.writeContract.address;
    const value = (callOverrides === null || callOverrides === void 0 ? void 0 : callOverrides.value) || 0;

    if (ethers.BigNumber.from(value).gt(0)) {
      throw new Error("Cannot send native token value with gasless transaction");
    }

    const data = this.writeContract.interface.encodeFunctionData(fn, args);
    let gas = ethers.BigNumber.from(0);

    try {
      const gasEstimate = await this.readContract.estimateGas[fn](...args);
      gas = gasEstimate.mul(2);
    } catch (e) {// ignore
    } // in some cases WalletConnect doesn't properly gives an estimate for how much gas it would actually use.
    // as a fix, we're setting it to a high arbitrary number (500k) as the gas limit that should cover for most function calls.


    if (gas.lt(100000)) {
      gas = ethers.BigNumber.from(500000);
    } // check for gas override in callOverrides


    if (callOverrides.gasLimit && ethers.BigNumber.from(callOverrides.gasLimit).gt(gas)) {
      gas = ethers.BigNumber.from(callOverrides.gasLimit);
    }

    const tx = {
      from,
      to,
      data,
      chainId,
      gasLimit: gas,
      functionName: fn.toString(),
      functionArgs: args,
      callOverrides
    };
    return await this.defaultGaslessSendFunction(tx);
  }

  async signTypedData(signer, domain, types, message) {
    this.emit(exports.EventType.Signature, {
      status: "submitted",
      message,
      signature: ""
    });
    const {
      signature: sig
    } = await signTypedDataInternal(signer, domain, types, message);
    this.emit(exports.EventType.Signature, {
      status: "completed",
      message,
      signature: sig
    });
    return sig;
  }

  parseLogs(eventName, logs) {
    if (!logs || logs.length === 0) {
      return [];
    }

    const topic = this.writeContract.interface.getEventTopic(eventName);
    const parsedLogs = logs.filter(x => x.topics.indexOf(topic) >= 0);
    return parsedLogs.map(l => this.writeContract.interface.parseLog(l));
  }

  async defaultGaslessSendFunction(transaction) {
    if (this.options.gasless && "biconomy" in this.options.gasless) {
      return this.biconomySendFunction(transaction);
    }

    return this.defenderSendFunction(transaction);
  }

  async biconomySendFunction(transaction) {
    var _this$options2, _this$options$gasless;

    invariant__default["default"](this.options.gasless && "biconomy" in this.options.gasless, "calling biconomySendFunction without biconomy");
    const signer = this.getSigner();
    const provider = this.getProvider();
    invariant__default["default"](signer && provider, "signer and provider must be set");
    const forwarder = new ethers.ethers.Contract(getContractAddressByChainId(transaction.chainId, "biconomyForwarder"), BiconomyForwarderAbi, provider);
    const batchId = 0;
    const batchNonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from, batchId]);
    const request = {
      from: transaction.from,
      to: transaction.to,
      token: ethers.ethers.constants.AddressZero,
      txGas: transaction.gasLimit.toNumber(),
      tokenGasPrice: "0",
      batchId,
      batchNonce: batchNonce.toNumber(),
      deadline: Math.floor(Date.now() / 1000 + (((_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.gasless) && "biconomy" in this.options.gasless && ((_this$options$gasless = this.options.gasless.biconomy) === null || _this$options$gasless === void 0 ? void 0 : _this$options$gasless.deadlineSeconds) || 3600)),
      data: transaction.data
    };
    const hashToSign = ethers.ethers.utils.arrayify(ethers.ethers.utils.solidityKeccak256(["address", "address", "address", "uint256", "uint256", "uint256", "uint256", "uint256", "bytes32"], [request.from, request.to, request.token, request.txGas, request.tokenGasPrice, request.batchId, request.batchNonce, request.deadline, ethers.ethers.utils.keccak256(request.data)]));
    this.emit(exports.EventType.Signature, {
      status: "submitted",
      message: hashToSign,
      signature: ""
    });
    const signature = await signer.signMessage(hashToSign);
    this.emit(exports.EventType.Signature, {
      status: "completed",
      message: hashToSign,
      signature
    });
    const response = await fetch__default["default"]("https://api.biconomy.io/api/v2/meta-tx/native", {
      method: "POST",
      body: JSON.stringify({
        from: transaction.from,
        apiId: this.options.gasless.biconomy.apiId,
        params: [request, signature],
        to: transaction.to,
        gasLimit: transaction.gasLimit.toHexString()
      }),
      headers: {
        "x-api-key": this.options.gasless.biconomy.apiKey,
        "Content-Type": "application/json;charset=utf-8"
      }
    });

    if (response.ok) {
      const resp = await response.json();

      if (!resp.txHash) {
        throw new Error(`relay transaction failed: ${resp.log}`);
      }

      return resp.txHash;
    }

    throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
  }

  async defenderSendFunction(transaction) {
    var _message;

    invariant__default["default"](this.options.gasless && "openzeppelin" in this.options.gasless, "calling openzeppelin gasless transaction without openzeppelin config in the SDK options");
    const signer = this.getSigner();
    const provider = this.getProvider();
    invariant__default["default"](signer, "provider is not set");
    invariant__default["default"](provider, "provider is not set");
    const forwarderAddress = this.options.gasless.openzeppelin.relayerForwarderAddress || (this.options.gasless.openzeppelin.useEOAForwarder ? CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarderEOA : CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarder);
    const forwarder = new ethers.Contract(forwarderAddress, ForwarderABI__default["default"], provider);
    const nonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from]);
    let domain;
    let types;
    let message;

    if (this.options.gasless.experimentalChainlessSupport) {
      domain = {
        name: "GSNv2 Forwarder",
        version: "0.0.1",
        verifyingContract: forwarderAddress
      };
      types = {
        ForwardRequest: ChainAwareForwardRequest
      };
      message = {
        from: transaction.from,
        to: transaction.to,
        value: ethers.BigNumber.from(0).toString(),
        gas: ethers.BigNumber.from(transaction.gasLimit).toString(),
        nonce: ethers.BigNumber.from(nonce).toString(),
        data: transaction.data,
        chainid: ethers.BigNumber.from(transaction.chainId).toString()
      };
    } else {
      domain = {
        name: "GSNv2 Forwarder",
        version: "0.0.1",
        chainId: transaction.chainId,
        verifyingContract: forwarderAddress
      };
      types = {
        ForwardRequest
      };
      message = {
        from: transaction.from,
        to: transaction.to,
        value: ethers.BigNumber.from(0).toString(),
        gas: ethers.BigNumber.from(transaction.gasLimit).toString(),
        nonce: ethers.BigNumber.from(nonce).toString(),
        data: transaction.data
      };
    }

    let signature;
    this.emit(exports.EventType.Signature, {
      status: "submitted",
      message,
      signature: ""
    }); // if the executing function is "approve" and matches with erc20 approve signature
    // and if the token supports permit, then we use permit for gasless instead of approve.

    if (transaction.functionName === "approve" && transaction.functionArgs.length === 2) {
      const spender = transaction.functionArgs[0];
      const amount = transaction.functionArgs[1]; // TODO: support DAI permit by signDAIPermit

      const {
        message: permit,
        signature: sig
      } = await signEIP2612Permit(signer, this.writeContract.address, transaction.from, spender, amount);
      const {
        r,
        s,
        v
      } = ethers.ethers.utils.splitSignature(sig);
      message = {
        to: this.readContract.address,
        owner: permit.owner,
        spender: permit.spender,
        value: ethers.BigNumber.from(permit.value).toString(),
        nonce: ethers.BigNumber.from(permit.nonce).toString(),
        deadline: ethers.BigNumber.from(permit.deadline).toString(),
        r,
        s,
        v
      };
      signature = sig;
    } else {
      const {
        signature: sig
      } = await signTypedDataInternal(signer, domain, types, message);
      signature = sig;
    }

    let messageType = "forward"; // if has owner property then it's permit :)

    if ((_message = message) !== null && _message !== void 0 && _message.owner) {
      messageType = "permit";
    }

    const body = JSON.stringify({
      request: message,
      signature,
      forwarderAddress,
      type: messageType
    });
    this.emit(exports.EventType.Signature, {
      status: "completed",
      message,
      signature
    });
    const response = await fetch__default["default"](this.options.gasless.openzeppelin.relayerUrl, {
      method: "POST",
      body
    });

    if (response.ok) {
      const resp = await response.json();

      if (!resp.result) {
        throw new Error(`Relay transaction failed: ${resp.message}`);
      }

      const result = JSON.parse(resp.result);
      return result.txHash;
    }

    throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
  }

}

function isNativeToken(tokenAddress) {
  return tokenAddress.toLowerCase() === NATIVE_TOKEN_ADDRESS || tokenAddress.toLowerCase() === ethers.constants.AddressZero;
}
async function normalizePriceValue(provider, inputPrice, currencyAddress) {
  const metadata = await fetchCurrencyMetadata(provider, currencyAddress);
  return ethers.utils.parseUnits(AmountSchema.parse(inputPrice), metadata.decimals);
}
async function fetchCurrencyMetadata(provider, asset) {
  if (isNativeToken(asset)) {
    const network = await provider.getNetwork();
    const nativeToken = getNativeTokenByChainId(network.chainId);
    return {
      name: nativeToken.name,
      symbol: nativeToken.symbol,
      decimals: nativeToken.decimals
    };
  } else {
    const erc20 = new ethers.Contract(asset, ERC20MetadataAbi__default["default"], provider);
    const [name, symbol, decimals] = await Promise.all([erc20.name(), erc20.symbol(), erc20.decimals()]);
    return {
      name,
      symbol,
      decimals
    };
  }
}
async function fetchCurrencyValue(providerOrSigner, asset, price) {
  const metadata = await fetchCurrencyMetadata(providerOrSigner, asset);
  return { ...metadata,
    value: ethers.BigNumber.from(price),
    displayValue: ethers.utils.formatUnits(price, metadata.decimals)
  };
}
async function setErc20Allowance(contractToApprove, value, currencyAddress, overrides) {
  if (isNativeToken(currencyAddress)) {
    overrides["value"] = value;
  } else {
    const signer = contractToApprove.getSigner();
    const provider = contractToApprove.getProvider();
    const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi__default["default"], {});
    const owner = await contractToApprove.getSignerAddress();
    const spender = contractToApprove.readContract.address;
    const allowance = await erc20.readContract.allowance(owner, spender);

    if (allowance.lt(value)) {
      // approve overrides the previous allowance, set it to the minimum required for this tx
      await erc20.sendTransaction("approve", [spender, value]);
    }

    return overrides;
  }
}
async function approveErc20Allowance(contractToApprove, currencyAddress, price, quantity, tokenDecimals) {
  const signer = contractToApprove.getSigner();
  const provider = contractToApprove.getProvider();
  const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi__default["default"], {});
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.readContract.address;
  const allowance = await erc20.readContract.allowance(owner, spender);
  const totalPrice = ethers.BigNumber.from(price).mul(ethers.BigNumber.from(quantity)).div(ethers.ethers.utils.parseUnits("1", tokenDecimals));

  if (allowance.lt(totalPrice)) {
    await erc20.sendTransaction("approve", [spender, allowance.add(totalPrice)]);
  }
}
async function hasERC20Allowance(contractToApprove, currencyAddress, value) {
  const provider = contractToApprove.getProvider();
  const erc20 = new ContractWrapper(provider, currencyAddress, ERC20Abi__default["default"], {});
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.readContract.address;
  const allowance = await erc20.readContract.allowance(owner, spender);
  return allowance.gte(value);
}

/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */

async function prepareClaim(quantity, activeClaimCondition, merkleMetadataFetcher, tokenDecimals, contractWrapper, storage, checkERC20Allowance) {
  const addressToClaim = await contractWrapper.getSignerAddress();
  let maxClaimable = ethers.BigNumber.from(0);
  let proofs = [ethers.utils.hexZeroPad([0], 32)];

  try {
    if (!activeClaimCondition.merkleRootHash.toString().startsWith(ethers.constants.AddressZero)) {
      const claims = await fetchSnapshot(activeClaimCondition.merkleRootHash.toString(), await merkleMetadataFetcher(), storage);
      const item = claims && claims.find(c => c.address.toLowerCase() === addressToClaim.toLowerCase());

      if (item === undefined) {
        throw new Error("No claim found for this address");
      }

      proofs = item.proof;
      maxClaimable = ethers.ethers.utils.parseUnits(item.maxClaimable, tokenDecimals);
    }
  } catch (e) {
    // have to handle the valid error case that we *do* want to throw on
    if ((e === null || e === void 0 ? void 0 : e.message) === "No claim found for this address") {
      throw e;
    } // other errors we wanna ignore and try to continue


    console.warn("failed to check claim condition merkle root hash, continuing anyways", e);
  }

  const overrides = (await contractWrapper.getCallOverrides()) || {};
  const price = activeClaimCondition.price;
  const currencyAddress = activeClaimCondition.currencyAddress;

  if (price.gt(0)) {
    if (isNativeToken(currencyAddress)) {
      overrides["value"] = ethers.BigNumber.from(price).mul(quantity).div(ethers.ethers.utils.parseUnits("1", tokenDecimals));
    } else if (checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currencyAddress, price, quantity, tokenDecimals);
    }
  }

  return {
    overrides,
    proofs,
    maxQuantityPerTransaction: maxClaimable,
    price,
    currencyAddress
  };
}

/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
async function fetchSnapshot(merkleRoot, merkleMetadata, storage) {
  if (!merkleMetadata) {
    return undefined;
  }

  const snapshotUri = merkleMetadata[merkleRoot];
  let snapshot = undefined;

  if (snapshotUri) {
    const raw = await storage.downloadJSON(snapshotUri);
    const snapshotData = SnapshotSchema.parse(raw);

    if (merkleRoot === snapshotData.merkleRoot) {
      snapshot = snapshotData.claims;
    }
  }

  return snapshot;
}
/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */

async function updateExistingClaimConditions(index, claimConditionInput, existingConditions) {
  if (index >= existingConditions.length) {
    throw Error(`Index out of bounds - got index: ${index} with ${existingConditions.length} conditions`);
  } // merge input with existing claim condition


  const priceDecimals = existingConditions[index].currencyMetadata.decimals;
  const priceInWei = existingConditions[index].price;
  const priceInTokens = ethers.ethers.utils.formatUnits(priceInWei, priceDecimals); // merge existing (output format) with incoming (input format)

  const newConditionParsed = ClaimConditionInputSchema.parse({ ...existingConditions[index],
    price: priceInTokens,
    ...claimConditionInput
  }); // convert to output claim condition

  const mergedConditionOutput = ClaimConditionOutputSchema.parse({ ...newConditionParsed,
    price: priceInWei
  });
  return existingConditions.map((existingOutput, i) => {
    let newConditionAtIndex;

    if (i === index) {
      newConditionAtIndex = mergedConditionOutput;
    } else {
      newConditionAtIndex = existingOutput;
    }

    const formattedPrice = ethers.ethers.utils.formatUnits(newConditionAtIndex.price, priceDecimals);
    return { ...newConditionAtIndex,
      price: formattedPrice // manually transform back to input price type

    };
  });
}
/**
 * Fetches the proof for the current signer for a particular wallet.
 *
 * @param merkleRoot - The merkle root of the condition to check.
 * @returns - The proof for the current signer for the specified condition.
 */

async function getClaimerProofs(addressToClaim, merkleRoot, tokenDecimals, merkleMetadata, storage) {
  const claims = await fetchSnapshot(merkleRoot, merkleMetadata, storage);

  if (claims === undefined) {
    return {
      proof: [],
      maxClaimable: ethers.BigNumber.from(0)
    };
  }

  const item = claims.find(c => c.address.toLowerCase() === (addressToClaim === null || addressToClaim === void 0 ? void 0 : addressToClaim.toLowerCase()));

  if (item === undefined) {
    return {
      proof: [],
      maxClaimable: ethers.BigNumber.from(0)
    };
  }

  return {
    proof: item.proof,
    maxClaimable: ethers.ethers.utils.parseUnits(item.maxClaimable, tokenDecimals)
  };
}
/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @internal
 */

async function processClaimConditionInputs(claimConditionInputs, tokenDecimals, provider, storage) {
  const snapshotInfos = [];
  const inputsWithSnapshots = await Promise.all(claimConditionInputs.map(async conditionInput => {
    // check snapshots and upload if provided
    if (conditionInput.snapshot && conditionInput.snapshot.length > 0) {
      const snapshotInfo = await createSnapshot(SnapshotInputSchema.parse(conditionInput.snapshot), tokenDecimals, storage);
      snapshotInfos.push(snapshotInfo);
      conditionInput.merkleRootHash = snapshotInfo.merkleRoot;
    } else {
      // if no snapshot is passed or empty, reset the merkle root
      conditionInput.merkleRootHash = ethers.utils.hexZeroPad([0], 32);
    } // fill condition with defaults values if not provided


    return conditionInput;
  }));
  const parsedInputs = ClaimConditionInputArray.parse(inputsWithSnapshots); // Convert processed inputs to the format the contract expects, and sort by timestamp

  const sortedConditions = (await Promise.all(parsedInputs.map(c => convertToContractModel(c, tokenDecimals, provider)))).sort((a, b) => {
    const left = ethers.BigNumber.from(a.startTimestamp);
    const right = ethers.BigNumber.from(b.startTimestamp);

    if (left.eq(right)) {
      return 0;
    } else if (left.gt(right)) {
      return 1;
    } else {
      return -1;
    }
  });
  return {
    snapshotInfos,
    sortedConditions
  };
}
/**
 * Converts a local SDK model to contract model
 * @param c
 * @param tokenDecimals
 * @param provider
 * @internal
 */

async function convertToContractModel(c, tokenDecimals, provider) {
  const currency = c.currencyAddress === ethers.constants.AddressZero ? NATIVE_TOKEN_ADDRESS : c.currencyAddress;
  let maxClaimableSupply;
  let quantityLimitPerTransaction;

  if (c.maxQuantity === "unlimited") {
    maxClaimableSupply = ethers.ethers.constants.MaxUint256.toString();
  } else {
    maxClaimableSupply = ethers.ethers.utils.parseUnits(c.maxQuantity, tokenDecimals);
  }

  if (c.quantityLimitPerTransaction === "unlimited") {
    quantityLimitPerTransaction = ethers.ethers.constants.MaxUint256.toString();
  } else {
    quantityLimitPerTransaction = ethers.ethers.utils.parseUnits(c.quantityLimitPerTransaction, tokenDecimals);
  }

  return {
    startTimestamp: c.startTime,
    maxClaimableSupply,
    supplyClaimed: 0,
    quantityLimitPerTransaction,
    waitTimeInSecondsBetweenClaims: c.waitInSeconds,
    pricePerToken: await normalizePriceValue(provider, c.price, currency),
    currency,
    merkleRoot: c.merkleRootHash
  };
}
/**
 * Transforms a contract model to local model
 * @param pm
 * @param tokenDecimals
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @internal
 */


async function transformResultToClaimCondition(pm, tokenDecimals, provider, merkleMetadata, storage) {
  const cv = await fetchCurrencyValue(provider, pm.currency, pm.pricePerToken);
  const claims = await fetchSnapshot(pm.merkleRoot, merkleMetadata, storage);
  const maxClaimableSupply = convertToReadableQuantity(pm.maxClaimableSupply, tokenDecimals);
  const quantityLimitPerTransaction = convertToReadableQuantity(pm.quantityLimitPerTransaction, tokenDecimals);
  const availableSupply = convertToReadableQuantity(ethers.BigNumber.from(pm.maxClaimableSupply).sub(pm.supplyClaimed), tokenDecimals);
  const currentMintSupply = convertToReadableQuantity(pm.supplyClaimed, tokenDecimals);
  return ClaimConditionOutputSchema.parse({
    startTime: pm.startTimestamp,
    maxQuantity: maxClaimableSupply,
    currentMintSupply,
    availableSupply,
    quantityLimitPerTransaction,
    waitInSeconds: pm.waitTimeInSecondsBetweenClaims.toString(),
    price: ethers.BigNumber.from(pm.pricePerToken),
    currency: pm.currency,
    currencyAddress: pm.currency,
    currencyMetadata: cv,
    merkleRootHash: pm.merkleRoot,
    snapshot: claims
  });
}

function convertToReadableQuantity(bn, tokenDecimals) {
  if (bn.toString() === ethers.ethers.constants.MaxUint256.toString()) {
    return "unlimited";
  } else {
    return ethers.ethers.utils.formatUnits(bn, tokenDecimals);
  }
}

async function calculateClaimCost(contractWrapper, pricePerToken, quantity, currencyAddress, checkERC20Allowance) {
  let overrides = {};
  const currency = currencyAddress || NATIVE_TOKEN_ADDRESS;
  const normalizedPrice = await normalizePriceValue(contractWrapper.getProvider(), pricePerToken, currency);
  const totalCost = normalizedPrice.mul(quantity);

  if (totalCost.gt(0)) {
    if (currency === NATIVE_TOKEN_ADDRESS) {
      overrides = {
        value: totalCost
      };
    } else if (currency !== NATIVE_TOKEN_ADDRESS && checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currency, totalCost, quantity, 0);
    }
  }

  return overrides;
}

exports.ListingType = void 0;

(function (ListingType) {
  ListingType[ListingType["Direct"] = 0] = "Direct";
  ListingType[ListingType["Auction"] = 1] = "Auction";
})(exports.ListingType || (exports.ListingType = {}));

exports.ProposalState = void 0;

(function (ProposalState) {
  ProposalState[ProposalState["Pending"] = 0] = "Pending";
  ProposalState[ProposalState["Active"] = 1] = "Active";
  ProposalState[ProposalState["Canceled"] = 2] = "Canceled";
  ProposalState[ProposalState["Defeated"] = 3] = "Defeated";
  ProposalState[ProposalState["Succeeded"] = 4] = "Succeeded";
  ProposalState[ProposalState["Queued"] = 5] = "Queued";
  ProposalState[ProposalState["Expired"] = 6] = "Expired";
  ProposalState[ProposalState["Executed"] = 7] = "Executed";
})(exports.ProposalState || (exports.ProposalState = {}));

exports.VoteType = void 0;

(function (VoteType) {
  VoteType[VoteType["Against"] = 0] = "Against";
  VoteType[VoteType["For"] = 1] = "For";
  VoteType[VoteType["Abstain"] = 2] = "Abstain";
})(exports.VoteType || (exports.VoteType = {}));

exports.ClaimEligibility = void 0;

(function (ClaimEligibility) {
  ClaimEligibility["NotEnoughSupply"] = "There is not enough supply to claim.";
  ClaimEligibility["AddressNotAllowed"] = "This address is not on the allowlist.";
  ClaimEligibility["WaitBeforeNextClaimTransaction"] = "Not enough time since last claim transaction. Please wait.";
  ClaimEligibility["AlreadyClaimed"] = "You have already claimed the token.";
  ClaimEligibility["NotEnoughTokens"] = "There are not enough tokens in the wallet to pay for the claim.";
  ClaimEligibility["NoActiveClaimPhase"] = "There is no active claim phase at the moment. Please check back in later.";
  ClaimEligibility["NoClaimConditionSet"] = "There is no claim condition set.";
  ClaimEligibility["NoWallet"] = "No wallet connected.";
  ClaimEligibility["Unknown"] = "No claim conditions found.";
})(exports.ClaimEligibility || (exports.ClaimEligibility = {}));

/**
 * Manages claim conditions for NFT Drop contracts
 * @public
 */

class DropClaimConditions {
  constructor(contractWrapper, metadata, storage) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "metadata", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }
  /** ***************************************
   * READ FUNCTIONS
   *****************************************/

  /**
   * Get the currently active claim condition
   *
   * @returns the claim condition metadata
   */


  async getActive() {
    const cc = await this.get();
    const metadata = await this.metadata.get();
    return await transformResultToClaimCondition(cc, await this.getTokenDecimals(), this.contractWrapper.getProvider(), metadata.merkle || {}, this.storage);
  }

  async get() {
    if (this.isSinglePhaseDropContract(this.contractWrapper)) {
      return await this.contractWrapper.readContract.claimCondition();
    } else if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      const id = await this.contractWrapper.readContract.getActiveClaimConditionId();
      return await this.contractWrapper.readContract.getClaimConditionById(id);
    } else {
      throw new Error("Contract does not support claim conditions");
    }
  }
  /**
   * Get all the claim conditions
   *
   * @returns the claim conditions metadata
   */


  async getAll() {
    if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      const claimCondition = await this.contractWrapper.readContract.claimCondition();
      const startId = claimCondition.currentStartId.toNumber();
      const count = claimCondition.count.toNumber();
      const conditions = [];

      for (let i = startId; i < startId + count; i++) {
        conditions.push(await this.contractWrapper.readContract.getClaimConditionById(i));
      }

      const metadata = await this.metadata.get();
      const decimals = await this.getTokenDecimals();
      return Promise.all(conditions.map(c => transformResultToClaimCondition(c, decimals, this.contractWrapper.getProvider(), metadata.merkle, this.storage)));
    } else {
      return [await this.getActive()];
    }
  }
  /**
   * Can Claim
   *
   * @remarks Check if the drop can currently be claimed.
   *
   * @example
   * ```javascript
   * // Quantity of tokens to check claimability of
   * const quantity = 1;
   * const canClaim = await contract.canClaim(quantity);
   * ```
   */


  async canClaim(quantity, addressToCheck) {
    // TODO switch to use verifyClaim
    return (await this.getClaimIneligibilityReasons(quantity, addressToCheck)).length === 0;
  }
  /**
   * For any claim conditions that a particular wallet is violating,
   * this function returns human readable information about the
   * breaks in the condition that can be used to inform the user.
   *
   * @param quantity - The desired quantity that would be claimed.
   * @param addressToCheck - The wallet address, defaults to the connected wallet.
   *
   */


  async getClaimIneligibilityReasons(quantity, addressToCheck) {
    const reasons = [];
    let activeConditionIndex;
    let claimCondition;
    const decimals = await this.getTokenDecimals();
    const quantityWithDecimals = ethers.ethers.utils.parseUnits(AmountSchema.parse(quantity), decimals);

    if (addressToCheck === undefined) {
      try {
        addressToCheck = await this.contractWrapper.getSignerAddress();
      } catch (err) {
        console.warn("failed to get signer address", err);
      }
    } // if we have been unable to get a signer address, we can't check eligibility, so return a NoWallet error reason


    if (!addressToCheck) {
      return [exports.ClaimEligibility.NoWallet];
    }

    try {
      claimCondition = await this.getActive();
    } catch (err) {
      if (includesErrorMessage(err, "!CONDITION") || includesErrorMessage(err, "no active mint condition")) {
        reasons.push(exports.ClaimEligibility.NoClaimConditionSet);
        return reasons;
      }

      console.warn("failed to get active claim condition", err);
      reasons.push(exports.ClaimEligibility.Unknown);
      return reasons;
    }

    if (claimCondition.availableSupply !== "unlimited") {
      const supplyWithDecimals = ethers.ethers.utils.parseUnits(claimCondition.availableSupply, decimals);

      if (supplyWithDecimals.lt(quantityWithDecimals)) {
        reasons.push(exports.ClaimEligibility.NotEnoughSupply);
      }
    } // check for merkle root inclusion


    const merkleRootArray = ethers.ethers.utils.stripZeros(claimCondition.merkleRootHash);

    if (merkleRootArray.length > 0) {
      const merkleLower = claimCondition.merkleRootHash.toString();
      const metadata = await this.metadata.get();
      const proofs = await getClaimerProofs(addressToCheck, merkleLower, await this.getTokenDecimals(), metadata.merkle, this.storage);

      try {
        let validMerkleProof;

        if (this.isMultiPhaseDropContract(this.contractWrapper)) {
          activeConditionIndex = await this.contractWrapper.readContract.getActiveClaimConditionId(); // legacy verifyClaimerMerkleProofs function

          [validMerkleProof] = await this.contractWrapper.readContract.verifyClaimMerkleProof(activeConditionIndex, addressToCheck, quantity, proofs.proof, proofs.maxClaimable);
        } else if (this.isSinglePhaseDropContract(this.contractWrapper)) {
          [validMerkleProof] = await this.contractWrapper.readContract.verifyClaimMerkleProof(addressToCheck, quantity, {
            proof: proofs.proof,
            maxQuantityInAllowlist: proofs.maxClaimable
          });
        }

        if (!validMerkleProof) {
          reasons.push(exports.ClaimEligibility.AddressNotAllowed);
          return reasons;
        }
      } catch (e) {
        reasons.push(exports.ClaimEligibility.AddressNotAllowed);
        return reasons;
      }
    } // check for claim timestamp between claims


    let [lastClaimedTimestamp, timestampForNextClaim] = [ethers.BigNumber.from(0), ethers.BigNumber.from(0)];

    if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      activeConditionIndex = await this.contractWrapper.readContract.getActiveClaimConditionId();
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.readContract.getClaimTimestamp(activeConditionIndex, addressToCheck);
    } else if (this.isSinglePhaseDropContract(this.contractWrapper)) {
      // check for claim timestamp between claims
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.readContract.getClaimTimestamp(addressToCheck);
    }

    const now = ethers.BigNumber.from(Date.now()).div(1000);

    if (lastClaimedTimestamp.gt(0) && now.lt(timestampForNextClaim)) {
      // contract will return MaxUint256 if user has already claimed and cannot claim again
      if (timestampForNextClaim.eq(ethers.constants.MaxUint256)) {
        reasons.push(exports.ClaimEligibility.AlreadyClaimed);
      } else {
        reasons.push(exports.ClaimEligibility.WaitBeforeNextClaimTransaction);
      }
    } // if not within a browser conetext, check for wallet balance.
    // In browser context, let the wallet do that job


    if (claimCondition.price.gt(0) && isNode()) {
      const totalPrice = claimCondition.price.mul(ethers.BigNumber.from(quantity));
      const provider = this.contractWrapper.getProvider();

      if (isNativeToken(claimCondition.currencyAddress)) {
        const balance = await provider.getBalance(addressToCheck);

        if (balance.lt(totalPrice)) {
          reasons.push(exports.ClaimEligibility.NotEnoughTokens);
        }
      } else {
        const erc20 = new ContractWrapper(provider, claimCondition.currencyAddress, ERC20Abi__default["default"], {});
        const balance = await erc20.readContract.balanceOf(addressToCheck);

        if (balance.lt(totalPrice)) {
          reasons.push(exports.ClaimEligibility.NotEnoughTokens);
        }
      }
    }

    return reasons;
  }
  /** ***************************************
   * WRITE FUNCTIONS
   *****************************************/

  /**
   * Set public mint conditions
   *
   * @remarks Sets the public mint conditions that need to be fullfiled by users to claim NFTs.
   *
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   *
   * // Optionally specify addresses that can claim
   * const snapshots = ['0x...', '0x...']
   *
   * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
   * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
   *
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: snapshots, // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * await dropContract.claimConditions.set(claimConditions);
   * ```
   *
   * @param claimConditionInputs - The claim conditions
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */


  async set(claimConditionInputs) {
    let resetClaimEligibilityForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let claimConditionsProcessed = claimConditionInputs;

    if (this.isSinglePhaseDropContract(this.contractWrapper)) {
      resetClaimEligibilityForAll = true;

      if (claimConditionInputs.length === 0) {
        claimConditionsProcessed = [{
          startTime: new Date(0),
          currencyAddress: NATIVE_TOKEN_ADDRESS,
          price: 0,
          maxQuantity: 0,
          quantityLimitPerTransaction: 0,
          waitInSeconds: 0,
          merkleRootHash: ethers.utils.hexZeroPad([0], 32),
          snapshot: []
        }];
      } else if (claimConditionInputs.length > 1) {
        throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");
      }
    } // process inputs


    const {
      snapshotInfos,
      sortedConditions
    } = await processClaimConditionInputs(claimConditionsProcessed, await this.getTokenDecimals(), this.contractWrapper.getProvider(), this.storage);
    const merkleInfo = {};
    snapshotInfos.forEach(s => {
      merkleInfo[s.merkleRoot] = s.snapshotUri;
    });
    const metadata = await this.metadata.get();
    const encoded = []; // upload new merkle roots to snapshot URIs if updated

    if (!deepEqual__default["default"](metadata.merkle, merkleInfo)) {
      const mergedMetadata = this.metadata.parseInputMetadata({ ...metadata,
        merkle: merkleInfo
      }); // using internal method to just upload, avoids one contract call

      const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);

      if (hasFunction("setContractURI", this.contractWrapper)) {
        encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("setContractURI", [contractURI]));
      } else {
        throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");
      }
    }

    const cw = this.contractWrapper;

    if (this.isSinglePhaseDropContract(cw)) {
      encoded.push(cw.readContract.interface.encodeFunctionData("setClaimConditions", [sortedConditions[0], resetClaimEligibilityForAll]));
    } else if (this.isMultiPhaseDropContract(cw)) {
      encoded.push(cw.readContract.interface.encodeFunctionData("setClaimConditions", [sortedConditions, resetClaimEligibilityForAll]));
    } else {
      throw new Error("Contract does not support claim conditions");
    }

    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }
  /**
   * Update a single claim condition with new data.
   *
   * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
   * @param claimConditionInput - the new data to update, previous data will be retained
   */


  async update(index, claimConditionInput) {
    const existingConditions = await this.getAll();
    const newConditionInputs = await updateExistingClaimConditions(index, claimConditionInput, existingConditions);
    return await this.set(newConditionInputs);
  }
  /** ***************************************
   * PRIVATE FUNCTIONS
   *****************************************/


  async getTokenDecimals() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return this.contractWrapper.readContract.decimals();
    } else {
      return Promise.resolve(0);
    }
  }
  /**
   * Returns proofs and the overrides required for the transaction.
   *
   * @returns - `overrides` and `proofs` as an object.
   * @internal
   */


  async prepareClaim(quantity, checkERC20Allowance) {
    let decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return prepareClaim(quantity, await this.getActive(), async () => (await this.metadata.get()).merkle, decimals, this.contractWrapper, this.storage, checkERC20Allowance);
  }

  isSinglePhaseDropContract(contractWrapper) {
    return !hasFunction("getClaimConditionById", contractWrapper);
  }

  isMultiPhaseDropContract(contractWrapper) {
    return hasFunction("getClaimConditionById", contractWrapper);
  }

}

/**
 * Manages claim conditions for Edition Drop contracts
 * @public
 */

class DropErc1155ClaimConditions {
  constructor(contractWrapper, metadata, storage) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "metadata", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }
  /** ***************************************
   * READ FUNCTIONS
   *****************************************/

  /**
   * Get the currently active claim condition
   *
   * @returns the claim condition metadata
   */


  async getActive(tokenId) {
    const mc = await this.get(tokenId);
    const metadata = await this.metadata.get();
    return await transformResultToClaimCondition(mc, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage);
  }

  async get(tokenId) {
    if (this.isSinglePhaseDropContract(this.contractWrapper)) {
      return await this.contractWrapper.readContract.claimCondition(tokenId);
    } else if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      const id = await this.contractWrapper.readContract.getActiveClaimConditionId(tokenId);
      return await this.contractWrapper.readContract.getClaimConditionById(tokenId, id);
    } else {
      throw new Error("Contract does not support claim conditions");
    }
  }
  /**
   * Get all the claim conditions
   *
   * @returns the claim conditions metadata
   */


  async getAll(tokenId) {
    if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      const claimCondition = await this.contractWrapper.readContract.claimCondition(tokenId);
      const startId = claimCondition.currentStartId.toNumber();
      const count = claimCondition.count.toNumber();
      const conditions = [];

      for (let i = startId; i < startId + count; i++) {
        conditions.push(await this.contractWrapper.readContract.getClaimConditionById(tokenId, i));
      }

      const metadata = await this.metadata.get();
      return Promise.all(conditions.map(c => transformResultToClaimCondition(c, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage)));
    } else {
      return [await this.getActive(tokenId)];
    }
  }
  /**
   * Can Claim
   *
   * @remarks Check if a particular NFT can currently be claimed by a given user.
   *
   * @example
   * ```javascript
   * // Quantity of tokens to check claimability of
   * const quantity = 1;
   * const canClaim = await contract.canClaim(quantity);
   * ```
   */


  async canClaim(tokenId, quantity, addressToCheck) {
    // TODO switch to use verifyClaim
    return (await this.getClaimIneligibilityReasons(tokenId, quantity, addressToCheck)).length === 0;
  }
  /**
   * For any claim conditions that a particular wallet is violating,
   * this function returns human-readable information about the
   * breaks in the condition that can be used to inform the user.
   *
   * @param tokenId - the token id to check
   * @param quantity - The desired quantity that would be claimed.
   * @param addressToCheck - The wallet address, defaults to the connected wallet.
   *
   */


  async getClaimIneligibilityReasons(tokenId, quantity, addressToCheck) {
    const reasons = [];
    let activeConditionIndex;
    let claimCondition;

    if (addressToCheck === undefined) {
      try {
        addressToCheck = await this.contractWrapper.getSignerAddress();
      } catch (err) {
        console.warn("failed to get signer address", err);
      }
    } // if we have been unable to get a signer address, we can't check eligibility, so return a NoWallet error reason


    if (!addressToCheck) {
      return [exports.ClaimEligibility.NoWallet];
    }

    try {
      claimCondition = await this.getActive(tokenId);
    } catch (err) {
      if (includesErrorMessage(err, "!CONDITION") || includesErrorMessage(err, "no active mint condition")) {
        reasons.push(exports.ClaimEligibility.NoClaimConditionSet);
        return reasons;
      }

      reasons.push(exports.ClaimEligibility.Unknown);
      return reasons;
    }

    if (claimCondition.availableSupply !== "unlimited") {
      if (ethers.BigNumber.from(claimCondition.availableSupply).lt(quantity)) {
        reasons.push(exports.ClaimEligibility.NotEnoughSupply);
      }
    } // check for merkle root inclusion


    const merkleRootArray = ethers.ethers.utils.stripZeros(claimCondition.merkleRootHash);

    if (merkleRootArray.length > 0) {
      const merkleLower = claimCondition.merkleRootHash.toString();
      const metadata = await this.metadata.get();
      const proofs = await getClaimerProofs(addressToCheck, merkleLower, 0, metadata.merkle, this.storage);

      try {
        let validMerkleProof;

        if (this.isMultiPhaseDropContract(this.contractWrapper)) {
          activeConditionIndex = await this.contractWrapper.readContract.getActiveClaimConditionId(tokenId);
          [validMerkleProof] = await this.contractWrapper.readContract.verifyClaimMerkleProof(activeConditionIndex, addressToCheck, tokenId, quantity, proofs.proof, proofs.maxClaimable);
        } else if (this.isSinglePhaseDropContract(this.contractWrapper)) {
          [validMerkleProof] = await this.contractWrapper.readContract.verifyClaimMerkleProof(tokenId, addressToCheck, quantity, {
            proof: proofs.proof,
            maxQuantityInAllowlist: proofs.maxClaimable
          });
        }

        if (!validMerkleProof) {
          reasons.push(exports.ClaimEligibility.AddressNotAllowed);
          return reasons;
        }
      } catch (e) {
        reasons.push(exports.ClaimEligibility.AddressNotAllowed);
        return reasons;
      }
    } // check for claim timestamp between claims


    let [lastClaimedTimestamp, timestampForNextClaim] = [ethers.BigNumber.from(0), ethers.BigNumber.from(0)];

    if (this.isMultiPhaseDropContract(this.contractWrapper)) {
      activeConditionIndex = await this.contractWrapper.readContract.getActiveClaimConditionId(tokenId);
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.readContract.getClaimTimestamp(tokenId, activeConditionIndex, addressToCheck);
    } else if (this.isSinglePhaseDropContract(this.contractWrapper)) {
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.readContract.getClaimTimestamp(tokenId, addressToCheck);
    }

    const now = ethers.BigNumber.from(Date.now()).div(1000);

    if (lastClaimedTimestamp.gt(0) && now.lt(timestampForNextClaim)) {
      // contract will return MaxUint256 if user has already claimed and cannot claim again
      if (timestampForNextClaim.eq(ethers.constants.MaxUint256)) {
        reasons.push(exports.ClaimEligibility.AlreadyClaimed);
      } else {
        reasons.push(exports.ClaimEligibility.WaitBeforeNextClaimTransaction);
      }
    } // if not within a browser conetext, check for wallet balance.
    // In browser context, let the wallet do that job


    if (claimCondition.price.gt(0) && isNode()) {
      const totalPrice = claimCondition.price.mul(quantity);
      const provider = this.contractWrapper.getProvider();

      if (isNativeToken(claimCondition.currencyAddress)) {
        const balance = await provider.getBalance(addressToCheck);

        if (balance.lt(totalPrice)) {
          reasons.push(exports.ClaimEligibility.NotEnoughTokens);
        }
      } else {
        const erc20 = new ContractWrapper(provider, claimCondition.currencyAddress, ERC20Abi__default["default"], {});
        const balance = await erc20.readContract.balanceOf(addressToCheck);

        if (balance.lt(totalPrice)) {
          reasons.push(exports.ClaimEligibility.NotEnoughTokens);
        }
      }
    }

    return reasons;
  }
  /** ***************************************
   * WRITE FUNCTIONS
   *****************************************/

  /**
   * Set claim conditions on a single NFT
   *
   * @remarks Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this contract.
   *
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   *
   * // Optionally specify addresses that can claim
   * const snapshots = ['0x...', '0x...']
   *
   * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
   * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
   *
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: snapshots, // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await dropContract.claimConditions.set(tokenId, claimConditions);
   * ```
   *
   * @param tokenId - The id of the NFT to set the claim conditions on
   * @param claimConditionInputs - The claim conditions
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */


  async set(tokenId, claimConditionInputs) {
    let resetClaimEligibilityForAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return this.setBatch([{
      tokenId,
      claimConditions: claimConditionInputs
    }], resetClaimEligibilityForAll);
  }
  /**
   * Set claim conditions on multiple NFTs at once
   *
   * @remarks Sets the claim conditions that need to be fulfilled by users to claim the given NFTs in this contract.
   *
   * @example
   * ```javascript
   * const claimConditionsForTokens = [
   *   {
   *     tokenId: 0,
   *     claimConditions: [{
   *       startTime: new Date(), // start the claim phase now
   *       maxQuantity: 2, // limit how many mints for this tokenId
   *       price: 0.01, // price for this tokenId
   *       snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *     }]
   *   },
   *   {
   *     tokenId: 1,
   *     claimConditions: [{
   *       startTime: new Date(),
   *       price: 0.08, // different price for this tokenId
   *     }]
   *   },
   * ];
   *
   * await dropContract.claimConditions.setBatch(claimConditionsForTokens);
   * ```
   *
   * @param claimConditionsForToken - The claim conditions for each NFT
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */


  async setBatch(claimConditionsForToken) {
    let resetClaimEligibilityForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const merkleInfo = {};
    const processedClaimConditions = await Promise.all(claimConditionsForToken.map(async _ref => {
      let {
        tokenId,
        claimConditions
      } = _ref;
      // sanitize for single phase deletions
      let claimConditionsProcessed = claimConditions;

      if (this.isSinglePhaseDropContract(this.contractWrapper)) {
        resetClaimEligibilityForAll = true;

        if (claimConditions.length === 0) {
          claimConditionsProcessed = [{
            startTime: new Date(0),
            currencyAddress: NATIVE_TOKEN_ADDRESS,
            price: 0,
            maxQuantity: 0,
            quantityLimitPerTransaction: 0,
            waitInSeconds: 0,
            merkleRootHash: ethers.utils.hexZeroPad([0], 32),
            snapshot: []
          }];
        } else if (claimConditions.length > 1) {
          throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");
        }
      } // process inputs


      const {
        snapshotInfos,
        sortedConditions
      } = await processClaimConditionInputs(claimConditionsProcessed, 0, this.contractWrapper.getProvider(), this.storage);
      snapshotInfos.forEach(s => {
        merkleInfo[s.merkleRoot] = s.snapshotUri;
      });
      return {
        tokenId,
        sortedConditions
      };
    }));
    const metadata = await this.metadata.get();
    const encoded = []; // keep the old merkle roots from other tokenIds

    for (const key of Object.keys(metadata.merkle || {})) {
      merkleInfo[key] = metadata.merkle[key];
    } // upload new merkle roots to snapshot URIs if updated


    if (!deepEqual__default["default"](metadata.merkle, merkleInfo)) {
      const mergedMetadata = this.metadata.parseInputMetadata({ ...metadata,
        merkle: merkleInfo
      }); // using internal method to just upload, avoids one contract call

      const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);

      if (hasFunction("setContractURI", this.contractWrapper)) {
        encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("setContractURI", [contractURI]));
      } else {
        throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");
      }
    }

    processedClaimConditions.forEach(_ref2 => {
      let {
        tokenId,
        sortedConditions
      } = _ref2;

      if (this.isSinglePhaseDropContract(this.contractWrapper)) {
        encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("setClaimConditions", [tokenId, sortedConditions[0], resetClaimEligibilityForAll]));
      } else if (this.isMultiPhaseDropContract(this.contractWrapper)) {
        encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("setClaimConditions", [tokenId, sortedConditions, resetClaimEligibilityForAll]));
      } else {
        throw new Error("Contract does not support claim conditions");
      }
    });
    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }
  /**
   * Update a single claim condition with new data.
   * @param tokenId - the token id to update
   * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
   * @param claimConditionInput - the new data to update, previous data will be retained
   */


  async update(tokenId, index, claimConditionInput) {
    const existingConditions = await this.getAll(tokenId);
    const newConditionInputs = await updateExistingClaimConditions(index, claimConditionInput, existingConditions);
    return await this.set(tokenId, newConditionInputs);
  }
  /**
   * Returns proofs and the overrides required for the transaction.
   *
   * @returns - `overrides` and `proofs` as an object.
   */


  async prepareClaim(tokenId, quantity, checkERC20Allowance) {
    return prepareClaim(quantity, await this.getActive(tokenId), async () => (await this.metadata.get()).merkle, 0, this.contractWrapper, this.storage, checkERC20Allowance);
  }

  isSinglePhaseDropContract(contractWrapper) {
    return !hasFunction("getClaimConditionById", contractWrapper);
  }

  isMultiPhaseDropContract(contractWrapper) {
    return hasFunction("getClaimConditionById", contractWrapper);
  }

}

/**
 * Manages history for Edition Drop contracts
 * @public
 */

class DropErc1155History {
  constructor(events) {
    defineProperty._defineProperty(this, "events", void 0);

    this.events = events;
  }
  /**
   * Get all claimer addresses
   *
   * @remarks Get a list of all the addresses that have claimed a token
   * @param tokenId - the tokenId of the NFT to get the addresses of*
   * @returns - A unique list of addresses that claimed the token
   * @example
   * ```javascript
   * const tokenId = "0";
   * const allClaimerAddresses = await contract.history.getAllClaimerAddresses(tokenId);
   * ```
   */


  async getAllClaimerAddresses(tokenId) {
    const a = (await this.events.getEvents("TokensClaimed")).filter(e => e.data && ethers.BigNumber.isBigNumber(e.data.tokenId) ? e.data.tokenId.eq(tokenId) : false);
    return Array.from(new Set(a.filter(b => {
      var _b$data;

      return typeof ((_b$data = b.data) === null || _b$data === void 0 ? void 0 : _b$data.claimer) === "string";
    }).map(b => b.data.claimer)));
  }

}

class Erc20Burnable {
  constructor(erc20, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN_BURNABLE.name);

    defineProperty._defineProperty(this, "erc20", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
  }
  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.token.burn.tokens(amount);
   * ```
   */


  async tokens(amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("burn", [await this.erc20.normalizeAmount(amount)])
    };
  }
  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.token.burn.from(holderAddress, amount);
   * ```
   */


  async from(holder, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("burnFrom", [holder, await this.erc20.normalizeAmount(amount)])
    };
  }

}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */
class Erc20Claimable {
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.token.drop.claim.conditions.set(claimConditions);
   * ```
   */
  constructor(erc20, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS.name);

    defineProperty._defineProperty(this, "conditions", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc20", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
  }
  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.token.drop.claim.to(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   */


  async to(destinationAddress, amount) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let claimData = arguments.length > 3 ? arguments[3] : undefined;
    const quantity = await this.erc20.normalizeAmount(amount);
    let claimVerification = claimData;

    if (this.conditions && !claimData) {
      claimVerification = await this.conditions.prepareClaim(quantity, checkERC20Allowance, await this.contractWrapper.readContract.decimals());
    }

    if (!claimVerification) {
      throw new Error("Claim verification Data is required - either pass it in as 'claimData' or set claim conditions via 'conditions.set()'");
    }

    const receipt = await this.contractWrapper.sendTransaction("claim", [destinationAddress, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxQuantityPerTransaction], claimVerification.overrides);
    return {
      receipt
    };
  }

}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */
class Erc20Droppable {
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.nft.drop.claim.conditions.set(claimConditions);
   * ```
   */
  constructor(erc20, contractWrapper, storage) {
    defineProperty._defineProperty(this, "claim", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc20", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.claim = new Erc20Claimable(this.erc20, this.contractWrapper, this.storage);
  }

}

/**
 * Mint Many ERC20 Tokens at once
 * @remarks Token batch minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */
class Erc20BatchMintable {
  constructor(erc20, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN_BATCH_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc20", void 0);

    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
  }
  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.token.mint.batch(data);
   * ```
   */


  async to(args) {
    const encoded = [];

    for (const arg of args) {
      encoded.push(this.contractWrapper.readContract.interface.encodeFunctionData("mintTo", [arg.toAddress, await this.erc20.normalizeAmount(arg.amount)]));
    }

    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }

}

/**
 * Mint ERC20 Tokens
 * @remarks Token minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
class Erc20Mintable {
  /**
   * Batch mint Tokens to many addresses
   */
  constructor(erc20, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc20", void 0);

    defineProperty._defineProperty(this, "batch", void 0);

    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.batch = this.detectErc20BatchMintable();
  }
  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.token.mint.to(toAddress, amount);
   * ```
   */


  async to(to, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("mintTo", [to, await this.erc20.normalizeAmount(amount)])
    };
  }

  detectErc20BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20BatchMintable")) {
      return new Erc20BatchMintable(this.erc20, this.contractWrapper);
    }

    return undefined;
  }

}

/**
 * Enables generating ERC20 Tokens with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
// TODO consolidate into a single class

class Erc20SignatureMintable {
  constructor(contractWrapper, roles) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN_SIGNATURE_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "roles", void 0);

    this.contractWrapper = contractWrapper;
    this.roles = roles;
  }
  /**
   * Mint tokens from a signature
   *
   * @remarks Mint a certain amount of tokens from a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc20.signature.generate(payload);
   *
   * // Use the signed payload to mint the tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc20SignatureMintable.generate}
   * @twfeature ERC20SignatureMintable
   */


  async mint(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, ethers.BigNumber.from(message.price), mintRequest.currencyAddress, overrides);
    return {
      receipt: await this.contractWrapper.sendTransaction("mintWithSignature", [message, signature], overrides)
    };
  }
  /**
   * Mint any number of generated tokens signatures at once
   * @remarks Mint multiple token signatures in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC20SignatureMintable
   */


  async mintBatch(signedPayloads) {
    const contractPayloads = await Promise.all(signedPayloads.map(async s => {
      const message = await this.mapPayloadToContractStruct(s.payload);
      const signature = s.signature;
      const price = s.payload.price;

      if (ethers.BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }

      return {
        message,
        signature
      };
    }));
    const encoded = contractPayloads.map(p => {
      return this.contractWrapper.readContract.interface.encodeFunctionData("mintWithSignature", [p.message, p.signature]);
    });
    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }
  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC20SignatureMintable
   */


  async verify(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const verification = await this.contractWrapper.readContract.verify(message, signature);
    return verification[0];
  }
  /**
   * Generate a signature that can be used to mint a certain amount of tokens
   *
   * @remarks Takes in a quantity of tokens, some conditions for how it can be minted and signs it with your private key. The generated signature can then be used to mint those tokens using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   quantity: 4.2, // The quantity of tokens to be minted
   *   to: {{wallet_address}}, // Who will receive the tokens (or AddressZero for anyone)
   *   price: 0.5, // the price to pay for minting those tokens
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now,
   *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
   * };
   *
   * const signedPayload = contract.erc20.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc20.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC20SignatureMintable
   */


  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }
  /**
   * Generate a batch of signatures that can be used to mint many token signatures.
   *
   * @remarks See {@link Erc20SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC20SignatureMintable
   */


  async generateBatch(payloadsToSign) {
    var _this$roles;

    await ((_this$roles = this.roles) === null || _this$roles === void 0 ? void 0 : _this$roles.verify(["minter"], await this.contractWrapper.getSignerAddress()));
    const parsedRequests = payloadsToSign.map(m => Signature20PayloadInput.parse(m));
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant__default["default"](signer, "No signer available"); // ERC20Permit (EIP-712) spec differs from signature mint 721, 1155.

    const name = await this.contractWrapper.readContract.name();
    return await Promise.all(parsedRequests.map(async m => {
      const finalPayload = Signature20PayloadOutput.parse(m);
      const signature = await this.contractWrapper.signTypedData(signer, {
        name,
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.readContract.address
      }, {
        MintRequest: MintRequest20
      }, await this.mapPayloadToContractStruct(finalPayload));
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */


  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPrice = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    const amountWithDecimals = ethers.ethers.utils.parseUnits(mintRequest.quantity, await this.contractWrapper.readContract.decimals());
    return {
      to: mintRequest.to,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      quantity: amountWithDecimals,
      price: normalizedPrice,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid
    };
  }

}

/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc20.transfer(walletAddress, amount);
 * ```
 * @public
 */

class Erc20 {
  /**
   * Mint tokens
   */
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "featureName", FEATURE_TOKEN.name);

    defineProperty._defineProperty(this, "mintable", void 0);

    defineProperty._defineProperty(this, "burnable", void 0);

    defineProperty._defineProperty(this, "droppable", void 0);

    defineProperty._defineProperty(this, "signatureMintable", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.mintable = this.detectErc20Mintable();
    this.burnable = this.detectErc20Burnable();
    this.droppable = this.detectErc20Droppable();
    this.signatureMintable = this.detectErc20SignatureMintable();
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  /**
   * @internal
   */


  getAddress() {
    return this.contractWrapper.readContract.address;
  } ////// Standard ERC20 Extension //////

  /**
   * Get the token Metadata (name, symbol, etc...)
   *
   * @example
   * ```javascript
   * const token = await contract.erc20.get();
   * ```
   * @returns The token metadata
   * @twfeature ERC20
   */


  async get() {
    return await fetchCurrencyMetadata(this.contractWrapper.getProvider(), this.getAddress());
  }
  /**
   * Get Token Balance for the currently connected wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const balance = await contract.erc20.balance();
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */


  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }
  /**
   * Get Token Balance
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token balance
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc20.balanceOf(walletAddress);
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */


  async balanceOf(address) {
    return this.getValue(await this.contractWrapper.readContract.balanceOf(address));
  }
  /**
   * The total supply for this Token
   * @remarks Get how much supply has been minted
   * @example
   * ```javascript
   * const balance = await contract.erc20.totalSupply();
   * ```
   * @twfeature ERC20
   */


  async totalSupply() {
    return await this.getValue(await this.contractWrapper.readContract.totalSupply());
  }
  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token allowance
   * const spenderAddress = "0x...";
   * const allowance = await contract.erc20.allowance(spenderAddress);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */


  async allowance(spender) {
    return await this.allowanceOf(await this.contractWrapper.getSignerAddress(), spender);
  }
  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet who owns the funds
   * const owner = "{{wallet_address}}";
   * // Address of the wallet to check token allowance
   * const spender = "0x...";
   * const allowance = await contract.erc20.allowanceOf(owner, spender);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */


  async allowanceOf(owner, spender) {
    return await this.getValue(await this.contractWrapper.readContract.allowance(owner, spender));
  }
  /**
   * Transfer Tokens
   *
   * @remarks Transfer tokens from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The amount of tokens you want to send
   * const amount = 0.1;
   * await contract.erc20.transfer(toAddress, amount);
   * ```
   * @twfeature ERC20
   */


  async transfer(to, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("transfer", [to, await this.normalizeAmount(amount)])
    };
  }
  /**
   * Transfer Tokens From Address
   *
   * @remarks Transfer tokens from one wallet to another
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const fromAddress = "{{wallet_address}}";
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The number of tokens you want to send
   * const amount = 1.2
   * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
   * await contract.erc20.transferFrom(fromAddress, toAddress, amount);
   * ```
   * @twfeature ERC20
   */


  async transferFrom(from, to, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("transferFrom", [from, to, await this.normalizeAmount(amount)])
    };
  }
  /**
   * Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet to allow transfers from
   * const spenderAddress = "0x...";
   * // The number of tokens to give as allowance
   * const amount = 100
   * await contract.erc20.setAllowance(spenderAddress, amount);
   * ```
   * @twfeature ERC20
   */


  async setAllowance(spender, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("approve", [spender, await this.normalizeAmount(amount)])
    };
  }
  /**
   * Transfer Tokens To Many Wallets
   *
   * @remarks Mint tokens from the connected wallet to many wallets
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 100, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 100,
   *  }
   * ]
   *
   * await contract.erc20.transferBatch(data);
   * ```
   */


  async transferBatch(args) {
    const encoded = await Promise.all(args.map(async arg => {
      const amountWithDecimals = await this.normalizeAmount(arg.amount);
      return this.contractWrapper.readContract.interface.encodeFunctionData("transfer", [arg.toAddress, amountWithDecimals]);
    }));
    await this.contractWrapper.multiCall(encoded);
  } ////// ERC20 Mintable Extension //////

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to the connected wallet.
   *
   * @example
   * ```javascript
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mint(toAddress, amount);
   * ```
   * @twfeature ERC20Mintable
   */


  async mint(amount) {
    return this.mintTo(await this.contractWrapper.getSignerAddress(), amount);
  }
  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mintTo(toAddress, amount);
   * ```
   * @twfeature ERC20Mintable
   */


  async mintTo(receiver, amount) {
    return assertEnabled(this.mintable, FEATURE_TOKEN_MINTABLE).to(receiver, amount);
  } ////// ERC20 BatchMintable Extension //////

  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.mintBatchTo(data);
   * ```
   * @twfeature ERC20BatchMintable
   */


  async mintBatchTo(args) {
    var _this$mintable;

    return assertEnabled((_this$mintable = this.mintable) === null || _this$mintable === void 0 ? void 0 : _this$mintable.batch, FEATURE_TOKEN_BATCH_MINTABLE).to(args);
  } ////// ERC20 Burnable Extension //////

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.erc20.burn(amount);
   * ```
   * @twfeature ERC20Burnable
   */


  async burn(amount) {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).tokens(amount);
  }
  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.erc20.burnFrom(holderAddress, amount);
   * ```
   * @twfeature ERC20Burnable
   */


  async burnFrom(holder, amount) {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).from(holder, amount);
  } ////// ERC20 Claimable Extension //////

  /**
   * Claim a certain amount of tokens to the connected Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   * @twfeature ERC20ClaimableWithConditions
   */


  async claim(amount) {
    let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let claimData = arguments.length > 2 ? arguments[2] : undefined;
    return this.claimTo(await this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance, claimData);
  }
  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   * @twfeature ERC20ClaimableWithConditions
   */


  async claimTo(destinationAddress, amount) {
    var _this$droppable;

    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let claimData = arguments.length > 3 ? arguments[3] : undefined;
    return assertEnabled((_this$droppable = this.droppable) === null || _this$droppable === void 0 ? void 0 : _this$droppable.claim, FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS).to(destinationAddress, amount, checkERC20Allowance, claimData);
  }
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc20.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC20ClaimableWithConditions
   */


  get claimConditions() {
    var _this$droppable2;

    return assertEnabled((_this$droppable2 = this.droppable) === null || _this$droppable2 === void 0 ? void 0 : _this$droppable2.claim, FEATURE_TOKEN_CLAIMABLE_WITH_CONDITIONS).conditions;
  } ////// ERC20 SignatureMint Extension //////

  /**
   * Signature Minting
   * @remarks Generate dynamic tokens with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc20.signature.generate()` documentation
   * const signedPayload = contract.erc20.signature().generate(payload);
   *
   * // now the payload can be used to mint tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @twfeature ERC20SignatureMintable
   */


  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_TOKEN_SIGNATURE_MINTABLE);
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * returns the wei amount from a token amount
   * @internal
   * @param amount
   */


  async normalizeAmount(amount) {
    const decimals = await this.contractWrapper.readContract.decimals();
    return ethers.ethers.utils.parseUnits(AmountSchema.parse(amount), decimals);
  }
  /**
   * @internal
   */


  async getValue(value) {
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), this.getAddress(), ethers.BigNumber.from(value));
  }

  detectErc20Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20Mintable(this, this.contractWrapper);
    }

    return undefined;
  }

  detectErc20Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC20Burnable")) {
      return new Erc20Burnable(this, this.contractWrapper);
    }

    return undefined;
  }

  detectErc20Droppable() {
    if (detectContractFeature(this.contractWrapper, "ERC20ClaimableWithConditions")) {
      return new Erc20Droppable(this, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc20SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20SignatureMintable")) {
      return new Erc20SignatureMintable(this.contractWrapper);
    }

    return undefined;
  }

}

/**
 * Manages history for Token contracts
 * @public
 */

class TokenERC20History {
  constructor(contractWrapper, events) {
    defineProperty._defineProperty(this, "events", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
    this.events = events;
  }
  /**
   * Get all holder balances
   *
   * @remarks Lets you get all token holders and their corresponding balances
   * @returns - A JSON object of all token holders and their corresponding balances
   * @example
   * ```javascript
   * const allHolderBalances = await contract.history.getAllHolderBalances();
   * ```
   */


  async getAllHolderBalances() {
    const a = await this.events.getEvents("Transfer");
    const txns = a.map(b => b.data);
    const balances = {};
    txns.forEach(item => {
      const from = item === null || item === void 0 ? void 0 : item.from;
      const to = item === null || item === void 0 ? void 0 : item.to;
      const amount = item === null || item === void 0 ? void 0 : item.value;

      if (!(from === ethers.constants.AddressZero)) {
        if (!(from in balances)) {
          balances[from] = ethers.BigNumber.from(0);
        }

        balances[from] = balances[from].sub(amount);
      }

      if (!(to === ethers.constants.AddressZero)) {
        if (!(to in balances)) {
          balances[to] = ethers.BigNumber.from(0);
        }

        balances[to] = balances[to].add(amount);
      }
    });
    return Promise.all(Object.keys(balances).map(async addr => ({
      holder: addr,
      balance: await fetchCurrencyValue(this.contractWrapper.getProvider(), this.contractWrapper.readContract.address, balances[addr])
    })));
  }

}

/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.transfer(walletAddress, amount);
 * ```
 * @public
 */
class StandardErc20 {
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "erc20", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc20 = new Erc20(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  /**
   * @internal
   */


  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the token Metadata (name, symbol, etc...)
   *
   * @example
   * ```javascript
   * const token = await contract.get();
   * ```
   * @returns The token metadata
   */


  async get() {
    return this.erc20.get();
  }
  /**
   * Get Token Balance for the currently connected wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const balance = await contract.balance();
   * ```
   *
   * @returns The balance of a specific wallet.
   */


  async balance() {
    return await this.erc20.balance();
  }
  /**
   * Get Token Balance
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token balance
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * ```
   *
   * @returns The balance of a specific wallet.
   */


  async balanceOf(address) {
    return this.erc20.balanceOf(address);
  }
  /**
   * The total supply for this Token
   * @remarks Get how much supply has been minted
   * @example
   * ```javascript
   * const balance = await contract.totalSupply();
   * ```
   */


  async totalSupply() {
    return await this.erc20.totalSupply();
  }
  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token allowance
   * const spenderAddress = "0x...";
   * const allowance = await contract.allowance(spenderAddress);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   */


  async allowance(spender) {
    return await this.erc20.allowance(spender);
  }
  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet who owns the funds
   * const owner = "{{wallet_address}}";
   * // Address of the wallet to check token allowance
   * const spender = "0x...";
   * const allowance = await contract.allowanceOf(owner, spender);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   */


  async allowanceOf(owner, spender) {
    return await this.erc20.allowanceOf(owner, spender);
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Transfer Tokens
   *
   * @remarks Transfer tokens from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The amount of tokens you want to send
   * const amount = 0.1;
   * await contract.transfer(toAddress, amount);
   * ```
   */


  async transfer(to, amount) {
    return this.erc20.transfer(to, amount);
  }
  /**
   * Transfer Tokens From Address
   *
   * @remarks Transfer tokens from one wallet to another
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const fromAddress = "{{wallet_address}}";
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The number of tokens you want to send
   * const amount = 1.2
   * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
   * await contract.transferFrom(fromAddress, toAddress, amount);
   * ```
   */


  async transferFrom(from, to, amount) {
    return this.erc20.transferFrom(from, to, amount);
  }
  /**
   * Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet to allow transfers from
   * const spenderAddress = "0x...";
   * // The number of tokens to give as allowance
   * const amount = 100
   * await contract.setAllowance(spenderAddress, amount);
   * ```
   */


  async setAllowance(spender, amount) {
    return this.erc20.setAllowance(spender, amount);
  }
  /**
   * Transfer Tokens To Many Wallets
   *
   * @remarks Mint tokens from the connected wallet to many wallets
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 100, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 100,
   *  }
   * ]
   *
   * await contract.transferBatch(data);
   * ```
   */


  async transferBatch(args) {
    return this.erc20.transferBatch(args);
  }

}

class Erc721Burnable {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_BURNABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Burn NFTs
   *
   * @remarks Burn NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to burn
   * const tokenId = 0;
   *
   * await contract.nft.burn.token(tokenId);
   * ```
   */


  async token(tokenId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("burn", [tokenId])
    };
  }

}

/**
 * Estimates the gas cost of Contract calls
 * @public
 */

class GasCostEstimator {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Estimates the cost of gas in native token of the current chain
   * Pass in the same parameters as the contract's function.
   * @remarks Estimate the cost of gas in native token of the current chain
   * @example
   * ```javascript
   * const costOfClaim = await nftDrop?.estimator.gasCostOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns the estimated price in native currency (ETH, MATIC, etc) of calling this function
   * @public
   */


  async gasCostOf(fn, args) {
    const price = await this.contractWrapper.getPreferredGasPrice();
    const gasUnits = await this.contractWrapper.estimateGas(fn, args);
    return ethers.ethers.utils.formatEther(gasUnits.mul(price));
  }
  /**
   * Estimates the gas limit of a transaction
   * Pass in the same parameters as the contract's function.
   * @remarks Estimates the gas limit of a transaction
   * @example
   * ```javascript
   * const gasLimitOfClaim = await nftDrop?.estimator.gasLimitOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns the estimated gas limit of the transaction
   * @public
   */


  async gasLimitOf(fn, args) {
    return this.contractWrapper.estimateGas(fn, args);
  }
  /**
   * Returns the current gas price in gwei
   * @remarks Get the current gas price in gwei
   * @example
   * ```javascript
   * const gasCostInGwei = await contract.estimator.currentGasPriceInGwei();
   * ```
   * @returns the current gas price in gwei
   * @public
   */


  async currentGasPriceInGwei() {
    const price = await this.contractWrapper.getProvider().getGasPrice();
    return ethers.ethers.utils.formatUnits(price, "gwei");
  }

}

/**
 * @internal
 * Represents a transaction to be executed and can be customized.
 */
class TransactionTask {
  static make(taskArgs) {
    return new TransactionTask(taskArgs);
  }

  constructor(taskArgs) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "functionName", void 0);

    defineProperty._defineProperty(this, "args", void 0);

    defineProperty._defineProperty(this, "overrides", void 0);

    defineProperty._defineProperty(this, "encoder", void 0);

    defineProperty._defineProperty(this, "estimator", void 0);

    this.contractWrapper = taskArgs.contractWrapper;
    this.functionName = taskArgs.functionName;
    this.args = taskArgs.args || [];
    this.overrides = taskArgs.overrides;
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  } // ////////////// Overrides ////////////////

  /**
   * Override the gas limit for this transaction.
   * @param gasLimit
   */


  overrideGasLimit(gasLimit) {
    this.overrides = { ...this.overrides,
      gasLimit
    };
    return this;
  }
  /**
   * Override the gas price for this transaction.
   * @param gasPrice
   */


  overrideGasPrice(gasPrice) {
    this.overrides = { ...this.overrides,
      gasPrice
    };
    return this;
  }
  /**
   * Override the nonce for this transaction.
   * @param nonce
   */


  overrideNonce(nonce) {
    this.overrides = { ...this.overrides,
      nonce
    };
    return this;
  }
  /**
   * Override the value sent with this transaction.
   * @param value
   */


  overrideValue(value) {
    this.overrides = { ...this.overrides,
      value
    };
    return this;
  } // ////////////// Estimates ////////////////

  /**
   * Returns the gas limit that this transaction would consume if executed.
   * @returns the gas limit in gas units
   */


  async estimateGasLimit() {
    return await this.estimator.gasLimitOf(this.functionName, this.args);
  }
  /**
   * Returns the total gas cost of this transaction if executed.
   * @returns the gas cost in ether
   */


  async estimateGasCostInEther() {
    return await this.estimator.gasCostOf(this.functionName, this.args);
  } // ////////////// Actions ////////////////

  /**
   * Returns the encoded function data of this transaction if executed.
   */


  async encodeFunctionData() {
    return this.encoder.encode(this.functionName, this.args);
  }
  /**
   * Submits this transaction to the network. Does not wait for the transaction to be mined.
   * To wait for the transaction to be mined, you can call `.wait()` on the result of this function.
   */


  async submit() {
    return await this.contractWrapper.sendTransactionByFunction(this.functionName, this.args, this.overrides || {});
  }
  /**
   * Submits this transaction to the network and waits for it to be mined.
   */


  async execute() {
    const receipt = await this.contractWrapper.sendTransaction(this.functionName, this.args, this.overrides || {});
    return {
      receipt
    };
  }

}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */
class Erc721Claimable {
  constructor(erc721, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_CLAIMABLE.name);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   */


  async getClaimTransaction(destinationAddress, quantity, options) {
    let overrides = {};

    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }

    return TransactionTask.make({
      contractWrapper: this.contractWrapper,
      functionName: "claim",
      args: [destinationAddress, quantity],
      overrides
    });
  }
  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns - Receipt for the transaction
   */


  async to(destinationAddress, quantity, options) {
    const task = await this.getClaimTransaction(destinationAddress, quantity, options);
    const {
      receipt
    } = await task.execute();
    const event = this.contractWrapper.parseLogs("TokensClaimed", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = startingIndex.add(quantity);
    const results = [];

    for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.get(id)
      });
    }

    return results;
  }

}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(quantity);
 * await contract.erc721.claimConditions.getActive();
 * ```
 */

class Erc721ClaimableWithConditions {
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   */
  constructor(erc721, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS.name);

    defineProperty._defineProperty(this, "conditions", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param options
   */


  async getClaimTransaction(destinationAddress, quantity, options) {
    if (options !== null && options !== void 0 && options.pricePerToken) {
      throw new Error("In ERC721ClaimableWithConditions, price per token is be set via claim conditions by calling `contract.erc721.claimConditions.set()`");
    }

    const claimVerification = await this.conditions.prepareClaim(quantity, (options === null || options === void 0 ? void 0 : options.checkERC20Allowance) || true);
    return TransactionTask.make({
      contractWrapper: this.contractWrapper,
      functionName: "claim",
      args: await this.getArgs(destinationAddress, quantity, claimVerification),
      overrides: claimVerification.overrides
    });
  }
  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * const claimedTokenId = tx[0].id; // the id of the first NFT claimed
   * const claimedNFT = await tx[0].data(); // (optional) get the first claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */


  async to(destinationAddress, quantity, options) {
    const task = await this.getClaimTransaction(destinationAddress, quantity, options);
    const {
      receipt
    } = await task.execute();
    const event = this.contractWrapper.parseLogs("TokensClaimed", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = startingIndex.add(quantity);
    const results = [];

    for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.get(id)
      });
    }

    return results;
  }

  async getArgs(destinationAddress, quantity, claimVerification) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();

    if (isLegacyNFTContract) {
      return [destinationAddress, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxQuantityPerTransaction];
    }

    return [destinationAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
      proof: claimVerification.proofs,
      maxQuantityInAllowlist: claimVerification.maxQuantityPerTransaction
    }, ethers.ethers.utils.toUtf8Bytes("")];
  }

  async isLegacyNFTContract() {
    if (hasFunction("contractType", this.contractWrapper)) {
      try {
        const contractType = ethers.ethers.utils.toUtf8String(await this.contractWrapper.readContract.contractType());
        return contractType.includes("DropERC721");
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

}

/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim(quantity);
 * ```
 */

class Erc721LazyMintable {
  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.nft.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   */

  /**
   * Claim tokens and configure claim conditions
   * @remarks Let users claim NFTs. Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const quantity = 10;
   * await contract.erc721.claim(quantity);
   * ```
   */
  constructor(erc721, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_LAZY_MINTABLE.name);

    defineProperty._defineProperty(this, "revealer", void 0);

    defineProperty._defineProperty(this, "claimWithConditions", void 0);

    defineProperty._defineProperty(this, "claim", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.revealer = this.detectErc721Revealable();
    this.claimWithConditions = this.detectErc721ClaimableWithConditions();
    this.claim = this.detectErc721Claimable();
  }
  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */


  async lazyMint(metadatas, options) {
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options); // ensure baseUri is the same for the entire batch

    const baseUri = getBaseUriFromBatch(batch);
    const receipt = await this.contractWrapper.sendTransaction("lazyMint", [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, ethers.ethers.utils.toUtf8Bytes("")]);
    const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = event[0].args.endTokenId;
    const results = [];

    for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.getTokenMetadata(id)
      });
    }

    return results;
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/


  detectErc721Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    }

    return undefined;
  }

  detectErc721ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimableWithConditions")) {
      return new Erc721ClaimableWithConditions(this.erc721, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc721Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Claimable") && !hasFunction("setClaimConditions", this.contractWrapper)) {
      return new Erc721Claimable(this.erc721, this.contractWrapper);
    }

    return undefined;
  }

}

/**
 * Mint Many ERC721 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */
class Erc721BatchMintable {
  constructor(erc721, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_BATCH_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mint.batch.to(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */


  async to(to, metadatas) {
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const encoded = uris.map(uri => this.contractWrapper.readContract.interface.encodeFunctionData("mintTo", [to, uri]));
    const receipt = await this.contractWrapper.multiCall(encoded);
    const events = this.contractWrapper.parseLogs("TokensMinted", receipt.logs);

    if (events.length === 0 || events.length < metadatas.length) {
      throw new Error("TokenMinted event not found, minting failed");
    }

    return events.map(e => {
      const id = e.args.tokenIdMinted;
      return {
        id,
        receipt,
        data: () => this.erc721.get(id)
      };
    });
  }

}

/**
 * Mint ERC721 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
class Erc721Mintable {
  constructor(erc721, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "batch", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc721BatchMintable();
  }
  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.nft.mint.to(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */


  async to(to, metadata) {
    const uri = await uploadOrExtractURI(metadata, this.storage);
    const receipt = await this.contractWrapper.sendTransaction("mintTo", [to, uri]);
    const event = this.contractWrapper.parseLogs("Transfer", receipt === null || receipt === void 0 ? void 0 : receipt.logs);

    if (event.length === 0) {
      throw new Error("TransferEvent event not found");
    }

    const id = event[0].args.tokenId;
    return {
      id,
      receipt,
      data: () => this.erc721.get(id)
    };
  }

  detectErc721BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721BatchMintable")) {
      return new Erc721BatchMintable(this.erc721, this.contractWrapper, this.storage);
    }

    return undefined;
  }

}

/**
 * @internal
 */
const DEFAULT_QUERY_ALL_COUNT = 100;
/**
 * Pagination Parameters
 * @public
 */

/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */
class Erc721Enumerable {
  constructor(erc721, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_ENUMERABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }
  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.nft.query.owned.all(address);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */


  async all(walletAddress) {
    const tokenIds = await this.tokenIds(walletAddress);
    return await Promise.all(tokenIds.map(tokenId => this.erc721.get(tokenId.toString())));
  }
  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */


  async tokenIds(walletAddress) {
    const address = walletAddress || (await this.contractWrapper.getSignerAddress());
    const balance = await this.contractWrapper.readContract.balanceOf(address);
    const indices = Array.from(Array(balance.toNumber()).keys());
    return await Promise.all(indices.map(i => this.contractWrapper.readContract.tokenOfOwnerByIndex(address, i)));
  }

}

/**
 * List ERC721 NFTs
 * @remarks Easily list all the NFTs in a ERC721 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.nft.query.all();
 * ```
 * @public
 */

class Erc721Supply {
  constructor(erc721, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_SUPPLY.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "owned", void 0);

    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.owned = this.detectErc721Owned();
  }
  /**
   * Get All Minted NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.nft.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */


  async all(queryParams) {
    const start = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.start) || 0).toNumber();
    const count = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.count) || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxSupply = await this.erc721.nextTokenIdToMint();
    const maxId = Math.min(maxSupply.toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc721.get((start + i).toString())));
  }
  /**
   * Return all the owners of each token id in this contract
   * @returns
   */


  async allOwners() {
    return Promise.all([...new Array((await this.totalCount()).toNumber()).keys()].map(async i => ({
      tokenId: i,
      owner: await this.erc721.ownerOf(i).catch(() => ethers.constants.AddressZero)
    })));
  }
  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCount() {
    return await this.erc721.nextTokenIdToMint();
  }
  /**
   * Get the number of NFTs of this contract currently owned by end users
   * @returns the total number of NFTs of this contract in circulation (minted & not burned)
   * @public
   */


  async totalCirculatingSupply() {
    return await this.contractWrapper.readContract.totalSupply();
  }

  detectErc721Owned() {
    if (detectContractFeature(this.contractWrapper, "ERC721Enumerable")) {
      return new Erc721Enumerable(this.erc721, this.contractWrapper);
    }

    return undefined;
  }

}

/**
 * Enables generating dynamic ERC721 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */

class Erc721WithQuantitySignatureMintable {
  constructor(contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT_SIGNATURE_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc721.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc721WithQuantitySignatureMintable.generate}
   * @twfeature ERC721SignatureMint
   */


  async mint(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    let message;
    let price;

    if (isLegacyNFTContract) {
      message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      price = message.price;
    } else {
      message = await this.mapPayloadToContractStruct(mintRequest);
      price = message.pricePerToken.mul(message.quantity);
    }

    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, price, mintRequest.currencyAddress, overrides);
    const receipt = await this.contractWrapper.sendTransaction("mintWithSignature", [message, signature], overrides);
    const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);

    if (t.length === 0) {
      throw new Error("No MintWithSignature event found");
    }

    const id = t[0].args.tokenIdMinted;
    return {
      id,
      receipt
    };
  }
  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC721SignatureMint
   */


  async mintBatch(signedPayloads) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const contractPayloads = await Promise.all(signedPayloads.map(async s => {
      let message;

      if (isLegacyNFTContract) {
        message = await this.mapLegacyPayloadToContractStruct(s.payload);
      } else {
        message = await this.mapPayloadToContractStruct(s.payload);
      }

      const signature = s.signature;
      const price = s.payload.price;

      if (ethers.BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }

      return {
        message,
        signature
      };
    }));
    const encoded = contractPayloads.map(p => {
      if (isLegacyNFTContract) {
        const contract = this.contractWrapper.readContract;
        return contract.interface.encodeFunctionData("mintWithSignature", [p.message, p.signature]);
      } else {
        const contract = this.contractWrapper.readContract;
        return contract.interface.encodeFunctionData("mintWithSignature", [p.message, p.signature]);
      }
    });
    const receipt = await this.contractWrapper.multiCall(encoded);
    const events = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);

    if (events.length === 0) {
      throw new Error("No MintWithSignature event found");
    }

    return events.map(log => ({
      id: log.args.tokenIdMinted,
      receipt
    }));
  }
  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC721SignatureMint
   */


  async verify(signedPayload) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    let message;
    let verification;

    if (isLegacyNFTContract) {
      const contract = this.contractWrapper.readContract;
      message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      verification = await contract.verify(message, signature);
    } else {
      const contract = this.contractWrapper.readContract;
      message = await this.mapPayloadToContractStruct(mintRequest);
      verification = await contract.verify(message, signature);
    }

    return verification[0];
  }
  /**
   * Generate a signature that can be used to mint a dynamic NFT
   *
   * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = contract.erc721.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc721.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC721SignatureMint
   */


  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }
  /**
   * Genrate a batch of signatures that can be used to mint many dynamic NFTs.
   *
   * @remarks See {@link Erc721WithQuantitySignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC721SignatureMint
   */


  async generateBatch(payloadsToSign) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const parsedRequests = payloadsToSign.map(m => Signature721WithQuantityInput.parse(m));
    const metadatas = parsedRequests.map(r => r.metadata);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant__default["default"](signer, "No signer available");
    return await Promise.all(parsedRequests.map(async (m, i) => {
      const uri = uris[i];
      const finalPayload = Signature721WithQuantityOutput.parse({ ...m,
        uri
      });
      let signature;

      if (isLegacyNFTContract) {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "TokenERC721",
          version: "1",
          chainId,
          verifyingContract: this.contractWrapper.readContract.address
        }, {
          MintRequest: MintRequest721
        }, await this.mapLegacyPayloadToContractStruct(finalPayload));
      } else {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "SignatureMintERC721",
          version: "1",
          chainId,
          verifyingContract: await this.contractWrapper.readContract.address
        }, {
          MintRequest: MintRequest721withQuantity
        }, // TYPEHASH
        await this.mapPayloadToContractStruct(finalPayload));
      }

      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */


  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid
    };
  }

  async mapLegacyPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      price: normalizedPricePerToken,
      uri: mintRequest.uri,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }

  async isLegacyNFTContract() {
    if (hasFunction("contractType", this.contractWrapper)) {
      try {
        const contractType = ethers.ethers.utils.toUtf8String(await this.contractWrapper.readContract.contractType());
        return contractType.includes("TokenERC721");
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

}

/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.transfer(walletAddress, tokenId);
 * ```
 * @public
 */

class Erc721 {
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "featureName", FEATURE_NFT.name);

    defineProperty._defineProperty(this, "query", void 0);

    defineProperty._defineProperty(this, "mintable", void 0);

    defineProperty._defineProperty(this, "burnable", void 0);

    defineProperty._defineProperty(this, "lazyMintable", void 0);

    defineProperty._defineProperty(this, "signatureMintable", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc721Enumerable();
    this.mintable = this.detectErc721Mintable();
    this.burnable = this.detectErc721Burnable();
    this.lazyMintable = this.detectErc721LazyMintable();
    this.signatureMintable = this.detectErc721SignatureMintable();
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  } ////// Standard ERC721 Extension //////

  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc721.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC721
   */


  async get(tokenId) {
    const [owner, metadata] = await Promise.all([this.ownerOf(tokenId).catch(() => ethers.constants.AddressZero), this.getTokenMetadata(tokenId)]);
    return {
      owner,
      metadata,
      type: "ERC721",
      supply: 1
    };
  }
  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   * @twfeature ERC721
   */


  async ownerOf(tokenId) {
    return await this.contractWrapper.readContract.ownerOf(tokenId);
  }
  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc721.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   * @twfeature ERC721
   */


  async balanceOf(address) {
    return await this.contractWrapper.readContract.balanceOf(address);
  }
  /**
   * Get NFT Balance for the currently connected wallet
   */


  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }
  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */


  async isApproved(address, operator) {
    return await this.contractWrapper.readContract.isApprovedForAll(address, operator);
  }
  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.transfer(walletAddress, tokenId);
   * ```
   * @twfeature ERC721
   */


  async transfer(to, tokenId) {
    const from = await this.contractWrapper.getSignerAddress();
    return {
      receipt: await this.contractWrapper.sendTransaction("safeTransferFrom(address,address,uint256)", [from, to, tokenId])
    };
  }
  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */


  async setApprovalForAll(operator, approved) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setApprovalForAll", [operator, approved])
    };
  }
  /**
   * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */


  async setApprovalForToken(operator, tokenId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("approve", [operator, tokenId])
    };
  } ////// ERC721 Supply Extension //////

  /**
   * Get All Minted NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc721.getAll();
   * console.log(nfts);
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC721Supply
   */


  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).all(queryParams);
  }
  /**
   * Get All owners of minted NFTs on this contract
   * @returns an array of token ids and owners
   * @twfeature ERC721Supply
   */


  async getAllOwners() {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).allOwners();
  }
  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCount() {
    return this.nextTokenIdToMint();
  }
  /**
   * Get the total count NFTs minted in this contract
   */


  async totalCirculatingSupply() {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).totalCirculatingSupply();
  } ////// ERC721 Enumerable Extension //////

  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.erc721.getOwned(address);
   * console.log(nfts);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC721Enumerable
   */


  async getOwned(walletAddress) {
    var _this$query;

    if ((_this$query = this.query) !== null && _this$query !== void 0 && _this$query.owned) {
      return this.query.owned.all(walletAddress);
    } else {
      const address = walletAddress || (await this.contractWrapper.getSignerAddress());
      const allOwners = await this.getAllOwners();
      return Promise.all((allOwners || []).filter(i => {
        var _i$owner;

        return (address === null || address === void 0 ? void 0 : address.toLowerCase()) === ((_i$owner = i.owner) === null || _i$owner === void 0 ? void 0 : _i$owner.toLowerCase());
      }).map(async i => await this.get(i.tokenId)));
    }
  }
  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */


  async getOwnedTokenIds(walletAddress) {
    var _this$query2;

    if ((_this$query2 = this.query) !== null && _this$query2 !== void 0 && _this$query2.owned) {
      return this.query.owned.tokenIds(walletAddress);
    } else {
      const address = walletAddress || (await this.contractWrapper.getSignerAddress());
      const allOwners = await this.getAllOwners();
      return (allOwners || []).filter(i => {
        var _i$owner2;

        return (address === null || address === void 0 ? void 0 : address.toLowerCase()) === ((_i$owner2 = i.owner) === null || _i$owner2 === void 0 ? void 0 : _i$owner2.toLowerCase());
      }).map(i => ethers.BigNumber.from(i.tokenId));
    }
  } ////// ERC721 Mintable Extension //////

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mint(metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */


  async mint(metadata) {
    return this.mintTo(await this.contractWrapper.getSignerAddress(), metadata);
  }
  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mintTo(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */


  async mintTo(receiver, metadata) {
    return assertEnabled(this.mintable, FEATURE_NFT_MINTABLE).to(receiver, metadata);
  } ////// ERC721 Batch Mintable Extension //////

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to the connected wallet
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatch(metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */


  async mintBatch(metadatas) {
    return this.mintBatchTo(await this.contractWrapper.getSignerAddress(), metadatas);
  }
  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */


  async mintBatchTo(receiver, metadatas) {
    var _this$mintable;

    return assertEnabled((_this$mintable = this.mintable) === null || _this$mintable === void 0 ? void 0 : _this$mintable.batch, FEATURE_NFT_BATCH_MINTABLE).to(receiver, metadatas);
  } ////// ERC721 Burnable Extension //////

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.erc721.burn(tokenId);
   * ```
   * @twfeature ERC721Burnable
   */


  async burn(tokenId) {
    return assertEnabled(this.burnable, FEATURE_NFT_BURNABLE).token(tokenId);
  } ////// ERC721 LazyMint Extension //////

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC721LazyMintable
   */


  async lazyMint(metadatas, options) {
    return assertEnabled(this.lazyMintable, FEATURE_NFT_LAZY_MINTABLE).lazyMint(metadatas, options);
  } ////// ERC721 Claimable Extension //////

  /**
   * Claim unique NFTs to the connected wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claim(quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   * @twfeature ERC721Claimable
   */


  async claim(quantity, options) {
    return this.claimTo(await this.contractWrapper.getSignerAddress(), quantity, options);
  }
  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @twfeature ERC721Claimable
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */


  async claimTo(destinationAddress, quantity, options) {
    var _this$lazyMintable, _this$lazyMintable2;

    const claimWithConditions = (_this$lazyMintable = this.lazyMintable) === null || _this$lazyMintable === void 0 ? void 0 : _this$lazyMintable.claimWithConditions;
    const claim = (_this$lazyMintable2 = this.lazyMintable) === null || _this$lazyMintable2 === void 0 ? void 0 : _this$lazyMintable2.claim;

    if (claimWithConditions) {
      return claimWithConditions.to(destinationAddress, quantity, options);
    }

    if (claim) {
      return claim.to(destinationAddress, quantity, options);
    }

    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIMABLE);
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   */


  async getClaimTransaction(destinationAddress, quantity, options) {
    var _this$lazyMintable3, _this$lazyMintable4;

    const claimWithConditions = (_this$lazyMintable3 = this.lazyMintable) === null || _this$lazyMintable3 === void 0 ? void 0 : _this$lazyMintable3.claimWithConditions;
    const claim = (_this$lazyMintable4 = this.lazyMintable) === null || _this$lazyMintable4 === void 0 ? void 0 : _this$lazyMintable4.claim;

    if (claimWithConditions) {
      return claimWithConditions.getClaimTransaction(destinationAddress, quantity, options);
    }

    if (claim) {
      return claim.getClaimTransaction(destinationAddress, quantity, options);
    }

    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIMABLE);
  }
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC721ClaimableWithConditions
   */


  get claimConditions() {
    var _this$lazyMintable5;

    return assertEnabled((_this$lazyMintable5 = this.lazyMintable) === null || _this$lazyMintable5 === void 0 ? void 0 : _this$lazyMintable5.claimWithConditions, FEATURE_NFT_CLAIMABLE_WITH_CONDITIONS).conditions;
  } ////// ERC721 SignatureMint Extension //////

  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
   * const signedPayload = contract.erc721.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC721SignatureMint
   */


  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_NFT_SIGNATURE_MINTABLE);
  } ////// ERC721 DelayedReveal Extension //////

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.erc721.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC721Revealable
   */


  get revealer() {
    var _this$lazyMintable6;

    return assertEnabled((_this$lazyMintable6 = this.lazyMintable) === null || _this$lazyMintable6 === void 0 ? void 0 : _this$lazyMintable6.revealer, FEATURE_NFT_REVEALABLE);
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   */


  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.readContract.tokenURI(tokenId);

    if (!tokenUri) {
      throw new NotFoundError();
    }

    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }
  /**
   * Return the next available token ID to mint
   * @internal
   */


  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return await this.contractWrapper.readContract.nextTokenIdToMint();
    } else if (hasFunction("totalSupply", this.contractWrapper)) {
      return await this.contractWrapper.readContract.totalSupply();
    } else {
      throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint");
    }
  }

  detectErc721Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Supply") || hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return new Erc721Supply(this, this.contractWrapper);
    }

    return undefined;
  }

  detectErc721Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Mintable")) {
      return new Erc721Mintable(this, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc721Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Burnable")) {
      return new Erc721Burnable(this.contractWrapper);
    }

    return undefined;
  }

  detectErc721LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721LazyMintable")) {
      return new Erc721LazyMintable(this, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc721SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721SignatureMint")) {
      return new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    }

    return undefined;
  }

}

/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
class StandardErc721 {
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "erc721", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc721 = new Erc721(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /**
   * Get All Minted NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.getAll();
   * console.log(nfts);
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */


  async getAll(queryParams) {
    return this.erc721.getAll(queryParams);
  }
  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.getOwned(address);
   * console.log(nfts);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */


  async getOwned(walletAddress) {
    return this.erc721.getOwned(walletAddress);
  }
  /**
   * Get Owned Token Ids
   * @remarks Get all the token ids of NFTs owned by a specific wallet (no metadata)
   */


  async getOwnedTokenIds(walletAddress) {
    return this.erc721.getOwnedTokenIds(walletAddress);
  }
  /**
   * Get the total count NFTs minted in this contract
   */


  async totalSupply() {
    return this.erc721.totalCirculatingSupply();
  }
  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */


  async get(tokenId) {
    return this.erc721.get(tokenId);
  }
  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   */


  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }
  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */


  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }
  /**
   * Get NFT Balance for the currently connected wallet
   */


  async balance() {
    return this.erc721.balance();
  }
  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */


  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
  }
  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.transfer(walletAddress, tokenId);
   * ```
   */


  async transfer(to, tokenId) {
    return this.erc721.transfer(to, tokenId);
  }
  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */


  async setApprovalForAll(operator, approved) {
    return this.erc721.setApprovalForAll(operator, approved);
  }
  /**
   * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */


  async setApprovalForToken(operator, tokenId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("approve", [operator, tokenId])
    };
  }

}

/**
 * @internal
 */

const AirdropAddressInput = zod.z.object({
  address: AddressSchema,
  quantity: AmountSchema.default(1)
});
/**
 * @internal
 */

const AirdropInputSchema = zod.z.union([zod.z.array(zod.z.string()).transform(strings => strings.map(address => AirdropAddressInput.parse({
  address
}))), zod.z.array(AirdropAddressInput)]);

class Erc1155Burnable {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_BURNABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.tokens(tokenId, amount);
   * ```
   */


  async tokens(tokenId, amount) {
    const account = await this.contractWrapper.getSignerAddress();
    return this.from(account, tokenId, amount);
  }
  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.from(account, tokenId, amount);
   * ```
   */


  async from(account, tokenId, amount) {
    return {
      receipt: await this.contractWrapper.sendTransaction("burn", [account, tokenId, amount])
    };
  }
  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batch(tokenIds, amounts);
   * ```
   */


  async batch(tokenIds, amounts) {
    const account = await this.contractWrapper.getSignerAddress();
    return this.batchFrom(account, tokenIds, amounts);
  }
  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batchFrom(account, tokenIds, amounts);
   * ```
   */


  async batchFrom(account, tokenIds, amounts) {
    return {
      receipt: await this.contractWrapper.sendTransaction("burnBatch", [account, tokenIds, amounts])
    };
  }

}

/**
 * List ERC1155 NFTs
 * @remarks Easily list all the NFTs in a ERC1155 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.edition.query.all();
 * ```
 * @public
 */

class Erc1155Enumerable {
  constructor(erc1155, contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_ENUMERABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc1155", void 0);

    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
  }
  /**
   * Get All NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.edition.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */


  async all(queryParams) {
    const start = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.start) || 0).toNumber();
    const count = ethers.BigNumber.from((queryParams === null || queryParams === void 0 ? void 0 : queryParams.count) || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.totalCount()).toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc1155.get((start + i).toString())));
  }
  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCount() {
    return await this.contractWrapper.readContract.nextTokenIdToMint();
  }
  /**
   * Get the supply of token for a given tokenId.
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCirculatingSupply(tokenId) {
    return await this.contractWrapper.readContract.totalSupply(tokenId);
  }
  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.edition.query.owned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */


  async owned(walletAddress) {
    const address = walletAddress || (await this.contractWrapper.getSignerAddress());
    const maxId = await this.contractWrapper.readContract.nextTokenIdToMint();
    const balances = await this.contractWrapper.readContract.balanceOfBatch(Array(maxId.toNumber()).fill(address), Array.from(Array(maxId.toNumber()).keys()));
    const ownedBalances = balances.map((b, i) => {
      return {
        tokenId: i,
        balance: b
      };
    }).filter(b => b.balance.gt(0));
    return await Promise.all(ownedBalances.map(async b => {
      const editionMetadata = await this.erc1155.get(b.tokenId.toString());
      return { ...editionMetadata,
        owner: address,
        quantityOwned: b.balance.toNumber()
      };
    }));
  }

}

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.drop.claim.to("0x...", tokenId, quantity);
 * ```
 */
class ERC1155Claimable {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_CLAIMABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   */


  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    let overrides = {};

    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }

    return TransactionTask.make({
      contractWrapper: this.contractWrapper,
      functionName: "claim",
      args: [destinationAddress, tokenId, quantity],
      overrides
    });
  }
  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns - Receipt for the transaction
   */


  async to(destinationAddress, tokenId, quantity, options) {
    const tx = await this.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    return await tx.execute();
  }

}

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.claim(tokenId, quantity);
 * await contract.erc1155.claimConditions.getActive(tokenId);
 * ```
 */

class Erc1155ClaimableWithConditions {
  constructor(contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS.name);

    defineProperty._defineProperty(this, "conditions", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropErc1155ClaimConditions(contractWrapper, metadata, this.storage);
  }
  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   */


  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    if (options !== null && options !== void 0 && options.pricePerToken) {
      throw new Error("In ERC1155ClaimableWithConditions, price per token is be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");
    }

    const claimVerification = await this.conditions.prepareClaim(tokenId, quantity, (options === null || options === void 0 ? void 0 : options.checkERC20Allowance) || true);
    return TransactionTask.make({
      contractWrapper: this.contractWrapper,
      functionName: "claim",
      args: await this.getArgs(tokenId, destinationAddress, quantity, claimVerification),
      overrides: claimVerification.overrides
    });
  }
  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns - Receipt for the transaction
   */


  async to(destinationAddress, tokenId, quantity, options) {
    const tx = await this.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    return await tx.execute();
  }

  async getArgs(tokenId, destinationAddress, quantity, claimVerification) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();

    if (isLegacyNFTContract) {
      return [destinationAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxQuantityPerTransaction];
    }

    return [destinationAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
      proof: claimVerification.proofs,
      maxQuantityInAllowlist: claimVerification.maxQuantityPerTransaction
    }, ethers.ethers.utils.toUtf8Bytes("")];
  }

  async isLegacyNFTContract() {
    if (hasFunction("contractType", this.contractWrapper)) {
      try {
        const contractType = ethers.ethers.utils.toUtf8String(await this.contractWrapper.readContract.contractType());
        return contractType.includes("DropERC1155");
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

}

class Erc1155LazyMintable {
  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.edition.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.edition.drop.revealer.reveal(batchId, "my secret password");
   * ```
   */

  /**
   * Claim tokens and configure claim conditions
   * @remarks Let users claim NFTs. Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const quantity = 10;
   * const tokenId = 0;
   * await contract.erc1155.claimTo("0x...", 0, quantity);
   * ```
   */
  constructor(erc1155, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_LAZY_MINTABLE.name);

    defineProperty._defineProperty(this, "revealer", void 0);

    defineProperty._defineProperty(this, "claimWithConditions", void 0);

    defineProperty._defineProperty(this, "claim", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc1155", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.claim = this.detectErc1155Claimable();
    this.claimWithConditions = this.detectErc1155ClaimableWithConditions();
    this.revealer = this.detectErc721Revealable();
  }
  /**
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */


  async lazyMint(metadatas, options) {
    var _receipt;

    const startFileNumber = await this.erc1155.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options); // ensure baseUri is the same for the entire batch

    const baseUri = batch[0].substring(0, batch[0].lastIndexOf("/"));

    for (let i = 0; i < batch.length; i++) {
      const uri = batch[i].substring(0, batch[i].lastIndexOf("/"));

      if (baseUri !== uri) {
        throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
      }
    }

    const isLegacyEditionDropContract = await this.isLegacyEditionDropContract();
    let receipt;

    if (isLegacyEditionDropContract) {
      receipt = await this.contractWrapper.sendTransaction("lazyMint", [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`]);
    } else {
      // new contracts/extensions have support for delayed reveal that adds an extra parameter to lazyMint
      receipt = await this.contractWrapper.sendTransaction("lazyMint", [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`, ethers.ethers.utils.toUtf8Bytes("")]);
    }

    const event = this.contractWrapper.parseLogs("TokensLazyMinted", (_receipt = receipt) === null || _receipt === void 0 ? void 0 : _receipt.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = event[0].args.endTokenId;
    const results = [];

    for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc1155.getTokenMetadata(id)
      });
    }

    return results;
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/


  detectErc1155Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Claimable") && !hasFunction("setClaimConditions", this.contractWrapper)) {
      return new ERC1155Claimable(this.contractWrapper);
    }

    return undefined;
  }

  detectErc1155ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC1155ClaimableWithConditions")) {
      return new Erc1155ClaimableWithConditions(this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc721Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_EDITION_REVEALABLE.name, () => this.erc1155.nextTokenIdToMint());
    }

    return undefined;
  }

  async isLegacyEditionDropContract() {
    if (hasFunction("contractType", this.contractWrapper)) {
      try {
        const contractType = ethers.ethers.utils.toUtf8String(await this.contractWrapper.readContract.contractType());
        return contractType.includes("DropERC1155");
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

}

/**
 * Mint Many ERC1155 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
 * ```
 * @public
 */

class Erc1155BatchMintable {
  constructor(erc1155, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_BATCH_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc1155", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.edition.mint.batch.to(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */


  async to(to, metadataWithSupply) {
    const metadatas = metadataWithSupply.map(a => a.metadata);
    const supplies = metadataWithSupply.map(a => a.supply);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const encoded = uris.map((uri, index) => this.contractWrapper.readContract.interface.encodeFunctionData("mintTo", [to, ethers.ethers.constants.MaxUint256, uri, supplies[index]]));
    const receipt = await this.contractWrapper.multiCall(encoded);
    const events = this.contractWrapper.parseLogs("TokensMinted", receipt.logs);

    if (events.length === 0 || events.length < metadatas.length) {
      throw new Error("TokenMinted event not found, minting failed");
    }

    return events.map(e => {
      const id = e.args.tokenIdMinted;
      return {
        id,
        receipt,
        data: () => this.erc1155.get(id)
      };
    });
  }

}

/**
 * Mint ERC1155 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc1155Mintable {
  /**
   * Batch mint Tokens to many addresses
   */
  constructor(erc1155, contractWrapper, storage) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "erc1155", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "batch", void 0);

    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc1155BatchMintable();
  }
  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.edition.mint.to(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */


  async to(to, metadataWithSupply) {
    const uri = await uploadOrExtractURI(metadataWithSupply.metadata, this.storage);
    const receipt = await this.contractWrapper.sendTransaction("mintTo", [to, ethers.ethers.constants.MaxUint256, uri, metadataWithSupply.supply]);
    const event = this.contractWrapper.parseLogs("TransferSingle", receipt === null || receipt === void 0 ? void 0 : receipt.logs);

    if (event.length === 0) {
      throw new Error("TransferSingleEvent event not found");
    }

    const id = event[0].args.id;
    return {
      id,
      receipt,
      data: () => this.erc1155.get(id.toString())
    };
  }
  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   * const tokenId = 0;
   * const additionalSupply = 1000;
   *
   * const tx = await contract.edition.mint.additionalSupplyTo(toAddress, tokenId, additionalSupply);
   * ```
   */


  async additionalSupplyTo(to, tokenId, additionalSupply) {
    const metadata = await this.erc1155.getTokenMetadata(tokenId);
    const receipt = await this.contractWrapper.sendTransaction("mintTo", [to, tokenId, metadata.uri, additionalSupply]);
    return {
      id: ethers.BigNumber.from(tokenId),
      receipt,
      data: () => this.erc1155.get(tokenId)
    };
  }

  detectErc1155BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155BatchMintable")) {
      return new Erc1155BatchMintable(this.erc1155, this.contractWrapper, this.storage);
    }

    return undefined;
  }

}

/**
 * Enables generating dynamic ERC1155 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */

class Erc1155SignatureMintable {
  constructor(contractWrapper, storage, roles) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION_SIGNATURE_MINTABLE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "roles", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.roles = roles;
  }
  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc1155.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc1155SignatureMintable.generate}
   * @twfeature ERC1155SignatureMintable
   */


  async mint(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, message.pricePerToken.mul(message.quantity), mintRequest.currencyAddress, overrides);
    const receipt = await this.contractWrapper.sendTransaction("mintWithSignature", [message, signature], overrides);
    const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);

    if (t.length === 0) {
      throw new Error("No MintWithSignature event found");
    }

    const id = t[0].args.tokenIdMinted;
    return {
      id,
      receipt
    };
  }
  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   *
   * @example
   * ```javascript
   * // see how to craft a batch of payloads to sign in the `generateBatch()` documentation
   * const signedPayloads = contract.erc1155.signature.generateBatch(payloads);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mintBatch(signedPayloads);
   * ```
   *
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC1155SignatureMintable
   */


  async mintBatch(signedPayloads) {
    const contractPayloads = await Promise.all(signedPayloads.map(async s => {
      const message = await this.mapPayloadToContractStruct(s.payload);
      const signature = s.signature;
      const price = s.payload.price;

      if (ethers.BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }

      return {
        message,
        signature
      };
    }));
    const encoded = contractPayloads.map(p => {
      return this.contractWrapper.readContract.interface.encodeFunctionData("mintWithSignature", [p.message, p.signature]);
    });
    const receipt = await this.contractWrapper.multiCall(encoded);
    const events = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);

    if (events.length === 0) {
      throw new Error("No MintWithSignature event found");
    }

    return events.map(log => ({
      id: log.args.tokenIdMinted,
      receipt
    }));
  }
  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC1155SignatureMintable
   */


  async verify(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const verification = await this.contractWrapper.readContract.verify(message, signature);
    return verification[0];
  }
  /**
   * Generate a signature that can be used to mint an NFT dynamically.
   *
   * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = contract.erc1155.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */


  async generate(payloadToSign) {
    const payload = { ...payloadToSign,
      tokenId: ethers.ethers.constants.MaxUint256
    };
    return this.generateFromTokenId(payload);
  }
  /**
   * Generate a signature that can be used to mint additionaly supply to an existing NFT.
   *
   * @remarks Takes in a payload with the token ID of an existing NFT, and signs it with your private key. The generated signature can then be used to mint additional supply to the NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   tokenId: 0, // Instead of metadata, we specificy the token ID of the NFT to mint supply to
   *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = contract.erc1155.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */


  async generateFromTokenId(payloadToSign) {
    const payloads = await this.generateBatchFromTokenIds([payloadToSign]);
    return payloads[0];
  }
  /**
   * Generate a batch of signatures that can be used to mint many new NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */


  async generateBatch(payloadsToSign) {
    const payloads = payloadsToSign.map(payload => ({ ...payload,
      tokenId: ethers.ethers.constants.MaxUint256
    }));
    return this.generateBatchFromTokenIds(payloads);
  }
  /**
   * Genrate a batch of signatures that can be used to mint new NFTs or additionaly supply to existing NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generateFromTokenId}
   *
   * @param payloadsToSign - the payloads to sign with tokenIds specified
   * @returns an array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */


  async generateBatchFromTokenIds(payloadsToSign) {
    var _this$roles;

    await ((_this$roles = this.roles) === null || _this$roles === void 0 ? void 0 : _this$roles.verify(["minter"], await this.contractWrapper.getSignerAddress()));
    const parsedRequests = payloadsToSign.map(m => Signature1155PayloadInputWithTokenId.parse(m));
    const metadatas = parsedRequests.map(r => r.metadata);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant__default["default"](signer, "No signer available");
    return await Promise.all(parsedRequests.map(async (m, i) => {
      const uri = uris[i];
      const finalPayload = Signature1155PayloadOutput.parse({ ...m,
        uri
      });
      const signature = await this.contractWrapper.signTypedData(signer, {
        name: "TokenERC1155",
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.readContract.address
      }, {
        MintRequest: MintRequest1155
      }, // TYPEHASH
      await this.mapPayloadToContractStruct(finalPayload));
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */


  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      tokenId: mintRequest.tokenId,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }

}

/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */

class Erc1155 {
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "featureName", FEATURE_EDITION.name);

    defineProperty._defineProperty(this, "query", void 0);

    defineProperty._defineProperty(this, "mintable", void 0);

    defineProperty._defineProperty(this, "burnable", void 0);

    defineProperty._defineProperty(this, "lazyMintable", void 0);

    defineProperty._defineProperty(this, "signatureMintable", void 0);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc1155Enumerable();
    this.mintable = this.detectErc1155Mintable();
    this.burnable = this.detectErc1155Burnable();
    this.lazyMintable = this.detectErc1155LazyMintable();
    this.signatureMintable = this.detectErc1155SignatureMintable();
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  } ////// Standard ERC1155 functions //////

  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const nft = await contract.erc1155.get(0);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC1155
   */


  async get(tokenId) {
    const [supply, metadata] = await Promise.all([this.contractWrapper.readContract.totalSupply(tokenId).catch(() => ethers.BigNumber.from(0)), this.getTokenMetadata(tokenId)]);
    return {
      owner: ethers.ethers.constants.AddressZero,
      metadata,
      type: "ERC1155",
      supply: supply.toNumber()
    };
  }
  /**
   * Returns the total supply of a specific token
   * @param tokenId - The token ID to get the total supply of
   * @returns the total supply
   */


  async totalSupply(tokenId) {
    return await this.contractWrapper.readContract.totalSupply(tokenId);
  }
  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * // Address of the wallet to check NFT balance
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0; // Id of the NFT to check
   * const balance = await contract.erc1155.balanceOf(walletAddress, tokenId);
   * ```
   * @twfeature ERC1155
   */


  async balanceOf(address, tokenId) {
    return await this.contractWrapper.readContract.balanceOf(address, tokenId);
  }
  /**
   * Get NFT Balance for the currently connected wallet
   */


  async balance(tokenId) {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress(), tokenId);
  }
  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */


  async isApproved(address, operator) {
    return await this.contractWrapper.readContract.isApprovedForAll(address, operator);
  }
  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.erc1155.transfer(toAddress, tokenId, amount);
   * ```
   * @twfeature ERC1155
   */


  async transfer(to, tokenId, amount) {
    let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
    const from = await this.contractWrapper.getSignerAddress();
    return {
      receipt: await this.contractWrapper.sendTransaction("safeTransferFrom", [from, to, tokenId, amount, data])
    };
  }
  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */


  async setApprovalForAll(operator, approved) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setApprovalForAll", [operator, approved])
    };
  }
  /**
   * Airdrop multiple NFTs
   *
   * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to airdrop
   * const tokenId = "0";
   * // Array of objects of addresses and quantities to airdrop NFTs to
   * const addresses = [
   *  {
   *    address: "0x...",
   *    quantity: 2,
   *  },
   *  {
   *   address: "0x...",
   *    quantity: 3,
   *  },
   * ];
   * await contract.airdrop(tokenId, addresses);
   *
   * // You can also pass an array of addresses, it will airdrop 1 NFT per address
   * const tokenId = "0";
   * const addresses = [
   *  "0x...", "0x...", "0x...",
   * ]
   * await contract.erc1155.airdrop(tokenId, addresses);
   * ```
   */


  async airdrop(tokenId, addresses) {
    let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0];
    const from = await this.contractWrapper.getSignerAddress();
    const balanceOf = await this.balanceOf(from, tokenId);
    const input = AirdropInputSchema.parse(addresses);
    const totalToAirdrop = input.reduce((prev, curr) => {
      return prev + Number((curr === null || curr === void 0 ? void 0 : curr.quantity) || 1);
    }, 0);

    if (balanceOf.toNumber() < totalToAirdrop) {
      throw new Error(`The caller owns ${balanceOf.toNumber()} NFTs, but wants to airdrop ${totalToAirdrop} NFTs.`);
    }

    const encoded = input.map(_ref => {
      let {
        address: to,
        quantity
      } = _ref;
      return this.contractWrapper.readContract.interface.encodeFunctionData("safeTransferFrom", [from, to, tokenId, quantity, data]);
    });
    return {
      receipt: await this.contractWrapper.multiCall(encoded)
    };
  }
  /**
   * Return the next available token ID to mint
   * @internal
   */


  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return await this.contractWrapper.readContract.nextTokenIdToMint();
    } else {
      throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint");
    }
  } ////// ERC1155 Enumerable Extension //////

  /**
   * Get All NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc1155.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC1155Enumerable
   */


  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).all(queryParams);
  }
  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCount() {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCount();
  }
  /**
   * Get the supply of token for a given tokenId.
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */


  async totalCirculatingSupply(tokenId) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCirculatingSupply(tokenId);
  }
  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.erc1155.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC1155Enumerable
   */


  async getOwned(walletAddress) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).owned(walletAddress);
  } ////// ERC1155 Mintable Extension //////

  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mint(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */


  async mint(metadataWithSupply) {
    return this.mintTo(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  }
  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mintTo(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */


  async mintTo(receiver, metadataWithSupply) {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).to(receiver, metadataWithSupply);
  }
  /**
   * Increase the supply of an existing NFT
   * @remarks Increase the supply of an existing NFT and mint it to the connected wallet address
   * @example
   * ```javascript
   * const tokenId = 0;
   * const additionalSupply = 1000;
   * await contract.erc1155.mintAdditionalSupply(tokenId, additionalSupply);
   * ```
   *
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   * @twfeature ERC1155Mintable
   */


  async mintAdditionalSupply(tokenId, additionalSupply) {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo(await this.contractWrapper.getSignerAddress(), tokenId, additionalSupply);
  }
  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   */


  async mintAdditionalSupplyTo(receiver, tokenId, additionalSupply) {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo(receiver, tokenId, additionalSupply);
  } ////// ERC1155 BatchMintable Extension //////

  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatch(metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */


  async mintBatch(metadataWithSupply) {
    return this.mintBatchTo(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  }
  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatchTo(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */


  async mintBatchTo(receiver, metadataWithSupply) {
    var _this$mintable;

    return assertEnabled((_this$mintable = this.mintable) === null || _this$mintable === void 0 ? void 0 : _this$mintable.batch, FEATURE_EDITION_BATCH_MINTABLE).to(receiver, metadataWithSupply);
  } ////// ERC1155 Burnable Extension //////

  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burn(tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */


  async burn(tokenId, amount) {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).tokens(tokenId, amount);
  }
  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burnFrom(account, tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */


  async burnFrom(account, tokenId, amount) {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).from(account, tokenId, amount);
  }
  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatch(tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */


  async burnBatch(tokenIds, amounts) {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batch(tokenIds, amounts);
  }
  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatchFrom(account, tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */


  async burnBatchFrom(account, tokenIds, amounts) {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batchFrom(account, tokenIds, amounts);
  } ////// ERC721 LazyMint Extension //////

  /**
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC1155LazyMintable
   */


  async lazyMint(metadatas, options) {
    return assertEnabled(this.lazyMintable, FEATURE_EDITION_LAZY_MINTABLE).lazyMint(metadatas, options);
  } ////// ERC1155 Claimable Extension //////

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   */


  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    var _this$lazyMintable, _this$lazyMintable2;

    const claimWithConditions = (_this$lazyMintable = this.lazyMintable) === null || _this$lazyMintable === void 0 ? void 0 : _this$lazyMintable.claimWithConditions;
    const claim = (_this$lazyMintable2 = this.lazyMintable) === null || _this$lazyMintable2 === void 0 ? void 0 : _this$lazyMintable2.claim;

    if (claimWithConditions) {
      return claimWithConditions.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }

    if (claim) {
      return claim.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }

    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIMABLE);
  }
  /**
   * Claim NFTs
   *
   * @remarks Let the connected wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claim(tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns - Receipt for the transaction
   * @twfeature ERC1155Claimable
   */


  async claim(tokenId, quantity, options) {
    return this.claimTo(await this.contractWrapper.getSignerAddress(), tokenId, quantity, options);
  }
  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns - Receipt for the transaction
   * @twfeature ERC1155Claimable
   */


  async claimTo(destinationAddress, tokenId, quantity, options) {
    var _this$lazyMintable3, _this$lazyMintable4;

    const claimWithConditions = (_this$lazyMintable3 = this.lazyMintable) === null || _this$lazyMintable3 === void 0 ? void 0 : _this$lazyMintable3.claimWithConditions;
    const claim = (_this$lazyMintable4 = this.lazyMintable) === null || _this$lazyMintable4 === void 0 ? void 0 : _this$lazyMintable4.claim;

    if (claimWithConditions) {
      return claimWithConditions.to(destinationAddress, tokenId, quantity, options);
    }

    if (claim) {
      return claim.to(destinationAddress, tokenId, quantity, options);
    }

    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIMABLE);
  }
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc1155.claimConditions.set(tokenId, claimConditions);
   * ```
   * @twfeature ERC1155ClaimableWithConditions
   */


  get claimConditions() {
    var _this$lazyMintable5;

    return assertEnabled((_this$lazyMintable5 = this.lazyMintable) === null || _this$lazyMintable5 === void 0 ? void 0 : _this$lazyMintable5.claimWithConditions, FEATURE_EDITION_CLAIMABLE_WITH_CONDITIONS).conditions;
  } ////// ERC1155 SignatureMintable Extension //////

  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc1155.signature.generate()` documentation
   * const signedPayload = contract.erc1155.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC1155SignatureMintable
   */


  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_EDITION_SIGNATURE_MINTABLE);
  } ////// ERC1155 DelayedReveal Extension //////

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.erc1155.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc1155.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC1155Revealable
   */


  get revealer() {
    var _this$lazyMintable6;

    return assertEnabled((_this$lazyMintable6 = this.lazyMintable) === null || _this$lazyMintable6 === void 0 ? void 0 : _this$lazyMintable6.revealer, FEATURE_EDITION_REVEALABLE);
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   * @param tokenId - the token Id to fetch
   */


  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.readContract.uri(tokenId);

    if (!tokenUri) {
      throw new NotFoundError();
    }

    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }

  detectErc1155Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Enumerable")) {
      return new Erc1155Enumerable(this, this.contractWrapper);
    }

    return undefined;
  }

  detectErc1155Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Mintable")) {
      return new Erc1155Mintable(this, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc1155Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Burnable")) {
      return new Erc1155Burnable(this.contractWrapper);
    }

    return undefined;
  }

  detectErc1155LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155LazyMintable")) {
      return new Erc1155LazyMintable(this, this.contractWrapper, this.storage);
    }

    return undefined;
  }

  detectErc1155SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155SignatureMintable")) {
      return new Erc1155SignatureMintable(this.contractWrapper, this.storage);
    }

    return undefined;
  }

}

/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */
class StandardErc1155 {
  get chainId() {
    return this._chainId;
  }

  constructor(contractWrapper, storage, chainId) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "erc1155", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc1155 = new Erc1155(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
  }
  /**
   * @internal
   */


  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  } ////// Standard ERC1155 functions //////

  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const nft = await contract.get("0");
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */


  async get(tokenId) {
    return this.erc1155.get(tokenId);
  }
  /**
   * Returns the total supply of a specific token
   * @param tokenId - The token ID to get the total supply of
   * @returns the total supply
   */


  async totalSupply(tokenId) {
    return this.erc1155.totalSupply(tokenId);
  }
  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * // Address of the wallet to check NFT balance
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0; // Id of the NFT to check
   * const balance = await contract.balanceOf(walletAddress, tokenId);
   * ```
   */


  async balanceOf(address, tokenId) {
    return this.erc1155.balanceOf(address, tokenId);
  }
  /**
   * Get NFT Balance for the currently connected wallet
   */


  async balance(tokenId) {
    return this.erc1155.balance(tokenId);
  }
  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */


  async isApproved(address, operator) {
    return this.erc1155.isApproved(address, operator);
  }
  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.transfer(toAddress, tokenId, amount);
   * ```
   */


  async transfer(to, tokenId, amount) {
    let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
    return this.erc1155.transfer(to, tokenId, amount, data);
  }
  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */


  async setApprovalForAll(operator, approved) {
    return this.erc1155.setApprovalForAll(operator, approved);
  }
  /**
   * Airdrop multiple NFTs
   *
   * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
   * @twfeature ERC1155
   * @example
   * ```javascript
   * // The token ID of the NFT you want to airdrop
   * const tokenId = "0";
   * // Array of objects of addresses and quantities to airdrop NFTs to
   * const addresses = [
   *  {
   *    address: "0x...",
   *    quantity: 2,
   *  },
   *  {
   *   address: "0x...",
   *    quantity: 3,
   *  },
   * ];
   * await contract.airdrop(tokenId, addresses);
   *
   * // You can also pass an array of addresses, it will airdrop 1 NFT per address
   * const tokenId = "0";
   * const addresses = [
   *  "0x...", "0x...", "0x...",
   * ]
   * await contract.airdrop(tokenId, addresses);
   * ```
   */


  async airdrop(tokenId, addresses) {
    let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0];
    return this.erc1155.airdrop(tokenId, addresses, data);
  }

}

/**
 * This method checks if the given token is approved for the transferrerContractAddress contract.
 * This is particularly useful for contracts that need to transfer NFTs on the users' behalf
 *
 * @internal
 * @param provider - The connected provider
 * @param transferrerContractAddress - The address of the marketplace contract
 * @param assetContract - The address of the asset contract.
 * @param tokenId - The token id of the token.
 * @param owner - The address of the account that owns the token.
 * @returns - True if the transferrerContractAddress is approved on the token, false otherwise.
 */

async function isTokenApprovedForTransfer(provider, transferrerContractAddress, assetContract, tokenId, owner) {
  try {
    const erc165 = new ethers.Contract(assetContract, ERC165Abi__default["default"], provider);
    const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);

    if (isERC721) {
      const asset = new ethers.Contract(assetContract, Erc721Abi__default["default"], provider);
      const approved = await asset.isApprovedForAll(owner, transferrerContractAddress);

      if (approved) {
        return true;
      }

      return (await asset.getApproved(tokenId)).toLowerCase() === transferrerContractAddress.toLowerCase();
    } else if (isERC1155) {
      const asset = new ethers.Contract(assetContract, Erc1155Abi__default["default"], provider);
      return await asset.isApprovedForAll(owner, transferrerContractAddress);
    } else {
      console.error("Contract does not implement ERC 1155 or ERC 721.");
      return false;
    }
  } catch (err) {
    console.error("Failed to check if token is approved", err);
    return false;
  }
}
/**
 * Checks if the marketplace is approved to make transfers on the assetContract
 * If not, it tries to set the approval.
 * @param signerOrProvider
 * @param marketplaceAddress
 * @param assetContract
 * @param tokenId
 * @param from
 */

async function handleTokenApproval(signerOrProvider, marketplaceAddress, assetContract, tokenId, from) {
  const erc165 = new ethers.Contract(assetContract, ERC165Abi__default["default"], signerOrProvider);
  const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
  const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155); // check for token approval

  if (isERC721) {
    const asset = new ContractWrapper(signerOrProvider, assetContract, Erc721Abi__default["default"], {});
    const approved = await asset.readContract.isApprovedForAll(from, marketplaceAddress);

    if (!approved) {
      const isTokenApproved = (await asset.readContract.getApproved(tokenId)).toLowerCase() === marketplaceAddress.toLowerCase();

      if (!isTokenApproved) {
        await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
      }
    }
  } else if (isERC1155) {
    const asset = new ContractWrapper(signerOrProvider, assetContract, Erc1155Abi__default["default"], {});
    const approved = await asset.readContract.isApprovedForAll(from, marketplaceAddress);

    if (!approved) {
      await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
    }
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
}
/**
 * Used to verify fields in new listing.
 * @internal
 */
// TODO this should be done in zod

function validateNewListingParam(param) {
  invariant__default["default"](param.assetContractAddress !== undefined && param.assetContractAddress !== null, "Asset contract address is required");
  invariant__default["default"](param.buyoutPricePerToken !== undefined && param.buyoutPricePerToken !== null, "Buyout price is required");
  invariant__default["default"](param.listingDurationInSeconds !== undefined && param.listingDurationInSeconds !== null, "Listing duration is required");
  invariant__default["default"](param.startTimestamp !== undefined && param.startTimestamp !== null, "Start time is required");
  invariant__default["default"](param.tokenId !== undefined && param.tokenId !== null, "Token ID is required");
  invariant__default["default"](param.quantity !== undefined && param.quantity !== null, "Quantity is required");

  switch (param.type) {
    case "NewAuctionListing":
      {
        invariant__default["default"](param.reservePricePerToken !== undefined && param.reservePricePerToken !== null, "Reserve price is required");
      }
  }
}
/**
 * Maps a contract offer to the strict interface
 *
 * @internal
 * @param offer
 * @returns - An `Offer` object
 */

async function mapOffer(provider, listingId, offer) {
  return {
    quantity: offer.quantityDesired,
    pricePerToken: offer.pricePerToken,
    currencyContractAddress: offer.currency,
    buyerAddress: offer.offeror,
    quantityDesired: offer.quantityWanted,
    currencyValue: await fetchCurrencyValue(provider, offer.currency, offer.quantityWanted.mul(offer.pricePerToken)),
    listingId
  };
}
function isWinningBid(winningPrice, newBidPrice, bidBuffer) {
  bidBuffer = ethers.BigNumber.from(bidBuffer);
  winningPrice = ethers.BigNumber.from(winningPrice);
  newBidPrice = ethers.BigNumber.from(newBidPrice);

  if (winningPrice.eq(ethers.BigNumber.from(0))) {
    return false;
  }

  const buffer = newBidPrice.sub(winningPrice).mul(MAX_BPS).div(winningPrice);
  return buffer.gte(bidBuffer);
}

/**
 * Handles direct listings
 * @public
 */

class MarketplaceDirect {
  constructor(contractWrapper, storage) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a direct listing by id
   *
   * @param listingId - the listing id
   * @returns the Direct listing object
   */


  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.listings(listingId);

    if (listing.assetContract === ethers.constants.AddressZero) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }

    if (listing.listingType !== exports.ListingType.Direct) {
      throw new WrongListingTypeError(this.getAddress(), listingId.toString(), "Auction", "Direct");
    }

    return await this.mapListing(listing);
  }
  /**
   * Get the active offer on a listing
   * @param listingId - the listing id
   * @param address - the address that made the offer
   */


  async getActiveOffer(listingId, address) {
    await this.validateListing(ethers.BigNumber.from(listingId));
    invariant__default["default"](ethers.utils.isAddress(address), "Address must be a valid address");
    const offers = await this.contractWrapper.readContract.offers(listingId, address);

    if (offers.offeror === ethers.constants.AddressZero) {
      return undefined;
    }

    return await mapOffer(this.contractWrapper.getProvider(), ethers.BigNumber.from(listingId), offers);
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Direct Listing
   *
   * @remarks Create a new listing on the marketplace where people can buy an asset directly.
   *
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much the asset will be sold for
   *   buyoutPricePerToken: "1.5",
   * }
   *
   * const tx = await contract.direct.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   */


  async createListing(listing) {
    validateNewListingParam(listing);
    await handleTokenApproval(this.contractWrapper.getSignerOrProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), listing.buyoutPricePerToken, listing.currencyContractAddress);
    let listingStartTime = Math.floor(listing.startTimestamp.getTime() / 1000);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;

    if (listingStartTime < blockTime) {
      listingStartTime = blockTime;
    }

    const receipt = await this.contractWrapper.sendTransaction("createListing", [{
      assetContract: listing.assetContractAddress,
      tokenId: listing.tokenId,
      buyoutPricePerToken: normalizedPricePerToken,
      currencyToAccept: listing.currencyContractAddress,
      listingType: exports.ListingType.Direct,
      quantityToList: listing.quantity,
      reservePricePerToken: normalizedPricePerToken,
      secondsUntilEndTime: listing.listingDurationInSeconds,
      startTime: ethers.BigNumber.from(listingStartTime)
    }], {
      // Higher gas limit for create listing
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("ListingAdded", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    return {
      id: event[0].args.listingId,
      receipt
    };
  }
  /**
   * Make an offer for a Direct Listing
   *
   * @remarks Make an offer on a direct listing
   *
   * @example
   * ```javascript
   * import { ChainId, NATIVE_TOKENS } from "@thirdweb-dev/sdk";
   *
   * // The listing ID of the asset you want to offer on
   * const listingId = 0;
   * // The price you are willing to offer per token
   * const pricePerToken = 1;
   * // The quantity of tokens you want to receive for this offer
   * const quantity = 1;
   * // The address of the currency you are making the offer in (must be ERC-20)
   * const currencyContractAddress = NATIVE_TOKENS[ChainId.Rinkeby].wrapped.address
   *
   * await contract.direct.makeOffer(
   *   listingId,
   *   quantity,
   *   currencyContractAddress,
   *   pricePerToken
   * );
   * ```
   */


  async makeOffer(listingId, quantityDesired, currencyContractAddress, pricePerToken, expirationDate) {
    if (isNativeToken(currencyContractAddress)) {
      throw new Error("You must use the wrapped native token address when making an offer with a native token");
    }

    const normalizedPrice = await normalizePriceValue(this.contractWrapper.getProvider(), pricePerToken, currencyContractAddress);

    try {
      await this.getListing(listingId);
    } catch (err) {
      console.error("Failed to get listing, err =", err);
      throw new Error(`Error getting the listing with id ${listingId}`);
    }

    const quantity = ethers.BigNumber.from(quantityDesired);
    const value = ethers.BigNumber.from(normalizedPrice).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, value, currencyContractAddress, overrides);
    let expirationTimestamp = ethers.ethers.constants.MaxUint256;

    if (expirationDate) {
      expirationTimestamp = ethers.BigNumber.from(Math.floor(expirationDate.getTime() / 1000));
    }

    return {
      receipt: await this.contractWrapper.sendTransaction("offer", [listingId, quantityDesired, currencyContractAddress, normalizedPrice, expirationTimestamp], overrides)
    };
  }
  /**
   * Accept an offer on a direct listing
   *
   * @remarks Accept an offer on a direct listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to bid on
   * const listingId = 0;
   * // The price you are willing to bid for a single token of the listing
   * const offeror = "0x...";
   *
   * await contract.direct.acceptOffer(listingId, offeror);
   * ```
   */


  async acceptOffer(listingId, addressOfOfferor) {
    /**
     * TODO:
     * - Provide better error handling if offer is too low.
     */
    await this.validateListing(ethers.BigNumber.from(listingId));
    const offer = await this.contractWrapper.readContract.offers(listingId, addressOfOfferor);
    return {
      receipt: await this.contractWrapper.sendTransaction("acceptOffer", [listingId, addressOfOfferor, offer.currency, offer.pricePerToken])
    };
  }
  /**
   * Buy a Listing
   *
   * @remarks Buy a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param quantityDesired - the quantity to buy
   * @param receiver - optional receiver of the bought listing if different from the connected wallet
   */


  async buyoutListing(listingId, quantityDesired, receiver) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const {
      valid,
      error
    } = await this.isStillValidListing(listing, quantityDesired);

    if (!valid) {
      throw new Error(`Listing ${listingId} is no longer valid. ${error}`);
    }

    const buyFor = receiver ? receiver : await this.contractWrapper.getSignerAddress();
    const quantity = ethers.BigNumber.from(quantityDesired);
    const value = ethers.BigNumber.from(listing.buyoutPrice).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return {
      receipt: await this.contractWrapper.sendTransaction("buy", [listingId, buyFor, quantity, listing.currencyContractAddress, value], overrides)
    };
  }
  /**
   * Update a Direct listing with new metadata.
   *
   * Note: cannot update a listing with a new quantity of 0. Use `cancelDirectListing` to remove a listing instead.
   *
   * @param listing - the new listing information
   */


  async updateListing(listing) {
    return {
      receipt: await this.contractWrapper.sendTransaction("updateListing", [listing.id, listing.quantity, listing.buyoutPrice, // reserve price, doesn't matter for direct listing
      listing.buyoutPrice, listing.currencyContractAddress, listing.startTimeInSeconds, listing.secondsUntilEnd])
    };
  }
  /**
   * Cancel Direct Listing
   *
   * @remarks Cancel a direct listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to cancel
   * const listingId = "0";
   *
   * await contract.direct.cancelListing(listingId);
   * ```
   */


  async cancelListing(listingId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("cancelDirectListing", [listingId])
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */


  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }
  /**
   * Helper method maps the auction listing to the direct listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */


  async mapListing(listing) {
    return {
      assetContractAddress: listing.assetContract,
      buyoutPrice: ethers.BigNumber.from(listing.buyoutPricePerToken),
      currencyContractAddress: listing.currency,
      buyoutCurrencyValuePerToken: await fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.buyoutPricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId,
      quantity: listing.quantity,
      startTimeInSeconds: listing.startTime,
      asset: await fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      secondsUntilEnd: listing.endTime,
      sellerAddress: listing.tokenOwner,
      type: exports.ListingType.Direct
    };
  }
  /**
   * Use this method to check if a direct listing is still valid.
   *
   * Ways a direct listing can become invalid:
   * 1. The asset holder transferred the asset to another wallet
   * 2. The asset holder burned the asset
   * 3. The asset holder removed the approval on the marketplace
   *
   * @internal
   * @param listing - The listing to check.
   * @returns - True if the listing is valid, false otherwise.
   */


  async isStillValidListing(listing, quantity) {
    const approved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, listing.sellerAddress);

    if (!approved) {
      return {
        valid: false,
        error: `Token '${listing.tokenId}' from contract '${listing.assetContractAddress}' is not approved for transfer`
      };
    }

    const provider = this.contractWrapper.getProvider();
    const erc165 = new ethers.Contract(listing.assetContractAddress, ERC165Abi__default["default"], provider);
    const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);

    if (isERC721) {
      const asset = new ethers.Contract(listing.assetContractAddress, Erc721Abi__default["default"], provider);
      const valid = (await asset.ownerOf(listing.tokenId)).toLowerCase() === listing.sellerAddress.toLowerCase();
      return {
        valid,
        error: valid ? undefined : `Seller is not the owner of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} anymore'`
      };
    } else if (isERC1155) {
      const asset = new ethers.Contract(listing.assetContractAddress, Erc1155Abi__default["default"], provider);
      const balance = await asset.balanceOf(listing.sellerAddress, listing.tokenId);
      const valid = balance.gte(quantity || listing.quantity);
      return {
        valid,
        error: valid ? undefined : `Seller does not have enough balance of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} to fulfill the listing`
      };
    } else {
      return {
        valid: false,
        error: "Contract does not implement ERC 1155 or ERC 721."
      };
    }
  }

}

/**
 * Handles auction listings
 * @public
 */

class MarketplaceAuction {
  constructor(contractWrapper, storage) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get an Auction listing by id
   *
   * @param listingId - the listing Id
   * @returns the Auction listing object
   */


  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.listings(listingId);

    if (listing.listingId.toString() !== listingId.toString()) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }

    if (listing.listingType !== exports.ListingType.Auction) {
      throw new WrongListingTypeError(this.getAddress(), listingId.toString(), "Direct", "Auction");
    }

    return await this.mapListing(listing);
  }
  /**
   * Get Highest Bid
   *
   * @remarks Get the current highest bid of an active auction.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction that closed
   * const listingId = 0;
   *
   * contract.auction.
   *   .getWinningBid(listingId)
   *   .then((offer) => console.log(offer))
   *   .catch((err) => console.error(err));
   * ```
   */


  async getWinningBid(listingId) {
    await this.validateListing(ethers.BigNumber.from(listingId));
    const offers = await this.contractWrapper.readContract.winningBid(listingId);

    if (offers.offeror === ethers.constants.AddressZero) {
      return undefined;
    }

    return await mapOffer(this.contractWrapper.getProvider(), ethers.BigNumber.from(listingId), offers);
  }
  /**
   * Get Auction Winner
   *
   * @remarks Get the winner of the auction after an auction ends.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction that closed
   * const listingId = 0;
   *
   * contract.auction.
   *   .getWinner(listingId)
   *   .then((auctionWinner) => console.log(auctionWinner))
   *   .catch((err) => console.error(err));
   * ```
   */


  async getWinner(listingId) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const offers = await this.contractWrapper.readContract.winningBid(listingId);
    const now = ethers.BigNumber.from(Math.floor(Date.now() / 1000));
    const endTime = ethers.BigNumber.from(listing.endTimeInEpochSeconds); // if we have a winner in the map and the current time is past the endtime of the auction return the address of the winner

    if (now.gt(endTime) && offers.offeror !== ethers.constants.AddressZero) {
      return offers.offeror;
    } // otherwise fall back to query filter things
    // TODO this should be via indexer or direct contract call


    const closedAuctions = await this.contractWrapper.readContract.queryFilter(this.contractWrapper.readContract.filters.AuctionClosed());
    const auction = closedAuctions.find(a => a.args.listingId.eq(ethers.BigNumber.from(listingId)));

    if (!auction) {
      throw new Error(`Could not find auction with listingId ${listingId} in closed auctions`);
    }

    return auction.args.winningBidder;
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Auction
   *
   * @remarks Create a new auction where people can bid on an asset.
   *
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutPricePerToken: "10",
   *   // the minimum bid that will be accepted for the token
   *   reservePricePerToken: "1.5",
   * }
   *
   * const tx = await contract.auction.createListing(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   */


  async createListing(listing) {
    validateNewListingParam(listing);
    await handleTokenApproval(this.contractWrapper.getSignerOrProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), listing.buyoutPricePerToken, listing.currencyContractAddress);
    const normalizedReservePrice = await normalizePriceValue(this.contractWrapper.getProvider(), listing.reservePricePerToken, listing.currencyContractAddress);
    let listingStartTime = Math.floor(listing.startTimestamp.getTime() / 1000);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;

    if (listingStartTime < blockTime) {
      listingStartTime = blockTime;
    }

    const receipt = await this.contractWrapper.sendTransaction("createListing", [{
      assetContract: listing.assetContractAddress,
      tokenId: listing.tokenId,
      buyoutPricePerToken: normalizedPricePerToken,
      currencyToAccept: listing.currencyContractAddress,
      listingType: exports.ListingType.Auction,
      quantityToList: listing.quantity,
      reservePricePerToken: normalizedReservePrice,
      secondsUntilEndTime: listing.listingDurationInSeconds,
      startTime: ethers.BigNumber.from(listingStartTime)
    }], {
      // Higher gas limit for create listing
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("ListingAdded", receipt === null || receipt === void 0 ? void 0 : receipt.logs);
    return {
      id: event[0].args.listingId,
      receipt
    };
  }
  /**
   * Buyout Auction
   *
   * @remarks Buy a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   *
   * await contract.auction.buyoutListing(listingId);
   * ```
   */


  async buyoutListing(listingId) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const currencyMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), listing.currencyContractAddress);
    return this.makeBid(listingId, ethers.ethers.utils.formatUnits(listing.buyoutPrice, currencyMetadata.decimals));
  }
  /**
   * Bid On Auction
   *
   * @remarks Make a bid on an auction listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to bid on
   * const listingId = 0;
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 1;
   *
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */


  async makeBid(listingId, pricePerToken) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const normalizedPrice = await normalizePriceValue(this.contractWrapper.getProvider(), pricePerToken, listing.currencyContractAddress);

    if (normalizedPrice.eq(ethers.BigNumber.from(0))) {
      throw new Error("Cannot make a bid with 0 value");
    }

    const bidBuffer = await this.contractWrapper.readContract.bidBufferBps();
    const winningBid = await this.getWinningBid(listingId);

    if (winningBid) {
      const isWinnner = isWinningBid(winningBid.pricePerToken, normalizedPrice, bidBuffer);
      invariant__default["default"](isWinnner, "Bid price is too low based on the current winning bid and the bid buffer");
    } else {
      const tokenPrice = normalizedPrice;
      const reservePrice = ethers.BigNumber.from(listing.reservePrice);
      invariant__default["default"](tokenPrice.gte(reservePrice), "Bid price is too low based on reserve price");
    }

    const quantity = ethers.BigNumber.from(listing.quantity);
    const value = normalizedPrice.mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return {
      receipt: await this.contractWrapper.sendTransaction("offer", [listingId, listing.quantity, listing.currencyContractAddress, normalizedPrice, ethers.ethers.constants.MaxUint256], overrides)
    };
  }
  /**
   * Cancel Auction Listing
   *
   * @remarks Cancel an auction listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the auction listing you want to cancel
   * const listingId = "0";
   *
   * await contract.auction.cancelListing(listingId);
   * ```
   */


  async cancelListing(listingId) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const now = ethers.BigNumber.from(Math.floor(Date.now() / 1000));
    const startTime = ethers.BigNumber.from(listing.startTimeInEpochSeconds);
    const offers = await this.contractWrapper.readContract.winningBid(listingId);

    if (now.gt(startTime) && offers.offeror !== ethers.constants.AddressZero) {
      throw new AuctionAlreadyStartedError(listingId.toString());
    }

    return {
      receipt: await this.contractWrapper.sendTransaction("closeAuction", [ethers.BigNumber.from(listingId), await this.contractWrapper.getSignerAddress()])
    };
  }
  /**
   * Close the Auction
   *
   * @remarks Closes the Auction and executes the sale.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction listing you want to close
   * const listingId = "0";
   * await contract.auction.closeListing(listingId);
   * ```
   *
   * @param listingId - the auction  listing ud to close
   * @param closeFor - optionally pass the auction creator address or winning bid offeror address to close the auction on their behalf
   */


  async closeListing(listingId, closeFor) {
    if (!closeFor) {
      closeFor = await this.contractWrapper.getSignerAddress();
    }

    const listing = await this.validateListing(ethers.BigNumber.from(listingId));

    try {
      return {
        receipt: await this.contractWrapper.sendTransaction("closeAuction", [ethers.BigNumber.from(listingId), closeFor])
      };
    } catch (err) {
      if (err.message.includes("cannot close auction before it has ended")) {
        throw new AuctionHasNotEndedError(listingId.toString(), listing.endTimeInEpochSeconds.toString());
      } else {
        throw err;
      }
    }
  }
  /**
   * Update an Auction listing with new metadata
   * @param listing - the listing id to update
   */


  async updateListing(listing) {
    return {
      receipt: await this.contractWrapper.sendTransaction("updateListing", [listing.id, listing.quantity, listing.reservePrice, listing.buyoutPrice, listing.currencyContractAddress, listing.startTimeInEpochSeconds, listing.endTimeInEpochSeconds])
    };
  }
  /**
   * Get the buffer in basis points between offers
   */


  async getBidBufferBps() {
    return this.contractWrapper.readContract.bidBufferBps();
  }
  /**
   * returns the minimum bid a user can place to outbid the previous highest bid
   * @param listingId - the listing id of the auction
   */


  async getMinimumNextBid(listingId) {
    // we can fetch all of these at the same time using promise.all
    const [currentBidBufferBps, winningBid, listing] = await Promise.all([this.getBidBufferBps(), this.getWinningBid(listingId), await this.validateListing(ethers.BigNumber.from(listingId))]);
    const currentBidOrReservePrice = winningBid ? // if there is a winning bid use the value of it
    winningBid.currencyValue.value : // if there is no winning bid use the reserve price
    listing.reservePrice;
    const minimumNextBid = currentBidOrReservePrice.add( // the addition of the current bid and the buffer
    // (have to divide by 10000 to get the fraction of the buffer (since it's in basis points))
    currentBidOrReservePrice.mul(currentBidBufferBps).div(10000)); // it's more useful to return a currency value here

    return fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currencyContractAddress, minimumNextBid);
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */


  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }
  /**
   * Helper method maps the auction listing to the auction listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */


  async mapListing(listing) {
    return {
      assetContractAddress: listing.assetContract,
      buyoutPrice: ethers.BigNumber.from(listing.buyoutPricePerToken),
      currencyContractAddress: listing.currency,
      buyoutCurrencyValuePerToken: await fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.buyoutPricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId,
      quantity: listing.quantity,
      startTimeInEpochSeconds: listing.startTime,
      asset: await fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      reservePriceCurrencyValuePerToken: await fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.reservePricePerToken),
      reservePrice: ethers.BigNumber.from(listing.reservePricePerToken),
      endTimeInEpochSeconds: listing.endTime,
      sellerAddress: listing.tokenOwner,
      type: exports.ListingType.Auction
    };
  }

}

const DropErc20ContractInput = CommonContractSchema.merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc20ContractOutput = CommonContractOutputSchema.merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc20ContractDeploy = DropErc20ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc20ContractSchema = {
  deploy: DropErc20ContractDeploy,
  output: DropErc20ContractOutput,
  input: DropErc20ContractInput
};

const MultiwrapContractInput = CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const MultiwrapContractOutput = CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const MultiwrapContractDeploy = MultiwrapContractInput.merge(CommonTrustedForwarderSchema);
const MultiwrapContractSchema = {
  deploy: MultiwrapContractDeploy,
  output: MultiwrapContractOutput,
  input: MultiwrapContractInput
};

const EditionDropInitializer = {
  name: "DropERC1155",
  contractType: "edition-drop",
  schema: DropErc1155ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
      _ref[_key] = arguments[_key];
    }

    let [network, address, storage, options] = _ref;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([EditionDropInitializer.getAbi(), Promise.resolve().then(function () { return require('./edition-drop-5dcde50e.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.EditionDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/DropERC1155.json')); })).default
};
const EditionInitializer = {
  name: "TokenERC1155",
  contractType: "edition",
  schema: TokenErc1155ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _ref2[_key2] = arguments[_key2];
    }

    let [network, address, storage, options] = _ref2;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([EditionInitializer.getAbi(), Promise.resolve().then(function () { return require('./edition-9c2d4c64.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Edition(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/TokenERC1155.json')); })).default
};
const MarketplaceInitializer = {
  name: "Marketplace",
  contractType: "marketplace",
  schema: MarketplaceContractSchema,
  roles: ["admin", "lister", "asset"],
  initialize: async function () {
    for (var _len3 = arguments.length, _ref3 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _ref3[_key3] = arguments[_key3];
    }

    let [network, address, storage, options] = _ref3;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([MarketplaceInitializer.getAbi(), Promise.resolve().then(function () { return require('./marketplace-791c00cc.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Marketplace(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/Marketplace.json')); })).default
};
const MultiwrapInitializer = {
  name: "Multiwrap",
  contractType: "multiwrap",
  schema: MultiwrapContractSchema,
  roles: ["admin", "transfer", "minter", "unwrap", "asset"],
  initialize: async function () {
    for (var _len4 = arguments.length, _ref4 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      _ref4[_key4] = arguments[_key4];
    }

    let [network, address, storage, options] = _ref4;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([MultiwrapInitializer.getAbi(), Promise.resolve().then(function () { return require('./multiwrap-54329050.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Multiwrap(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/Multiwrap.json')); })).default
};
const NFTCollectionInitializer = {
  name: "TokenERC721",
  contractType: "nft-collection",
  schema: TokenErc721ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len5 = arguments.length, _ref5 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      _ref5[_key5] = arguments[_key5];
    }

    let [network, address, storage, options] = _ref5;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([NFTCollectionInitializer.getAbi(), Promise.resolve().then(function () { return require('./nft-collection-0acd4973.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.NFTCollection(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/TokenERC721.json')); })).default
};
const NFTDropInitializer = {
  name: "DropERC721",
  contractType: "nft-drop",
  schema: DropErc721ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len6 = arguments.length, _ref6 = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      _ref6[_key6] = arguments[_key6];
    }

    let [network, address, storage, options] = _ref6;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([NFTDropInitializer.getAbi(), Promise.resolve().then(function () { return require('./nft-drop-0d6e2a03.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.NFTDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/DropERC721.json')); })).default
};
const PackInitializer = {
  name: "Pack",
  contractType: "pack",
  schema: PackContractSchema,
  roles: ["admin", "minter", "asset", "transfer"],
  initialize: async function () {
    for (var _len7 = arguments.length, _ref7 = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      _ref7[_key7] = arguments[_key7];
    }

    let [network, address, storage, options] = _ref7;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([PackInitializer.getAbi(), Promise.resolve().then(function () { return require('./pack-4167e76f.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Pack(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/Pack.json')); })).default
};
const SignatureDropInitializer = {
  name: "SignatureDrop",
  contractType: "signature-drop",
  schema: DropErc721ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len8 = arguments.length, _ref8 = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      _ref8[_key8] = arguments[_key8];
    }

    let [network, address, storage, options] = _ref8;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([SignatureDropInitializer.getAbi(), Promise.resolve().then(function () { return require('./signature-drop-9d6900d1.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.SignatureDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/SignatureDrop.json')); })).default
};
const SplitInitializer = {
  name: "Split",
  contractType: "split",
  schema: SplitsContractSchema,
  roles: ["admin"],
  initialize: async function () {
    for (var _len9 = arguments.length, _ref9 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      _ref9[_key9] = arguments[_key9];
    }

    let [network, address, storage, options] = _ref9;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([SplitInitializer.getAbi(), Promise.resolve().then(function () { return require('./split-5d901221.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Split(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/Split.json')); })).default
};
const TokenDropInitializer = {
  name: "DropERC20",
  contractType: "token-drop",
  schema: DropErc20ContractSchema,
  roles: ["admin", "transfer"],
  initialize: async function () {
    for (var _len10 = arguments.length, _ref10 = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      _ref10[_key10] = arguments[_key10];
    }

    let [network, address, storage, options] = _ref10;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([TokenDropInitializer.getAbi(), Promise.resolve().then(function () { return require('./token-drop-76df58b3.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.TokenDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/DropERC20.json')); })).default
};
const TokenInitializer = {
  name: "TokenERC20",
  contractType: "token",
  schema: TokenErc20ContractSchema,
  roles: ["admin", "minter", "transfer"],
  initialize: async function () {
    for (var _len11 = arguments.length, _ref11 = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      _ref11[_key11] = arguments[_key11];
    }

    let [network, address, storage, options] = _ref11;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([TokenInitializer.getAbi(), Promise.resolve().then(function () { return require('./token-71588899.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Token(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/TokenERC20.json')); })).default
};
const VoteInitializer = {
  name: "VoteERC20",
  contractType: "vote",
  schema: VoteContractSchema,
  roles: [],
  initialize: async function () {
    for (var _len12 = arguments.length, _ref12 = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      _ref12[_key12] = arguments[_key12];
    }

    let [network, address, storage, options] = _ref12;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([VoteInitializer.getAbi(), Promise.resolve().then(function () { return require('./vote-157c376c.cjs.prod.js'); }), provider.getNetwork()]);
    return new contract.Vote(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async () => (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/dist/abis/VoteERC20.json')); })).default
};
/**
 * a map from contractType -> contract metadata
 * @internal
 */

const PREBUILT_CONTRACTS_MAP = {
  [EditionDropInitializer.contractType]: EditionDropInitializer,
  [EditionInitializer.contractType]: EditionInitializer,
  [MarketplaceInitializer.contractType]: MarketplaceInitializer,
  [MultiwrapInitializer.contractType]: MultiwrapInitializer,
  [NFTCollectionInitializer.contractType]: NFTCollectionInitializer,
  [NFTDropInitializer.contractType]: NFTDropInitializer,
  [PackInitializer.contractType]: PackInitializer,
  [SignatureDropInitializer.contractType]: SignatureDropInitializer,
  [SplitInitializer.contractType]: SplitInitializer,
  [TokenDropInitializer.contractType]: TokenDropInitializer,
  [TokenInitializer.contractType]: TokenInitializer,
  [VoteInitializer.contractType]: VoteInitializer
};
const SmartContract$1 = {
  name: "SmartContract",
  contractType: "custom",
  schema: CustomContractSchema,
  roles: ALL_ROLES
};
const CONTRACTS_MAP = { ...PREBUILT_CONTRACTS_MAP,
  [SmartContract$1.contractType]: SmartContract$1
};
/**
 * @internal
 */

function getContractTypeForRemoteName(name) {
  var _Object$values$find;

  return ((_Object$values$find = Object.values(CONTRACTS_MAP).find(contract => contract.name === name)) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.contractType) || "custom";
}

/**
 * Have an official Application URI for this contract.
 * @remarks Configure an official Application URI for this contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const appURI = await contract.appuri.get();
 * appURI = "ipfs://some_ipfs_hash";
 *
 * await contract.appuri.set(appURI)
 * ```
 * @public
 */
class ContractAppURI {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_APPURI.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the appURI for the contract
   * @returns the appURI object
   */


  async get() {
    return await this.contractWrapper.readContract.appURI();
  }
  /**
   * Set the appURI for the contract
   * @param appURI - the uri to set (typically an IPFS hash)
   */


  async set(appURI) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setAppURI", [appURI])
    };
  }

}

/**
 * Listen to Contract events in real time
 * @public
 */
class ContractEvents {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Subscribe to transactions in this contract.
   * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
   * @example
   * ```javascript
   * contract.events.addTransactionListener((event) => {
   *   console.log(event);
   * }
   * ```
   * @param listener - the callback function that will be called on every transaction
   * @public
   */


  addTransactionListener(listener) {
    this.contractWrapper.addListener(exports.EventType.Transaction, listener);
  }
  /**
   * Remove a transaction listener
   * @remarks Remove a listener that was added with addTransactionListener
   * @example
   * ```javascript
   * contract.events.removeTransactionListener((event) => {
   *  console.log(event);
   * }
   * ```
   * @param listener - the callback function to remove
   * @public
   */


  removeTransactionListener(listener) {
    this.contractWrapper.off(exports.EventType.Transaction, listener);
  }
  /**
   * Subscribe to contract events
   * @remarks You can add a listener for any contract event to run a function when
   * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
   * you could do the following:
   * @example
   * ```javascript
   * contract.events.addEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the callback function that will be called on every new event
   * @returns a function to un-subscribe from the event
   */


  addEventListener(eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    const address = this.contractWrapper.readContract.address;
    const filter = {
      address,
      topics: [this.contractWrapper.readContract.interface.getEventTopic(event)]
    };

    const wrappedListener = log => {
      const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
      listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
    };

    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }
  /**
   * Listen to all events emitted from this contract
   *
   * @example
   * ```javascript
   * contract.events.listenToAllEvents((event) => {
   *   console.log(event.eventName) // the name of the emitted event
   *   console.log(event.data) // event payload
   * }
   * ```
   * @public
   * @param listener - the callback function that will be called on every new event
   * @returns A function that can be called to stop listening to events
   */


  listenToAllEvents(listener) {
    const address = this.contractWrapper.readContract.address;
    const filter = {
      address
    };

    const wrappedListener = log => {
      try {
        const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
        listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
      } catch (e) {
        console.error("Could not parse event:", log, e);
      }
    };

    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }
  /**
   * Remove an event listener from this contract
   * @remarks Remove a listener that was added with addEventListener
   * @example
   * ```javascript
   * contract.events.removeEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the listener to unregister
   */


  removeEventListener(eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    this.contractWrapper.readContract.off(event.name, listener);
  }
  /**
   * Remove all listeners on this contract
   * @remarks Remove all listeners from a contract
   * @example
   * ```javascript
   * contract.events.removeAllListeners();
   * ```
   * @public
   */


  removeAllListeners() {
    this.contractWrapper.readContract.removeAllListeners();
    const address = this.contractWrapper.readContract.address;
    const filter = {
      address
    };
    this.contractWrapper.getProvider().removeAllListeners(filter);
  }
  /**
   * Get All Events
   * @remarks Get a list of all the events emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getAllEvents(filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
   * @returns The event objects of the events emitted with event names and data for each event
   */


  async getAllEvents() {
    let filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const events = await this.contractWrapper.readContract.queryFilter({}, filters.fromBlock, filters.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }
  /**
   * Get Events
   * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // The name of the event to get logs for
   * const eventName = "Transfer";
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getEvents(eventName, filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param eventName - The name of the event to get logs for
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryFilter
   * @returns The requested event objects with event data
   */


  async getEvents(eventName) {
    let filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    const filter = this.contractWrapper.readContract.filters[event.name];
    const events = await this.contractWrapper.readContract.queryFilter(filter(), filters.fromBlock, filters.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }

  parseEvents(events) {
    return events.map(e => {
      const transaction = Object.fromEntries(Object.entries(e).filter(a => typeof a[1] !== "function" && a[0] !== "args"));

      if (e.args) {
        const entries = Object.entries(e.args);
        const args = entries.slice(entries.length / 2, entries.length);
        const data = {};

        for (const [key, value] of args) {
          data[key] = value;
        }

        return {
          eventName: e.event || "",
          data: data,
          transaction
        };
      }

      return {
        eventName: e.event || "",
        data: {},
        transaction
      };
    });
  }

  toContractEvent(event, args, rawLog) {
    const transaction = Object.fromEntries(Object.entries(rawLog).filter(a => typeof a[1] !== "function" && a[0] !== "args"));
    const results = {};
    event.inputs.forEach((param, index) => {
      if (Array.isArray(args[index])) {
        const obj = {};
        const components = param.components;

        if (components) {
          const arr = args[index];

          for (let i = 0; i < components.length; i++) {
            const name = components[i].name;
            obj[name] = arr[i];
          }

          results[param.name] = obj;
        }
      } else {
        results[param.name] = args[index];
      }
    });
    return {
      eventName: event.name,
      data: results,
      transaction
    };
  }

}

/**
 * Allows overriding transaction behavior for this contract
 * @public
 */
class ContractInterceptor {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * The next transaction executed will add/replace any overrides passed via the passed in hook.
   * @remarks Overridden values will be applied to the next transaction executed.
   * @example
   * ```javascript
   * contract.interceptor.overrideNextTransaction(() => ({
   *   gasLimit: 3000000,
   * }));
   * ```
   * @param hook - the hook to add or replace any CallOverrides (gas limit, gas price, nonce, from, value, etc...)
   * @public
   */


  overrideNextTransaction(hook) {
    this.contractWrapper.withTransactionOverride(hook);
  }

}

/**
 * Handle platform fees and recipients
 * @remarks Configure platform fees for a contract, which can be applied on certain paid transactions
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const feeInfo = await contract.platformFee.get();
 * await contract.platformFee.set({
 *   platform_fee_basis_points: 100, // 1% fee
 *   platform_fee_recipient: "0x..." // the fee recipient
 * })
 * ```
 * @public
 */
class ContractPlatformFee {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_PLATFORM_FEE.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Get the platform fee recipient and basis points
   *  * @example
   * ```javascript
   * const feeInfo = await contract.platformFee.get();
   * ```
   * @twfeature PlatformFee
   */


  async get() {
    const [platformFeeRecipient, platformFeeBps] = await this.contractWrapper.readContract.getPlatformFeeInfo();
    return CommonPlatformFeeSchema.parse({
      platform_fee_recipient: platformFeeRecipient,
      platform_fee_basis_points: platformFeeBps
    });
  }
  /**
   * Set the platform fee recipient and basis points
   * @param platformFeeInfo - the platform fee information
   * ```javascript
   * await contract.platformFee.set({
   *   platform_fee_basis_points: 100, // 1% fee
   *   platform_fee_recipient: "0x..." // the fee recipient
   * })
   * ```
   * @twfeature PlatformFee
   */


  async set(platformFeeInfo) {
    const parsed = CommonPlatformFeeSchema.parse(platformFeeInfo);
    return {
      receipt: await this.contractWrapper.sendTransaction("setPlatformFeeInfo", [parsed.platform_fee_recipient, parsed.platform_fee_basis_points])
    };
  }

}

/**
 * Handles publish metadata for a contract
 * @internal
 */
class ContractPublishedMetadata {
  constructor(contractWrapper, storage) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "_cachedMetadata", void 0);

    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  /**
   * Get the published metadata for this contract
   * @public
   */


  async get() {
    if (this._cachedMetadata) {
      return this._cachedMetadata;
    }

    this._cachedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.readContract.address, this.contractWrapper.getProvider(), this.storage);
    return this._cachedMetadata;
  }
  /**
   * @public
   */


  async extractFunctions() {
    var _publishedMetadata;

    let publishedMetadata;

    try {
      publishedMetadata = await this.get();
    } catch (e) {// ignore for built-in contracts
    } // to construct a contract we already **have** to have the abi on the contract wrapper, so there is no reason to look fetch it again (means this function can become synchronous as well!)


    return extractFunctionsFromAbi(AbiSchema.parse(this.contractWrapper.abi), (_publishedMetadata = publishedMetadata) === null || _publishedMetadata === void 0 ? void 0 : _publishedMetadata.metadata);
  }
  /**
   * @public
   */


  async extractEvents() {
    var _publishedMetadata2;

    let publishedMetadata;

    try {
      publishedMetadata = await this.get();
    } catch (e) {// ignore for built-in contracts
    } // to construct a contract we already **have** to have the abi on the contract wrapper, so there is no reason to look fetch it again (means this function can become synchronous as well!)


    return extractEventsFromAbi(AbiSchema.parse(this.contractWrapper.abi), (_publishedMetadata2 = publishedMetadata) === null || _publishedMetadata2 === void 0 ? void 0 : _publishedMetadata2.metadata);
  }

}

/**
 * Custom contract dynamic class with feature detection
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK(provider);
 * const contract = await sdk.getContract("{{contract_address}}");
 *
 * // call any function in your contract
 * await contract.call("myCustomFunction", param1, param2);
 *
 * // if your contract follows the ERC721 standard, contract.nft will be present
 * const allNFTs = await contract.erc721.query.all()
 *
 * // if your contract extends IMintableERC721, contract.nft.mint() will be available
 * const tx = await contract.erc721.mint({
 *     name: "Cool NFT",
 *     image: readFileSync("some_image.png"),
 *   });
 * ```
 *
 * @beta
 */
class SmartContract {
  // utilities

  /**
   * Handle royalties
   */
  get royalties() {
    return assertEnabled(this.detectRoyalties(), FEATURE_ROYALTY);
  }
  /**
   * Handle permissions
   */


  get roles() {
    return assertEnabled(this.detectRoles(), FEATURE_PERMISSIONS);
  }
  /**
   * Handle primary sales
   */


  get sales() {
    return assertEnabled(this.detectPrimarySales(), FEATURE_PRIMARY_SALE);
  }
  /**
   * Handle platform fees
   */


  get platformFees() {
    return assertEnabled(this.detectPlatformFees(), FEATURE_PLATFORM_FEE);
  }
  /**
   * Set and get the owner of the contract
   */


  get owner() {
    return assertEnabled(this.detectOwnable(), FEATURE_OWNER);
  }
  /**
   * Set and get the appuri of the contract
   */


  get appURI() {
    return assertEnabled(this.detectAppURI(), FEATURE_APPURI);
  }
  /**
   * Auto-detects ERC20 standard functions.
   */


  get erc20() {
    return assertEnabled(this.detectErc20(), FEATURE_TOKEN);
  }
  /**
   * Auto-detects ERC721 standard functions.
   */


  get erc721() {
    return assertEnabled(this.detectErc721(), FEATURE_NFT);
  }
  /**
   * Auto-detects ERC1155 standard functions.
   */


  get erc1155() {
    return assertEnabled(this.detectErc1155(), FEATURE_EDITION);
  }

  get chainId() {
    return this._chainId;
  }

  constructor(network, address, abi, storage) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "events", void 0);

    defineProperty._defineProperty(this, "interceptor", void 0);

    defineProperty._defineProperty(this, "encoder", void 0);

    defineProperty._defineProperty(this, "estimator", void 0);

    defineProperty._defineProperty(this, "publishedMetadata", void 0);

    defineProperty._defineProperty(this, "abi", void 0);

    defineProperty._defineProperty(this, "metadata", void 0);

    defineProperty._defineProperty(this, "_chainId", void 0);

    this._chainId = chainId;
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.abi = abi;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.publishedMetadata = new ContractPublishedMetadata(this.contractWrapper, this.storage);
    this.metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
  }

  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /**
   * Call any function on this contract
   * @example
   * ```javascript
   * // read functions will return the data from the contract
   * const myValue = await contract.call("myReadFunction");
   * console.log(myValue);
   *
   * // write functions will return the transaction receipt
   * const tx = await contract.call("myWriteFunction", arg1, arg2);
   * const receipt = tx.receipt;
   *
   * // Optionally override transaction options
   * await contract.call("myWriteFunction", arg1, arg2, {
   *  gasLimit: 1000000, // override default gas limit
   *  value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
   * };
   * ```
   * @param functionName - the name of the function to call
   * @param args - the arguments of the function
   */


  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.contractWrapper.call(functionName, ...args);
  }
  /** ********************
   * FEATURE DETECTION
   * ********************/


  detectRoyalties() {
    if (detectContractFeature(this.contractWrapper, "Royalty")) {
      // ContractMetadata is stateless, it's fine to create a new one here
      // This also makes it not order dependent in the feature detection process
      const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
      return new ContractRoyalty(this.contractWrapper, metadata);
    }

    return undefined;
  }

  detectRoles() {
    if (detectContractFeature(this.contractWrapper, "Permissions")) {
      return new ContractRoles(this.contractWrapper, ALL_ROLES);
    }

    return undefined;
  }

  detectPrimarySales() {
    if (detectContractFeature(this.contractWrapper, "PrimarySale")) {
      return new ContractPrimarySale(this.contractWrapper);
    }

    return undefined;
  }

  detectPlatformFees() {
    if (detectContractFeature(this.contractWrapper, "PlatformFee")) {
      return new ContractPlatformFee(this.contractWrapper);
    }

    return undefined;
  }

  detectErc20() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20(this.contractWrapper, this.storage, this.chainId);
    }

    return undefined;
  }

  detectErc721() {
    if (detectContractFeature(this.contractWrapper, "ERC721")) {
      return new Erc721(this.contractWrapper, this.storage, this.chainId);
    }

    return undefined;
  }

  detectErc1155() {
    if (detectContractFeature(this.contractWrapper, "ERC1155")) {
      return new Erc1155(this.contractWrapper, this.storage, this.chainId);
    }

    return undefined;
  }

  detectAppURI() {
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return new ContractAppURI(this.contractWrapper);
    }

    return undefined;
  }

  detectOwnable() {
    if (detectContractFeature(this.contractWrapper, "Ownable")) {
      return new ContractOwner(this.contractWrapper);
    }

    return undefined;
  }

}

/**
 * Handles publishing contracts (EXPERIMENTAL)
 * @internal
 */

class ContractPublisher extends RPCConnectionHandler {
  constructor(network, options, storage) {
    super(network, options);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "publisher", void 0);

    this.storage = storage;
    this.publisher = new ContractWrapper(network, getContractPublisherAddress(), ContractPublisherAbi__default["default"], options);
  }

  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.publisher.updateSignerOrProvider(network);
  }
  /**
   * @internal
   * @param metadataUri
   */


  async extractConstructorParams(metadataUri) {
    return extractConstructorParams(metadataUri, this.storage);
  }
  /**
   * @internal
   * @param predeployMetadataUri
   */


  async extractFunctions(predeployMetadataUri) {
    return extractFunctions(predeployMetadataUri, this.storage);
  }
  /**
   * @internal
   * @param predeployUri
   */


  async fetchCompilerMetadataFromPredeployURI(predeployUri) {
    return fetchPreDeployMetadata(predeployUri, this.storage);
  }
  /**
   * @internal
   * @param prepublishUri
   * @param publisherAddress
   */


  async fetchPrePublishMetadata(prepublishUri, publisherAddress) {
    const preDeployMetadataFetched = await fetchPreDeployMetadata(prepublishUri, this.storage);
    const latestPublishedContract = publisherAddress ? await this.getLatest(publisherAddress, preDeployMetadataFetched.name) : undefined;
    const latestPublishedContractMetadata = latestPublishedContract ? await this.fetchPublishedContractInfo(latestPublishedContract) : undefined;
    return {
      preDeployMetadata: preDeployMetadataFetched,
      latestPublishedContractMetadata
    };
  }
  /**
   * @internal
   * @param address
   */


  async fetchCompilerMetadataFromAddress(address) {
    return fetchContractMetadataFromAddress(address, this.getProvider(), this.storage);
  }
  /**
   * @internal
   * Get the full information about a published contract
   * @param contract
   */


  async fetchPublishedContractInfo(contract) {
    return {
      name: contract.id,
      publishedTimestamp: contract.timestamp,
      publishedMetadata: await this.fetchFullPublishMetadata(contract.metadataUri)
    };
  }
  /**
   * @internal
   * @param publishedMetadataUri
   */


  async fetchFullPublishMetadata(publishedMetadataUri) {
    return fetchExtendedReleaseMetadata(publishedMetadataUri, this.storage);
  }
  /**
   * @internal
   * // TODO expose a resolvePublishMetadata(contractAddress, chainId) that handles the dual chain case
   * // TODO will be easy to do with the multichain pattern of 3.0
   * @param compilerMetadataUri
   */


  async resolvePublishMetadataFromCompilerMetadata(compilerMetadataUri) {
    const publishedMetadataUri = await this.publisher.readContract.getPublishedUriFromCompilerUri(compilerMetadataUri);

    if (publishedMetadataUri.length === 0) {
      throw Error(`Could not resolve published metadata URI from ${compilerMetadataUri}`);
    }

    return await Promise.all(publishedMetadataUri.filter(uri => uri.length > 0).map(uri => this.fetchFullPublishMetadata(uri)));
  }
  /**
   * @internal
   * TODO clean this up (see method above, too)
   */


  async resolveReleasesFromAddress(address) {
    const contractUri = await resolveContractUriFromAddress(address, this.getProvider());
    invariant__default["default"](contractUri, "Could not resolve contract URI from address");
    return await this.resolvePublishMetadataFromCompilerMetadata(contractUri);
  }
  /**
   * @internal
   * @param address
   */


  async fetchContractSourcesFromAddress(address) {
    const metadata = await this.fetchCompilerMetadataFromAddress(address);
    return await fetchSourceFilesFromMetadata(metadata, this.storage);
  }
  /**
   * @internal
   * @param profileMetadata
   */


  async updatePublisherProfile(profileMetadata) {
    const signer = this.getSigner();
    invariant__default["default"](signer, "A signer is required");
    const publisher = await signer.getAddress();
    const profileUri = await this.storage.upload(profileMetadata);
    return {
      receipt: await this.publisher.sendTransaction("setPublisherProfileUri", [publisher, profileUri])
    };
  }
  /**
   * @internal
   * @param publisherAddress
   */


  async getPublisherProfile(publisherAddress) {
    const profileUri = await this.publisher.readContract.getPublisherProfileUri(publisherAddress);

    if (!profileUri || profileUri.length === 0) {
      return {};
    }

    return ProfileSchemaOutput.parse(await this.storage.downloadJSON(profileUri));
  }
  /**
   * @internal
   * @param publisherAddress
   */


  async getAll(publisherAddress) {
    const data = await this.publisher.readContract.getAllPublishedContracts(publisherAddress); // since we can fetch from multiple publisher contracts, just keep the latest one in the list

    const map = data.reduce((acc, curr) => {
      // replaces the previous contract with the latest one
      acc[curr.contractId] = curr;
      return acc;
    }, {});
    return Object.entries(map).map(_ref => {
      let [, struct] = _ref;
      return this.toPublishedContract(struct);
    });
  }
  /**
   * @internal
   * @param publisherAddress
   * @param contractId
   */


  async getAllVersions(publisherAddress, contractId) {
    const contractStructs = await this.publisher.readContract.getPublishedContractVersions(publisherAddress, contractId);

    if (contractStructs.length === 0) {
      throw Error("Not found");
    }

    return contractStructs.map(d => this.toPublishedContract(d));
  }

  async getLatest(publisherAddress, contractId) {
    const model = await this.publisher.readContract.getPublishedContract(publisherAddress, contractId);

    if (model && model.publishMetadataUri) {
      return this.toPublishedContract(model);
    }

    return undefined;
  }

  async publish(predeployUri, extraMetadata) {
    const signer = this.getSigner();
    invariant__default["default"](signer, "A signer is required");
    const publisher = await signer.getAddress();
    const predeployMetadata = await fetchRawPredeployMetadata(predeployUri, this.storage); // ensure version is incremental

    const latestContract = await this.getLatest(publisher, predeployMetadata.name);

    if (latestContract && latestContract.metadataUri) {
      const latestMetadata = await this.fetchPublishedContractInfo(latestContract);
      const latestVersion = latestMetadata.publishedMetadata.version;

      if (!isIncrementalVersion(latestVersion, extraMetadata.version)) {
        throw Error(`Version ${extraMetadata.version} is not greater than ${latestVersion}`);
      }
    }

    const fetchedBytecode = await (await this.storage.download(predeployMetadata.bytecodeUri)).text();
    const bytecode = fetchedBytecode.startsWith("0x") ? fetchedBytecode : `0x${fetchedBytecode}`;
    const bytecodeHash = ethers.utils.solidityKeccak256(["bytes"], [bytecode]);
    const contractId = predeployMetadata.name;
    const fullMetadata = FullPublishMetadataSchemaInput.parse({ ...extraMetadata,
      metadataUri: predeployMetadata.metadataUri,
      bytecodeUri: predeployMetadata.bytecodeUri,
      name: predeployMetadata.name,
      analytics: predeployMetadata.analytics,
      publisher
    });
    const fullMetadataUri = await this.storage.upload(fullMetadata);
    const receipt = await this.publisher.sendTransaction("publishContract", [publisher, contractId, fullMetadataUri, predeployMetadata.metadataUri, bytecodeHash, ethers.constants.AddressZero]);
    const events = this.publisher.parseLogs("ContractPublished", receipt.logs);

    if (events.length < 1) {
      throw new Error("No ContractPublished event found");
    }

    const contract = events[0].args.publishedContract;
    return {
      receipt,
      data: async () => this.toPublishedContract(contract)
    };
  }

  async unpublish(publisher, contractId) {
    return {
      receipt: await this.publisher.sendTransaction("unpublishContract", [publisher, contractId])
    };
  }

  toPublishedContract(contractModel) {
    return PublishedContractSchema.parse({
      id: contractModel.contractId,
      timestamp: contractModel.publishTimestamp,
      metadataUri: contractModel.publishMetadataUri
    });
  }

}

/**
 *
 * {@link UserWallet} events that you can subscribe to using `sdk.wallet.events`.
 *
 * @public
 */

/**
 * Connect and Interact with a user wallet
 * @example
 * ```javascript
 * const balance = await sdk.wallet.balance();
 * ```
 * @public
 */
class UserWallet {
  constructor(network, options) {
    defineProperty._defineProperty(this, "connection", void 0);

    defineProperty._defineProperty(this, "options", void 0);

    defineProperty._defineProperty(this, "events", new EventEmitter__default["default"]());

    this.connection = new RPCConnectionHandler(network, options);
    this.options = options;
    this.events = new EventEmitter__default["default"]();
  } // TODO disconnect()
  // TODO switchChain()
  // TODO tokens()
  // TODO NFTs()
  // TODO this will become the source of truth of the signer and have every contract read from it
  // TODO separate signer and provider logics


  connect(network) {
    this.connection.updateSignerOrProvider(network);
    this.events.emit("signerChanged", this.connection.getSigner());
  }
  /**
   * Transfer native or ERC20 tokens from this wallet to another wallet
   * @example
   * ```javascript
   *  // transfer 0.8 ETH
   * await sdk.wallet.transfer("0x...", 0.8);
   *  // transfer 0.8 tokens of `tokenContractAddress`
   * await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
   * ```
   * @param to - the account to send funds to
   * @param amount - the amount in tokens
   * @param currencyAddress - Optional - ERC20 contract address of the token to transfer
   */


  async transfer(to, amount) {
    let currencyAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NATIVE_TOKEN_ADDRESS;
    const signer = this.requireWallet();
    const amountInWei = await normalizePriceValue(this.connection.getProvider(), amount, currencyAddress);

    if (isNativeToken(currencyAddress)) {
      // native token transfer
      const from = await signer.getAddress();
      const tx = await signer.sendTransaction({
        from,
        to,
        value: amountInWei
      });
      return {
        receipt: await tx.wait()
      };
    } else {
      // ERC20 token transfer
      return {
        receipt: await this.createErc20(currencyAddress).sendTransaction("transfer", [to, amountInWei])
      };
    }
  }
  /**
   * Fetch the native or ERC20 token balance of this wallet
   * @example
   * ```javascript
   * // native currency balance
   * const balance = await sdk.wallet.balance();
   * // ERC20 token balance
   * const erc20balance = await sdk.wallet.balance(tokenContractAddress);
   *
   * ```
   */


  async balance() {
    let currencyAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NATIVE_TOKEN_ADDRESS;
    this.requireWallet();
    const provider = this.connection.getProvider();
    let balance;

    if (isNativeToken(currencyAddress)) {
      balance = await provider.getBalance(await this.getAddress());
    } else {
      balance = await this.createErc20(currencyAddress).readContract.balanceOf(await this.getAddress());
    }

    return await fetchCurrencyValue(provider, currencyAddress, balance);
  }
  /**
   * Get the currently connected address
   * @example
   * ```javascript
   * const address = await sdk.wallet.getAddress();
   * ```
   */


  async getAddress() {
    return await this.requireWallet().getAddress();
  }
  /**
   * Sign any message with the connected wallet private key
   * @param message - the message to sign
   * @returns the signed message
   *
   * @example
   * ```javascript
   * // This is the message to be signed
   * const message = "Sign this message...";
   *
   * // Now we can sign the message with the connected wallet
   * const signature = await sdk.wallet.sign(message);
   * ```
   */


  async sign(message) {
    const signer = this.requireWallet();
    return await signer.signMessage(message);
  }
  /**
   * Recover the signing address from a signed message
   * @param message - the original message that was signed
   * @param signature - the signature to recover the address from
   * @returns the address that signed the message
   *
   * @example
   * ```javascript
   * const message = "Sign this message...";
   * const signature = await sdk.wallet.sign(message);
   *
   * // Now we can recover the signing address
   * const address = sdk.wallet.recoverAddress(message, signature);
   * ```
   */


  recoverAddress(message, signature) {
    const messageHash = ethers.ethers.utils.hashMessage(message);
    const messageHashBytes = ethers.ethers.utils.arrayify(messageHash);
    return ethers.ethers.utils.recoverAddress(messageHashBytes, signature);
  }
  /**
   * Send a raw transaction to the blockchain from the connected wallet
   * @param transactionRequest - raw transaction data to send to the blockchain
   */


  async sendRawTransaction(transactionRequest) {
    const signer = this.requireWallet();
    const tx = await signer.sendTransaction(transactionRequest);
    return {
      receipt: await tx.wait()
    };
  }
  /** ***********************
   * PRIVATE FUNCTIONS
   * ***********************/


  requireWallet() {
    const signer = this.connection.getSigner();
    invariant__default["default"](signer, "This action requires a connected wallet. Please pass a valid signer to the SDK.");
    return signer;
  }

  createErc20(currencyAddress) {
    return new ContractWrapper(this.connection.getSignerOrProvider(), currencyAddress, ERC20Abi__default["default"], this.options);
  }

}

/**
 * The main entry point for the thirdweb SDK
 * @public
 */

class ThirdwebSDK extends RPCConnectionHandler {
  /**
   * Get an instance of the thirdweb SDK based on an existing ethers signer
   *
   * @example
   * ```javascript
   * // get a signer from somewhere (createRandom is being used purely for example purposes)
   * const signer = ethers.Wallet.createRandom();
   *
   * // get an instance of the SDK with the signer already setup
   * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
   * ```
   *
   * @param signer - a ethers Signer to be used for transactions
   * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
   * @param options - the SDK options to use
   * @returns an instance of the SDK
   * @param storage - optional storage implementation to use
   *
   * @beta
   */
  static fromSigner(signer, network) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let storage$1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new storage.ThirdwebStorage();
    const sdk = new ThirdwebSDK(network || signer, options, storage$1);
    sdk.updateSignerOrProvider(signer);
    return sdk;
  }
  /**
   * Get an instance of the thirdweb SDK based on a private key.
   *
   * @remarks
   * This should only be used for backend services or scripts, with the private key stored in a secure way.
   * **NEVER** expose your private key to the public in any way.
   *
   * @example
   * ```javascript
   * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
   * ```
   *
   * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
   * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
   * @param options - the SDK options to use
   * @param storage - optional storage implementation to use
   * @returns an instance of the SDK
   *
   * @beta
   */


  static fromPrivateKey(privateKey, network) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let storage$1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new storage.ThirdwebStorage();
    const signerOrProvider = getProviderForNetwork(network);
    const provider = ethers.Signer.isSigner(signerOrProvider) ? signerOrProvider.provider : typeof signerOrProvider === "string" ? getReadOnlyProvider(signerOrProvider) : signerOrProvider;
    const signer = new ethers.ethers.Wallet(privateKey, provider);
    return ThirdwebSDK.fromSigner(signer, network, options, storage$1);
  }
  /**
   * @internal
   * the cache of contracts that we have already seen
   */


  constructor(network) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let storage$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new storage.ThirdwebStorage();
    const signerOrProvider = getProviderForNetwork(network);
    super(signerOrProvider, options);

    defineProperty._defineProperty(this, "contractCache", new Map());

    defineProperty._defineProperty(this, "_publisher", void 0);

    defineProperty._defineProperty(this, "storageHandler", void 0);

    defineProperty._defineProperty(this, "deployer", void 0);

    defineProperty._defineProperty(this, "wallet", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    defineProperty._defineProperty(this, "auth", void 0);

    this.storageHandler = storage$1;
    this.storage = storage$1;
    this.wallet = new UserWallet(signerOrProvider, options);
    this.deployer = new ContractDeployer(signerOrProvider, options, storage$1);
    this.auth = new WalletAuthenticator(signerOrProvider, this.wallet, options);
    this._publisher = new ContractPublisher(signerOrProvider, this.options, this.storageHandler);
  }
  /**
   * Get an instance of a NFT Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const dropContract = await sdk.getDropContract("0x1234...");
   * + const dropContract = await sdk.getContract("0x1234...", "nft-drop");
   * ```
   */


  async getNFTDrop(contractAddress) {
    return await this.getContract(contractAddress, "nft-drop");
  }
  /**
   * Get an instance of a Signature Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const signatureDrop = await sdk.getSignatureDrop("0x1234...");
   * + const signatureDrop = await sdk.getContract("0x1234...", "signature-drop");
   * ```
   */


  async getSignatureDrop(contractAddress) {
    return await this.getContract(contractAddress, "signature-drop");
  }
  /**
   * Get an instance of a NFT Collection Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const signatureDrop = await sdk.getNFTCollection("0x1234...");
   * + const signatureDrop = await sdk.getContract("0x1234...", "nft-collection");
   * ```
   */


  async getNFTCollection(contractAddress) {
    return await this.getContract(contractAddress, "nft-collection");
  }
  /**
   * Get an instance of a Edition Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const editionDrop = await sdk.getEditionDrop("0x1234...");
   * + const editionDrop = await sdk.getContract("0x1234...", "edition-drop");
   * ```
   */


  async getEditionDrop(contractAddress) {
    return await this.getContract(contractAddress, "edition-drop");
  }
  /**
   * Get an instance of a Edition contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const edition = await sdk.getEdition("0x1234...");
   * + const edition = await sdk.getContract("0x1234...", "edition");
   * ```
   */


  async getEdition(contractAddress) {
    return await this.getContract(contractAddress, "edition");
  }
  /**
   * Get an instance of a Token Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const tokenDrop = await sdk.getTokenDrop("0x1234...");
   * + const tokenDrop = await sdk.getContract("0x1234...", "token-drop");
   * ```
   */


  async getTokenDrop(contractAddress) {
    return await this.getContract(contractAddress, "token-drop");
  }
  /**
   * Get an instance of a Token contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const token = await sdk.getToken("0x1234...");
   * + const token = await sdk.getContract("0x1234...", "token");
   * ```
   */


  async getToken(contractAddress) {
    return await this.getContract(contractAddress, "token");
  }
  /**
   * Get an instance of a Vote contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const vote = await sdk.getVote("0x1234...");
   * + const vote = await sdk.getContract("0x1234...", "vote");
   * ```
   */


  async getVote(contractAddress) {
    return await this.getContract(contractAddress, "vote");
  }
  /**
   * Get an instance of a Split contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const split = await sdk.getSplit("0x1234...");
   * + const split = await sdk.getContract("0x1234...", "split");
   * ```
   */


  async getSplit(contractAddress) {
    return await this.getContract(contractAddress, "split");
  }
  /**
   * Get an instance of a Marketplace contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const marketplace = await sdk.getMarketplace("0x1234...");
   * + const marketplace = await sdk.getContract("0x1234...", "marketplace");
   * ```
   */


  async getMarketplace(contractAddress) {
    return await this.getContract(contractAddress, "marketplace");
  }
  /**
   * Get an instance of a Pack contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const pack = await sdk.getPack("0x1234...");
   * + const pack = await sdk.getContract("0x1234...", "pack");
   * ```
   */


  async getPack(contractAddress) {
    return await this.getContract(contractAddress, "pack");
  }
  /**
   * Get an instance of a Pack contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const multiWrap = await sdk.getMultiwrap("0x1234...");
   * + const multiWrap = await sdk.getContract("0x1234...", "multiwrap");
   * ```
   */


  async getMultiwrap(contractAddress) {
    return await this.getContract(contractAddress, "multiwrap");
  }
  /**
   * Get an instance of a Custom ThirdwebContract
   * @param address - the address of the deployed contract
   * @returns the contract
   * @public
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}");
   * ```
   */


  async getContract(address, contractTypeOrABI) {
    // if we have a contract in the cache we will return it
    // we will do this **without** checking any contract type things for simplicity, this may have to change in the future?
    if (this.contractCache.has(address)) {
      // we know this will be there since we check the has above
      return this.contractCache.get(address);
    }

    let newContract; // if we don't have a contractType or ABI then we will have to resolve it regardless
    // we also handle it being "custom" just in case...

    if (!contractTypeOrABI || contractTypeOrABI === "custom") {
      const resolvedContractType = await this.resolveContractType(address);

      if (resolvedContractType === "custom") {
        // if it's a custom contract we gotta fetch the compilet metadata
        try {
          const publisher = this.getPublisher();
          const metadata = await publisher.fetchCompilerMetadataFromAddress(address);
          newContract = await this.getContractFromAbi(address, metadata.abi);
        } catch (e) {
          throw new Error(`Error fetching ABI for this contract\n\n${e}`);
        }
      } else {
        // otherwise if it's a prebuilt contract we can just use the contract type
        const contractAbi = await PREBUILT_CONTRACTS_MAP[resolvedContractType].getAbi();
        newContract = await this.getContractFromAbi(address, contractAbi);
      }
    } // if it's a builtin contract type we can just use the contract type to initialize the contract instance
    else if (typeof contractTypeOrABI === "string" && contractTypeOrABI in PREBUILT_CONTRACTS_MAP) {
      newContract = await PREBUILT_CONTRACTS_MAP[contractTypeOrABI].initialize(this.getSignerOrProvider(), address, this.storage, this.options);
    } // otherwise it has to be an ABI
    else {
      newContract = await this.getContractFromAbi(address, contractTypeOrABI);
    } // set whatever we have on the cache


    this.contractCache.set(address, newContract); // return it

    return newContract;
  }
  /**
   * @internal
   * @deprecated use {@link getContract} directly instead
   */


  async getBuiltInContract(address, contractType) {
    return await this.getContract(address, contractType);
  }
  /**
   * @param contractAddress - the address of the contract to attempt to resolve the contract type for
   * @returns the {@link ContractType} for the given contract address
   *
   */


  async resolveContractType(contractAddress) {
    try {
      const contract = new ethers.Contract(contractAddress, IThirdwebContractABI__default["default"], // !provider only! - signer can break things here!
      this.getProvider());
      const remoteContractType = ethers.ethers.utils.toUtf8String(await contract.contractType()) // eslint-disable-next-line no-control-regex
      .replace(/\x00/g, "");
      return getContractTypeForRemoteName(remoteContractType);
    } catch (err) {
      return "custom";
    }
  }
  /**
   * Return all the contracts deployed by the specified address
   * @param walletAddress - the deployed address
   * @example
   * ```javascript
   * const contracts = sdk.getContractList("{{wallet_address}}");
   * ```
   */


  async getContractList(walletAddress) {
    var _await$this$deployer$;

    const addresses = (await ((_await$this$deployer$ = await this.deployer.getRegistry()) === null || _await$this$deployer$ === void 0 ? void 0 : _await$this$deployer$.getContractAddresses(walletAddress))) || [];
    const addressesWithContractTypes = await Promise.all(addresses.map(async address => {
      let contractType = "custom";

      try {
        contractType = await this.resolveContractType(address);
      } catch (e) {// this going to happen frequently and be OK, we'll just catch it and ignore it
      }

      let metadata;

      if (contractType === "custom") {
        try {
          metadata = (await this.getContract(address)).metadata;
        } catch (e) {
          console.warn(`Couldn't get contract metadata for custom contract: ${address}`);
        }
      } else {
        metadata = (await this.getContract(address, contractType)).metadata;
      }

      return {
        address,
        contractType,
        metadata
      };
    }));
    return addressesWithContractTypes.filter(e => e.metadata).map(_ref => {
      let {
        address,
        contractType,
        metadata
      } = _ref;
      invariant__default["default"](metadata, "All ThirdwebContracts require metadata");
      return {
        address,
        contractType,
        metadata: () => metadata.get()
      };
    });
  }
  /**
   * Update the active signer or provider for all contracts
   * @param network - the new signer or provider
   */


  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.updateContractSignerOrProvider();
  }

  updateContractSignerOrProvider() {
    this.wallet.connect(this.getSignerOrProvider());
    this.auth.updateSignerOrProvider(this.getSignerOrProvider());
    this.deployer.updateSignerOrProvider(this.getSignerOrProvider());

    this._publisher.updateSignerOrProvider(this.getSignerOrProvider());

    for (const [, contract] of this.contractCache) {
      contract.onNetworkUpdated(this.getSignerOrProvider());
    }
  }
  /**
   * Get an instance of a Custom contract from a json ABI
   * @param address - the address of the deployed contract
   * @param abi - the JSON abi
   * @returns the contract
   * @beta
   * @example
   * ```javascript
   * // Import your ABI from a JSON file
   * import myABI from "./path/to/myABI.json";
   *
   * const contract = sdk.getContractFromAbi(
   *   "{{contract_address}}",
   *   // Pass in the "abi" field from the JSON file
   *   myABI.abi
   * );
   * ```
   */


  async getContractFromAbi(address, abi) {
    if (this.contractCache.has(address)) {
      return this.contractCache.get(address);
    }

    const [, provider] = getSignerAndProvider(this.getSignerOrProvider(), this.options); // TODO we still might want to lazy-fy this

    const contract = new SmartContract(this.getSignerOrProvider(), address, abi, this.storageHandler, this.options, (await provider.getNetwork()).chainId);
    this.contractCache.set(address, contract);
    return contract;
  }
  /**
   * Get the native balance of a given address (wallet or contract)
   * @example
   * ```javascript
   * const balance = await sdk.getBalance("0x...");
   * console.log(balance.displayValue);
   * ```
   * @param address - the address to check the balance for
   */


  async getBalance(address) {
    return fetchCurrencyValue(this.getProvider(), NATIVE_TOKEN_ADDRESS, await this.getProvider().getBalance(address));
  }
  /**
   * @internal
   */


  getPublisher() {
    return this._publisher;
  }

}

/**
 * @internal
 */
class ContractFactory extends ContractWrapper {
  constructor(factoryAddr, network, storage, options) {
    super(network, factoryAddr, TWFactoryAbi__default["default"], options);

    defineProperty._defineProperty(this, "storage", void 0);

    this.storage = storage;
  }

  async deploy(contractType, contractMetadata) {
    const contract = PREBUILT_CONTRACTS_MAP[contractType];
    const metadata = contract.schema.deploy.parse(contractMetadata); // TODO: is there any special pre-processing we need to do before uploading?

    const contractURI = await this.storage.upload(metadata);
    const ABI = await contract.getAbi();
    const encodedFunc = ethers.Contract.getInterface(ABI).encodeFunctionData("initialize", await this.getDeployArguments(contractType, metadata, contractURI));
    const encodedType = ethers.ethers.utils.formatBytes32String(contract.name);
    let receipt;

    try {
      receipt = await this.sendTransaction("deployProxy", [encodedType, encodedFunc]);
    } catch (e) {
      // if the error is caused by user cancelling the transaction, just re-throw it
      if (e.message.toLowerCase().includes("user rejected transaction") || e.reason.toLowerCase().includes("user rejected transaction")) {
        throw e;
      } // deploy might fail due to salt already used, fallback to deterministic deploy


      const blockNumber = await this.getProvider().getBlockNumber();
      receipt = await this.sendTransaction("deployProxyDeterministic", [encodedType, encodedFunc, ethers.ethers.utils.formatBytes32String(blockNumber.toString())]);
    }

    const events = this.parseLogs("ProxyDeployed", receipt.logs);

    if (events.length < 1) {
      throw new Error("No ProxyDeployed event found");
    }

    return events[0].args.proxy;
  } // TODO once IContractFactory is implemented, this can be probably be moved to its own class


  async deployProxyByImplementation(implementationAddress, implementationAbi, initializerFunction, initializerArgs) {
    const encodedFunc = ethers.Contract.getInterface(implementationAbi).encodeFunctionData(initializerFunction, initializerArgs);
    const blockNumber = await this.getProvider().getBlockNumber();
    const receipt = await this.sendTransaction("deployProxyByImplementation", [implementationAddress, encodedFunc, ethers.ethers.utils.formatBytes32String(blockNumber.toString())]);
    const events = this.parseLogs("ProxyDeployed", receipt.logs);

    if (events.length < 1) {
      throw new Error("No ProxyDeployed event found");
    }

    return events[0].args.proxy;
  }

  async getDeployArguments(contractType, metadata, contractURI) {
    let trustedForwarders = contractType === PackInitializer.contractType ? [] : await this.getDefaultTrustedForwarders(); // override default forwarders if custom ones are passed in

    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders = metadata.trusted_forwarders;
    }

    switch (contractType) {
      case NFTDropInitializer.contractType:
      case NFTCollectionInitializer.contractType:
        const erc721metadata = NFTDropInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), erc721metadata.name, erc721metadata.symbol, contractURI, trustedForwarders, erc721metadata.primary_sale_recipient, erc721metadata.fee_recipient, erc721metadata.seller_fee_basis_points, erc721metadata.platform_fee_basis_points, erc721metadata.platform_fee_recipient];

      case SignatureDropInitializer.contractType:
        const signatureDropmetadata = SignatureDropInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), signatureDropmetadata.name, signatureDropmetadata.symbol, contractURI, trustedForwarders, signatureDropmetadata.primary_sale_recipient, signatureDropmetadata.fee_recipient, signatureDropmetadata.seller_fee_basis_points, signatureDropmetadata.platform_fee_basis_points, signatureDropmetadata.platform_fee_recipient];

      case MultiwrapInitializer.contractType:
        const multiwrapMetadata = MultiwrapInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), multiwrapMetadata.name, multiwrapMetadata.symbol, contractURI, trustedForwarders, multiwrapMetadata.fee_recipient, multiwrapMetadata.seller_fee_basis_points];

      case EditionDropInitializer.contractType:
      case EditionInitializer.contractType:
        const erc1155metadata = EditionDropInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), erc1155metadata.name, erc1155metadata.symbol, contractURI, trustedForwarders, erc1155metadata.primary_sale_recipient, erc1155metadata.fee_recipient, erc1155metadata.seller_fee_basis_points, erc1155metadata.platform_fee_basis_points, erc1155metadata.platform_fee_recipient];

      case TokenDropInitializer.contractType:
      case TokenInitializer.contractType:
        const erc20metadata = TokenInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), erc20metadata.name, erc20metadata.symbol, contractURI, trustedForwarders, erc20metadata.primary_sale_recipient, erc20metadata.platform_fee_recipient, erc20metadata.platform_fee_basis_points];

      case VoteInitializer.contractType:
        const voteMetadata = VoteInitializer.schema.deploy.parse(metadata);
        return [voteMetadata.name, contractURI, trustedForwarders, voteMetadata.voting_token_address, voteMetadata.voting_delay_in_blocks, voteMetadata.voting_period_in_blocks, ethers.BigNumber.from(voteMetadata.proposal_token_threshold), voteMetadata.voting_quorum_fraction];

      case SplitInitializer.contractType:
        const splitsMetadata = SplitInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), contractURI, trustedForwarders, splitsMetadata.recipients.map(s => s.address), splitsMetadata.recipients.map(s => ethers.BigNumber.from(s.sharesBps))];

      case MarketplaceInitializer.contractType:
        const marketplaceMetadata = MarketplaceInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), contractURI, trustedForwarders, marketplaceMetadata.platform_fee_recipient, marketplaceMetadata.platform_fee_basis_points];

      case PackInitializer.contractType:
        const packsMetadata = PackInitializer.schema.deploy.parse(metadata);
        return [await this.getSignerAddress(), packsMetadata.name, packsMetadata.symbol, contractURI, trustedForwarders, packsMetadata.fee_recipient, packsMetadata.seller_fee_basis_points];

      default:
        return [];
    }
  }

  async getDefaultTrustedForwarders() {
    const chainId = await this.getChainID();
    const chainEnum = SUPPORTED_CHAIN_IDS.find(c => c === chainId);
    const biconomyForwarder = chainEnum ? CONTRACT_ADDRESSES[chainEnum].biconomyForwarder : ethers.constants.AddressZero;
    const openzeppelinForwarder = chainEnum ? CONTRACT_ADDRESSES[chainEnum].openzeppelinForwarder : ethers.constants.AddressZero;
    return biconomyForwarder !== ethers.constants.AddressZero ? [openzeppelinForwarder, biconomyForwarder] : [openzeppelinForwarder];
  }

}

/**
 * @internal
 */

class ContractRegistry extends ContractWrapper {
  constructor(registryAddress, network, options) {
    super(network, registryAddress, TWRegistryABI__default["default"], options);
  }

  async getContractAddresses(walletAddress) {
    // TODO @fixme the filter here is necessary because for some reason getAll returns a 0x0 address for the first entry
    return (await this.readContract.getAll(walletAddress)).filter(adr => ethers.utils.isAddress(adr) && adr.toLowerCase() !== ethers.constants.AddressZero);
  }

  async addContract(contractAddress) {
    return await this.addContracts([contractAddress]);
  }

  async addContracts(contractAddresses) {
    const deployerAddress = await this.getSignerAddress();
    const encoded = [];
    contractAddresses.forEach(address => {
      encoded.push(this.readContract.interface.encodeFunctionData("add", [deployerAddress, address]));
    });
    return {
      receipt: await this.multiCall(encoded)
    };
  }

  async removeContract(contractAddress) {
    return await this.removeContracts([contractAddress]);
  }

  async removeContracts(contractAddresses) {
    const deployerAddress = await this.getSignerAddress();
    const encoded = [];
    contractAddresses.forEach(address => {
      encoded.push(this.readContract.interface.encodeFunctionData("remove", [deployerAddress, address]));
    });
    return {
      receipt: await this.multiCall(encoded)
    };
  }

}

/**
 * Handles deploying new contracts
 * @public
 */
class ContractDeployer extends RPCConnectionHandler {
  /**
   * @internal
   * should never be accessed directly, use {@link ContractDeployer.getFactory} instead
   */

  /**
   * @internal
   * should never be accessed directly, use {@link ContractDeployer.getRegistry} instead
   */
  constructor(network, options, storage) {
    super(network, options);

    defineProperty._defineProperty(this, "_factory", void 0);

    defineProperty._defineProperty(this, "_registry", void 0);

    defineProperty._defineProperty(this, "storage", void 0);

    this.storage = storage;
  }
  /**
   * Deploys an NFT Collection contract
   *
   * @remarks Deploys an NFT Collection contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployNFTCollection({
   *   name: "My Collection",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployNFTCollection(metadata) {
    return await this.deployBuiltInContract(NFTCollectionInitializer.contractType, metadata);
  }
  /**
   * Deploys a new NFTDrop contract
   *
   * @remarks Deploys an NFT Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployNFTDrop({
   *   name: "My Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployNFTDrop(metadata) {
    return await this.deployBuiltInContract(NFTDropInitializer.contractType, metadata);
  }
  /**
   * Deploys a new SignatureDrop contract
   *
   * @remarks Deploys a SignatureDrop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deploySignatureDrop({
   *   name: "My Signature Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deploySignatureDrop(metadata) {
    return await this.deployBuiltInContract(SignatureDropInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Multiwrap contract
   *
   * @remarks Deploys a Multiwrap contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployMultiwrap({
   *   name: "My Multiwrap",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   * @beta
   */


  async deployMultiwrap(metadata) {
    return await this.deployBuiltInContract(MultiwrapInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Edition contract
   *
   * @remarks Deploys an Edition contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployEdition({
   *   name: "My Edition",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployEdition(metadata) {
    return await this.deployBuiltInContract(EditionInitializer.contractType, metadata);
  }
  /**
   * Deploys a new EditionDrop contract
   *
   * @remarks Deploys an Edition Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployEditionDrop({
   *   name: "My Edition Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployEditionDrop(metadata) {
    return await this.deployBuiltInContract(EditionDropInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Token contract
   *
   * @remarks Deploys a Token contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployToken({
   *   name: "My Token",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployToken(metadata) {
    return await this.deployBuiltInContract(TokenInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Token Drop contract
   *
   * @remarks Deploys a Token Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployTokenDrop({
   *   name: "My Token Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployTokenDrop(metadata) {
    return await this.deployBuiltInContract(TokenDropInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Marketplace contract
   *
   * @remarks Deploys a Marketplace contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployMarketplace({
   *   name: "My Marketplace",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployMarketplace(metadata) {
    return await this.deployBuiltInContract(MarketplaceInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Pack contract
   *
   * @remarks Deploys a Pack contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployPack({
   *   name: "My Pack",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployPack(metadata) {
    return await this.deployBuiltInContract(PackInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Split contract
   *
   * @remarks Deploys a Split contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deploySplit({
   *   name: "My Split",
   *   primary_sale_recipient: "your-address",
   *   recipients: [
   *    {
   *      address: "your-address",
   *      sharesBps: 80 * 100, // 80%
   *    },
   *    {
   *      address: "another-address",
   *      sharesBps: 20 * 100, // 20%
   *    },
   *   ],
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deploySplit(metadata) {
    return await this.deployBuiltInContract(SplitInitializer.contractType, metadata);
  }
  /**
   * Deploys a new Vote contract
   *
   * @remarks Deploys an Vote contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployVote({
   *   name: "My Vote",
   *   primary_sale_recipient: "your-address",
   *   voting_token_address: "your-token-contract-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */


  async deployVote(metadata) {
    return await this.deployBuiltInContract(VoteInitializer.contractType, metadata);
  }
  /**
   * Deploys a new contract
   *
   * @internal
   * @param contractType - the type of contract to deploy
   * @param contractMetadata - the metadata to deploy the contract with
   * @returns a promise of the address of the newly deployed contract
   */


  async deployBuiltInContract(contractType, contractMetadata) {
    const parsed = PREBUILT_CONTRACTS_MAP[contractType].schema.deploy.parse(contractMetadata);
    const factory = await this.getFactory();
    return await factory.deploy(contractType, parsed);
  }
  /**
   * Deploy any released contract by its name
   * @param releaserAddress the address of the releaser
   * @param contractName the name of the contract to deploy
   * @param constructorParams the constructor params to pass to the contract
   */


  async deployReleasedContract(releaserAddress, contractName, constructorParams) {
    const release = await new ThirdwebSDK("polygon").getPublisher().getLatest(releaserAddress, contractName);

    if (!release) {
      throw new Error(`No release found for '${contractName}' by ${releaserAddress}`);
    }

    return await this.deployContractFromUri(release.metadataUri, constructorParams);
  }
  /**
   * Deploy a proxy contract of a given implementation via the given factory
   * @param factoryAddress
   * @param implementationAddress
   * @param implementationAbi
   * @param initializerFunction
   * @param initializerArgs
   */


  async deployViaFactory(factoryAddress, implementationAddress, implementationAbi, initializerFunction, initializerArgs) {
    const signer = this.getSigner();
    invariant__default["default"](signer, "signer is required"); // TODO only require factory interface here - IProxyFactory

    const proxyFactory = new ContractFactory(factoryAddress, this.getSignerOrProvider(), this.storage, {});
    return await proxyFactory.deployProxyByImplementation(implementationAddress, implementationAbi, initializerFunction, initializerArgs);
  }
  /**
   * Deploy a proxy contract of a given implementation directly
   * @param implementationAddress
   * @param implementationAbi
   * @param initializerFunction
   * @param initializerArgs
   */


  async deployProxy(implementationAddress, implementationAbi, initializerFunction, initializerArgs) {
    const encodedInitializer = ethers.Contract.getInterface(implementationAbi).encodeFunctionData(initializerFunction, initializerArgs);
    const {
      TWProxy__factory
    } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/factories/TWProxy__factory')); });
    return this.deployContractWithAbi(TWProxy__factory.abi, TWProxy__factory.bytecode, [implementationAddress, encodedInitializer]);
  }
  /**
   * @internal
   */


  async getRegistry() {
    // if we already have a registry just return it back
    if (this._registry) {
      return this._registry;
    } // otherwise get the registry address for the active chain and get a new one
    // have to do it like this otherwise we run it over and over and over
    // "this._registry" has to be assigned to the promise upfront.


    return this._registry = this.getProvider().getNetwork().then(async _ref => {
      let {
        chainId
      } = _ref;
      const registryAddress = getContractAddressByChainId(chainId, "twRegistry");
      return new ContractRegistry(registryAddress, this.getSignerOrProvider(), this.options);
    });
  }

  async getFactory() {
    // if we already have a factory just return it back
    if (this._factory) {
      return this._factory;
    } // otherwise get the factory address for the active chain and get a new one
    // have to do it like this otherwise we run it over and over and over
    // "this._factory" has to be assigned to the promise upfront.


    return this._factory = this.getProvider().getNetwork().then(async _ref2 => {
      let {
        chainId
      } = _ref2;
      const factoryAddress = getContractAddressByChainId(chainId, "twFactory");
      return new ContractFactory(factoryAddress, this.getSignerOrProvider(), this.storage, this.options);
    });
  }

  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.updateContractSignerOrProvider();
  }

  updateContractSignerOrProvider() {
    var _this$_factory, _this$_registry;

    // has to be promises now
    (_this$_factory = this._factory) === null || _this$_factory === void 0 ? void 0 : _this$_factory.then(factory => {
      factory.updateSignerOrProvider(this.getSignerOrProvider());
    }).catch(() => {// ignore
    }); // has to be promises now

    (_this$_registry = this._registry) === null || _this$_registry === void 0 ? void 0 : _this$_registry.then(registry => {
      registry.updateSignerOrProvider(this.getSignerOrProvider());
    }).catch(() => {// ignore
    });
  }
  /**
   * @internal
   * @param publishMetadataUri
   * @param constructorParamValues
   * @param options
   */


  async deployContractFromUri(publishMetadataUri, constructorParamValues, options) {
    const signer = this.getSigner();
    invariant__default["default"](signer, "A signer is required");
    const compilerMetadata = await fetchPreDeployMetadata(publishMetadataUri, this.storage);
    let isDeployableViaFactory;
    let isDeployableViaProxy;
    let factoryDeploymentData;

    try {
      const extendedMetadata = await fetchExtendedReleaseMetadata(publishMetadataUri, this.storage);
      isDeployableViaFactory = extendedMetadata.isDeployableViaFactory;
      isDeployableViaProxy = extendedMetadata.isDeployableViaProxy;
      factoryDeploymentData = FactoryDeploymentSchema.parse(extendedMetadata.factoryDeploymentData);
    } catch (e) {// not a factory deployment, ignore
    }

    const forceDirectDeploy = (options === null || options === void 0 ? void 0 : options.forceDirectDeploy) || false;

    if (factoryDeploymentData && (isDeployableViaProxy || isDeployableViaFactory) && !forceDirectDeploy) {
      const chainId = (await this.getProvider().getNetwork()).chainId;
      invariant__default["default"](factoryDeploymentData.implementationAddresses, "implementationAddresses is required");
      const implementationAddress = factoryDeploymentData.implementationAddresses[chainId];
      invariant__default["default"](implementationAddress, `implementationAddress not found for chainId '${chainId}'`);
      invariant__default["default"](factoryDeploymentData.implementationInitializerFunction, `implementationInitializerFunction not set'`);
      const initializerParamTypes = extractFunctionParamsFromAbi(compilerMetadata.abi, factoryDeploymentData.implementationInitializerFunction).map(p => p.type);
      const paramValues = this.convertParamValues(initializerParamTypes, constructorParamValues);

      if (isDeployableViaFactory) {
        // deploy via a factory (prioritise factory)
        invariant__default["default"](factoryDeploymentData.factoryAddresses, "isDeployableViaFactory is true so factoryAddresses is required");
        const factoryAddress = factoryDeploymentData.factoryAddresses[chainId];
        invariant__default["default"](factoryAddress, `isDeployableViaFactory is true and factoryAddress not found for chainId '${chainId}'`);
        return await this.deployViaFactory(factoryAddress, implementationAddress, compilerMetadata.abi, factoryDeploymentData.implementationInitializerFunction, paramValues);
      } else if (isDeployableViaProxy) {
        // deploy a proxy directly
        return await this.deployProxy(implementationAddress, compilerMetadata.abi, factoryDeploymentData.implementationInitializerFunction, paramValues);
      }
    }

    const bytecode = compilerMetadata.bytecode.startsWith("0x") ? compilerMetadata.bytecode : `0x${compilerMetadata.bytecode}`;

    if (!ethers.ethers.utils.isHexString(bytecode)) {
      throw new Error(`Contract bytecode is invalid.\n\n${bytecode}`);
    }

    const constructorParamTypes = extractConstructorParamsFromAbi(compilerMetadata.abi).map(p => p.type);
    const paramValues = this.convertParamValues(constructorParamTypes, constructorParamValues);
    return this.deployContractWithAbi(compilerMetadata.abi, bytecode, paramValues);
  }

  convertParamValues(constructorParamTypes, constructorParamValues) {
    // check that both arrays are same length
    if (constructorParamTypes.length !== constructorParamValues.length) {
      throw Error("Passed the wrong number of constructor arguments");
    }

    return constructorParamTypes.map((p, index) => {
      if (p === "tuple" || p.endsWith("[]")) {
        if (typeof constructorParamValues[index] === "string") {
          return JSON.parse(constructorParamValues[index]);
        } else {
          return constructorParamValues[index];
        }
      }

      if (p === "bytes32") {
        invariant__default["default"](ethers.ethers.utils.isHexString(constructorParamValues[index]), `Could not parse bytes32 value. Expected valid hex string but got "${constructorParamValues[index]}".`);
        return ethers.ethers.utils.hexZeroPad(constructorParamValues[index], 32);
      }

      if (p.startsWith("bytes")) {
        invariant__default["default"](ethers.ethers.utils.isHexString(constructorParamValues[index]), `Could not parse bytes value. Expected valid hex string but got "${constructorParamValues[index]}".`);
        return ethers.ethers.utils.toUtf8Bytes(constructorParamValues[index]);
      }

      if (p.startsWith("uint") || p.startsWith("int")) {
        return ethers.BigNumber.from(constructorParamValues[index].toString());
      }

      return constructorParamValues[index];
    });
  }
  /**
   * @internal
   * @param abi
   * @param bytecode
   * @param constructorParams
   */


  async deployContractWithAbi(abi, bytecode, constructorParams) {
    const signer = this.getSigner();
    invariant__default["default"](signer, "Signer is required to deploy contracts");
    const deployer = await new ethers.ethers.ContractFactory(abi, bytecode).connect(signer).deploy(...constructorParams);
    const deployedContract = await deployer.deployed(); // TODO parse transaction receipt

    return deployedContract.address;
  }

}

/**
 * Encodes and decodes Contract functions
 * @public
 */
class ContractOwner {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "featureName", FEATURE_OWNER.name);

    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }
  /**
   * Return the current owner of the contract
   * @returns the owner address
   */


  async get() {
    return this.contractWrapper.readContract.owner();
  }
  /**
   * Set the new owner of the contract
   * @remarks Can only be called by the current owner.
   *
   * @param address - the address of the new owner
   * 
   * @example
   * ```javascript
   * await contract.owner.set("0x1234567890123456789012345678901234567890");
   * ```
   */


  async set(address) {
    return {
      receipt: await this.contractWrapper.sendTransaction("setOwner", [address])
    };
  }

}

const PAPER_API_BASE = `https://paper.xyz/api`;
const PAPER_API_VERSION = `2022-08-12`;
/**
 * @internal
 */

const PAPER_API_URL = `${PAPER_API_BASE}/${PAPER_API_VERSION}/platform/thirdweb`;
const PAPER_CHAIN_ID_MAP = {
  [exports.ChainId.Mainnet]: "Ethereum",
  [exports.ChainId.Goerli]: "Goerli",
  [exports.ChainId.Polygon]: "Polygon",
  [exports.ChainId.Mumbai]: "Mumbai",
  [exports.ChainId.Avalanche]: "Avalanche"
};
/**
 * @internal
 */

function parseChainIdToPaperChain(chainId) {
  invariant__default["default"](chainId in PAPER_CHAIN_ID_MAP, `chainId not supported by paper: ${chainId}`);
  return PAPER_CHAIN_ID_MAP[chainId];
}

/**
 *
 * @param contractAddress
 * @param chainId
 * @internal
 * @returns the paper xyz contract id
 * @throws if the contract is not registered on paper xyz
 */
async function fetchRegisteredCheckoutId(contractAddress, chainId) {
  const paperChain = parseChainIdToPaperChain(chainId);
  const res = await fetch__default["default"](`${PAPER_API_URL}/register-contract?contractAddress=${contractAddress}&chain=${paperChain}`);
  const json = await res.json();
  invariant__default["default"](json.result.id, "Contract is not registered with paper");
  return json.result.id;
}
/**
 * The parameters for creating a paper.xyz checkout link.
 * @public
 */

const DEFAULT_PARAMS = {
  expiresInMinutes: 15,
  feeBearer: "BUYER",
  sendEmailOnSuccess: true,
  redirectAfterPayment: false
};
/**
 * @internal
 */

async function createCheckoutLinkIntent(contractId, params) {
  const res = await fetch__default["default"](`${PAPER_API_URL}/checkout-link-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contractId,
      ...DEFAULT_PARAMS,
      ...params,
      metadata: { ...params.metadata,
        via_platform: "thirdweb"
      },
      // overrides that are hard coded
      hideNativeMint: true,
      hidePaperWallet: !!params.walletAddress,
      hideExternalWallet: true,
      hidePayWithCrypto: true,
      usePaperKey: false
    })
  });
  const json = await res.json();
  invariant__default["default"](json.checkoutLinkIntentUrl, "Failed to create checkout link intent");
  return json.checkoutLinkIntentUrl;
}
/**
 * @internal
 */

class PaperCheckout {
  constructor(contractWrapper) {
    defineProperty._defineProperty(this, "contractWrapper", void 0);

    this.contractWrapper = contractWrapper;
  }

  async getCheckoutId() {
    return fetchRegisteredCheckoutId(this.contractWrapper.readContract.address, await this.contractWrapper.getChainID());
  }

  async isEnabled() {
    try {
      return !!(await this.getCheckoutId());
    } catch (err) {
      return false;
    }
  }

  async createLinkIntent(params) {
    return await createCheckoutLinkIntent(await this.getCheckoutId(), params);
  }

}

exports.ALL_ROLES = ALL_ROLES;
exports.AbiObjectSchema = AbiObjectSchema;
exports.AbiSchema = AbiSchema;
exports.AbiTypeSchema = AbiTypeSchema;
exports.AddressSchema = AddressSchema;
exports.AdminRoleMissingError = AdminRoleMissingError;
exports.AmountSchema = AmountSchema;
exports.AssetNotFoundError = AssetNotFoundError;
exports.AuctionAlreadyStartedError = AuctionAlreadyStartedError;
exports.AuctionHasNotEndedError = AuctionHasNotEndedError;
exports.AuthenticationOptionsSchema = AuthenticationOptionsSchema;
exports.AuthenticationPayloadDataSchema = AuthenticationPayloadDataSchema;
exports.AuthenticationPayloadSchema = AuthenticationPayloadSchema;
exports.BYOCContractMetadataSchema = BYOCContractMetadataSchema;
exports.BaseSignaturePayloadInput = BaseSignaturePayloadInput;
exports.BigNumberishSchema = BigNumberishSchema;
exports.CONTRACTS_MAP = CONTRACTS_MAP;
exports.CONTRACT_ADDRESSES = CONTRACT_ADDRESSES;
exports.ChainIdToAddressSchema = ChainIdToAddressSchema;
exports.ClaimConditionInputArray = ClaimConditionInputArray;
exports.ClaimConditionInputSchema = ClaimConditionInputSchema;
exports.ClaimConditionOutputSchema = ClaimConditionOutputSchema;
exports.CommonContractOutputSchema = CommonContractOutputSchema;
exports.CommonContractSchema = CommonContractSchema;
exports.CommonPlatformFeeSchema = CommonPlatformFeeSchema;
exports.CommonPrimarySaleSchema = CommonPrimarySaleSchema;
exports.CommonRoyaltySchema = CommonRoyaltySchema;
exports.CommonSymbolSchema = CommonSymbolSchema;
exports.CommonTrustedForwarderSchema = CommonTrustedForwarderSchema;
exports.CompilerMetadataFetchedSchema = CompilerMetadataFetchedSchema;
exports.ContractDeployer = ContractDeployer;
exports.ContractEncoder = ContractEncoder;
exports.ContractEvents = ContractEvents;
exports.ContractInfoSchema = ContractInfoSchema;
exports.ContractInterceptor = ContractInterceptor;
exports.ContractMetadata = ContractMetadata;
exports.ContractOwner = ContractOwner;
exports.ContractPlatformFee = ContractPlatformFee;
exports.ContractPrimarySale = ContractPrimarySale;
exports.ContractPublishedMetadata = ContractPublishedMetadata;
exports.ContractRoles = ContractRoles;
exports.ContractRoyalty = ContractRoyalty;
exports.ContractWrapper = ContractWrapper;
exports.CurrencySchema = CurrencySchema;
exports.CurrencyValueSchema = CurrencyValueSchema;
exports.CustomContractDeploy = CustomContractDeploy;
exports.CustomContractInput = CustomContractInput;
exports.CustomContractOutput = CustomContractOutput;
exports.CustomContractSchema = CustomContractSchema;
exports.DEFAULT_IPFS_GATEWAY = DEFAULT_IPFS_GATEWAY;
exports.DEFAULT_QUERY_ALL_COUNT = DEFAULT_QUERY_ALL_COUNT;
exports.DelayedReveal = DelayedReveal;
exports.DropClaimConditions = DropClaimConditions;
exports.DropErc1155ClaimConditions = DropErc1155ClaimConditions;
exports.DropErc1155ContractSchema = DropErc1155ContractSchema;
exports.DropErc1155History = DropErc1155History;
exports.DropErc20ContractSchema = DropErc20ContractSchema;
exports.DropErc721ContractSchema = DropErc721ContractSchema;
exports.DuplicateFileNameError = DuplicateFileNameError;
exports.DuplicateLeafsError = DuplicateLeafsError;
exports.EditionDropInitializer = EditionDropInitializer;
exports.EditionInitializer = EditionInitializer;
exports.EditionMetadataInputOrUriSchema = EditionMetadataInputOrUriSchema;
exports.EditionMetadataInputSchema = EditionMetadataInputSchema;
exports.EditionMetadataOutputSchema = EditionMetadataOutputSchema;
exports.EditionMetadataWithOwnerOutputSchema = EditionMetadataWithOwnerOutputSchema;
exports.Erc1155 = Erc1155;
exports.Erc1155BatchMintable = Erc1155BatchMintable;
exports.Erc1155Burnable = Erc1155Burnable;
exports.Erc1155Enumerable = Erc1155Enumerable;
exports.Erc1155LazyMintable = Erc1155LazyMintable;
exports.Erc1155Mintable = Erc1155Mintable;
exports.Erc1155SignatureMintable = Erc1155SignatureMintable;
exports.Erc20 = Erc20;
exports.Erc20BatchMintable = Erc20BatchMintable;
exports.Erc20Burnable = Erc20Burnable;
exports.Erc20Mintable = Erc20Mintable;
exports.Erc20SignatureMintable = Erc20SignatureMintable;
exports.Erc721 = Erc721;
exports.Erc721BatchMintable = Erc721BatchMintable;
exports.Erc721Burnable = Erc721Burnable;
exports.Erc721ClaimableWithConditions = Erc721ClaimableWithConditions;
exports.Erc721Enumerable = Erc721Enumerable;
exports.Erc721LazyMintable = Erc721LazyMintable;
exports.Erc721Mintable = Erc721Mintable;
exports.Erc721Supply = Erc721Supply;
exports.Erc721WithQuantitySignatureMintable = Erc721WithQuantitySignatureMintable;
exports.ExtensionNotImplementedError = ExtensionNotImplementedError;
exports.ExtraPublishMetadataSchemaInput = ExtraPublishMetadataSchemaInput;
exports.ExtraPublishMetadataSchemaOutput = ExtraPublishMetadataSchemaOutput;
exports.FEATURE_NFT_REVEALABLE = FEATURE_NFT_REVEALABLE;
exports.FactoryDeploymentSchema = FactoryDeploymentSchema;
exports.FetchError = FetchError;
exports.FileNameMissingError = FileNameMissingError;
exports.FullPublishMetadataSchemaInput = FullPublishMetadataSchemaInput;
exports.FullPublishMetadataSchemaOutput = FullPublishMetadataSchemaOutput;
exports.FunctionDeprecatedError = FunctionDeprecatedError;
exports.GasCostEstimator = GasCostEstimator;
exports.InterfaceId_IERC1155 = InterfaceId_IERC1155;
exports.InterfaceId_IERC721 = InterfaceId_IERC721;
exports.InvalidAddressError = InvalidAddressError;
exports.ListingNotFoundError = ListingNotFoundError;
exports.LoginOptionsSchema = LoginOptionsSchema;
exports.LoginPayloadDataSchema = LoginPayloadDataSchema;
exports.LoginPayloadSchema = LoginPayloadSchema;
exports.MarketplaceAuction = MarketplaceAuction;
exports.MarketplaceContractSchema = MarketplaceContractSchema;
exports.MarketplaceDirect = MarketplaceDirect;
exports.MarketplaceInitializer = MarketplaceInitializer;
exports.MerkleSchema = MerkleSchema;
exports.MintRequest1155 = MintRequest1155;
exports.MintRequest20 = MintRequest20;
exports.MintRequest721 = MintRequest721;
exports.MintRequest721withQuantity = MintRequest721withQuantity;
exports.MissingOwnerRoleError = MissingOwnerRoleError;
exports.MissingRoleError = MissingRoleError;
exports.MultiwrapContractSchema = MultiwrapContractSchema;
exports.MultiwrapInitializer = MultiwrapInitializer;
exports.NATIVE_TOKENS = NATIVE_TOKENS;
exports.NATIVE_TOKEN_ADDRESS = NATIVE_TOKEN_ADDRESS;
exports.NFTCollectionInitializer = NFTCollectionInitializer;
exports.NFTDropInitializer = NFTDropInitializer;
exports.NotEnoughTokensError = NotEnoughTokensError;
exports.NotFoundError = NotFoundError;
exports.OZ_DEFENDER_FORWARDER_ADDRESS = OZ_DEFENDER_FORWARDER_ADDRESS;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.PAPER_API_URL = PAPER_API_URL;
exports.PINATA_IPFS_URL = PINATA_IPFS_URL;
exports.PREBUILT_CONTRACTS_MAP = PREBUILT_CONTRACTS_MAP;
exports.PUBLIC_GATEWAYS = PUBLIC_GATEWAYS;
exports.PackContractSchema = PackContractSchema;
exports.PackInitializer = PackInitializer;
exports.PaperCheckout = PaperCheckout;
exports.PartialClaimConditionInputSchema = PartialClaimConditionInputSchema;
exports.PreDeployMetadata = PreDeployMetadata;
exports.PreDeployMetadataFetchedSchema = PreDeployMetadataFetchedSchema;
exports.ProfileSchemaInput = ProfileSchemaInput;
exports.ProfileSchemaOutput = ProfileSchemaOutput;
exports.PublishedContractSchema = PublishedContractSchema;
exports.QuantityAboveLimitError = QuantityAboveLimitError;
exports.QuantitySchema = QuantitySchema;
exports.RawDateSchema = RawDateSchema;
exports.RestrictedTransferError = RestrictedTransferError;
exports.SUPPORTED_CHAIN_IDS = SUPPORTED_CHAIN_IDS;
exports.Signature1155PayloadInput = Signature1155PayloadInput;
exports.Signature1155PayloadInputWithTokenId = Signature1155PayloadInputWithTokenId;
exports.Signature1155PayloadOutput = Signature1155PayloadOutput;
exports.Signature20PayloadInput = Signature20PayloadInput;
exports.Signature20PayloadOutput = Signature20PayloadOutput;
exports.Signature721PayloadInput = Signature721PayloadInput;
exports.Signature721PayloadOutput = Signature721PayloadOutput;
exports.Signature721WithQuantityInput = Signature721WithQuantityInput;
exports.Signature721WithQuantityOutput = Signature721WithQuantityOutput;
exports.SignatureDropInitializer = SignatureDropInitializer;
exports.SnapshotAddressInput = SnapshotAddressInput;
exports.SnapshotInfoSchema = SnapshotInfoSchema;
exports.SnapshotInputSchema = SnapshotInputSchema;
exports.SnapshotSchema = SnapshotSchema;
exports.SplitInitializer = SplitInitializer;
exports.SplitsContractSchema = SplitsContractSchema;
exports.StandardErc1155 = StandardErc1155;
exports.StandardErc20 = StandardErc20;
exports.StandardErc721 = StandardErc721;
exports.TW_IPFS_SERVER_URL = TW_IPFS_SERVER_URL;
exports.ThirdwebSDK = ThirdwebSDK;
exports.TokenDropInitializer = TokenDropInitializer;
exports.TokenERC20History = TokenERC20History;
exports.TokenErc1155ContractSchema = TokenErc1155ContractSchema;
exports.TokenErc20ContractSchema = TokenErc20ContractSchema;
exports.TokenErc721ContractSchema = TokenErc721ContractSchema;
exports.TokenInitializer = TokenInitializer;
exports.TokenMintInputSchema = TokenMintInputSchema;
exports.TransactionError = TransactionError;
exports.TransactionTask = TransactionTask;
exports.UploadError = UploadError;
exports.UserWallet = UserWallet;
exports.VerifyOptionsSchema = VerifyOptionsSchema;
exports.VoteContractSchema = VoteContractSchema;
exports.VoteInitializer = VoteInitializer;
exports.WalletAuthenticator = WalletAuthenticator;
exports.WrongListingTypeError = WrongListingTypeError;
exports.assertEnabled = assertEnabled;
exports.convertToTWError = convertToTWError;
exports.createCheckoutLinkIntent = createCheckoutLinkIntent;
exports.createSnapshot = createSnapshot;
exports.detectContractFeature = detectContractFeature;
exports.detectFeatures = detectFeatures;
exports.extractConstructorParams = extractConstructorParams;
exports.extractConstructorParamsFromAbi = extractConstructorParamsFromAbi;
exports.extractEventsFromAbi = extractEventsFromAbi;
exports.extractFunctionParamsFromAbi = extractFunctionParamsFromAbi;
exports.extractFunctions = extractFunctions;
exports.extractFunctionsFromAbi = extractFunctionsFromAbi;
exports.fetchContractMetadata = fetchContractMetadata;
exports.fetchContractMetadataFromAddress = fetchContractMetadataFromAddress;
exports.fetchCurrencyMetadata = fetchCurrencyMetadata;
exports.fetchCurrencyValue = fetchCurrencyValue;
exports.fetchExtendedReleaseMetadata = fetchExtendedReleaseMetadata;
exports.fetchPreDeployMetadata = fetchPreDeployMetadata;
exports.fetchRawPredeployMetadata = fetchRawPredeployMetadata;
exports.fetchRegisteredCheckoutId = fetchRegisteredCheckoutId;
exports.fetchSourceFilesFromMetadata = fetchSourceFilesFromMetadata;
exports.getContractAddressByChainId = getContractAddressByChainId;
exports.getContractPublisherAddress = getContractPublisherAddress;
exports.getContractTypeForRemoteName = getContractTypeForRemoteName;
exports.getNativeTokenByChainId = getNativeTokenByChainId;
exports.getProviderForNetwork = getProviderForNetwork;
exports.getReadOnlyProvider = getReadOnlyProvider;
exports.getRoleHash = getRoleHash;
exports.hasERC20Allowance = hasERC20Allowance;
exports.hasFunction = hasFunction;
exports.hashLeafNode = hashLeafNode;
exports.includesErrorMessage = includesErrorMessage;
exports.isDowngradeVersion = isDowngradeVersion;
exports.isFeatureEnabled = isFeatureEnabled;
exports.isIncrementalVersion = isIncrementalVersion;
exports.isTokenApprovedForTransfer = isTokenApprovedForTransfer;
exports.mapOffer = mapOffer;
exports.normalizePriceValue = normalizePriceValue;
exports.parseChainIdToPaperChain = parseChainIdToPaperChain;
exports.prepareClaim = prepareClaim;
exports.resolveContractUriFromAddress = resolveContractUriFromAddress;
exports.toSemver = toSemver;
exports.uploadOrExtractURI = uploadOrExtractURI;
exports.uploadOrExtractURIs = uploadOrExtractURIs;