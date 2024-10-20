import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({
  containerStyles,
  textStyles,
  title,
  handlePress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        isLoading ? 'opacity-50' : ''
      } ${containerStyles}`}
    >
      <Text className={` text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
