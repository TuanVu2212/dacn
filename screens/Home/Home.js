import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import BottomTabs from "../../components/home/BottomTabs";
import Carousell from "../../components/home/carousel/Carousel";
import Categories from '../../components/home/Categories';
import HeaderTabs from '../../components/home/HeaderTabs';
import RestaurantItems, {
    localRestaurants,
} from "../../components/home/RestaurantItems";
import SearchBar from '../../components/home/SearchBar';

import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from 'firebase/firestore/lite'



export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [slide, setSlide] = useState([]);
    // const todo = db.firestore().collection('Item_Categories');
    console.log("yess");

    useEffect(() => {
        const GetData = async () => {
            const slide_items = collection(db, 'Slide');
            const slide_itemsSnapshot = await getDocs(slide_items);
            const itemList = slide_itemsSnapshot.docs.map(doc => doc.data());
            setSlide(itemList);
        }
        GetData();
    }, []);

    return (
        <SafeAreaView style={{
            backgroundColor: "#eee",
            flex: 1,
        }}>
            <View style={{
                backgroundColor: "white",
                padding: 15
            }}>
                <HeaderTabs navigation={navigation} />
                <SearchBar />
                <Categories />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousell data={slide} />

                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            {/* <ViewCart /> */}
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    );
}
