// phase 1

// variables
  // input field for title (text)
  // input field for url (url)
  // submit button
  // toggle button on card/bookmark (read/unread)
  // remove button on card/bookmark

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
  // remove button
    // on click, remove bookmark/card from list
  // read/unread button
    // on click, toggle bookmark/card object read property true/false
    // on click, toggle .read class on or off

// functions (some may be object methods)
  // add bookmark/card to list
    // get bookmark/card object
    // add to end of list/array
  // remove bookmark/card from list
    // get bookmark/card object
    // remove from list/array
    // clean up array? (remove empty array index)
  // toggle read object property
    // get bookmark/card object
    // set read property to true/false
      // if true, set to false
      // else, set to true
  // toggle read/unread button on cards/bookmarks (remove/add .read class)
    // get bookmark/card object read property (true/false)
      // add/remove .read class based on read property (true/false)
  // change bookmark/card read/unread
    // toggle read object property
    // toggle read/unread button on cards/bookmarks (remove/add .read class)
