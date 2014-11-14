#pragma strict

function Update () {
	if(this.gameObject.transform.GetChild(0).transform.position.y > this.gameObject.transform.GetChild(1).transform.position.y-3.0){
		this.gameObject.transform.GetChild(1).transform.position.y = this.gameObject.transform.GetChild(0).transform.position.y+3.0;
	}	
}