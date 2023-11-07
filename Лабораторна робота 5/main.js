
function Task1() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const showSelectedButton = document.getElementById('showSelected1');
    const selectedValuesParagraph = document.getElementById('selectedValues1');

    showSelectedButton.addEventListener('click', function () {
        const selectedValues = [];

        checkboxes.forEach(function (checkbox) {
            if (checkbox.className == 'T1') {
                if (checkbox.checked) {
                    selectedValues.push(checkbox.value);
                }
            }
        });

        selectedValuesParagraph.textContent = 'Ви вибрали: ' + selectedValues.join(', ');
    });

}
function Task2() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const showSelectedButton = document.getElementById('showSelected2');
    const selectedValuesParagraph = document.getElementById('selectedValues2');

    showSelectedButton.addEventListener('click', function () {
        const selectedValues = [];

        checkboxes.forEach(function (checkbox) {
            if (checkbox.className == 'T2') {
                if (checkbox.checked) {
                    selectedValues.push(checkbox.value);
                }
            }
        });

        selectedValuesParagraph.textContent = 'Ви вибрали: ' + selectedValues.join(', ');
    });
}


Task1();
Task2();