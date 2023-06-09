import React, { useState } from 'react';
import {SafeAreaView,View,Text, Alert} from 'react-native';

import CustomTextInput from '../components/CustomTextInput/CustomTextInput'
import CustomButton from '../components/CustomButton/CustomButton';
const MemberSign = ({navigation})=>{
    
    const [name,setName] = useState(null);
    const [surname,setSurname] = useState(null);
    const [age,setAge] = useState(null);
    const [email,setEmail] = useState(null);


    
    const handleSubmit = ()=>{
        if(!name || !surname || !age || !email ){
            Alert.alert("Kebab Fitness Salonu","Bilgiler boş bırakılamaz");
            return;
        }
            const user = {
                name,
                surname,
                age,
                email
            };
            navigation.navigate("MemberResultScreen",{user});
        
       
    }
    return(
        <SafeAreaView>
            <Text>Member Sign</Text>
            <CustomTextInput label={'Üye Adı'} placeholder={'Üye adını giriniz'} onChangeText={setName}/>
            <CustomTextInput label={'Üye Soyadı'} placeholder={'Üye soyadını giriniz'} onChangeText={setSurname}/>
            <CustomTextInput label={'Üye Yaşı'} placeholder={'Üye yaşını giriniz'} onChangeText={setAge}/>
            <CustomTextInput label={'Üyenin E-posta'} placeholder={'Üyenin eposta adresini giriniz'} onChangeText={setEmail}/>

            <CustomButton title={'Kayıt Ol'} onPress={handleSubmit}/>
        </SafeAreaView>
    )
}

export default MemberSign;