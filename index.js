var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var pgoal = document.getElementById("pgoal");
var maxim = 999999999999;
var goal = resetgoal();
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
slider.onpointerdown = function(){
    output.innerHTML = this.value;
    document.getElementById("pval").style.visibility = "hidden";
    document.getElementById("deadon").style.display = 'none';
    document.getElementById("soclose").style.display = 'none';
    document.getElementById("sofar").style.display = 'none';
}
submit.onclick = function(){
    var ps = Math.round((maxim - ((output.innerHTML > goal) ? (output.innerHTML - goal) : (goal - output.innerHTML)))/100000000);
    score.innerHTML = ps;

    if(ps == 10000){
        document.getElementById('deadon').style.display = "block";
    }else if(ps >= 6000 && ps < 10000){
        document.getElementById('soclose').style.display = "block";
    }else if(ps < 6000){
        document.getElementById('sofar').style.display = "block";
    }
    document.getElementById("pval").style.visibility = "visible";
    pgoal.innerHTML = goal;
    goal = resetgoal();
};
function resetgoal(){
    return(Math.floor(Math.random() * (maxim - 111111111111 + 1) + 111111111111));
}