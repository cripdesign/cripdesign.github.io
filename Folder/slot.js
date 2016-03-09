(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.big_win = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.main_bg = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.startFreeSpinsBtn = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tile0normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tile1normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tile2normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tile3normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tile4normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tile5normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tile7normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tile8normal = function() {
	this.spriteSheet = ss["Untitled_6_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.tiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tile8normal();
	this.instance.setTransform(-76.5,966);

	this.instance_1 = new lib.tile8normal();
	this.instance_1.setTransform(-76.5,-425);

	this.instance_2 = new lib.tile7normal();
	this.instance_2.setTransform(-76.5,-251);

	this.instance_3 = new lib.tile5normal();
	this.instance_3.setTransform(-76.5,-76.5);

	this.instance_4 = new lib.tile2normal();
	this.instance_4.setTransform(-76.5,-947);

	this.instance_5 = new lib.tile1normal();
	this.instance_5.setTransform(-76.5,-773);

	this.instance_6 = new lib.tile0normal();
	this.instance_6.setTransform(-76.5,-598.5);

	this.instance_7 = new lib.tile4normal();
	this.instance_7.setTransform(-76.5,97.5);

	this.instance_8 = new lib.tile3normal();
	this.instance_8.setTransform(-76.5,271.5);

	this.instance_9 = new lib.tile0normal();
	this.instance_9.setTransform(-76.5,794);

	this.instance_10 = new lib.tile2normal();
	this.instance_10.setTransform(-76.5,446);

	this.instance_11 = new lib.tile1normal();
	this.instance_11.setTransform(-76.5,620);

	this.instance_12 = new lib.tile5normal();
	this.instance_12.setTransform(-76.5,446);

	this.instance_13 = new lib.tile7normal();
	this.instance_13.setTransform(-76.5,620);

	this.instance_14 = new lib.tile3normal();
	this.instance_14.setTransform(-76.5,-425);

	this.instance_15 = new lib.tile4normal();
	this.instance_15.setTransform(-76.5,794);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10,p:{y:446}},{t:this.instance_9,p:{y:794}},{t:this.instance_8,p:{y:271.5}},{t:this.instance_7,p:{y:97.5}},{t:this.instance_6,p:{y:-598.5}},{t:this.instance_5,p:{y:-773}},{t:this.instance_4,p:{y:-947}},{t:this.instance_3,p:{y:-76.5}},{t:this.instance_2,p:{y:-251}},{t:this.instance_1,p:{y:-425}},{t:this.instance,p:{y:966}}]}).to({state:[{t:this.instance_13,p:{y:620}},{t:this.instance_12,p:{y:446}},{t:this.instance_1,p:{y:794}},{t:this.instance_7,p:{y:271.5}},{t:this.instance_8,p:{y:97.5}},{t:this.instance,p:{y:-598.5}},{t:this.instance_2,p:{y:-773}},{t:this.instance_3,p:{y:-947}},{t:this.instance_4,p:{y:-76.5}},{t:this.instance_5,p:{y:-251}},{t:this.instance_9,p:{y:-425}},{t:this.instance_6,p:{y:966}}]},1).to({state:[{t:this.instance_12,p:{y:620}},{t:this.instance_13,p:{y:446}},{t:this.instance_15,p:{y:794}},{t:this.instance,p:{y:271.5}},{t:this.instance_4,p:{y:97.5}},{t:this.instance_7,p:{y:-598.5}},{t:this.instance_3,p:{y:-773}},{t:this.instance_2,p:{y:-947}},{t:this.instance_5,p:{y:-76.5}},{t:this.instance_6,p:{y:-251}},{t:this.instance_14},{t:this.instance_8,p:{y:966}}]},1).to({state:[{t:this.instance_12,p:{y:620}},{t:this.instance_15,p:{y:446}},{t:this.instance_1,p:{y:794}},{t:this.instance_8,p:{y:271.5}},{t:this.instance_6,p:{y:97.5}},{t:this.instance,p:{y:-598.5}},{t:this.instance_3,p:{y:-773}},{t:this.instance_7,p:{y:-947}},{t:this.instance_5,p:{y:-76.5}},{t:this.instance_2,p:{y:-251}},{t:this.instance_10,p:{y:-425}},{t:this.instance_4,p:{y:966}}]},1).to({state:[{t:this.instance_13,p:{y:620}},{t:this.instance_12,p:{y:446}},{t:this.instance_1,p:{y:794}},{t:this.instance_5,p:{y:271.5}},{t:this.instance_7,p:{y:97.5}},{t:this.instance,p:{y:-598.5}},{t:this.instance_2,p:{y:-773}},{t:this.instance_3,p:{y:-947}},{t:this.instance_8,p:{y:-76.5}},{t:this.instance_4,p:{y:-251}},{t:this.instance_9,p:{y:-425}},{t:this.instance_6,p:{y:966}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.startbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.startFreeSpinsBtn();
	this.instance.setTransform(-86,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-94.6,y:-72.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-73,y:-63.8},0).wait(1).to({scaleX:1,scaleY:1,x:-86,y:-69},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-69,172,69);


(lib.star = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(1.1,1,1).p("AizgnICKAAIApiDIAqCDICKAAIhvBPIAqCDIhvhRIhuBRIAqiDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFDFC").s().p("AAABaIhtBRIApiDIhvhPICKAAIApiDIAqCDICKAAIhvBPIApCDg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-18.1,38,36.3);


(lib.darken = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhHcApRMAAAhShMCO5AAAMAAABShg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-457.3,-264.1,914.7,528.3);


(lib.bigwin = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.big_win();
	this.instance.setTransform(-257.5,-78.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.5,-78.5,515,157);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 copy
	this.instance = new lib.star();
	this.instance.setTransform(-78.9,-5.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({rotation:-2520,guide:{path:[-79,-5.6,-111.7,-129,-203,-85.9,-294.5,-42.7,-336.7,67.3,-378.9,177,-386.5,267.2,-394.2,357.3,-392,382.4]},alpha:0.801},42).to({_off:true},1).wait(14));

	// Layer 7 copy 2
	this.instance_1 = new lib.star();
	this.instance_1.setTransform(-57,-9.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({rotation:-4680,guide:{path:[-57,-9.6,-55.2,-66.7,-69.9,-108.9,-84.5,-151.1,-132.6,-159.5,-180.6,-167.9,-227.2,-98,-273.9,-28.1,-277.9,56.4,-280.7,114.1,-278.8,422.6]},alpha:0.801},49).wait(1));

	// Layer 7 copy 3
	this.instance_2 = new lib.star();
	this.instance_2.setTransform(-126.7,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2880,guide:{path:[-126.8,-13.1,-162.4,-50.5,-182.6,-66.7,-202.8,-83,-217.3,-96.8,-231.8,-110.7,-249.9,-118.5,-271.2,-127.6,-302.9,-127.6,-344.7,-127.6,-382.9,-97.8,-419.8,-69,-449.7,-15.2,-479.4,38.1,-499.2,110.2,-519.2,183.2,-558.9,388]},alpha:0.801},29).to({_off:true},1).wait(30));

	// Layer 7 copy 4
	this.instance_3 = new lib.star();
	this.instance_3.setTransform(33.8,-6.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({rotation:2880,guide:{path:[33.9,-6.6,64.7,-33.7,89.7,-43.9,114.6,-54,160.1,-51.7,205.3,-49.5,257.6,0.5,309.9,50.5,344.1,188,373.4,305.6,370.9,399.5]},alpha:0.801},36).to({_off:true},1).wait(6));

	// Layer 7 copy 5
	this.instance_4 = new lib.star();
	this.instance_4.setTransform(-19.1,-1.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({rotation:3240,guide:{path:[-19.1,-1.8,23.7,-120.6,101.7,-157.5,179.8,-194.4,254,-148.1,328.4,-101.9,376.7,9,425,119.8,443.9,229.6,462.2,336.6,466.5,422.2]},alpha:0.781},34).to({_off:true},1).wait(14));

	// Layer 7
	this.instance_5 = new lib.star();
	this.instance_5.setTransform(-37.2,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:3600,guide:{path:[-36.6,-12.1,-28.3,-109.8,-3.9,-156,20.6,-202.3,61.3,-197.1,142.5,-186.9,185.7,-63.4,228.8,60.2,236,186,243.2,312.1,254.9,418]},alpha:0.801},34).to({_off:true},1).wait(25));

	// Layer 7 copy 6
	this.instance_6 = new lib.star();
	this.instance_6.setTransform(-89.2,-6.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({rotation:-360,guide:{path:[-89.1,-6.1,-114.6,93.5,-106,410.9]},alpha:0.801},29).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.2,-30.8,126.5,36.2);


(lib.slot5spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiles("single",4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1396.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.slot4spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiles("single",3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1396.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.slot3spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiles("single",2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1396.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.slot2spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiles("single",1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1396.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.slot1spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiles("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1396.8},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-947,153,2066);


(lib.bigwinmovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigwin("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},22).to({scaleX:1,scaleY:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.5,-78.5,515,157);


(lib.slots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.tiles("single",0);
	this.instance.setTransform(-418.6,-696.5);

	this.instance_1 = new lib.slot1spin();
	this.instance_1.setTransform(-418.6,-696.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-796.6},7).wait(1).to({regY:86,y:-704.7},0).wait(1).to({y:-699.8},0).wait(1).to({y:-694.3},0).wait(1).to({y:-686.8},0).wait(1).to({y:-675.9},0).wait(1).to({y:-660.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-612.8},0).wait(1).to({y:-579.5},0).wait(1).to({y:-539.5},0).wait(1).to({y:-492.9},0).wait(1).to({y:-439.7},0).wait(1).to({y:-377.6},0).wait(1).to({y:-310.9},0).wait(1).to({y:-237.7},0).wait(1).to({y:-155.2},0).wait(1).to({y:-59.9},0).wait(1).to({y:53.2},0).wait(1).to({y:189.6},0).wait(1).to({y:355},0).wait(1).to({y:552.7},0).wait(1).to({regY:0,y:696},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(27).to({mode:"single",startPosition:0},0).wait(1).to({regY:784.4,y:411},0).wait(1).to({y:567.4},0).wait(1).to({y:676.5},0).wait(1).to({y:755.6},0).wait(1).to({y:812.5},0).wait(1).to({y:855.6},0).wait(1).to({y:889.6},0).wait(1).to({y:916.5},0).wait(1).to({y:937.8},0).wait(1).to({y:954.5},0).wait(1).to({y:967.6},0).wait(1).to({y:977.7},0).wait(1).to({y:985.4},0).wait(1).to({y:991.1},0).wait(1).to({y:995.2},0).wait(1).to({y:998},0).wait(1).to({y:999.8},0).wait(1).to({y:1000.8},0).wait(1).to({regY:0,y:216.7},0).to({y:177.1},7).wait(37));

	// Layer 4
	this.instance_2 = new lib.tiles("single",1);
	this.instance_2.setTransform(-208.3,-696.5);

	this.instance_3 = new lib.slot2spin();
	this.instance_3.setTransform(-208.3,-696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},28).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},7).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:1},0).to({y:-796.6},7).wait(1).to({regY:86,y:-704.7},0).wait(1).to({y:-699.8},0).wait(1).to({y:-694.3},0).wait(1).to({y:-686.8},0).wait(1).to({y:-675.9},0).wait(1).to({y:-660.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-612.8},0).wait(1).to({y:-579.5},0).wait(1).to({y:-539.5},0).wait(1).to({y:-492.9},0).wait(1).to({y:-439.7},0).wait(1).to({y:-377.6},0).wait(1).to({y:-310.9},0).wait(1).to({y:-237.7},0).wait(1).to({y:-155.2},0).wait(1).to({y:-59.9},0).wait(1).to({y:53.2},0).wait(1).to({y:189.6},0).wait(1).to({y:355},0).wait(1).to({y:552.7},0).wait(1).to({regY:0,y:696},0).to({_off:true},1).wait(28).to({_off:false,y:-696.5},0).wait(1).to({regY:86,y:-287.4},0).wait(1).to({y:-130.9},0).wait(1).to({y:-21.9},0).wait(1).to({y:57.2},0).wait(1).to({y:114.1},0).wait(1).to({y:157.3},0).wait(1).to({y:191.3},0).wait(1).to({y:218.2},0).wait(1).to({y:239.4},0).wait(1).to({y:256.1},0).wait(1).to({y:269.2},0).wait(1).to({y:279.3},0).wait(1).to({y:287},0).wait(1).to({y:292.7},0).wait(1).to({y:296.9},0).wait(1).to({y:299.7},0).wait(1).to({y:301.5},0).wait(1).to({y:302.4},0).wait(1).to({regY:0,y:216.7},0).to({y:177.1},7).wait(29));

	// Layer 10
	this.instance_4 = new lib.tiles("single",2);
	this.instance_4.setTransform(0,-696.5);

	this.instance_5 = new lib.slot3spin();
	this.instance_5.setTransform(0,-696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},7).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({startPosition:2},0).to({y:-796.6},7).wait(1).to({regY:86,y:-704.7},0).wait(1).to({y:-699.8},0).wait(1).to({y:-694.3},0).wait(1).to({y:-686.8},0).wait(1).to({y:-675.9},0).wait(1).to({y:-660.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-612.8},0).wait(1).to({y:-579.5},0).wait(1).to({y:-539.5},0).wait(1).to({y:-492.9},0).wait(1).to({y:-439.7},0).wait(1).to({y:-377.6},0).wait(1).to({y:-310.9},0).wait(1).to({y:-237.7},0).wait(1).to({y:-155.2},0).wait(1).to({y:-59.9},0).wait(1).to({y:53.2},0).wait(1).to({y:189.6},0).wait(1).to({y:355},0).wait(1).to({y:552.7},0).wait(1).to({regY:0,y:696},0).to({_off:true},1).wait(30).to({_off:false,y:-696.5},0).wait(1).to({regY:86,y:-286.7},0).wait(1).to({y:-129.9},0).wait(1).to({y:-20.6},0).wait(1).to({y:58.7},0).wait(1).to({y:115.7},0).wait(1).to({y:158.9},0).wait(1).to({y:193},0).wait(1).to({y:219.9},0).wait(1).to({y:241.2},0).wait(1).to({y:258},0).wait(1).to({y:271.1},0).wait(1).to({y:281.2},0).wait(1).to({y:288.9},0).wait(1).to({y:294.7},0).wait(1).to({y:298.8},0).wait(1).to({y:301.6},0).wait(1).to({y:303.4},0).wait(1).to({y:304.4},0).wait(1).to({regY:0,y:218.7},0).to({y:177.1},7).wait(20));

	// Layer 11
	this.instance_6 = new lib.tiles("single",3);
	this.instance_6.setTransform(208.3,-696.5);

	this.instance_7 = new lib.slot4spin();
	this.instance_7.setTransform(208.3,-696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},7).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({startPosition:3},0).to({y:-796.6},7).wait(1).to({regY:86,y:-704.7},0).wait(1).to({y:-699.8},0).wait(1).to({y:-694.3},0).wait(1).to({y:-686.8},0).wait(1).to({y:-675.9},0).wait(1).to({y:-660.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-612.8},0).wait(1).to({y:-579.5},0).wait(1).to({y:-539.5},0).wait(1).to({y:-492.9},0).wait(1).to({y:-439.7},0).wait(1).to({y:-377.6},0).wait(1).to({y:-310.9},0).wait(1).to({y:-237.7},0).wait(1).to({y:-155.2},0).wait(1).to({y:-59.9},0).wait(1).to({y:53.2},0).wait(1).to({y:189.6},0).wait(1).to({y:355},0).wait(1).to({y:552.7},0).wait(1).to({regY:0,y:696},0).to({_off:true},1).wait(32).to({_off:false,y:-696.5},0).wait(1).to({regY:86,y:-287.4},0).wait(1).to({y:-131},0).wait(1).to({y:-21.9},0).wait(1).to({y:57.2},0).wait(1).to({y:114.1},0).wait(1).to({y:157.2},0).wait(1).to({y:191.2},0).wait(1).to({y:218.1},0).wait(1).to({y:239.4},0).wait(1).to({y:256.1},0).wait(1).to({y:269.2},0).wait(1).to({y:279.3},0).wait(1).to({y:287},0).wait(1).to({y:292.7},0).wait(1).to({y:296.8},0).wait(1).to({y:299.6},0).wait(1).to({y:301.4},0).wait(1).to({y:302.4},0).wait(1).to({regY:0,y:216.7},0).to({y:177.1},7).wait(11));

	// Layer 12
	this.instance_8 = new lib.tiles("single",4);
	this.instance_8.setTransform(414.6,-696.5);

	this.instance_9 = new lib.slot5spin();
	this.instance_9.setTransform(414.6,-696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},28).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},34).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},7).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({startPosition:4},0).to({y:-796.6},7).wait(1).to({regY:86,y:-704.7},0).wait(1).to({y:-699.8},0).wait(1).to({y:-694.3},0).wait(1).to({y:-686.8},0).wait(1).to({y:-675.9},0).wait(1).to({y:-660.5},0).wait(1).to({y:-639.7},0).wait(1).to({y:-612.8},0).wait(1).to({y:-579.5},0).wait(1).to({y:-539.5},0).wait(1).to({y:-492.9},0).wait(1).to({y:-439.7},0).wait(1).to({y:-377.6},0).wait(1).to({y:-310.9},0).wait(1).to({y:-237.7},0).wait(1).to({y:-155.2},0).wait(1).to({y:-59.9},0).wait(1).to({y:53.2},0).wait(1).to({y:189.6},0).wait(1).to({y:355},0).wait(1).to({y:552.7},0).wait(1).to({regY:0,y:696},0).to({_off:true},1).wait(34).to({_off:false,y:-696.5},0).wait(1).to({regY:86,y:-288.1},0).wait(1).to({y:-132},0).wait(1).to({y:-23.2},0).wait(1).to({y:55.7},0).wait(1).to({y:112.5},0).wait(1).to({y:155.5},0).wait(1).to({y:189.5},0).wait(1).to({y:216.3},0).wait(1).to({y:237.5},0).wait(1).to({y:254.2},0).wait(1).to({y:267.2},0).wait(1).to({y:277.3},0).wait(1).to({y:285},0).wait(1).to({y:290.7},0).wait(1).to({y:294.8},0).wait(1).to({y:297.7},0).wait(1).to({y:299.4},0).wait(1).to({y:300.4},0).wait(1).to({regY:0,y:214.7},0).to({y:177.1},7).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-495.1,-1643.5,986.2,2066);


(lib.bigwinmovieall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// Layer 5
	this.instance = new lib.bigwinmovie();
	this.instance.setTransform(0,0,0.601,0.601,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1},4).wait(62));

	// Layer 8
	this.instance_1 = new lib.stars();
	this.instance_1.setTransform(-0.7,20,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},60).wait(1));

	// Layer 7
	this.instance_2 = new lib.stars();
	this.instance_2.setTransform(45.3,20);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},59).wait(6));

	// Layer 2
	this.instance_3 = new lib.darken("synched",0);
	this.instance_3.setTransform(0,0,1.466,1.466);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.602},12).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-670.3,-387.1,1340.6,774.3);


// stage content:



(lib.Untitled6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{beg:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.startbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("beg");
		}
	}
	this.frame_158 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(158).call(this.frame_158).wait(1));

	// bigwin
	this.instance = new lib.bigwinmovieall();
	this.instance.setTransform(640,360);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).wait(32));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhWBApLMAAAhSVMCsDAAAMAAABSVg");
	var mask_graphics_1 = new cjs.Graphics().p("EhWBApLMAAAhSVMCsDAAAMAAABSVg");
	var mask_graphics_121 = new cjs.Graphics().p("EhWBApLMAAAhSVMCsDAAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:639.6,y:314.2}).wait(1).to({graphics:mask_graphics_1,x:639.6,y:314.2}).wait(120).to({graphics:mask_graphics_121,x:639.6,y:314.2}).wait(38));

	// slots
	this.instance_1 = new lib.slots("single",0);
	this.instance_1.setTransform(640,314);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({mode:"independent"},0).wait(120).to({mode:"single",startPosition:119},0).wait(38));

	// start
	this.startbutton = new lib.startbutton();
	this.startbutton.setTransform(640,656,1,1,0,0,0,0,-34.5);
	new cjs.ButtonHelper(this.startbutton, 0, 1, 2, false, new lib.startbutton(), 3);

	this.instance_2 = new lib.startFreeSpinsBtn();
	this.instance_2.setTransform(554,621.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startbutton}]}).to({state:[{t:this.instance_2}]},1).wait(158));

	// bg
	this.instance_3 = new lib.main_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;