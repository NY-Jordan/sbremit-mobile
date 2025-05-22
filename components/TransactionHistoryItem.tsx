import { View, Text, Image } from 'react-native'
import React from 'react'
import { ITransaction, TransactionTypeEnum } from '@/assets/data/transactions'

export default function TransactionHistoryItem({transaction} : {transaction : ITransaction}) {
    const isCashIn = transaction.type === TransactionTypeEnum.CASH_IN;
  return (
    <View className=' flex items-center justify-between my-2 flex-row'>
        <View className=' flex flex-row gap-2'>
            <View  className={` p-2.5 rounded-full w-fit ${
                !isCashIn ? 'bg-[#EBEBEB]' : 'bg-[#CAF206]'
            } text-gray-400`}>
                {!isCashIn ?
                    <Image className='w-6 h-6' source={require('./../assets/images/icons/Icon2.png')} />
                    : <Image className='w-6 h-6' source={require('./../assets/images/icons/Icon.png')} />
                }
            </View>
            <View>
                <Text className=' text-sm font-inter-semibold '>{transaction.type}</Text>
                <Text className='font-inter text-sm text-[#858585]'>{transaction.time}</Text>
            </View>
        </View>
        <View>
            <Text className=' font-inter-semibold'>EGP {transaction.amount.toLocaleString()}</Text>
        </View>
    </View>
  )
}