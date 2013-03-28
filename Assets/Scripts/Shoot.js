#pragma strict
var prefabDisc:Transform;
var shootForce:float;
var rotationForce:float;

function Start() {
	shootForce = 1000;
	rotationForce = 10000;
}

function Update () {
	if(Input.GetButtonDown("Fire1"))	{
	
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition) ; //make sure you have a camera in the scene tagged as 'MainCamera'
	
		var instanceDisc = Instantiate(prefabDisc, transform.position, Quaternion.identity);
		//instanceDisc.rigidbody.AddForce(transform.forward * shootForce);	
		instanceDisc.rigidbody.AddForce(ray.direction * shootForce);
		instanceDisc.rigidbody.AddTorque(0,rotationForce,0);
	}
}