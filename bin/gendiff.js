#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
.version('1.0.0', '-V, --version', 'output the version number')
.description ('Compares two configuration files and shows a difference')
.argument ('<filepath1> <filepath2>')
.helpOption ('-h, --help', 'output usage information')
.option ( '-f, --format [type]',  'output format')
program.parse(process.argv);