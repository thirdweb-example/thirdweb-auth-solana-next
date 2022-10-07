/// <reference types="bn.js" />
import { z } from "zod";
/**
 * @internal
 */
export declare const BaseSignaturePayloadInput: z.ZodObject<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadInput: z.ZodObject<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    quantity: string | number;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, {
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    quantity: string | number;
    mintStartTime: string | number | bigint | import("ethers").BigNumber;
    mintEndTime: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature721PayloadInput: z.ZodObject<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
}>;
/**
 * @internal
 */
export declare const Signature721PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    uri: string;
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    uri: string;
    royaltyBps: string | number | bigint | import("ethers").BigNumber;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: string | number | bigint | import("ethers").BigNumber;
    mintEndTime: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadInput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    metadata?: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    } | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    quantity: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadInputWithTokenId: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}>, {
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    tokenId: string;
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    metadata?: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    } | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    tokenId: string | number | bigint | import("ethers").BigNumber;
    quantity: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, {
    tokenId: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    uri: string;
    tokenId: import("ethers").BigNumber;
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    uri: string;
    tokenId: string | number | bigint | import("ethers").BigNumber;
    royaltyBps: string | number | bigint | import("ethers").BigNumber;
    quantity: string | number | bigint | import("ethers").BigNumber;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: string | number | bigint | import("ethers").BigNumber;
    mintEndTime: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityInput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>>;
}>, "strip", z.ZodTypeAny, {
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    metadata?: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    } | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityOutput: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            data?: any;
            name: string;
        }, {
            data?: any;
            name: string;
        }>]>, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
            [x: string]: unknown;
        }, {
            [x: string]: unknown;
        }>]>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }, {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    }>, z.ZodString]>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, {
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>>;
}>, "strip", z.ZodTypeAny, {
    uri: string;
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    royaltyRecipient?: string | undefined;
    to?: string | undefined;
    primarySaleRecipient?: string | undefined;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    uri: string;
    royaltyBps: string | number | bigint | import("ethers").BigNumber;
    metadata: string | {
        [x: string]: unknown;
        name?: string | number | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
        attributes?: {
            [x: string]: unknown;
        } | {
            [x: string]: unknown;
        }[] | undefined;
    };
    mintStartTime: string | number | bigint | import("ethers").BigNumber;
    mintEndTime: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @public
 */
export declare type FilledSignaturePayload20 = z.output<typeof Signature20PayloadInput>;
/**
 * @public
 */
export declare type PayloadWithUri20 = z.output<typeof Signature20PayloadOutput>;
/**
 * @public
 */
export declare type PayloadToSign20 = z.input<typeof Signature20PayloadInput>;
/**
 * @public
 */
export declare type SignedPayload20 = {
    payload: PayloadWithUri20;
    signature: string;
};
/**
 * @public
 */
export declare type FilledSignaturePayload721 = z.output<typeof Signature721PayloadInput>;
/**
 * @public
 */
export declare type PayloadWithUri721 = z.output<typeof Signature721PayloadOutput>;
/**
 * @public
 */
export declare type PayloadToSign721 = z.input<typeof Signature721PayloadInput>;
/**
 * @public
 */
export declare type SignedPayload721 = {
    payload: PayloadWithUri721;
    signature: string;
};
/**
 * @public
 */
export declare type FilledSignaturePayload1155 = z.output<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export declare type FilledSignaturePayload1155WithTokenId = z.output<typeof Signature1155PayloadInputWithTokenId>;
/**
 * @public
 */
export declare type FilledSignature721WithQuantity = z.output<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export declare type PayloadWithUri1155 = z.output<typeof Signature1155PayloadOutput>;
/**
 * @public
 */
export declare type PayloadWithUri721withQuantity = z.output<typeof Signature721WithQuantityOutput>;
/**
 * @public
 */
export declare type PayloadToSign1155 = z.input<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export declare type PayloadToSign1155WithTokenId = z.input<typeof Signature1155PayloadInputWithTokenId>;
/**
 * @public
 */
export declare type PayloadToSign721withQuantity = z.input<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export declare type SignedPayload1155 = {
    payload: PayloadWithUri1155;
    signature: string;
};
/**
 * @public
 */
export declare type SignedPayload721WithQuantitySignature = {
    payload: PayloadWithUri721withQuantity;
    signature: string;
};
export declare const MintRequest20: {
    name: string;
    type: string;
}[];
export declare const MintRequest721: {
    name: string;
    type: string;
}[];
export declare const MintRequest1155: {
    name: string;
    type: string;
}[];
export declare const MintRequest721withQuantity: {
    name: string;
    type: string;
}[];
//# sourceMappingURL=signature.d.ts.map