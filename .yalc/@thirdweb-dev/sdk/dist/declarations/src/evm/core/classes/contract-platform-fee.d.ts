import { CommonPlatformFeeSchema } from "../../schema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { IPlatformFee } from "@thirdweb-dev/contracts-js";
import { z } from "zod";
/**
 * Handle platform fees and recipients
 * @remarks Configure platform fees for a contract, which can be applied on certain paid transactions
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const feeInfo = await contract.platformFee.get();
 * await contract.platformFee.set({
 *   platform_fee_basis_points: 100, // 1% fee
 *   platform_fee_recipient: "0x..." // the fee recipient
 * })
 * ```
 * @public
 */
export declare class ContractPlatformFee<TContract extends IPlatformFee> implements DetectableFeature {
    featureName: "PlatformFee";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the platform fee recipient and basis points
     *  * @example
     * ```javascript
     * const feeInfo = await contract.platformFee.get();
     * ```
     * @twfeature PlatformFee
     */
    get(): Promise<{
        platform_fee_basis_points: number;
        platform_fee_recipient: string;
    }>;
    /**
     * Set the platform fee recipient and basis points
     * @param platformFeeInfo - the platform fee information
     * ```javascript
     * await contract.platformFee.set({
     *   platform_fee_basis_points: 100, // 1% fee
     *   platform_fee_recipient: "0x..." // the fee recipient
     * })
     * ```
     * @twfeature PlatformFee
     */
    set(platformFeeInfo: z.input<typeof CommonPlatformFeeSchema>): Promise<TransactionResult>;
}
//# sourceMappingURL=contract-platform-fee.d.ts.map