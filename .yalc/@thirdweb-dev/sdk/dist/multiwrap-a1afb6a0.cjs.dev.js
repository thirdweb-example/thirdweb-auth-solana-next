'use strict';

var defineProperty = require('./defineProperty-a2d146a9.cjs.dev.js');
var paperXyz = require('./paper-xyz-60faf527.cjs.dev.js');
var ethers = require('ethers');
require('bn.js');
require('zod');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('tiny-invariant');
require('eventemitter3');
require('cross-fetch');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/DelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/DropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('fast-deep-equal');
require('uuid');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');

/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */

class Multiwrap extends paperXyz.StandardErc721 {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new paperXyz.ContractWrapper(network, address, abi, options);
    super(contractWrapper, storage, chainId);

    defineProperty._defineProperty(this, "abi", void 0);

    defineProperty._defineProperty(this, "encoder", void 0);

    defineProperty._defineProperty(this, "estimator", void 0);

    defineProperty._defineProperty(this, "metadata", void 0);

    defineProperty._defineProperty(this, "events", void 0);

    defineProperty._defineProperty(this, "roles", void 0);

    defineProperty._defineProperty(this, "royalties", void 0);

    defineProperty._defineProperty(this, "owner", void 0);

    this.abi = abi;
    this.metadata = new paperXyz.ContractMetadata(this.contractWrapper, paperXyz.MultiwrapContractSchema, this.storage);
    this.roles = new paperXyz.ContractRoles(this.contractWrapper, Multiwrap.contractRoles);
    this.encoder = new paperXyz.ContractEncoder(this.contractWrapper);
    this.estimator = new paperXyz.GasCostEstimator(this.contractWrapper);
    this.events = new paperXyz.ContractEvents(this.contractWrapper);
    this.royalties = new paperXyz.ContractRoyalty(this.contractWrapper, this.metadata);
    this.owner = new paperXyz.ContractOwner(this.contractWrapper);
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */


  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.readContract.getWrappedContents(wrappedTokenId);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];

    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0:
          {
            const tokenMetadata = await paperXyz.fetchCurrencyMetadata(this.contractWrapper.getProvider(), token.assetContract);
            erc20Tokens.push({
              contractAddress: token.assetContract,
              quantity: ethers.ethers.utils.formatUnits(token.totalAmount, tokenMetadata.decimals)
            });
            break;
          }

        case 1:
          {
            erc721Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId
            });
            break;
          }

        case 2:
          {
            erc1155Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId,
              quantity: token.totalAmount.toString()
            });
            break;
          }
      }
    }

    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
   * @example
   * ```javascript
   * const tx = await contract.wrap({
   *   erc20Tokens: [{
   *     contractAddress: "0x...",
   *     quantity: "0.8"
   *   }],
   *   erc721Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "0"
   *   }],
   *   erc1155Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "1",
   *     quantity: "2"
   *   }]
   * }, {
   *     name: "Wrapped bundle",
   *     description: "This is a wrapped bundle of tokens and NFTs",
   *     image: "ipfs://...",
   * });
   * const receipt = tx.receipt(); // the transaction receipt
   * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
   * ```
   * @param contents - the contents to wrap
   * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the wrapped token bundle to
   */


  async wrap(contents, wrappedTokenMetadata, recipientAddress) {
    const uri = await paperXyz.uploadOrExtractURI(wrappedTokenMetadata, this.storage);
    const recipient = recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress();
    const tokens = await this.toTokenStructList(contents);
    const receipt = await this.contractWrapper.sendTransaction("wrap", [tokens, uri, recipient]);
    const event = this.contractWrapper.parseLogs("TokensWrapped", receipt === null || receipt === void 0 ? void 0 : receipt.logs);

    if (event.length === 0) {
      throw new Error("TokensWrapped event not found");
    }

    const tokenId = event[0].args.tokenIdOfWrappedToken;
    return {
      id: tokenId,
      receipt,
      data: () => this.get(tokenId)
    };
  }
  /**
   * Unwrap a wrapped token bundle, and retrieve its contents
   * @example
   * ```javascript
   * await contract.unwrap(wrappedTokenId);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the unwrapped tokens to
   */


  async unwrap(wrappedTokenId, recipientAddress) {
    const recipient = recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress();
    return {
      receipt: await this.contractWrapper.sendTransaction("unwrap", [wrappedTokenId, recipient])
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/


  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();

    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await paperXyz.normalizePriceValue(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await paperXyz.hasERC20Allowance(this.contractWrapper, erc20.contractAddress, normalizedQuantity);

        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});\n\n`);
        }

        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }

    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await paperXyz.isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);

        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
        }

        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }

    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await paperXyz.isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);

        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
        }

        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }

    return tokens;
  }
  /**
   * @internal
   */


  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.contractWrapper.call(functionName, ...args);
  }

}

defineProperty._defineProperty(Multiwrap, "contractRoles", ["admin", "transfer", "minter", "unwrap", "asset"]);

exports.Multiwrap = Multiwrap;