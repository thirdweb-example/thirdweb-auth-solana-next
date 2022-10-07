import { RequiredParam } from "../../../core/types/shared";
import { DropContract, WalletAddress } from "../../types";
import { ClaimConditionInput } from "@thirdweb-dev/sdk";
import { BigNumberish } from "ethers";
/**
 * The options to be passed as the second parameter to the {@link useClaimIneligibilityReasons}` hook.
 *
 * @beta
 */
export declare type ClaimIneligibilityParams = {
    walletAddress: WalletAddress;
    quantity: string | number;
};
/**
 * The params for the {@link useSetClaimConditions} hook mutation.
 *
 * @beta
 */
export declare type SetClaimConditionsParams = {
    phases: ClaimConditionInput[];
    reset?: boolean;
};
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Use this to get the active claim conditon for ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 *
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC20ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC721ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(<YourERC1155ContractInstance>, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the currently active claim condition
 * @twfeature ERC721ClaimableWithConditions | ERC1155ClaimableWithConditions | ERC20ClaimableWithConditions
 * @beta
 */
export declare function useActiveClaimCondition(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): import("@tanstack/react-query").UseQueryResult<{
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    quantityLimitPerTransaction: string;
    startTime: Date;
    price: import("ethers").BigNumber;
    currencyAddress: string;
    maxQuantity: string;
    waitInSeconds: import("ethers").BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: import("ethers").BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}, unknown>;
/**
 * Use this to get all claim conditons for ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 *
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC20ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC721ContractInstance>);
 * ```
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(<YourERC1155ContractInstance>, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the list of claim conditions
 * @twfeature ERC721ClaimableWithConditions | ERC1155ClaimableWithConditions | ERC20ClaimableWithConditions
 * @beta
 */
export declare function useClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): import("@tanstack/react-query").UseQueryResult<{
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    quantityLimitPerTransaction: string;
    startTime: Date;
    price: import("ethers").BigNumber;
    currencyAddress: string;
    maxQuantity: string;
    waitInSeconds: import("ethers").BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: import("ethers").BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}[], unknown>;
/**
 * Use this to check for reasons that prevent claiming for either  ERC20, ERC721 or ERC1155 based contracts. They need to extend the `claimCondition` extension for this hook to work.
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useClaimIneligibilityReasons(<YourERC20ContractInstance>, { walletAddress: <walletAddress> });
 * ```
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(<YourERC721ContractInstance>, { quantity: <quantity>, walletAddress: <walletAddress> });
 * ```
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(<YourERC1155ContractInstance>, { quantity: <quantity>, walletAddress: <walletAddress> }, <tokenId>);
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param eligibilityParams - the parameters for the eligibility check, see: {@link ClaimIneligibilityParams}
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the resons for the claim ineligibility
 * @twfeature ERC721ClaimableWithConditions | ERC1155ClaimableWithConditions | ERC20ClaimableWithConditions
 * @beta
 */
export declare function useClaimIneligibilityReasons(contract: RequiredParam<DropContract>, params: ClaimIneligibilityParams, tokenId?: BigNumberish): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").ClaimEligibility[], unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Use this to set claim conditions on your {@link DropContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: setClaimConditions,
 *     isLoading,
 *     error,
 *   } = useSetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to set claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => setClaimConditions({ phases: [{ price: 2, maxQuantity: 100 }] })}
 *     >
 *       Set Claim Conditions!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to set claim conditions
 * @twfeature ERC721ClaimableWithConditions | ERC1155ClaimableWithConditions | ERC20ClaimableWithConditions
 * @beta
 */
export declare function useSetClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, SetClaimConditionsParams, unknown>;
/**
 * Use this to reset claim conditions on your {@link DropContract}
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract(<ContractAddress>);
 *   const {
 *     mutate: resetClaimConditions,
 *     isLoading,
 *     error,
 *   } = useResetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to reset claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={resetClaimConditions}
 *     >
 *       Reset Claim Conditions
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to reset claim conditions
 * @twfeature ERC721ClaimableWithConditions | ERC1155ClaimableWithConditions | ERC20ClaimableWithConditions
 * @beta
 */
export declare function useResetClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): import("@tanstack/react-query").UseMutationResult<Omit<{
    receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, void, unknown>;
//# sourceMappingURL=claim-conditions.d.ts.map