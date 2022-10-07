import { NFT, NFTMetadata, NFTMetadataInput, NFTMetadataOrUri } from "../../core/schema/nft";
import { TransactionResult } from "../types/common";
import { CreatorInput } from "../types/programs";
import { Metaplex } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
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
export declare class NFTCollection {
    private metaplex;
    private storage;
    private nft;
    publicKey: PublicKey;
    accountType: "nft-collection";
    get network(): import("@metaplex-foundation/js").Cluster;
    constructor(collectionAddress: string, metaplex: Metaplex, storage: ThirdwebStorage);
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
    getMetadata(): Promise<NFTMetadata>;
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
    get(nftAddress: string): Promise<NFT>;
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
    getAll(): Promise<NFT[]>;
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
    getAllNFTAddresses(): Promise<string[]>;
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
    balance(nftAddress: string): Promise<number>;
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
    balanceOf(walletAddress: string, nftAddress: string): Promise<number>;
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
    supplyOf(nftAddress: string): Promise<bigint>;
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
    transfer(receiverAddress: string, nftAddress: string): Promise<TransactionResult>;
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
    mint(metadata: NFTMetadataInput): Promise<string>;
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
    mintTo(to: string, metadata: NFTMetadataOrUri): Promise<string>;
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
    mintAdditionalSupply(nftAddress: string): Promise<string>;
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
    mintAdditionalSupplyTo(to: string, nftAddress: string): Promise<string>;
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
    burn(nftAddress: string): Promise<TransactionResult>;
    /**
     * Update the settings of the collection
     * @param settings - the settings to update
     */
    updateSettings(settings: {
        creators?: CreatorInput[];
    }): Promise<void>;
    private getCollection;
}
//# sourceMappingURL=nft-collection.d.ts.map