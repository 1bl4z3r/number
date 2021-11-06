var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var submit = document.getElementById("submit");
var score = document.getElementById("score");
var pgoal = document.getElementById("pgoal");
var live = document.getElementById("live");
live.innerHTML = 5;
score.innerHTML = 0;
var maxim = 999999999999;
var deadon = 0;
var goal = resetgoal();
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
slider.onpointerdown = function(){
    output.innerHTML = this.value;
    dhide();
}
submit.onclick = function(){
    if(Number(live.innerHTML) != 0){
        
        var ps = Math.round((maxim - ((output.innerHTML > goal) ? (output.innerHTML - goal) : (goal - output.innerHTML)))/100000000);
        score.innerHTML = Math.round((Number(score.innerHTML) + ps)/(6 - live.innerHTML));

        if(ps == 10000){
            document.getElementById('deadon').style.display = "block";
            deadon +=1;
        }else if(ps >= 6000 && ps < 10000){
            document.getElementById('soclose').style.display = "block";
        }else if(ps < 6000){
            document.getElementById('sofar').style.display = "block";
        }
        live.innerHTML -= 1;
        document.getElementById("pd").style.visibility = "visible";
        pgoal.innerHTML = "Your Goal was: " + goal;
        goal = resetgoal();
    }else if(Number(live.innerHTML) == 0) {
        slider.disabled = true;
        document.getElementById("submit").disabled = true;
        dhide();
        sc();    
    }
};
function dhide(){
    document.getElementById("pd").style.visibility = "hidden";
    document.getElementById("deadon").style.display = 'none';
    document.getElementById("soclose").style.display = 'none';
    document.getElementById("sofar").style.display = 'none';
}
function sc(){
    document.getElementById("pd").style.visibility = "visible";
    if(deadon != 0){
        pgoal.innerHTML = "You have exhausted your chances. You scored "+ score.innerHTML + " with "+deadon+" deadons";
    }else{
        pgoal.innerHTML = "You have exhausted your chances. You scored "+ score.innerHTML;
    }
    score.innerHTML = 0;
}
function resetgoal(){
    return (Math.floor(Math.random() * (maxim - 111111111111 + 1) + 111111111111));
}