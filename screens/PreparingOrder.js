import {  ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingOrder = () => {
    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Basket')
        }
        , 4000)
    }, [])
    
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
        <Animatable.Image
        source={require('../assets/deliveryguy.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
        />
        <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>
        <ActivityIndicator color='white' size={40}/>
    </SafeAreaView>
  )
}

export default PreparingOrder