var x = document.getElementById("main");

function strike() {
	x.classList.toggle("first");
}

x.addEventListener("click", strike);