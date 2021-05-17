let zmienna = 7; //zmienna do przechowywania danych
const stala = 12; //stale do przechowywania danych

console.log(zmienna); //funkcje do wyswietlania w konsoli

let pierwsza = 3;
let druga = 4; //funkcja number
let text = "ciekawy tekst"; //zmienna typu string
let xd = true; //zmienna typu boolean prawda fałsz

console.log(pierwsza+druga);

let natalia = " bardzo";

console.log(text+natalia);

console.log(2>3);

//kod do logowania
const login = "natalia";
const haslo = "a123";



const wpisanylogin = "natalia";
const wpisanehaslo = "a1256"

if(login == wpisanylogin){
    console.log("podano prawidłowy login");
}else{
    console.log("nieprawidłowy login :(");
}

if(haslo == wpisanehaslo){
    console.log("podano prawidłowe haslo");
}else{
    console.log("nieprawidłowe haslo :(");
}

if(haslo == wpisanehaslo && login == wpisanylogin){
    console.log("podano prawidłowe dane");
}else{
    console.log("nieprawidłowe dane :(");
}
