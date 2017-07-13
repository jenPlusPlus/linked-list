// phase 2

// variables
console.log($);
  // input field for title (text)
  var titleInput = document.querySelector('.website-name-field');

  // input field for url (url)
  var urlInput = document.querySelector('.website-url-field');

  // submit button
  var submitButton = document.querySelector('.enter-btn');

  // section on right for holding cards
  var sectionRight = document.querySelector('.section-right');

  var clearButton = document.querySelector('.clear-all');

  var numCardsDisplay = document.querySelector('.total-counter');
  var numReadDisplay = document.querySelector('.read-counter');


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

  submitButton.disabled = true;

    // event listener: on click, create a card
titleInput.addEventListener('input',enableEnter);
urlInput.addEventListener('input',enableEnter);
submitButton.addEventListener('click', errorIfEmpty);
clearButton.addEventListener('click', clearReadCards);


// functions

// enable enter and clear buttons
function enableEnter(event) {
  if (titleInput.value != "" && urlInput.value != ""){
    submitButton.disabled = false;
  }
  else if (titleInput.value == "" || urlInput.value == ""){
  submitButton.disabled = true;

  }
  else {
    submitButton.disabled = true;
  }
}

function errorIfEmpty(event){
//  debugger
  event.preventDefault();
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
    var newArticle = document.createElement("LI");


    newArticle.innerHTML =    "<article class=\"container\">" +
                              "<p class=\"card-title\">" + cardToAddToPage.title + "</p>" +
                              "<br><hr class=\"line\"/>" +
                              "<p class=\"website-link\"><a href=\"http://" +cardToAddToPage.url +"\" target=\"_blank\">" + cardToAddToPage.url + "</a></p>" +
                              "<hr class=\"line\"/>" +
                              "<button class=\"read-btn\">Read</button>" +
                              "<button class=\"delete-btn\">Delete</button>" +
                              "</artice>";
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
  console.log("this is ", this);
  event.preventDefault();
  toggleReadClass(this);
  console.log("parent node: ",this.parentNode);
  toggleReadClassContainer(this.parentNode);
  toggleReadProperty(findCardInArray(this.parentNode));
}

// read 2
// toggle read/unread button on cards/bookmarks (remove/add .read class)
function toggleReadClass(buttonToToggleClass){
  buttonToToggleClass.classList.toggle('read');
  }

function toggleReadClassContainer(articleToToggleClass) {
  articleToToggleClass.classList.toggle('container-read');
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
  var cardIndex = findCardInArray(this.parentNode);
  console.log("cardIndex is ",cardIndex);
  decreaseReadCounterIfDeletedCardIsRead(cardIndex);
  removeCardFromArray(cardIndex);
  removeCardFromPage(this.parentNode.parentNode);
  decreaseCardCounter();
}

// delete 2
// remove card from page (remove child node)
function removeCardFromPage(cardToBeRemoved){
  console.log(cardToBeRemoved);
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

//clear all read cards
function clearReadCards(event){
  for(var i = 0; i < cards.length; i++){
    if(cards[i].isRead === true){
      decreaseCardCounter();
      removeCardFromArray(i);
    }
  }
 $(".container-read").remove();
 numCardsDisplay.innerText = numCards;
 numRead = 0;
 numReadDisplay.innerText = numRead;
}

// increase cards counter
function increaseCardCounter(){
  numCards = numCards + 1;
  console.log("card count is ", numCards);
  numCardsDisplay.innerText = numCards;
}

// increase read counter
function increaseReadCounter(){
  numRead = numRead + 1;
  console.log("read count is ", numRead);
  numReadDisplay.innerText = numRead;
}

// decrease cards counter
function decreaseCardCounter(){
  numCards = numCards - 1;
  console.log("card count is ", numCards);
  numCardsDisplay.innerText = numCards;
}

// decrease read counter
function decreaseReadCounter(){
  console.log("decreasing read counter");
  numRead = numRead - 1;
  console.log("read count is ", numRead);
  numReadDisplay.innerText = numRead;
}

// is read true?
function decreaseReadCounterIfDeletedCardIsRead(indexOfCardToCheck) {
  console.log("is link read?");
  if(cards[indexOfCardToCheck].isRead == true){
    decreaseReadCounter();
  }
  else{
    console.log("read is false");
  }
}
