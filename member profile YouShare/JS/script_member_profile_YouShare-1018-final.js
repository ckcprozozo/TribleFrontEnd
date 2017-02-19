//=====================================================
//				你的分享-內文開始
//=======================================================



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


//=====================================================
//				你的分享-更改與取消
//=====================================================

//更改預定 & 取消預定切換

//點擊"更改預定"
$(document).ready(function(){
    $(".y-s-change-booking-link").click(function(){
        $(".y-s-change-b-body").toggle("fast");
		$(".y-s-cancel-b-body").hide("fast");
		$("#y-s-change-booking-remind").toggle("fast");
    });
});
//點擊"取消預定"
$(document).ready(function(){
    $(".y-s-cancel-booking-link").click(function(){
        $(".y-s-cancel-b-body").toggle("fast");
		$(".y-s-change-b-body").hide("fast");
		$("#y-s-change-booking-remind").hide("fast");
    });
});

/*你的分享 取消預定 radio*/
$('#y-s-r-reset').click(function(){
	$('.y-s-r').prop('checked',false);
	});

//=====================================================
//				你的分享-查看訂單
//=====================================================

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});





