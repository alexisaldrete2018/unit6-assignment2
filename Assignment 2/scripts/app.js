const iconImportant = "iImportant fas fa-star";
const iconNonImportant = "iImportant far fa-star";

let icon = $("#iImportant");
let formSection = $("#form");
let hideFormButton = $('#hideFormButton');
let submitButton = $("#submitTaskButton");

let important = false;
let formHidden = false;

function toggleImportant(){
    if(!important){
        icon.removeClass(iconNonImportant).addClass(iconImportant);
        important = true;
    } else {
        icon.removeClass(iconImportant).addClass(iconNonImportant);
        important = false;
    } 
}

function toggleForm(){
    if(!formHidden){
        formSection.hide();
        formHidden = true;
    } else {
        formSection.show();
        formHidden = false;
    }
}

function submitTask(){
    let title = $("#inputTitle").val();
    let description = $("#inputDescription").val();
    let icon = important;
    let date = $("#date").val();
    let location = $("#inputLocation").val();
    let invites = $("#inputInvites").val();
    let color = $("#inputColor").val();
    let frequency = $("#inputFrequency").val();
    let status = $("#inputStatus").val();

    console.log(title, description, icon, date, location, invites, color, frequency, status);
}

function init(){
    console.log("initialized");
    icon.click(toggleImportant);
    hideFormButton.click(toggleForm);
    submitButton.click(submitTask);
}

window.onload = init;