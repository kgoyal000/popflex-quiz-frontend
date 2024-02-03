$(document).ready(function(){

	$('.checkbox').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active')
	})

	if ($('.form__wrapper').length) {
		$('.form__wrapper .step').each(function(index,elem){
			$(elem).find(">h6").addClass("not__animated");
			$(elem).find(".step__picker a").addClass("not__animated");
			$(elem).find('.final>span').addClass("not__animated");
			$(elem).find('.final>p').addClass("not__animated");
			$(elem).find('.final>h6').addClass("not__animated");
			$(elem).find('.final>.controls__bottom').addClass("not__animated");
		});
	}


	$('.form__wrapper .step .step__picker>a, .form__wrapper .step .step__picker button').on("click" ,function(e){
		e.preventDefault();

		var $anchor = $(e.target).closest('a');

		if ($anchor.length) { // If an <a> tag is indeed clicked or a child of it
			$anchor.parent().find('a.active').removeClass('active');
			$anchor.addClass('active');
		}

		$(this).closest(".step__picker").find("input").val($(this).find("p").text());
		$(this).closest('.step').removeClass('current').css('display' ,"none").next('.step').addClass("current").fadeIn(300);
		$('.test__wrapper .controls .back').fadeIn(300);
		$('.form__wrapper .progress>.active').css("width" , $('.form__wrapper .step.current').attr("data-progress"));
		if ($('.form__wrapper .step.current').attr("data-progress") == "100%") {
			$('.form__wrapper .progress').css("display" ,"none");
			$('.form__wrapper .controls').css('display' ,"none");
		}
		$('.step.current').find(".not__animated").each(function(index,elem){
			setTimeout(function(){
				$(elem).addClass("animated");
			}, index*30);
		});
	});	


	$('.form__wrapper .final .controls__bottom  button , .form__wrapper .final .controls__bottom >a').on('click' ,function(e){
		e.preventDefault();
		$('.form__wrapper').css('display' ,"none");
		$('.recommended__wrapper').fadeIn(300);
	});



	$('.form__wrapper .controls .back').on('click' ,function(e){
		e.preventDefault();
		$('.form__wrapper .step.current .not__animated').removeClass('animated');
		$('.form__wrapper .step.current').removeClass('current').css('display' ,"none").prev('.step').addClass("current").fadeIn(300);
		if ($('.form__wrapper .step.current').prev().length == 0) {
			$('.test__wrapper .controls .back').css('display' ,'none');
		}
		$('.form__wrapper .progress>.active').css("width" , $('.form__wrapper .step.current').attr("data-progress"));
	});

	$('.main__test .btn button').on('click' ,function(e){
		e.preventDefault();
		$('.main__test').css("display" ,"none");
		$('.form__wrapper').fadeIn(300);
		setTimeout(function(){
			$('.step.current').find(".not__animated").each(function(index,elem){
				setTimeout(function(){
					$(elem).addClass("animated");
				}, index*30);
			});
			setTimeout(function(){
				$('.form__wrapper .controls').css("opacity" ,"1");
			}, 400);
		}, 300);
	});
});