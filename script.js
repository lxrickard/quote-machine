const colors = ['#136185', '#8e8baf', '#93c09e', '#115473', '#ffae42'];
const text = document.getElementById('text');
const author = document.getElementById('author');

function getQuote() {fetch('https://type.fit/api/quotes')
    .then((response) => response.json() )
    .then((data) => {
        let random = Math.floor(Math.random() * 1643);
        let colorNumber = Math.floor(Math.random() * 5);
        document.documentElement.style.setProperty('--main-bg-color', colors[colorNumber]);
        text.append(data[random].text);
        author.append(data[random].author);
    });
}
getQuote();

const button = document.getElementById('btn');

function changeQuote(text, author, count) {
    count++;
    let currentText = text;
    let currentAuthor = author;
    getQuote();
    text.replace(currentText, "");
    author.replace(currentAuthor, "");
    document.documentElement.style.setProperty('--main-bg-color', colors[count]);
    console.log(count);
    if (count === 4) {
        count - 5;
    }
};
