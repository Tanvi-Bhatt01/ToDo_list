let ip = document.querySelector("input");
let ul = document.querySelector("ul");
let btn=document.querySelector("button")

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = ip.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    ip.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }