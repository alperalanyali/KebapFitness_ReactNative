import React from 'react';
import { SafeAreaView,View,Text,TextInput } from 'react-native';

import styles from './CustomTextInput-styles';

const CustomTextInput = ({label,placeholder,onChangeText})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.textInput_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </View>
    )
}

export default CustomTextInput;