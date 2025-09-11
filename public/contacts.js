const errorElement = document.querySelectorAll('.warning-text');
const inputElements = document.querySelectorAll('.feedback .inline input');


function validationInput() {
    for (let i = 0; i <= inputElements.length; i++) {
        inputElements[i].addEventListener('change', (e) => {
            if ((inputElements[i].value[0]) !== (inputElements[i].value[0]).toUpperCase()){
                inputElements[i].style.borderColor = 'red';
                errorElement[i].classList.toggle('show-text', true);
            } else {
                inputElements[i].style.borderColor = '#cecece';
                errorElement[i].classList.toggle('show-text', false);
            }
        });

    }
}


validationInput();



// После анфокуса, должен появится бар с ошибкой, если ввод был неверный.
// Бар с ошибкой: покраснение рамки + появление элемента-соседа снизу(toggle)
// Как показать соседа: Сверстать, дать класс, скрыть. Если происходит неверный ввод, показать