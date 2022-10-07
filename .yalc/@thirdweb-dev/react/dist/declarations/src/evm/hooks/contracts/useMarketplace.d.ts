import { RequiredParam } from "../../../core/types/shared";
/**
 * Hook for getting an instance of a `Marketplace` contract. This contract is used to support marketplace for purchase and sale of on-chain assets.
 * @param contractAddress - the address of the Marketplace contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useMarketplace } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const marketplace = useMarketplace("<YOUR-CONTRACT-ADDRESS>")
 *
 *   // Now you can use the marketplace contract in the rest of the component
 *
 *   // For example, this function will return all the listings on the marketplace
 *   async function getListings() {
 *     const listings = await marketplace.getAll()
 *     return listings
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const marketplace = await sdk.useMarketplace("0x1234...");
 * + const marketplace = await sdk.useContract("0x1234...", "marketplace").contract;
 * ```
 */
export declare function useMarketplace(contractAddress: RequiredParam<string>): import("@thirdweb-dev/sdk").Marketplace | undefined;
//# sourceMappingURL=useMarketplace.d.ts.map