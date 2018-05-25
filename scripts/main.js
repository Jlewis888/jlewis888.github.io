// Add a smooth scrolling effect to all links
$(document).ready(() => {
    $('a').on('click', function(event) {
        if (this.hash !== '''') {
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

    $(document).scroll( () => {
        // Toggles between a solid navbar and a transparent navbar background.

        $('.navbar').toggleClass('bg-dark', $(this).scrollTop() > $('#about').offset().top - 100);

        if ($(this).scrollTop() > 70) {
            $('.backToTop').css('display', 'block')
        } else {
            $('.backToTop').css('display', 'none')
        }
    });

    // Ensures that navbar has a solid background if page resets and view is not on landing page
    if ($(this).scrollTop() > $('#about').offset().top - 100) {
        $('.navbar').addClass('bg-dark');
    }

    const config = {
        apiKey: 'AIzaSyBaC5POZGjyqMuTX85OkLUYTN_PYRpf4yU',
        authDomain: 'dancor-b9f3a.firebaseapp.com',
        databaseURL: 'https://dancor-b9f3a.firebaseio.com',
        projectId: 'dancor-b9f3a',
        storageBucket: 'dancor-b9f3a.appspot.com',
        messagingSenderId: '684078015209'
    };
    firebase.initializeApp(config);

    // Reference message collections
    const messagesRef = firebase.database().ref('messages');


    $('#contactForm').submit((event) => {
        const name = getInputVal('#name');
        const email = getInputVal('#email');
        const phone = getInputVal('#phone');
        const message = getInputVal('#message');

        // If any of the form inputs are empty on submit, error alert is displayed
        if(!name || !email || !phone || !message) {
            event.preventDefault();
            $('.alert-danger').css('display','block');
            setTimeout(() => {
                $('.alert-danger').css('display','none');
            }, 5000);
        } else {
            // If form is successful, user message is sent email and a successful alert is displayed
            $.ajax({
                url: 'https://formspree.io/xlngdlyx',
                method: 'POST',
                data: $(this).serialize(),
                dataType: 'json'
            });
            saveMessage(name, email, phone, message)
            event.preventDefault();
            $('.alert-success').css('display', 'block');
            setTimeout(() => {
                $('.alert-success').css('display', 'none');
            }, 5000);
            $(this).get(0).reset();
        }
    });

    // helper function for contact form input
    function getInputVal(id) {
        return $(id).val();
    }

    function saveMessage(name, email, phone, message) {
        let newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            phone: phone,
            message: message
        });
    }

    // Animation trigger function
    function animationTrigger(items, elemTrigger) {
        let offset = $(window).height();
        items.each( () => {
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
            trigger.waypoint(() => {
                elem.addClass('animated').addClass(animationClass);
            },{
                triggerOnce: true,
                offset: offset
            });
        });
    }

    animationTrigger($('.waypoint'))
});

