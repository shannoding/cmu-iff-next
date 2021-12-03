
    /* hideAllBut("#hometext");
 $('.contentbox:not(#hometext)').css("display", "none");
    $('#hometext').css("display", "block");
	$("#aboutl").click(function(){
        $('#abouttext').css("display", "block");
        $('.contentbox:not(#abouttext)').css("display", "none");
    }); 
    
function hideAllBut(id){
        if (id != "#hometext") {$('.contentbox:not(#hometext)').hide();
                                $('#hometext').show();}
		if (id != "#abouttext") {$("#abouttext").hide();
                                $('.contentbox:not(#abouttext)').show();}
		if (id != "#upcomingtext") {$("#upcomingtext").show();
                                   $('.contentbox:not(#upcomingtext)').hide();}
		if (id != "#ticketstext") {$("#ticketstext").css("display", "block");
                                  $('.contentbox:not(#ticketstext)').css("display", "none");};
		if (id != "#shortfacestext") {$("#shortfacestext").css("display", "block");
                                     $('.contentbox:not(#shortfacestext)').css("display", "none");};
		if (id != "#previoustext") {$("#previoustext").css("display", "block");
                                   $('.contentbox:not(#previoustext)').css("display", "none");};
	} */

	function goto(id){	
		//animate to the div id.
		$(".contentbox-wrapper").animate({"top": -($(id).position().top)}, 500);
		scroll(100);
		$(id).css("display", "block");
	}

	function scroll(speed){
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, speed);
	}


/* $(document).ready(function(){	
       $(".filmlink").click(function(){
		$('.contentbox').load('films/' + this.id + '.html');
	});
    $(".link").click(function(){
        $('.contentbox').load(this.id + '.html');
    });
	
	$("#participatel").click(function(){
		window.location = "media/student_short/index.html";
	});
	$("#sponsorfest").click(function(){
		window.open("http://www.cmu.edu/faces/2013sponsor.pdf", '_blank');
	});
	
	$("#contactl").click(function(){
		goto('#contacttext');
	});
	
	$(".return").click(function(){
		scroll(500);
	});
	
	$(".buytickets").click(function(){
		goto('#ticketstext');
	});

	//direct links to pages
	if (window.location.hash){
		var tag = window.location.hash;
		if (tag == "#tickets"){
			$(tag + "l").trigger('click');
		}
		else if (tag == "#danube"){
			$(".preview").trigger('click');
		}
		else if (tag == "#abendland"){
			$(".filmabendland").trigger('click');
		}
		else if (tag =="#square"){
			$(".filmsquare").trigger('click');
		}
		else if (tag =="#ballad"){
			$(".filmballad").trigger('click');
		}
		else if (tag =="#mobile"){
			$(".filmmobile").trigger('click');
		}
		else if (tag =="#crocodile"){
			$(".filmcrocodile").trigger('click');
		}
		else if (tag =="#fame"){
			$(".filmfame").trigger('click');
		}
		else if (tag =="#fragments"){
			$(".filmfragments").trigger('click');
		}
		else if (tag =="#gaamer"){
			$(".filmgaamer").trigger('click');
		}
		else if (tag =="#hello"){
			$(".filmhello").trigger('click');
		}
		else if (tag =="#incontact"){
			$(".filmincontact").trigger('click');
		}
		else if (tag =="#punk"){
			$(".filmpunk").trigger('click');
		}
		else if (tag =="#sushi"){
			$(".filmsushi").trigger('click');
		}
		else if (tag =="#suspicious"){
			$(".filmsuspicious").trigger('click');
		}
		else if (tag =="#tahrir"){
			$(".filmtahrir").trigger('click');
		}
		else if (tag =="#weandi"){
			$(".filmweandi").trigger('click');
		}
		else if (tag =="#trumped"){
			$(".filmtrumped").trigger('click');
		}
	}
});
*/


$(document).ready(function() {
			$('h1').addClass('dontend');
			$('.columns').columnize({
				width : 400,
				height : 260
			});
     $('.columns').find('table, thead, tbody, tfoot, colgroup, caption, label, legend, script, style, textarea, button, object, embed, tr, th, td, li, h1, h2, h3, h4, h5, h6, form').addClass('dontsplit');
 $('.columns').find('h1, h2, h3, h4, h5, h6').addClass('dontend');
 $('.columns').find('br').addClass('removeiflast').addClass('removeiffirst');
	$('.venobox').venobox();
    $(".filmlink").click(function() {
		$('.contentbox').load('films/' + this.id + '.html');
        $('#facesof').removeClass('facesof-a').addClass('facesof-b');
        $('#bottom').removeClass('bottom-a').addClass('bottom-b');
	});
    $(".newmenu").click(function() {
        $('.contentbox').load(this.id + '.html');
        $('#facesof').removeClass('facesof-b').addClass('facesof-a');
        $('#bottom').removeClass('bottom-b').addClass('bottom-a');
    });
});