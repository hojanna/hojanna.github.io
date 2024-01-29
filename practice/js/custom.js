$(window).scroll(function(){
  if($(window).scrollTop() > 64 ){
    $('header').addClass('active')
  }else{
    $('header').removeClass('active')
  }
  if($(window).scrollTop() > 354){
    $('header').removeClass('active')
  }
})

$(document).ready(function(){
  /* menu_more_button */
  $('.menu_more_button').click(function(){
    $('.header_more').addClass('active')
    $('.close_overlay').addClass('active')
  })
  $('.close_overlay').click(function(){
    $('.header_more').removeClass('active')
    $(this).removeClass('active')
  })
  /* brunch news */
  $('.brunch_news.sliders').slick({
    arrows:false,
    dots:false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:2000,
    vertical:true,
    verticalSwiping:false,
  })
  /* brunch recommend */
  $('.brunch_recommend.sliders').slick({
    centerMode: true,
    slidesToShow: 3,
    dots:true,
    infinite:false,
    variableWidth:true,
    arrows:true,
  })
  /* brunch_article */
 $('.brunch_articles_sliders').slick({
    dots:false,
    arrows:true,
    slidesToShow:5,
    slidesToScroll:5,
 });
  /* tab메뉴 */
  $('.brunch_weekly_tab').click(function(){
    $(this).addClass('active')
    $(this).siblings('.brunch_weekly_tab').removeClass('active')
    $('.brunch_weekly_content').removeClass('active')
    $('#' + $(this).attr('data-alt')).addClass('active')
  })
  $('.brunch_weekly_sort_tab').click(function(){
    $(this).addClass('active')
    $(this).siblings('.brunch_weekly_sort_tab').removeClass('active')
    $('#' + $(this).attr('data-alt')).siblings('.brunch_weekly.sort_contents').removeClass('active')
    $('#' + $(this).attr('data-alt')).addClass('active')
  })
  $('.brunch_writer_tab').click(function(){
    $(this).addClass('active')
    $(this).siblings('.brunch_writer_tab').removeClass('active')
    $('.brunch_writer_content').removeClass('active')
    $('#' + $(this).attr('data-alt')).addClass('active')
  })
})