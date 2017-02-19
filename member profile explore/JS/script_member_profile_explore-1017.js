//===================================
//			你的探險-內文
//==================================


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



/*你的探險左側menu切換*/
$(document).ready(function()
{
    var mpeListLink = $('.m-p-e-menu li a');
    var mpeList = $('.m-p-e-menu li');
    var mpeContent = $('.MemberProfileExploreContent');
    var mpeContestFirst = $('.MemberProfileExploreContent:not(:first)');
    
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

//參與的探險 下拉式選單


$(document).ready(function(){
    $("#m-p-e-JoinExplore-link").click(function(){
        $("div.m-p-e-Join-select").show();
    });
});


$(document).ready(function(){
    $("#m-p-e-Favorite-link").click(function(){
		$("div.m-p-e-Join-select").hide();
    });
});

