function showCapital(){
    var country = document.getElementById("list")
    var capital = document.getElementById("capital")
    var selcountry = country.value

    switch(selcountry){
        case "India":
            capital.innerHTML = "Delhi";
            break;
        case "China":
            capital.innerText = "Beijing";
            break;
        case "Japan":
            capital.innerText = "Tokyo";
            break;
        case "France":
            capital.innerText = "Paris";
            break;
        case "Italy":
            capital.innerText = "Rome";
            break;
        case "Egypt":
            capital.innerText = "Cairo";
            break;
        case "Canada":
            capital.innerText = "Ottawa";
            break;

    }
}