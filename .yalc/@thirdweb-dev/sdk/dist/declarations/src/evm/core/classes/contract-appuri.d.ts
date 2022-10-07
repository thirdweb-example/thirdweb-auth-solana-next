import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { AppURI } from "@thirdweb-dev/contracts-js";
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
export declare class ContractAppURI<TContract extends AppURI> implements DetectableFeature {
    featureName: "AppURI";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the appURI for the contract
     * @returns the appURI object
     */
    get(): Promise<string>;
    /**
     * Set the appURI for the contract
     * @param appURI - the uri to set (typically an IPFS hash)
     */
    set(appURI: string): Promise<TransactionResult>;
}
//# sourceMappingURL=contract-appuri.d.ts.map