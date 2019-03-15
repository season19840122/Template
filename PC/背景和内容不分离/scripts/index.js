;(function($) {
  var rendor = function(template, obj, $rendor){
    var source = $("#" + template).html();
    var template = Handlebars.compile(source);
    var context = obj;
    var html = template(context);
    // console.log(context)
    $rendor.html(html);
  }

  Handlebars.registerHelper('judge', function(index) {
    var index = index + 1;
    // console.log(index)；
    if(index%3 === 0 && index !== 0) return false
    return true
  });

  var app = {
    init: function() {
      rendor('syTemplate', data, $('.sy'));
      rendor('dyTemplate', data, $('.dy'));
      rendor('yyTemplate', data, $('.yy'));
      rendor('h5Template', data, $('.h5'));

      $('body').on('click', '.nav-wrap li', function () {
        $(this).addClass('actived').siblings().removeClass('actived');
        var bgClass = $(this).data('bg');
        $('#main').attr('class', bgClass);
        var index = $(this).index();
        $('.cont-wrap div').eq(index).show().siblings().hide();
      });
    }
  }
  
  app.init();
})(jQuery)