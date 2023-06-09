import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

import Container from "./components/UI/Container";
import Layout from "./components/UI/Layout";

function App() {
	return (
		<Layout>
			<Container>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/quotes" />
					</Route>

					<Route path="/quotes" exact>
						<AllQuotes />
					</Route>

					<Route path="/quotes/new-quote" exact>
						<NewQuote />
					</Route>

					<Route path="/quotes/:quoteId" exact>
						<QuoteDetail />
					</Route>

					<Route path="*">
						<NotFound statusCode="404" statusText="Page Not Found" />
					</Route>
				</Switch>
			</Container>
		</Layout>
	);
}

export default App;
