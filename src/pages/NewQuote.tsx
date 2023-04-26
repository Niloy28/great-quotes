import React, { useRef } from "react";
import useFetch from "../hooks/use-fetch";
import Heading from "../components/UI/Heading";
import Container from "../components/UI/Container";
import QuoteForm, { QuoteFormRefs } from "../components/QuoteForm";

const NewQuote = () => {
	const quoteFormRef = useRef<QuoteFormRefs>(null);

	const {
		isLoading,
		data,
		fetchData: insertData,
		fetchError,
	} = useFetch(import.meta.env.VITE_QUOTE_BASE_URL);

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			author: quoteFormRef.current?.getAuthor(),
			quote: quoteFormRef.current?.getQuote(),
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
			<QuoteForm ref={quoteFormRef} onFormSubmit={formSubmitHandler} />
		</Container>
	);
};

export default NewQuote;
