import React, { useRef, forwardRef, useImperativeHandle } from "react";
import useInput from "../../hooks/use-input";
import Avatar from "../../assets/avatar.svg";
import { isValidComment, isValidCommenter } from "../../libs/comment-utils";

interface CommentFormProps {
	onFormSubmit: React.FormEventHandler;
}

export type CommentFormRefs = {
	getCommenter: () => string | undefined;
	getComment: () => string | undefined;
	reset: () => void;
};

const CommentForm = forwardRef<CommentFormRefs, CommentFormProps>(
	(props, ref) => {
		const {
			inputValue: commenterValue,
			inputHasError: commenterHasError,
			inputChangeHandler: commenterChangeHandler,
			inputBlurHandler: commenterBlurHandler,
			resetInput: resetCommenter,
		} = useInput(isValidCommenter);

		const {
			inputValue: commentValue,
			inputHasError: commentHasError,
			inputChangeHandler: commentChangeHandler,
			inputBlurHandler: commentBlurHandler,
			resetInput: resetComment,
		} = useInput(isValidComment);

		useImperativeHandle(ref, () => ({
			getCommenter: () => commenterValue.trim(),
			getComment: () => commentValue.trim(),
			reset: () => {
				resetCommenter();
				resetComment();
			},
		}));

		return (
			<form
				className="flex items-start justify-center"
				onSubmit={props.onFormSubmit}
			>
				<div className="flex">
					<img
						className="m-2"
						src={Avatar}
						width={70}
						height={70}
						alt="Avatar"
					/>
				</div>
				<div className="flex flex-col grow">
					<textarea
						placeholder="Join the discussion"
						className="p-2 m-2 resize-none"
						value={commentValue}
						onBlur={commentBlurHandler}
						onChange={commentChangeHandler}
					/>
					<input
						className="p-2 m-2"
						name="commenter"
						id="commenter"
						autoComplete="off"
						type="text"
						placeholder="Name"
						value={commenterValue}
						onBlur={commenterBlurHandler}
						onChange={commenterChangeHandler}
					/>
					<button
						type="submit"
						className="rounded-md bg-green-500 text-black w-min self-end m-2 px-4 py-2"
					>
						Post
					</button>
				</div>
			</form>
		);
	}
);

export default CommentForm;
