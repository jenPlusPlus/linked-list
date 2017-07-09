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
submitButton.addEventListener('click', addCardToList);

  // remove button
    // on click, remove bookmark/card from list
deleteButton.addEventListener('click', findCardInArray);

  // read/unread button
    // on click, toggle bookmark/card object read property true/false
    // on click, toggle .read class on or off
readButton.addEventListener('click', changeCardReadUnread);

// functions (some may be object methods)

  // create Card 
function Card(title, url, isRead) {
  this.title = title;
  this.url = url;
  this.isRead = isRead;
}

  // add bookmark/card to list/array
function addCardToList(){
    // get bookmark/card object
      // add to end of list/array
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

function toggleReadButton(){
    // toggle read/unread button on cards/bookmarks (remove/add .read class)
    readButton.classList.toggle('read');
  }

function changeCardReadUnread(event){
  //    event.preventDefault();
      toggleReadButton();
    //  toggleReadProperty();
    //  toggleReadButton();
    // change bookmark/card read/unread
    // toggle read object property
}

  // toggle read/unread button on cards/bookmarks (remove/add .read class)
function removeAddReadClass() {
    // get bookmark/card object read property (true/false)
      // add/remove (toggle) .read class based on read property (true/false)
}
