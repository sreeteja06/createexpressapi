#!/usr/bin/env node

/* eslint-disable no-shadow */
const yargs = require('yargs');
const chalk = require('chalk');
const { createProject } = require('./helpers/CreateProject');

// eslint-disable-next-line no-var
var { argv } = yargs
  .usage('usage: createexpressapi <command> [options]')
  .command('create', 'create a new project', (yargs) => {
    argv = yargs
      .usage('usage: createexpressapi create [options]')
      .command('project', 'create a new project', () => {
        console.log('creating project :)');
      })
      .option('n', {
        alias: 'name',
        describe: 'create project name',
        type: 'string',
        demandOption: true,
      })
      .help('help')
      .updateStrings({
        'Commands:': 'item:',
      })
      .wrap(null).argv;
  })
  // .command('list', 'list items in project', () => {
  //   console.log('listing items in project :)');
  // })
  .help('help')
  .wrap(null);

// eslint-disable-next-line no-shadow
function checkCommands(yargs, argv, numRequired) {
  if (argv._.length < numRequired) {
    yargs.showHelp();
  } else if (argv._.includes('create')) {
    createProject(argv.n);
  }
}

checkCommands(yargs, argv, 1);
