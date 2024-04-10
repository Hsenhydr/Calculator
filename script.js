function insert1(){
    document.getElementById("result").value += 1;
}

function insert2(){
    document.getElementById("result").value += 2;
}
function insert3(){
    document.getElementById("result").value += 3;
}

function insert4(){
    document.getElementById("result").value += 4;
}

function insert5(){
    document.getElementById("result").value += 5;
}

function insert6(){
    document.getElementById("result").value += 6;
}

function insert7(){
    document.getElementById("result").value += 7;
}

function insert8(){
    document.getElementById("result").value += 8;
}

function insert9(){
    document.getElementById("result").value += 9;
}

function insert0(){
    document.getElementById("result").value += 0;
}

function insertdot(){
    document.getElementById("result").value += ".";
}

function insertplus(){
    document.getElementById("result").value += "+";
}

function insertmin(){
    document.getElementById("result").value += "-";
}

function insertstar(){
    document.getElementById("result").value += '*';
}

function insertdiv(){
    document.getElementById("result").value += "/";
}

function calculate(){
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

function clr(){
    document.getElementById("result").value = '';
}
function deletee(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}
function insertper(){
    document.getElementById("result").value += "%";
}