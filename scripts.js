// phase 1

// variables
  // input field for title (text)
  var titleInput = document.querySelector('.website-title');
  console.log("Title input is :", titleInput);
  // input field for url (url)
  var urlInput = document.querySelector('.website-url');
  console.log("URL input is :", urlInput);
  // submit button
  var submitButton = document.querySelector('.enter-btn');
  console.log("Submit button is :", submitButton);
  // toggle button on card/bookmark (read/unread)
  var readButton = document.querySelector('.read-btn');
  console.log("Read button is :", readButton);
  // remove button on card/bookmark
  var deleteButton = document.querySelector('.delete-btn');
  console.log("Delete button is :", deleteButton);
  // array to store cards
  var cards = [];

// objects
  // bookmark/card
    // properties
      // title (string)
      // url (url/string)
      // read or unread (boolean)

    // methods

// other data structures
  // list/array of bookmarks/cards

// event listeners

  // submit button
    // on click, add bookmark/card to list
submitButton.addEventListener('click', createCard);

  // remove button
    // on click, remove bookmark/card from list
deleteButton.addEventListener('click', findCardInArray);

  // read/unread button
    // on click, toggle bookmark/card object read property true/false
    // on click, toggle .read class on or off
readButton.addEventListener('click', changeCardReadUnread);

// functions (some may be object methods)

  // Card constructor/prototype
function Card(title, url) {
  this.title = title;
  this.url = url;
  this.isRead = false;
}

  // create a new card object
function createCard(event){
  var newCard = new Card(titleInput.value, urlInput.value);
  console.log(newCard);
  addCardToList(newCard);
}
  // add bookmark/card to list/array
function addCardToList(newArrayItem){
      // add to end of list/array
  cards.push(newArrayItem);
  addCardToPage(newArrayItem);
}


  // find bookmark/card in list/array
function findCardInArray(){
    // if object title = title of object in list/array
      // found correct object
    // else
      // get next object from array
}

  // remove bookmark/card from list/array
function removeCardFromArray(){
    // delete from list/array
    // clean up array? (remove empty array index)
}


  // toggle read object property
function toggleReadProperty() {
    // get bookmark/card object
    // set read property to true/false
      // if true, set to false
      // else, set to true
}

function toggleReadClass(){
    // toggle read/unread button on cards/bookmarks (remove/add .read class)
  readButton.classList.toggle('read');
  }

function changeCardReadUnread(event){
  toggleReadClass();
    //  toggleReadProperty();
}

// add child
function addCardToPage(cardToAddToPage){
    var newArticle = document.createElement("ARTICLE");
    newArticle.innerHTML = "<article class=\"container\">" +
                              "<p class=\"card-title\">" + cardToAddToPage.title + "</p>" +
                              "<br><hr class=\"line\"/>" +
                              "<p class=\"website-link\">" + cardToAddToPage.url + "</p>" +
                              "<hr class=\"line\"/>" +
                              "<button class=\"read-btn\">Read</button>" +
                              "<button class=\"delete-btn\">Delete</button>" +
                            "</article>";
    var section = document.querySelector('.section-right');
    section.appendChild(newArticle);
}
