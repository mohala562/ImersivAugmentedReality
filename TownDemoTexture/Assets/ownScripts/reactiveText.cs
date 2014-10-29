using UnityEngine;
using System.Collections;

public class reactiveText : MonoBehaviour {

	public bool isQuit = false, isStart= false;
	void OnMouseEnter(){
		GetComponent<TextMesh> ().color = Color.red;
		}

	void OnMouseExit(){
		GetComponent<TextMesh> ().color = Color.black;
		}

	void OnMouseDown(){
				if (isQuit) {
						Application.Quit ();
				} else if (isStart) {
						Application.LoadLevel (2);
				} else {
						Application.LoadLevel (1);
				}
		}

}
