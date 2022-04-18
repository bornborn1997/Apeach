import React, {userState} from 'react';
import { Text, View, StyleSheet , ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [Code, setCode] = useState('');

      
  const navigation = useNavigation();
  
  const onConfirmPressed = () => {
      
    navigation.navigate('Home');
    };
 
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const  onResendPress = () => {
        console.warn(' onResendPress');
    };



    return (
        <ScrollView>
        <View style={styles.root}>
        <Text style={styles.title}>이메일을 확인하세요</Text>
           
           <CustomInput
            placeholder = "귀하의 확인 코드를 입력해주세요"
            value={Code}
            setValue={setCode}
           />
        
           <CustomButton text = "확인" onPress={onConfirmPressed}/>
           
            <CustomButton text = "코드 재전송" onPress={ onResendPress}  type="SECONDARY" />

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
export default ConfirmEmailScreen
