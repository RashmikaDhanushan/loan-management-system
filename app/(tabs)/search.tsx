import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Submit pressed', searchText);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 justify-center bg-green-700 px-5 py-10">
        <View className="w-[300px] h-[300px] self-center mb-6 rounded-2xl bg-gray-100 shadow-sm">
          <LottieView
            source={require('@/assets/search.json')}
            autoPlay
            loop
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <Text className="text-white text-2xl text-center mb-6 uppercase tracking-wide italic font-bold">
          Search
        </Text>
        <TextInput
          className="bg-white border border-gray-300 rounded-lg p-3 text-base shadow-sm mb-4"
          placeholder="Search customer..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          className="bg-red-600 rounded-lg mt-2 px-6 py-3 self-center w-full max-w-[200px] items-center shadow-md border border-gray-200"
          onPress={handleSearch}
        >
          <Text className="text-white text-lg font-bold uppercase tracking-wide text-center shadow-sm">
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
