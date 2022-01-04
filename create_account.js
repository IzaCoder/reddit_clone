const accountCreationForm = document.getElementById("create-account");

alert(accountCreationForm)

accountCreationForm.onsubmit = function () {
    alert("You submitted the form!")
}