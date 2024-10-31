import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons, images } from '../constants';

const SearchInput = ({
  handleChangeText,
  value,
  placeholder,
  title,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="h-16 w-full bg-black-100 rounded-2xl px-4 flex items-center border border-gray-500 focus:border-secondary flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white font-pregular flex-1"
        value={value}
        onChangeText={handleChangeText}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        secureTextEntry={title === 'Password' && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
