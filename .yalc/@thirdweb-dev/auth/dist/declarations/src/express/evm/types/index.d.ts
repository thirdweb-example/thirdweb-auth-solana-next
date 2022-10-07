import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Request } from "express";
export declare type ThirdwebAuthRoute = "login" | "user" | "logout";
export declare type ThirdwebAuthConfig = {
    privateKey: string;
    domain: string;
    authUrl?: string;
    callbacks?: {
        login?: (address: string) => Promise<void> | void;
        user?: (address: string) => Promise<Omit<ThirdwebAuthUser, "address">> | Omit<ThirdwebAuthUser, "address">;
    };
};
export declare type ThirdwebAuthContext = {
    sdk: ThirdwebSDK;
    domain: string;
    callbacks?: {
        login?: (address: string) => Promise<void> | void;
        user?: (address: string) => Promise<Omit<ThirdwebAuthUser, "address">> | Omit<ThirdwebAuthUser, "address">;
    };
};
export declare type ThirdwebAuthUser = {
    address: string;
    [key: string]: any;
};
export declare type RequestWithUser = Request & {
    user: ThirdwebAuthUser | null;
};
//# sourceMappingURL=index.d.ts.map