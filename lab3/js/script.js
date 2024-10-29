//запретить выбор прошедштх дат для доставки
const today = new Date().toISOString().split('T')[0];
document.getElementById('delivery-date').setAttribute('min', today);


var modal = document.getElementById("msgModal");
var form = document.getElementById("dataForm");

//обработчик события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // предотвращение отправки формы

  if (this.checkValidity()) { //проверка валидности формы
    const nameInpt = document.getElementById('user-name').value;
    const emailInpt = document.getElementById('user-email').value;
    const productInpt = document.querySelector('input[name="product-type"]:checked').value;
    const widthInpt = document.getElementById('width').value;
    const heightInpt = document.getElementById('height').value;  
    const materialInpt = document.getElementById('material').value;
    const colorInpt = document.getElementById('color').value;
    const storageInpt = document.getElementById('storage').checked ? '✓' : '✘';
    const dateInpt = document.getElementById('delivery-date').value;
    const addressInpt = document.getElementById('delivery-address').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    // Сохраняем данные 
    formData.push({
      name: nameInpt,
      email: emailInpt,
      product: productInpt,
      width: widthInpt,
      height: heightInpt,
      material: materialInpt,
      color: colorInpt,
      storage: storageInpt,
      date: dateInpt,
      address: addressInpt
    });

    localStorage.setItem('formData', JSON.stringify(formData));

    this.reset();

    modal.style.display = 'block'; //показать модальное окно
  }
});

function closeModal() {
    modal.style.display = 'none';
}

//3акрытие модального окна при клике на крестик
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    closeModal();
}

//закрыть мод окно при щелчке в любом месте
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

document.getElementById('btnReset').addEventListener('click', function() {
  form.reset();
});