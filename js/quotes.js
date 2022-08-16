const quotes = [
  {
    quote: "Better to do something imperfectly than to do nothing flawlessly.",
    author: "Robert H. Schuller",
  },
  {
    quote: "No pain, No gain",
    author: "Benjamin Franklin",
  },
  {
    quote: "The die is cast.",
    author: "Julius Caesar",
  },
  {
    quote: "When they go low, we go high.",
    author: "Michelle Obama",
  },
  {
    quote: "I was never less alone than when by myself.",
    author: "Edward Gibbon",
  },
  {
    quote: "A friend is a second myself.",
    author: "A",
  },
  {
    quote: "Appearances are deceptive.",
    author: "B",
  },
  {
    quote: "Courage is very important when it comes to anything.",
    author: "C",
  },
  {
    quote: "Be brave.",
    author: "D",
  },
  {
    quote: "Every cloud has a silver lining.",
    author: "E",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
