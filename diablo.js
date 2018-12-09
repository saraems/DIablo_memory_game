let backToGameButtons = document.querySelectorAll(".back_to_game");
let characterContainer = document.querySelectorAll(".character_panel_background");
let charactersPanels = document.querySelectorAll(".side_menu_element_left, .side_menu_element_right");


for (let i = 0; i < backToGameButtons.length; i++) {
    backToGameButtons[i].addEventListener("click", function () {
        characterContainer[i].classList.toggle("none");
    });
}

for(let i = 0; i < charactersPanels.length; i++) {
    charactersPanels[i].addEventListener("click", function () {
        characterContainer[i].classList.toggle("none");
    })
}








