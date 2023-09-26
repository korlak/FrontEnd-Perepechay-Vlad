function createTable(m, n) {
    let table = document.querySelector('#table');

    for (let i = 0; i < m; i++) {
        let tr = document.createElement('tr');
        tr.classList.add("tr");
        for (let i = 0; i < n; i++) {
            let td = document.createElement('td');
            td.classList.add("td");
            tr.appendChild(td);
        }

        table.appendChild(tr);
        table.classList.add("table");
    }
}

function createForm() {
    let form = document.querySelector('#form');
    let arrText =
        [
            "Логін",
            "Пароль",
            "Повторіть Пароль",
            "Стать",
            "Вкажіть місто",
            "Інтереси",
            ""
        ];
    let arrInputs =
        [
            "<input type=\"text\">",
            "<input type=\"text\">",
            "<input type=\"text\">",
            arr1 = [
                "<label for=\"footbal\">Чоловіча</label>",
                "<input type=\"radio\">",
                "<label for=\"footbal\">Жіноча</label>",
                "<input type=\"radio\">"
            ],

            arr2 = [
                "<select>",
                "<option value=\"volvo\">Житомир</option>",
                "<option value=\"saab\">Київ</option>",
                "<option value=\"fiat\">Львів</option>",
                "</select>"

            ],
            arr3 = [
                "<input type=\"checkbox\" id=\"footbal\" name=\"footbal\" value=\"Футбол\">",
                "<label for=\"footbal\">Футбол</label>",
                "<input type=\"checkbox\" id=\"chess\" name=\"chess\" value=\"Шахи\"> ",
                "<label for=\"chess\">Шахи</label>",
                "<input type=\"checkbox\" id=\"paint\" name=\"paint\" value=\"Малювання\">",
                "<label for=\"paint\">Малювання</label>",
                "<input type=\"checkbox\" id=\"music\" name=\"music\" value=\"Музика\"> ",
                "<label for=\"music\">Музика</label>",
            ],
            arr4 = [
                "<input type=\"submit\">",
                "<input type=\"reset\">",

            ]

        ];
    let table = document.createElement('table');

    for (let i = 0; i < 7; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            let td = document.createElement('td');

            if (j === 0) {
                td.innerHTML = "<div>" + arrText[i] + "</div>";
            }
            if (j === 1) {
                td.innerHTML = arrInputs[i];
            }
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    form.classList.add("table");
    form.appendChild(table);
}

createTable(5, 5);
createForm();

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}