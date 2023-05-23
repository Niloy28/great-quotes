import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Prompt } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { isValidQuote, isValidQuoteAuthor } from "../../libs/quote-utils";

interface QuoteFormProps {
	onFormSubmit: React.FormEventHandler;
}

export type QuoteFormRefs = {
	getAuthor: () => string | undefined;
	getQuote: () => string | undefined;
	reset: () => void;
};

const QuoteForm = forwardRef<QuoteFormRefs, QuoteFormProps>((props, ref) => {
	const {
		inputValue: authorInputValue,
		inputChangeHandler: authorInputChanged,
		inputBlurHandler: authorInputBlur,
		inputHasError: authorInputHasError,
		resetInput: resetAuthorInput,
	} = useInput(isValidQuoteAuthor);
	const {
		inputValue: quoteInputValue,
		inputChangeHandler: quoteInputChanged,
		inputBlurHandler: quoteInputBlur,
		inputHasError: quoteInputHasError,
		resetInput: resetQuoteInput,
	} = useInput(isValidQuote);

	useImperativeHandle(ref, () => ({
		getAuthor: () => authorInputValue.trim(),
		getQuote: () => quoteInputValue.trim(),
		reset: () => {
			resetAuthorInput();
			resetQuoteInput();
		},
	}));

	const [isEntering, setIsEntering] = useState(false);

	return (
		<>
			<Prompt
				when={isEntering}
				message={() => "Are you sure you want to leave?"}
			/>
			<form
				className="flex flex-col gap-4"
				onSubmit={props.onFormSubmit}
				onFocus={() => setIsEntering(true)}
			>
				<label htmlFor="quote-author">Author: </label>
				<input
					name="quote-author"
					id="quote-author"
					className={`p-2 md:p-4 text-base md:text-lg ${
						authorInputHasError ? "border-2 border-rose-500" : ""
					}`}
					autoComplete="off"
					type="text"
					value={authorInputValue}
					onChange={authorInputChanged}
					onBlur={authorInputBlur}
				/>

				<label htmlFor="quote-detail">Quote: </label>
				<textarea
					name="quote-detail"
					id="quote-detail"
					className={`p-2 md:p-4 text-xl md:text-2xl resize-none ${
						quoteInputHasError ? "border-2 border-rose-500" : ""
					}`}
					cols={30}
					rows={7}
					value={quoteInputValue}
					onChange={quoteInputChanged}
					onBlur={quoteInputBlur}
				></textarea>

				<button
					className="rounded-full bg-teal-300 hover:bg-teal-400 active:bg-teal-500 md:w-5/12 py-4 px-6 md:p-4 self-end text-black"
					type="submit"
					onClick={() => setIsEntering(false)}
				>
					Add New Quote
				</button>
			</form>
		</>
	);
});

export default QuoteForm;
