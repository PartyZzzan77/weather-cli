import axios from 'axios';
import { getKeyValue } from './storage.services.js';

export const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKeyValue('token'));
  console.log(token);
  if (!token) {
    throw new Error(`Token not transferred, -t [API_KEY] to save token`);
  }

  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: { q: city, appid: token, units: 'metric', lang: 'ru' },
    }
  );

  return data;
};
