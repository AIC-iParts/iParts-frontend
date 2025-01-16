import { Link } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native';

const Register = () => {
    return (
        <View><Text>Register</Text>
        <Link href={"/login"}>Ir para Login</Link></View>
    )
}

export default Register;