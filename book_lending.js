console.log ("__BUHDEUCE BOOK LENDING SERVICE__");

let books = (function () {
    let myBooks = ["DORA THE EXPLORER","BOB THE BUILDER","LUCA","CINDERELLA","THINGS FALL APART"];
    let displayBooks = function displayBooks() {
        console.log("\nBelow are the books available in our library ");
        console.table(myBooks);
      }
  
    let rentedBooks = []; //empty array to store books rented by the user
    let lend = {

        lendBook() {
            displayBooks();
            lend.getBook();
            lend.$popFromMyBooks();

          },

        getBook() {
            borrowedBook = prompt("\nEnter the index number of the book to be rented\nYou can only rent 2 Books", "");
            if ((borrowedBook >= 1) && (borrowedBook <= myBooks.length)) {
                _rent = true;
                rentedBooks.push(myBooks[borrowedBook - 1]);
            } else {
                console.log("\nTheres no Book with index " + borrowedBook )
                _rent = false;
            }
        },

        $popFromMyBooks() {
            if (_rent) { 
                console.log("\nYou have successfully rented " + myBooks[borrowedBook - 1]);
                myBooks.splice((borrowedBook - 1), 1);
            }
        },

        displayRentedBooks() {
            if (!Array.isArray(rentedBooks) || !rentedBooks.length) {
                console.log("\nYou have none of our books in your custody");
            } else {
                console.log("\nThese are your rented books: ");
                for (let i = 0; i < (rentedBooks.length); i++) {
                    console.log((i + 1) + ": " + rentedBooks[i]);
                }//console logs out rented Books with index numbers so user can return them without typing the book name
            }
        }
    };

    let returnBook = {
        returnBook() {
            if (rentedBooks.length) {
                lend.displayRentedBooks();
                returnBook.$pushToMyBooks();
                returnBook.syncToUserCollection();
            } else {
                console.log("\nNo Book in custody.\n");
            }
        },

        //add book back to myBook Database 
        $pushToMyBooks() {
            if (rentedBooks.length) {
                returnedBook = prompt("\nEnter the index number of the book you want to return.");
            }

            if ((returnedBook > 0) && (returnedBook <= 2)) {
                myBooks.push(rentedBooks[returnedBook - 1]);
                console.log("\nYou have successfully returned " + rentedBooks[returnedBook - 1]);
            } else {
                console.log("No Book Was Returned");
            }
        },

        //Synchronize rental DataBase
        syncToUserCollection() {
            if ((returnedBook <= rentedBooks.length) && (returnedBook > 0)) {
                returnedBook -= 1;
                rentedBooks.splice(returnedBook, 1);
            } 
        },
    };

    let read = {
      $readFromMyBooks() {
        let readBook = console.log ("This service ['Read directly from site'] is currently under Construction. \n You can borrow a book to read and return later.")
      },
    };

    let donate = {
        $addToMyBooks() {
          let donateBook = prompt("Which book would you like to donate?", "").toUpperCase();

          if (donateBook) {
              myBooks.push(donateBook);
              console.log("\nThanks for the donation!\n")
          } else {
              console.log("\nField cannot be Empty\n");
          }
        },
    };

    return {
        displayBooks: displayBooks,
        lendBook: lend.lendBook,
        displayRentedBooks: lend.displayRentedBooks,
        returnBook: returnBook.returnBook,
        readBook: read.$readFromMyBooks,
        donateBook: donate.$addToMyBooks,
    };

})();

function Options() {
    while (true) {
        let userChoice = prompt("\n__SELECT AN OPTION__ \n1 >> View Available Books. \n2 >> Read a book. \n3 >> Rent a book. \n4 >> Return a book. \n5 >> Donate a book. \n6 >> Check books rented by you.\n7 >> Exit.\n\n", "");

        if (userChoice == 1){
          console.log (books.displayBooks());
        }else if (userChoice == 2) {
          console.log (books.readBook());
        }else if (userChoice == 3) {
          console.log (books.lendBook());
        }else if (userChoice == 4) {
          console.log (books.returnBook());
        }else if (userChoice == 5) {
          console.log (books.donateBook());
        }else if (userChoice ==6) {
          console.log (books.displayRentedBooks());
        }else if (userChoice == 7) {
          console.log ("ALOHA!!");
          break;
        }else {
          console.log ("Please select an option");
        }
    }
};

let welcomePage = function () {
    let userName = prompt(" \nPlease Enter your Username: ", "");
    
    if (userName) {
      console.log("\nAloha! " + userName + ",  Welcome to BUHDEUCE Book-Rentals");
        Options();
    } else {
        console.log("Please Enter A valid Username");
    }
};

welcomePage();