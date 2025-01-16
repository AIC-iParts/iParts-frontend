import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Login = () => {
    return (
        <View><Text>Login</Text>
        <Link href={"/register"}>Ir para Register</Link></View>
    )
}

export default Login;