// game variables 
var words = ["MY GIRL", "BACK IN BLACK", "BEAT IT", "BORN TO BE WILD", "I GOT YOU BABE", "I WANNA HOLD YOUR HAND", 
"BORN TO BE WILD", "I GOT YOU BABE", "I WANNA HOLD YOUR HAND", "LUCY IN THE SKY WITH DIAMONDS", "ROADHOUSE BLUES", 
"SATISFACTION", "WALKING ON SUNSHINE"];
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

// song variables
var audio = new Audio();
var quarterDrop = new Audio("assets/music/quarterdrop.mp3");
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
var wins = 0;




// create random word for loop
function randomWord() {
    aryWordState = [];
    aryWord = words[Math.floor(Math.random() * words.length)];

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


// put in key buttons

// hide button function and run guessLetter()

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
// guess letter function 

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
                
                if (aryWord == "MY GIRL") {
                    audio.pause();
                    audio = myGirl;
                    songInfo(1);
                } if (aryWord == "BACK IN BLACK") {
                    audio.pause();
                    audio = backInBlack;
                    songInfo(2);
                } if (aryWord == "BEAT IT") {
                    audio.pause();
                    audio = beatIt;
                    songInfo(3);
                } if (aryWord == "BORN TO BE WILD") {
                    audio.pause();
                    audio = bornWild;
                    songInfo(4);
                } if (aryWord == "I GOT YOU BABE") {
                    audio.pause();
                    audio = gotYouBabe;
                    songInfo(5);
                } if (aryWord == "I WANNA HOLD YOUR HAND") {
                    audio.pause();
                    audio = holdYourHand;
                    songInfo(6);
                } if (aryWord == "LUCY IN THE SKY WITH DIAMONDS") {
                    audio.pause();
                    audio = lucySky;
                    songInfo(7);
                } if (aryWord == "ROADHOUSE BLUES") {
                    audio.pause();
                    audio = roadHouseBlues;
                    songInfo(8);
                } if (aryWord == "SATISFACTION") {
                    audio.pause();
                    audio = satisfaction;
                    songInfo(9);
                } if (aryWord == "WALKING ON SUNSHINE") {
                    audio.pause();
                    audio = sunshine;
                    songInfo(10);
                } 

            }
        } 
    } 
    console.log("guesses: " + guesses);
    guesses--;
    document.getElementById("guesses-left").innerHTML = guesses;
    if (guesses == 0) {
        document.getElementById("game-zone").innerHTML = "OUT OF ORDER"
    }
  

} 
            
         
    
    

// start game 
function quarter() {
    quarterDrop.play();
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
    } 
    document.getElementById("wins").innerHTML = wins;
}

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
    } if (aryWord == "SATISFACTION") {
        document.getElementById("hint-reveal").innerHTML = "artist: The Rolling Stones";
    } if (aryWord == "WALKING ON SUNSHINE") {
        document.getElementById("hint-reveal").innerHTML = "artist: Katrina and the Waves";
    } 
}