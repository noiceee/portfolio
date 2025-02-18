const options = {
    backgroundMode: {
      enable: false,
      zIndex: -1,
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      // events: {
      //   onHover: {enable: true, mode: "remove"},
      //   resize: true,
      // },
      // modes: {
      //   grab: { distance: 900, line_linked: { opacity: 0.5 } },
      //   push: { particles_nb: 4 },
      //   remove: { particles_nb: 2 },
      //   repulse: { distance: 200, duration: 4 },
      // },
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 }
      }
    },
    // particles: {
    //   color: { value: "#fff" },
    //   links: {
    //     color: "#ffffff",
    //     distance: 120,
    //     enable: true,
    //     opacity: 0.5,
    //     width: 1,
    //   },
    //   move: {
    //     attract: { enable: false, rotateX: 600, rotateY: 1200 },
    //     direction: "bottom-right",
    //     enable: true,
    //     outMode: "out",
    //     random: true,
    //     size: true,
    //     speed: 5,
    //     straight: false,
    //   },
    //   number: { density: { enable: true, area: 8 }, value: 1 },
    //   opacity: {
    //     random: true,
    //     value: 0.5,
    //   },
    //   shape: {
    //     type: "circle",
    //   },
    //   size: {
    //     random: true,
    //     value: 4,
    //   },
    // },
    // detectRetina: true,
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 40 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  }

export default options;