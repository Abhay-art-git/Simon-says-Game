let gameseq=[];
let userseq=[];
let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","purple"];



let started = false;
let level = 0;

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();

    }

})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash") 
    } , 250);

}


function levelup(){
    userseq=[];
    level++;
    h2.innerText = `LEVEL: ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcol = btns[randidx];
    let randbtn = document.querySelector(`.${randcol}`);
    // console.log(randidx);
    // console.log(randcol);
    // console.log(randbtn);
    gameseq.push(randcol);
    btnflash(randbtn);

}


function checkAns(idx){
    

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup , 1000); 
        }

        

    }
    else{
        h2.innerText = `GAME OVER restart your scocre ${level}`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        } , 250);
        reset();

    }

}

function btnpress(){
    let btn = this
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
checkAns(userseq.length-1);



};

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click" , btnpress)
};

function reset(){
    started = false;
    gamesq=[];
    userseq=[];
    level=0;

};
