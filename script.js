function volume_sphere() {
    //Write your code here
	const form = document.getElementById('MyForm');
	let r = Number(form.radius.value)
	form.volume.value = (4*Math.PI*(r**3) / 3);
	return false;
	 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
