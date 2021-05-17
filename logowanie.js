const login = "natalia";
const haslo = "a123";

const inputlogin = document.getElementById ("login");
const inputhaslo = document.getElementById ("password");
const ok = document.getElementById ("ok");

ok.addEventListener("click", function(){
    if(login == inputlogin.value && haslo ==inputhaslo.value){
        console.log("Prawidłowe dane");
        window.location.pathname = "/C:/Users/uczen/Desktop/jawa/welcome.html";
    }else{
            console.log("Nie prawidłowe dane")
        }
    
})