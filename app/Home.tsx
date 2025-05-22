import { View, Image,ScrollView, Text, Pressable, useWindowDimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

    const { width } = useWindowDimensions();
    const [showBalance, setShowBalance] = useState(false);
    const router  = useRouter();
  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={{ flexGrow : 1 }} className="px-6  pt-9 bg-gray-100 h-full w-full">
        <View className='flex flex-row justify-between items-center'>
            <View>
                <Image
                    style={{ width: 120, height: 30, resizeMode: 'contain' }}
                    source={require('./../assets/images/SmartPAY.png')}
                />
            </View>
            <View className='flex flex-row items-center  gap-3'>
                <Pressable className='bg-white p-1.5 rounded-full'>
                    <Image
                        className='w-6 h-6 '
                        source={require('./../assets/images/icons/Frame (6).png')}
                    />
                </Pressable>
                <View className='bg-black px-3 py-1.5   rounded-full flex  items-center flex-row gap-1'>
                    <Image className='w-4 h-4' source={require('./../assets/images/icons/Frame.png')} />
                    <Text className='text-xs text-white font-inter '>Rewards</Text>
                </View>
                
            </View>
        </View>

        <View className='flex gap-1 my-[17%] justify-center items-center w-full '>
            <Text className=' text-[#646464] font-inter-medium'>Today&apos;s income</Text>
            <Text className='text-4xl  font-inter-bold '>{!showBalance ? 'Your Balance' : 'EGP 11,520.00'}</Text>
            <Pressable onPress={() => setShowBalance(!showBalance)} className='bg-white px-3 py-1.5 rounded-full '><Text className='text-xs font-inter-medium '>{!showBalance ? 'Show' : 'Hide'} Balance</Text></Pressable>
        </View>

        <View className='  flex flex-row gap-2 my-2'>
            <Pressable className='bg-[#CAF206] w-1/2 px-4 py-3 gap-2 rounded-2xl'>
                <View className='flex justify-end flex-row w-full'>
                    <View className='bg-white p-1.5 rounded-full'>
                        <Image
                            className='w-5 h-5 '
                            source={require('./../assets/images/icons/Frame (2).png')}
                        />
                    </View>
                </View>
                <View className='w-1/2'>
                    <Text className=' font-inter-bold'>New Payment</Text>
                </View>
            </Pressable>
            <Pressable className='bg-white w-1/2 px-4 py-3 gap-2 rounded-2xl'>
                <View className='flex justify-end flex-row w-full'>
                    <View className='bg-gray-100 p-1.5 rounded-full'>
                        <Image
                            className='w-5 h-5 '
                            source={require('./../assets/images/icons/Frame (3).png')}
                        />
                    </View>
                </View>
                <View className='w-1/2'>
                    <Text className='font-inter-bold'>Print Statment</Text>
                </View>
            </Pressable>
        </View>

        <View className=' flex flex-row gap-2 my-2 '>
           <Pressable className='bg-white w-1/2 px-4 py-2 flex flex-row  rounded-2xl'>
                <View className='flex gap-5 flex-row w-full justify-between items-center'>
                    <View className='w-1/2'>
                        <Text className='text-sm font-inter-medium'>Retreive Payment</Text>
                    </View>
                    <View className=''>
                        <View className='bg-gray-100 p-1.5 rounded-full  '>
                            <Image
                                className='w-5 h-5 '
                                source={require('./../assets/images/icons/Frame (4).png')}
                            />
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable className='bg-white w-1/2 px-4 py-2 flex flex-row  rounded-2xl'>
                <View className='flex gap-5 flex-row w-full justify-between items-center'>
                    <View className='w-1/2'>
                        <Text className='text-sm font-inter-medium'>Other Services</Text>
                    </View>
                    <View className=''>
                        <View className='bg-gray-100 p-1.5 rounded-full  '>
                            <Image
                                className='w-5 h-5 '
                                source={require('./../assets/images/icons/Frame (5).png')}
                            />
                        </View>
                    </View>
                </View>
            </Pressable>
            
        </View>

        <ImageBackground className='h-[13%]' resizeMode='cover' source={require('./../assets/images/icons/Frame 265 (1).png')} >
            <View className='flex flex-row  justify-between py-3 px-3'>
                <View>
                    <Text className='text-sm text-[#4C4C4C] font-inter '>You earned</Text>
                    <Text className='text-2xl font-inter-bold'>EGP25,340</Text>
                    <Text className='text-sm text-[#4C4C4C] first-letter:font-inter '>in December</Text>
               </View>
               <View className='w-1/2 flex '>
                    <Pressable onPress={() => router.navigate('Transaction')} className='bg-black  w-full px-1 py-3 rounded-lg'>
                        <Text className='text-white text-center  font-inter-bold '>See History</Text>
                    </Pressable>
               </View>
            </View>
        </ImageBackground>
        <View className=' flex flex-row gap-2 my-2 '>
           <Pressable className='bg-white w-1/2 px-4 py-2 flex flex-row  rounded-2xl'>
                <View className='flex gap-5 flex-row w-full justify-between items-center'>
                    <View className='w-1/3'>
                        <Text className='text-sm  font-inter-medium'>View Profile</Text>
                    </View>
                    <View className=''>
                        <View className='bg-gray-100 p-1.5 rounded-full  '>
                            <Image
                                className='w-5 h-5 '
                                source={require('./../assets/images/icons/Frame (7).png')}
                            />
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable className='bg-white w-1/2 px-4 py-2 flex flex-row  rounded-2xl'>
                <View className='flex gap-5 flex-row w-full justify-between items-center'>
                    <View className='w-1/2'>
                        <Text className='text-sm  font-inter-medium'>View Settings</Text>
                    </View>
                    <View className=''>
                        <View className='bg-gray-100 p-1.5 rounded-full  '>
                            <Image
                                className='w-5 h-5 '
                                source={require('./../assets/images/icons/Frame (8).png')}
                            />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>

    </ScrollView>
    </SafeAreaView>
  )
}