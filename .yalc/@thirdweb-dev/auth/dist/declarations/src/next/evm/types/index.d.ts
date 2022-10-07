import { ThirdwebSDK } from "@thirdweb-dev/sdk";
export declare type ThirdwebAuthRoute = "login" | "logout" | "user";
export declare type ThirdwebAuthConfig = {
    privateKey: string;
    domain: string;
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
//# sourceMappingURL=index.d.ts.map