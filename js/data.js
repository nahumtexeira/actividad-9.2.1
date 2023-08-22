const spanData = document.getElementById("data");
function datacharge(){
    spanData.innerHTML=localStorage.getItem("dataStorage");}

datacharge()