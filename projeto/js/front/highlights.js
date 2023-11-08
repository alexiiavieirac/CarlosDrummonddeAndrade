$(document).ready(function() {

	//alert('LOAD HIGHLIGHTS');
	
	var hlContainer = $('ul.highlights');
	var hl = $('ul.highlights li');
	//var hlMob = $('ul.highlights.mobile_version li');
	var btnPg = $('.btn_pag');
	
	//var hlBg = $('.highlights .hl_background');
	
	var actHl = 1;
	var totalHl = hl.length;
	//var totalHlMob = hlMob.length-1;
	
	var btnNext = $('.btn_next');
	var btnPrev = $('.btn_prev');
	
	hl.hide();
	hl.first().show();
	
	//hlMob.first().show();
	
	btnNext.click(function() {
		clearTimeout(timerBanner);
		changeBanner('next');
	});
	
	btnPrev.click(function() {
		clearTimeout(timerBanner);
		changeBanner('prev');
	});
	
	btnPg.click(function() {
		
		var btnImg = $(this).attr('src');
		btnPg.attr('src', btnImg);
		$(this).attr('src', btnImg.substr(0, btnImg.length-4)+'_sel.png');
		hlContainer.find('.hl_'+actHl).hide();
		actHl = $(this).attr('itemId');
		hlContainer.find('.hl_'+actHl).show();
		
	});
	
	var timerBanner = setTimeout(function() {
		changeBanner('next');
	}, 5000);
	
	
	function changeBanner(dir) {
	
		$('ul.highlights li:nth-child('+actHl+')').hide();
		
		if (dir == 'next') {
			if (actHl < totalHl) {
				actHl ++;
			} else {
				actHl = 1;
			}
		} else if (dir == 'prev') {
			if (actHl > 1) {
				actHl --;
			} else {
				actHl = totalHl;
			}
		}
		
		$('ul.highlights li:nth-child('+actHl+')').show();
		
		timerBanner = setTimeout(function() {
			changeBanner('next');
		}, 5000);
		
	}
	
//	hlContainer.on("swipeleft",function(){
//		hlContainer.find('.hl_'+actHl).hide();
//		actHl ++;
//		if (actHl > totalHlMob) {
//			actHl = 0;
//		}
//		hlContainer.find('.hl_'+actHl).show();
//	});
//	
//	hlContainer.on("swiperight",function(){
//		hlContainer.find('.hl_'+actHl).hide();
//		actHl --;
//		if (actHl < 0) {
//			actHl = totalHlMob;
//		}
//		hlContainer.find('.hl_'+actHl).show();
//	});
	
});