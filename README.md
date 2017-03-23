# Sparkflow PGX Boilerplate
Boilerplate codes to speed up development of Sparkflow PGX creatives.

## Demo Unit
https://goo.gl/yBNhNB

## How To Use

### HTML
Start coding your markup normally. After you're done, convert your markup to a string and append it using the `DOM` variable in the javascript boilerplate.
A good HTML to string converter can be found here: http://www.willpeavy.com/minifier/

```javascript
/**
 * Will hold the HTML markup string
 * that we will append in sparkflow's
 * body element.
 *
 * Remember to update this whenever you
 * update the markup when you're testing
 * locally.
 */
var DOM = 'Your HTML markup as a string...';
```

### Javascript
* Use file and start coding your creative using your favorite code editor.
> You can also just copy and paste this file directly using Sparkflow's JS/CSS code editor and work from there. I don't advice it though since sometimes sparkflow crashes :P

* Start adding your custom javascript codes inside `creativeInit()` function. You can also call your own init function inside `creativeInit()`. This function gets called automatically by Sparkflow on `adReady`.
```javascript
/**
 * ///////////////////////////////////////////////////
 * ###################################################
 * Your Custom Code Here
 * ###################################################
 * ///////////////////////////////////////////////////
 */
function creativeInit () {

	// Code away!
	console.log('creative init!');
}
```

### CSS
• Just use and start adding your custom styles at the very bottom of the file.

## Sparkflow API Documentation
The API documentation is a bit difficult to find specially for first time Sparkflow users - so just adding it here in case you need it. http://wiki.sparkflow.net/doc/ *(You need a sparkflow account to view this).*
