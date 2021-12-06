const submit = document.querySelector("#submit");
const form = document.querySelector(".forms");
const insert = document.querySelector("#insertInput");
const ul = document.querySelector("#parent-list");
const search = document.querySelector("#search-bar");

form.addEventListener("submit", addElement);
submit.addEventListener("click", addElement);
ul.addEventListener("click", deleteElement);
search.addEventListener("keyup", searchElement);

function addElement(e) {
    if (insert.value == "") {} else {
        let data = insert.value;
        ul.append(createLi(data));
        // Delete the value inserted
        deleteValue();
    }
}

function createLi(data) {
    const textNode = document.createTextNode(data);
    const li = document.createElement("li");
    li.className = "list-child";
    li.append(textNode);
    li.append(createDelete());
    return li;
}

function createDelete() {
    let classValue = "fas delete fa-trash-alt";
    let i = document.createElement("i");
    i.className = classValue;
    return i;
}

function deleteValue() {
    insert.value = "";
}

function deleteElement(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}

function searchElement(e) {
    const li = document.querySelectorAll(".list-child");
    let searchValue = e.target.value;
    // let myArray = Array.from(li);

    // for (let i = 0; i < li.length; i++) {
    //     // console.log(myArray[i].textContent);
    //     if (searchValue === myArray[i].textContent) {
    //         console.log(myArray[i]);
    //         myArray[i].style.display = "flex";
    //     } else myArray[i].style.display = "none";
    // }
    for (let i = 0; i < li.length; i++) {
        if (searchValue === li[i].innerText) {
            // console.log(li[i]);
            li[i].style.display = "flex";
        } else li[i].style.display = "none";
    }
}