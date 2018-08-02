items = ['tea', 'coffee', 'milk', 'hot chocolate'];

function mapList() {
    var ul = document.getElementById('itemUl');
    ul.innerText = "";
    for (i = 0; i < items.length; i++) {
        ul.innerHTML += "<li>" + items[i] +

            "<a href='#' onclick='deleteItem(" + i + ")'>x</a>"

            + "</li>";
    }
}

function deleteItem(i) {
    items.splice(i, 1);
    mapList();
}

function itemInput(){
    if(document.getElementById("newItem").value != ""){
        document.getElementById('bid').disabled = false;
    }
    else{
        document.getElementById('bid').disabled = true;
    }
}

function addItem(){
    var newItem = document.getElementById("newItem").value;
    items.push(newItem);
    mapList();
    document.getElementById("newItem").value = "";
    document.getElementById('bid').disabled = true;
}

