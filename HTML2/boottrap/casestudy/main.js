$(window).scroll(function() {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');   
    } else {
        $('.navbar').removeClass('sticky');
    }
}) 
//animate gioi thieu sach
let nCount = selector => {
    $(selector).each(function(){
        $(this).animate ({
            Counter:$(this).text()
        },{
            duration : 4000,
            easing: "swing",
          step: function(value){
            $(this).text(Math.ceil(value))
          }
        })
    })
}
let postiton = 0;
$(window).scroll(function(){
    let oTop = $('.numbers').offet().top - window.innerHeight
    if(postiton == 0 && $(window).scrollTop() >= oTop) {
        postiton++;
        nCount(".rect > h1");
    }
})