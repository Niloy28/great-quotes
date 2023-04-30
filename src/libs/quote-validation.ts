import { MAX_QUOTE_LENGTH } from "./constants";

export const isValidQuoteAuthor = (author: string) => author.length != 0;

export const isValidQuote = (quote: string) =>
	quote.length != 0 && quote.length <= MAX_QUOTE_LENGTH;
