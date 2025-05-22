import { View, Text, Pressable, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ITransaction, transactions } from '@/assets/data/transactions';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { format, parseISO } from 'date-fns';
import TransactionHistoryItem from '@/components/TransactionHistoryItem';



export default function Transaction() {
    const router = useRouter();
  return (
    <SafeAreaProvider >

        <SafeAreaView className="px-6 pb-2 pt-9 bg-gray-100 h-full w-full">
            <View className=' flex flex-row justify-between'>
                <Pressable onPress={() => router.back()} className=' p-2 rounded-full w-fit bg-white text-gray-400'>
                    <Ionicons name="chevron-back-outline" size={15} color="black" />
                </Pressable>
                <View className='bg-black px-3 py-1.5   rounded-full flex  items-center flex-row gap-1'>
                    <Image className='w-4 h-4' source={require('./../assets/images/icons/Frame (10).png')} />
                    <Text className='text-xs text-white font-inter '>Rewards</Text>
                </View>
            </View>
            <View>
                <View className=' w-1/2 my-6'>
                    <Text className='  text-3xl font-inter-bold'>Transaction History</Text>
                </View>
            </View>
            <FlatList
                data={transactions}
                renderItem={renderDaySection}
                keyExtractor={(item) => item.date}
                showsVerticalScrollIndicator={false}
            />
        
        </SafeAreaView>
    </SafeAreaProvider>

  )
}


const renderDaySection = ({ item }: { item: { date: string; data: ITransaction[] } }) => {
    const displayDate = format(parseISO(item.date), 'EEEE, d MMMM');
    return <View className="mb-4">
      <Text className="font-inter my-2 text-gray-700">{displayDate}</Text>
      {item.data.map((transaction, index) => (
        <TransactionHistoryItem key={index} transaction={transaction} />
      ))}
    </View>
};