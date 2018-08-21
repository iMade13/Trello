let inputList = '';
let btnListA = '';
const contList = document.getElementById('listas')
const tab = document.getElementById('tableros')
const btnAddList = document.createElement('a')
formList.style.display = 'none';
cards.style.display = 'none'


btnAddList.setAttribute('class', 'btn list')
btnAddList.setAttribute('id', 'btnList')
btnAddList.textContent = '+ Añadir una lista'

tab.appendChild(btnAddList)

function hideTablero() {
    tab.style.display = 'none'
    formList.style.display = 'block'

}

tab.addEventListener('click', () => {
    hideTablero()

    function addList() {

        const cont = document.getElementById('formList')
        const boxInputList = document.getElementById('boxInputList')
        inputList = document.createElement('input')
        inputList.setAttribute('id', 'inputList')
        inputList.placeholder = 'Introduzca el titulo de la lista'

        const boxBtnList = document.getElementById('boxBtnAddList')
        btnListA = document.createElement('button')
        btnListA.setAttribute('class', 'btn btn-success')
        btnListA.innerText = 'Guardar'
        btnListA.setAttribute('id', 'btnAddList')
        btnListA.onclick = function() { titleList() }

        contList.appendChild(cont)
        cont.appendChild(boxInputList)
        boxInputList.appendChild(inputList)

        cont.appendChild(boxBtnList)
        boxBtnList.appendChild(btnListA)
    }
    addList()

})

function titleList() {
    cards.style.display = 'block'
    let nameTitleList = inputList.value


    const contTitle = document.getElementById('cards')
    const boxTitle = document.getElementById('titleList')
    const boxTitleList = document.createElement('strong')
    boxTitleList.textContent = nameTitleList
    contTitle.appendChild(boxTitle)
    boxTitle.appendChild(boxTitleList)

    const boxCard = document.getElementById('addCard')
    const addTask = document.createElement('a')
    addTask.href = '#';
    const addTaskC = document.createElement('span')
    addTaskC.textContent = '+ Añadir una Tarjeta'


    contTitle.appendChild(boxCard)
    boxCard.appendChild(addTask)
    addTask.appendChild(addTaskC)

}