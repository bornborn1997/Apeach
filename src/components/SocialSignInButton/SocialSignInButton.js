import React from 'react'
import { Text, View } from 'react-native'
import CustomButton from '../CustomButton';
const SocialSignInButton = () => {

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInKakao = () => {
        console.warn('onSignInKakao');
    };
    return (
      <>
        <CustomButton text = "페이스북 로그인"
            onPress={onSignInFacebook}
            bgColor = "#E7EAF4"
            fgColor= "#4765A9"
            />
           <CustomButton text = "구글 로그인" 
           onPress={onSignInGoogle}
           bgColor = "#FAE9EA"
            fgColor= "#DD4D44"
           />
           <CustomButton text = "카카오 로그인" 
           onPress={onSignInKakao}
           bgColor = "#FAE078"
            fgColor= "#FF9100"
           />
      </>
    )
  }


export default SocialSignInButton