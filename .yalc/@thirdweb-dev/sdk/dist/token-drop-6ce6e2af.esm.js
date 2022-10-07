import { _ as _defineProperty } from './defineProperty-6292d8c3.esm.js';
import { av as StandardErc20, cn as ContractWrapper, ah as ContractMetadata, cK as DropErc20ContractSchema, ai as ContractRoles, ag as ContractEncoder, aR as GasCostEstimator, aS as ContractEvents, ak as ContractPrimarySale, aU as ContractPlatformFee, aT as ContractInterceptor, am as DropClaimConditions, bt as getRoleHash } from './paper-xyz-2e4d75d8.esm.js';
import { constants } from 'ethers';
import 'bn.js';
import 'zod';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import 'tiny-invariant';
import 'eventemitter3';
import 'cross-fetch';
import '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/DelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/DropSinglePhase1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import 'fast-deep-equal';
import 'uuid';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWFactory.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json';
import '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import '@thirdweb-dev/storage';
import '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';

/**
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "token-drop");
 * ```
 *
 */

class TokenDrop extends StandardErc20 {
  /**
   * Configure claim conditions
   * @remarks Define who can claim Tokens, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
   *     price: 0.001, // presale price per token
   *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.008, // public sale price per token
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
   * ```
   */

  /**
   * @internal
   */
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options);
    super(contractWrapper, storage, chainId);

    _defineProperty(this, "abi", void 0);

    _defineProperty(this, "metadata", void 0);

    _defineProperty(this, "roles", void 0);

    _defineProperty(this, "encoder", void 0);

    _defineProperty(this, "estimator", void 0);

    _defineProperty(this, "sales", void 0);

    _defineProperty(this, "platformFees", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "claimConditions", void 0);

    _defineProperty(this, "interceptor", void 0);

    this.abi = abi;
    this.metadata = new ContractMetadata(this.contractWrapper, DropErc20ContractSchema, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, TokenDrop.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.claimConditions = new DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns the amount of voting power in tokens
   */


  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }

  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(account));
  }
  /**
   * Get your voting delegatee address
   *
   * @returns the address of your vote delegatee
   */


  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }
  /**
   * Get a specific address voting delegatee address
   *
   * @returns the address of your vote delegatee
   */


  async getDelegationOf(account) {
    return await this.contractWrapper.readContract.delegates(account);
  }
  /**
   * Get whether users can transfer tokens from this contract
   */


  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole(getRoleHash("transfer"), constants.AddressZero);
    return !anyoneCanTransfer;
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Claim a certain amount of tokens
   * @remarks See {@link TokenDrop.claimTo}
   * @param amount - the amount of tokens to mint
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   */


  async claim(amount) {
    let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.claimTo(await this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance);
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
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - The transaction receipt
   */


  async claimTo(destinationAddress, amount) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc20.claimTo(destinationAddress, amount, checkERC20Allowance);
  }
  /**
   * Lets you delegate your voting power to the delegateeAddress
   *
   * @param delegateeAddress - delegatee wallet address
   * @alpha
   */


  async delegateTo(delegateeAddress) {
    return {
      receipt: await this.contractWrapper.sendTransaction("delegate", [delegateeAddress])
    };
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
   * await contract.burnTokens(amount);
   * ```
   */


  async burnTokens(amount) {
    return this.erc20.burn(amount);
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
   * await contract.burnFrom(holderAddress, amount);
   * ```
   */


  async burnFrom(holder, amount) {
    return this.erc20.burnFrom(holder, amount);
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

_defineProperty(TokenDrop, "contractRoles", ["admin", "transfer"]);

export { TokenDrop };
