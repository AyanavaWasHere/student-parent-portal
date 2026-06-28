function login()
{
    var name = document.getElementById("name").value;
    var className = document.getElementById("class").value;
    var roll = document.getElementById("roll").value;
    var phone = document.getElementById("phone").value;
    var id = document.getElementById("id").value;
    var pass = document.getElementById("pass").value;

    if(name == "")
    {
        alert("Please enter your name.");
        return;
    }

    if(className == "")
    {
        alert("Please select your class.");
        return;
    }

    if(roll == "")
    {
        alert("Please enter your roll number.");
        return;
    }

    if(phone == "")
    {
        alert("Please enter your phone number.");
        return;
    }

    if(id == "")
    {
        alert("Please enter your student ID.");
        return;
    }

    if(pass == "")
    {
        alert("Please enter your password.");
        return;
    }

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("class", className);
    sessionStorage.setItem("roll", roll);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("password", pass);

    window.location.href = "dashboard.html";
}

function logout()
{
    sessionStorage.clear();

    window.location.href = "index.html";
}