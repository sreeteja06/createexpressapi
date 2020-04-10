const path = require('path');
const { promisify } = require('util');
const { ncp } = require('ncp');
const { exec } = require('child_process');

const CopyDir = promisify(ncp);

const createProject = async (projectName) => {
  const templatePath = path.join(__dirname, 'template', 'js');
  const projectPath = path.join(process.cwd(), projectName);
  console.log(projectPath);
  await CopyDir(templatePath, projectPath);
  exec(`git -C ${projectPath} init`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      process.exit();
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      process.exit();
    }
    console.log(`stdout: ${stdout}`);
    exec(`git -C ${projectPath}  add .`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        process.exit();
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        process.exit();
      }
      console.log(`stdout: ${stdout}`);
      exec(
        `git -C ${projectPath}  commit -m "js expressapi boilerplate"`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            process.exit();
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            process.exit();
          }
          console.log(`stdout: ${stdout}`);
        }
      );
    });
  });
};

module.exports = { createProject };
