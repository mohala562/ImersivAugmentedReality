#pragma strict

var guiObjects: GameObject;
var panel: GameObject;

function Update () {
	if (Input.GetKeyDown (KeyCode.Escape)){
			Application.LoadLevel(0);		
		}
}