const button = document.getElementById('btnList')
const contList = document.getElementById('listas')
contList.style.display = 'none';

button.addEventListener('click', () => {
    tableros.style.display = 'none';
    contList.style.display = 'block';
    addList();
})

function addList() {

    const cont = document.getElementById('formList')
    const boxInputList = document.getElementById('boxInputList')
    const inputList = document.createElement('input')
    inputList.setAttribute('id', 'inputList')
    inputList.placeholder = 'Introduzca el titulo de la lista'
    const boxBtnList = document.getElementById('boxBtnAddList')
    const btnList = document.createElement('button')
    btnList.setAttribute('class', 'btn btn-success')
    btnList.innerText = 'Añardir Tarjeta'
    btnList.setAttribute('id', 'btnAddList')

    contList.appendChild(cont)
    cont.appendChild(boxInputList)
    boxInputList.appendChild(inputList)
    cont.appendChild(boxBtnList)
    boxBtnList.appendChild(btnList)

}