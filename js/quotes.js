const quotes = [
    {
        quote: "Life is a series of building testing changing and iterating",
        author: "Lauren Mosenthal",
    },
    {
        quote: "Nothing is free in the world. If it looks like free, you are the price",
        author: "Unknown",
    },
    {
        quote: "Whether you think it's possible or you think it's impossible, you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Originally, good or bad is up to you to think.",
        author: "Shakespeare",
    },
    {
        quote: "It ain't over till it's over",
        author: "Yogi Berra",
    },
    {
        quote: "Everyone is hard. But it's even harder when no one knows that I'm having a hard time.",
        author: "Siheun Roh",
    },
    {
        quote: "If you are disappointed in something, you will learn as you disappoint. Take that learning with you. Don't worry about what others say.",
        author: "Kim Yeon-kyung",
    },
    {
        quote: "People do not believe because they are trustworthy. Because if they don't believe, they have no place to lean.",
        author: "Lee Jung-jae, in a squid game"
    },
    {
        quote: "Despair is a disease that leads to death. If you give up easily in despair, it will hurt your heart",
        author: "Unknown",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;