// Upload photo function

$(document).on('ready', function() {
    $("#inputphoto-Personal-pic").fileinput({
        uploadUrl: '/file-upload-batch/2',
        maxFilePreviewSize: 10240,
		maxFileCount:1,
    });
});

$(document).on('ready', function() {
    $("#inputfile-Personal-film").fileinput({
        uploadUrl: '/file-upload-batch/2',
        maxFilePreviewSize: 10240,
		maxFileCount:1,
    });
});

//視窗交換
//點擊編輯個人資料
$(document).ready(function(){
    $(".personal-edit-link").click(function(){
        $(".Personal-edit-group").show("fast");
		$(".trust-verify").hide("fast");
		$(".personal-pic-film").hide("fast");
		$(".evaluation-sheet").hide("fast");
    });
});
//點擊個人頭像、影片
$(document).ready(function(){
    $(".personal-pic-link").click(function(){
        $(".personal-pic-film").show("fast");
		$(".Personal-edit-group").hide("fast");
		$(".trust-verify").hide("fast");
		$(".evaluation-sheet").hide("fast");
    });
});
//點擊信任及驗證
$(document).ready(function(){
    $(".verify-link").click(function(){
        $(".trust-verify").show("fast");
		$(".Personal-edit-group").hide("fast");
		$(".personal-pic-film").hide("fast");
		$(".evaluation-sheet").hide("fast");
    });
});

//點擊評價
$(document).ready(function(){
    $(".evaluate-link").click(function(){
        $(".evaluation-sheet").show("fast");
		$(".Personal-edit-group").hide("fast");
		$(".personal-pic-film").hide("fast");
		$(".trust-verify").hide("fast");
    });
});


// 新增動態欄位(行程內容)


//Bootstrap switch
$(window).load(function(){<!--from w ww.  jav a2 s.c  o m-->
    $('.BSswitch').bootstrapSwitch('state', true);
});




   




