// phase 2

// variables
  // input field for title (text)
  var titleInput = document.querySelector('.website-title');

  // input field for url (url)
  var urlInput = document.querySelector('.website-url');

  // submit button
  var submitButton = document.querySelector('.enter-btn');

  // section on right for holding cards
  var sectionRight = document.querySelector('.section-right');

  // array to store cards
  var cards = [];

  // array of read toggle buttons on card/bookmark
  var readButtons = [];

  // array of delete buttons on cards/bookmarks
  var deleteButtons = [];

  // number of cards
  var numCards = 0;

  //number of read
  var numRead = 0;

    // event listener: on click, create a card
submitButton.addEventListener('click', errorIfEmpty);


// functions

function errorIfEmpty(event){
  event.preventDefault();
  console.log("running errorIfEmpty");
  if(titleInput.value == "" && urlInput.value == "") {
    alert("Please enter a website title and url.");
  }
  else if(titleInput.value == ""){
    alert("Please enter a website title.");
  }
  else if(urlInput.value == ""){
    alert("Please enter a website url.");
  }
  else {
    createCard();
  }
}

// Create 1
// create a new card object
function createCard(){
  event.preventDefault();

  var newCard = new Card(titleInput.value, urlInput.value);
  addCardToList(newCard);
  increaseCardCounter();
}

  // create 2
  // Card constructor
function Card(title, url) {
  this.title = title;
  this.url = url;
  this.isRead = false;
}

  // Create 3
  // add bookmark/card to list/array
function addCardToList(newArrayItem){
  cards.push(newArrayItem);
  console.log("addCardToList: length of array is: ", cards.length);
  addCardToPage(newArrayItem);
}

// create 4
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
    addEventListenerToReadButton();
    addEventListenerToDeleteButton();
}

// create 5
function addEventListenerToReadButton() {
readButtons = document.querySelectorAll('.read-btn');
readButtons[readButtons.length-1].addEventListener('click', changeCardReadUnread);
}

// create 5
function addEventListenerToDeleteButton() {
deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons[deleteButtons.length-1].addEventListener('click', deleteCard);
}

// read 1
function changeCardReadUnread(event){
  event.preventDefault();
  toggleReadClass(this);
  toggleReadProperty(findCardInArray(this.parentNode));
}

// read 2
// toggle read/unread button on cards/bookmarks (remove/add .read class)
function toggleReadClass(buttonToToggleClass){
  buttonToToggleClass.classList.toggle('read');
  }

  // read 3
  // toggle read object property
function toggleReadProperty(indexOfCardToChangeReadProperty) {
    if(cards[indexOfCardToChangeReadProperty].isRead == false){
      cards[indexOfCardToChangeReadProperty].isRead = true;
      increaseReadCounter();
    }
    else {
      cards[indexOfCardToChangeReadProperty].isRead = false;
      decreaseReadCounter();
    }
}

  // delete 1
function deleteCard(event){
  event.preventDefault();
  removeCardFromArray(findCardInArray(this.parentNode));
  removeCardFromPage(this.parentNode);
  decreaseCardCounter();
}

// delete 2
// remove card from page (remove child node)
function removeCardFromPage(cardToBeRemoved){
 sectionRight.removeChild(cardToBeRemoved);
}

  // delete 3
  // remove bookmark/card from list/array
function removeCardFromArray(index){
    console.log("removeCardFromArray (before remove): length of array is: ", cards.length);
    cards.splice(index, 1);
    console.log("removeCardFromArray (after remove): length of array is: ", cards.length);
}

// delete 2
// read 2
// find bookmark/card in array
function findCardInArray(cardToFindInArray){
var text = cardToFindInArray.querySelector('.website-link').innerText;
console.log(" findCardinArray: length of array : ",cards.length);
  for(var i = 0; i < cards.length; i++){
    if(cards[i].url === text){
      return i;
    }
  }
}

// increase cards counter
function increaseCardCounter(){
  numCards = numCards + 1;
  console.log("card count is ", numCards);
}

// increase read counter
function increaseReadCounter(){
  numRead = numRead + 1;
  console.log("read count is ", numRead);
}

// decrease cards counter
function decreaseCardCounter(){
  numCards = numCards - 1;
  console.log("card count is ", numCards);
}

// decrease read counter
function decreaseReadCounter(){
  numRead = numRead - 1;
  console.log("read count is ", numRead);
}
