let meta = document.createElement("meta")
meta.setAttribute("http-equiv","Content-Type")
meta.setAttribute("content","text/html; charset=windows-1252")
document.head.appendChild(meta)


let title = document.createElement("title")
title.innerText="Lab7"
document.head.appendChild(title)

h1_to_delete = document.getElementsByTagName("h1")[0]
document.body.removeChild(h1_to_delete)

let h1 = document.createElement("h1")
document.body.appendChild(h1)
h1.innerText="Lab 7 Assignment"
h1.style.color="blue"

let hr1 = document.createElement("hr")
document.body.appendChild(hr1)

let h2_1 =document.createElement("h2")
h2_1.style.color="red"
h2_1.innerText="Task" 
document.body.appendChild(h2_1)


let p1 = document.createElement("p")
p1.innerHTML="In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)

let notes1 = ["find elements in the DOM (5 points);","create/add/remove elements (5 points);",
              "change content of the elements (5 points);","change styles of the elements (5 points);",
              "change attributes of the elements (5 points);","change classes of the elements (5 points)."]

let ul1 = document.createElement("ul")
document.body.appendChild(ul1)
for (let i=0; i<6; i++){
    let li = document.createElement("li")
    if (i%2==0)
        li.classList.add("even")
    else
        li.classList.add("odd")
    li.innerText=notes1[i]
   ul1.appendChild(li)
}


let hr2 = document.createElement("hr")
document.body.appendChild(hr2)

let h2_2 =document.createElement("h2")
h2_2.style.color="red"
h2_2.innerText="Submission" 
document.body.appendChild(h2_2)


let p2 = document.createElement("p")
p2.innerText ="To submit your work, follow these instructions:"
document.body.appendChild(p2)

let notes2 = ["Create a new repository on Github, named lab7 (1 point).",
"Clone this repository to your local machine and work inside it.",
"Create a new HTML file, called index.html, which has only one <h1> tag with \"Hello, World!\" message (1 point).",
"Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).",
"Link this main.js file to your index.html file (Note: place your script at the end of the body section).",
"Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).",
"After you finish your work, submit it to the Github (2 points)."]

let ul2 = document.createElement("ul")
document.body.appendChild(ul2)
for (let i=0; i<6; i++){
    let li = document.createElement("li")
    if (i%2==0)
        li.classList.add("even")
    else
        li.classList.add("odd")
    li.innerText=notes2[i]
   ul2.appendChild(li)
}


for (let item of document.getElementsByClassName("even")){
    item.style.color="green"
}

for (let item of document.getElementsByClassName("odd")){
    item.style.color="purple"
}
