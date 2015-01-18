$(function(){

  var contexts = {
    "giphy-1": "We have to construct an #exit from this disaster: #BringPeace under the #Constitution But also it has to be in the #Street #LeopoldoLopez #SOSVenezuela #Venezuela",
    "giphy-2": "I'll continue to show a little of the #homeland #lines #barquisimeto [city in Venezuela] #venezuela #SOSvenezuela #OutWithMaduro #change #ThisIsTheYear",
    "giphy-3": "Ok this video is from this morning in #farmato 54, I couldn't show the whole line because it was so long ",
    "giphy-4": "I didn't think Venezeuela would come to this --> ... it's very sad. #SOSVenezuela",
    "giphy-5": "There's no #filter that fixes #photos like these #SOSVenezuela #me #WeAreRedWine #HeWhoSleepsMissesOut ... ... ",
    "giphy-6": "Ok this video is from this morning in #farmato 54, I couldn't show the whole line because it was so long ",
    "giphy-7": "#16 in #Maracaibo #zulia #venezuela confrontation between the neighbors and the Military Guard #HeWhoSleepsMissesOut #students #resistance ",
    "giphy-8": "This happens every day in #Venezuela sadly you've got to stand in line and argue to stock up on necessities #SOSVenezuela",
    "giphy-9": "Damn the soldier that discharges his arms against the people. The police force of the dictatorship of #Venezuela is afraid of cameras #TheEndIsNear soon castro-communism will fall",

  }

  var view_pane = $('.view-pane');

  function makeVideos(){
    var timestamp = 20
    var rating = 60
    var videos = [];
    Array.apply(null, Array(25)).map(function() {
      if ((Math.random() > .8 && (rating > 330)) || ( rating > 1100)) {
        timestamp += 750;

        rating = 60;
        videos.push({timestamp: timestamp, rating: rating})
      }
      else {
        videos.push({timestamp: timestamp, rating: rating})
        rating += 270;
      }
    })
    return videos;
  }

  function drawIcon(video) {
    //vid = '<iframe class="embedly-embed" src="http://cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F18150336&src_secure=1&url=http%3A%2F%2Fvimeo.com%2F18150336&image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F117311910_1280.jpg&key=internal&type=text%2Fhtml&schema=vimeo" width="320" height="180" scrolling="no" frameborder="0" allowfullscreen></iframe>'
    var randomGif = "giphy-" + (Math.floor(Math.random()*6) + 1)
    vid = '<div class="vid-container" style=""><span class="glyphicon glyphicon-play-circle"></span><div class="meta-data">'+contexts[randomGif]+'</div></div>'
    return "<div class='vid' style='background-image: url(\"../images/"+randomGif+".gif\"); background-size:100%; margin-left:" + video.timestamp + "px; margin-top:"+ video.rating +"px;'>" + vid +"</div>" 
  }

  function drawIcons(videos) {
    videos.map(function(video){
      view_pain.append(drawIcon(video)); 
    });
  }
  var videos = makeVideos();
  drawIcons(videos);

})