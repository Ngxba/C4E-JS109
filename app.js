let cafes = [
    {
        name: "HighLand",
        city: "Hà Nội"
    },
    {
        name: "Cộng",
        city: "Hồ Chí Minh"
    },
    {
        name: "Phúc Long",
        city: "Bắc Ninh"
    },
    {
        name: "Starbucks",
        city: "Vũng Tàu"
    },
    {
        name: "The Coffe House",
        city: "Hà Nội"
    }
]
let index = -1
function renderItem(doc){
    let myForm = document.getElementById("cafe-list");
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    name.textContent = doc.name;
    city.textContent = doc.city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    myForm.appendChild(li);
    cross.addEventListener('click', () => {
        myForm.removeChild(li);
        cafes = cafes.filter(item => item !== doc)
    })
}

cafes.forEach(doc => renderItem(doc));

let inputForm = document.getElementById('add-cafe-form');
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = inputForm.name.value;
    let city = inputForm.city.value;
    let myObj = {
        name: name,
        city: city
    }
    cafes.push(myObj);
    renderItem(myObj);

    inputForm.city.value = "";
    inputForm.name.value = "";
})