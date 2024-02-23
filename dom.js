const body = document.querySelector("body")
body.style.backgroundColor = "blue"

const header = document.querySelector(".header")
header.style.color = "white"
header.style.textAlign = "center"
header.style.padding = "30px"
header.style.width = "60%"
header.style.height = "60%"
header.style.margin = " 1rem auto"
header.style.borderRadius = "12px"
header.style.boxShadow = "3px 4px 24px red"

const headerSelect = document.querySelector("header")
console.log(headerSelect);
headerSelect.style.backgroundColor = "orange"
headerSelect.style.color = "black"
headerSelect.style.padding = "10px"
headerSelect.style.textAlign = "center"
headerSelect.style.borderRadius = "15px"

const titleld = document.getElementById("title")
console.log(titleld);
titleld.textContent = "Javascript Dom Assignment 1"

const navItem = document.querySelector(".nav-item")
console.log(navItem);
navItem.style.display = "flex"
navItem.style.justifyContent = "center"
navItem.style.gap = "10px"
navItem.style.listStyle = "none"

const home = document.querySelector(".home")
home.style.backgroundColor = "red"
home.style.borderRadius = "4px"
home.style.padding = "3px"

const contact = document.querySelector(".contact")
contact.style.backgroundColor = "red"
contact.style.borderRadius = "4px"
contact.style.padding = "3px"

const username = document.querySelector("#username")
console.log(username);
username.style.padding = "5px"
username.style.boxShadow = "3px 4px 18px red"

const password = document.querySelector("#password")
password.style.padding = "5px"
password.style.boxShadow = "3px 4px 18px red"
console.log(password);
username.value = "Onur Kapucu"
password.value = "98765432"

password.type = "visible"

username.disabled = true
password.disabled = true

username.style.backgroundColor = "orange"
username.style.color = "black"
username.style.borderRadius = "5px"

password.style.backgroundColor = "orange"
password.style.color = "black"
password.style.borderRadius = "5px"

const button = document.querySelector(".btn")
console.log(button);

button.style.backgroundColor = "red"
button.style.color = "black"
button.style.padding = "5px"
button.style.borderRadius = "5px"
button.style.cursor = "pointer"
button.innerText = "Giriş Yap"

const project = document.getElementById("projects")
console.log(project); 

project.firstElementChild.textContent = "Js Dom Projects"
project.style.color = "#8D9CF4"
project.style.fontSize = "1.5rem"
project.style.textDecorationLine = "underline"
project.firstElementChild.style.boxShadow = '3px 4px 24px red'
project.firstElementChild.style.backgroundColor = "orange"
project.firstElementChild.style.color = "black"
project.firstElementChild.style.borderRadius = "3px"


const projects = document.getElementById("projects")
projects.style.width = '22%'
projects.style.margin = 'auto'
projects.firstElementChild.textContent = "Js Dom Projects"
projects.firstElementChild.borderRadius = "4px"
projects.firstElementChild.style.margin = "1rem"
projects.firstElementChild.style.fontSize = "2rem"
projects.firstElementChild.style.color = "black"
projects.firstElementChild.style.textAlign = "center"

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

/* const liList = document.querySelector("main section#projects ul")
console.log(liList); */

projects.lastElementChild.innerHTML = `<li>${myProjects[0]}</li>
                                    <li>${myProjects[1]}</li>
                                    <li>${myProjects[2]}</li>
                                    <li>${myProjects[3]}</li>
                                    <li>${myProjects[4]}</li>`
projects.lastElementChild.style.fontSize = "1.5rem"
projects.lastElementChild.style.textAlign = "centre"
const lis = document.querySelectorAll("#projects li")
lis.forEach(item => item.style.fontSize = "1rem")
lis.forEach(item => item.style.listStyle = "number")
lis.forEach(item => item.style.padding = "6px")
lis.forEach(item => item.style.cursor = "pointer")
lis.forEach(item => item.style.color = "white")






