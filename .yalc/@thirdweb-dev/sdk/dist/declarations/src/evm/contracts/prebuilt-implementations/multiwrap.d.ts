import { NFT, NFTMetadataOrUri } from "../../../core/schema/nft";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { StandardErc721 } from "../../core/classes/erc-721-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../../core/types";
import { MultiwrapContractSchema } from "../../schema/contracts/multiwrap";
import { TokensToWrap, WrappedTokens } from "../../types/multiwrap";
import type { Multiwrap as MultiwrapContract } from "@thirdweb-dev/contracts-js";
import type ABI from "@thirdweb-dev/contracts-js/dist/abis/Multiwrap.json";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumberish, CallOverrides } from "ethers";
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
export declare class Multiwrap extends StandardErc721<MultiwrapContract> {
    static contractRoles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
    abi: typeof ABI;
    encoder: ContractEncoder<MultiwrapContract>;
    estimator: GasCostEstimator<MultiwrapContract>;
    metadata: ContractMetadata<MultiwrapContract, typeof MultiwrapContractSchema>;
    events: ContractEvents<MultiwrapContract>;
    roles: ContractRoles<MultiwrapContract, typeof Multiwrap.contractRoles[number]>;
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
    royalties: ContractRoyalty<MultiwrapContract, typeof MultiwrapContractSchema>;
    owner: ContractOwner<MultiwrapContract>;
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
    } | undefined, abi: typeof ABI, chainId: number, contractWrapper?: ContractWrapper<MultiwrapContract>);
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
    getWrappedContents(wrappedTokenId: BigNumberish): Promise<WrappedTokens>;
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
    wrap(contents: TokensToWrap, wrappedTokenMetadata: NFTMetadataOrUri, recipientAddress?: string): Promise<TransactionResultWithId<NFT>>;
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    unwrap(wrappedTokenId: BigNumberish, recipientAddress?: string): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toTokenStructList;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
}
//# sourceMappingURL=multiwrap.d.ts.map