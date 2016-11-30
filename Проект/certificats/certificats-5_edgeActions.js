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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("body").append(sym.$("one").css({"position":"fixed"}));
         sym.$("body").append(sym.$("two").css({"position":"fixed"}));
         sym.$("body").append(sym.$("three").css({"position":"fixed"}));
         sym.$("body").append(sym.$("four").css({"position":"fixed"}));
         sym.$("body").append(sym.$("five").css({"position":"fixed"}));
         sym.$("body").append(sym.$("text_menu").css({"position":"fixed"}));

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_back-pageCopy}", "click", function(sym, e) {
         window.open("../index.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_online}", "click", function(sym, e) {
         window.open("images/certi-1.png", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_onlineCopy}", "click", function(sym, e) {
         window.open("images/certi-2.png", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_onlineCopy2}", "click", function(sym, e) {
         window.open("images/certi-3.png", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_onlineCopy3}", "click", function(sym, e) {
         window.open("images/certi-4.png", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_onlineCopy4}", "click", function(sym, e) {
         window.open("images/certi-5.png", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_onlineCopy5}", "click", function(sym, e) {
         window.open("images/Certificate_all.png", "_blank");

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

      Symbol.bindElementAction(compId, symbolName, "${second}", "mouseover", function(sym, e) {
         sym.getSymbol("second").play('on');

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${third}", "mouseover", function(sym, e) {
         sym.getSymbol("third").play('on');

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
         sym.play('finish');
         
         

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

      Symbol.bindElementAction(compId, symbolName, "${answer1q1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('wrong');

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
   
   //Edge symbol: 'btn_facebook'
   (function(symbolName) {   
   
   })("btn_facebook");
   //Edge symbol end:'btn_facebook'

   //=========================================================
   
   //Edge symbol: 'btn_mail'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspotCopy2}", "click", function(sym, e) {
         
         sym.play('click');
         

      });
      //Edge binding end

   })("btn_mail");
   //Edge symbol end:'btn_mail'

   //=========================================================
   
   //Edge symbol: 'btn_skype'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${hotspotCopy5}", "click", function(sym, e) {
         
         sym.play('click');

      });
      //Edge binding end

   })("btn_skype");
   //Edge symbol end:'btn_skype'

   //=========================================================
   
   //Edge symbol: 'btn_back-page'
   (function(symbolName) {   
   
   })("btn_back-page");
   //Edge symbol end:'btn_back-page'

   //=========================================================
   
   //Edge symbol: 'btn_logo2'
   (function(symbolName) {   
   
   })("btn_logo2");
   //Edge symbol end:'btn_logo2'

   //=========================================================
   
   //Edge symbol: 'download-btn'
   (function(symbolName) {   
   
   })("download-btn");
   //Edge symbol end:'download-btn'

   //=========================================================
   
   //Edge symbol: 'btn_online'
   (function(symbolName) {   
   
   })("btn_online");
   //Edge symbol end:'btn_online'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-453454929");