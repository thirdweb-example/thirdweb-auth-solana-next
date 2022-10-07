import { Signer, WalletAdapter } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
import { z } from "zod";
/**
 * @internal
 */
export declare const MAX_BPS = 10000;
/**
 * @internal
 */
export declare const BasisPointsSchema: z.ZodNumber;
/**
 * @internal
 */
export declare const PercentSchema: z.ZodNumber;
/**
 * @internal
 */
export declare const JsonLiteral: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
/**
 * @internal
 */
export declare type JsonLiteral = number | string | null | boolean;
/**
 * @internal
 */
export declare type Json = JsonLiteral | JsonObject | Json[];
/**
 * @internal
 */
export declare type JsonObject = {
    [key: string]: Json;
};
/**
 * @internal
 */
export declare const OptionalPropertiesInput: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
}, {
    [x: string]: unknown;
}>, "many">, z.ZodObject<{}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
}, {
    [x: string]: unknown;
}>]>>;
/**
 * @internal
 */
export declare const AmountSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
/**
 * @internal
 */
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, number, Date>;
/**
 * @internal
 */
export declare type Amount = z.input<typeof AmountSchema>;
/**
 * @internal
 */
export declare type TransactionResult = {
    signature: string;
};
/**
 * @internal
 */
export declare type WalletSigner = Signer | WalletAdapter;
/**
 * @internal
 */
export declare type AccountType = "nft-collection" | "nft-drop" | "token";
/**
 * @internal
 */
export declare type WalletAccount = {
    type: AccountType;
    address: string;
    name: string;
};
/**
 * @internal
 */
export declare const AddressSchema: z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodType<PublicKey, z.ZodTypeDef, PublicKey>, string, PublicKey>]>;
/**
 * @internal
 */
export declare const FileOrBufferSchema: z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
    data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data?: any;
    name: string;
}, {
    data?: any;
    name: string;
}>]>;
/**
 * @internal
 */
export declare const FileOrBufferOrStringSchema: z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
    data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data?: any;
    name: string;
}, {
    data?: any;
    name: string;
}>]>, z.ZodString]>;
//# sourceMappingURL=common.d.ts.map