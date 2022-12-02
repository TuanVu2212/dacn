import {
    View,
    SafeAreaView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import Home from './Home/Home'
import BottomTabs from '../components/home/BottomTabs'
import { SIZES } from '../constants'

export default function MainLayout({ navigation, drawerAnimationStyles }) {


    return (
        <SafeAreaView style={{
            backgroundColor: "#ffffff",
            flex: 1,
        }}>
            {/* Header */}
            <View>
                <HeaderTabs navigation={navigation} />
            </View>

            {/* Content */}
            <Home />
            {/* Footer */}

            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    )
}