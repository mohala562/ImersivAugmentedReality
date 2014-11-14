#pragma strict

var recentCamera:GameObject;
var newCamera:GameObject;
var otherText:GameObject;

function OnMouseDown () {
	otherText.SetActive(true);
	recentCamera.SetActive(false);
	newCamera.SetActive(true);
	this.gameObject.SetActive(false);
	
	
}