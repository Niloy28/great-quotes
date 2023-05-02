import badWords from "../data/bad-words.json";

export const replaceBadWords = (input: string) => {
	var words = input.split(" ");

	badWords.forEach((badWord) => {
		var index = words.indexOf(badWord);

		if (~index) {
			words[index] = "*".repeat(badWord.length);
		}
	});

	return words.join(" ");
};
