import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from 'firebase/firestore/lite'

export default function Categories() {

    const [items, setItems] = useState([]);
    // const todo = db.firestore().collection('Item_Categories');
    // console.log("yess");

    useEffect(() => {
        const GetData = async () => {
            const items = collection(db, 'Item_Categories');
            const itemsSnapshot = await getDocs(items);
            const itemList = itemsSnapshot.docs.map(doc => doc.data());
            setItems(itemList);
        }
        GetData();
    }, []);

    return (
        <View
            style={{
                backgroundColor: "#fff",
                paddingLeft: 10,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    resizeMode: "contain",
                                }}
                            />
                            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
