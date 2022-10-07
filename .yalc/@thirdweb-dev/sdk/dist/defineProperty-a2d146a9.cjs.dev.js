'use strict';

var BN = require('bn.js');
var ethers = require('ethers');
var zod = require('zod');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefault(BN);

const isBrowser = () => typeof window !== "undefined";

const FileOrBufferUnionSchema = isBrowser() ? zod.z.instanceof(File) : zod.z.instanceof(Buffer); // @fixme, this is a hack to make browser happy for now

/**
 * @internal
 */

const FileOrBufferSchema = zod.z.union([FileOrBufferUnionSchema, zod.z.object({
  data: zod.z.union([FileOrBufferUnionSchema, zod.z.string()]),
  name: zod.z.string()
})]);
/**
 * @internal
 */

const FileOrBufferOrStringSchema = zod.z.union([FileOrBufferSchema, zod.z.string()]);
const MAX_BPS = 10000;
zod.z.union([zod.z.array(zod.z.number()), zod.z.string()]);
const BigNumberSchema = zod.z.union([zod.z.string(), zod.z.number(), zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
}), zod.z.custom(data => {
  return BN__default["default"].isBN(data);
})]).transform(arg => {
  let str = BN__default["default"].isBN(arg) ? new BN__default["default"](arg).toString() : ethers.BigNumber.from(arg).toString();
  return ethers.BigNumber.from(str);
});
BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = zod.z.union([zod.z.bigint(), zod.z.custom(data => {
  return ethers.BigNumber.isBigNumber(data);
}), zod.z.custom(data => {
  return BN__default["default"].isBN(data);
})]).transform(arg => {
  if (BN__default["default"].isBN(arg)) {
    return new BN__default["default"](arg).toString();
  }

  return ethers.BigNumber.from(arg).toString();
});
const BasisPointsSchema = zod.z.number().max(MAX_BPS, "Cannot exeed 100%").min(0, "Cannot be below 0%");
zod.z.number().max(100, "Cannot exeed 100%").min(0, "Cannot be below 0%");
const HexColor = zod.z.union([zod.z.string().regex(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color"), zod.z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid hex color").transform(val => val.replace("#", "")), zod.z.string().length(0)]);
zod.z.union([zod.z.string().regex(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/, "Invalid amount"), zod.z.number().min(0, "Amount cannot be negative")]).transform(arg => typeof arg === "number" ? arg.toString() : arg);
const RawDateSchema = zod.z.date().transform(i => {
  return ethers.BigNumber.from(Math.floor(i.getTime() / 1000));
});
/**
 * Default to now
 */

RawDateSchema.default(new Date(0));
/**
 * Default to 10 years from now
 */

RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10));

const PropertiesInput = zod.z.object({}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));
/**
 * @internal
 */

const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */

const CommonNFTInput = zod.z.object({
  name: zod.z.union([zod.z.string(), zod.z.number()]).optional(),
  description: zod.z.string().nullable().optional(),
  image: FileOrBufferOrStringSchema.nullable().optional(),
  external_url: FileOrBufferOrStringSchema.nullable().optional(),
  animation_url: FileOrBufferOrStringSchema.optional(),
  background_color: HexColor.optional(),
  properties: OptionalPropertiesInput,
  attributes: OptionalPropertiesInput
}).catchall(zod.z.union([BigNumberTransformSchema, zod.z.unknown()]));
/**
 * @internal
 */

const NFTInputOrUriSchema = zod.z.union([CommonNFTInput, zod.z.string()]);
/**
 * @internal
 */

const CommonNFTOutput = CommonNFTInput.extend({
  id: zod.z.string(),
  uri: zod.z.string(),
  image: zod.z.string().nullable().optional(),
  external_url: zod.z.string().nullable().optional(),
  animation_url: zod.z.string().nullable().optional()
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

exports.BasisPointsSchema = BasisPointsSchema;
exports.CommonNFTInput = CommonNFTInput;
exports.CommonNFTOutput = CommonNFTOutput;
exports.FileOrBufferOrStringSchema = FileOrBufferOrStringSchema;
exports.NFTInputOrUriSchema = NFTInputOrUriSchema;
exports._defineProperty = _defineProperty;
