import React, { useState } from "react";
import Heading from "../components/UI/Heading";
import Container from "../components/UI/Container";
import CommentList from "../components/Comment/CommentList";
import Comment from "../types/Comment";
import CommentForm from "../components/Comment/CommentForm";

const DUMMY_COMMENTS: Comment[] = [
	{
		id: "1",
		timestamp: new Date(),
		comment: "great bani",
		commenter: "me",
	},
	{
		id: "2",
		timestamp: new Date(),
		comment: "shei bani",
		commenter: "ami",
	},
	{
		id: "3",
		timestamp: new Date(),
		comment: "osthir bani",
		commenter: "leme",
	},
];

const CommentSection = () => {
	const [commentOpened, setCommentOpened] = useState(false);

	const commentDisplayHandler = () => {
		setCommentOpened((prevCommentDisplayState) => {
			return !prevCommentDisplayState;
		});
	};

	return (
		<Container>
			<div className="flex justify-between items-start">
				<Heading className="text-start">Comments</Heading>
				<button
					className="rounded bg-green-400 hover:bg-green-500 active:bg-green-600 mx-4 md:mx-8 mt-2 md:mt-4 px-4 md:px-8 py-1 text-black md:py-2"
					onClick={commentDisplayHandler}
					type="button"
				>
					{!commentOpened && <>Show Comments</>}
					{commentOpened && <>Hide Comments</>}
				</button>
			</div>
			<hr />
			{commentOpened && <CommentForm />}
			{commentOpened && <CommentList comments={DUMMY_COMMENTS} />}
		</Container>
	);
};

export default CommentSection;
