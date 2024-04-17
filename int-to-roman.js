
document.addEventListener("DOMContentLoaded", function () {
    // Log that the document is ready
    console.log("Document is ready!");
  
    // Event listener for the "Convert" button
    document.getElementById("convertButton").addEventListener("click", function () {
      convertIntegerToRoman();
    });
  
    // Event listener for the "Enter" key in the input field
    document.getElementById("inputInteger").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        convertIntegerToRoman();
      }
    });
  
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
  
    // Function to convert input integer to Roman numeral and update result
    var convertIntegerToRoman = function () {
      var inputInteger = parseInt(document.getElementById("inputInteger").value);
      if (!isNaN(inputInteger) && inputInteger >= 1 && inputInteger <= 10000) {
        var romanNumeral = intToRoman(inputInteger);
        document.getElementById("result").innerText = "Roman Numeral: " + romanNumeral;
      } else {
        document.getElementById("result").innerText = "Please enter a valid number between 1 and 10000.";
      }
    };
  });