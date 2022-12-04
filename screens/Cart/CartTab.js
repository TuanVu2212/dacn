import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/home/BottomTabs'
import HeaderTabs from '../../components/home/HeaderTabs'
import { SwipeListView } from 'react-native-swipe-list-view'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import StepperInput from '../Product/StepperInput'
import IconButton from '../../components/IconButton'
import LinearGradient from 'react-native-linear-gradient'
import { Divider } from 'react-native-elements'
import TextButton from '../../components/TextButton'
// import { LinearGradient } from 'expo-linear-gradient';

const foods = [
    {
        id: 1,
        name: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        img: "https://firebasestorage.googleapis.com/v0/b/dacn1-c94d6.appspot.com/o/Product%2Fchau%2Fchau17.jpg?alt=media&token=400a0613-8939-445f-b4a0-43fdf735f29d",
        price: "$13.50",
        qty: 1,
    },
    {
        id: 2,
        name: "Tandoori Chicken",
        img: "https://firebasestorage.googleapis.com/v0/b/dacn1-c94d6.appspot.com/o/Product%2Fhopqua%2FHopqua284.jpg?alt=media&token=902a57b7-66a7-439b-aefa-4562c07e2940",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$13.50",
        qty: 2,
    },
    {
        id: 3,
        name: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        img: "https://firebasestorage.googleapis.com/v0/b/dacn1-c94d6.appspot.com/o/Product%2Fden%2FdenOFF.jpg?alt=media&token=c64b6600-d4f7-47b8-9db1-dc311983c9d1",
        price: "$14.50",
        qty: 1,
    },
];

export default function CartTab({ navigation }) {
    const [mycartlist, setCartList] = useState(foods)

    function updateQTYHandler(newQty, id) {
        // const newMy 1:3:52
        return 0
    }
    function renderCartList() {
        return (
            <SwipeListView
                data={mycartlist}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) =>
                    <View
                        style={{
                            height: 110,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        <View
                            style={{
                                width: 90,
                                height: 90,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source={{ uri: data.item.img }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10
                                }}
                            />

                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3
                                }}
                            > {data.item.name}</Text>
                            <Text
                                style={{ color: COLORS.primary, ...FONTS.h3 }}
                            >{data.item.price}đ</Text>
                        </View>
                        <StepperInput
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => {
                                updateQTYHandler(data.item.qty + 1, data.item.id)
                            }}
                            onMinus={() => {
                                if (data.item.qty > 1) {
                                    updateQTYHandler(data.item.qty - 1, data.item.id)
                                }
                            }}
                        />

                    </View>
                }
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10

                        }}
                        onPress={() => console.log("Xoa")}
                    />
                )

                }
            />
        )
    }

    return (
        <View style={{
            backgroundColor: "#ffffff",
            flex: 1,
            paddingTop: 20,
        }}>
            <HeaderTabs navigation={navigation} />

            {renderCartList()}
            <FooterTotal
                subTotal={37}
                shippingFee={0.0}
                total={37}
                navigation={navigation}
            />

            <BottomTabs navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})
const FooterTotal = ({ subTotal, shippingFee, total, onPress, navigation }) => {
    return (
        <View>
            <Divider width={0.5} style={{ marginVertical: 10 }} />
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white
                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body3 }}>Tổng sản phẩm</Text>
                    <Text style={{ ...FONTS.h3 }}>{subTotal}đ</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body3 }}>Tổng sản phẩm</Text>
                    <Text style={{ ...FONTS.h3 }}>{shippingFee}đ</Text>
                </View>
                <Divider width={0.5} color={COLORS.lightOrange} style={{ marginVertical: 10 }} />
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body3 }}>Tổng sản phẩm</Text>
                    <Text style={{ ...FONTS.h3 }}>{total}đ</Text>
                </View>
            </View>
            <TextButton
                label={"Thanh Toán"}
                disabel={false}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                onPress={() => {
                    navigation.navigate("MyCard")
                    console.log("Thanh Toán");
                }}
            />

        </View>
    )
}