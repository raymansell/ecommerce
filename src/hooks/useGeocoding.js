import { useState, useEffect } from 'react';
import axios from 'axios';

const useGeocoding = (address) => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });

  const params = {
    access_key: 'f44aaa8beeb7600012e6a378bf823934',
    query: address,
  };

  const getCoordinates = async () => {
    const response = await axios.get(
      'http://api.positionstack.com/v1/forward',
      { params }
    );
    const {
      data: { data },
    } = response;
    setLocation({
      latitude: data[0].latitude,
      longitude: data[0].longitude,
    });
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  return location;
};

export default useGeocoding;
