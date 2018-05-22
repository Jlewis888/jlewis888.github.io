$(document).ready(function() {
    // noinspection JSAnnotator
    const modalInfo = {
        devsLinked: {
            title: 'DevsLinked',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://intense-citadel-14261.herokuapp.com/',
            image: [
                '../img/devslinked-min.png',
                '../img/devsLinked2-min.png',
                '../img/devsLinked3-min.png'
            ]
        },
        yelp: {
            title: 'YelpCamp',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://infinite-depths-49863.herokuapp.com/',
            image: [
                '../img/yelpcamp-min.png',
                '../img/yelpcamp2-min.png',
                '../img/yelpcamp3-min.png'
            ]
        },
        robo: {
            title: 'RoboFriends',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://hidden-journey-32256.herokuapp.com/',
            image: [
                '../img/robofriends-min.png',
                '../img/robofriends2-min.png',
                '../img/robofriends3-min.png',
            ]
        },
        smartBrain: {
            title: 'Smart Brain: Face Detection',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://calm-gorge-83225.herokuapp.com/',
            image: [
                '../img/smartBrain-min.png',
                '../img/smartBrain2-min.png',
                '../img/smartBrain3-min.png',
            ]
        },
        socialLap: {
            title: 'Social Lap',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://warm-plains-68563.herokuapp.com/',
            image: [
                '../img/socialLap-min.png',
                '../img/socialLap2-min.png',
                '../img/socialLap3-min.png'
            ]
        },
        bizLight: {
            title: 'BizLight',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            link: 'https://immense-bayou-24064.herokuapp.com',
            image: [
                './img/bizLight-min.png',
                './img/bizLight2-min.png',
                './img/bizLight3-min.png',
            ]
        }

    }

    $('#portfolio button').on('click', function(){
        addModalInfo(this.id);
    });

    function addModalInfo(id) {
        $('#modal .title').text(modalInfo[id].title);
        $('#modal .info').text(modalInfo[id].info);
        $('#modal .modal-footer a').attr("href", modalInfo[id].link);
        $('#modal .image1 img').attr("src", modalInfo[id].image[0]);
        $('#modal .image2 img').attr("src", modalInfo[id].image[1]);
        $('#modal .image3 img').attr("src", modalInfo[id].image[2]);

    }
});

