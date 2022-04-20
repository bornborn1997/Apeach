import React, {useState} from 'react';
import { Text, View, StyleSheet , ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordRepeat, setPasswordRepeat] = useState('');
   
  const navigation = useNavigation();
  
  const onRegisterPressed = () => {
      
        navigation.navigate('ConfirmEmail');

    };
 
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');

    };

    const onTermOfUsePressed = () => {
        console.warn('onTermOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };


    return (
        <ScrollView>
        <View style={styles.root}>
        <Text style={styles.title}>회원 가입</Text>
           
           <CustomInput
            placeholder = "아이디"
            value={username}
            setValue={setUsername}
           />
            <CustomInput
            placeholder = "이메일"
            value={email}
            setValue={setEmail}
           />

           <CustomInput
            placeholder = "비밀번호"
            value={Password}
            setValue={setPassword}
            secureTextEntry ={true}
           />

<CustomInput
            placeholder = "비밀번호를 한번더 입력해주세요"
            value={PasswordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry ={true}
           />
           <CustomButton text = "가입하기" onPress={onRegisterPressed}/>
           <Text style = {styles.text}> 귀하는 당사의      
           <Text style={styles.link} onPress = {onTermOfUsePressed}>이용 약관</Text>
            및 
            <Text style = {styles.link } onPress = {onPrivacyPressed}>개인정보 보호 정책</Text>에 동의함을 확인합니다.</Text>
          <SocialSignInButton/>
            <CustomButton text = "로그인 하러가기 " onPress={onSignInPress}  type="TERTIARY" />
            
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
    title:{

        fontSize : 24,
        fontWeight : 'bold',
        color: '#b7b4df',
        margin : 10,
    },
    text : {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#fdb075',
    },
});
export default SignUpScreen
