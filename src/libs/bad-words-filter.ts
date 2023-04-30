import badWords from "../data/bad-words.json";

export const replaceBadWords = (input: string) => {
	badWords.forEach((badWord) => {
		input = input.replace(badWord, "*".repeat(badWord.length));
	});

	return input;
};
