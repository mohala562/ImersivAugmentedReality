private function GetDesiredHorizontalVelocity () {
	// Find desired velocity
	var desiredLocalDirection : Vector3 = tr.InverseTransformDirection(inputMoveDirection);
	var maxSpeed : float = MaxSpeedInDirection(desiredLocalDirection);
	if (grounded) {
		// Modify max speed on slopes based on slope speed multiplier curve
		var movementSlopeAngle = Mathf.Asin(movement.velocity.normalized.y)  * Mathf.Rad2Deg;
		maxSpeed *= movement.slopeSpeedMultiplier.Evaluate(movementSlopeAngle);
	}else{
		// Modify max speed in the air
		maxSpeed *= 15.0;
	}
	return tr.TransformDirection(desiredLocalDirection * maxSpeed);
}