let myLibrary = [];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.info = function () {
        return this.title + ' by ' + this.author + ', ' + this.page + ' pages, ' + this.read + ' read yet';
    }
}

let bookhantz = new Book('The Code', 'MHCC32', 2500, 'yes');
let bookcarl = new Book('Master Hentai', 'Cal Donalson Germain', 10000, 'yes')
let bookdaan = new Book('Judlyne is a life ', 'Pierre Kelly', 100000, 'yes')
let bookpika = new Book('Bouzen is a life ', 'PikaHD', 100000000, 'yes')


function addBookToLibrary() {
    myLibrary.push(bookhantz, bookcarl, bookdaan, bookpika)
}

addBookToLibrary()
console.log(myLibrary)

const bookContainer = document.getElementById('book-container');

// Fonction pour ajouter un livre dans le DOM
function addBookToDOM(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('corver-book');

    bookDiv.innerHTML = `
        <div class='title'> 
            <h1>${book.title}</h1>
        </div>
        <div class="container-h4">
            <h4>Author: <span>${book.author}</span></h4>
        </div>
        <div class="container-h4">
            <h4>Page: <span>${book.page}</span></h4>
        </div>
        <div class="container-h4">
            <h4>Read: <span>${book.read}</span></h4>
        </div>
        <div class="container-button">
            <button onclick="removeBook(this)">Remove Book</button>
            <button onclick="changeStatus(this)">Change Status Read</button>
        </div>
    `;
    bookContainer.appendChild(bookDiv);
}

myLibrary.forEach(addBookToDOM);