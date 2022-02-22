$(document).ready(function () {

    var delayInMilliseconds = 500; //.5 seconds

    setTimeout(function () {
        //your code to be executed after .5 seconds

        $(function () {
            $("small.showBtn").click(function () { //show or hide examples
                if ($(this).next().css('display') == 'none') {
                    $('span', this).replaceWith("<span>hide examples</span>");
                }
                else { $('span', this).replaceWith("<span>view examples</span>"); }
                $(this).next().toggle("200");
            });

            document.documentElement.className += //detect touch screen
                (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');

            $(".examples figcaption").click(function () {
                var myVar = $(this).parent().parent();
                myVar.toggleClass("box");
                myVar.siblings().removeClass("box");
            });
            $(".examples figure .fa").click(function () {
                var myVar = $(this).parent().parent();
                myVar.toggleClass("box");
                myVar.siblings().removeClass("box");
            });
        });
    }, delayInMilliseconds);

});

