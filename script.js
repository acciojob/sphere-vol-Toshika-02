function volume_sphere() {
    // Get the value of the radius input
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Calculate the volume of the sphere
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    // Display the volume in the volume input field
    document.getElementById('volume').value = volume.toFixed(2);
}

// Assign the volume_sphere function to execute when the window loads and the form is submitted
window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Call the volume_sphere function
        volume_sphere();
    };
};
