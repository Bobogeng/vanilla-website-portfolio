// Navbar Collapse
const menuMobile = document.getElementById("menu-mobile");
const collapse = document.getElementById("collapse");

window.addEventListener("resize", () => {
    if (window.screen.width > 768) {
        collapse.style.display = "flex";
    } else {
        collapse.style.display = "none";
    }
});

menuMobile.onclick = function (e) {
    const target = e.target;
    if (!menuMobile.classList.contains("close")) {
        menuMobile.classList.add("close");
        collapse.style.display = "flex";
    } else {
        menuMobile.classList.remove("close");
        collapse.style.display = "none";
    }
};

// Projects Display
function createProjectContent(name, secondName) {
    let div = document.createElement("div");
    div.classList.add(name, secondName);
    return div;
}

function createProject(name, secondName) {
    let div = document.createElement("div");
    div.classList.add(name, secondName);
    return div;
}

function createCard() {
    let img = document.createElement("img");
    img.src = "assets/img/project-" + i++ + ".png";
    return img;
}

const projectContent = document.querySelector("#project-content");

for (let i = 0; i < 2; i++) {
    projectContent.appendChild(createProjectContent("card-container", "project-row"));
}

const projectRows = document.querySelectorAll(".project-row");

projectRows.forEach((projectRow) => {
    for (let i = 0; i < 3; i++) {
        projectRow.appendChild(createProject("card", "project-card"));
    }
});

const projectCards = document.querySelectorAll(".project-card");

let i = 1;

projectCards.forEach((projectCard) => {
    projectCard.appendChild(createCard());
});
