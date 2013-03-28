#pragma strict
var speed:float;
var start:float;
var end:float;

var hit:boolean;

function Update () {
    //transform.Rotate(0, speed*Time.deltaTime, 0);
    if(!hit)
    {
    	transform.Translate(speed*Time.deltaTime,0,0);
    	//if(transform.position.x > end){
    		//transform.Translate(start,0,0);
    	//}
    }
    
}

function OnCollisionEnter(object : Collision) {
	//print(object.gameObject.name);
	if(object.gameObject.name == "Disc(Clone)" && !hit)
	{
		hit=true;
		rigidbody.useGravity=true;
		
		rigidbody.AddForce(speed,0,0);
	}
}