import Quote from "../types/Quote";
import { MAX_QUOTE_LENGTH } from "./constants";

export const isValidQuoteAuthor = (author: string) => author.length != 0;

export const isValidQuote = (quote: string) =>
	quote.length != 0 && quote.length <= MAX_QUOTE_LENGTH;

export const sortQuotesFromNewest = (a: Quote, b: Quote) => {
	if (a.created_at < b.created_at) {
		return 1;
	}
	if (a.created_at > b.created_at) {
		return -1;
	}
	return 0;
};
