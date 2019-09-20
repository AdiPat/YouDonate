let users = [{
        name: "Rajiv",
        password: "yoloman"
    },
    {
        name: "Amol",
        password: "Rani"
    },
    {
        name: "Harsh",
        password: "sharma"
    }
]

let ngo = [{
        name: "Cancer",
        password: "cancer"
    },
    {
        name: "Heart",
        password: "heart"
    },
    {
        name: "Fever",
        password: "fever"
    }
]


let login_form_submit = document.getElementById("login-submit");

login_form_submit.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let user;
    if (type === null) return console.log("Choose Radio");
    if (type == "ngo") {
        user = ngo.find(val => val.name == username && val.password == password)
    } else {
        user = users.find(val => val.name == username && val.password == password)
    }
    return user ? console.log(user) : console.log("No such user");
})