var form=document.getElementById("form");
var error = document.getElementById("error");
var inputs = document.getElementsByTagName("input");
form.addEventListener("submit", function(event){
 
  
  for (var i = 0; i < inputs.length; ++i){
    if (inputs[i].value == "") {
        // alert("Non Puoi Lasciare Vuoti Dei Campi !!");
         //error.style.color="red";
         error.innerText="Non Puoi Lasciare Campi Vuoti"; 
         controlla(form);
          event.preventDefault();
    }else{
        error.innerText = ""
        console.log(inputs[i].value)
    }
  }
});
/*function disableButton() {

   for (var i = 0; i < inputs.length; i++) {
     if(inputs[i].value.length == 0)
     {
       document.getElementById('submit').disabled = true;
     }
     else {
    document.getElementById('submit').disabled = false;
     }
   }
}

disableButton();
*/
function controlla(form) {
if(form.nome.value == "") {
alert("Il campo Nome è vuoto!");
form.nome.style.background="red";
form.nome.focus();
return false;
}
else if(form.cognome.value == "") {
alert("Il campo Cognome è vuoto!");
form.cognome.focus();
return false;
}
else if(form.email.value == "") {
alert("Il campo Email è vuoto!");
form.email.focus();
return false;
}
else if(form.password.value == "") {
alert("Il campo Password è vuoto!");
form.password.focus();
return false;
}

}

