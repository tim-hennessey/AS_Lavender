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


        tl1.to(txt1, .5, {opacity:1}, "+=.75")
            .to(txt1, .5, {opacity:0}, "+=2")

            // .to(logo, .5, {scale: 1, x:-75, y:10, ease: Sine.easeInOut}, "-=.25")
            .to(txt2, .5, {opacity:1}, "-=.25")

            .to(logo, .5, {opacity:0}, "+=2")
            .to(txt2, .5, {opacity:0}, "-=.5")
            .to(txt3, .5, {opacity:1})
            .to(product, .5, {opacity:1}, "-=.5");

        tl2.to(cloud1, 60, {x: '-=900', ease: Sine.easeInOut})
            .to(cloud2, 60, {x: '+=300', ease: Sine.easeInOut}, "-=60")
            .to(cloud3, 60, {x: '-=50', ease: Sine.easeInOut},"-=60");

        var total = 70;
        var container1 = document.getElementById("container1"), w = window.innerWidth, h = window.innerHeight;
        var container2 = document.getElementById("container2"), w = window.innerWidth, h = window.innerHeight;

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
                scale: R(.25, .75),
                opacity: R(.25, .75)
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
                scale: R(.25, .75),
                opacity: R(.25, .75)
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
                scale: R(.25, .75),
                opacity: R(.25, .75)
            });
            container1.appendChild(Div1);
            container2.appendChild(Div2);
            container1.appendChild(Div3);
            container2.appendChild(Div4);
            container1.appendChild(Div5);
            container2.appendChild(Div6);
            animm(Div1);
            animm(Div2);
            animm(Div3);
            animm(Div4);
            animm(Div5);
            animm(Div6);
        }

        function animm(elm) {
            t.to(elm, R(10, 15), {y: h + 50, ease: Sine.easeIn, repeat: -1, delay: -50});
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