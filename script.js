let input = document.querySelector('#taskInput');
let addButton = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');

addButton.addEventListener('click', function(){

    let inputValue = input.value.trim();
    if(inputValue === ""){
        return;
    }

    let list = document.createElement('li');
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('deleteButton');
    list.textContent = inputValue;
    taskList.appendChild(list);
    list.appendChild(removeButton);
    input.value = "";

    removeButton.addEventListener('click',function(e){
        e.stopPropagation
        list.remove();
    })

    list.addEventListener("click", function () {
    list.classList.toggle("completed");
  });
})