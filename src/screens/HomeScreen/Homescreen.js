/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  color: purple;
`;
const Myzone = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Playlist = styled.View`
  flex: 3;
  background-color: skyblue;
`;
const Friendlist = styled.View`
  flex: 2;
  background-color: tomato;
`;

const Home = () => {
  const [loginState, setLoginState] = useState(false);




  return (
    <Container>
      {loginState ? (
        <Text>Login 화면 보여주기</Text>
      ) : (
        <Container>
          <Myzone>
            <Button title = "my zone" />
          </Myzone>
          <Playlist>
            <Text>친구들의 추천</Text>
          </Playlist>
          <Friendlist>
            <Text>오늘의 친구 추천</Text>
          </Friendlist>
        </Container>
      )}
    </Container>
  );
};

export default Home;
