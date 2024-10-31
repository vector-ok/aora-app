import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        key={(item) => item.id}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.$id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-psemibold text-white">
                  JMastery
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-9 w-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View classNamew-full flex-1 pt-5 pb-8>
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Trending Videoa
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos found"
            subtitle="Be the first to uoload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
