


class Card { 
    constructor(value, suit) { 
         this.value = value; 
         this.suit = suit;
       
    }
}

class Deck { 
    constructor(cards = this.makeDeck()) { 
        this.cards = cards;
        this.discardPile = []; 
    
    }

    get deckLength() { 
        return this.cards.length;
     }

makeDeck() { 
    const deck = []; 
    for (let value of values) { 
        for (let suit of suits) { 
            deck.push(new Card(value, suit))
    }
        }  return deck;
}
    //Durstenfeld shuffle

    shuffleDeck() {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    //use shift to take the first card from the array and returns it. 
    flip() { 
       return this.cards.shift(); 
      
        
    }

    discard(card) {
    
        this.discardPile.push(card); 
        }     
    }




let suits = ["♦", "♣", "♥", "♠"]
var values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; 

//Changes the values of each element to a number object.values()
const cardValue = { 
    "2": 2, 
    "3": 3, 
    "4": 4, 
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8, 
    "9": 9, 
    "10": 10, 
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14

}


let playerDeck, computerDeck; 
let playerCard, computerCard;

function startGame() {

    const gameDeck = new Deck(); 
    gameDeck.shuffleDeck(); 

    //deal cards to player and computer. Cut the deck in half and give each half to each player
   const deckCut =  Math.ceil(gameDeck.deckLength / 2)
    //slice from beginning to middle. Middle to end
    playerDeck = new Deck(gameDeck.cards.slice(0, deckCut));
    computerDeck = new Deck(gameDeck.cards.slice(deckCut, gameDeck.deckLength))

    console.log("How to play: \n Open the console. \n Type in the function gameLogic().\n Arrow up to retype the function. \n Continue until the end of the game.")
    
    console.log("Player has " + playerDeck.cards.length + " cards " + '\n' +
    "Computer has " + computerDeck.cards.length + " cards ")  

    gameLogic();
}


let playerPoints = 0;
let computerPoints = 0; 



//get first card of each deck then compare. If player card is greater player receives a point. Vice versa. If the value of each players card is equal, no one receives a point and both cards are discarded. 
function gameLogic() { 

    

const playerCard = playerDeck.flip();
const computerCard = computerDeck.flip();

 
    if (hasWon(playerCard, computerCard)) { 
        playerDeck.discard(playerCard); 
        computerDeck.discard(computerCard); 
        return "Player's Card Wins! Player Points: " + (playerPoints += 1)+ " Computer Points: " + computerPoints; 
        } else if (hasWon(computerCard, playerCard)) { 
            playerDeck.discard(playerCard); 
            computerDeck.discard(computerCard);
            return "Computer's Card Wins! Player Points: " + playerPoints + " Computer Points: " + (computerPoints += 1); 
        } else if (playerCard.value == computerCard.value) { 
            playerDeck.discard(playerCard); 
            computerDeck.discard(computerCard); 
           console.log("Draw!");
        } else { 
        if ((playerDeck.cards.length == 0) && (playerPoints > computerPoints)) { 
            console.log("Game Over! Players wins! Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        } else if ((playerDeck.cards.length == 0) && (computerPoints > playerPoints)) { 
            console.log("Game Over! Players Loses! Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        } 
        }
    }



function hasWon(card1, card2) { 
    if (playerDeck.cards.length != 0) { 
   return cardValue[card1.value] > cardValue[card2.value];
    }
} 

function deckCount(deck) { 
    return deck.cards.length; 
}

function createDeck() { 

    const deck = []; 
    for (let value of values) { 
        for (let suit of suits) { 
            deck.push(new Card(value, suit))
    }
        }  return deck;

}

startGame();
