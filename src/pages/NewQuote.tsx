import React, { useRef, useState } from "react";
import useFetch from "../hooks/use-fetch";
import Heading from "../components/UI/Heading";
import Container from "../components/UI/Container";
import QuoteForm, { QuoteFormRefs } from "../components/Quote/QuoteForm";
import QuoteSubmitted from "../components/Quote/QuoteSubmitted";
import { replaceBadWords } from "../libs/bad-words-filter";

const NewQuote = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");
	const quoteFormRef = useRef<QuoteFormRefs>(null);

	const {
		isLoading,
		data,
		fetchData: insertData,
		fetchError,
	} = useFetch(import.meta.env.VITE_QUOTE_BASE_URL);

	const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setModalOpened(true);

		const data = {
			author: replaceBadWords(quoteFormRef.current?.getAuthor()!),
			quote: replaceBadWords(quoteFormRef.current?.getQuote()!),
		};

		if (!data.author || !data.quote) {
			setSubmitMessage("Please Fill In All Fields");
			return;
		}

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
		setSubmitMessage("Quote Submitted Successfully");
		quoteFormRef.current?.reset();
	};

	return (
		<Container>
			<Heading>Add New Quote</Heading>
			<QuoteForm ref={quoteFormRef} onFormSubmit={formSubmitHandler} />
			{modalOpened && (
				<QuoteSubmitted
					message={submitMessage}
					isSubmitted={!isLoading}
					onQuoteSubmitClose={() => setModalOpened(false)}
				/>
			)}
		</Container>
	);
};

export default NewQuote;
