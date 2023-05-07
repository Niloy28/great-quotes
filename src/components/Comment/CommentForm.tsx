import React from "react";
import Avatar from "../../assets/avatar.svg";

const CommentForm = () => {
	return (
		<form className="flex items-start justify-center">
			<div className="flex">
				<img className="m-2" src={Avatar} width={70} height={70} alt="Avatar" />
			</div>
			<div className="flex flex-col grow">
				<textarea
					placeholder="Join the discussion"
					className="p-2 m-2 resize-none"
				/>
				<input
					className="p-2 m-2"
					name="commenter"
					id="commenter"
					autoComplete="off"
					type="text"
					placeholder="Name"
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
};

export default CommentForm;
