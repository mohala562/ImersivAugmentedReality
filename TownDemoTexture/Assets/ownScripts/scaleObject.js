#pragma strict

function Start () {

}

function Update () {
	if(Input.GetButton("RiseHigh")){
		for(var child : Transform in transform){
			child.position += Vector3(0,-0.1,0);
			child.localScale += Vector3(0,0.01,0);
		}
	}
	
	if(Input.GetButton("RiseDeep")){
		for(var child : Transform in transform){
			child.position += Vector3(0,0.1,0);
			child.localScale += Vector3(0,-0.01,0);
		}
	}
}