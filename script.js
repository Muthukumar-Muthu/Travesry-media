const submit = document.querySelector("#submit");
const insert = document.querySelector("#insertInput");
const ul = document.querySelector("#parent-list");

submit.addEventListener("click", addElement);

function addElement() {
    let data = insert.value;
    ul.append(createLi(data));
    // Delete the value inserted
    deleteValue();
}

function createLi(data) {
    const textNode = document.createTextNode(data);
    const li = document.createElement("li");
    li.append(textNode);
    li.append(createDelete());
    return li;
}

function createDelete() {
    let classValue = "fas fa-trash-alt";
    let i = document.createElement("i");
    i.className = classValue;
    return i;
}

function deleteValue() {
    insert.value = "";
}