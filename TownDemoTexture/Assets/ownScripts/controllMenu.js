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
	
	}
	
	function gotoMap(){
	
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
	
	function hideStart(){
		GameObject.Find("VarScripts").GetComponent(moveStart).start = GameObject.Find("TextStart").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart).target = GameObject.Find("TextPosHiden").GetComponent(Transform);
		GameObject.Find("VarScripts").GetComponent(moveStart);
	}