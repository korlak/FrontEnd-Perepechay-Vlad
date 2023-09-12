const table = document.querySelector('#myTable');
const rows = table.querySelectorAll('tr');
let SelectedRow;
let secondCellContent;
for (let i = 0; i < rows.length; i++) {
    SelectedRow = rows[i];
    let cells = SelectedRow.cells;
    for (let j = 0; j < cells.length; j++) {
        secondCellContent = SelectedRow.cells[j];
        if (j % 2 === 0 && i % 2 === 0) {
            secondCellContent.classList.add('selected');
        }
        else if (j % 2 != 0 && i % 2 != 0) {
            secondCellContent.classList.add('selected');
        }
    }
}

let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
let str = "";
let countInFirstIndex = [];
let countInSecondIndex = [];
let space = "";

for (let i = 0; i < text.length; i++) {
    //console.log(text[i] + text[i+1]);
    if (text[i] === "i" && text[i + 1] === "n") {
        console.log("FNOVOBJFIUFOGVBIJF");
        countInFirstIndex.push(i);
        countInSecondIndex.push(i + 1);
    }
    if (i === 6 || i === 12 || i === 18 || i === 25) {
        console.log(i);
        str += text[i];
    }
}
console.log(str);
console.log(str.toLowerCase());
console.log("Індекси всіх in:");
for (let i = 0; i < countInFirstIndex.length; i++) {
    console.log(countInFirstIndex[i] + " " + countInSecondIndex[i]);
}
for (let i = 0; i < str.length; i++) {
    space += str[i] + " ";
}
console.log(space);
console.log(str.split('').reverse().join(''));

function ucFirst(str) {
    let newTxt = str[0].toUpperCase() + str.slice(1);
    return newTxt;
 }
 console.log(ucFirst(str));