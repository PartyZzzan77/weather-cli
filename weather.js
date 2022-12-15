#!usr/bin/env node
import { getForecast } from './helpers/getForecast.js';
import { getArgs } from './helpers/getArgs.js';
import { setToken } from './helpers/setToken.js';
import { printHelp } from './services/log.services.js';
import { setCity } from './helpers/setCity.js';
import { getKeyValue } from './services/storage.services.js';

const city = process.env.CITY ?? (await getKeyValue('city'));

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.s) {
    return await setCity(args.s);
  }
  if (args.h) {
    return printHelp();
  }
  if (args.t) {
    return await setToken(args.t);
  }

  return getForecast(city);
};

initCLI();
