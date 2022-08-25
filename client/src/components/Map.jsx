import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, MarkerF, InfoWindow } from "@react-google-maps/api";
import { getLocations as listLocations } from "../redux/actions/locationActions";

function Map() {
  const dispatch = useDispatch();
  const getLocations = useSelector((state) => state.getLocations);
  const { locations } = getLocations;

  useEffect(() => {
    dispatch(listLocations());
  }, [dispatch]);

  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    // height: "40vh",
    // width: "40%",
    gridArea: "map",
  };

  const defaultCenter = {
    lat: 32.07018929655174,
    lng: 34.794164715631155,
  };

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
      {locations.map((item) => (
        <MarkerF
          key={item.name}
          position={{ lat: item.lat, lng: item.lng }}
          onClick={() => onSelect(item)}
          icon="https://img.icons8.com/color/48/000000/shopping-cart-loaded.png"
        ></MarkerF>
      ))}
      {selected.lat && selected.lng && (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          clickable={true}
          onCloseClick={() => setSelected({})}
        >
          <p>{selected.name}</p>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default Map;
