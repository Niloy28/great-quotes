import React, { useRef } from "react";
import useFetch from "../hooks/use-fetch";
import Heading from "../components/UI/Heading";
import Container from "../components/UI/Container";

const NewQuote = () => {
	const titleRef = useRef<HTMLInputElement>(null);
	const quoteRef = useRef<HTMLTextAreaElement>(null);

	const {
		isLoading,
		data,
		fetchData: insertData,
		fetchError,
	} = useFetch(import.meta.env.VITE_QUOTE_BASE_URL);

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			title: titleRef.current?.value,
			quote: quoteRef.current?.value,
		};

		const requestInit: RequestInit = {
			method: "POST",
			headers: {
				apikey: import.meta.env.VITE_SUPABASE_API_KEY,
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
				"Content-Type": "application/json",
				Prefer: "return=minimal",
			},
			body: JSON.stringify(data),
		};

		insertData(requestInit); // Note: this will throw an error if the request fails.
	};

	return (
		<Container>
			<Heading>Add New Quote</Heading>
			<form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
				<label htmlFor="quote-title">Title: </label>
				<input
					className="p-2 md:p-4 text-base md:text-lg"
					autoComplete="off"
					type="text"
					id="quote-title"
					ref={titleRef}
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
		</Container>
	);
};

export default NewQuote;
