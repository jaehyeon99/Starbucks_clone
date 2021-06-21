
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'c7Tg5uNTmfg',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'c7Tg5uNTmfg'
        },
        evnets: {
            onReady: function (event) {
                event.target.mute() // 음소거
            }
        }

    });
}