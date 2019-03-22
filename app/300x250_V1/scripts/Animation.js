var app = app || {}; 


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax({repeat: -1, yoyo: true});
    var banner = document.getElementById('banner');
    var logo = document.getElementById('logo');
    var cloud1 = document.getElementById('cloud1');
    var cloud2 = document.getElementById('cloud2');
    var cloud3 = document.getElementById('cloud3');
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var product = document.getElementById('product');
    var cta = document.getElementById('cta');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        t.set(banner, {opacity: 1});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {


        tl1.to(txt1, .75, {opacity:1}, "+=.5")
            .to(txt1, .75, {opacity:0}, "+=2")

            .to(logo, .75, {scale: 1, x:-75, y:25, ease: Sine.easeInOut})
            .to(txt2, .75, {opacity:1}, "-=.75")
            .to(logo, .75, {opacity:0}, "+=2")
            .to(txt2, .75, {opacity:0}, "-=.75")

            .to(txt3, .75, {opacity:1})
            .to(product, .75, {opacity:1})
            .to(cta, .75, {opacity:1});

        tl2.to(cloud1, 15, {x: '-=50', ease: Sine.easeInOut})
            .to(cloud2, 15, {x: '-=600', ease: Sine.easeInOut}, "-=15")
            .to(cloud3, 15, {x: '-=1200', ease: Sine.easeInOut},"-=15");

        var total = 70;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div1 = document.createElement('div1');
            var Div2 = document.createElement('div2');
            var Div3 = document.createElement('div3');
            var Div4 = document.createElement('div4');
            var Div5 = document.createElement('div5');
            var Div6 = document.createElement('div6');
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
            t.set(Div4, {
                attr: {class: 'dot1'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            t.set(Div5, {
                attr: {class: 'dot2'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            t.set(Div6, {
                attr: {class: 'dot2'},
                x: R(-20, w),
                y: R(-60, -30),
                scale: R(.25, 1)
            });
            container.appendChild(Div1);
            container.appendChild(Div2);
            container.appendChild(Div3);
            container.appendChild(Div4);
            container.appendChild(Div5);
            container.appendChild(Div6);
            animm(Div1);
            animm(Div2);
            animm(Div3);
            animm(Div4);
            animm(Div5);
            animm(Div6);
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