//更改預定 & 取消預定切換

//點擊"更改預定"
$(document).ready(function(){
    $(".c-c-change-booking-link").click(function(){
        $(".c-c-change-b-body").toggle("fast");
		$(".c-c-cancel-b-body").hide("fast");
		$("#c-c-change-booking-remind").toggle("fast");
    });
});
//點擊"取消預定"
$(document).ready(function(){
    $(".c-c-cancel-booking-link").click(function(){
        $(".c-c-cancel-b-body").toggle("fast");
		$(".c-c-change-b-body").hide("fast");
		$("#c-c-change-booking-remind").hide("fast");
    });
});


/*你的探險 取消預定 radio*/
$('#c-b-r-reset').click(function(){
	$('.c-b-r').prop('checked',false);
	});


