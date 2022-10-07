import { Chain, SupportedChainId } from "../constants/chain";
import React, { PropsWithChildren } from "react";
interface ThirdwebConfigContext {
    rpcUrlMap: Record<SupportedChainId | number, string>;
    supportedChains: Chain[];
}
export declare const defaultChainRpc: Record<SupportedChainId | number, string>;
declare const ThirdwebConfigContext: React.Context<ThirdwebConfigContext>;
export declare const ThirdwebConfigProvider: React.FC<PropsWithChildren<{
    value: ThirdwebConfigContext;
}>>;
export declare function useThirdwebConfigContext(): ThirdwebConfigContext;
export {};
//# sourceMappingURL=thirdweb-config.d.ts.map