import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons, images } from '../constants';

const FormField = ({
  handleChangeText,
  value,
  placeholder,
  title,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="font-pmedium text-gray-100 text-base">{title}</Text>
      <View className="h-16 w-full bg-black-100 rounded-2xl px-4 flex items-center border border-gray-500 focus:border-secondary flex-row">
        <TextInput
          className="flex-1 w-full h-full text-white font-psemibold text-base"
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
