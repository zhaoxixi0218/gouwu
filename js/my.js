
$(function(){
	var k = $(window).height(); 
	var flag = false;  
    $(".next").click(function(event) {
       $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({ 
    	navigation: true,
    	scrollingSpeed: 1200,

        
    	afterLoad: function(anchorLink, index) {
    		if(index == 2 ) {
                $(".next").fadeOut();
    			$(".search").show().animate({"right": 370}, 1500, "easeOutBack", function() {
    				$(".shafa2").animate({"opacity": 1},500, function() {
    					$(".search").hide();
    					$(".searchshafa").show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
    					$(".shafa3").show().animate({"height": 218}, 1000, "easeInOutQuart");
    					$(".words2").animate({"opacity": 1},500, function() {
                            $(".next").fadeIn();
                        })
    				});
    			});
    		}
    	},

    	onLeave: function(index, nextIndex, direction) {
             $(".next").fadeOut();
    		if(index == 2 && nextIndex == 3) {
    			$(".shafa5").show().animate({"bottom": -(k - 250), "width": 207 , "left": 260}, 2000, function() {
    				$(".img-a").animate({"opacity": 1}, 500, function() {
    					$(".btn-a").animate({"opacity": 1}, 500, function() {
                            $(".next").fadeIn();
                        });
    				})
    			});
    			$(".cover").show();
    		}
    		if(index == 3 && nextIndex == 4 ) {
    			$(".shafa5").hide();
    			$(".shafa6").show().animate({"bottom" : -((k - 250) + 50), "left": 260}, 2000, function() {
    				 $(this).hide();  
    				 $(".shafa7").show();
    				 $(".car").animate({"left": "150%"}, 3000, "easeInElastic",function() {
                         $(".comment").show();
                         $(".s2, .words-04a").animate({"opacity": 1}, 1000, function() {
                             $(".next").fadeIn();
                         });

                     });
    			})

    		}

            if(index == 4 && nextIndex == 5 ) {
                    $(".hand").animate({"bottom": 0}, 2000, function() {
                        $(".mouse-a").animate({"opacity": 1});
                        $(".shafa5").show().animate({"bottom": 70}, 1000, function() {
                            $(".order-05").animate({"bottom": 390}, function() {
                                $(".word-05").addClass("words-05-a");
                                 $(".next").fadeIn();
                            });
                        })
                    });
            }
            if(index ==5 && nextIndex == 6) {
				$(".shafa8").animate({"bottom":-(k-500),"left":"40%","width":65},1500,function() {
					$(".box").animate({"left":"38%"},1500,function() {
						$(".shafa8").hide();
						$(".box").animate({"bottom":40},function() {
						    $(".box").hide();
						    $(".section6").animate({"backgroundPositionX":"100%"},5000,function() {
						    	$(".man").animate({"height":305, "bottom":116,"right":500},1000,function() {
						    		$(".door").show();
						    		$(".women").show().animate({"height":305,"right":305},1000,function() {
						    			$(".take").show();
						    		})
						    	});
						    });
						    $(".address").show();
						    
					    });
					});
					
					
				});
			}

            if(index == 6 && nextIndex == 7 ) {
                setTimeout(function() {
                    $(".star").animate({"width": 120}, 500, function() {
                        $(".good-07").show();
                         $(".next").fadeIn();
                    });

                }, 2000);
            }
              $(".beginShoping").hover(function() {
                   $(".btn-08-a").toggle();  
              });
              $(document).mousemove(function(event) {
                   var x = event.pageX - $(".hand-08").width() / 2;  
                   var y = event.pageY + 10;  
                   var minY = k - 449; 
                   if(y < minY ) {
                      y = minY;
                   }
                
                 $(".hand-08").css({"left": x, "top": y});
              });

               $(".again").click(function(event) {
                   $.fn.fullpage.moveTo(1);
                   $("img, .move").attr("style", "");
               });
              
    	},
  
    }); 
});