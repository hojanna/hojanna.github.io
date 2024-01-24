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
    slideToShow:5,
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