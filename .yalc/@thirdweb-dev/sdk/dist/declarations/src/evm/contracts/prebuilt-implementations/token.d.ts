import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractPlatformFee } from "../../core/classes/contract-platform-fee";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractPrimarySale } from "../../core/classes/contract-sales";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { TokenERC20History } from "../../core/classes/erc-20-history";
import { Erc20SignatureMintable } from "../../core/classes/erc-20-signature-mintable";
import { StandardErc20 } from "../../core/classes/erc-20-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { NetworkOrSignerOrProvider, TransactionResult } from "../../core/types";
import { TokenErc20ContractSchema } from "../../schema/contracts/token-erc20";
import { TokenMintInput } from "../../schema/tokens/token";
import { Amount, CurrencyValue } from "../../types";
import type { TokenERC20 } from "@thirdweb-dev/contracts-js";
import type ABI from "@thirdweb-dev/contracts-js/dist/abis/TokenERC20.json";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { CallOverrides } from "ethers";
/**
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @public
 */
export declare class Token extends StandardErc20<TokenERC20> {
    static contractRoles: readonly ["admin", "minter", "transfer"];
    abi: typeof ABI;
    metadata: ContractMetadata<TokenERC20, typeof TokenErc20ContractSchema>;
    roles: ContractRoles<TokenERC20, typeof Token.contractRoles[number]>;
    encoder: ContractEncoder<TokenERC20>;
    estimator: GasCostEstimator<TokenERC20>;
    history: TokenERC20History;
    events: ContractEvents<TokenERC20>;
    platformFees: ContractPlatformFee<TokenERC20>;
    sales: ContractPrimarySale<TokenERC20>;
    /**
     * Signature Minting
     * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
     * const signedPayload = contract.signature.generate(payload);
     *
     * // now anyone can mint the tokens
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * ```
     */
    signature: Erc20SignatureMintable;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<TokenERC20>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: ThirdwebStorage, options: {
        readonlySettings?: {
            chainId?: number | undefined;
            rpcUrl: string;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            experimentalChainlessSupport?: boolean | undefined;
            openzeppelin: {
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                relayerUrl: string;
            };
        } | {
            biconomy: {
                deadlineSeconds?: number | undefined;
                apiId: string;
                apiKey: string;
            };
        } | undefined;
    } | undefined, abi: typeof ABI, chainId: number, contractWrapper?: ContractWrapper<TokenERC20>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get your wallet voting power for the current checkpoints
     *
     * @returns the amount of voting power in tokens
     */
    getVoteBalance(): Promise<CurrencyValue>;
    getVoteBalanceOf(account: string): Promise<CurrencyValue>;
    /**
     * Get your voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegation(): Promise<string>;
    /**
     * Get a specific address voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegationOf(account: string): Promise<string>;
    /**
     * Get whether users can transfer tokens from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint Tokens for the connected wallet
     *
     * @remarks See {@link Token.mintTo}
     */
    mint(amount: Amount): Promise<TransactionResult>;
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     *
     * await contract.mintTo(toAddress, amount);
     * ```
     */
    mintTo(to: string, amount: Amount): Promise<TransactionResult>;
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
     */
    mintBatchTo(args: TokenMintInput[]): Promise<TransactionResult>;
    /**
     * Lets you delegate your voting power to the delegateeAddress
     *
     * @param delegateeAddress - delegatee wallet address
     * @alpha
     */
    delegateTo(delegateeAddress: string): Promise<TransactionResult>;
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
    burn(amount: Amount): Promise<TransactionResult>;
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
    burnFrom(holder: string, amount: Amount): Promise<TransactionResult>;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
}
//# sourceMappingURL=token.d.ts.map