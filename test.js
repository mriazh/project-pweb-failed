function pop() {alert("Registration success! Please return to login page.");}

function pop2() {alert("Discussion successfully added! Returning to main page.....");}

function tesTabel() {var x = document.forms["daftar"]["email"].value; 
var y = document.forms["daftar"]["phone"].value; 
var z = document.forms["daftar"]["name"].value;

var tableinput = document.getElementById("tabel");
var row = tableinput.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = x;
cell2.innerHTML = y;
cell3.innerHTML = z;}