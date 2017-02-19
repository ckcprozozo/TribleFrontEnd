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



