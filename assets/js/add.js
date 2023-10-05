
let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let Home = document.querySelector(".Home");
let Kopen = document.querySelector(".Kopen");
let Interview = document.querySelector(".Interview");
let Sale = document.querySelector(".Sale");
let Van = document.querySelector(".Van");
let Sneaker = document.querySelector(".Sneaker");
let Blog = document.querySelector(".Blog");

let count = 1
let nmbr = document.getElementById("nmbr")
let add = document.getElementById("add")
let sub = document.getElementById("sub")


add.addEventListener("click", function () {
    count++;
    nmbr.innerHTML = count;
})
sub.addEventListener("click", function () {
    if (count > 1) count--;
    nmbr.innerHTML = count;
})


function opentabs(tabid) {
    const tabcontent = document.querySelectorAll(".tab-para")
    tabcontent.forEach(Tabs => {
        Tabs.classList.add("d_none")
        Tabs.classList.remove("d_block")
    });
    const tabshow = document.getElementById(tabid);
    tabshow.classList.add("d_block");

    const activetab = document.querySelectorAll(".tab-btn");
    activetab.forEach(activeline => {
        activeline.classList.remove("activeline")

    });
    const showtabs = document.querySelector(`button[onclick="opentabs('${tabid}')"]`)
    showtabs.classList.add("activeline")
}
opentabs('para1')


menuicon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

Home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Kopen.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Interview.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Sale.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Van.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Sneaker.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Blog.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});




setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000)