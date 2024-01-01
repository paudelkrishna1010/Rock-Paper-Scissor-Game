let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let options = ["rock", "paper", "scissor"];
let userchoice;
let computerchoice;
let msg = document.querySelector(".msg");
let userscore = document.getElementById("userscore");
let compscore = document.getElementById("compscore");
let uscore = 0;
let cscore = 0;
let mvemsg= document.getElementById("cmove");

function scoreupdate() {
  userscore.innerText = uscore;
  compscore.innerText = cscore;
}
function mveupdtmsg(){
  mvemsg.innerText=`Computer choosed : ${computerchoice}`;
}
rock.addEventListener("click", () => {
  console.log("User clicked on rock");
  computerchoice = compchoicegen();
  userchoice = options[0];
  console.log(`computer choosed ${computerchoice}`);
  mveupdtmsg();
  gamelogic(userchoice, computerchoice);
});

paper.addEventListener("click", () => {
  console.log("User clicked on paper");
  computerchoice = compchoicegen();
  userchoice = options[1];
  console.log(`computer choosed ${computerchoice}`);
  mveupdtmsg();
  gamelogic(userchoice, computerchoice);
});

scissor.addEventListener("click", () => {
  console.log("User clicked on scissor");
  computerchoice = compchoicegen();
  userchoice = options[2];
  console.log(`computer choosed ${computerchoice}`);
  mveupdtmsg();
  gamelogic(userchoice, computerchoice);
});

function compchoicegen() {
  // math.randrom gen 0 to 1 in points to get from o to 2 we did multiply it with 3 and for removing points used math.floor
  return options[Math.floor(Math.random() * 3)];
}

function gamelogic(userchoice, computerchoice) {
  let userwin = true;
  if (userchoice == computerchoice) {
    msg.innerText = "Draw! Try Again";
    msg.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    if (userchoice == "rock") {
      if (computerchoice == "scissor") {
        userwin = true;
        msg.innerText = `You won! ${userchoice} beats ${computerchoice}`;
      } else {
        userwin = false;
        msg.innerText = `You Loose! ${computerchoice} beats ${userchoice}`;
      }
    }
    if (userchoice == "paper") {
      if (computerchoice == "rock") {
        userwin = true;
        msg.innerText = `You won! ${userchoice} beats ${computerchoice}`;
      } else {
        userwin = false;
        msg.innerText = `You Loose! ${computerchoice} beats ${userchoice}`;
      }
    }
    if (userchoice == "scissor") {
      if (computerchoice == "paper") {
        userwin = true;
        msg.innerText = `You won! ${userchoice} beats ${computerchoice}`;
      } else {
        userwin = false;
        msg.innerText = `You Loose! ${computerchoice} beats ${userchoice}`;
      }
    }
    if (userwin) {
      uscore++;
      msg.style.backgroundColor = "#008204";
    } else {
      cscore++;
      msg.style.backgroundColor = "#bd0000";
    }
  }

  scoreupdate();
}
