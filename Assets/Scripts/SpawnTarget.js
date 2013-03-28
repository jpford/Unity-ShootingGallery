#pragma strict
var prefabTarget:Transform;
var interval:float;
var respawnTime:float;

function Start () {

}

function Update () {
	respawnTime -= Time.deltaTime;
	if(respawnTime <= 0.0 )	{
		Instantiate(prefabTarget, transform.position, Quaternion.identity);
		respawnTime = interval;	
	}
}