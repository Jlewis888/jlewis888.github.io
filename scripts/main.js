// Add a smooth scrolling effect to all links
$(document).ready(function () {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top -50
            }, 800)
        }
    });

    // Stops the modals automatic sliding function
    $('.carousel').carousel ({
        interval: false
    });

    // Toggles between a solid navbar and a transparent navbar background.
    $(document).scroll(function () {
        $(".navbar").toggleClass('bg-dark', $(this).scrollTop() > $('#about').offset().top - 100);
    });

    // Ensures that navbar has a solid background if page resets and view is not on landing page
    if ($(this).scrollTop() > $('#about').offset().top - 100) {
        $(".navbar").addClass('bg-dark');
    }


    $('#contactForm').submit(function(event) {
        const name = getInputVal('#name');
        const email = getInputVal('#email');
        const phone = getInputVal('#phone');
        const message = getInputVal('#message');

        // If any of the form inputs are empty on submit, error alert is displayed
        if(!name || !email || !phone || !message) {
            event.preventDefault();
            $('.alert-danger').css('display','block');
            $('.alert-success').css('display','none');
        } else {
            // If form is successful, user message is sent email and a successful alert is displayed
            $.ajax({
                url: "https://formspree.io/xwbpnovm",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            event.preventDefault();
            $('.alert-danger').css('display','none');
            $('.alert-success').css('display','block');
            $(this).get(0).reset();
        }
    });

    // helper function for contact form input
    function getInputVal(id) {
        return $(id).val();
    }

    // Animation trigger function
    function animationTrigger(items, elemTrigger) {
        let offset = $(window).height();
        items.each( function() {
            let elem = $(this);
            let animationClass = elem.attr('data-animation');
            let animationDelay = elem.attr('data-delay');

            elem.css({
                '-webkit-animation-delay':  animationDelay,
                '-moz-animation-delay':     animationDelay,
                'animation-delay':          animationDelay
            });

            const trigger = (elemTrigger) ? trigger : elem;

            //
            trigger.waypoint(function() {
                elem.addClass('animated').addClass(animationClass);
            },{
                triggerOnce: true,
                offset: offset
            });
        });
    }

    animationTrigger($('.waypoint'))
});

