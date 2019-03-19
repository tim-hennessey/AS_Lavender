var app = app || {}; 


app.Animation = (function () {

    var t = TweenMax;
    // var tl = new TimelineMax();
    var banner = document.getElementById('banner');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        t.set(banner, {opacity: 1});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

        var total = 50;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div1 = document.createElement('div1');
            var Div2 = document.createElement('div2');
            var Div3 = document.createElement('div3');
            t.set(Div1, {
                attr: {class: 'dot1'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            t.set(Div2, {
                attr: {class: 'dot2'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            t.set(Div3, {
                attr: {class: 'dot2'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            container.appendChild(Div1);
            container.appendChild(Div2);
            container.appendChild(Div3);
            animm(Div1);
            animm(Div2);
            animm(Div3);
        }

        function animm(elm) {
            t.to(elm, R(3, 4), {y: h + 50, ease: Sine.easeIn, repeat: -1, delay: -50});
            t.to(elm, R(6, 8), {x: '+=50', repeat: -1, yoyo: true, ease: Sine.easeInOut});
            t.to(elm,R(3,4),{rotationX:R(540,720),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-50});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

	} 

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start, 
		stop:stop
	}

})();