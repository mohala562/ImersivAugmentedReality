#pragma strict

static var oculusVision:boolean = true;
static var playerPosition:Vector3 = Vector3(0.0,0.0,0.0);
static var entryPoint:int = 0;
static var resizeBuilding:int = 0;

function Awake(){
DontDestroyOnLoad(transform.gameObject);
}