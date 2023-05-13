import Comment from "../types/Comment";
import { MAX_COMMENT_LENGTH } from "./constants";

export const isValidCommenter = (commenter: string) => commenter.length !== 0;

export const isValidComment = (comment: string) =>
	comment.length !== 0 && comment.length <= MAX_COMMENT_LENGTH;

export const sortCommentFromNewest = (a: Comment, b: Comment) => {
	if (a.created_at < b.created_at) {
		return 1;
	}
	if (a.created_at > b.created_at) {
		return -1;
	}
	return 0;
};
