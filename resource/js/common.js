$(document).ready(function(){	

	//스크롤 위로
	var backToTop = document.getElementById('backtotop');

	var checkScroll=()=>{	
		let pageOffset = window.pageYOffset;
		if(pageYOffset !== 0){			
			backToTop.classList.add('show');  
		}else{
			backToTop.classList.remove('show'); 
		}
	}

	var moveBackToTop=()=>{
		if(window.pageYOffset > 0 ){
			window.scrollTo({top:0, behavior:"smooth"});
		}
	}	
	window.addEventListener('scroll', checkScroll);	
	backToTop.addEventListener('click',moveBackToTop);

	//띠 배너
	$(".promotionBanner .btnClose").click(function(){ 
		$(".promotionBanner").slideToggle(300); 
		return false; 
	});


	//상단 메뉴 호출
	$("#menu").click(function(){	
		if (!$(this).hasClass('over')){	
			$(this).addClass("over");
			$(".dim").slideDown("fast");
			$("header").addClass("on");
			$(".promotionBanner").slideUp(300); 
			toggleScrolling('body');
		} else{	
			$("header").removeClass("on");
			$(this).removeClass("over");
			$(".dim").slideUp("fast");
			toggleScrolling('body');
		}
	});

	$(".toggle > a").click(function(){ 
		$(this).toggleClass("on");
		$(".s-menu").slideToggle(300); 
		return false; 
	});

	//MY Dropdown
	$(".myhov").hover(function(){
		$(".d-menu").stop(true,true).slideDown();
	}, function() {
		$(".d-menu").slideUp();
	});	

	//메인 메뉴
	$('#gnb').hover(function(){
		$(this).addClass("on");
	}, function() {
		$(this).removeClass("on");
	});
});

toggleScrolling = function(_selector) {
	let ele = document.querySelector(_selector);
	if(!ele) { return };
	if (ele.style.overflow === 'hidden') {
		ele.style.overflow = '';
		ele.style.height = '';
	} else {
		ele.style.overflow = 'hidden';
		ele.style.height = '100%';
	}
};

$(function(){
	//탭
	$(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

	//메인 팝업 dim 클릭 시 팝업 안보이게
	$('.poupu-wrap .dim').on('click', function() {
		$(this).hide().siblings('.popup').hide();
	});
});
