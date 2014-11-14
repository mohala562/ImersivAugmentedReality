#pragma strict

var ScalabelBuildings:GameObject;
var textmesh:TextMesh;

static var counter=0;
static var recentBuildingID=0;
static var maxBuildings=0;

function Start () {
maxBuildings = ScalabelBuildings.transform.childCount;
	for(var building : Transform in ScalabelBuildings.transform){
		counter++;
		if(((building.gameObject).GetComponent("scaleObject") as MonoBehaviour).enabled){
			changeText(building);
			recentBuildingID = counter;
		}
	}
}

function OnMouseDown () {
	counter = 0;
	if(maxBuildings==recentBuildingID){
		(ScalabelBuildings.transform.GetChild(0).GetComponent("scaleObject") as MonoBehaviour).enabled = true;
		(ScalabelBuildings.transform.GetChild(maxBuildings-1).GetComponent("scaleObject") as MonoBehaviour).enabled = false;
		changeText(ScalabelBuildings.transform.GetChild(0).transform);
		recentBuildingID = 1;
	}else{
		for(var building : Transform in ScalabelBuildings.transform){
			counter++;
			if(counter==recentBuildingID)
				((building.gameObject).GetComponent("scaleObject") as MonoBehaviour).enabled = false;
			else if((counter-1)==recentBuildingID){
				((building.gameObject).GetComponent("scaleObject") as MonoBehaviour).enabled = true;
				changeText(building);
				recentBuildingID = counter;
				break;
			}
		}
	}
	
}

function changeText(building:Transform){
			for(var text : Transform in this.gameObject.transform){
				text.gameObject.GetComponent(TextMesh).text=building.name;				
			}
			textmesh.text = building.name;
}
