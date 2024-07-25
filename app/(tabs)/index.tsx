import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi, registerApi } from '@/apis/common_apis/common_apis';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome5 } from '@expo/vector-icons';
import { themeColors } from "@/theme/index";
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
const router =     useRouter();

  const logout = async () => {
    // await AsyncStorage.removeItem('isUser');
    // setIsLogin(false); // Trigger a state change
  };

  useEffect(() => {
    const checkUserStatus = async () => {


      const userStatus = await AsyncStorage.getItem('isUser');
      setIsLogin(userStatus === 'true');
      if (!isLogin) {
        // router.push("WelcomeScreen")

      }
    };
    checkUserStatus();
  }, [isLogin]);


  return  (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}

      headerImage={
        <Image
          source={require('@/images/OlympicImage.png')}
          style={styles.headerImage}
        />
      }
      >
     
      <ThemedView style={styles.titleContainer}>
        <FontAwesome5 name="medal" size={24} color="gold" />
        <ThemedText type="title">Olympic Data Analyzer</ThemedText>
        <FontAwesome5 name="trophy" size={24} color="gold" />
      </ThemedView>
      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">From 1896 to 2016</ThemedText>
      </ThemedView>
      <HelloWave />
      <ThemedView style={styles.stepContainer}>
        <FontAwesome5 name="chart-line" size={24} color="black" />
        <ThemedText type="subtitle">Step 1: Analyze</ThemedText>
        <ThemedText>
          Dive into historical Olympic data and uncover fascinating trends and insights.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <FontAwesome5 name="search" size={24} color="black" />
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Explore detailed statistics and information about Olympic events and athletes.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <FontAwesome5 name="redo" size={24} color="black" />
        <ThemedText type="subtitle">Step 3: Refresh</ThemedText>
        <ThemedText>
          When you're ready for a new start, use the refresh options to reset and reload data.
        </ThemedText>
      </ThemedView>
      <View style={styles.signUpContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={logout}>
          <Text style={styles.loginButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
    padding: 20,
  },
  safeArea: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    marginLeft: 5,
    color: 'rgb(51 65 85)',
    marginBottom: 8,
    fontWeight: 'bold',
    marginTop: 8,
  },
  input: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 10,
    color: 'gray',
  },
  loginButton: {
    backgroundColor: '#fbbf24',
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(51 65 85)',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    color: 'rgb(51 65 85)',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginLeft: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    marginRight:20,

  },
  subtitleContainer: {
    alignItems: 'center',
    marginBottom: 16,
    padding:20,
    marginRight:20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  headerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
});
