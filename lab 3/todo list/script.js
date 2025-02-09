const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("You must write something here!");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = inputBox.value;
        let deleteBtn = document.createElement("img");
        deleteBtn.src = "https://pngimg.com/d/trash_can_PNG18426.png"; 
        deleteBtn.alt = "Delete";
        deleteBtn.classList.add("delete-btn");

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        listContainer.appendChild(li);

        inputBox.value = "";

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
    }
}

