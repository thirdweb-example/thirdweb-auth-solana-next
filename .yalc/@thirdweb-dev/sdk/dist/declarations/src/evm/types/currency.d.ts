/**
 * Currency metadata.
 * @public
 */
import { CurrencySchema, CurrencyValueSchema } from "../schema/contracts/common/currency";
import { AmountSchema } from "../schema/shared";
import { z } from "zod";
/**
 * @public
 */
export declare type Currency = z.infer<typeof CurrencySchema>;
export interface NativeToken extends Currency {
    decimals: 18;
    wrapped: {
        address: string;
        name: string;
        symbol: string;
    };
}
/**
 * Currency metadata & value.
 * @public
 */
export declare type CurrencyValue = z.infer<typeof CurrencyValueSchema>;
/**
 * A token holder address and its current balance
 */
export declare type TokenHolderBalance = {
    holder: string;
    balance: CurrencyValue;
};
/**
 * Represents a currency price already formatted. ie. "1" for 1 ether.
 * @public
 */
export declare type Price = z.input<typeof AmountSchema>;
/**
 * Represents a currency amount already formatted. ie. "1" for 1 ether.
 * @public
 */
export declare type Amount = z.input<typeof AmountSchema>;
//# sourceMappingURL=currency.d.ts.map