var topOffset = 170;

//dom ready functions
$(function(){
  insert_login()
  insert_top();
});

// activity data page scroll and fixed header function
var timer;
var fired = false;
$(window).scroll(function() {
    if  ($(window).scrollTop() >= 330 && fired === false || $(window).scrollLeft() ){
      var ht = $('#table-filter-1').width();
      $('#dummy-table').width(ht);
      $('#dummy-table').removeClass('hidden');
    }
    if ($(window).scrollLeft() ){
      $('#dummy-table').css('left', 320-$(window).scrollLeft() )
    }
    if  ($(window).scrollTop() <= 329){
      $('#dummy-table').addClass('hidden');
    }
});

$(window).resize(function() {
  var ht = $('#table-filter-1').width();
  $('#dummy-table').width(ht);
});

//switch on below for production code

// activity data page scroll and fixed header function
// $(window).scroll(function() {
//     if  ($(window).scrollTop() >= 330 || $(window).scrollLeft() ){
//         var ht = $('[id^=table-filter-]:first');
//         if (ht.length) {
//             $('#dummy-table').width(ht.width());
//             $('#dummy-table').removeClass('hidden');
//         }
//     }
//     if ($(window).scrollLeft()) {
//         var dummy = $('#dummy-table');
//         if (dummy.length) {
//             dummy.css('left', 320 - $(window).scrollLeft())
//         }
//     }
//     if ($(window).scrollTop() <= 329) {
//       var dummy = $('#dummy-table');
//       if (dummy.length) {
//           dummy.addClass('hidden');
//       }
//     }
// });

// $(window).resize(function() {
//     var ht = $('[id^=table-filter-]:first');
//     if (ht.length) {
//         $('#dummy-table').width(ht.width());
//     }
// });

function clear_saved_state() {
  console.log('clear');
}

function insert_login() {
  $('#insert-form').empty();
  $.get('../login.html', function(data) {
    $('#insert-form').html(data);
  });
}

function login() {
  $('#insert-form').empty();
  insert_left();
  $('.btn-group.nger').removeClass('hidden');
}

function hide_time_groups() {
  var trs = $('tr td.time-header').parent('tr').nextUntil('tr:has(.time-header)');
  $(trs).addClass('hidden');
}

function toggle_time_group() {
   var trs = $(this).parent('tr').nextUntil('tr:has(.time-header)');
   if ($(trs).hasClass('hidden')) {
    $(trs).removeClass('hidden');
   }
   else {
     $(trs).addClass('hidden');
   }
}

function insert_manage_facilities() {
  $('#insert-form').empty();
  $.get('../manage_facilities.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_manage_users() {
  $('#insert-form').empty();
  $.get('../manage_users.html', function(data) {
    $('#insert-form').html(data);
  });
}

function insert_report() {
  $('#insert-form').empty();
  $.get('../report.html', function(data) {
    $('#insert-form').html(data);
  });
}

// function toggle_all_facilities() {
//  $('#selectAll').click(function(e){
//     var table= $($(this).target).closest('table');
//     $('td input:checkbox',table).prop('checked',this.checked);
// });
// }

function nav_button_hover() {
  $(this).addClass('nav-hover');
}

function nav_button_leave() {
  $(this).removeClass('nav-hover');
}

/* Custom animation for a table row to slide up or down */
(function ($) {
  var sR = {
      defaults: {
          slideSpeed: 400,
          easing: false,
          callback: false
      },
      thisCallArgs: {
          slideSpeed: 400,
          easing: false,
          callback: false
      },
      methods: {
          up: function (arg1, arg2, arg3) {
              if (typeof arg1 == 'object') {
                for (p in arg1) {
                  sR.thisCallArgs.eval(p) = arg1[p];
                }
              } else if (typeof arg1 != 'undefined' && (typeof arg1 == 'number' || arg1 == 'slow' || arg1 == 'fast')) {
                sR.thisCallArgs.slideSpeed = arg1;
              } else {
                sR.thisCallArgs.slideSpeed = sR.defaults.slideSpeed;
              }
              if (typeof arg2 == 'string') {
                  sR.thisCallArgs.easing = arg2;
              } else if (typeof arg2 == 'function') {
                  sR.thisCallArgs.callback = arg2;
              } else if (typeof arg2 == 'undefined') {
                  sR.thisCallArgs.easing = sR.defaults.easing;
              }
              if (typeof arg3 == 'function') {
                  sR.thisCallArgs.callback = arg3;
              } else if (typeof arg3 == 'undefined' && typeof arg2 != 'function') {
                  sR.thisCallArgs.callback = sR.defaults.callback;
              }
              var $cells = $(this).find('td');
              $cells.wrapInner('<div class="slideRowUp" />');
              var currentPadding = $cells.css('padding');
              $cellContentWrappers = $(this).find('.slideRowUp');
              $cellContentWrappers.slideUp(sR.thisCallArgs.slideSpeed, sR.thisCallArgs.easing).parent().animate({
                  paddingTop: '0px',
                  paddingBottom: '0px'
              }, {
                  complete: function () {
                      $(this).children('.slideRowUp').replaceWith($(this).children('.slideRowUp').contents());
                      $(this).parent().css({ 'display': 'none' });
                      $(this).css({ 'padding': currentPadding });
                  }
              });
              var wait = setInterval(function () {
                  if ($cellContentWrappers.is(':animated') === false) {
                      clearInterval(wait);
                      if (typeof sR.thisCallArgs.callback == 'function') {
                          sR.thisCallArgs.callback.call(this);
                      }
                  }
              }, 100);
              return $(this);
          },
          down: function (arg1, arg2, arg3) {
              if (typeof arg1 == 'object') {
                  for (p in arg1) {
                      sR.thisCallArgs.eval(p) = arg1[p];
                  }
              } else if (typeof arg1 != 'undefined' && (typeof arg1 == 'number' || arg1 == 'slow' || arg1 == 'fast')) {
                  sR.thisCallArgs.slideSpeed = arg1;
              } else {
                  sR.thisCallArgs.slideSpeed = sR.defaults.slideSpeed;
              }
              if (typeof arg2 == 'string') {
                  sR.thisCallArgs.easing = arg2;
              } else if (typeof arg2 == 'function') {
                  sR.thisCallArgs.callback = arg2;
              } else if (typeof arg2 == 'undefined') {
                  sR.thisCallArgs.easing = sR.defaults.easing;
              }
              if (typeof arg3 == 'function') {
                  sR.thisCallArgs.callback = arg3;
              } else if (typeof arg3 == 'undefined' && typeof arg2 != 'function') {
                  sR.thisCallArgs.callback = sR.defaults.callback;
              }
              var $cells = $(this).find('td');
              $cells.wrapInner('<div class="slideRowDown" style="display:none;" />');
              $cellContentWrappers = $cells.find('.slideRowDown');
              $(this).show();
              $cellContentWrappers.slideDown(sR.thisCallArgs.slideSpeed, sR.thisCallArgs.easing, function () { $(this).replaceWith($(this).contents()); });
              var wait = setInterval(function () {
                if ($cellContentWrappers.is(':animated') === false) {
                  clearInterval(wait);
                  if (typeof sR.thisCallArgs.callback == 'function') {
                    sR.thisCallArgs.callback.call(this);
                  }
                }
              }, 100);
            return $(this);
          }
        }
    };
    $.fn.slideRow = function (method, arg1, arg2, arg3) {
      if (typeof method != 'undefined') {
        if (sR.methods[method]) {
          return sR.methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }
    };
})(jQuery);

function insert_left() {
  $('#insert-left').empty();
  $.get('left_bar.html', function(data) {
    $('#insert-left').html(data);
  });
}

function insert_top() {
  $.get('top_bar.html', function(data) {
    $('#insert-top').html(data);
  });
  $('#insert-top').trigger('create');
}

function check_all_in_table(e) {
  var table= $(e.target).closest('table');
  $('td input:checkbox',table).prop('checked',this.checked);
}