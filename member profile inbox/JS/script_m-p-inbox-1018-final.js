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


//通知/體驗/訊息 交換

//點擊訊息
$(document).ready(function(){
    $("#InboxListNotice-link").click(function(){
		$("li.DropdownMenuForMessage").hide();
		$("li.DropdownMenuForDiaMessage").hide();
    });
})

$(document).ready(function(){
    $("#InboxListMessage-link").click(function(){
        $("li.DropdownMenuForMessage").show();
		$("li.DropdownMenuForDiaMessage").hide();
    });
})

$(document).ready(function(){
    $("#InboxListDia-link").click(function(){
        $("li.DropdownMenuForDiaMessage").show();
		$("li.DropdownMenuForMessage").hide();
    });
})




