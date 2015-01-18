function getTime(value) {
  return value
}

function calcInertia(currentStep, decrement) {
  var currentTime = new Date().getTime();
  var delta = currentTime - lastChange;
  var inertia = ((delta * delta)/4000000) * decrement
  lastChange = new Date().getTime();
  step =  Math.max(currentStep - (inertia), .8)
  return step;
}

var slider = $("#slider")

slider.bind('keypress', function(e) {
  if (e.which == 32){//space bar
            e.preventDefault();

    paused = !paused;
      if (!paused) {
    interval = window.setInterval(function() {
        value = slider.slider("option", "value")
              var time = getTime(value)
      view_pain.css('margin-left',-(10*time))
         slider.slider('option', 'step', 1)
        slider.slider("option", "value", value + .1) 
    },1)
      }
      else {window.clearInterval(interval);}
  }
});

var step = 1;
var view_pain = $(".view-pane")
var decrement = 1
var lastChange = new Date().getTime();
var paused = true;
window.setInterval(function(){ 
  decrement = Math.max(decrement + 1, 1)
  calcInertia(step,decrement)
},1)
slider.slider({
  max: 1000,
  step: step,
  animate: 100,
  slide: function( event, ui) {
    if (paused)
    {
      decrement = Math.min(decrement - 1,0)
      var currentStep = Math.min(1.04 * step,20.1);
      step = calcInertia(currentStep,decrement);
      var time = getTime(ui.value)
      view_pain.css('margin-left',-time)
      slider.slider('option', 'step', step)
    }
  }
});

$(function(){
  $('.vid-container').mouseover(function(){
        $(this).fadeTo(100,.8)
  });
    $('.vid-container').mouseout(function(){
        $(this).fadeTo(100,.2)
  })
  $('.vid-container').click(function(){
    window.location = "video.html"
  })
})