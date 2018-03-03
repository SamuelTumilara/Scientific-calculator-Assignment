
var first;
var second;
var result;
var opp;

function num1(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "1";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "1";
    }
}
function num2(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "2";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "2";
    }
}
function num3(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "3";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "3";
    }
}
function num4(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "4";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "4";
    }
}
function num5(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "5";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "5";
    }
}
function num6(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "6";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "6";
    }
}
function num7(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "7";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "7";
    }
}
function num8(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "8";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "8";
    }
}
function num9(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "9";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "9";
    }
}
function num0(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == "0";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + "0";
    }
}
function float(){
    if ( document.panel.answer.value == result){
        document.panel.answer.value == ".";
    }
    else {
        document.panel.answer.value = document.panel.answer.value + ".";
    }
}


function clr(){
    document.panel.answer.value = "";
    document.panel.show.value = "";
    return;
}
function del() {
    document.panel.answer.value = document.panel.answer.value.substring(0, document.panel.answer.value.length - 1);
    documnt.panel.show.value = document.panel.answer.value;
}
function add(){
    opp = "+";
    first = parseInt(document.panel.answer.value);
    document.panel.answer.value = "";
    document.panel.answer.value = first + " " + opp + " " ;
}
function sub(){
    opp = "-";
    first = parseInt(document.panel.answer.value);
    document.panel.answer.value = "";
    document.panel.answer.value = first + " " + opp + " ";
}
function multiply(){
    opp = "*";
    first = parseInt(document.panel.answer.value);
    document.panel.answer.value = "";
    document.panel.answer.value = first + " " + opp + " ";
}
function divide(){
    opp = "/";
    first = parseInt(document.panel.answer.value);
    document.panel.answer.value = "";
    document.panel.answer.value = first + " " + opp + " ";
}
function percentage(){
    opp = "%";
    first = parseInt(document.panel.answer.value);
    document.panel.answer.value = "";
    document.panel.answer.value = first + " " + opp + " ";
}
function square_root(){
    first = document.panel.answer.value;
    result = Math.sqrt(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "sqrt(" + first + ")";
}
function pi(){
    opp = "pi";
    first= parseInt(document.panel.answer.value);
    result = Math.PI(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;                
    document.panel.show.value = first + opp;
}
function e(){
    opp = "E";
    first= parseInt(document.panel.answer.value);
    result = first * 2.718;
    document.panel.answer.value = result;
    document.panel.answer.value = first + opp;
}
function cos(){
    first = parseInt(document.panel.answer.value);
    if(document.calcbutton.angle[0].checked){
        first *= Math.PI / 180;
    }
    else if(document.calcbutton.angle[2].checked){
        first *= Math.PI / 200;
    }
    else{
        first;
    }
    result = Math.cos(first);
    document.panel.answer.value = result;
    document.panel.show.value = "cos(" + first + ")";
}
function sin(){
    first = document.panel.answer.value;
    result = Math.sin(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "sin(" + first + ")";
}
function tan(){
    first = document.panel.answer.value;
    result = Math.tan(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "tan(" + first + ")";
}
function log(){
    first = document.panel.answer.value;
    result = Math.log10(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "log(" + first + ")";
}
function ln(){
    first = document.panel.answer.value;
    result = Math.log(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "ln(" + first + ")";
}
function arcsin(){
    first = document.panel.answer.value;
    result = Math.asin(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "arc_sin(" + first + ")";
}
function arccos(){
    first = document.panel.answer.value;
    result = Math.acos(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "arc_cos(" + first + ")";
}
function arctan(){
    first = document.panel.answer.value;
    result = Math.atan(parseInt(document.panel.answer.value));
    document.panel.answer.value = result;
    document.panel.show.value = "arc_tan(" + first + ")";
}
    

function power(){
    opp = "^";
    first = document.panel.answer.value;
    document.panel.answer.value = "";
    document.panel.answer.value = first + opp;
    
}
function fact (first){
    result = 1;
    for(var i = 1; i <= first; i++){
        result *= i;
        }
        return result;
}
function factorial(first){ 
    opp = "!";
    first = parseInt(document.panel.answer.value);
//result = fact();
    document.panel.answer.value = fact(first);
    document.panel.show.value = first + opp;

}

function equals(){
    second = parseInt(document.panel.answer.value);
    if (opp == "+"){
    result = first + second;
    }
    else if (opp == "-"){
        result = first - second;
    }
    else if (opp == "*"){
        result = first * second;
    }
    else if (opp == "/"){
        result = first / second;
    }
    else if(opp == "^"){
        result = Math.pow(first,second);
    }
    else if (opp == "%"){
        if (document.panel.answer.value != "0"){
           result = first / 100;
        }
        else if(document.panel.answer.value  > 1){
          result = (first / second) * 100;
        }
    }
    document.panel.answer.value = "";
    document.panel.answer.value = result.toString();
    document.panel.show.value = first + " " + opp + " " + second;
    
}