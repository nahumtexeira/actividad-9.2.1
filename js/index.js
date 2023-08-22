 document.getElementById("buttonText").addEventListener("click",function(){
    inputData=document.getElementById("inputText").value

    localStorage.setItem("dataStorage",inputData);
 });
 