$(document).ready(function() {
    // noinspection JSAnnotator
    const modalInfo = {
        devsLinked: {
            title: 'DevsLinked',
            info: 'DevsLinked is a social hub for developers, where they can link with other developers and discuss the latest technologies',
            link: 'https://intense-citadel-14261.herokuapp.com/',
            image: [
                '../img/devslinked.png',
                '../img/devsLinked2.png',
                '../img/devsLinked3.png'
            ]
        },
        yelp: {
            title: 'YelpCamp',
            info: 'Info goes here',
            link: 'https://infinite-depths-49863.herokuapp.com/',
            image: [
                '../img/yelpcamp.png',
                '../img/yelpcamp2.png',
                '../img/yelpcamp3.png'
            ]
        },
        robo: {
            title: 'RoboFriends',
            info: 'Info goes here',
            link: 'https://hidden-journey-32256.herokuapp.com/',
            image: [
                '../img/robofriends.png',
                '../img/robofriends2.png',
                '../img/robofriends3.png',
            ]
        },
        smartBrain: {
            title: 'Smart Brain: Face Detection',
            info: 'Info goes here',
            link: 'https://calm-gorge-83225.herokuapp.com/',
            image: [
                '../img/smartBrain.png',
                '../img/smartBrain2.png',
                '../img/smartBrain3.png',
            ]
        },
        socialLap: {
            title: 'Social Lap',
            info: 'Info goes here',
            link: 'https://warm-plains-68563.herokuapp.com/',
            image: [
                '../img/socialLap.png',
                '../img/socialLap2.png',
                '../img/socialLap3.png'
            ]
        },
        bizLight: {
            title: 'BizLight',
            info: 'Info goes here',
            link: 'https://immense-bayou-24064.herokuapp.com',
            image: [
                './img/bizLight.png',
                './img/bizLight2.png',
                './img/bizLight3.png',
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

