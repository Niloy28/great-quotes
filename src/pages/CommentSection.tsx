import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { replaceBadWords } from "../libs/bad-words-filter";
import Heading from "../components/UI/Heading";
import Container from "../components/UI/Container";
import CommentList from "../components/Comment/CommentList";
import Comment from "../types/Comment";
import CommentForm, {
	CommentFormRefs,
} from "../components/Comment/CommentForm";
import { sortCommentFromNewest } from "../libs/comment-utils";

const CommentSection: React.FC<{ quoteId: string }> = (props) => {
	const [commentOpened, setCommentOpened] = useState(false);
	const [comments, setComments] = useState<Comment[]>([]);
	const commentFormRef = useRef<CommentFormRefs>(null);

	const COMMMENT_GET_URL = `${
		import.meta.env.VITE_COMMENT_BASE_URL
	}?quote_id=eq.${props.quoteId}&select=*`;
	const COMMENT_POST_URL = import.meta.env.VITE_COMMENT_BASE_URL;

	useEffect(() => {
		const fetchComments = async () => {
			const response = await fetch(COMMMENT_GET_URL, {
				method: "GET",
				headers: {
					apikey: import.meta.env.VITE_SUPABASE_API_KEY,
					Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
				},
			});
			let comments: Comment[] = await response.json();
			comments.sort(sortCommentFromNewest);
			setComments(comments);
		};

		fetchComments();
	}, []);

	const commentDisplayHandler = () => {
		setCommentOpened((prevCommentDisplayState) => {
			return !prevCommentDisplayState;
		});
	};

	const postCommentHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const comment = {
			comment: replaceBadWords(commentFormRef.current?.getComment()!),
			commenter: replaceBadWords(commentFormRef.current?.getCommenter()!),
			quote_id: props.quoteId,
			created_at: new Date(),
		};
		commentFormRef.current?.reset();

		// return if comment fields are empty
		if (!comment.comment || !comment.commenter) {
			return;
		}

		setComments((prevState) => {
			return [{ ...comment, id: uuidv4() }, ...prevState];
		});

		await fetch(COMMENT_POST_URL, {
			method: "POST",
			body: JSON.stringify(comment),
			headers: {
				apikey: import.meta.env.VITE_SUPABASE_API_KEY,
				Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
				"Content-Type": "application/json",
				Prefer: "return=minimal",
			},
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
			{commentOpened && (
				<CommentForm onFormSubmit={postCommentHandler} ref={commentFormRef} />
			)}
			{commentOpened && <CommentList comments={comments} />}
		</Container>
	);
};

export default CommentSection;
