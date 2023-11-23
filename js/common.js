$(document).ready(function () {
    $('.query-switch a').click(function(e){
        e.preventDefault();
        $(this).parents('.query-switch').find('a').removeClass('active');
        $(this).addClass('active');
    });

    $('.mobnemu').click(function(){
        var overlay = $('<div class="overlay"></div>');
        $('body').append(overlay);
        overlay.fadeIn();


        $('.querysidebar').addClass('show');
    });

    $(document).on('click', '.overlay', function() {
        $('.overlay').fadeOut(); 
        $('.querysidebar').removeClass('show');
        $('.overlay').remove();
    });

});