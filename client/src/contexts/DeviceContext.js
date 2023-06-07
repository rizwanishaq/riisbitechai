import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { DeviceUUID } from "device-uuid";

export const DeviceContext = createContext();

const DeviceContextProvider = ({ children }) => {
  const [device_info, setDevice_Info] = useState({});
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const uuid = new DeviceUUID().get();
    const deviceInformation = new DeviceUUID().parse();

    const {
      browser,
      cpuCores,
      colorDepth,
      isDesktop,
      os,
      resolution,
      source,
      platform,
      version,
    } = deviceInformation;
    setDevice_Info({
      device_uid: uuid,
      browser,
      cpuCores,
      colorDepth,
      isDesktop,
      os,
      resolution,
      source,
      platform,
      version,
    });
  }, []);

  useEffect(() => {
    const send_device_information = async () => {
      const response = await axios.post(
        "https://100.100.100.52:5000/api/device",
        {
          device_info: device_info,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response_data = await response.data;
      setVisits(+response_data.count);
    };
    if (Object.keys(device_info).length) {
      send_device_information();
    }
  }, [device_info]);

  return (
    <DeviceContext.Provider value={{ visits, device_info }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
