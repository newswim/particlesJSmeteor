Meteor.startup(function() {
  console.log(JSON.parse(Assets.getText('particles.json')));
});


if (Meteor.isClient) {

  /// This is the original API
  // Now, we keep setting in particles.json


  // Meteor.startup(function () {
  //   particlesJS('particles-js', {
  //     particles: {
  //       color: '#FFF',
  //       color_random: false,
  //       shape: 'triangle', // "circle", "edge" or "triangle"
  //       opacity: {
  //         opacity: .8,
  //         anim: {
  //           enable: true,
  //           speed: 1.5,
  //           opacity_min: 0,
  //           sync: false
  //         }
  //       },
  //       size: 4,
  //       size_random: true,
  //       nb: 150,
  //       line_linked: {
  //         enable_auto: true,
  //         distance: 100,
  //         color: '#fff',
  //         opacity: 1,
  //         width: 1,
  //         condensed_mode: {
  //           enable: false,
  //           rotateX: 600,
  //           rotateY: 600
  //         }
  //       },
  //       anim: {
  //         enable: true,
  //         speed: 1
  //       }
  //     },
  //     interactivity: {
  //       enable: true,
  //       mouse: {
  //         distance: 500
  //       },
  //       detect_on: 'canvas', // "canvas" or "window"
  //       mode: 'grab', // "grab" of false
  //       line_linked: {
  //         opacity: .5
  //       },
  //       events: {
  //         onclick: {
  //           enable: true,
  //           mode: 'push', // "push" or "remove"
  //           nb: 4
  //         },
  //         onresize: {
  //           enable: true,
  //           mode: 'out', // "out" or "bounce"
  //           density_auto: false,
  //           density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
  //         }
  //       }
  //     },
  //     /* Retina Display Support */
  //     retina_detect: true
  //   });
  // });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
