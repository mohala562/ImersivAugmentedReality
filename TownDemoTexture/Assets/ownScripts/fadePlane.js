#pragma strict

static var timer: float = 10.0;

function Start () {
	renderer.material.color.a = 1;
	
	GameObject.Find("VarScripts").GetComponent(movePlayer).start = GameObject.Find("First Person Controller").GetComponent(Transform);
	GameObject.Find("VarScripts").GetComponent(movePlayer).target = GameObject.Find("CameraPosStart").GetComponent(Transform);
	GameObject.Find("VarScripts").GetComponent(movePlayer);
	
	GameObject.Find("First Person Controller").GetComponent(FPSInputController).enabled = false;
	GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = false;
	GameObject.Find("First Person Controller").GetComponent(CharacterMotor).enabled = false;
	GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = false;
}

function Update () {
	timer = timer - Time.deltaTime;
	if(timer >= 0){
		renderer.material.color.a -= 0.3 * Time.deltaTime;
	}
	
	if(timer <= 0){
		timer = 0;
		gameObject.active = false;
	}
}