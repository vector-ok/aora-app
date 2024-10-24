import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    createUser({ ...form });
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
            Sign up
          </Text>

          <FormField
            title="Username"
            placeholder="Your unique username"
            value={form.username}
            handleChangeText={(user) => setForm({ ...form, username: user })}
            otherStyles="mt-7"
            keyboardType="text"
          />
          <FormField
            title="Email"
            placeholder="Your email address"
            value={form.email}
            handleChangeText={(emailValue) =>
              setForm({ ...form, email: emailValue })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Your password"
            value={form.password}
            handleChangeText={(passwordValue) =>
              setForm({ ...form, password: passwordValue })
            }
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center gap-2 pt-5 flex-row">
            <Text className="text-sm font-pregular text-gray-100">
              Already have an account?
            </Text>
            <Link
              className="text-secondary text-sm font-psemibold"
              href={'/sign-in'}
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
