import { SDKOptions } from "../../schema/sdk-options";
import { DeploySchemaForPrebuiltContractType, NetworkOrSignerOrProvider, PrebuiltContractType } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { TWFactory } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ContractInterface } from "ethers";
import { z } from "zod";
/**
 * @internal
 */
export declare class ContractFactory extends ContractWrapper<TWFactory> {
    private storage;
    constructor(factoryAddr: string, network: NetworkOrSignerOrProvider, storage: ThirdwebStorage, options?: SDKOptions);
    deploy<TContractType extends PrebuiltContractType>(contractType: TContractType, contractMetadata: z.input<DeploySchemaForPrebuiltContractType<TContractType>>): Promise<string>;
    deployProxyByImplementation(implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[]): Promise<string>;
    private getDeployArguments;
    private getDefaultTrustedForwarders;
}
//# sourceMappingURL=factory.d.ts.map