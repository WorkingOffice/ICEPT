// JavaScript Document
$(function(){
	$("#text_jt").click(function(){
		$("#text_title1,#text_title2,#text_title3,#text_title4,#text_title44,#text_title5,#text_title6,#text_title7,#text_title8,#text_title9").css("display","block")
		$("#text_title11,#text_title21,#text_title31,#text_title41,#text_title51,#text_title61,#text_title71,#text_title81,#text_title91").css("display","none")
	})
	$("#text_ft").click(function(){
		$("#text_title1,#text_title2,#text_title3,#text_title4,#text_title44,#text_title5,#text_title6,#text_title7,#text_title8,#text_title9").css("display","none")
		$("#text_title11,#text_title21,#text_title31,#text_title41,#text_title51,#text_title61,#text_title71,#text_title81,#text_title91").css("display","block")
	})
	//nav
	$(".nav").localScroll();
		
	//projects >> a.prev
	$('#thumbscreen a.prev').click(function(){
		if($('.slides_control').is(":animated")){
			$('.slides_control').stop(false, true);
		}
		var this_index = $('.slides_control').css('left');
		var _index = 0;
		if(this_index.length > 3){
			_index = parseInt(this_index.slice(1,this_index.length-2))/936;
		}
		var len = $('.project-thumbnails-wrap').length;
		if(_index == 0){
			$('.slides_control').animate({
				left: -936 * (len - 1) + 'px'
			},1000);
		} else if(_index > 0 & _index < len) {
			$('.slides_control').animate({
				left: -(_index - 1) * 936 + 'px'
			},1000);
		}
		return false;
	});
	
	//projects >> a.next
	$('#thumbscreen a.next').click(function(){
		if($('.slides_control').is(":animated")){
			$('.slides_control').stop(false, true);
		}
		var this_index = $('.slides_control').css('left');
		var _index = 0;
		if(this_index.length > 3){
			_index = parseInt(this_index.slice(1,this_index.length-2))/936;
		}
		var len = $('.project-thumbnails-wrap').length;
		if(_index == 3){
			$('.slides_control').animate({
				left: 0 + 'px'
			},1000);
		} else if(_index >= 0 & _index < len) {
			$('.slides_control').animate({
				left: -(_index + 1) * 936
			},1000);
		}
		return false;
	});
	


		
	$('.project-thumbnails li a').hover(function(){
		$(this).find('.shadow').fadeIn(500);
	},function(){
		$(this).find('.shadow').hide()/*.fadeOut(500)*/;
	});
	
	$('.project-thumbnails li a').click(function(){
		if($('.project-thumbnails-wrap').is(":animated") || $('.project-container').is(":animated")){
			$('.project-thumbnails-wrap').stop(false, true);
			$('.project-container').stop(false, true);
		}
		$("#project-container").slideDown("slow");
		$(this).closest(".project-thumbnails-wrap").find('.project-div').slideDown("slow")
		var this_wrap = $(this).closest(".project-thumbnails-wrap");
		this_wrap.closest('.slides_control').animate({
				top: -108 + 'px'
			},1000);
		$("#thumbscreen a.prev, #thumbscreen a.next").hide('slow');
		$('.project-container').show(1000);
		$(window).scrollTop(1000);
		$('#thumbscreen').css({opacity:0.5});
	});
	
	/*projects --> close popBox*/
	$("#project-content a.project-slider-close").click(function(){
		
		$("#project-container").slideUp('slow');
		$('.project-thumbnails-wrap:visible .project-div').slideUp("slow")
			.closest('.slides_control').animate({
				top: 0 + 'px'
			},1000,function(){
				$(window).scrollTop(768);
			});

		$("#thumbscreen a.prev, #thumbscreen a.next").show('slow');
		$('#thumbscreen').css({opacity:1});
		// yy+++++
		$('.project-cycle').css('left',"0");
		$('.bx-pager .bx-pager-current').text(1);
	});

		//左右切换轮播
	var starMova;
	function starMov(){
		starMova=setInterval(function(){	
			var obj = $('.project-cycle');
			if(obj.is(":animated")){
				obj.stop(false, true);
			}
			var len = $('.project-cycle li').length, m, _index, index = obj.css('left');
			if($('.bx-pager .bx-pager-current').text()==len){
				clearInterval(starMov);
				return false;
			}
			if(index.length == 3){_index=0;}
			if(index.length > 3){
				_index = parseInt(index.slice(1,index.length-2))/711;
			}
			_index = (_index == len-1)? 0 : _index + 1 ;
			obj.animate({
				left: -_index * 711+ 'px'
			},1000);
			$('.bx-pager .bx-pager-current').text(Math.ceil(_index)+1);
		},3000);
	}
	if($("#project-container").css("display")=="block" || $("#project-container").css("display")==" " ){
		starMov();
	}else{
		if(starMova){clearInterval(starMova)};
		$('.project-cycle').css('left',"0");
		$('.bx-pager .bx-pager-current').text(1);
	}
	$('#project-content a.bx-prev').mouseover(function(){
		if(starMova){clearInterval(starMova)}
		starMov1=setInterval(function(){
			if($('.bx-pager .bx-pager-current').text()==1){
				clearInterval(starMov1);
				return false;
			}
			var obj = $('.project-cycle');
			if(obj.is(":animated")){
				obj.stop(false, true);
			}
			var len = $('.project-cycle li').length, m, _index, index = obj.css('left');
			
			if(index.length == 3){_index=0;}
			if(index.length > 3){
				_index = parseInt(index.slice(1,index.length-2))/711;
			}
			_index = (_index == 0)? len - 1 : _index - 1 ;
			obj.animate({
				left: -_index * 711 + 'px'
			},1000);
			$('.bx-pager .bx-pager-current').text(Math.ceil(_index)+1);
		},3000)
	});
	$('#project-content a.bx-prev').mouseout(function(){
		clearInterval(starMov1);
		starMov();		
	})
	$('#project-content a.bx-next').mouseover(function(){
		if(starMova){clearInterval(starMova)}
		starMov2=setInterval(function(){	
			var obj = $('.project-cycle');
			if(obj.is(":animated")){
				obj.stop(false, true);
			}
			var len = $('.project-cycle li').length, m, _index, index = obj.css('left');
			if($('.bx-pager .bx-pager-current').text()==len){
				clearInterval(starMov2);
				return false;
			}
			if(index.length == 3){_index=0;}
			if(index.length > 3){
				_index = parseInt(index.slice(1,index.length-2))/711;
			}
			_index = (_index == len-1)? 0 : _index + 1 ;
			obj.animate({
				left: -_index * 711+ 'px'
			},1000);
			$('.bx-pager .bx-pager-current').text(Math.ceil(_index)+1);
		},3000);
		
	});
	$('#project-content a.bx-next').mouseout(function(){
		clearInterval(starMov2);
		starMov();	
	});
	
	

	
	//JOBS
	$(".job_con").hide(); 
	$(".slideCon h3").click(function(){
		if( $(this).next().is(":hidden") ) { 
			$(".slideCon h3").removeClass("active").next().slideUp(); 
			$(this).toggleClass("active").next().slideDown(); 
		} else { 
			$(this).toggleClass("active").next().slideUp();
		}
		return false;
	});
	
	//window.scroll
	$(window).scroll(function(){
		var topDist = $(this).scrollTop();
		
		if(topDist < 1768){
			$('.content').css({
				position: 'static'
			});
			if(topDist < 768){
				$('.nav li').removeClass('active');
				$('.nav li:eq(0)').addClass('active');
			}
			if((topDist >= 768) && (topDist < 1768)){
				$('.nav li').removeClass('active');
				$('.nav li:eq(1)').addClass('active');
			}
		}
		if ((topDist >= 1568) && (topDist < 2536) ) {
			$('.content').css({
				position: 'static'
			});
			$('#oreginal .content').css({
				position: 'fixed',
				top: 105
			});
			$('.nav li').removeClass('active');
			$('.nav li:eq(2)').addClass('active');
		}
		if ((topDist >= 2536) && (topDist < 3236) ) {
			$('.content').css({
				position: 'static'
			});
			$('#shopLife .content').css({
				position: 'fixed',
				top: 120
			});
			$('.nav li').removeClass('active');
			$('.nav li:eq(3)').addClass('active');
		}
		
		if ((topDist >= 3236) && (topDist < 4000) ) {
			$('.content').css({
				position: 'static'
			});
			$('#aboutUs .content').css({
				position: 'fixed',
				top: 118
			});
			$('.nav li').removeClass('active');
			$('.nav li:eq(4)').addClass('active');
		}
		if(topDist >= 4000){
			$('.content').css({
				position: 'static'
			});
			$('#jobs .content').css({
				position: 'fixed',
				top: 118
			});
			$('.nav li').removeClass('active');
			$('.nav li:eq(5)').addClass('active');
		}
	});
	
	/*language*/
	$('.language .lag_con').hide();
	$('.language').hover(function(){
		$(this).find('.lag_con').show();
	},function(){
		$(this).find('.lag_con').hide();
	});
});




