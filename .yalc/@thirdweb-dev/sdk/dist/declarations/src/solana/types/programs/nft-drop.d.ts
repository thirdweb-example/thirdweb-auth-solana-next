import { z } from "zod";
/**
 * @internal
 */
export declare const NFTDropInitialConditionsInputSchema: z.ZodObject<{
    itemsAvailable: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    itemsAvailable: string;
}, {
    itemsAvailable: string | number;
}>;
/**
 * @internal
 */
export declare const NFTDropUpdateableConditionsInputSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodOptional<z.ZodString>;
    primarySaleRecipient: z.ZodOptional<z.ZodString>;
    sellerFeeBasisPoints: z.ZodOptional<z.ZodNumber>;
    goLiveDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    primarySaleRecipient?: string | undefined;
    price?: string | undefined;
    currencyAddress?: string | undefined;
    sellerFeeBasisPoints?: number | undefined;
    goLiveDate?: Date | undefined;
}, {
    primarySaleRecipient?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    sellerFeeBasisPoints?: number | undefined;
    goLiveDate?: Date | undefined;
}>;
/**
 * @internal
 */
export declare const NFTDropUpdateableConditionsOutputSchema: z.ZodObject<{
    price: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
    currencyAddress: z.ZodNullable<z.ZodString>;
    primarySaleRecipient: z.ZodString;
    sellerFeeBasisPoints: z.ZodNumber;
    goLiveDate: z.ZodNullable<z.ZodDate>;
    totalAvailableSupply: z.ZodNumber;
    lazyMintedSupply: z.ZodNumber;
    isReadyToClaim: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    primarySaleRecipient: string;
    price: {
        value: string;
        displayValue: string;
    };
    currencyAddress: string | null;
    sellerFeeBasisPoints: number;
    goLiveDate: Date | null;
    totalAvailableSupply: number;
    lazyMintedSupply: number;
    isReadyToClaim: boolean;
}, {
    primarySaleRecipient: string;
    price: {
        value: string;
        displayValue: string;
    };
    currencyAddress: string | null;
    sellerFeeBasisPoints: number;
    goLiveDate: Date | null;
    totalAvailableSupply: number;
    lazyMintedSupply: number;
    isReadyToClaim: boolean;
}>;
/**
 * @internal
 */
export declare const NFTDropContractInputSchema: z.ZodObject<z.extendShape<z.extendShape<{
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
}>, {
    itemsAvailable: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
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
    itemsAvailable: string;
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
    itemsAvailable: string | number;
}>;
/**
 * @public
 */
export declare type NFTDropContractInput = z.input<typeof NFTDropContractInputSchema>;
/**
 * @public
 */
export declare type NFTDropConditionsInput = z.input<typeof NFTDropUpdateableConditionsInputSchema>;
/**
 * @public
 */
export declare type NFTDropConditions = z.output<typeof NFTDropUpdateableConditionsOutputSchema>;
//# sourceMappingURL=nft-drop.d.ts.map