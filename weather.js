#!usr/bin/env node

import { getArgs } from './helpers/getArgs.js';
import { printHelp } from './services/log.services.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.s) {
  }
  if (args.h) {
    printHelp();
  }
  if (args.t) {
  }
};

initCLI();
