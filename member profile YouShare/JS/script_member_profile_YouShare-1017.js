//navbar_bottom點擊交換
$(document).ready(function(){
	
	$('.NavbarBottomListCotent').click(function(){
		/*var tab_id = $(this).attr('data-tab');*/

		$('.NavbarBottomListCotent').removeClass('active');
		/*$('.tab-content').removeClass('current');*/

		$(this).addClass('active');
		/*$("#"+tab_id).addClass('current');*/
	})

})

/*你的分享左側menu切換*/
$(document).ready(function()
{
    var mpysListLink = $('.m-p-y-s-menu li a');
    var mpysList = $('.m-p-y-s-menu li');
    var mpysContent = $('.MemberProfileYourShareContent');
    var mpysContestFirst = $('.MemberProfileYourShareContent:not(:first)');
    
    mpysContestFirst.hide();
    mpysListLink.click(function(e)
    {
        e.preventDefault();
        mpysList.removeClass('active');
        $(this).closest('li').addClass('active');
        
        mpysContent.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });
});

//你的體驗-->進行中-->下拉式選單
$(document).ready(function(){
    $("#YourExp-Continue-title").click(function(){
        $(".DropdownMenuForYourExp-Continue").show();
    });
});

$(document).ready(function(){
    $("#YourExp-Check-title").click(function(){
        $(".DropdownMenuForYourExp-Continue").hide();
    });
});

$(document).ready(function(){
    $("#YourExp-Release-title").click(function(){
        $(".DropdownMenuForYourExp-Continue").hide();
    });
});

$(document).ready(function(){
    $("#YourExp-Unpublish-title").click(function(){
        $(".DropdownMenuForYourExp-Continue").hide();
    });
});

//你的預定-->"查看過去的預定"點擊切換-state1
$(document).ready(function(){
    $(".y-s-ViewPastReport-state1").click(function(){
        $(".m-p-y-s-YourBookingContent-state1-b").show();
		$(".m-p-y-s-YourBookingContent-state1-a").hide();
    });
});


//你的預定-->"查看過去的預定"點擊切換-state2
$(document).ready(function(){
    $(".y-s-ViewPastReport-state2").click(function(){
        $(".m-p-y-s-YourBookingContent-state2-b").show();
		$(".m-p-y-s-YourBookingContent-state2-a").hide();
    });
});

$(document).ready(function(){
    $(".y-s-WillBooking-state2-link").click(function(){
        $(".m-p-y-s-YourBookingContent-state2-a").show();
		$(".m-p-y-s-YourBookingContent-state2-b").hide();
    });
});


//你的預定-->"查看過去的預定"點擊切換-state3
$(document).ready(function(){
    $(".y-s-PastReport-state3-link").click(function(){
        $(".m-p-y-s-YourBookingContent-state3-b").show();
		$(".m-p-y-s-YourBookingContent-state3-a").hide();
    });
});

$(document).ready(function(){
    $(".y-s-WillBooking-state3-link").click(function(){
        $(".m-p-y-s-YourBookingContent-state3-a").show();
		$(".m-p-y-s-YourBookingContent-state3-b").hide();
    });
});
