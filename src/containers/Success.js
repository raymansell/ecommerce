import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useAppContext } from '../context/AppContext';
import useGeocoding from '../hooks/useGeocoding';
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useAppContext();

  const { latitude, longitude } = useGeocoding(buyer[0].address);
  // https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes
  const ChangeView = ({ center }) => {
    const map = useMap();
    map.setView(center, 15);
    return null;
  };

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>Thank you for your purchase {`${buyer[0].name}!`}</h2>
        <span>Your order will arrive in three days</span>
        <div className='map-container'>
          <MapContainer center={[latitude, longitude]} zoom={15}>
            <ChangeView center={[latitude, longitude]} zoom={15} />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[latitude, longitude]} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Success;
