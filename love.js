function checkloveper() {
	var loveScore = Math.random() * 100;
	loveScore = Math.floor(loveScore);
	document.getElementById('loverose').value = loveScore + "%";
}