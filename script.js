// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".DISPLAY");
console.log(input)
// This code should be working
input.addEventListener("input", function () {
   const name = input.value;
   display.textContent = name;
});

// missing function?

// you should see 5 in the output of your console
console.log(2 + 3);