//const button = document.getElementById('btnList')
const contList = document.getElementById('listas')
contList.style.display = 'none';
cards.style.display = 'none';

// button.addEventListener('click', () => {
//         tableros.style.display = 'none';
//         contList.style.display = 'block';
//         addList();
//     })
// function hideTablero() {
//     tableros.style.display = 'none';
//     contList.style.display = 'block';
//     addList();
// }

function addList() {

    const cont = document.getElementById('formList')
    const boxInputList = document.getElementById('boxInputList')
    const inputList = document.createElement('input')
    inputList.setAttribute('id', 'inputList')
    inputList.placeholder = 'Introduzca el titulo de la lista'

    const boxBtnList = document.getElementById('boxBtnAddList')
    const btnListA = document.createElement('button')
    btnListA.setAttribute('class', 'btn btn-success')
    btnListA.innerText = 'Guardar'
    btnListA.setAttribute('id', 'btnAddList')


    contList.appendChild(cont)
    cont.appendChild(boxInputList)
    boxInputList.appendChild(inputList)

    cont.appendChild(boxBtnList)
    boxBtnList.appendChild(btnListA)

    btnListA.setAttribute('onclick', 'addListName()')
}

function addListName() {
    let nameList = inputList.value;
    console.log(nameList);
    titleList.innerHTML = nameList;

    boxBtnList.appendChild(btnListA)
    cards.style.display = 'block'

}

function addTitle() {
    let titleList = inputList.value
    console.log(titleList)
    const contTitle = document.getElementById('titleList')
    const boxTitleList = document.createElement('input')
    boxTitleList.textContent = titleList

    contTitle.appendChild(boxTitleList)
}

btnListA.addEventListener('click', addTitle())