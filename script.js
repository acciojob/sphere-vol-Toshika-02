function volume_sphere() {
    //Write your code here
	// const form = document.getElementById('MyForm');
	// let r = Number(form.radius.value)
	// form.volume.value = (4*Math.PI*(r**3) / 3);
	// return false;
	 var radius = parseFloat(document.getElementById('radius').value);
    if (!isNaN(radius)) {
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(2);
  } 
  
  return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
