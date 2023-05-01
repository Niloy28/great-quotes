import badWords from "../data/bad-words.json";

export const replaceBadWords = (input: string) => {
	badWords.forEach((badWord) => {
		input = input.toLowerCase().replace(badWord, "*".repeat(badWord.length));
	});

	return input;
};
