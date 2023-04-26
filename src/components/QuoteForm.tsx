import React, {
	FormEventHandler,
	RefObject,
	forwardRef,
	useRef,
	useImperativeHandle,
} from "react";

interface QuoteFormProps {
	onFormSubmit: FormEventHandler;
}

export type QuoteFormRefs = {
	getAuthor: () => string | undefined;
	getQuote: () => string | undefined;
};

const QuoteForm = forwardRef<QuoteFormRefs, QuoteFormProps>((props, ref) => {
	const authorRef = useRef<HTMLInputElement>(null);
	const quoteRef = useRef<HTMLTextAreaElement>(null);

	useImperativeHandle(ref, () => ({
		getAuthor: () => authorRef.current?.value,
		getQuote: () => quoteRef.current?.value,
	}));

	return (
		<form className="flex flex-col gap-4" onSubmit={props.onFormSubmit}>
			<label htmlFor="quote-author">Author: </label>
			<input
				name="quote-author"
				id="quote-author"
				className="p-2 md:p-4 text-base md:text-lg"
				autoComplete="off"
				type="text"
				ref={authorRef}
			/>

			<label htmlFor="quote-detail">Quote: </label>
			<textarea
				name="quote-detail"
				id="quote-detail"
				className="p-2 md:p-4 text-xl md:text-2xl resize-none"
				cols={30}
				rows={7}
				ref={quoteRef}
			></textarea>

			<button
				className="rounded-full bg-teal-300 hover:bg-teal-400 active:bg-teal-500 md:w-5/12 py-4 px-6 md:p-4 self-end text-black"
				type="submit"
			>
				Add New Quote
			</button>
		</form>
	);
});

export default QuoteForm;
