import React, {userState} from 'react';
import { Text, View,Image, StyleSheet ,useWindowDimensions, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
   
  
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = () => {
        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = ()=>{
       
        navigation.navigate ('ForgotPassword');
    }
    
    const onSignUpPress = () => {
        console.warn('onSignUpPress');
        navigation.navigate ('SignUp');
    }
    return (
        <ScrollView>
        <View style={styles.root}>
           <Image source={Logo} 
            style = {styles.logo} 
            resizeMode="contain" 
            />         
           
           <CustomInput
            placeholder = "Username"
            value={username}
            setValue={setUsername}
           />

           <CustomInput
            placeholder = "Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry ={true}
           />
           <CustomButton text = "로그인" onPress={onSignInPressed}/>
           <CustomButton text = "비밀번호를 잊으셨습니까?" onPress={onForgotPasswordPressed} 
           type="TERTIARY" />
          <SocialSignInButton/>
            <CustomButton text = "계정 생성하기" onPress={onSignUpPress}  type="TERTIARY" />
            
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },
    logo:{
    
  
        width: '300%',
        maxWidth :500,
        height: 150,
    },
});
export default SignInScreen
