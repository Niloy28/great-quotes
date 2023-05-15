import React, { useEffect } from "react";
import useFetch from "../hooks/use-fetch";
import Quote from "../types/Quote";
import QuoteSummary from "../components/Quote/QuoteSummary";
import Heading from "../components/UI/Heading";
import GridLoaderSpinner from "../components/UI/GridLoaderSpinner";
import { sortQuotesFromNewest } from "../libs/quote-utils";

const DB_SELECT_URL = `${import.meta.env.VITE_QUOTE_BASE_URL}?select=*`;

const AllQuotes = () => {
	const { isLoading, data, fetchData } = useFetch<Quote[]>(DB_SELECT_URL);

	useEffect(() => {
		fetchData({
			method: "GET",
			headers: {
				apikey: import.meta.env.VITE_SUPABASE_API_KEY,
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
			},
		});
	}, []);

	return (
		<div>
			<Heading>All Quotes</Heading>
			{isLoading && <GridLoaderSpinner />}
			{!isLoading &&
				data &&
				data
					.sort(sortQuotesFromNewest)
					.map((quote) => <QuoteSummary key={quote.id} {...quote} />)}
		</div>
	);
};

export default AllQuotes;
