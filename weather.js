#!usr/bin/env node

import { getArgs } from './helpers/getArgs.js';
import { setToken } from './helpers/setToken.js';

import { printHelp } from './services/log.services.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.s) {
  }
  if (args.h) {
    printHelp();
  }
  if (args.t) {
    setToken(args.t);
  }
};

initCLI();
