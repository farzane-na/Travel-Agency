// This file is for setting and customizing the calendar
let option1 = {
    placeholder: "تاریخ رفت",
    twodigit: false,
    closeAfterSelect: true,
    nextButtonIcon: "images/timeir_next.png",
    previousButtonIcon: "images/timeir_prev.png",
    forceFarsiDigits: true,
    markToday: true,
    markHolidays: true,
    highlightSelectedDay: true,
    sync: false,
    gotoToday: true
};
kamaDatepicker('calender1', option1);
let option2 = {
    placeholder: "تاریخ برگشت",
    twodigit: false,
    closeAfterSelect: true,
    nextButtonIcon: "images/timeir_next.png",
    previousButtonIcon: "images/timeir_prev.png",
    forceFarsiDigits: true,
    markToday: true,
    markHolidays: true,
    highlightSelectedDay: true,
    sync: false,
    gotoToday: true
};
kamaDatepicker('calender2', option2);



// This file is for setting and customizing the Number of passengers

(function ($) {

    $.fn.number = function (customOptions) {

        var options = {

            'containerClass': 'number-style',
            'minus': 'number-minus',
            'plus': 'number-plus',
            'containerTag': 'div',
            'btnTag': 'span'

        };

        options = $.extend(true, options, customOptions);

        var input = this;

        input.wrap('<' + options.containerTag + ' class="' + options.containerClass + '">');

        var wrapper = input.parent();

        wrapper.prepend('<' + options.btnTag + ' class="' + options.minus + '"></' + options.btnTag + '>');

        var minus = wrapper.find('.' + options.minus);

        wrapper.append('<' + options.btnTag + ' class="' + options.plus + '"></' + options.btnTag + '>');

        var plus = wrapper.find('.' + options.plus);

        var min = input.attr('min');

        var max = input.attr('max');

        if (input.attr('step')) {

            var step = +input.attr('step');

        } else {

            var step = 1;

        }

        if (+input.val() <= +min) {

            minus.addClass('disabled');

        }

        if (+input.val() >= +max) {

            plus.addClass('disabled');

        }

        minus.click(function () {

            var input = $(this).parent().find('input');

            var value = input.val();

            if (+value > +min) {

                input.val(+value - step);

                if (+input.val() === +min) {

                    input.prev('.' + options.minus).addClass('disabled');

                }

                if (input.next('.' + options.plus).hasClass('disabled')) {

                    input.next('.' + options.plus).removeClass('disabled')

                }

            } else if (!min) {

                input.val(+value - step);

            }

        });

        plus.click(function () {

            var input = $(this).parent().find('input');

            var value = input.val();

            if (+value < +max) {

                input.val(+value + step);

                if (+input.val() === +max) {

                    input.next('.' + options.plus).addClass('disabled');

                }

                if (input.prev('.' + options.minus).hasClass('disabled')) {

                    input.prev('.' + options.minus).removeClass('disabled')

                }

            } else if (!max) {

                input.val(+value + step);

            }

        });

    };

})(jQuery);


$('input').each(function () {

    $(this).number();

});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();