import React, {
  createContext,
  useEffect,
  useRef
} from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const deviceRef = useRef(null);

  useEffect(() => {
    const getDevice = async () => {
      try {
        const device = await (
          await fetch('https://hutils.loxal.net/whois')
        ).json();
        deviceRef.current = device;
      } catch (error) {
        console.log(error);
      }
    };

    getDevice();
  }, []);

  axiosClient.interceptors.request.use((config) => {
    const jsonString = JSON.stringify(deviceRef.current);
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      device: jsonString,
    };
    return config;
  });

  const data = {};

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppProvider;
