const quotes = [
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
];

document.getElementById("new-quote").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
});
