
/*
// Body Font
const body = document.querySelector("body");
const bodyFont = body.style.fontFamily = "Arial";



// Span
const spanNickname = document.getElementById("nickname");
const spanFavorites = document.getElementById("favorites");
const spanHometown = document.getElementById("hometown");

const nickName = spanNickname.innerText = "Sam";
const favorites = spanFavorites.innerHTML = "Football";
const hometown  = spanHometown.innerText = "Kathmandu, Nepal";

// li
const li = document.querySelectorAll("li")
for (let i = 0; i < li.length; i++) {
    const addClass = li[i].className = "listItem"
    console.log(li[i]);
}

const liColor = document.querySelectorAll(".listItem");

for(let i = 0; i < liColor.length; i++) {
    const addColorLi = liColor[i].style.color = "red";
}

// Create img
const img = document.createElement("img"); //creates detached dom node. check console for image before doing rest of the steps.
const imgSrc = img.src = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" 
const imgWidth = img.style.width = "300px"

const appendImg = body.append(img) //attach the dom node to the dom

*/

//Using jQuery

// (In JS) Change the body tag"s style so it has a font-family of "Arial, sans-serif".
const $body = $("body");
const bodyFont = $body.css("font-family", "Arial, sans-serif");

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const $nickname = $("#nickname").text("Sam");
const $favorites = $("#favorites").text("Pinapple on Pizza!");
const $hometown = $("#hometown").text("KTM, Nepal");

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const $li = $("li").each(function () {
    let $this = $(this);
    $this.attr("class", "listItem").css("color", "red")
})

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const $img = $("<img>").attr("src", "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ").appendTo($body);

$img.attr("width", "300px");

