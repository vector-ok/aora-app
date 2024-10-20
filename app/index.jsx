import { Link, router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {
  return (
    <SafeAreaView className="bg-cyan-700 h-full">
      <ScrollView contentContailnerStyle={{ height: '100%' }}>
        <View className="items-center justify-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-full max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless possibilities with{' '}
              <Text className="text-secondary-200 ">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center ">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles=" w-full mt-7"
          />
        </View>
      </ScrollView>
      <ExpoStatusBar backgroundColor="#161622" style="light" />
      {/* <View className="flex-1 items-center justify-center bg-cyan-700 space-y-10">
        <View className="items-center">
          <Text className="text-5xl font-pblack text-cyan-100 ">Rackers!</Text>
          <Text className="italic text-white text-xs ">
            Welcome to Rackers!
          </Text>
        </View>
        <View>
          <StatusBar style="auto" />
          <Link href="/home" style={{ color: 'white' }}>
            Go to Home
          </Link>
        </View>
      </View> */}
    </SafeAreaView>
  );
}
