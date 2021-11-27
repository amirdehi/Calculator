let line = "";
let roundState=0;

function addChar(char){
    if (line==="0")
        line="";
    line+=char;
    checkLength();
    document.getElementById("answer").innerHTML=line;
}

function addOperator(char) {
    line+=char;
    checkLength();
    document.getElementById("answer").innerHTML = line;
}

function addRound() {
    if (line === "0") {
        line="";
    }
    if (roundState === 0) {
        line += "(";
        roundState++;
    } else if (roundState === 1) {
        line += ")";
        roundState--;
    }
    checkLength();
    document.getElementById("answer").innerHTML = line;
}

function percentage() {
    let num=Number(line);
    line=String(num/100);
    document.getElementById("answer").innerHTML=line;
}

function backSpace() {
    line=line.slice(0,-1);
    if (line==="") {
        line = "0";
    }
    checkLength();
    document.getElementById("answer").innerHTML=line;
}

function clearAll() {
    line="0";
    roundState=0;
    checkLength();
    document.getElementById("answer").innerHTML=line;
}

function showAnswer() {
    line=math.eval(line);
    document.getElementById("answer").innerHTML = line;
}


function checkLength() {
    let size = "";
    if (line.length <= 11)
        size = "40px";
    else if (line.length <= 14)
        size = "32px";
    else if (line.length <= 18)
        size = "25px";
    else if (line.length<=22)
        size="20px";
    else {
        line="0";
    }
    document.getElementById("entry").style.fontSize = size;
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 107) {
        showAnswer();
    }else if(event.keyCode === 8 || event.keyCode === 46) {
        backSpace();
    }else if(event.keyCode === 27) {
        clearAll();
    }else if((event.keyCode >=96 && event.keyCode <=105) || (event.keyCode >=48 && event.keyCode <=57)) {
        addChar(String.fromCharCode(event.keyCode));
    }
});