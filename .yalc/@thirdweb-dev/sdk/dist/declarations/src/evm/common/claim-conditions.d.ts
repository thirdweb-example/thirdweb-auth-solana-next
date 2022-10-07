import { ContractWrapper } from "../core/classes/contract-wrapper";
import { ClaimCondition, ClaimConditionInput, ClaimVerification, Price } from "../types";
import { IDropClaimCondition } from "@thirdweb-dev/contracts-js/dist/declarations/src/DropERC20";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish, providers, CallOverrides } from "ethers";
/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */
export declare function prepareClaim(quantity: BigNumberish, activeClaimCondition: ClaimCondition, merkleMetadataFetcher: () => Promise<Record<string, string>>, tokenDecimals: number, contractWrapper: ContractWrapper<any>, storage: ThirdwebStorage, checkERC20Allowance: boolean): Promise<ClaimVerification>;
declare type Snapshot = {
    address: string;
    proof: string[];
    maxClaimable: string;
}[] | undefined;
/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
export declare function fetchSnapshot(merkleRoot: string, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage): Promise<Snapshot>;
/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */
export declare function updateExistingClaimConditions(index: number, claimConditionInput: ClaimConditionInput, existingConditions: ClaimCondition[]): Promise<ClaimConditionInput[]>;
/**
 * Fetches the proof for the current signer for a particular wallet.
 *
 * @param merkleRoot - The merkle root of the condition to check.
 * @returns - The proof for the current signer for the specified condition.
 */
export declare function getClaimerProofs(addressToClaim: string, merkleRoot: string, tokenDecimals: number, merkleMetadata: Record<string, string>, storage: ThirdwebStorage): Promise<{
    maxClaimable: BigNumber;
    proof: string[];
}>;
/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @internal
 */
export declare function processClaimConditionInputs(claimConditionInputs: ClaimConditionInput[], tokenDecimals: number, provider: providers.Provider, storage: ThirdwebStorage): Promise<{
    snapshotInfos: {
        merkleRoot: string;
        snapshot: {
            merkleRoot: string;
            claims: {
                address: string;
                proof: string[];
                maxClaimable: string;
            }[];
        };
        snapshotUri: string;
    }[];
    sortedConditions: IDropClaimCondition.ClaimConditionStruct[];
}>;
/**
 * Transforms a contract model to local model
 * @param pm
 * @param tokenDecimals
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @internal
 */
export declare function transformResultToClaimCondition(pm: IDropClaimCondition.ClaimConditionStructOutput, tokenDecimals: number, provider: providers.Provider, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage): Promise<ClaimCondition>;
export declare function calculateClaimCost(contractWrapper: ContractWrapper<any>, pricePerToken: Price, quantity: BigNumberish, currencyAddress?: string, checkERC20Allowance?: boolean): Promise<Promise<CallOverrides>>;
export {};
//# sourceMappingURL=claim-conditions.d.ts.map