import React from 'react';
import { SafeAreaView,View,Text ,StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
const WelcomePage = ({navigation})=>{


    goToMemberSign = ()=>{
        navigation.navigate('MemberSignScreen')
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebab Fitness Salonu</Text>
            <CustomButton onPress={goToMemberSign} title={'Üye kaydı Oluştur'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        margin:10
    }
})
export default WelcomePage;