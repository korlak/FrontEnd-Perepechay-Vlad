function Task1_1() {
    const paragraphs = document.getElementById('paragraphs');
    for (let i = 0; i < paragraphs.childElementCount; i++) {
        paragraphs.children[i].innerHTML += "Кількість елементів = " + paragraphs.children[i].innerText.length;
    }
}
function Task1_2() {
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
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    for (let i = 0; i < arr.length; i++) {
        document.getElementById("arr").innerHTML += arr[i] + " ";
    }
    let arrReverse = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("arrReverse").innerHTML += arrReverse[i] + " ";
    }
    let arrSort = arr.sort();
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("arrSort").innerHTML += arrSort[i] + " ";
    }

    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("parn").innerHTML = parn;
    document.getElementById("neparn").innerHTML = neparn;
    document.getElementById("dodatne").innerHTML = dodatne;
    document.getElementById("videmne").innerHTML = videmne;
    document.getElementById("count").innerHTML = count;
}
function Task2() {
    let table = document.querySelectorAll(".table");
    let createTable = function (N, M, table) {
        for (let i = 0; i < N; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < M; j++) {
                let td = document.createElement('td');
                td.innerHTML = "<div></div>";
                td.classList.add("tdStyle");
                tr.appendChild(td);

            }
            table.appendChild(tr);
        }
    }
    createTable(3, 3, table[0]);
    createTable(4, 4, table[1]);
    createTable(5, 5, table[2]);
    let td = document.getElementsByClassName("tdStyle");
    for (let i = 0; i < td.length; i++) {
        if (i % 2 === 0) {
            td[i].classList.add("selected");
        }
    }
}
function Task3() {

    let N = 7, M = 5;
    let matrx = [];
    let dodatneMatrx = 0, NullMatrixRow = 0, NullMatrixColumn = 0;
    for (let i = 0; i < N; i++) {
        matrx[i] = [];
        for (let j = 0; j < M; j++) {
            matrx[i].push(Math.floor(Math.random() * 9 + -1));
            // matrx[i].push(i);
        }
    }

    //створення таблиці html
    let table = document.querySelector('#table1');
    for (let i = 0; i < N; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < M; j++) {
            let td = document.createElement('td');
            td.innerHTML = "<div>" + matrx[i][j] + "</div>";
            td.classList.add("tdStyle");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    //додатні елементи
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (matrx[i][j] > 0) {
                dodatneMatrx++;
            }
        }
    }

    //нульові рядки
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (matrx[i][j] === 0) {
                NullMatrixRow++;
                break;
            }
        }
    }
    for (let j = 0; j < M; j++) {
        for (let i = 0; i < N; i++) {
            NullMatrixColumn++;
            break;
        }
    }

    //серія
    let streak = [];
    for (let i = 0; i < N; i++) {
        let currentStreak = 0;
        for (let j = 0; j < M - 1; j++) {
            if (matrx[i][j] === matrx[i][j + 1]) {
                currentStreak++;
            } else {
                break;
            }
        }
        streak[i] = currentStreak;
    }
    let maxStreak = 0, maxStreakRow = 0;
    for (let i = 0; i < N; i++) {
        if (maxStreak <= streak[i]) {
            maxStreak = streak[i];
            maxStreakRow = i;
        }
    }

    //від'ємні числа
    let negativeNumbersRow = [], negativeNumbersColumn = [];
    let productRowNumbers = [], sumColumnNumbers = [], sumColumnNegativeNumbers = [];

    //по рядкам
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (matrx[i][j] < 0) {
                negativeNumbersRow[i] = true;
                break;
            }
            else if (matrx[i][j] > 0) {
                negativeNumbersRow[i] = false;
            }
        }
    }
    //по стовпцям
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrx[j][i] < 0) {
                negativeNumbersColumn[i] = true;
                break;
            }
            else if (matrx[j][i] > 0) {
                negativeNumbersColumn[i] = false;
            }
        }
    }


    productRowNumbers.length = negativeNumbersRow.length;
    sumColumnNumbers.length = negativeNumbersColumn.length;
    sumColumnNegativeNumbers.length = negativeNumbersColumn.length;

    for (let i = 0; i < negativeNumbersRow.length; i++) {
        productRowNumbers[i] = 1;
    }
    for (let i = 0; i < negativeNumbersColumn.length; i++) {
        sumColumnNumbers[i] = 0;
        sumColumnNegativeNumbers[i] = 0;
    }

    let K = 0;
    //Добуток рядків без від'ємних чисел
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!negativeNumbersRow[i]) {
                productRowNumbers[i] *= matrx[i][j];
            }
        }
    }

    //Сума стовпців без від'ємних чисел
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!negativeNumbersColumn[i]) {
                sumColumnNumbers[i] += matrx[j][i];
            }
        }
    }
    //Сума стовпців з від'ємними числами
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (negativeNumbersColumn[i]) {
                sumColumnNegativeNumbers[i] += matrx[j][i];
            }
        }
    }

    const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
    transpose(matrx);
    let table2 = document.querySelector('#table2');
    console.log(table2);
    for (let i = 0; i < M; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < N; j++) {
            let td = document.createElement('td');
            td.innerHTML = "<div>" + matrx[j][i] + "</div>";
            td.classList.add("tdStyle");
            tr.appendChild(td);
        }

        table2.appendChild(tr);
    }
    //Результати в HTML таблицях і без
    let productRowNumbersFinal1 = [], sumColumnNumbersFinal1 = [], sumColumnNegativeNumbersFinal1 = [];
    let productRowNumbersFinal2 = [], sumColumnNumbersFinal2 = [], sumColumnNegativeNumbersFinal2 = [];
    let table_productRowNumbers = document.querySelector('#table_productRowNumbers');
    let table_sumColumnNumbers = document.querySelector('#table_sumColumnNumbers');
    let table_sumColumnNegativeNumbers = document.querySelector('#table_sumColumnNegativeNumbers');


    let createFinal = function (valueF1, valueF2, firstValue, symbol) {
        for (let i = 0; i < firstValue.length; i++) {
            if ((firstValue[i] && symbol === 1) === 1 || (firstValue[i] && symbol === 0) === 0) {
                continue;
            } else {
                valueF1.push(i);
                valueF2.push(firstValue[i]);
            }
        }
    }
    let createTableFinal = function (value1, value2, table) {
        let tr1 = document.createElement('tr');
        let tr2 = document.createElement('tr');
        for (let i = 0; i < value1.length; i++) {
    

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
    
            td1.innerHTML = "<div>" + value1[i] + "</div>";
            td2.innerHTML = "<div>" + value2[i] + "</div>";
    
            td1.classList.add("tdStyleRed");
            td2.classList.add("tdStyleBlue");
    
            tr1.appendChild(td1);
            tr2.appendChild(td2);
    
            table.appendChild(tr1);
            table.appendChild(tr2);
        }
        
    }

    createFinal(productRowNumbersFinal1, productRowNumbersFinal2, productRowNumbers,1);
    createFinal(sumColumnNumbersFinal1, sumColumnNumbersFinal2, sumColumnNumbers, 0);
    createFinal(sumColumnNegativeNumbersFinal1, sumColumnNegativeNumbersFinal2, sumColumnNegativeNumbers, 0);

    createTableFinal(productRowNumbersFinal1, productRowNumbersFinal2, table_productRowNumbers);
    createTableFinal(sumColumnNumbersFinal1, sumColumnNumbersFinal2, table_sumColumnNumbers);
    createTableFinal(sumColumnNegativeNumbersFinal1, sumColumnNegativeNumbersFinal2, table_sumColumnNegativeNumbers);


    document.getElementById("dodatneMatrx").innerHTML = dodatneMatrx;
    document.getElementById("NullMatrixRow").innerHTML = NullMatrixRow;
    document.getElementById("NullMatrixColumn").innerHTML = NullMatrixColumn;
    document.getElementById("maxStreak").innerHTML = maxStreak;
    document.getElementById("maxStreakRow").innerHTML = maxStreakRow;



}
Task1_1();
Task1_2();
Task2();
Task3();


