// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {    
    videoId: 'XfDw-CqYfHM',
    playerVars: { //영상을 재생하기 위한 변수들 이라는 뜻
      autoplay: true,
      loop: true,
      playlist: 'XfDw-CqYfHM', //반복 재생할 유튜브 영상 id 목록
      fs: 0
    },
    events: {
      onReady: function(event){
        event.target.mute() // 음소거
      }
    }
  });
}

