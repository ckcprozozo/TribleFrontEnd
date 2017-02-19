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

//===================================
//			你的探險-更改與取消
//==================================

//更改預定 & 取消預定切換

//點擊"更改預定"
$(document).ready(function(){
    $(".c-c-change-booking-link").click(function(){
        $(".c-c-change-b-body").toggle("fast");
		$(".c-c-cancel-booking-body").hide("fast");
		$("#c-c-change-booking-remind").toggle("fast");
    });
});
//點擊"取消預定"
$(document).ready(function(){
    $(".c-c-cancel-booking-link").click(function(){
        $(".c-c-cancel-booking-body").toggle("fast");
		$(".c-c-change-b-body").hide("fast");
		$("#c-c-change-booking-remind").hide("fast");
    });
});


/*你的探險 取消預定 radio*/
$('#c-b-r-reset').click(function(){
	$('.c-b-r').prop('checked',false);
	});
	
//下拉式選單改變金額

var basePrice = 318;
$("#m-p-e-NumberOfPeople").change(function () {
    var newPrice = basePrice;
    var tipPrice = Math.round(basePrice/10);
    var NewTotalPrice = newPrice+tipPrice;
	
    $("#m-p-e-NumberOfPeople option:selected").each(function () {
        newPrice *= parseFloat($(this).data('price'));
        console.log(typeof newPrice);
        tipPrice *= parseFloat($(this).data('price'));
        console.log(typeof tipPrice);
    });
	
    newPrice = newPrice;
    	$("#c-b-SubTotal").html(newPrice);
		
    tipPrice = tipPrice;
    	$("#c-b-Tip").html(tipPrice);
		
    NewTotalPrice = newPrice+tipPrice;
    	$("#c-b-NewTotal").html(NewTotalPrice);
});
	
	

//===================================
//			你的探險-分享體驗
//==================================

/*============================================
			新增聯絡人 - 動態增減input
============================================*/

$(function()
{
    var count = 1;
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();
        if(count < 5){var controlForm = $('.controls div:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);
            newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-remove')
            .html('<span class="glyphicon glyphicon-minus"></span>');
            count++;
            
        }
        
        
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();
        count --;
		e.preventDefault();
		return false;
	});
});

//===================================
//			你的探險-查看行程單
//==================================
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});