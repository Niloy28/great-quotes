interface Comment {
	id: string;
	quote_id: string;
	created_at: Date;
	commenter: string;
	comment: string;
}

export default Comment;
