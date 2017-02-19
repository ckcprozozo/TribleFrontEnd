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



/*帳戶左側menu切換*/
$(document).ready(function()
{
    var mpeListLink = $('.m-p-a-menu li a');
    var mpeList = $('.m-p-a-menu li');
    var mpeContent = $('.MemberProfileAccountContent');
    var mpeContestFirst = $('.MemberProfileAccountContent:not(:first)');
    
    mpeContestFirst.hide();
    mpeListLink.click(function(e)
    {
        e.preventDefault();
        mpeList.removeClass('active');
        $(this).closest('li').addClass('active');
        
        mpeContent.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });
});


/*tooltip-function*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


//收款設定

//增加帳戶-->第一步
$(document).ready(function(){
    $(".m-p-a-ReceivableSetting-AddAccount").click(function(){
        $(".m-p-a-ReceivableSetting-Step1").show();
        $(".m-p-a-ReceivableSetting-default").hide();
		$(".m-p-a-ReceivableSetting-Step2").hide();
		$(".m-p-a-ReceivableSetting-Step3-Paypal").hide();
		$(".m-p-a-ReceivableSetting-Step3-Bank").hide();
    });
});

//第一步-->第二步
$(document).ready(function(){
    $(".m-p-a-RS-Step1-confirm").click(function(){
        $(".m-p-a-ReceivableSetting-Step2").show();
        $(".m-p-a-ReceivableSetting-default").hide();
		$(".m-p-a-ReceivableSetting-Step1").hide();
		$(".m-p-a-ReceivableSetting-Step3-Paypal").hide();
		$(".m-p-a-ReceivableSetting-Step3-Bank").hide();
    });
});

//第二步-->第三步
$(document).ready(function(){
    $(".m-p-a-RS-S2-Next").click(function(){
        $(".m-p-a-ReceivableSetting-Step3-Paypal").show();
		$(".m-p-a-ReceivableSetting-Step3-Bank").show();
        $(".m-p-a-ReceivableSetting-default").hide();
		$(".m-p-a-ReceivableSetting-Step1").hide();
		$(".m-p-a-ReceivableSetting-Step2").hide();
    });
});

//第一步-->增加帳戶
$(document).ready(function(){
    $(".m-p-a-RS-return-s1").click(function(){
        $(".m-p-a-ReceivableSetting-default").show();
        $(".m-p-a-ReceivableSetting-Step1").hide();
		$(".m-p-a-ReceivableSetting-Step3-Paypal").hide();
		$(".m-p-a-ReceivableSetting-Step2").hide();
		$(".m-p-a-ReceivableSetting-Step3-Bank").hide();
    });
});

//第二步-->第一步
$(document).ready(function(){
    $(".m-p-a-RS-return-s2").click(function(){
        $(".m-p-a-ReceivableSetting-Step1").show();
        $(".m-p-a-ReceivableSetting-default").hide();
		$(".m-p-a-ReceivableSetting-Step3-Paypal").hide();
		$(".m-p-a-ReceivableSetting-Step2").hide();
		$(".m-p-a-ReceivableSetting-Step3-Bank").hide();
    });
});

//第三步-->第二步
$(document).ready(function(){
    $(".m-p-a-RS-return-s3").click(function(){
        $(".m-p-a-ReceivableSetting-Step2").show();
        $(".m-p-a-ReceivableSetting-default").hide();
		$(".m-p-a-ReceivableSetting-Step3-Paypal").hide();
		$(".m-p-a-ReceivableSetting-Step1").hide();
		$(".m-p-a-ReceivableSetting-Step3-Bank").hide();
    });
});


