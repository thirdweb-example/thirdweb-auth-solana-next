/// <reference types="node" />
import { providers, utils } from "ethers";
export declare class StaticJsonRpcBatchProvider extends providers.StaticJsonRpcProvider {
    _pendingBatchAggregator: NodeJS.Timer | null;
    _pendingBatch: Array<{
        request: {
            method: string;
            params: Array<any>;
            id: number;
            jsonrpc: "2.0";
        };
        resolve: (result: any) => void;
        reject: (error: Error) => void;
    }> | null;
    constructor(url: string | utils.ConnectionInfo | undefined, network: providers.Networkish | undefined);
    send(method: string, params: Array<any>): Promise<any>;
}
//# sourceMappingURL=static-batch-rpc.d.ts.map