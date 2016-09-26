window.addEventListener("load", function() {

	var imagen = document.getElementById("imagen");

			function bigImg(imagen) {
				var imagen = document.getElementById("imagen");
			    imagen.style.height = "350px";
			    imagen.style.width = "500px";
			}

			function normalImg(imagen) {
				var imagen = document.getElementById("imagen");
			    imagen.style.height = "250px";
			    imagen.style.width = "400px";
			}

			imagen.onmouseenter = bigImg;
			imagen.onmouseleave = normalImg;
	
/*		var bigImg = function(imagen) {
			var imagen = document.getElementById("imagen");
		    imagen.style.height = "500px";
		    imagen.style.width = "800px";
		}

		var normalImg = function(imagen) {
			var imagen = document.getElementById("imagen");
		    imagen.style.height = "250px";
		    imagen.style.width = "400px";
		}

		imagen.addEventListener("mouseenter",bigImg(this));
		imagen.addEventListener("mouseleave",normalImg(this));*/
/*		imagen.onmouseenter = bigImg(this);
		imagen.onmouseleave = normalImg(this);*/

});
