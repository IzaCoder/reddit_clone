const accountCreationForm = document.getElementById("create-account");

accountCreationForm.onsubmit = () => 
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");

    if (password !== passwordConfirm) {
        document.getElementById("error-messages").innerHTML += "Make sure the re-type password field is the same as the password field\n";
        return false;
    }
}