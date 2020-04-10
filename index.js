#!/usr/bin/env node
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-shadow */

const yargs = require('yargs');
const chalk = require('chalk');
const { createProject } = require('./helpers/CreateProject');

var { argv } = yargs
  .usage('usage: createexpressapi <command> [options]')
  .command('create', 'create a new project', (yargs) => {
    argv = yargs
      .usage('usage: createexpressapi create [options]')
      .command('project', 'create a new project', (yargs) => {
        if (argv.n && /^[a-zA-Z0-9 ]+$/i.test(argv.n)) {
          console.log(chalk.hex('#02d48a').bold('creating project ....'));
          // console.log(yargs.argv);
          createProject(argv.n);
          console.log(chalk.yellowBright.bold('project created :)'));
        } else {
          console.log(chalk.red('name is not valid, can contain only alpha numeric with space'));
        }
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
  .help('help')
  .wrap(null);
