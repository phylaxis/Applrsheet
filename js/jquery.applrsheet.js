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
        width: window.innerWidth,
        height: window.innerHeight
    };

    var width = viewport.width;
    var height = viewport.height;

    var sheetstyle = {
      "position":"absolute",
      "top":0,
      "left": 0,
      "right":0,
      "bottom":0,
      "display":"block",
      "padding":0,
      "margin":0,
      "overflow-y":"scroll"
    };

    var substyle = {
      "position":"absolute",
      "top":0,
      "left": width,
      "display":"block",
      "padding":0,
      "margin":0,
      "width":width,
      "height":"100%",
      "overflow-y":"scroll",
      "border": "1px solid green"
    };

    var sheetID = sheetAttrs.id;
    var sheet = '#' + sheetID;
    var outerID = "apls-" + sheetID + "-outer";
    var outer = '#'+ outerID;
    var innerID = "apls-" + sheetID + "-inner";
    var inner = '#'+ innerID;
    var subID = subAttrs.id;
    var subpanel = '#' + subID;

    sheetCSS = $.extend({}, sheetstyle, sheetCSS);
    subCSS = $.extend({}, substyle, subCSS);
    
    var closebtn = sheetAttrs['closebtn'];
    var subbtn = subAttrs.subbtn;
    var backbtn = subAttrs.backbtn;

    $('<div id="' + outerID + '"><div id="' + innerID + '"><div id="' + sheetID + '"><div id="apls-content-1"></div></div><div id="' + subID + '"><div id="apls-content-2"></div></div></div></div>').appendTo('body');

    $(outer).css({
      "position":"fixed",
      "top":"0",
      "left":"0",
      "bottom":"0",
      "right":"0",
      "display":"none",
      "overflow-y":"scroll",
      "overflow-x":"hidden"
    });

    $(inner).css({
      "position": "relative",
      "top":"0",
      "left":"0",
      "display":"block",
      "width": width*2,
      "height":height,
      "overflow":"hidden"
    });

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
        $(sheet + ' #apls-content-1').html(html);
        $(sheet).show();
        $(outer).show(0,function(){
          $(inner).show("slide", { direction: "down" }, settings.transition);
        });
        

        //Open subpanel click handler
        $('.' + subbtn).click(function() {
          $.ajax({
            url: subAttrs.ajax.url,
            cache: false
          }).done(function( html ) {
            $(subpanel + ' #apls-content-2').html(html);
            $(inner).animate({"left": "-=" + width + "px"});

            //add back
            $('.' + backbtn).click(function(){
                $(inner).animate({"left": 0});
                $('#apls-content-2').html('');
            });
          });
        });

        //add close
        $('.' + closebtn).click(function(){
          $(inner).hide("slide", { direction: "down" }, settings.transition, function () {
            $('#apls-content-2').html('');
            $(outer).hide();

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
    "sheetCSS": { "color": "#556B2F", "background-color": "black","float":"left"},
    "subAttrs" : {"id": "subview","subbtn":"open-btn", "backbtn":"back-btn", "ajax":{"url":"subsheet1.html"}},
    "subCSS": {"background-color":"#ededed","color":"#333","float":"left"},
    "transition":"slow",
    "onStart":false,
    "onFinish":false
  };

  $.fn.applrsheet.loadSub = function( options ) {
    //setup defauts

    if(typeof options === 'undefined')
    {
      return false;
    }

    var ID = options.id;
    var url = options.url;

    alert('loading subview ' + ID);

    $.ajax({
      url: options.url,
      cache: false
    }).done(function( html ) {
      $(ID + ' #apls-content-2').html(html);
    });
  };

}( jQuery ));