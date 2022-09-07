let myLibrary = [
  {
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    pages: 56,
    img: "https://api.time.com/wp-content/uploads/2014/09/01-best-childrens-books-where-the-wild-things-are1.jpg?quality=85&w=624"
  },
  {
    title: "The Snowy Day",
    author: "Ezra Jack Keats",
    pages: 100,
    img: "https://api.time.com/wp-content/uploads/2014/09/01-best-childrens-books-where-the-wild-things-are1.jpg?quality=85&w=624"
  }
];

// display already present books in library on page load
(function displayBookInfo () {
  
  // get container in which we will display all books
  const bookListContainer = document.querySelector('.book-list-container');

  // variable to save book card to display
  let bookCard = '';

  // loop through the library array and get each book information
  for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {
    bookCard += `
      <div class="book-card">
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
          <button type="button" class="btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
          <button type="button" class="btn btn-read-status">
            <span class="status-read">
              <i class="fa-regular fa-circle"></i>
              Un-Read
            </span>
            
            <span class="status-not-read status-hide">
              <i class="fa-solid fa-circle"></i>
              Read
            </span>
            

          </button>
        </div>
      </div>
    `;
  }

  // show all book cards in book information container 
  bookListContainer.innerHTML = bookCard;

})()