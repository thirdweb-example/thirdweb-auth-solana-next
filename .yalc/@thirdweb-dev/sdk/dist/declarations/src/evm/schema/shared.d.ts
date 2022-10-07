import { BigNumber, CallOverrides } from "ethers";
import { z } from "zod";
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
export declare const MAX_BPS = 10000;
export declare const BytesLikeSchema: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
export declare const BigNumberSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
export declare const BigNumberishSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>;
export declare const BigNumberTransformSchema: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, string, bigint | BigNumber>;
export declare const BasisPointsSchema: z.ZodNumber;
export declare const PercentSchema: z.ZodNumber;
export declare const AddressSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const AmountSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, BigNumber, Date>;
/**
 * Default to now
 */
export declare const StartDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
/**
 * Default to 10 years from now
 */
export declare const EndDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
export declare const CallOverrideSchema: z.ZodType<CallOverrides>;
//# sourceMappingURL=shared.d.ts.map