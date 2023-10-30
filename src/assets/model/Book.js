"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_crypto_1 = require("node:crypto");
var libraryDB_1 = require("../database/libraryDB");
var Book = /** @class */ (function () {
    function Book(title, author, publication, genre, description) {
        this.title = title;
        this.author = author;
        this.publication = publication;
        this.genre = genre;
        this.description = description;
        this._id = (0, node_crypto_1.randomUUID)();
        this.register = new Date();
        libraryDB_1.LibraryDB.push(this);
    }
    return Book;
}());
exports.default = Book;
var book1 = new Book('book1', 'eu', 'alguma data', 'qualquer genero', 'qualquer');
console.log(book1);
console.log(libraryDB_1.LibraryDB);
