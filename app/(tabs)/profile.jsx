import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ProfilePic from '../../assets/images/profile.png';

const profile = () => {
  const codeRef = 'DT-Rackers-2345r43001etr';

  return (
    <View className="flex h-screen bg-black-700 px-3 space-y-5 ">
      <View>
        <StatusBar style="auto" />
        <Text className="text-black text-bold text-xl mt-5">Profile Sect</Text>
        <View className="bg-black h-0.5" />
      </View>
      {/* <View>
        <Text className="text-black">Avatar and Description here</Text>
      </View> */}
      <View className="flex justify-center items-center space-y-2 mb-5">
        <Image source={ProfilePic} className="h-52 w-52 rounded-full" />
        <Text className="text-black font-semibold text-2xl">Uche Uchenna</Text>
      </View>
      <View className="px-10 bg-rackers h-screen py-2 space-y-5">
        <Text className="text-black text-center text-xs text-bold">
          Profile Details
        </Text>
        {/* <View className="bg-black h-0.5" /> */}
        <View className="space-y-2 flex justify-center">
          <View className="flex flex-row items-center space-x-5">
            <View className="w-1/2">
              <Text>Name:</Text>
            </View>
            <Text className="text-right font-semibold">Uche Uchenna</Text>
          </View>
          <View className="flex flex-row space-x-5 w-full">
            <View className="w-1/2">
              <Text>Ref:</Text>
            </View>
            <Text className="text-right font-semibold">2345r43001etr</Text>
          </View>
          <View className="flex flex-row space-x-5 w-full">
            <View className="w-1/2">
              <Text>CodeRef:</Text>
            </View>
            <Text className="text-right font-semibold">
              {codeRef.length < 16 ? codeRef : codeRef.substring(0, 15) + '...'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;
