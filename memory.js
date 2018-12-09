
let oneVisible = false;
let turnCounter = 0;
let pair;
let guessedPair = 0;
let locked = false; 
let cards = ["barberian.jpg", "croser.jpg","barberian.jpg", "diablo.jpg", "doctor.jpg", "croser.jpg", "wizard.jpg", "monk.jpg", "diablo.jpg", "monk.jpg", "doctor.jpg", "wizard.jpg" ];

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

for (let nr = 0; nr < cards.length; nr++) {
    let c = document.getElementById(`c${nr}`);
    c.addEventListener("click", function() {revealCard(nr)})}







let revealCard = function(nr) {

    if (cards[nr] !== false) {

        $(`#c${nr}`)
            .css("background-image", `url("diablogra_cards/${cards[nr]}")`)
            .removeClass('card')
            .addClass('cardA');

        if (oneVisible === false) {
            oneVisible = true;
            pair = nr;
        }

        else {

            if (cards[nr] == cards[pair]) {

                thesameCards(nr,pair);
                guessedPair++;
                cards[nr] = false;
                cards[pair] = false;
            } else {

                diffrentCards(nr, pair);
            }

            turnCounter++;
            $('.score').html(`Turn counter: ${turnCounter}`);
            oneVisible = false;
            if (guessedPair == 6) {userWins()};

        }
    }
};


function thesameCards(nr, pair) {

    setTimeout(function(){

        $(`#c${nr}`)
            .toggleClass('disappear')
            .css("background-image", `url("")`)
            .css('opacity', '1');


        $(`#c${pair}`)
            .toggleClass('disappear')
            .css("background-image", `url("")`)
            .css('opacity', '1');


    }, 1500);
}



function diffrentCards(nr, pair) {

    setTimeout(function(){

        $(`#c${nr}`)
            .removeClass('cardA')
            .addClass('card')
            .css("background-image", `url("diablogra_cards/cover.jpg")`);

        $(`#c${pair}`)
            .removeClass('cardA')
            .addClass('card')
            .css("background-image", `url("diablogra_cards/cover.jpg")`);

    }, 1500);
}




function userWins() {
    setTimeout(function() {

        $(`.winner_pop_up`).css("display", "block");
        $(`#turns`).text(" " + turnCounter + " ");

        }, 1900)
}


