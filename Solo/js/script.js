// $(function(){    //->short form of document.ready method
//     $('h1').slideUp(200).slideDown(200)

//     $('h1').css({
//         color:'red',
//         fontSize:40
//     })
// })

/* ********************************************************
|   |   |   |   Pre-Loader
******************************************************** */
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
})

/* ********************************************************
|   |   |   |   Team
******************************************************** */
$(function(){
    $('#team-members').owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:2000,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    })
})

