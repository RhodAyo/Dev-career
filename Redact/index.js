//const redactBtn = document.querySelector("#redactbtn");

const wordsArray = [];

// wordsArray.push(words);

document.getElementById("redactbtn").addEventListener("click", (e) => {
  // e.preventDefault();
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

  const selectedOption = options.value;
  let regexp = /\dog\b/g;
  if (selectedOption === "asterisk") {
    unscrambledTexts = unscrambledText.value.replace(scramble, "****");
    scrambledText.innerHTML = unscrambledTexts;
  } else if (selectedOption === "question") {
    unscrambledTexts = unscrambledText.value.replace(/\the\b/g, "????");
    scrambledText.innerHTML = unscrambledTexts;
  } else if (selectedOption === "xs") {
    unscrambledTexts = unscrambledText.value.replace(/\the\b/g, "xxxxxx");
    scrambledText.innerHTML = unscrambledTexts;
  } else if (selectedOption === "dash") {
    unscrambledTexts = unscrambledText.value.replace(/\the\b/g, "------");
    scrambledText.innerHTML = unscrambledTexts;
  } else {
    unscrambledTexts = unscrambledText.value;
    scrambledText.innerHTML = unscrambledTexts;
    // Reset the input if no specific option is selected
  }
  // });
};
