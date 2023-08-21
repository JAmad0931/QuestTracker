//--------------------------------Form Validation---------------------------------------
function checkForm() {
    let myForm = document.getElementById("myForm");

    //Checks if the quest name is only made up of letters
    if (myForm.questName.value === "") {
        alert("Please enter a name.");
        return false;
    }
    //Checks if the quest reward is a number or empty
    if (myForm.questReward.value === "") {
        alert("Please enter a number.");
        return false;
    }
    else if (isNaN(myForm.questReward.value) === true) {
        alert("Please enter a valid number.");
        return false;
    }
    //Checks if the quest description is made up of at least 100 characters
    if (myForm.questDesc.value.length <= 50) {
        alert("Please enter a proper description.");
        return false;
    }
    return true;   
}
let myForm = document.getElementById("myForm");
myForm.validate.addEventListener("submit",checkForm);

/* This was an attempt to get the form to submit the inputs to the main page file, but I was unable to get it to work.
function updateTable() {
    var name = document.getElementById("questName").value;
    var desc = document.getElementById("questDesc").value;
    var reward = document.getElementById("questReward").value;
    var type = document.getElementById("type").value;

    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = desc;
    cell3.innerHTML = reward;
    cell4.innerHTML = type;
}
*/