import { RequiredParam } from "../../../core/types/shared";
import { MintNFTParams } from "../../../evm/types";
import type { NFTCollection } from "@thirdweb-dev/sdk/solana";
/**
 * Mint NFTs on your NFT program
 * @param program - The NFT program to mint NFTs to
 *
 * @example
 * ```jsx
 * import { useProgram, useMintNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const program = useProgram("{{program_address}}");
 *   const { mutateAsync: mint, isLoading, error } = useMintNFT(program);
 *
 *   function mintNFT() {
 *     const metadata = { name: "First NFT", description: "This is a cool NFT!" };
 *     mint({ to: "{{wallet_address}}", metadata });
 *   }
 *
 *   return (
 *     <button onClick={() => mintNFT()}>
 *       Mint
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useMintNFT(program: RequiredParam<NFTCollection>): import("@tanstack/react-query").UseMutationResult<string, unknown, MintNFTParams, unknown>;
//# sourceMappingURL=useMintNFT.d.ts.map