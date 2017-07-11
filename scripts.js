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

  // section on right for holding cards
  var sectionRight = document.querySelector('.section-right');
  console.log("sectionRight is: ", sectionRight);

  // array of read toggle buttons on card/bookmark
  var readButtons = [];

  // array of delete buttons on cards/bookmarks
  var deleteButtons = [];

  // array to store cards
  var cards = [];


    // event listener: on click, create a card
submitButton.addEventListener('click', createCard);


// functions (some may be object methods later)

  // Card prototype
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
  cards.push(newArrayItem);
  addCardToPage(newArrayItem);
}

  // find bookmark/card in list/array
function findCardInArray(event){
    console.log("findCardInArray");
    // if object title = title of object in list/array
      // found correct object
    // else
      // get next object from array
}

  // remove bookmark/card from list/array
function removeCardFromArray(event){
    // delete from list/array
    // clean up array? (remove empty array index)
    console.log("this is : ", this);
    console.log("this.parentNode is : ", this.parentNode);
    removeCardFromPage(this.parentNode);
}

function removeCardFromPage(cardToBeRemoved){
  console.log("cardToBeRemoved is :", cardToBeRemoved);
  console.log("cardToBeRemoved parent is :", cardToBeRemoved.parentNode);
  console.log("sectionRight is: ", sectionRight);
  console.log("sectionRight children are : ", sectionRight.childNode);
  sectionRight.removeChild(cardToBeRemoved);
}

  // toggle read object property
function toggleReadProperty() {
    // get bookmark/card object
    // set read property to true/false
      // if true, set to false
      // else, set to true
}

function toggleReadClass(buttonToToggleClass){
    // toggle read/unread button on cards/bookmarks (remove/add .read class)
  //  console.log("this is: ",this);
  buttonToToggleClass.classList.toggle('read');
  }

function changeCardReadUnread(event){
//  console.log("this is: ", this);
  toggleReadClass(this);
    //  toggleReadProperty();
}

// add child article element to section-right element
function addCardToPage(cardToAddToPage){
    var newArticle = document.createElement("ARTICLE");
    newArticle.className = "container"
    newArticle.innerHTML =    "<p class=\"card-title\">" + cardToAddToPage.title + "</p>" +
                              "<br><hr class=\"line\"/>" +
                              "<p class=\"website-link\">" + cardToAddToPage.url + "</p>" +
                              "<hr class=\"line\"/>" +
                              "<button class=\"read-btn\">Read</button>" +
                              "<button class=\"delete-btn\">Delete</button>";
    sectionRight.appendChild(newArticle);
    console.log("sectionRight new child is: ", sectionRight.childNode);
    console.log("newArticle parent is: ", newArticle.parentNode);

    addEventListenerToReadButton();
    addEventListenerToDeleteButton();

}

function addEventListenerToDeleteButton() {
  deleteButtons = document.querySelectorAll('.delete-btn');
  console.log("deleteButtons is: ", deleteButtons);
  deleteButtons[deleteButtons.length-1].addEventListener('click', removeCardFromArray);
  console.log("deleteButtons[deleteButtons.length-1]: ", deleteButtons[deleteButtons.length-1]);
}

function addEventListenerToReadButton() {
  readButtons = document.querySelectorAll('.read-btn');
  console.log("readButtons.length is: ", readButtons.length);
  console.log("readButtons is: ", readButtons);
  readButtons[readButtons.length-1].addEventListener('click', changeCardReadUnread);
  console.log("readButtons[readButtons.length-1]: ", readButtons[readButtons.length-1]);
}
