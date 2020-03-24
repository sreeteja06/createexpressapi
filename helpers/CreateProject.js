const path = require('path');
const { promisify } = require('util');
const { ncp } = require('ncp');

const CopyDir = promisify(ncp);

const createProject = async (projectName) => {
  const templatePath = path.join(__dirname, 'template');
  const projectPath = path.join(process.cwd(), projectName);
  await CopyDir(templatePath, projectPath);
};

module.exports = { createProject };
