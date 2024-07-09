/// <reference types="../@types/jquery" />




    // side-bar , home-section
$('.menu-toggler').on('click',()=>{
    $('.side-menu').animate({width : '250px'} , 300)
    $('.menu-toggler , .home-section').animate({marginLeft :'250px'} , 300)
})

$('.close-menu').on('click',()=>{
    $('.side-menu').animate({width : '0'} , 300)
    $('.menu-toggler , .home-section').animate({marginLeft :'0'} , 300)
})

// side-bar links

$(".side-menu a").on('click', function(e){

    let sectiosId= $(e.target).attr("href");
    
    let sectionOffset = $(sectiosId).offset().top;
    
    $("html , body").animate({scrollTop:sectionOffset},2000);
    
})



// content

$('.slider').on('click' , function(){
    $('.slider-content').not($(this).next()).slideUp(500)
    $(this).next().slideToggle(500);
})



// counter

eventProc();
setInterval(eventProc ,1000)

function eventProc(){
    let eventDate = new Date("25 october 2024 12:00:00").getTime();

    let dateNow = new Date().getTime();

    let dateDiff = eventDate - dateNow;
  
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  
     $(".days .counter").html (days < 10 ? `0${days} D` : days + ` D`)
     $(".hours .counter").html (hours < 10 ? `0${hours} H` : hours + ` H`)
     $(".mins .counter").html (minutes < 10 ? `0${minutes} M` : minutes + ` M`)
     $('.secs .counter').html (seconds < 10 ? `0${seconds} S` : seconds + ` S`)
  
    if (dateDiff < 0) {
      clearInterval(counter);
    }

}


// contact
let maxLength = 100;
$('textarea').on('input' , (e)=>{
    if($('textarea').val().length >= maxLength){
        $('textarea').val($('textarea').val().substring(0,maxLength));
        $('#areaInfo').html(`<span class="text-danger fw-bold">You reached the max number of characters</span> `)
    }else{
        $('#areaInfo').html(  'Character Reamining : ' + (maxLength - $('textarea').val().length ) )
    }
})



