/* Author:
	Anastas Stoyanovsky
	Einhorn Design
*/

$(document).ready(function()
{
	var left_min_width = 245;
	var right_min_width = 200;
	var current_center_width = 0;
	var window_width = $(window).width();
	
	$('#facesofothers').hide();
	$('.submenu').hide();
	
	$('a.show-submenu').hover(function()
	{
		$('.submenu').show();
	}, function()
	{
		$('.submenu').hide();
	});
	
	$('ul.submenu').hover(function()
	{
		$('.submenu').show();
	}, function()
	{
		$('.submenu').hide();
	});
	
	$(window).resize(function()
	{
		if($(window).width() != window_width)
			resize_center_to(current_center_width);
		window_width = $(window).width();
	});
	
	$('#center-content').delegate('a','click',function()
	{
		var target_width = Number($(this).data('width'));
		resize_center_to(target_width, 'inc/'+$(this).data('inc'), $(this).data('bgcolor'));
	});
	
	function resize_center_to(target_width, page_to_load, bgcolor)
	{
		$('#main').stop();
		$('#left').stop();
		$('#center').stop();
		$('#right').stop();
	
		if(target_width != 0)
		{
			$('#facesof').fadeOut(500);
			$('#others').fadeOut(500, function()
			{
				$('#facesofothers').fadeIn(500);
			});
		}
		
		if(target_width == 0)
		{
			$('#facesofothers').fadeOut(500, function()
			{
				$('#facesof').fadeIn(500);
				$('#others').fadeIn(500);
			});
		}
		
		window_width = $(window).width();
		var left_target_width = (window_width * 0.5) - (target_width/2);
		var right_target_width = (window_width * 0.5) - (target_width/2);
		var center_target_width = target_width;
		
		current_center_width = target_width;
		
		if(left_target_width < left_min_width)
		{
			carryover = left_target_width - left_min_width;
			left_target_width = left_min_width;
			right_target_width = right_target_width + carryover;
			
			if(right_target_width < right_min_width)
			{
				right_target_width = right_min_width;
			}
		} else {
			if(right_target_width < right_min_width)
			{
				carryover = right_target_width - right_min_width;
				right_target_width = right_min_width;
				left_target_width = left_target_width + carryover;

				if(left_target_width < left_min_width)
				{
					left_target_width = left_min_width;
				}
			}
		}

		left_action = left_target_width + "px";
		center_action = center_target_width + "px";
		right_action = right_target_width + "px";
		
		var total_width = Number(left_target_width) + Number(center_target_width) + Number(right_target_width);
		main_action = total_width + 'px';
		
		if(total_width != $('#main').width())
		{
			$('#main').animate(
				{
					width: main_action
				},
				1000,
				function()
				{
					
				}
			);
		}
		
		$('#center').fadeOut(($('#center').width() == 0 ? 0 : 1000),function()
		{
			$('#center-content').css('padding', '0px');
		
			$('#right').animate(
				{
					width: right_action
				},
				1000,
				function()
				{
				}
			);

			$('#left').animate(
				{
					width: left_action,
				},
				1000,
				function()
				{
					
					$('#center').css('left',left_action);
					$('#center').css('overflow', 'hidden');
					$('#center-content').css('padding', '10px');
					$('#center').animate(
						{
							width: center_action,
							opacity: '1'
						},
						0,
						function()
						{
							//$('#center').css('width', center_target_width + 'px');
							$('#center').css('overflow', 'auto');
							$('#center').css('background-color', bgcolor);
							if(bgcolor == "black")
								$('#center').css('color', 'white');
							else
								$('#center').css('color', 'black');
							$('#center-content').load(page_to_load, function()
							{
								$('#center').fadeIn(1000);
							});
						}
					);
					$('#center').css('overflow', 'auto');
					$('#center').fadeIn(1000);
				}
			);	
		});
	}

	$('#left > ul > li > a').click(function()
	{
		$(this).removeAttr("href");
		var target_width = Number($(this).data('width'));
		resize_center_to(target_width, 'inc/'+$(this).data('inc'), $(this).data('bgcolor'));
		$('#left > ul > li > a').removeClass("active");
		$(this).addClass("active");
	});

});