#pragma strict

var playerObject:GameObject;
var guiObjects:GameObject;

function Update ()
{
    if(this.transform.position.y == playerObject.transform.position.y)
    {
        Destroy(guiObjects);
    }
}