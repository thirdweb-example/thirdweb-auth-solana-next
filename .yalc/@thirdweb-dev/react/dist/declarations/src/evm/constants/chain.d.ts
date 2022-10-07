import { SUPPORTED_CHAIN_ID } from "@thirdweb-dev/sdk";
import type { Chain as WagmiChain } from "wagmi";
export declare type Chain = WagmiChain & {
    deprecated?: boolean;
};
export declare const defaultSupportedChains: Chain[];
export declare type SupportedChainId = typeof defaultSupportedChains[number]["id"];
export declare type SupportedChain = SupportedChainId | Chain;
export declare function getChainFromChainId(chainId: SUPPORTED_CHAIN_ID): Chain;
//# sourceMappingURL=chain.d.ts.map