$(document).ready(function(){
  /* brunch news */
  $('.brunch_news.sliders').slick({
    arrows:false,
    dots:false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:2000,
    vertical:true,
    verticalSwiping:true,
  })
  /* brunch recommend */
  $('.brunch_recommend.sliders').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots:true,
    infinite:false,
    variableWidth:true,
    arrows:true,
  })
})