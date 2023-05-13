import React from "react";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Avatar from "../../assets/avatar.svg";
import Comment from "../../types/Comment";

dayjs.extend(RelativeTime);

interface CommentDisplayProps {
	comment: Comment;
}

const CommentDisplay: React.FC<CommentDisplayProps> = (props) => {
	return (
		<div className="flex gap-2 p-2">
			<div>
				<img src={Avatar} width={50} height={50} alt="Avatar" />
			</div>
			<div>
				<div>{props.comment.commenter}</div>
				<div>{dayjs(props.comment.created_at).fromNow()}</div>
				<div>{props.comment.comment}</div>
			</div>
		</div>
	);
};

export default CommentDisplay;
