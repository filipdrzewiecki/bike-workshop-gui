import React, { useReducer, createContext, useEffect } from "react";
import { authHeader } from '../../Page/Security/authHeader';
import * as API_ACTIONS from './apiActions.jsx'
import ImageReducer from '../../reducers/ImageReducer';
import bikeWorkshop from './bike-workshop-service.jsx'

export const ImageContext = createContext();

const ImageProvider = (props) => {
  const [image, dispatch] = useReducer(ImageReducer);

  function fetchImage(response) {
    return {
      type: API_ACTIONS.FETCH_IMAGE,
      payload: response.data
    }
  }

  const dispatchImage = () => {
    bikeWorkshop.get(`image/1`, {headers: authHeader()})
    .then((response) => Buffer.from(response.data, 'binary'));
  };

  useEffect(dispatchImage, []);

  return (
    <ImageContext.Provider
      value={{
        image: image,
        dispatch: dispatchImage
      }}>

      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;