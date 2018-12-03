
let oneVisible = false;
let turnCounter = 0;
let pair;
let guessedPair = 0;
let locked = false; 
let cards = ["barberian.jpg", "croser.jpg","barberian.jpg", "diablo.jpg", "doctor.jpg", "croser.jpg", "wizard.jpg", "monk.jpg", "diablo.jpg", "monk.jpg", "doctor.jpg", "wizard.jpg" ];



for (let nr = 0; nr < cards.length; nr++) {
    let c = document.getElementById(`c${nr}`);
    c.addEventListener("click", function() {revealCard(nr)})};


let revealCard = function(nr) {

if (cards[nr] !== false) {

    $(`#c${nr}`)
    .css("background-image", `url("diablogra/${cards[nr]}")`)
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
                
            }

            else {

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
        .toggleClass('none')
        .css("background-image", `url("")`)
        .css('opacity', '1');
            
            
        $(`#c${pair}`)
        .toggleClass('none')
        .css("background-image", `url("")`)
        .css('opacity', '1');


    }, 1500);
}



function diffrentCards(nr, pair) {

    setTimeout(function(){ 

        $(`#c${nr}`)
        .removeClass('cardA')
        .addClass('card')
        .css("background-image", `url("diablogra/cover.jpg")`);

        $(`#c${pair}`)
        .removeClass('cardA')
        .addClass('card')
        .css("background-image", `url("diablogra/cover.jpg")`);

    }, 1500);
}


function userWins() {
    setTimeout(function() {
        alert(`Gratulacje, wygrałeś rozgrywkę w ${turnCounter} rundach! Odkrywając szećś park kart z postaciami z gry Diablo III.`);}, 1900) 
}


