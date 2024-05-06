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

    var handleConversion = function () {
        // Retrieve the input value
        var input = document.getElementById("inputInteger").value.trim();

        // Check if the input is empty
        if (input) {
            // Validate input for integers
            if (/^\d+$/.test(input)) { // Check if input consists only of digits
                var number = parseInt(input);
                if (number <= 3999999) {
                    // Convert integer to Roman numeral
                    var romanNumeral = intToRoman(number);
                    // Update the result display
                    document.getElementById("result").innerText = "Roman Numeral: " + romanNumeral;
                } else {
                    // Display an error message for integers exceeding the limit
                    document.getElementById("result").innerText = "Integer value should be less than or equal to 3,999,999.";
                }
            } else if (/^[IVXLCDM]+$/.test(input.toUpperCase())) { // Validate input for Roman numerals
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
            } else {
                // Display an error message for invalid input format
                document.getElementById("result").innerText = "Invalid input format. Please enter a valid integer or Roman numeral.";
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
            if (num >= 1000000) {
                result += "M̄";
                num -= 1000000;
            } else if (num >= 900000) {
                result += "C̄M̄";
                num -= 900000;
            } else if (num >= 500000) {
                result += "D̄";
                num -= 500000;
            } else if (num >= 400000) {
                result += "C̄D̄";
                num -= 400000
            } else if (num >= 100000) {
                result += "C̄";
                num -= 100000;
            } else if (num >= 90000) {
                result += "X̅C̄";
                num -= 90000;
            } else if (num >= 50000) {
                result += "L̄";
                num -= 50000;
            } else if (num >= 40000) {
                result += "X̅L̄";
                num -= 40000;
            } else if (num >= 10000) {
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
        let int = 0;
        var numerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
            // V̅: 5000,
            // X̅: 10000,
            // L̄: 50000,
            // C̄: 100000,
            // D̄: 500000,
            // M̄: 1000000
        };
    
        for (let i = 0; i < str.length; i++) {
            var currentNumber = str[i];
            var nextNumber = str[i + 1];
            
            if (!numerals.hasOwnProperty(currentNumber)) {
                // If the current character is not a valid Roman numeral
                console.log("Invalid Roman numeral: " + currentNumber);
                return NaN; // Or any other indication of invalid input
            }
    
            var currentValue = numerals[currentNumber];
            var nextValue = nextNumber ? numerals[nextNumber] : 0;
    
            if (currentValue < nextValue) {
                int -= currentValue;
            } else {
                int += currentValue;
            }
        }
        return int;
    };
    
});
