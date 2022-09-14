
// add new book to library btn
const addNewBookToLibrary = document.querySelector('#addNewBookModal');
// book modal id
const bookModal = document.querySelector('#add-book-modal');
// close modal button
const closeBookModalBtn = document.querySelector('.close-modal');

// add book btn in modal
const addNewBookBtnFromModal = document.querySelector('.add-book-btn'); 

// book information input field
const bookInfoInputField = document.querySelectorAll('.form-input');

// book information input fields
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');
const bookImg = document.querySelector('#bookImg');
const bookStatus = document.querySelector('#bookReadingStatus');

// library array to store books
let myLibrary = [
  {
    id: 1,
    title: 'Book Title',
    author: 'Author',
    pages: 223,
    img: 'https://api.time.com/wp-content/uploads/2014/09/01-best-childrens-books-where-the-wild-things-are1.jpg?quality=85&w=624',
    readingStatus: false
  }
];

//----------------------------------------------------------------------------//
//----------------------DISPLAY BOOKS IN LIBRARY -----------------------------//
//----------------------------------------------------------------------------//

// display already present books in library
displayBookInfo();

// display already present books in library on page load
function displayBookInfo () {

  // get container in which we will display all books
  const bookListContainer = document.querySelector('.book-list-container');

  // no book in library empty message
  const noBookMessage = document.querySelector('.no-data-found-container');
  
  // if library is empty, show empty library message
  if(myLibrary.length === 0) {
    noBookMessage.classList.remove('hide');
    noBookMessage.classList.add('show');
  }
  // if library is not empty, show the books present in library
  else if(myLibrary.length !== 0) {
    
    if(noBookMessage.classList.contains('show')) {
      noBookMessage.classList.remove('show');
      noBookMessage.classList.add('hide');
    }

    // empty out the book container
    bookListContainer.innerHTML = '';

    // variable to save book card to display
    let bookCard = '';

    // loop through the library array and get each book information
    for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {
      
      let readingStatusInfo;
      // if reading status of book is true i.e. user has read it
      if(myLibrary[bookNum].readingStatus === true) {
        readingStatusInfo = `
          <span class="status-read btn-read-status" data-id="${myLibrary[bookNum].id}">
            <i class="fa-solid fa-circle btn-read-status"></i>
            Read
          </span>
        `;
      }
      // if reading status of book is false i.e. user has not read it
      else if(myLibrary[bookNum].readingStatus === false) {
        readingStatusInfo = `
          <span class="status-not-read btn-read-status" data-id="${myLibrary[bookNum].id}">
            <i class="fa-regular fa-circle btn-read-status"></i>
            Un-Read
          </span>
        `;
      }

      bookCard += `
        <div class="book-card row flex-direction-col" data-id=${myLibrary[bookNum].id}>
          <div class="row flex-direction-col">
            <div class="book-img-container">
              <img class="book-img"
                src="${myLibrary[bookNum].img}"
                alt="book cover">
            </div>
            <div class="book-info">
              <h2 class="book-title">${myLibrary[bookNum].title}</h2>
              <p class="book-author">By: ${myLibrary[bookNum].author}</p>
              <p class="book-pages">Total Pages: ${myLibrary[bookNum].pages}</p>
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-delete-book">
              <i class="fa-regular fa-trash-can btn-delete-book"></i>
            </button>
            <button type="button" class="btn btn-read-status">
              ${readingStatusInfo}
            </button>
          </div>
        </div>
      `;
    }

    // show all book cards in book information container 
    bookListContainer.innerHTML = bookCard;
  }
}

//----------------------------------------------------------------------------//
//----------------------DISPLAY BOOKS IN LIBRARY -----------------------------//
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
//----------------------DISPLAY BOOKS IN LIBRARY -----------------------------//
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
//----------------------ADD BOOK IN LIBRARY ----------------------------------//
//----------------------------------------------------------------------------//

// add new book on button click
addNewBookBtnFromModal.addEventListener('click', () => {
  checkBookFieldsEntered();
})

// check if any required book information input field is empty
function checkBookFieldsEntered() {
  
  if(bookTitle.value === '') { // book title is empty
    bookTitle.style.border = '2px solid red';
  }
  else if(bookAuthor.value === '') { // book author is empty
    bookAuthor.style.border = '2px solid red';
  }
  else if(bookPages.value === '') { // book page is empty
    bookPages.style.border = '2px solid red';
  }
  else {
    // add newly added book to library 
    addBookToLibrary();
  }
}

function addBookToLibrary() {
  
  // get current library length
  const librarySize = myLibrary.length;
  // variable to store book id
  let bookId;
  // if library is empty, make current book id 1, else get the last book id in current library array
  librarySize === 0 ? bookId = 1 : bookId = myLibrary[librarySize - 1].id + 1;

  // make a book object with entered book information
  let newBook = new Book(bookId, bookTitle.value, bookAuthor.value, bookPages.value, bookImg.value, JSON.parse(bookStatus.value))

  // add new book to library
  myLibrary.push(newBook);

  // display all books on page
  displayBookInfo();
  
  hideModal(); // hide modal
}

// book constructor
function Book(id, title, author, pages, img, readingStatus) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.img = img;
  this.readingStatus = readingStatus;
}

// if input field is clicked and its border is red, then make its border light gray
bookInfoInputField.forEach(input => {
  input.addEventListener('change', (e) => {
    if(e.target.style.border === '2px solid red') {
      e.target.style.border = '1px solid rgb(157, 155, 155)';
    }
  })
})

// show modal
addNewBookToLibrary.addEventListener('click', () => {
  showModal();
})

// hide modal
closeBookModalBtn.addEventListener('click', () => {
  hideModal();
})

// show modal
function showModal() {
  bookModal.classList.remove('hide');
  bookModal.classList.add('show');
}

// hide modal
function hideModal() {
  bookModal.classList.remove('show');
  bookModal.classList.add('hide');
}

//--------------------------------------------------------------------------//
//-------------------- ADD BOOK IN LIBRARY ---------------------------------//
//--------------------------------------------------------------------------//