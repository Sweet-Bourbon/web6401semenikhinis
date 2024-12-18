document.getElementById("load_table_button").addEventListener("click", async (event) => {
    try {
        let response = await fetch("http://localhost:8000/data_table", {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        let data = await response.json(); 
        if (!data) {
            throw new Error("Данные не загружены должным образом");
        }

        fillTable(data["data"]);
    } catch (err) {
        alert(err.message); // Вывод ошибки
    }
});

function fillTable(data) {
    let table = document.getElementById("main_table").getElementsByTagName('tbody')[0]; // Получение tbody
    table.innerHTML = ""; // Очистка таблицы перед добавлением новых строк

    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();

        // Создание ячеек для строки
        let photoCell = row.insertCell(0);
        photoCell.innerHTML = `<img src="${data[i]["Фото"]}">`;

        let nameCell = row.insertCell(1);
        nameCell.textContent = data[i]["Имя"];

        let breedCell = row.insertCell(2);
        breedCell.textContent = data[i]["Вид"];

        let ageCell = row.insertCell(3);
        ageCell.textContent = data[i]["Возраст"];

        let descriptionCell = row.insertCell(4);
        descriptionCell.textContent = data[i]["Описание"];
    }
}
