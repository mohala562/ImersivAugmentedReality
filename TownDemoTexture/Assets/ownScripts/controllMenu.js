	var selectionPlane:GameObject;
	
	//Menucontroll variabels
	var isQuit: boolean = false;
	var isStart: boolean = false;
	var isMap: boolean = false;
	var isMenu:boolean = false;
	var isSettings:boolean = false;
	
	//Setting variabels
	static var oculusVision:boolean = true;
	static var playerPosition:Vector3 = Vector3(0.0,0.0,0.0);
	static var entryPoint:int = 0;
	static var resizeBuilding:int = 0;
	
	function OnMouseEnter(){
		renderer.material.color = Color.red;
		}

	function OnMouseExit(){
		renderer.material.color = Color.black;
		}

	function OnMouseDown(){
		renderer.material.color = Color.green;
				if (isQuit) {
						Application.Quit ();
				}else if (isMenu){
						gotoMenu();
				}else if (isStart) {
						gotoStart();
				}else if (isMap){
						gotoMap();
				}else if (isSettings) {
						gotoSettings();
				}else{
					changeValue();
				}
		}
		
	function gotoMenu(){	
		GameObject.Find("VarScripts").GetComponent(moveSettings).start = GameObject.Find("TextSettings").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveSettings).target = GameObject.Find("TextPosHiden").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveSettings);
		
				
		GameObject.Find("VarScripts").GetComponent(movePlayer).start = GameObject.Find("First Person Controller").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer).target = GameObject.Find("CameraPosStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer);
		
		GameObject.Find("VarScripts").GetComponent(moveStart).start = GameObject.Find("TextStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart).target = GameObject.Find("TextPosStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart);
	}

	function gotoStart(){
     var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
     var hit : RaycastHit;
     if(Physics.Raycast(ray, hit)){
        GameObject.Find("RayHit").GetComponent(Transform).position = hit.point;
        GameObject.Find("RayHit").GetComponent(Transform).rotation = GameObject.Find("First Person Controller").GetComponent(Transform).rotation;
        
        GameObject.Find("VarScripts").GetComponent(movePlayer).start = GameObject.Find("First Person Controller").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer).target = GameObject.Find("RayHit").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer);
		
		GameObject.Find("First Person Controller").GetComponent(FPSInputController).enabled = true;
		GameObject.Find("First Person Controller").GetComponent(MouseLook).enabled = true;
		GameObject.Find("First Person Controller").GetComponent(CharacterMotor).enabled = true;
		GameObject.Find("Main Camera").GetComponent(MouseLook).enabled = true;		
		}
	}
	
	function gotoMap(){
		selectionPlane.active = true;
	
		GameObject.Find("VarScripts").GetComponent(moveStart).start = GameObject.Find("TextStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart).target = GameObject.Find("TextPosHiden").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart);
	
		GameObject.Find("VarScripts").GetComponent(movePlayer).start = GameObject.Find("First Person Controller").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer).target = GameObject.Find("CameraPosMap").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer);		
	}
	
	function gotoSettings(){
		GameObject.Find("VarScripts").GetComponent(moveStart).start = GameObject.Find("TextStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart).target = GameObject.Find("TextPosHiden").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart);
		
		GameObject.Find("VarScripts").GetComponent(movePlayer).start = GameObject.Find("First Person Controller").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer).target = GameObject.Find("CameraPosSettings").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(movePlayer);

		GameObject.Find("VarScripts").GetComponent(moveSettings).start = GameObject.Find("TextSettings").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveSettings).target = GameObject.Find("TextPosSettings").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveSettings);
	}
	
	function changeValue(){
	
	}