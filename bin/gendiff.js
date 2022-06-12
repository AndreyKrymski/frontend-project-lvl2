#!/usr/bin/env node

import { Command, Option } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();
program
  .version('2.4.3', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .addOption(new Option('-f, --format [type]', 'output format').choices(['stylish', 'plain', 'json']).default('stylish'))
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });
program.parse();
