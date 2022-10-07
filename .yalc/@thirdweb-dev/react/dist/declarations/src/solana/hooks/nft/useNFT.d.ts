import { RequiredParam } from "../../../core/types/shared";
import type { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function nftGetOneQuery(program: RequiredParam<NFTCollection | NFTDrop>, tokenAddress: RequiredParam<string>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "get", {
        readonly tokenAddress: RequiredParam<string>;
    }];
    queryFn: () => Promise<import("@thirdweb-dev/sdk").NFT>;
    enabled: boolean;
};
/**
 * Get the metadata for a minted NFT
 * @param program - The NFT program to get NFT metadata from
 * @param - tokenAdress - The mint address of the NFT to get the metadata of
 *
 * @example
 * ```jsx
 * import { useProgram, useNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const program = useProgram("{{program_address}}");
 *   const { data: metadata, isLoading } = useNFT(program, mintAddress);
 *
 *   return (
 *     <pre>{JSON.stringify(metadata)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useNFT(program: RequiredParam<NFTCollection | NFTDrop>, tokenAddress: RequiredParam<string>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").NFT, unknown>;
//# sourceMappingURL=useNFT.d.ts.map