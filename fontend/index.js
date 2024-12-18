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
    myLibrary.push(bookhantz,bookcarl,bookdaan, bookpika)
}

addBookToLibrary()
console.log(myLibrary)