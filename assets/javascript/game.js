// game variables 
var words = ["MY GIRL", "BACK IN BLACK", "BEAT IT", "BORN TO BE WILD", "I GOT YOU BABE",  
"BORN TO BE WILD", "I GOT YOU BABE", "I WANNA HOLD YOUR HAND", "LUCY IN THE SKY WITH DIAMONDS", "ROADHOUSE BLUES", 
"SATISFACTION", "WALKING ON SUNSHINE", "BILLIE JEAN", "HIT THE ROAD JACK", "I GET AROUND", "LIGHT MY FIRE", 
"SUNSHINE OF YOUR LOVE", "ALL ALONG THE WATCHTOWER", "HOUSE OF THE RISING SUN", "ANOTHER ONE BITES THE DUST",
"SUMMER IN THE CITY"];
var aryGuesses = [];
var aryWord = words[0].split("");
var letter = "";
var aryWordState = [];
var guesses = 3;
var wins = 0;
var currentSong = "";
var letterBank = 0;
var holdWord = "";
var correct = true;
var wins = 0;


// song variables
var audio = new Audio();
var quarterDrop = new Audio("assets/music/quarterdrop.mp3");
var recordScratch = new Audio("assets/music/recordscratch.mp3");
var myGirl = new Audio("assets/music/mygirl.mp3");
var backInBlack = new Audio("assets/music/backinblack.mp3");
var beatIt = new Audio("assets/music/beatit.mp3");
var bornWild = new Audio("assets/music/borntobewild.mp3");
var gotYouBabe = new Audio("assets/music/igotyoubabe.mp3");
var holdYourHand = new Audio("assets/music/iwannaholdyourhand.mp3");
var lucySky = new Audio("assets/music/lucyintheskywithdiamonds.mp3");
var myGirl = new Audio("assets/music/mygirl.mp3");
var roadHouseBlues = new Audio("assets/music/roadhouseblues.mp3");
var satisfaction = new Audio("assets/music/satisfaction.mp3");
var sunshine = new Audio("assets/music/walkingonsunshine.mp3");
var billieJean = new Audio("assets/music/billiejean.mp3");
var hitTheRoadJack = new Audio("assets/music/hittheroadjack.mp3");
var iGetAround = new Audio("assets/music/igetaround.mp3");
var lightMyFire = new Audio("assets/music/lightmyfire.mp3");
var sunshineOfYourLove = new Audio("assets/music/sunshineofyourlove.mp3");
var allAlongTheWatchtower = new Audio("assets/music/watchtower.mp3");
var houseOfRisingSun = new Audio("assets/music/houseofrisingsun.mp3");
var bitesTheDust = new Audio ("assets/music/onebitesthedust.mp3");
var summerInTheCity = new Audio ("assets/music/summerinthecity.mp3");






// pulls random word from array and replaces the letters with underlines
function randomWord() {
    aryWordState = [];
    aryWord = words[Math.floor(Math.random() * words.length)];
    var index = words.indexOf(aryWord);
    if (index > -1) {
        words.splice(index, 1);
    }
    for (i = 0; i < aryWord.length; i++) {
        if (aryWord[i] == " ") {
            aryWordState.push("&nbsp;");
        } else {
        aryWordState.push("_");
        letterBank++;
        document.getElementById("game-zone").innerHTML = aryWordState.join(" ");
        } 
        
    } 
    console.log(words);
    console.log(letterBank);
    console.log(aryWord);
} 


// hides keyboard buttons and triggers guessLetter()

function hideLetter(x) {
    
    if (x === 1) {
       document.getElementById("button1").style.visibility = "hidden";
       letter = document.getElementById("button1").value;
       guessLetter();
   } if (x === 2) {
       document.getElementById("button2").style.visibility = "hidden";
       letter = document.getElementById("button2").value; 
       guessLetter();
   }if (x === 3) {
       document.getElementById("button3").style.visibility = "hidden";
       letter = document.getElementById("button3").value;
       guessLetter();
   }if (x === 4) {
       document.getElementById("button4").style.visibility = "hidden";
       letter = document.getElementById("button4").value;
       guessLetter();
   }if (x === 5) {
       document.getElementById("button5").style.visibility = "hidden";
       letter = document.getElementById("button5").value;
       guessLetter();
   }if (x === 6) {
       document.getElementById("button6").style.visibility = "hidden";
       letter = document.getElementById("button6").value;
       guessLetter();
   }if (x === 7) {
       document.getElementById("button7").style.visibility = "hidden";
       letter = document.getElementById("button7").value;
       guessLetter();
   }if (x === 8) {
       document.getElementById("button8").style.visibility = "hidden";
       letter = document.getElementById("button8").value;
       guessLetter();
   }if (x === 9) {
       document.getElementById("button9").style.visibility = "hidden";
       letter = document.getElementById("button9").value;
       guessLetter();
   }if (x === 10) {
       document.getElementById("button10").style.visibility = "hidden";
       letter = document.getElementById("button10").value;
       guessLetter();
   }if (x === 11) {
       document.getElementById("button11").style.visibility = "hidden";
       letter = document.getElementById("button11").value;
       guessLetter();
   }if (x === 12) {
       document.getElementById("button12").style.visibility = "hidden";
       letter = document.getElementById("button12").value;
       guessLetter();
   }if (x === 13) {
       document.getElementById("button13").style.visibility = "hidden";
       letter = document.getElementById("button13").value;
       guessLetter();
   }if (x === 14) {
       document.getElementById("button14").style.visibility = "hidden";
       letter = document.getElementById("button14").value;
       guessLetter();
   }if (x === 15) {
       document.getElementById("button15").style.visibility = "hidden";
       letter = document.getElementById("button15").value;
       guessLetter();
   }if (x === 16) {
       document.getElementById("button16").style.visibility = "hidden";
       letter = document.getElementById("button16").value;
       guessLetter();
   }if (x === 17) {
       document.getElementById("button17").style.visibility = "hidden";
       letter = document.getElementById("button17").value;
       guessLetter();
   }if (x === 18) {
       document.getElementById("button18").style.visibility = "hidden";
       letter = document.getElementById("button18").value;
       guessLetter();
   }if (x === 19) {
       document.getElementById("button19").style.visibility = "hidden";
       letter = document.getElementById("button19").value;
       guessLetter();
   }if (x === 20) {
       document.getElementById("button20").style.visibility = "hidden";
       letter = document.getElementById("button20").value;
       guessLetter();
   }if (x === 21) {
       document.getElementById("button21").style.visibility = "hidden";
       letter = document.getElementById("button21").value;
       guessLetter();
   }if (x === 22) {
       document.getElementById("button22").style.visibility = "hidden";
       letter = document.getElementById("button22").value;
       guessLetter();
   }if (x === 23) {
       document.getElementById("button23").style.visibility = "hidden";
       letter = document.getElementById("button23").value;
       guessLetter();
   }if (x === 24) {
       document.getElementById("button24").style.visibility = "hidden";
       letter = document.getElementById("button24").value;
       guessLetter();
   }if (x === 25) {
       document.getElementById("button25").style.visibility = "hidden";
       letter = document.getElementById("button25").value;
       guessLetter();
   }if (x === 26) {
       document.getElementById("button26").style.visibility = "hidden";
       letter = document.getElementById("button26").value;
       guessLetter();
   } 




}
// guesses letter and triggers win game or lose game

function guessLetter() {
    for (i = 0; i < aryWord.length; i++) {
        if (aryWord[i] === letter) {  
            aryWordState[i] = letter;
        letterBank--;
        
            guesses= 4;
            document.getElementById("guesses-left").innerHTML = guesses;
        
        document.getElementById("game-zone").innerHTML = aryWordState.join(" ");
        console.log("Letters left:" + letterBank);
       
            if (letterBank == 0) {
                gameWin();
                if (aryWord == "MY GIRL") {
                    pauseSong();
                    audio = myGirl;
                    songInfo(1);
                } if (aryWord == "BACK IN BLACK") {
                    pauseSong();
                    audio = backInBlack;
                    songInfo(2);
                } if (aryWord == "BEAT IT") {
                    pauseSong();
                    audio = beatIt;
                    songInfo(3);
                } if (aryWord == "BORN TO BE WILD") {
                    pauseSong();
                    audio = bornWild;
                    songInfo(4);
                } if (aryWord == "I GOT YOU BABE") {
                    pauseSong();
                    audio = gotYouBabe;
                    songInfo(5);
                } if (aryWord == "I WANNA HOLD YOUR HAND") {
                    pauseSong();
                    audio = holdYourHand;
                    songInfo(6);
                } if (aryWord == "LUCY IN THE SKY WITH DIAMONDS") {
                    pauseSong();
                    audio = lucySky;
                    songInfo(7);
                } if (aryWord == "ROADHOUSE BLUES") {
                    pauseSong();
                    audio = roadHouseBlues;
                    songInfo(8);
                } if (aryWord == "SATISFACTION") {
                    pauseSong();
                    audio = satisfaction;
                    songInfo(9);
                } if (aryWord == "WALKING ON SUNSHINE") {
                    pauseSong();
                    audio = sunshine;
                    songInfo(10);
                } if (aryWord == "BILLIE JEAN") {
                    pauseSong();
                    audio = billieJean;
                    songInfo(11);
                } if (aryWord == "HIT THE ROAD JACK") {
                    pauseSong();
                    audio = hitTheRoadJack;
                    songInfo(12);
                } if (aryWord == "I GET AROUND") {
                    pauseSong();
                    audio = iGetAround;
                    songInfo(13);
                } if (aryWord == "LIGHT MY FIRE") {
                    pauseSong();
                    audio = lightMyFire;
                    songInfo(14);
                } if (aryWord == "SUNSHINE OF YOUR LOVE") {
                    pauseSong();
                    audio = sunshineOfYourLove;
                    songInfo(15);
                } if (aryWord == "ALL ALONG THE WATCHTOWER") {
                    pauseSong();
                    audio = allAlongTheWatchtower;
                    songInfo(16);
                } if (aryWord == "HOUSE OF THE RISING SUN") {
                    pauseSong();
                    audio = houseOfRisingSun;
                    songInfo(17);
                } if (aryWord == "ANOTHER ONE BITES THE DUST") {
                    pauseSong();
                    audio = bitesTheDust;
                    songInfo(18);
                } if (aryWord == "SUMMER IN THE CITY") {
                    pauseSong();
                    audio = summerInTheCity;
                    songInfo(19);
                } 

            }
        } 
    } 
    console.log("guesses: " + guesses);
    guesses--;
    document.getElementById("guesses-left").innerHTML = guesses;
    if (guesses == 0) {
        gameOver();
    }
  

} 
            

// starts game 

function quarter() {
    guesses = 3;
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("button2").style.visibility = "visible";
    document.getElementById("button3").style.visibility = "visible";
    document.getElementById("button4").style.visibility = "visible";
    document.getElementById("button5").style.visibility = "visible";
    document.getElementById("button6").style.visibility = "visible";
    document.getElementById("button7").style.visibility = "visible";
    document.getElementById("button8").style.visibility = "visible";
    document.getElementById("button9").style.visibility = "visible";
    document.getElementById("button10").style.visibility = "visible";
    document.getElementById("button11").style.visibility = "visible";
    document.getElementById("button12").style.visibility = "visible";
    document.getElementById("button13").style.visibility = "visible";
    document.getElementById("button14").style.visibility = "visible";
    document.getElementById("button15").style.visibility = "visible";
    document.getElementById("button16").style.visibility = "visible";
    document.getElementById("button17").style.visibility = "visible";
    document.getElementById("button18").style.visibility = "visible";
    document.getElementById("button19").style.visibility = "visible";
    document.getElementById("button20").style.visibility = "visible";
    document.getElementById("button21").style.visibility = "visible";
    document.getElementById("button22").style.visibility = "visible";
    document.getElementById("button23").style.visibility = "visible";
    document.getElementById("button24").style.visibility = "visible";
    document.getElementById("button25").style.visibility = "visible";
    document.getElementById("button26").style.visibility = "visible";
    document.getElementById("hint").style.visibility = "visible";
    document.getElementById("hint-reveal").innerHTML = "";
    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("guess-box").style.visibility = "visible";
    document.getElementById("wins-box").style.visibility = "visible";
    
}

// displays current song title and artist

function songInfo(s) {
    wins++;
    if (s == 1) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'My Girl' by The Temptations";
    } if (s == 2) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Back in Black' by AC/DC";
    } if (s == 3) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Beat It' by Michael Jackson";
    } if (s == 4) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Born To Be Wild' by Steppenwolf";
    } if (s == 5) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'I Got You Babe' by Sonny & Cher";
    } if (s == 6) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'I Wanna Hold Your Hand' by The Beatles";
    } if (s == 7) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Lucy In The Sky With Diamonds' by The Beatles";
    } if (s == 8) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Roadhouse Blues' by The Doors";
    } if (s == 9) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'(I Can't Get No) Satisfaction' by The Rolling Stones";
    } if (s == 10) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Walking On Sunshine' by Katrina and the Waves";
    } if (s == 11) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Billie Jean' by Michael Jackson";
    } if (s == 12) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Hit The Road Jack' by Ray Charles";
    } if (s == 13) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'I Get Around' by The Beach Boys";
    } if (s == 14) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Light My Fire' by The Doors";
    } if (s == 15) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Sunshine of Your Love' by Cream";
    } if (s == 16) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'All Along The Watchtower' by Jimi Hendrix";
    } if (s == 17) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'House of the Rising Sun' by The Animals";
    } if (s == 18) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Another One Bites The Dust' by Queen";
    } if (s == 19) {
        audio.play();
        document.getElementById("current-song").innerHTML = "Now playing:" + "<br>" + "'Summer In The City' by The Lovin' Spoonful";
    } 
    document.getElementById("wins").innerHTML = wins;
}

// displays current song artist

function revealHint() {
    if (aryWord == "MY GIRL") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Temptations";
    } if (aryWord == "BACK IN BLACK") {
        document.getElementById("hint-reveal").innerHTML = "artist: AC/DC";
    } if (aryWord == "BEAT IT") {
        document.getElementById("hint-reveal").innerHTML = "artist: Michael Jackson";
    } if (aryWord == "BORN TO BE WILD") {
        document.getElementById("hint-reveal").innerHTML = "artist: Steppenwolf";
    } if (aryWord == "I GOT YOU BABE") {
        document.getElementById("hint-reveal").innerHTML = "artist: Sonny & Cher";
    } if (aryWord == "I WANNA HOLD YOUR HAND") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Beatles";
    } if (aryWord == "LUCY IN THE SKY WITH DIAMONDS") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Beatles";
    } if (aryWord == "ROADHOUSE BLUES") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Doors";
    } if (aryWord == "BILLIE JEAN") {
        document.getElementById("hint-reveal").innerHTML = "artist: Michael Jackson";
    } if (aryWord == "HIT THE ROAD JACK") {
        document.getElementById("hint-reveal").innerHTML = "artist: Ray Charles";
    } if (aryWord == "I GET AROUND") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Beach Boys";
    } if (aryWord == "LIGHT MY FIRE") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Doors";
    } if (aryWord == "SUNSHINE OF YOUR LOVE") {
        document.getElementById("hint-reveal").innerHTML = "artist: Cream";
    } if (aryWord == "ALL ALONG THE WATCHTOWER") {
        document.getElementById("hint-reveal").innerHTML = "artist: Jimi Hendrix";
    } if (aryWord == "WALKING ON SUNSHINE") {
        document.getElementById("hint-reveal").innerHTML = "artist: Katrina & The Waves";
    } if (aryWord == "SATISFACTION") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Rolling Stones";
    } if (aryWord == "HOUSE OF THE RISING SUN") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Animals";
    } if (aryWord == "ANOTHER ONE BITES THE DUST") {
        document.getElementById("hint-reveal").innerHTML = "artist: Queen";
    } if (aryWord == "SUMMER IN THE CITY") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Lovin' Spoonful";
    } 
}

// stops current song when next song starts
function pauseSong() {
    audio.pause();
}

// game over hides the keyboard keys and stops the music resets letterBank, hint and current song

function gameOver(){
    audio.pause();
    recordScratch.play();
    document.getElementById("game-zone").innerHTML = "OUT OF ORDER"
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("button5").style.visibility = "hidden";
    document.getElementById("button6").style.visibility = "hidden";
    document.getElementById("button7").style.visibility = "hidden";
    document.getElementById("button8").style.visibility = "hidden";
    document.getElementById("button9").style.visibility = "hidden";
    document.getElementById("button10").style.visibility = "hidden";
    document.getElementById("button11").style.visibility = "hidden";
    document.getElementById("button12").style.visibility = "hidden";
    document.getElementById("button13").style.visibility = "hidden";
    document.getElementById("button14").style.visibility = "hidden";
    document.getElementById("button15").style.visibility = "hidden";
    document.getElementById("button16").style.visibility = "hidden";
    document.getElementById("button17").style.visibility = "hidden";
    document.getElementById("button18").style.visibility = "hidden";
    document.getElementById("button19").style.visibility = "hidden";
    document.getElementById("button20").style.visibility = "hidden";
    document.getElementById("button21").style.visibility = "hidden";
    document.getElementById("button22").style.visibility = "hidden";
    document.getElementById("button23").style.visibility = "hidden";
    document.getElementById("button24").style.visibility = "hidden";
    document.getElementById("button25").style.visibility = "hidden";
    document.getElementById("button26").style.visibility = "hidden";
    document.getElementById("hint").style.visibility = "hidden";
    letterBank = 0;
    document.getElementById("current-song").innerHTML = "";
    document.getElementById("hint-reveal").innerHTML = ""; 
}

// game win hides the keyboard keys resets letterBank and hint box

function gameWin() {

    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("button5").style.visibility = "hidden";
    document.getElementById("button6").style.visibility = "hidden";
    document.getElementById("button7").style.visibility = "hidden";
    document.getElementById("button8").style.visibility = "hidden";
    document.getElementById("button9").style.visibility = "hidden";
    document.getElementById("button10").style.visibility = "hidden";
    document.getElementById("button11").style.visibility = "hidden";
    document.getElementById("button12").style.visibility = "hidden";
    document.getElementById("button13").style.visibility = "hidden";
    document.getElementById("button14").style.visibility = "hidden";
    document.getElementById("button15").style.visibility = "hidden";
    document.getElementById("button16").style.visibility = "hidden";
    document.getElementById("button17").style.visibility = "hidden";
    document.getElementById("button18").style.visibility = "hidden";
    document.getElementById("button19").style.visibility = "hidden";
    document.getElementById("button20").style.visibility = "hidden";
    document.getElementById("button21").style.visibility = "hidden";
    document.getElementById("button22").style.visibility = "hidden";
    document.getElementById("button23").style.visibility = "hidden";
    document.getElementById("button24").style.visibility = "hidden";
    document.getElementById("button25").style.visibility = "hidden";
    document.getElementById("button26").style.visibility = "hidden";
    document.getElementById("hint").style.visibility = "hidden";
    letterBank = 0;
    document.getElementById("hint-reveal").innerHTML = ""; 
}

// resets letterBank and plays quarter drop sound
function resetGame() {
    letterBank = 0;
    quarterDrop.play();
}