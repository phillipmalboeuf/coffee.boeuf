(function() {
  var App, Backbone, _;

  window.App = {
    Collections: {},
    Models: {},
    Views: {},
    Routers: {},
    init: function() {},
    scrollTo: function(to, duration) {
      var animateScroll, distance, from, runAnimation, stopAnimation, timelapsed;
      if (to == null) {
        to = 0;
      }
      if (duration == null) {
        duration = 500;
      }
      to = Math.floor(to);
      from = window.pageYOffset;
      timelapsed = 0;
      distance = to - from;
      stopAnimation = function() {
        var current;
        current = window.pageYOffset;
        if (current === to || ((window.innerHeight + current) >= document.body.scrollHeight)) {
          return clearInterval(runAnimation);
        }
      };
      animateScroll = function() {
        var percentage, position;
        timelapsed += 16;
        percentage = timelapsed / duration;
        percentage = percentage > 1 ? 1 : percentage;
        position = from + (distance * (percentage * (2 - percentage)));
        window.scrollTo(0, position);
        return stopAnimation();
      };
      return runAnimation = setInterval(animateScroll, 16);
    }
  };

  App = window.App;

  _ = window._;

  Backbone = window.Backbone;

  $(function() {
    return App.init();
  });

}).call(this);
