import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

import LoginView from '../../component/view/auth/login';

const login = () => {
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      const newWidth = e.window.width;
      const newHeight = e.window.height;
      setHeight(newHeight);
      setWidth(newWidth);
    });
  },[]);

  return <LoginView width={width} height={height} />;
};

export default login;
