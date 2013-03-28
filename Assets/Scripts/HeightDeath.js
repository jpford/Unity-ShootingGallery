#pragma strict
var height:float;

function Start () {

}

function Update () {
	if(gameObject.transform.position.y <= height) {
		Destroy(gameObject);
	}
}