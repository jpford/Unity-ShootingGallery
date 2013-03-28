#pragma strict
var interval:float;

function Start () {

}

function Update () {
	interval -= Time.deltaTime;
	if(interval <= 0.0 )
	{
		Destroy(gameObject);
	}
}