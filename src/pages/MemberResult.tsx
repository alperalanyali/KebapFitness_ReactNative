import React from 'react';
import {SafeAreaView,Text,View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';

const MemberResult = ({route,navigation})=>{
    const user = route.params.user;
    const gotoWelcome = ()=>{
        navigation.navigate("Welcome")
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Üye Bilgileri</Text>
            <View style={styles.inner_container}>
                <Text style={styles.text}>Uye Adı: {user.name} </Text>
                <Text style={styles.text}>Uye Soyadı: {user.surname} </Text>
                <Text style={styles.text}>Uye Yaşı: {user.age} </Text>
                <Text style={styles.text}>Uye Eposta: {user.email} </Text>
            </View>

            <CustomButton title={"Ana Sayfa Dön"} onPress={gotoWelcome}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginTop:100,
        
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    text:{
        fontSize:20,
        margin:10
    },
    inner_container:{
        marginTop:20,
        marginHorizontal:20
    }
});
export default MemberResult;