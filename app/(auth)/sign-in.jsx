import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // createUser({ ...form });
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill all the fields');
    }
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      // set it to global state
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 py-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-psemibold text-semibold mt-10">
            Log in to Aora!
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(emailValue) =>
              setForm({ ...form, email: emailValue })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(passwordValue) =>
              setForm({ ...form, password: passwordValue })
            }
            otherStyles="mt-7"
          />
          <Text className="text-gray-100 text-sm font-pregular mt-[18px] text-right">
            Forgot Password
          </Text>

          <CustomButton
            title="Log In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center gap-2 pt-5 flex-row">
            <Text className="text-sm font-pregular text-gray-100">
              Don't have an account?
            </Text>
            <Link
              className="text-secondary text-sm font-psemibold"
              href={'/sign-up'}
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
