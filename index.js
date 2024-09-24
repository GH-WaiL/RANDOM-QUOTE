const quotes = [
    "it does not matter how slowly you go as long as you do not stop",
    "you only live once, but if you do it right, once is enough",
    "nobody care, work hard",
    "one bad chapitre doesn't mean your story is over"
];

const usedIndex = new Set();
const quoteElement = document.getElementById("quote");// recuperer le paragraphe pour utliser

function generateQuote() {
    if (usedIndex.size >= quotes.length) {
        usedIndex.clear(); // pas de boucle infini while
    }

    while (true) {
        const randomid = Math.floor(Math.random() * quotes.length);
        
        if (usedIndex.has(randomid)) continue // t3awad ttla3 l while

        const quote = quotes[randomid];
        quoteElement.innerHTML = quote;
        usedIndex.add(randomid);
        break;
    }

}