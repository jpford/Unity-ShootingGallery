#pragma strict
var isDead:boolean;
var interval:float;

function Start () {
	isDead = false;
}

function Update () {
	if (isDead) {
		interval -= Time.deltaTime;
		if(interval <= 0.0 )
		{
			Destroy(gameObject);
		}
	}
}

function OnCollisionEnter() {
	isDead = true;
}