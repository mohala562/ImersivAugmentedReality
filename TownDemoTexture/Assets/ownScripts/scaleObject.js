#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.UpArrow)){
		for(var child : Transform in transform){
			child.position += Vector3(0,-0.1,0);
			child.localScale += Vector3(0,0.01,0);
		}
	}
	
	if(Input.GetKey(KeyCode.DownArrow)){
		for(var child : Transform in transform){
			child.position += Vector3(0,0.1,0);
			child.localScale += Vector3(0,-0.01,0);
		}
	}
}