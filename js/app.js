'use struct';

$(document).ready(function () {
  $('#list').change(function () {
    if ($(this).val() === 'All Quotes') {
      $('.eachContainerQuote').show();
    } else {
      $('.eachContainerQuote').hide();
      $('.' + $(this).val()).show();
    }
  });

  $('.icon').click(function() {
    $('span').toggleClass('cancel');
    // $('.show+a, ul').css("propertyname","value");
  });

});
