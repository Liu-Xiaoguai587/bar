const color = require("./themes/tokyo-night");
// const path = require("node:path");

const widgets = {
  workspace: {
    color: {
      // foreground: color.foreground,
      foreground: color.color0,
      background: color.background
    },
    action: {
      lclick: null,
      mclick: null,
      rclick: null
    },
    position: "left",
    // command: "echo \"1 2 3 4 5 6 7 8 9\"",
    command: `node ${__dirname}/widgets/workspaces`,
    len : 16,
    interval : 0.1,
    inner_gap : 0,
    // align: "center"
  },

  memory: {
    color: {
      foreground: color.color6,
      background: color.background
    },
    action: {
      // kitty basg -c \"htop; exit\"
      lclick: "kitty bash -c \\\"htop -s PERCENT_MEM; exit\\\"",
      mclick: null,
      rclick: null
    },
    position: "left",
    command: `bash ${__dirname}/widgets/memory.sh`,
    len : 12,
    interval : 3,
    inner_gap : 1,
    align: "center"
  },

  cpu: {
    color: {
      foreground: color.color5,
      background: color.background
    },
    action: {
      lclick: "kitty bash -c \\\"htop -s PERCENT_CPU; exit\\\"",
      mclick: null,
      rclick: null
    },
    position: "left",
    command: `mpstat 1 1 | awk '/all/ {print " "100-$12"%"}' | tail -n 1`,
    len : 9,
    interval : 2,
    inner_gap : 1,
    align: "center"
  },

  wifi: {
    color: {
      foreground: color.color6,
      background: color.background
    },
    action: {
      lclick: "kitty bash -c \\\"nmtui; exit\\\"",
      mclick: null,
      rclick: null
    },
    position: "left",
    command: `bash ${__dirname}/widgets/net.sh`,
    len : 8,
    interval : 2,
    inner_gap : 1,
    align: "center"
  },

  battery: {
    color: {
      foreground: color.color5,
      background: color.background
    },
    action: {
      lclick: null,
      mclick: null,
      rclick: null
    },
    position: "right",
    command: `bash ${__dirname}/widgets/battery.sh`,
    len : 6,
    interval : 60,
    inner_gap : 1,
    align: "center"
  },

  time : {
    color: {
      foreground: color.color6,
      background: color.background
    },
    action: {
      lclick: null,
      mclick: null,
      rclick: null
    },
    position: "right",
    command: "echo \" $(date \"+%H:%M\")\"",
    len : 8,
    interval : 10,
    inner_gap : 1,
    align: "center"
  },

  date : {
    color: {
      foreground: color.color5,
      background: color.background
    },
    action: {
      lclick: null,
      mclick: null,
      rclick: null
    },
    position: "right",
    command: "echo \" $(date \"+%m.%d %a\")\"",
    len : 11,
    interval : 3600,
    inner_gap : 1,
    align: "center"
  },

  brightness: {
    color: {
      foreground: color.color6,
      background: color.background
    },
    action: {
      scroll_up: `bash ${__dirname}/widgets/set_brightness.sh -50`,
      scroll_down: `bash ${__dirname}/widgets/set_brightness.sh 50`
    },
    position: "right",
    command: `bash ${__dirname}/widgets/brightness.sh`,
    len : 6,
    interval : 0.1,
    inner_gap : 1,
    align: "center"
  },

  keyboard: {
    color: {
      foreground: color.color5,
      background: color.background
    },
    action: {
      scroll_up: "eve-keyboard-brightness.sh -5",
      scroll_down: "eve-keyboard-brightness.sh +5",
    },
    position: "right",
    command: `eve-keyboard-brightness.sh +0 | awk '{print " "$5}'`,
    len : 6,
    interval : 0.1,
    inner_gap : 1,
    align: "center"
  }

};

module.exports = widgets;
