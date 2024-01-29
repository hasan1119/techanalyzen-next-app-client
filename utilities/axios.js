import axios from 'axios';

// const jsonString = JSON.stringify(device);
const axiosClient = axios.create({
  baseURL: `/api`,
});

axiosClient.interceptors.request.use(async (config) => {
  const deviceInfo = {
    ip: '103.218.25.177',
    city: 'Dhaka',
    isp: 'Systems Solutions & development Technologies Limited',
    country: 'Bangladesh',
    countryIso: 'BD',
    postalCode: '1212',
    subdivisionIso: '13',
    timeZone: 'Asia/Dhaka',
    cityGeonameId: 1185241,
    countryGeonameId: 1210997,
    subdivisionGeonameId: 1337178,
    ispId: 63526,
    latitude: 23.7908,
    longitude: 90.4109,
    fingerprint:
      'd83a97d8288f48551f8eb6b58f97ad4f11160f9c2a520d22d7599d0a37519b57',
    session: '491e4f1481b4999c949bf03946673bbc74f6269c9d927148a727051da47eea65',
    fraud: 0.024,
    tor: false,
  };
  const device =
    JSON.stringify(deviceInfo) ||
    (await (await fetch('https://hutils.loxal.net/whois')).json());

  const jsonString = JSON.stringify(device);
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    device: jsonString,
  };
  return config;
});

export default axiosClient;
