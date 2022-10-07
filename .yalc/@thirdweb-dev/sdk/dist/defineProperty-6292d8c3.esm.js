import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { z } from 'zod';

const isBrowser = () => typeof window !== "undefined";

const FileOrBufferUnionSchema = isBrowser() ? z.instanceof(File) : z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

/**
 * @internal
 */

const FileOrBufferSchema = z.union([FileOrBufferUnionSchema, z.object({
  data: z.union([FileOrBufferUnionSchema, z.string()]),
  name: z.string()
})]);
/**
 * @internal
 */

const FileOrBufferOrStringSchema = z.union([FileOrBufferSchema, z.string()]);
const MAX_BPS = 10000;
z.union([z.array(z.number()), z.string()]);
const BigNumberSchema = z.union([z.string(), z.number(), z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
}), z.custom(data => {
  return BN.isBN(data);
})]).transform(arg => {
  let str = BN.isBN(arg) ? new BN(arg).toString() : BigNumber.from(arg).toString();
  return BigNumber.from(str);
});
BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = z.union([z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
}), z.custom(data => {
  return BN.isBN(data);
})]).transform(arg => {
  if (BN.isBN(arg)) {
    return new BN(arg).toString();
  }

  return BigNumber.from(arg).toString();
});
const BasisPointsSchema = z.number().max(MAX_BPS, "Cannot exeed 100%").min(0, "Cannot be below 0%");
z.number().max(100, "Cannot exeed 100%").min(0, "Cannot be below 0%");
const HexColor = z.union([z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), z.string().length(0)]);
z.union([z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);
const RawDateSchema = z.date().transform(i => {
  return BigNumber.from(Math.floor(i.getTime() / 1000));
});
/**
 * Default to now
 */

RawDateSchema.default(new Date(0));
/**
 * Default to 10 years from now
 */

RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10));

const PropertiesInput = z.object({}).catchall(z.union([BigNumberTransformSchema, z.unknown()]));
/**
 * @internal
 */

const OptionalPropertiesInput = z.union([z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */

const CommonNFTInput = z.object({
  name: z.union([z.string(), z.number()]).optional(),
  description: z.string().nullable().optional(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional(),
  background_color: HexColor.optional(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(z.union([BigNumberTransformSchema, z.unknown()]));
/**
 * @internal
 */

const NFTInputOrUriSchema = z.union([CommonNFTInput, z.string()]);
/**
 * @internal
 */

const CommonNFTOutput = CommonNFTInput.extend({
  id: z.string(),
  uri: z.string(),
  image: z.string().nullable().optional(),
  external_url: z.string().nullable().optional(),
  animation_url: z.string().nullable().optional()
});
/**
 * @public
 */

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

export { BasisPointsSchema as B, CommonNFTOutput as C, FileOrBufferOrStringSchema as F, NFTInputOrUriSchema as N, _defineProperty as _, CommonNFTInput as a };
