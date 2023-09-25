import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//arrow function o funcion anonima
const createTask = (evento) => {
    
    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li"); /*crear lista*/

    task.classList.add("card"); /*Poner clase*/

    input.value = "";

    //Creacion de lista que se muestra en programa
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete()); /*Anadir check*/
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask); /*Anadir texto*/

    task.appendChild(taskContent);
    task.appendChild(deleteIcon()); /*Anadir basurero*/
    list.appendChild(task); /*agregar valor a lista*/

};

btn.addEventListener("click", createTask);
