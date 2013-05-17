(function ( $ ) {
  //intialize
  $.fn.applrsheet = function( options ) {
 
    // This is the easiest way to have default options.
    var sheetAttrs = $.extend({},$.fn.applrsheet.defaults.sheetAttrs,options.sheetAttrs);
    var subAttrs = $.extend({},$.fn.applrsheet.defaults.subAttrs,options.subAttrs);
    var sheetCSS = $.extend({},$.fn.applrsheet.defaults.sheetCSS,options.sheetCSS);
    var subCSS  = $.extend({},$.fn.applrsheet.defaults.subCSS,options.subCSS);
    var settings = $.extend({}, $.fn.applrsheet.defaults, options);

    var viewport = {
        width : $(window).width(),
        height : $(window).height()
    };
    var width = viewport.width;
    var height = viewport.height;

    var sheetstyle = {
      "position":"absolute",
      "top":0,
      "left": 0,
      "display":"none",
      "height":"100%",
      "width":"100%",
      "padding":0,
      "margin":0
    };

    var substyle = {
      "position":"absolute",
      "top":0,
      "left": 0,
      "display":"none",
      "padding":0,
      "margin":0,
      "width":"100%",
      "height":"auto"
    };

    var sheetID = sheetAttrs.id;
    var sheet = '#' + sheetID;
    var subID = subAttrs.id;
    var subpanel = '#' + subID;

    sheetCSS = $.extend({}, sheetstyle, sheetCSS);
    subCSS = $.extend({}, substyle, subCSS);
    
    var closebtn = sheetAttrs['closebtn'];
    var subbtn = subAttrs.subbtn;
    var backbtn = subAttrs.backbtn;

    $('<div id="' + sheetID + '"><div id="' + subID + '"></div></div>').appendTo('body');

    $(sheet).css(sheetCSS);
    $(subpanel).css(subCSS);

    this.click(function(){
      if(settings.onStart) {
        //callback for sheet load
        settings.onStart.call( this );
      }

      $.ajax({
        url: sheetAttrs.ajax.url,
        cache: false
      }).done(function( html ) {
        $(sheet).append(html);
        $(sheet).show("slide", { direction: "down" }, settings.transition);

        //Open subpanel click handler
        $('.' + subbtn).click(function() {
          $.ajax({
            url: subAttrs.ajax.url,
            cache: false
          }).done(function( html ) {
            $(subpanel).width(width).append(html);
            $(subpanel).show("slide", { direction: "right" }, settings.transition);

            //add back
            $('.' + backbtn).click(function(){
                $(subpanel).hide("slide", { direction: "right" }, settings.transition, function () {
                  $(this).html('');
                });
            });
          });
        });

        //add close
        $('.' + closebtn).click(function(){
            $(sheet).hide("slide", { direction: "down" }, settings.transition, function () {
              $(this).html('');

              //Call back when animation is done
              if(settings.onFinish) {
                //callback for sheet close
                settings.onFinish.call( this );
              }
            });
        });
      });
    });

    return this;
  };

  $.fn.applrsheet.defaults = {
    "sheetAttrs" : {"id":"sheet","closebtn":"close-btn","ajax":{"url":"index.php"}},
    "sheetCSS": { "color": "#556B2F", "background-color": "black"},
    "subAttrs" : {"id": "subview","subbtn":"open-btn", "backbtn":"back-btn", "ajax":{"url":"subsheet1.html"}},
    "subCSS": {"background-color":"#ededed","color":"#333"},
    "transition":"fast",
    "onStart":false,
    "onFinish":false
  };

}( jQuery ));