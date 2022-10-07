import type { DelayedReveal, IDropSinglePhase, IERC1155, IERC1155Metadata, IERC1155Supply, IERC20, IERC20Metadata, IERC721, IERC721Metadata, ISignatureMintERC1155, ISignatureMintERC20, ISignatureMintERC721, LazyMint, DropSinglePhase1155 } from "@thirdweb-dev/contracts-js";
export declare type BaseERC20 = IERC20 & IERC20Metadata;
export declare type BaseERC721 = IERC721 & IERC721Metadata;
export declare type BaseERC1155 = IERC1155 & IERC1155Metadata & IERC1155Supply;
export declare type BaseDropERC20 = BaseERC20 & IDropSinglePhase;
export declare type BaseDropERC721 = BaseERC721 & LazyMint;
export declare type BaseDropERC1155 = BaseERC1155 & LazyMint;
export declare type BaseDelayedRevealERC721 = BaseDropERC721 & DelayedReveal;
export declare type BaseClaimConditionERC721 = BaseDropERC721 & IDropSinglePhase;
export declare type BaseClaimConditionERC1155 = BaseDropERC1155 & DropSinglePhase1155;
export declare type BaseSignatureMintERC721 = BaseERC721 & ISignatureMintERC721;
export declare type BaseSignatureMintERC20 = BaseERC20 & ISignatureMintERC20;
export declare type BaseSignatureMintERC1155 = BaseERC1155 & ISignatureMintERC1155;
export declare type BaseDelayedRevealERC1155 = BaseDropERC1155 & DelayedReveal;
//# sourceMappingURL=eips.d.ts.map