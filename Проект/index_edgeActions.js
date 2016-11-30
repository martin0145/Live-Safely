/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "${two}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${two}", "mouseout", function(sym, e) {
         sym.getSymbol("two").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("three").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "mouseout", function(sym, e) {
         sym.getSymbol("three").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("four").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "mouseout", function(sym, e) {
         sym.getSymbol("four").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${five}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("five").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${five}", "mouseout", function(sym, e) {
         sym.getSymbol("five").play('out');

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${two}", "click", function(sym, e) {
         window.open("#Stage_game1_Rectangle2", "_self")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${three}", "click", function(sym, e) {
         window.open("#Stage_level2_Rectangle2Copy", "_self")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${four}", "click", function(sym, e) {
         window.open("#Stage_level3Copy_Rectangle2Copy2", "_self")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${five}", "click", function(sym, e) {
         window.open("#Stage_level_4_Rectangle2Copy3", "_self")

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${athome}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("athome").getSymbol("one").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${athome}", "mouseout", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("athome").getSymbol("one").play('out');

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3794, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${one}", "click", function(sym, e) {
         window.open("#Stage_game1_Level1", "_self")
         
         sym.getSymbol("game1").getSymbol("Level1").getSymbol("car_animation_level1").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${one}", "mouseover", function(sym, e) {
         sym.getSymbol("one").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${one}", "mouseout", function(sym, e) {
         sym.getSymbol("one").play('out');

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2995, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3172, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3408, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3560, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3703, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'one'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("one");
   //Edge symbol end:'one'

   //=========================================================
   
   //Edge symbol: 'two'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("two");
   //Edge symbol end:'two'

   //=========================================================
   
   //Edge symbol: 'three'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("three");
   //Edge symbol end:'three'

   //=========================================================
   
   //Edge symbol: 'four'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("four");
   //Edge symbol end:'four'

   //=========================================================
   
   //Edge symbol: 'five'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("five");
   //Edge symbol end:'five'

   //=========================================================
   
   //Edge symbol: 'my_profile'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("my_profile");
   //Edge symbol end:'my_profile'

   //=========================================================
   
   //Edge symbol: 'certificates'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("certificates");
   //Edge symbol end:'certificates'

   //=========================================================
   
   //Edge symbol: 'help'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("help");
   //Edge symbol end:'help'

   //=========================================================
   
   //Edge symbol: 'exit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("exit");
   //Edge symbol end:'exit'

   //=========================================================
   
   //Edge symbol: 'athome'
   (function(symbolName) {   
   
   })("athome");
   //Edge symbol end:'athome'

   //=========================================================
   
   //Edge symbol: 'hotspot'
   (function(symbolName) {   
   
   })("hotspot");
   //Edge symbol end:'hotspot'

   //=========================================================
   
   //Edge symbol: 'fisrt_pin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("fisrt_pin");
   //Edge symbol end:'fisrt_pin'

   //=========================================================
   
   //Edge symbol: 'second'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("second");
   //Edge symbol end:'second'

   //=========================================================
   
   //Edge symbol: 'third_pin'
   (function(symbolName) {   
   
   })("third_pin");
   //Edge symbol end:'third_pin'

   //=========================================================
   
   //Edge symbol: 'first_pin'
   (function(symbolName) {   
   
      

   })("first_pin");
   //Edge symbol end:'first_pin'

   //=========================================================
   
   //Edge symbol: 'fourth'
   (function(symbolName) {   
   
   })("fourth");
   //Edge symbol end:'fourth'

   //=========================================================
   
   //Edge symbol: 'first2'
   (function(symbolName) {   
   
   })("first2");
   //Edge symbol end:'first2'

   //=========================================================
   
   //Edge symbol: 'second2'
   (function(symbolName) {   
   
   })("second2");
   //Edge symbol end:'second2'

   //=========================================================
   
   //Edge symbol: 'third2'
   (function(symbolName) {   
   
   })("third2");
   //Edge symbol end:'third2'

   //=========================================================
   
   //Edge symbol: 'fourth2'
   (function(symbolName) {   
   
   })("fourth2");
   //Edge symbol end:'fourth2'

   //=========================================================
   
   //Edge symbol: 'btn_info_game'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_info_game");
   //Edge symbol end:'btn_info_game'

   //=========================================================
   
   //Edge symbol: 'btn_info_game1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_info_game1");
   //Edge symbol end:'btn_info_game1'

   //=========================================================
   
   //Edge symbol: 'btn_game_info3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game_info3");
   //Edge symbol end:'btn_game_info3'

   //=========================================================
   
   //Edge symbol: 'btn_skip'
   (function(symbolName) {   
   
   })("btn_skip");
   //Edge symbol end:'btn_skip'

   //=========================================================
   
   //Edge symbol: 'btn_check'
   (function(symbolName) {   
   
   })("btn_check");
   //Edge symbol end:'btn_check'

   //=========================================================
   
   //Edge symbol: 'game1'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${first}", "mouseover", function(sym, e) {
         sym.getSymbol("first").play('on');
         

      });
         //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info3q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info3q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info1q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info2q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info2q1").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_skip}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('skip');
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('true');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1150, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q1}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer3q2}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wrong4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5451, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2925, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('next');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('next2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('next3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q3}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('true3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7201, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6945, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6650, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4}", "click", function(sym, e) {
         sym.play('finish');
         sym.getComposition().getStage().getSymbol("navigation-up").play('game1Finished');
         sym.getComposition().getStage().play('game1Finished');
         sym.getComposition().getStage().getSymbol("level2").getSymbol("game2_animation").play();
         sym.getComposition().getStage().getSymbol("level2").getSymbol("game2_animation").getSymbol("waves_animation_game2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q4}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wrong7');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q1}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image3}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image2}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image1}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image4}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image5}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image6}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image9}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image7}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image8}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image10}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image11}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${images12}", "click", function(sym, e) {
         sym.play('true4');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8954, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10041, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info1q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info1q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second_action}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second_action}", "mouseover", function(sym, e) {
         sym.getSymbol("second").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third_action}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third_action}", "mouseover", function(sym, e) {
         sym.getSymbol("third").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth_action}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth_action}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth").play('on');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xCopy3}", "click", function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

      

   })("game1");
   //Edge symbol end:'game1'

   //=========================================================
   
   //Edge symbol: 'answer1'
   (function(symbolName) {   
   
   })("answer1");
   //Edge symbol end:'answer1'

   //=========================================================
   
   //Edge symbol: 'answer2'
   (function(symbolName) {   
   
   })("answer2");
   //Edge symbol end:'answer2'

   //=========================================================
   
   //Edge symbol: 'answer3'
   (function(symbolName) {   
   
   })("answer3");
   //Edge symbol end:'answer3'

   //=========================================================
   
   //Edge symbol: 'progress_animation1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("progress_animation1");
   //Edge symbol end:'progress_animation1'

   //=========================================================
   
   //Edge symbol: 'btn_skip2'
   (function(symbolName) {   
   
   })("btn_skip2");
   //Edge symbol end:'btn_skip2'

   //=========================================================
   
   //Edge symbol: 'btn_skip_2'
   (function(symbolName) {   
   
   })("btn_skip_2");
   //Edge symbol end:'btn_skip_2'

   //=========================================================
   
   //Edge symbol: 'btn_skip_1'
   (function(symbolName) {   
   
   })("btn_skip_1");
   //Edge symbol end:'btn_skip_1'

   //=========================================================
   
   //Edge symbol: 'btn_game_info1q2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info1q2");
   //Edge symbol end:'btn_game_info1q2'

   //=========================================================
   
   //Edge symbol: 'btn_game_info2q2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info2q2");
   //Edge symbol end:'btn_game_info2q2'

   //=========================================================
   
   //Edge symbol: 'btn_game_info3q2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info3q2");
   //Edge symbol end:'btn_game_info3q2'

   //=========================================================
   
   //Edge symbol: 'btn_game_info1q3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info1q3");
   //Edge symbol end:'btn_game_info1q3'

   //=========================================================
   
   //Edge symbol: 'btn_game_info2q3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info2q3");
   //Edge symbol end:'btn_game_info2q3'

   //=========================================================
   
   //Edge symbol: 'btn_game_info3q3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info3q3");
   //Edge symbol end:'btn_game_info3q3'

   //=========================================================
   
   //Edge symbol: 'btn_game_info1q4'
   (function(symbolName) {   
   
      

   })("btn_game_info1q4");
   //Edge symbol end:'btn_game_info1q4'

   //=========================================================
   
   //Edge symbol: 'btn_game_info2q4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info2q4");
   //Edge symbol end:'btn_game_info2q4'

   //=========================================================
   
   //Edge symbol: 'btn_game_info3q4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspot3Copy10}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_game_info3q4");
   //Edge symbol end:'btn_game_info3q4'

   //=========================================================
   
   //Edge symbol: 'game2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_nextCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('next');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('next2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('next3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4Copy2}", "click", function(sym, e) {
         sym.play('finish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_skipCopy2}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('finish');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info3q1Copy2}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info3q1").play('click');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info1q1Copy2}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game_info2q1Copy2}", "click", function(sym, e) {
         sym.getSymbol("btn_game_info2q1").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q4}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wrong7');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q3}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('true3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q2}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('wrong4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q1}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('true');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("first").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second}", "mouseover", function(sym, e) {
         sym.getSymbol("second").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third}", "mouseover", function(sym, e) {
         sym.getSymbol("third").play('on');

      });
      //Edge binding end

   })("game2");
   //Edge symbol end:'game2'

   //=========================================================
   
   //Edge symbol: 'level2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${fourth2}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2}", "mouseover", function(sym, e) {
         sym.getSymbol("first2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2}", "mouseover", function(sym, e) {
         sym.getSymbol("second2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2}", "mouseover", function(sym, e) {
         sym.getSymbol("third2").play('on');

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${first2}", "click", function(sym, e) {
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1150, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2925, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3719, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5451, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6710, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6945, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7201, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8954, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_skip}", "click", function(sym, e) {
         sym.play('skip');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next}", "click", function(sym, e) {
         sym.play('next');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2}", "click", function(sym, e) {
         sym.play('next2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3}", "click", function(sym, e) {
         sym.play('next3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4}", "click", function(sym, e) {
         sym.play('finish');
         sym.getComposition().getStage().getSymbol("navigation-up").play('game2Finished');
         sym.getComposition().getStage().play('game2Finished');
         
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("smokes_animation_game3").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("clouds_sun_animation").getSymbol("sun_animation").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("clouds_sun_animation").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("fires_animation_game3").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("building_1_animation").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("building2_animation").getSymbol("bubbles_animation_game3").play();
         sym.getComposition().getStage().getSymbol("level3Copy").getSymbol("animation_level3").getSymbol("building2_animation").play();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${answer3q4}", "click", function(sym, e) {
         sym.play('wrong7');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer1q4}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer3q3}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer2q3}", "click", function(sym, e) {
         sym.play('wrong5');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer1q3}", "click", function(sym, e) {
         sym.play('true3');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer3q2}", "click", function(sym, e) {
         sym.play('true2');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer2q2}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer1q2}", "click", function(sym, e) {
         sym.play('wrong3');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer3q1}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer2q1}", "click", function(sym, e) {
         sym.play('wrong');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${answer1q1}", "click", function(sym, e) {
         sym.play('true');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10041, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info1q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info2q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info2q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info3q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info3q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info3q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info3q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info2q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info2q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info1q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info1q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info1q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info1q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info2q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info2q3").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info3q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info3q3").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info1q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info1q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info2q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info2q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game2_info3q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game2_info3q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image3}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image2}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image1}", "click", function(sym, e) {
         sym.play('true')

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image6}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image5}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image4}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image8}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image7}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image9}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image10}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image11}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${game2image12}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${x}", "click", function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("level2");
   //Edge symbol end:'level2'

   //=========================================================
   
   //Edge symbol: 'level3'
   (function(symbolName) {   
   
   })("level3");
   //Edge symbol end:'level3'

   //=========================================================
   
   //Edge symbol: 'navigation-up'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_for-me}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_for-me").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_for-me}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_for-me").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_for-me}", "click", function(sym, e) {
         window.open("for-me.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_help}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_help").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_more}", "click", function(sym, e) {
         window.open("more.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_help}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_help").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_help}", "click", function(sym, e) {
         window.open("help.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_more}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_more").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi}", "click", function(sym, e) {
         window.open("certificats/certificats-no.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_more}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_more").play('on');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi1}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi1").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi1}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi1").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi1}", "click", function(sym, e) {
         window.open("certificats/certificats-1.html", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi2}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi2}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi2}", "click", function(sym, e) {
         window.open("certificats/certificats-2.html", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 181, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 390, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi3}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi3").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi3}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi3").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi3}", "click", function(sym, e) {
         window.open("certificats/certificats-3.html", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 608, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi4}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi4").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi4}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi4").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi4}", "click", function(sym, e) {
         window.open("certificats/certificats-4.html", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 783, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi5}", "mouseover", function(sym, e) {
         sym.getSymbol("btn_certi5").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi5}", "mouseout", function(sym, e) {
         sym.getSymbol("btn_certi5").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_certi5}", "click", function(sym, e) {
         window.open("certificats/certificats-5.html", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 846, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("navigation-up");
   //Edge symbol end:'navigation-up'

   //=========================================================
   
   //Edge symbol: 'finished-games'
   (function(symbolName) {   
   
   })("finished-games");
   //Edge symbol end:'finished-games'

   //=========================================================
   
   //Edge symbol: 'level3_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1150, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2925, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3719, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5451, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6710, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6945, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7201, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8954, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10041, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2}", "mouseover", function(sym, e) {
         sym.getSymbol("first2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth2}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2}", "mouseover", function(sym, e) {
         sym.getSymbol("second2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2}", "mouseover", function(sym, e) {
         sym.getSymbol("third2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2}", "click", function(sym, e) {
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_skip}", "click", function(sym, e) {
         sym.play('skip');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next}", "click", function(sym, e) {
         sym.play('next');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2}", "click", function(sym, e) {
         sym.play('next2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3}", "click", function(sym, e) {
         sym.play('next3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4}", "click", function(sym, e) {
         sym.play('finish');
         sym.getComposition().getStage().getSymbol("navigation-up").play('game3Finished');
         sym.getComposition().getStage().play('game3Finished');
         
         
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").getSymbol("duck1_game4").play(0);
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").getSymbol("duck2_game4").play(0);
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").getSymbol("duck3_game4").play(0);
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").getSymbol("duck4_game4").play(0);
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").getSymbol("duck5_game4").play(0);
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("duck_animation_game4").play()
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("clouds_animation_game4").play()
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("clouds_animation_game4").getSymbol("cloud_4_game4").play();
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("clouds_animation_game4").getSymbol("cloud_6_game4").play();
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("clouds_animation_game4").getSymbol("cloud_2_game4").play();
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("game4_animation").getSymbol("fire_game42").play();
         
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("window_button_4").getSymbol("level4_info_animation").play();
         sym.getComposition().getStage().getSymbol("level_4").getSymbol("window_button_4").getSymbol("level4_info_animation").getSymbol("fire_game42").play();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${images12}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q4}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image11}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image10}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q4}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image9}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q3}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image8}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q3}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image7}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q3}", "click", function(sym, e) {
         sym.play('wrong5');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image6}", "click", function(sym, e) {
         sym.play('wrong4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q2}", "click", function(sym, e) {
         sym.play('wrong4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image5}", "click", function(sym, e) {
         sym.play('true2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q2}", "click", function(sym, e) {
         sym.play('true2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image4}", "click", function(sym, e) {
         sym.play('wrong3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q2}", "click", function(sym, e) {
         sym.play('wrong3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image1}", "click", function(sym, e) {
         sym.play('true');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q1}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image2}", "click", function(sym, e) {
         sym.play('wrong2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q1}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image3}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q1}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info2q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info2q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info1q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info3q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info3q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info1q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info1q2").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info2q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info2q2").play('click');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info3q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info3q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info1q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info1q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info3q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info3q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info2q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info2q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info1q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info1q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info2q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info2q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game3_info3q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game3_info3q4").play('click');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${fourth2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xCopy}", "click", function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("level3_1");
   //Edge symbol end:'level3_1'

   //=========================================================
   
   //Edge symbol: 'level_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1150, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2925, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3719, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5451, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6710, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6945, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7201, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8954, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10041, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2Copy}", "mouseover", function(sym, e) {
         sym.getSymbol("first2Copy").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2Copy}", "mouseover", function(sym, e) {
         sym.getSymbol("second2Copy").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2Copy}", "mouseover", function(sym, e) {
         sym.getSymbol("third2Copy").play('on');

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_skipCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('skip');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_nextCopy}", "click", function(sym, e) {
         sym.play('next');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2Copy}", "click", function(sym, e) {
         sym.play('next2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3Copy}", "click", function(sym, e) {
         sym.play('next3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4Copy}", "click", function(sym, e) {
         sym.play('finish');
         sym.getComposition().getStage().play('game4Finished');
         sym.getComposition().getStage().getSymbol("navigation-up").play('game4Finished');
         
         
         sym.getComposition().getStage().getSymbol("level_5").getSymbol("level5_animation").getSymbol("boat").getSymbol("boat_level5").play(0);
         sym.getComposition().getStage().getSymbol("level_5").getSymbol("level5_animation").getSymbol("boat").play(0);
         sym.getComposition().getStage().getSymbol("level_5").getSymbol("level5_animation").getSymbol("boat2_game52").play(0);
         sym.getComposition().getStage().getSymbol("level_5").getSymbol("level5_animation").getSymbol("waves_animation_game5").play(0);
         sym.getComposition().getStage().getSymbol("level_5").getSymbol("level5_animation").play(0);
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${images12Copy}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q4Copy}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image11Copy}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4Copy}", "click", function(sym, e) {
         sym.play('true4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image10Copy}", "click", function(sym, e) {
         sym.play('wrong8');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q4Copy}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image9Copy}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q3Copy}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image8Copy}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q3Copy}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image7Copy}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q3Copy}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image6Copy}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q2Copy}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image5Copy}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q2Copy}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image4Copy}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q2Copy}", "click", function(sym, e) {
         sym.play('wrong3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image1Copy}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q1Copy}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image2Copy}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q1Copy}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image3Copy}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q1Copy}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth2Copy}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth2Copy").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info1q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info2q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info2q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info3q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info3q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info1q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info1q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info2q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info2q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info3q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info3q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info1q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info1q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info2q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info2q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info3q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info3q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info1q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info1q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info2q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info2q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game4_info3q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game4_info3q4").play('click');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${fourth2Copy}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2Copy}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2Copy}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xCopy2}", "click", function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

      

   })("level_4");
   //Edge symbol end:'level_4'

   //=========================================================
   
   //Edge symbol: 'level_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1150, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2925, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3445, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3719, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5195, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5451, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6710, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6945, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7201, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8954, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10041, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2Copy2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('start');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${first2Copy2}", "mouseover", function(sym, e) {
         sym.getSymbol("first2Copy2").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fourth2Copy2}", "mouseover", function(sym, e) {
         sym.getSymbol("fourth2Copy2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2Copy2}", "mouseover", function(sym, e) {
         sym.getSymbol("second2Copy2").play('on');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_skipCopy2}", "click", function(sym, e) {
         sym.play('skip');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_nextCopy2}", "click", function(sym, e) {
         sym.play('next');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next2Copy2}", "click", function(sym, e) {
         sym.play('next2');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next3Copy2}", "click", function(sym, e) {
         sym.play('next3');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next4Copy2}", "click", function(sym, e) {
         sym.play('finish');
         sym.getComposition().getStage().getSymbol("navigation-up").play('game5Finished');
         sym.getComposition().getStage().play('game5Finished');
         sym.getSymbol("final_animation").play();
         
         
         
         sym.getSymbol("final_animation").getSymbol("boy-animation").getSymbol("boy-animation-hands").play();
         sym.getSymbol("final_animation").getSymbol("boy-animation").play();
         
         
         sym.getSymbol("final_animation").getSymbol("girl_animation").getSymbol("girl-animation-hands").play();
         sym.getSymbol("final_animation").getSymbol("girl_animation").play();

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${images12Copy2}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q4Copy2}", "click", function(sym, e) {
         sym.play('true4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image11Copy2}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q4Copy2}", "click", function(sym, e) {
         sym.play('wrong7');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image10Copy2}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q4Copy2}", "click", function(sym, e) {
         sym.play('wrong8');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image9Copy2}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q3Copy2}", "click", function(sym, e) {
         sym.play('true3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image8Copy2}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q3Copy2}", "click", function(sym, e) {
         sym.play('wrong6');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image7Copy2}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q3Copy2}", "click", function(sym, e) {
         sym.play('wrong5');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image6Copy2}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q2Copy2}", "click", function(sym, e) {
         sym.play('wrong3');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image5Copy2}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q2Copy2}", "click", function(sym, e) {
         sym.play('true2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image4Copy2}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q2Copy2}", "click", function(sym, e) {
         sym.play('wrong4');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image1Copy2}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3q1Copy2}", "click", function(sym, e) {
         sym.play('wrong2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image2Copy2}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2q1Copy2}", "click", function(sym, e) {
         sym.play('true');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${image3Copy2}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1q1Copy2}", "click", function(sym, e) {
         sym.play('wrong');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2Copy2}", "mouseover", function(sym, e) {
         sym.getSymbol("third2Copy2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info1q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info1q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info2q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info2q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info3q1}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info3q1").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info1q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info1q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info2q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info2q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info3q2}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info3q2").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info1q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info1q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info2q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info2q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info3q3}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info3q3").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info1q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info1q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info2q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info2q4").play('click');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_game5_info3q4}", "click", function(sym, e) {
         sym.getSymbol("btn_game5_info3q4").play('click');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${fourth2Copy2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${second2Copy2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third2Copy2}", "click", function(sym, e) {
         sym.play('pinClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xCopy3}", "click", function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("level_5");
   //Edge symbol end:'level_5'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info1q1'
   (function(symbolName) {   
   
   })("btn_game2_info1q1");
   //Edge symbol end:'btn_game2_info1q1'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info2q1'
   (function(symbolName) {   
   
   })("btn_game2_info2q1");
   //Edge symbol end:'btn_game2_info2q1'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info3q1'
   (function(symbolName) {   
   
   })("btn_game2_info3q1");
   //Edge symbol end:'btn_game2_info3q1'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info1q2'
   (function(symbolName) {   
   
   })("btn_game2_info1q2");
   //Edge symbol end:'btn_game2_info1q2'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info2q2'
   (function(symbolName) {   
   
   })("btn_game2_info2q2");
   //Edge symbol end:'btn_game2_info2q2'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info3q2'
   (function(symbolName) {   
   
   })("btn_game2_info3q2");
   //Edge symbol end:'btn_game2_info3q2'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info1q3'
   (function(symbolName) {   
   
   })("btn_game2_info1q3");
   //Edge symbol end:'btn_game2_info1q3'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info2q3'
   (function(symbolName) {   
   
   })("btn_game2_info2q3");
   //Edge symbol end:'btn_game2_info2q3'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info3q3'
   (function(symbolName) {   
   
   })("btn_game2_info3q3");
   //Edge symbol end:'btn_game2_info3q3'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info1q4'
   (function(symbolName) {   
   
   })("btn_game2_info1q4");
   //Edge symbol end:'btn_game2_info1q4'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info2q4'
   (function(symbolName) {   
   
   })("btn_game2_info2q4");
   //Edge symbol end:'btn_game2_info2q4'

   //=========================================================
   
   //Edge symbol: 'btn_game2_info3q4'
   (function(symbolName) {   
   
   })("btn_game2_info3q4");
   //Edge symbol end:'btn_game2_info3q4'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info1q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info1q1");
   //Edge symbol end:'btn_game3_info1q1'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info2q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info2q1");
   //Edge symbol end:'btn_game3_info2q1'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info3q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info3q1");
   //Edge symbol end:'btn_game3_info3q1'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info1q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info1q2");
   //Edge symbol end:'btn_game3_info1q2'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info2q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info2q2");
   //Edge symbol end:'btn_game3_info2q2'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info3q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info3q2");
   //Edge symbol end:'btn_game3_info3q2'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info1q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info1q3");
   //Edge symbol end:'btn_game3_info1q3'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info2q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info2q3");
   //Edge symbol end:'btn_game3_info2q3'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info3q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info3q3");
   //Edge symbol end:'btn_game3_info3q3'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info1q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info1q4");
   //Edge symbol end:'btn_game3_info1q4'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info2q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info2q4");
   //Edge symbol end:'btn_game3_info2q4'

   //=========================================================
   
   //Edge symbol: 'btn_game3_info3q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game3_info3q4");
   //Edge symbol end:'btn_game3_info3q4'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info1q1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info1q1");
   //Edge symbol end:'btn_game4_info1q1'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info2q1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info2q1");
   //Edge symbol end:'btn_game4_info2q1'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info3q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info3q1");
   //Edge symbol end:'btn_game4_info3q1'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info1q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info1q2");
   //Edge symbol end:'btn_game4_info1q2'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info2q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info2q2");
   //Edge symbol end:'btn_game4_info2q2'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info3q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info3q2");
   //Edge symbol end:'btn_game4_info3q2'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info1q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info1q3");
   //Edge symbol end:'btn_game4_info1q3'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info2q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info2q3");
   //Edge symbol end:'btn_game4_info2q3'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info3q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info3q3");
   //Edge symbol end:'btn_game4_info3q3'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info1q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info1q4");
   //Edge symbol end:'btn_game4_info1q4'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info2q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info2q4");
   //Edge symbol end:'btn_game4_info2q4'

   //=========================================================
   
   //Edge symbol: 'btn_game4_info3q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("btn_game4_info3q4");
   //Edge symbol end:'btn_game4_info3q4'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info1q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info1q1");
   //Edge symbol end:'btn_game5_info1q1'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info2q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info2q1");
   //Edge symbol end:'btn_game5_info2q1'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info3q1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info3q1");
   //Edge symbol end:'btn_game5_info3q1'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info1q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info1q2");
   //Edge symbol end:'btn_game5_info1q2'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info2q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info2q2");
   //Edge symbol end:'btn_game5_info2q2'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info3q2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info3q2");
   //Edge symbol end:'btn_game5_info3q2'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info1q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info1q3");
   //Edge symbol end:'btn_game5_info1q3'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info2q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info2q3");
   //Edge symbol end:'btn_game5_info2q3'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info3q3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info3q3");
   //Edge symbol end:'btn_game5_info3q3'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info1q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info1q4");
   //Edge symbol end:'btn_game5_info1q4'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info2q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info2q4");
   //Edge symbol end:'btn_game5_info2q4'

   //=========================================================
   
   //Edge symbol: 'btn_game5_info3q4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("btn_game5_info3q4");
   //Edge symbol end:'btn_game5_info3q4'

   //=========================================================
   
   //Edge symbol: 'btn_certificates'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_certificates");
   //Edge symbol end:'btn_certificates'

   //=========================================================
   
   //Edge symbol: 'btn_more'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_more");
   //Edge symbol end:'btn_more'

   //=========================================================
   
   //Edge symbol: 'btn_certi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_certi");
   //Edge symbol end:'btn_certi'

   //=========================================================
   
   //Edge symbol: 'btn_help'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_help");
   //Edge symbol end:'btn_help'

   //=========================================================
   
   //Edge symbol: 'btn_for-me'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 160, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_for-me");
   //Edge symbol end:'btn_for-me'

   //=========================================================
   
   //Edge symbol: 'btn_achievements'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-icon}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('onClick');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('on');

      });
      //Edge binding end

   })("btn_achievements");
   //Edge symbol end:'btn_achievements'

   //=========================================================
   
   //Edge symbol: 'avatar-after-click'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 146, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 146, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 396, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("avatar-after-click");
   //Edge symbol end:'avatar-after-click'

   //=========================================================
   
   //Edge symbol: 'btn_achievements1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy}", "click", function(sym, e) {
         sym.play('onClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('onFinish');

      });
      //Edge binding end

   })("btn_achievements1");
   //Edge symbol end:'btn_achievements1'

   //=========================================================
   
   //Edge symbol: 'btn_ahievements2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy}", "click", function(sym, e) {
         sym.play('onClick');

      });
      //Edge binding end

   })("btn_ahievements2");
   //Edge symbol end:'btn_ahievements2'

   //=========================================================
   
   //Edge symbol: 'btn_achievements3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy2}", "click", function(sym, e) {
         sym.play('onClick');

      });
      //Edge binding end

   })("btn_achievements3");
   //Edge symbol end:'btn_achievements3'

   //=========================================================
   
   //Edge symbol: 'btn_achievements4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy3}", "click", function(sym, e) {
         sym.play('onClick');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy2}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy2}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy2}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy2").play('on');

      });
      //Edge binding end

   })("btn_achievements4");
   //Edge symbol end:'btn_achievements4'

   //=========================================================
   
   //Edge symbol: 'btn_achievements5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy3}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy3").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy3}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2Copy3").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2Copy3}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy4}", "click", function(sym, e) {
         sym.play('onClick');

      });
      //Edge binding end

   })("btn_achievements5");
   //Edge symbol end:'btn_achievements5'

   //=========================================================
   
   //Edge symbol: 'final_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("final_animation");
   //Edge symbol end:'final_animation'

   //=========================================================
   
   //Edge symbol: 'boy-animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boy-animation");
   //Edge symbol end:'boy-animation'

   //=========================================================
   
   //Edge symbol: 'boy-animation-hands'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boy-animation-hands");
   //Edge symbol end:'boy-animation-hands'

   //=========================================================
   
   //Edge symbol: 'girl_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("girl_animation");
   //Edge symbol end:'girl_animation'

   //=========================================================
   
   //Edge symbol: 'girl-animation-hands'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("girl-animation-hands");
   //Edge symbol end:'girl-animation-hands'

   //=========================================================
   
   //Edge symbol: 'btn_achievementsAll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 595, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseover", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('on');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "mouseout", function(sym, e) {
         sym.getSymbol("avatar-after-click2").play('out');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-after-click2}", "click", function(sym, e) {
         sym.play('onFinish');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avatar-iconCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play('onClick');
         

      });
      //Edge binding end

   })("btn_achievementsAll");
   //Edge symbol end:'btn_achievementsAll'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Level1'
   (function(symbolName) {   
   
   })("Level1");
   //Edge symbol end:'Level1'

   //=========================================================
   
   //Edge symbol: 'clouds_animation_level1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("clouds_animation_level1");
   //Edge symbol end:'clouds_animation_level1'

   //=========================================================
   
   //Edge symbol: 'car_animation_level1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("car_animation_level1");
   //Edge symbol end:'car_animation_level1'

   //=========================================================
   
   //Edge symbol: 'game2_animation'
   (function(symbolName) {   
   
   })("game2_animation");
   //Edge symbol end:'game2_animation'

   //=========================================================
   
   //Edge symbol: 'waves_animation_game2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12876, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("waves_animation_game2");
   //Edge symbol end:'waves_animation_game2'

   //=========================================================
   
   //Edge symbol: 'animation_level3'
   (function(symbolName) {   
   
   })("animation_level3");
   //Edge symbol end:'animation_level3'

   //=========================================================
   
   //Edge symbol: 'clouds_sun_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("clouds_sun_animation");
   //Edge symbol end:'clouds_sun_animation'

   //=========================================================
   
   //Edge symbol: 'sun_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sun_animation");
   //Edge symbol end:'sun_animation'

   //=========================================================
   
   //Edge symbol: 'building_1_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("building_1_animation");
   //Edge symbol end:'building_1_animation'

   //=========================================================
   
   //Edge symbol: 'building2_animation'
   (function(symbolName) {   
   
   })("building2_animation");
   //Edge symbol end:'building2_animation'

   //=========================================================
   
   //Edge symbol: 'bubbles_animation_game3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("bubbles_animation_game3");
   //Edge symbol end:'bubbles_animation_game3'

   //=========================================================
   
   //Edge symbol: 'smokes_animation_game3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("smokes_animation_game3");
   //Edge symbol end:'smokes_animation_game3'

   //=========================================================
   
   //Edge symbol: 'fires_animation_game3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("fires_animation_game3");
   //Edge symbol end:'fires_animation_game3'

   //=========================================================
   
   //Edge symbol: 'game4_animation'
   (function(symbolName) {   
   
      

   })("game4_animation");
   //Edge symbol end:'game4_animation'

   //=========================================================
   
   //Edge symbol: 'clouds_animation_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 74093, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("clouds_animation_game4");
   //Edge symbol end:'clouds_animation_game4'

   //=========================================================
   
   //Edge symbol: 'duck_animation_game4'
   (function(symbolName) {   
   
   })("duck_animation_game4");
   //Edge symbol end:'duck_animation_game4'

   //=========================================================
   
   //Edge symbol: 'duck1_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("duck1_game4");
   //Edge symbol end:'duck1_game4'

   //=========================================================
   
   //Edge symbol: 'duck2_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("duck2_game4");
   //Edge symbol end:'duck2_game4'

   //=========================================================
   
   //Edge symbol: 'duck3_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("duck3_game4");
   //Edge symbol end:'duck3_game4'

   //=========================================================
   
   //Edge symbol: 'duck4_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("duck4_game4");
   //Edge symbol end:'duck4_game4'

   //=========================================================
   
   //Edge symbol: 'duck5_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("duck5_game4");
   //Edge symbol end:'duck5_game4'

   //=========================================================
   
   //Edge symbol: 'cloud_2_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("cloud_2_game4");
   //Edge symbol end:'cloud_2_game4'

   //=========================================================
   
   //Edge symbol: 'cloud_4_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40724, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("cloud_4_game4");
   //Edge symbol end:'cloud_4_game4'

   //=========================================================
   
   //Edge symbol: 'cloud_6_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("cloud_6_game4");
   //Edge symbol end:'cloud_6_game4'

   //=========================================================
   
   //Edge symbol: 'fire_game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

   })("fire_game4");
   //Edge symbol end:'fire_game4'

   //=========================================================
   
   //Edge symbol: 'level5_animation'
   (function(symbolName) {   
   
   })("level5_animation");
   //Edge symbol end:'level5_animation'

   //=========================================================
   
   //Edge symbol: 'boat'
   (function(symbolName) {   
   
   })("boat");
   //Edge symbol end:'boat'

   //=========================================================
   
   //Edge symbol: 'boat_level5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boat_level5");
   //Edge symbol end:'boat_level5'

   //=========================================================
   
   //Edge symbol: 'boat2_game5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boat2_game5");
   //Edge symbol end:'boat2_game5'

   //=========================================================
   
   //Edge symbol: 'waves_animation_game5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("waves_animation_game5");
   //Edge symbol end:'waves_animation_game5'

   //=========================================================
   
   //Edge symbol: 'btn_window_button'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy}", "click", function(sym, e) {
         sym.play('click2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_button}", "click", function(sym, e) {
         sym.play('click');
         
         sym.getSymbol("level1_info_animation").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_window_button");
   //Edge symbol end:'btn_window_button'

   //=========================================================
   
   //Edge symbol: 'level1_info_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("level1_info_animation");
   //Edge symbol end:'level1_info_animation'

   //=========================================================
   
   //Edge symbol: 'Level2_info_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy2}", "click", function(sym, e) {
         sym.play('click');
         
         sym.getSymbol("Level2_animation_info").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy}", "click", function(sym, e) {
         sym.play('click2');

      });
      //Edge binding end

   })("Level2_info_animation");
   //Edge symbol end:'Level2_info_animation'

   //=========================================================
   
   //Edge symbol: 'Level2_animation_info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Level2_animation_info");
   //Edge symbol end:'Level2_animation_info'

   //=========================================================
   
   //Edge symbol: 'btn_window_button3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy2}", "click", function(sym, e) {
         sym.play('click');
         
         sym.getSymbol("level3_animation_info").getSymbol("sun_animation").play();
         sym.getSymbol("level3_animation_info").getSymbol("building_1_animationCopy").play();
         sym.getSymbol("level3_animation_info").getSymbol("building2_animationCopy").getSymbol("bubbles_animation_game3").play();
         sym.getSymbol("level3_animation_info").getSymbol("building2_animationCopy").play();
         sym.getSymbol("level3_animation_info").getSymbol("fires_animation_game3Copy").play();
         sym.getSymbol("level3_animation_info").getSymbol("smokes_animation_game3").play();
         sym.getSymbol("level3_animation_info").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy}", "click", function(sym, e) {
         sym.play('click2');

      });
      //Edge binding end

   })("btn_window_button3");
   //Edge symbol end:'btn_window_button3'

   //=========================================================
   
   //Edge symbol: 'level3_animation_info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("level3_animation_info");
   //Edge symbol end:'level3_animation_info'

   //=========================================================
   
   //Edge symbol: 'window_button_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy}", "click", function(sym, e) {
         sym.play('click2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy2}", "click", function(sym, e) {
         sym.play('click');
         
         sym.getSymbol("level4_info_animation").getSymbol("fire_game42").play(0);

      });
      //Edge binding end

   })("window_button_4");
   //Edge symbol end:'window_button_4'

   //=========================================================
   
   //Edge symbol: 'level4_info_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("level4_info_animation");
   //Edge symbol end:'level4_info_animation'

   //=========================================================
   
   //Edge symbol: 'window_info_game5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1377, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy3}", "click", function(sym, e) {
         sym.play('click2');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${window_buttonCopy4}", "click", function(sym, e) {
         sym.play('click');
         
         sym.getSymbol("level5_animation_info").play(0);
         sym.getSymbol("level5_animation_info").getSymbol("sun_animation").play(0);
         sym.getSymbol("level5_animation_info").getSymbol("boat_animation").play(0);
         sym.getSymbol("level5_animation_info").getSymbol("boat_animation").getSymbol("boat_info_animation").play(0);

      });
      //Edge binding end

   })("window_info_game5");
   //Edge symbol end:'window_info_game5'

   //=========================================================
   
   //Edge symbol: 'level5_animation_info'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("level5_animation_info");
   //Edge symbol end:'level5_animation_info'

   //=========================================================
   
   //Edge symbol: 'boat_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boat_animation");
   //Edge symbol end:'boat_animation'

   //=========================================================
   
   //Edge symbol: 'boat_info_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("boat_info_animation");
   //Edge symbol end:'boat_info_animation'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-453454929");