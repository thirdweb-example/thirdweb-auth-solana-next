import { z } from "zod";
/**
 * @internal
 */
export declare const CommonContractSchema: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CommonContractOutputSchema: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: unknown;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CreatorInputSchema: z.ZodObject<{
    address: z.ZodString;
    sharePercentage: z.ZodNumber;
    verified: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    address: string;
    sharePercentage: number;
    verified: boolean;
}, {
    verified?: boolean | undefined;
    address: string;
    sharePercentage: number;
}>;
/**
 * @internal
 */
export declare const NFTCollectionMetadataInputSchema: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    creators: z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        sharePercentage: z.ZodNumber;
        verified: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharePercentage: number;
        verified: boolean;
    }, {
        verified?: boolean | undefined;
        address: string;
        sharePercentage: number;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    creators: {
        address: string;
        sharePercentage: number;
        verified: boolean;
    }[];
}, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    creators?: {
        verified?: boolean | undefined;
        address: string;
        sharePercentage: number;
    }[] | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare type NFTCollectionMetadataInput = z.input<typeof NFTCollectionMetadataInputSchema>;
/**
 * @internal
 */
export declare const TokenMetadataInputSchema: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        data?: any;
        name: string;
    }, {
        data?: any;
        name: string;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    decimals: z.ZodDefault<z.ZodNumber>;
    initialSupply: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, "strip", z.ZodTypeAny, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    decimals: number;
    initialSupply: string;
}, {
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    decimals?: number | undefined;
    external_link?: string | undefined;
    name: string;
    initialSupply: string | number;
}>;
/**
 * @public
 */
export declare type TokenMetadataInput = z.input<typeof TokenMetadataInputSchema>;
/**
 * @public
 */
export declare type CreatorInput = z.input<typeof CreatorInputSchema>;
/**
 * @internal
 */
export declare type RegisteredProgram = {
    deployer: string;
    programAddress: string;
    programName: string;
    programType: string;
    visible: boolean;
};
//# sourceMappingURL=index.d.ts.map