#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';
const program = new Command();

program
.version('1.0.0', '-V, --version', 'output the version number')
.description ('Compares two configuration files and shows a difference')
.arguments('<filepath1> <filepath2>')
.action((filepath1, filepath2) => 
    gendiff (filepath1, filepath2))
.helpOption ('-h, --help', 'output usage information')
.option ( '-f, --format [type]', 'output format')
program.parse(process.argv);