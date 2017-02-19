//更改預定 & 取消預定切換

//點擊"更改預定"
$(document).ready(function(){
    $(".y-s-change-booking-link").click(function(){
        $(".y-s-change-b-body").toggle("fast");
		$(".y-s-cancel-b-body").hide("fast");
    });
});
//點擊"取消預定"
$(document).ready(function(){
    $(".y-s-cancel-booking-link").click(function(){
        $(".y-s-cancel-b-body").toggle("fast");
		$(".y-s-change-b-body").hide("fast");
    });
});

/*你的分享 取消預定 radio*/
$('#y-s-r-reset').click(function(){
	$('.y-s-r').prop('checked',false);
	});

