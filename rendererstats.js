/**
 * @author mrdoob / http://mrdoob.com/
 * @author jetienne / http://jetienne.com/
 * @author FragColor / Alexandre Lemire
 */

/**
 * @brief Provide stats about the WebGL renderer of three.js
 */
var RendererStats = function () {
	// Create a main container
	var container = document.createElement('div');
	// Define the container style
	container.style.cssText = 'width : 80px; opacity : 0.9; cursor : pointer; padding : 0 0 3px 3px; text-align : left; background-color : #200;';

	// Create a title container
	var title = document.createElement('div');
	// Define the title container style
	title.style.cssText = 'color : #f00; font-family : Helvetica, Arial, sans-serif; font-size : 9px; font-weight : bold; line-height : 15px';
	// Set the title name
	title.innerHTML = 'WebGLRenderer';
	// Adds the title container to the main container
	container.appendChild(title);
	
	// Create an dom structure to store information about THREE.WebGLRenderer
	var lines = [];
	var length = 10;

	for(var i = 0; i < length; i++)
	{
		// Create a line container
		lines[i] = document.createElement('div');
		// Define the line style
		lines[i].style.cssText = 'color : #f00; background-color: #311; font-family : Helvetica, Arial, sans-serif; font-size : 9px; font-weight : bold; line-height : 15px';
		// Set the default content of the line
		lines[i].innerHTML = '-';
		// Add the line container to the main container
		container.appendChild(lines[i]);
	}

	// Initialize the time of the last refresh
	var lastRefreshTime = Date.now();

	// Define the public part of the RendererStats object
	return {
		// The main dom element
		domElement : container,

		/**
		 * @brief Update information about THREE.WebGLRenderer
		 * @param THREE.WebGLRenderer webGLRenderer The webGLRenderer object
		 */
		update : function(webGLRenderer) {
			// Refresh 30 times per second at most
			if(Date.now() - lastRefreshTime < 1000 / 30) return;

			// Set the time of the last refresh
			lastRefreshTime = Date.now();

			// Update information
			var i = 0;

			lines[i++].textContent = "== Memory =====";
			lines[i++].textContent = "Geometries: " + webGLRenderer.info.memory.geometries;
			lines[i++].textContent = "Textures: " + webGLRenderer.info.memory.textures;

			lines[i++].textContent = "== Programs ===";
			lines[i++].textContent = "Programs: " + webGLRenderer.info.programs.length;

			lines[i++].textContent = "== Render =====";
			lines[i++].textContent = "Calls: " + webGLRenderer.info.render.calls;
			lines[i++].textContent = "Vertices: " + webGLRenderer.info.render.vertices;
			lines[i++].textContent = "Faces: " + webGLRenderer.info.render.faces;
			lines[i++].textContent = "Points: "	+ webGLRenderer.info.render.points;
		}
	}
};