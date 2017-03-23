//*******Tools*******

//dialogue system
var userInput = require('readline');
var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code...

userPrompt.question("", function(entry) {

});

*/

//sleep function
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
		break;
		}
    }
};

//wipe wipe wipe the screen
var wipeScreen = function () {
	return process.stdout.write('\033c');
};

//*******Messages*******
// var menuMessages = { welcome: "\n|--------------------------------------------------------------------------------|\n" +
//                                  "|********************************************************************************|\n" + 
//                                  "|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|\n" + 
//                                  "|                               Welcome to the Zoo!                              |\n" +
//                                  "|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|\n" + 
//                                  "|********************************************************************************|\n" +
//                                  "|--------------------------------------------------------------------------------|\n",
//                         first: "Enter 'Add' or '1' to add a new animal to your zoo",
//                         second: "Enter 'Release' or '2' to release an animal from your zoo",
//                         third: "Enter 'View' or '3' to see what animals are in your zoo",
//                         fourth: "Enter 'Find' or '4' to search for an animal in your zoo",
//                         fifth: "Enter 'Play' or '5' to play with an animal in your zoo",
//                         exit: "Enter 'Exit' or '6' to quit game\n"
// };

// function displayMenu() {
//     for (var i in menuMessages){
//         console.log(menuMessages[i]);
//     }
// };

//*******Constructors*******

function item(description, price, stock) {
    this.description = description;
    this.price = price;
    this.stock = stock;
};

//*******Variables*******

var inventory = [];


function mainMenu() {
    userPrompt.question("", function(selection) {
        if (selection == "0") {
            //exit program
            process.exit();
        } else if (selection == "1") {
            // viewItem();
        } else if (selection == "2") {
            // modItem();
        } else if (selection == "3") {
            // addItem();
        } else if (selection == "4") {
            // removeItem();
        } else if (selection == "5") {
            // searchItem();
        } 
    });
}

function viewItem() {
    wipeScreen();
    sleep(1000);
    console.log("Store Inventory")
    for (var i in inventory){
        console.log(inventory[i].description + ", $" + inventory[i].price ", Stock: " + inventory[i].stock);
    }
}

function removeItem() {
    wipeScreen();
    sleep(1000);
    console.log("Choose an item to remove, or enter '0' to return.\n");
    for (i = 0; i <= inventory.length - 1; i++) {
                console.log((i+1) + ".) " + inventory[i].name);
    }
    userPrompt.question("", (removal) => {
        if (removal == 0) {
                mainMenu();
        } else if ((removal <= inventory.length) && (removal > 0)) {
            
            console.log("Removing " + inventory[removal-1].name + ".");
       
            inventory.splice(removal-1, 1);
            userPrompt.question("\nHit Enter to return.", function(entry) {
                mainMenu();
            });
        
        } else {
            console.log("Item does not exist! Try again.");
            removeItem();
        }
    }); 
}







