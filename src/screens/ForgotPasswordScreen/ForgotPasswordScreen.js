import React, {userState} from 'react';
import { Text, View, StyleSheet , ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

        
  const navigation = useNavigation();
  
  const onConfirmPressed = () => {
    navigation.navigate('NewPassword');
    };
 
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };




    return (
        <ScrollView>
        <View style={styles.root}>
        <Text style={styles.title}>가입시 이메일을 입력해주세요</Text>
           
           <CustomInput
            placeholder = "email@"
            value={username}
            setValue={setUsername}
           />
        
           <CustomButton text = "전송" onPress={onConfirmPressed}/>
           
        

            <CustomButton text = "로그인 화면으로 돌아가기 " onPress={onSignInPress}  type="TERTIARY" />
            
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
export default ForgotPasswordScreen
