const shell = require("shelljs");
const theme = require("../themes/tokyo-night");
const {workspace} = require("../widget");

let output = " 1 2 3 4 5 6 7 8 9 ";

shell.exec('i3-msg -t get_workspaces', {silent: true}, function(code, stdout, stderr) {
  // console.log('Exit code:', code);
  // console.log('Program output:', stdout);
  // console.log('Program stderr:', stderr);

  const i3_workspaces = JSON.parse(stdout);
  // console.log(i3_workspaces);
  for(let i = 0; i < 9; i++) {
    current_workspace = i3_workspaces[i];

    if(current_workspace == null) {
      continue;
      // break;
    }
    if(current_workspace.focused == true) {
      console.log(`workspace ${current_workspace.num} is fucused`);
      output = output.replace(
        " " + current_workspace.num.toString() + " ",
        ` %{F${theme.color1}}${current_workspace.num}%{F} `
      );
      console.log(current_workspace.num.toString());
    } else {
      console.log(`workspace ${current_workspace.num} is visiable`);
      output = output.replace(
        " " + current_workspace.num.toString() + " ",
        ` %{F${theme.color5}}${current_workspace.num}%{F} `
      );
    }
    // console.log(`workspace ${current_workspace.num} is visiable`);
  }
  console.log(`%{c} ${output} %{c}`);
});

