#pragma strict

	var target: Transform;
	var start: Transform;
	
	// Speed in units per sec.
	var speed: float;	
	var smooth = 2.0;

	function Update () {
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		start.position = Vector3.MoveTowards(start.position, target.position, step);
				
		// Rotate our position to set camerangle
		start.rotation = Quaternion.Slerp(start.rotation, target.rotation,Time.deltaTime * smooth);
		
		if(start.position.Equals(target.position)) return;

	}
