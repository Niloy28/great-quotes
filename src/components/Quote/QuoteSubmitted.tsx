import React from "react";
import Center from "../UI/Center";
import Container from "../UI/Container";
import Modal from "../UI/Modal";
import GridLoaderSpinner from "../UI/GridLoaderSpinner";
import Heading from "../UI/Heading";

interface QuoteSubmittedProps {
	message: string;
	onQuoteSubmitClose: React.MouseEventHandler;
	isSubmitted: boolean;
}

const QuoteSubmitted: React.FC<QuoteSubmittedProps> = (props) => {
	return (
		<Modal className="h-full">
			<Center>
				<Container className="bg-slate-50 rounded-md text-center">
					{props.isSubmitted && (
						<>
							<Heading className="text-green-700">{props.message}</Heading>
							<button
								className="bg-green-700 rounded-md px-8 py-4 hover:bg-green-800 active:bg-green-900"
								onClick={props.onQuoteSubmitClose}
							>
								OK
							</button>
						</>
					)}
					{!props.isSubmitted && <GridLoaderSpinner />}
				</Container>
			</Center>
		</Modal>
	);
};

export default QuoteSubmitted;
