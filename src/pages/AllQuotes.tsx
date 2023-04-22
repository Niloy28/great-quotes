import React, { useEffect } from "react";
import useFetch from "../hooks/use-fetch";
import { Grid } from "react-loader-spinner";
import Quote from "../types/Quote";
import QuoteSummary from "../components/QuoteSummary";

const DB_SELECT_URL =
	"https://rpadtplhujhzqhhtyqbe.supabase.co/rest/v1/quotes?select=*";

const AllQuotes = () => {
	const { isLoading, data, fetchData, fetchError } =
		useFetch<Quote[]>(DB_SELECT_URL);

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
			<h2 className="text-center m-4 font-bold text-xl md:text-2xl">
				All Quotes
			</h2>
			{isLoading && (
				<div className="p-4 my-8 flex justify-center">
					<Grid
						height="80"
						width="80"
						color="#4fa94d"
						ariaLabel="grid-loading"
						radius="12.5"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</div>
			)}
			{!isLoading && data && data.map((quote) => <QuoteSummary {...quote} />)}
		</div>
	);
};

export default AllQuotes;
