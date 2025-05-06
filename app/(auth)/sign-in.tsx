import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { images } from '@/constants'
import { Link } from 'expo-router'

const SignIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-semibold'>
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder='Email'
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder='Password'
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles='mt-10'
            isLoading={isSubmitting}
            textStyles=''
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have account?
            </Text>
            <Link href="/(auth)/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})