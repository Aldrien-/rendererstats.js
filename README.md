threex.rendererstats
====================

It is a three.js extension to display realtime informations about ```THREE.WebGLRenderer```.
It is widely inpired from @mrdoob [stats.js](https://github.com/mrdoob/stats.js/).
It is released under MIT license

## How to use it 

first include ```threex.rendererstats.js``` with the usual

```html
    <script src='threex.rendererstats.js'></script>
```

then initialize it with 

```
var rendererStats	= new THREEx.RendererStats()
```

position it on the page with css with something along this line

```
rendererStats.domElement.style.position	= 'absolute'
rendererStats.domElement.style.left	= '0px'
rendererStats.domElement.style.bottom	= '0px'
document.body.appendChild( rendererStats.domElement )
```

finally update it at every frame

```
rendererStats.update(renderer);
```