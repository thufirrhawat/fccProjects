document.addEventListener('DOMContentLoaded', function() {
    const number = document.getElementById("number");
    const convertButton = document.getElementById("convert-btn");
    const output = document.getElementById("output");

    convertButton.addEventListener("click", () => {
        if (!number.value) {
            output.textContent = "Please enter a valid number";
            output.hidden = false;
        } else if (number.value < 0) {
            output.textContent = "Please enter a number greater than or equal to 1";
            output.hidden = false;
        } else if (number.value > 3999) {
            output.textContent = "Please enter a number less than or equal to 3999";
            output.hidden = false;
        } else {
            const romanNumeral = convertToRoman(parseInt(number.value));
            output.textContent = romanNumeral;
            output.hidden = false;
        }
    });
});

function convertToRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let roman = "";
    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    return roman;
}