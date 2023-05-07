import React from "react";
import Container from "../UI/Container";
import Comment from "../../types/Comment";
import CommentDisplay from "./CommentDisplay";

interface CommentListProps {
	comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = (props) => {
	return (
		<Container>
			<ul>
				{props.comments.map((comment) => (
					<li key={comment.id}>
						<CommentDisplay comment={comment} />
					</li>
				))}
			</ul>
		</Container>
	);
};

export default CommentList;
