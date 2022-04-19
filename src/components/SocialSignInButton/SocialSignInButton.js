import React from 'react'
import { Text, View } from 'react-native'
import CustomButton from '../CustomButton';
import KakaoSDK from '@actbase/react-kakaosdk';

const SocialSignInButton = () => {

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInKakao = async () => {
      try {
        await KakaoSDK.init('6cefd020d5887b45938e361905ff3f9b');
        const tokens = await KakaoSDK.login();
        return tokens;
      } catch (e) {
        console.log(e);
      }
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