/**
 * Flag used to toggle between
 * development mode (when developing locally).
 *
 * Set this to true if you are developing locally.
 * When you are ready to upload your build to 
 * Sparkflow, set the value to false.
 */
var DEV_MODE = false;

/**
 * You can use this variable if you want to
 * use the absolute URL of your images.
 * ie: https://s3.amazonaws.com/spk-studio-1/27157/my-logo.png
 *
 * You can then prepend this to the assets that you
 * are going to preload something like:
 * ASSET_PATH + my-logo.png
 */
var ASSET_PATH = "";

/**
 * ///////////////////////////////////////////////////
 * ###################################################
 * PGX Initialization
 * ###################################################
 * ///////////////////////////////////////////////////
 * Main creative entry point.
 */
var PGX = (function () {

	/**
	 * Will hold the HTML markup string
	 * that we will append in sparkflow's
	 * body element.
	 *
	 * Remember to update this whenever you
	 * update the markup when you're testing
	 * locally.
	 */
	var DOM = '<div id="main-wrapper"><span>This is the PGX DIV wrapper. Populate me with markup.</span></div>';

	/**
	 * Initialization function.
	 */
	function init () {

		preload();
		bindEvents();
	}

	function preload () {

		ad.setLoading('SCENE');

		/**
		 * Preload all of your initial
		 * assets here. You can use the
		 * ASSET_PATH variable if you
		 * want to use the absolute url
		 * of your images.
		 *
		 * ie: ASSET_PATH + my-logo.png
		 */
		ad.preload([]);
	}

	/**
	 * Here we are using the DEV_MODE flag.
	 * If DEV_MODE is set to true, we are using
	 * jQuery's ready event. If it's false, we
	 * are using Sparkflow's adReady event.
	 *
	 * This makes your ad run locally for testing
	 * since Sparkflow's adReady only works inside
	 * Sparkflow's platform.
	 */
	function bindEvents () {

		if (!DEV_MODE) {

			/**
			 * Use adReady event if DEV_MODE is false,
			 */
			$(document).on('adReady', adReadyHandler);
			$(document).on('adInteraction', adInteractionHandler);
			$(document).on('adClick', adClickHandler);
		}

		else {

			/**
			 * Use jQuery's ready event if DEV_MODE is true.
			 */
			$(document).ready(adReadyHandler);
		}
	}
	
	/**
	 * This handler fires once your 
	 * creative is ready.
	 */
	function adReadyHandler () {

		if (!DEV_MODE) {

			setupIcons();
			mraid.setAutoClose(15 * 1000);
		}

		scriptLoader(['https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js'],
			         			startAd);
	}

	/**
	 * Event that gets fired when the user is 
	 * interacting with the creative.
	 */
	function adInteractionHandler () {

		cancelAutoClose();
	}

	/**
	 * Event that gets fired when the user 
	 * clicks any exit on the creative.
	 */
	function adClickHandler () {

		resumeAutoClose();
	}

	/**
	 * Use this if you want to cancel your
	 * creative's auto close feature.
	 * You can call this function anywhere in
	 * your code by using PGX.cancelAutoClose();
	 */
	function cancelAutoClose () {

		if (!DEV_MODE) mraid.cancelAutoClose();
	}

	/**
	 * Use this if you want to resume your
	 * creative's auto close feature.
	 * You can call this function anywhere in
	 * your code by using PGX.resumeAutoClose();
	 */
	function resumeAutoClose () {

		if(!DEV_MODE){

            mraid.cancelAutoClose();
            mraid.setAutoClose(15 * 1000);
        }
	}

	/**
	 * Here are the icons needed on every
	 * Sparkflow build. This function includes
	 * both the adChoices and Undertone icon.
	 *
	 * If you need to use only 1 icon in your 
	 * creative, just copy and paste the
	 * appropriate icon function.
	 */
	function setupIcons () {

		/**
		 * AdChoices Icon
		 */
		$.ajax({

		    url: '/sparkflow/adchoices.min.js',
		    dataType: 'script',
		    cache: true,
		    success: function () {

		        AdChoices.init({

		            corner: 'br',
		            //icon: true,
		            url: 'http://www.undertone.com/opt-out-tool?utm_source=AdChoiceIcon&utm_medium=IAAdChoicesIcon&utm_campaign=Privacy'
		        });
		    }
		});

		/**
		 * Undertone Icon
		 */
		$.ajax({

			url: '/sparkflow/formats/latest/utmark.min.js',
			dataType: 'script',
			cache: true,
			success: function () {

				UndertoneMark.init({
					corner: 'bl',
					opacity: 0.5,
					color: 'white'
				});
			}
		});
	}

	/**
	 * Function to call if you want to load
	 * external scripts inside your creative.
	 */
	function scriptLoader(scripts, callback) {

    	var progress = 0;

    	scripts.forEach(function(script) {

	        $.getScript(script, function () {

	            if (++progress == scripts.length) callback();
	        }); 
	    });
	}

	/**
	 * This is where we start everything.
	 * Call your creative's initialization
	 * function here.
	 */
	function startAd () {

		if (!DEV_MODE) $('body').append(DOM);

		creativeInit();
	}

	return {

		init            : init,
		cancelAutoClose : cancelAutoClose,
		resumeAutoClose : resumeAutoClose
	}

})(); PGX.init();

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