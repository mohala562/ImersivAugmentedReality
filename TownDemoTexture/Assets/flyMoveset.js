#pragma strict

var standingPlane:GameObject;
var speed:int;
var planeActive:boolean;
var motorScript:CharacterMotor;

function Update () {
	if(planeActive){
		var start = standingPlane.transform.position;	
		var step = speed * Time.deltaTime;
		
		if(this.transform.position.y < standingPlane.transform.position.y && planeActive){
			this.transform.position.y = standingPlane.transform.position.y+2.0;
		}
		
		if(Input.GetButton("FlyHigh")){
			standingPlane.transform.position += Vector3(0,1,0);
		}else if(Input.GetButton("FlyDown")){
			standingPlane.active = false;
			planeActive=false;
					
			motorScript.movement.maxForwardSpeed = 4.0;
			motorScript.movement.maxSidewaysSpeed = 3.0;
			motorScript.movement.maxBackwardsSpeed = 3.0;
		}		
	}else{
		if(Input.GetButton("FlyHigh")){
			standingPlane.transform.position = this.transform.position-Vector3(0,-2.0,0);
			planeActive=true;
			standingPlane.SetActive(true);
			standingPlane.transform.position += Vector3(0,1,0);
			
			motorScript.movement.maxForwardSpeed = 40.0;
			motorScript.movement.maxSidewaysSpeed = 30.0;
			motorScript.movement.maxBackwardsSpeed = 30.0;
		}
	}
}