window.onload = function(){
 // Получение данных
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    const table = document.getElementById('history-table');

    formData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.product}</td>
        <td>${item.width +"×"+ item.height}</td>
        <td>${item.material}</td>
        <td style="background-color: ${item.color};"></td>
        <td>${item.storage}</td>
        <td>${item.date}</td>
        <td>${item.address}</td>
        `;
    table.appendChild(row);
    });
}

document.getElementById('clear-history').addEventListener('click', function() {
  var table = document.getElementById('history-table');

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  
  localStorage.clear();
});
