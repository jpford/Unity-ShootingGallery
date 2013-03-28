#pragma strict

var score:int;

function Start () {
	score = 0;
}

function Update () {

}

function UpdateScore() {
	score+=1;
	print(score);
}