import { LoadScript } from '@react-google-maps/api';

// Componnents
import Map from "../components/Map";

const MapsPage = () => {
	
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCbS0WcrG3esjA5jBtqs_N1Ll3bGkm4Z5k'>
       <Map/>
     </LoadScript>
  )
}

export default MapsPage;