const options = {
    backgroundMode: {
      enable: false,
      zIndex: -1,
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {enable: true, mode: "repulse"},
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 50, duration: 4 },
      },
    },
    particles: {
      color: { value: "#fff" },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        direction: "bottom-right",
        enable: true,
        outMode: "out",
        random: true,
        size: true,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 8 }, value: 1 },
      opacity: {
        random: true,
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 4,
      },
    },
    detectRetina: true,
  }

export default options;