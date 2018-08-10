const btnList = document.getElementById('btnList')
const tab = document.getElementById('tableros')
const addList = document.getElementById('addList')

btnList.addEventListener('click', () => {
    tab.style.display = 'none';
    addList.innerHTML =
        `
    <div id="listas">    
      <input class="" id="inputList" placeholder="Introduzca el titulo de la lista...">
      <button class="btn btn-success" id="btnList">Añadir lista</button>
        <span><i class="fas fa-times" id="close"></i><span>
    </div>
`
})