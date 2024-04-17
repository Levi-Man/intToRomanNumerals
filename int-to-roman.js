document.addEventListener("DOMContentLoaded", function () {
  // Log that the document is ready
  console.log("Document is ready!");

  // Event listener for the "Convert" button
  document.getElementById("convertButton").addEventListener("click", function () {
      handleConversion();
  });

  // Event listener for the "Enter" key in the input field
  document.getElementById("inputInteger").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          handleConversion();
      }
  });

  // Function to handle conversion based on input type
  var handleConversion = function () {
      // Retrieve the input value
      var input = document.getElementById("inputInteger").value.trim();

      // Check if the input is empty
      if (input) {
          // Determine if the input is a Roman numeral or an integer
          if (!isNaN(parseInt(input))) {
              // Convert integer to Roman numeral
              var romanNumeral = intToRoman(parseInt(input));
              // Update the result display
              document.getElementById("result").innerText = "Roman Numeral: " + romanNumeral;
          } else {
              // Convert Roman numeral to integer
              var integer = romanToInt(input.toUpperCase());
              // Check if the Roman numeral is valid
              if (integer !== false) {
                  // Update the result display
                  document.getElementById("result").innerText = "Integer: " + integer;
              } else {
                  // Display an error message for invalid Roman numeral
                  document.getElementById("result").innerText = "Invalid Roman numeral.";
              }
          }
      } else {
          // Display an error message for empty input
          document.getElementById("result").innerText = "Please enter a value.";
      }
  };

  // Function to convert integer to Roman numeral
  var intToRoman = function (num) {
      var result = "";

      while (num > 0) {
          if (num >= 10000) {
              result += "X̅";
              num -= 10000;
          } else if (num >= 9000) {
              result += "MX̅";
              num -= 9000;
          } else if (num >= 5000) {
              result += "V̅";
              num -= 5000;
          } else if (num >= 4000) {
              result += "I̅V̅";
              num -= 4000;
          } else if (num >= 1000) {
              result += "M";
              num -= 1000;
          } else if (num >= 900) {
              result += "CM";
              num -= 900;
          } else if (num >= 500) {
              result += "D";
              num -= 500;
          } else if (num >= 400) {
              result += "CD";
              num -= 400;
          } else if (num >= 100) {
              result += "C";
              num -= 100;
          } else if (num >= 90) {
              result += "XC";
              num -= 90;
          } else if (num >= 50) {
              result += "L";
              num -= 50;
          } else if (num >= 40) {
              result += "XL";
              num -= 40;
          } else if (num >= 10) {
              result += "X";
              num -= 10;
          } else if (num >= 9) {
              result += "IX";
              num -= 9;
          } else if (num >= 5) {
              result += "V";
              num -= 5;
          } else if (num >= 4) {
              result += "IV";
              num -= 4;
          } else if (num >= 1) {
              result += "I";
              num -= 1;
          }
      }

      return result;
  };

  // Function to convert Roman numeral to integer
  var romanToInt = function (str) {
      let int = 0
      var numerals = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
      };

      for (let i = 0; i < str.length; i++) {
          var currentNumber = str[i];
          var nextNumber = str[i + 1];

          var currentValue = numerals[currentNumber];
          var nextValue = numerals[nextNumber];

          if (currentValue < nextValue) {
              int -= currentValue;
          } else {
              int += currentValue
          }
      }
      return int;
  };
});
