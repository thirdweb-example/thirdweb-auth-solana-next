import type { NFTCollection } from "./nft-collection";
import type { NFTDrop } from "./nft-drop";
import type { Program } from "./program";
import type { Token } from "./token";
export declare type ProgramType = NFTCollection["accountType"] | NFTDrop["accountType"] | Token["accountType"] | Program["accountType"];
export declare type PrebuiltProgramMap = {
    ["nft-collection"]: NFTCollection;
    ["nft-drop"]: NFTDrop;
    ["token"]: Token;
};
export declare type PrebuiltProgramType = keyof PrebuiltProgramMap;
export declare type ProgramForPrebuiltProgramType<TProgramType extends PrebuiltProgramType> = PrebuiltProgramMap[TProgramType];
//# sourceMappingURL=types.d.ts.map