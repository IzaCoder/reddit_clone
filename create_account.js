const accountCreationForm = document.getElementById("create-account");

accountCreationForm.onsubmit = (event) => 
    const username = document.getElementById("username");
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    alert(password + " " + passwordConfirm);

    if (password !== passwordConfirm) {
        document.getElementById("error-messages").innerHTML += "Make sure the re-type password field is the same as the password field\n";
        event.preventDefault();
    }
}