function display(value){
    document.getElementById("result").value+= value;
    
}
function clearScreen(){
    document.getElementById("result").value = "";
}

function calculate(){
    document.getElementById("result").value = eval(document.getElementById("result").value)
}