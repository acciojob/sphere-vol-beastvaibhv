function volume_sphere(e) {
	e.preventDefault();
const radius = parseFloat(document.getElementById("radius").value);
	const volume = (4* Math.PI * radius ** 3)/3;

  const vol = document.getElementById("volume");
	vol.value = volume.toFixed(4);
	return;
} 
const ans = document.getElementById("submit");
ans.addEventListener("click", volume_sphere);
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
