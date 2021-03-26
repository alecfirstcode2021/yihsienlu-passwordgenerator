// User input variables: 
var enter;
var Numberconfirm;
var Characterconfirm;
var Uppercaseconfirm;
var Lowercaseconfirm;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
space = [];

var choices;
var toUp = function (x)
{ return x.toUpperCase();};

alpha2 = alpha.map(toUp);
console.log (alpha2);

var search = document.querySelector("#buttonG");
console.log (search);

search.addEventListener("click", function () {
  ps = generatePassword()
   document.getElementById("password").placeholder = ps;
});

function generatePassword(){
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!enter)
  { alert("Please type a value")}
  else if (enter < 8 || enter >128)
  {enter= parseInt(prompt("Please type a value between 8 and 128"))}
  else
  {
    Numberconfirm = confirm("Will this contain numbers?");
    Characterconfirm = confirm("Will this contain special characters?");
    Uppercaseconfirm = confirm("Will this contain Uppercase letters?");
    Lowercaseconfirm = confirm("Will this contain Lowercase letters?");
  };
  if (!Numberconfirm && !Characterconfirm && !Uppercaseconfirm && !Lowercaseconfirm) {
    choices = alert("Please Choose a Cnodition!!");}

    else if (Characterconfirm && Numberconfirm && Uppercaseconfirm && Lowercaseconfirm) {

      choices = character.concat(number, alpha, alpha2);}
//The concat() method is used to merge two or more arrays.  array3 = array1.concat(array2);
      else if (Characterconfirm && Numberconfirm && Uppercaseconfirm) {
        choices = character.concat(number, alpha2);
    }
    else if (Characterconfirm && Numberconfirm && Lowercaseconfirm) {
        choices = character.concat(number, alpha);
    }
    else if (Characterconfirm && Lowercaseconfirm && Uppercaseconfirm) {
        choices = character.concat(alpha, alpha2);
    }
    else if (Numberconfirm && Lowercaseconfirm && Uppercaseconfirm) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (Characterconfirm && Numberconfirm) {
        choices = character.concat(number);

    } else if (Characterconfirm && Lowercaseconfirm) {
        choices = character.concat(alpha);

    } else if (Characterconfirm && Uppercaseconfirm) {
        choices = character.concat(alpha2);
    }
    else if (Lowercaseconfirm && Numberconfirm) {
        choices = alpha.concat(number);

    } else if (Lowercaseconfirm && Uppercaseconfirm) {
        choices = alpha.concat(alpha2);

    } else if (Numberconfirm && Uppercaseconfirm) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (Characterconfirm) {
        choices = character;
    }
    else if (Numberconfirm) {
        choices = number;
    }
    else if (Lowercaseconfirm) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (Uppercaseconfirm) {
        choices = space.concat(alpha2);
    };

    var password = [];
//The Math.floor() function returns the largest integer less than or equal to a given number.
//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
    for (var i=0; i< enter; i++) {
      var pickPassword = choices [Math.floor(Math.random()*choices.length)];
      password.push(pickPassword);
    }
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
//The join() method creates and returns a new string by concatenating all of the elements in an array
    var ps= password.join("");
    UserInput(ps);
    return ps;
  }

  function UserInput(ps) {
    document.getElementById("password").textContent = ps;

    var copy = document.querySelector("#buttoncopy");
    copy.addEventListener("click", function () {
        copyPassword();
      });

      function copyPassword() {
          //w3schools.com: Input Password select() Method
          //Select the content of a password field:
          //document.getElementById("myPsw").select();
          document.getElementById("password").select();
          document.execCommand("Copy");
          //There are two ways browser extensions can interact with the system clipboard: the Document.execCommand() method
          //document.execCommand("copy");document.execCommand("cut");document.execCommand("paste")
          alert("Password copied to clipboard!");
      }
    }      











