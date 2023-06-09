import React, { useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import Quote from "../types/Quote";
import QuoteDisplay from "../components/Quote/QuoteDisplay";
import GridLoaderSpinner from "../components/UI/GridLoaderSpinner";
import NotFound from "./NotFound";
import CommentSection from "./CommentSection";

const QUOTE_FETCH_BASE_URL = `${import.meta.env.VITE_QUOTE_BASE_URL}?id=eq.`;

const QuoteDetail = () => {
	const params = useParams<{ quoteId: string }>();
	const { isLoading, data, fetchData, fetchError } = useFetch<Quote[]>(
		`${QUOTE_FETCH_BASE_URL}${params.quoteId}`
	);
	const routeMatch = useRouteMatch();

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
			{isLoading && <GridLoaderSpinner />}
			{!isLoading && fetchError && (
				<NotFound statusCode="400" statusText="Quote Not Found" />
			)}
			{!isLoading && data && <QuoteDisplay {...data[0]} />}

			<Route path={routeMatch.url}>
				<CommentSection quoteId={params.quoteId} />
			</Route>
		</div>
	);
};

export default QuoteDetail;
