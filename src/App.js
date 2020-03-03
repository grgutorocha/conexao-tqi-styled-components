import React from 'react';
import styled from 'styled-components';

import PictureCss from './components/pictureCss';
import PictureSyled from './components/pictureStyled';

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
`;

const App = () => {
  return (
    <Wrapper>
      <PictureSyled />
      <PictureCss />
    </Wrapper>
  );
}

export default App;
