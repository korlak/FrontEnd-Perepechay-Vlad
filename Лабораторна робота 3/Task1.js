const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    console.log("[" + i + "] " + paragraphs[i].innerText.length);
}

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let parn = 0, neparn = 0, count = 0, dodatne = 0, videmne = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        parn++;

    } else if (arr[i] % 2 != 0) {
        neparn++;
    }
    if (Math.abs(arr[i]).toString().length === 2) {
        count++;
    }
    if (arr[i] < 0) {
        videmne++;

    } else if (arr[i] > 0) {
        dodatne++;
    }
}
console.log("------------------------------------");
console.log("[Найбільше значення = " + Math.max(...arr) + "]");
console.log("[Найменше значення = " + Math.min(...arr) + "]");
console.log("------------------------------------");
console.log("[Кількість парних чисел = " + parn + "]");
console.log("[Кількість непарних чисел = " + neparn + "]");
console.log("------------------------------------");
console.log("[Кількість чисел які складаються з 2 цифр = " + count + "]");
console.log("------------------------------------");
console.log("[Кількість додатніх чисел = " + dodatne + "]");
console.log("[Кількість від'ємних чисел = " + videmne + "]");
console.log("------------------------------------");
console.log(arr.sort());
console.log(arr.reverse());
console.log("------------------------------------");

const table = document.querySelectorAll('div.table td');
for (let i = 0; i < table.length; i++) {
    if (i % 2 === 0)
        table[i].classList.add('selected');
}

let N = 7, M = 5;
let matrx = [];
let dodatneMatrx = 0, notNullMatrixRow = 0, NullMatrixRow = 0, streakMatrx = 0, superStreakMatrx = 0,superStreakMatrxRow = -1;
for (let i = 0; i < N; i++) {
    matrx[i] = [];
    for (let j = 0; j < M; j++) {
        //matrx[i].push(Math.floor(Math.random() * 9 + -1));
        matrx[i].push(i);
    }
}



for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if(matrx[i][j] > 0) {
            dodatneMatrx++;
        }

        if(matrx[i][j] === 0) {
            NullMatrixRow++;
            break;
        } else if(j === M - 1){
            notNullMatrixRow++;
        }

        if(matrx[i][j] === (matrx[i][j+1])){
            streakMatrx++;
            if(superStreakMatrx === 0) {
                superStreakMatrx = streakMatrx;
            }
            if(streakMatrx => superStreakMatrx) {
                superStreakMatrx = streakMatrx;
            }
        }
        else{
            if(streakMatrx => superStreakMatrx) {
                superStreakMatrx = streakMatrx;
                superStreakMatrxRow = i;
            }
            streakMatrx = 0;
        }

        console.log(matrx[i][j]);

    }
}
const tableMatrix = document.querySelector('#matrxTable');
const rowsMatrix = table.querySelectorAll('tr');

let SelectedRow;
let secondCellContent;

for (let i = 0; i < rows.length; i++) {
    SelectedRow = rows[i];
    let cells = SelectedRow.cells;
    for (let j = 0; j < cells.length; j++) {
        secondCellContent = SelectedRow.cells[j];
       secondCellContent.innerText.add(matrx[i][j]);
    }
}


console.log("------------------------------------");
console.log("[Кількість додатіх елементів матриці = " + dodatneMatrx + "]");
console.log("[Кількість рядків матриці в яких є хоч один 0 = " + NullMatrixRow + "]");
console.log("[Кількість рядків матриці в яких нема 0 = " + notNullMatrixRow + "]");
console.log("[Серія однакових чисел = " + superStreakMatrxRow + "]");
console.log("------------------------------------");
