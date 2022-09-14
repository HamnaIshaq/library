
// library array to store books
let myLibrary = [];

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

