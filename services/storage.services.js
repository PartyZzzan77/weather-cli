import { join } from 'path';
import { promises } from 'fs';

const file = join(process.cwd(), 'weather.json');

export const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch {
    return false;
  }
};

export const saveKeyValue = async (token) => {
  let data = {};

  if (await isExist(file)) {
    const result = await promises.readFile(file);
    data = JSON.parse(result);
  }

  data.token = token;

  await promises.writeFile(file, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
  if (await isExist(file)) {
    const data = JSON.parse(await promises.readFile(file, 'utf-8'));

    return data[key];
  }

  return undefined;
};
