const wordsArray = [];
document.getElementById("redactbtn").addEventListener("click", (e) => {
  wordToRedact();
});

const wordToRedact = () => {
  let wordCount = 0;
  let totalCharacters = 0;

  const unscrambledText = document.querySelector("#unscrambled");
  const wordtoscramble = document.getElementById("wordtoscramble");
  const options = document.getElementById("options");
  const scrambledText = document.querySelector("#scrambled");
  const show = document.querySelector(".show");
  const showChar = document.querySelector(".showChar");
  // unscrambledText.addEventListener("input", function () {
  const words = unscrambledText.value;
  const test = words.split(/\s+/).filter((word) => word.trim() !== "");
  wordCount += test.length;
  show.innerHTML = "Number of total words in original text: " + wordCount;

  test.forEach((element) => {
    totalCharacters += element.length;
  });

  showChar.innerHTML =
    "Number of total characters in original text: " + totalCharacters;

  // let y = wordsArray.push(test);
  // console.log(wordCount);
  // redactBtn.addEventListener("click", function () {
  //   console.log(test);
  // });
  // });

  // wordtoscramble.addEventListener("input", function () {
  const scramble = wordtoscramble.value;
  const rr = scramble.split(/\s+/).filter((word) => word.trim() !== "");
  console.log(rr);

  rr.forEach((word) => {
    if (words.includes(word)) {
      let regexWord = new RegExp(word, "gi");

      const selectedOption = options.value;
      if (selectedOption === "asterisk") {
        unscrambledTexts = unscrambledText.value.replace(regexWord, "****");
        scrambledText.innerHTML = unscrambledTexts;
      } else if (selectedOption === "question") {
        unscrambledTexts = unscrambledText.value.replace(regexWord, "????");
        scrambledText.innerHTML = unscrambledTexts;
      } else if (selectedOption === "xs") {
        unscrambledTexts = unscrambledText.value.replace(regexWord, "xxxx");
        scrambledText.innerHTML = unscrambledTexts;
      } else if (selectedOption === "dash") {
        unscrambledTexts = unscrambledText.value.replace(regexWord, "----");
        scrambledText.innerHTML = unscrambledTexts;
      } else {
        unscrambledTexts = unscrambledText.value;
        scrambledText.innerHTML = unscrambledTexts;
      }
    }
  });

  // });
};
