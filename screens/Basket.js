import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { urlFor } from "../sanity";
import Currency from 'react-currency-formatter'

const Basket = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const basketTotal = useSelector(selectBasketTotal)
    const items = useSelector(selectBasketItems)
    const [ groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
          const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
          }, {})
          setGroupedItemsInBasket(groupedItems)
    } , [items])


    return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-center'>Basket</Text>
                <Text className='text-center text-gray-400'>{restaurant.title}</Text>
            </View>
             <TouchableOpacity className='rounded-full bg-gray-100 absolute top-3 right-5' onPress={navigation.goBack}>
             <Octicons name="x-circle-fill" size={40} color="#00ccbb" />
             </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5 '>
            <Image
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                source={{uri: 'https://links.papareact.com/wru'}}
            />
            <Text className='flex-1'>Delivery in 50-75min</Text>
            <TouchableOpacity>
                <Text className='text-[#00ccbb]'>Change</Text>
            </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#00ccbb]'>{items.length} x</Text>
                    <Image
                    source={{uri: urlFor(items[0]?.image).url()}}
                    className='h-12 w-12 rounded-full'
                    />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    <Text>
                        <Currency quantity={items[0]?.price} currency="BRL"/>
                    </Text>
                    <TouchableOpacity>
                        <Text
                        className='text-[#00ccbb] text-xs'
                        onPress={() => dispatch(removeFromBasket({id: key}))}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
                
        <View className='p-4 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>SubTotal</Text>
                <Text  className='text-gray-400'>
                    <Currency quantity={basketTotal} currency='BRL'/>
                </Text>
            </View>            

            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Free</Text>
                <Text  className='text-gray-400'>
                    <Currency quantity={basketTotal} currency='BRL'/>
                </Text>
            </View>       
            <View className='flex-row justify-between'>
                <Text >Order total</Text>
                <Text  className='font-extrabold'>
                    <Currency quantity={basketTotal} currency='BRL'/>
                </Text>
            </View>            

            <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4'>
                <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>
        </View>

        </View> 
    </SafeAreaView>
  )
}

export default Basket