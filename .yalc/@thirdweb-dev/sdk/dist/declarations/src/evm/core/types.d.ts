import type { CONTRACTS_MAP, PREBUILT_CONTRACTS_MAP } from "../contracts";
import type { SmartContract } from "../contracts/smart-contract";
import { BigNumber, BytesLike, CallOverrides, Signer, providers } from "ethers";
declare type TBoolean = 0 | 1;
declare type If<B extends TBoolean, Then, Else = never> = B extends 1 ? Then : Else;
declare type Equals<A1, A2> = (<A>() => A extends A2 ? 1 : 0) extends <A>() => A extends A1 ? 1 : 0 ? 1 : 0;
export declare type PrebuiltContractsMap = typeof PREBUILT_CONTRACTS_MAP;
export declare type PrebuiltContractsInstances = {
    [K in keyof PrebuiltContractsMap]: Awaited<ReturnType<typeof PREBUILT_CONTRACTS_MAP[K]["initialize"]>>;
};
export declare type ContractsMap = typeof CONTRACTS_MAP;
export declare type PrebuiltContractType = keyof PrebuiltContractsMap;
export declare type ContractType = keyof ContractsMap;
export declare type ValidContractInstance = Awaited<ReturnType<ContractsMap[keyof PrebuiltContractsMap]["initialize"]>> | SmartContract;
export declare type SchemaForPrebuiltContractType<TContractType extends PrebuiltContractType> = PrebuiltContractsMap[TContractType]["schema"];
export declare type DeploySchemaForPrebuiltContractType<TContractType extends PrebuiltContractType> = SchemaForPrebuiltContractType<TContractType>["deploy"];
export declare type ContractForPrebuiltContractType<TContractType extends PrebuiltContractType> = PrebuiltContractsInstances[TContractType];
export declare type NetworkOrSignerOrProvider = providers.Networkish | Signer | providers.Provider;
export declare type ValueOf<T> = T[keyof T];
export declare type SignerOrProvider = Signer | providers.Provider;
declare type TransactionResultWithMetadata<T = unknown> = {
    receipt: providers.TransactionReceipt;
    data: () => Promise<T>;
};
export declare type TransactionResultWithId<T = never> = TransactionResult<T> & {
    id: BigNumber;
};
export declare type TransactionResultWithAddress<T = never> = TransactionResult<T> & {
    address: string;
};
export declare type TransactionResult<T = never> = If<Equals<T, never>, Omit<TransactionResultWithMetadata, "data">, TransactionResultWithMetadata<T>>;
/**
 * Forward Request Message that's used for gasless transaction
 * @public
 */
export declare type ForwardRequestMessage = {
    from: string;
    to: string;
    value: string;
    gas: string;
    nonce: string;
    data: BytesLike;
    chainid?: string;
};
/**
 * EIP-2612 token permit message for gasless transaction
 * @public
 */
export declare type PermitRequestMessage = {
    to: string;
    owner: string;
    spender: string;
    value: number | string;
    nonce: number | string;
    deadline: number | string;
    v: number;
    r: string;
    s: string;
};
/**
 * transaction message contains information that's needed to execute a gasless transaction
 */
export interface GaslessTransaction {
    from: string;
    to: string;
    data: string;
    chainId: number;
    gasLimit: BigNumber;
    functionName: string;
    functionArgs: any[];
    callOverrides: CallOverrides;
}
export {};
//# sourceMappingURL=types.d.ts.map