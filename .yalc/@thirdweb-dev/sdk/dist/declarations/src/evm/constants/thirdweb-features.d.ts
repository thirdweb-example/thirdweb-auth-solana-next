export declare const FEATURE_ROYALTY: {
    readonly name: "Royalty";
    readonly namespace: "royalty";
    readonly docLinks: {
        readonly sdk: "sdk.contractroyalty";
        readonly contracts: "Royalty";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_PRIMARY_SALE: {
    readonly name: "PrimarySale";
    readonly namespace: "sales";
    readonly docLinks: {
        readonly sdk: "sdk.contractprimarysale";
        readonly contracts: "PrimarySale";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_PLATFORM_FEE: {
    readonly name: "PlatformFee";
    readonly namespace: "platformFee";
    readonly docLinks: {
        readonly sdk: "sdk.platformfee";
        readonly contracts: "PlatformFee";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_PERMISSIONS_ENUMERABLE: {
    readonly name: "PermissionsEnumerable";
    readonly namespace: "roles";
    readonly docLinks: {
        readonly sdk: "sdk.contractroles";
        readonly contracts: "PermissionsEnumerable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_PERMISSIONS: {
    readonly name: "Permissions";
    readonly namespace: "roles";
    readonly docLinks: {
        readonly sdk: "sdk.contractroles";
        readonly contracts: "Permissions";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {
        readonly PermissionsEnumerable: {
            readonly name: "PermissionsEnumerable";
            readonly namespace: "roles";
            readonly docLinks: {
                readonly sdk: "sdk.contractroles";
                readonly contracts: "PermissionsEnumerable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
    };
};
export declare const FEATURE_METADATA: {
    readonly name: "ContractMetadata";
    readonly namespace: "metadata";
    readonly docLinks: {
        readonly sdk: "sdk.contractmetadata";
        readonly contracts: "ContractMetadata";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_APPURI: {
    readonly name: "AppURI";
    readonly namespace: "appURI";
    readonly docLinks: {
        readonly sdk: "sdk.appURI";
        readonly contracts: "AppURI";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_OWNER: {
    readonly name: "Ownable";
    readonly namespace: "owner";
    readonly docLinks: {
        readonly sdk: "sdk.owner";
        readonly contracts: "Ownable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
//# sourceMappingURL=thirdweb-features.d.ts.map