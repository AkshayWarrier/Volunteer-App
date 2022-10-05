import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const SignInEmailOption = ({ setIsLogged }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => setIsLogged(true)}
                    >
                        <Text style={styles.text}>Coninue with Email</Text>
                    </TouchableOpacity>
                    <Text style={styles.or} >OR</Text>
                    <TouchableOpacity style={styles.googleButton}
                        onPress={() => setIsLogged(true)}
                    >
                        <Text style={styles.googleText}>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7FFF7",
        alignItems: 'center',
    },
    scroll: {
        flex: 1,
        margin: 20,
        marginLeft: 0,
        marginRight: 0,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins',
        color: "#1A535C",
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 40,
    },
    formContainer: {
        flex: 1,
        backgroundColor: "#F7FFF7",
    },
    inputContainer: {
        flex: 1,
        backgroundColor: "#F7FFF7",
        marginTop: 10,
    },
    inputTitle: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: "#1A535C",
        paddingTop: 10,
    },
    input: {
        height: 30,
        marginVertical: 10,
        borderWidth: 2,
        width: 300,
        borderBottomColor: "#10383F",
        borderTopColor: "#F7FFF7",
        borderLeftColor: "#F7FFF7",
        borderRightColor: "#F7FFF7",
        fontFamily: 'Poppins',
        color: "#1A535C",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#1A535C",
        width: 200,
        height: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#F7FFF7",
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    or: {
        fontSize: 18,
        fontFamily: 'Poppins',
        color: "#1A535C",
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    googleButton: {
        backgroundColor: "#F7FFF7",
        width: 200,
        height: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#1A535C",
    },
    googleText: {
        color: "#1A535C",
        fontSize: 14,
        fontFamily: 'Poppins',
    },
}); 