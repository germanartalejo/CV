/*----------------------------------------------------------------*/
document.addEventListener('mousedown',function(event) {console.log(event.target)});
/*----------------------------------------------------------------*/
const res = document.getElementById('res');
const container = document.getElementById('container');
const formA = document.getElementById('a');
const formB = document.getElementById('b');
const sizeA = formA.querySelector('.formSize');
const sizeB = formB.querySelector('.formSize');
const labelA = formA.querySelector('label');
const labelB = formB.querySelector('label');
/*----------------------------------------------------------------*/
function px2cm(px) {
	var n = 0;
	var cpi = 2.54; // centimeters per inch
	var dpi = 96; // dots per inch
	var ppd = window.devicePixelRatio; // pixels per dot
	return (px * cpi / (dpi * ppd)).toFixed(n);
}
/*----------------------------------------------------------------*/
function showDimensions() {
	let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	res.innerHTML = `${vw}px x ${vh}px<br>${px2cm(vw)}cm x ${px2cm(vh)}cm`;
	let rectA = formA.getClientRects()[0];
	let rectB = formB.getClientRects()[0];
	sizeA.innerHTML = `${rectA.left} ${rectA.top} ${rectA.right} ${rectA.bottom}`;
	sizeB.innerHTML = `${rectB.left} ${rectB.top} ${rectB.right} ${rectB.bottom}`;
};
/*----------------------------------------------------------------*/
window.addEventListener('resize',showDimensions);
/*----------------------------------------------------------------*/
showDimensions();
/*----------------------------------------------------------------*/
labelA.addEventListener('mousedown',function(event) {
	container.style.left = `-100vw`;
});
labelB.addEventListener('mousedown',function(event) {
	container.style.left = `0vw`;
});
/*----------------------------------------------------------------*/