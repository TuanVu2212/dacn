import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants'
import HeaderTabs from '../../components/home/HeaderTabs'
import BottomTabs from '../../components/home/BottomTabs'
import TextButton from '../../components/TextButton'
import StepperInput from './StepperInput'
import TextIconButton from '../../components/TextIconButton'

function renderDetails() {
    const listcolors = ["Đen", "Trắng", "Đỏ", "Vàng"];
    const [selectcolor, setSelectColor] = useState("");
    return (
        <View
            style={{
                // marginTop: SIZES.padding,
                // marginBottom: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}
        >
            <View
                style={{
                    height: 200,
                    borderRadius: 15,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.radius
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <Image
                            source={icons.calories}
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray2,
                                ...FONTS.body4
                            }}
                        >
                            hello world
                        </Text>
                    </View>
                    <Image
                        source={icons.love}
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </View>
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/dacn1-c94d6.appspot.com/o/Product%2Fden%2FdenOFF1.jpg?alt=media&token=2a0aadb6-d80f-4a4b-a5b2-32a0d7ef6533" }}
                        resizeMode='contain'
                        style={{
                            height: 150,
                            width: 200,
                            borderRadius: 15,
                        }}
                    />
                </View>
            </View>
            {/* TEXXT */}
            <View
                style={{
                    marginTop: SIZES.padding / 4,
                }}
            >
                <Text
                    style={{ ...FONTS.h1 }}
                >
                    Đèn ngủ 1
                </Text>
                <Text
                    style={{
                        marginTop: SIZES.base,
                        color: COLORS.darkGray,
                        textAlign: 'justify',
                        ...FONTS.body3
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                {/* Start */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            paddingVertical: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary,
                        }}
                    >
                        <Image
                            source={icons.star}
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white
                            }}
                        >
                            4.5
                        </Text>
                    </View>
                </View>
                {/* Color */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Màu: </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: SIZES.padding
                        }}
                    >
                        {listcolors.map((items, index) => {
                            return (
                                <TextButton
                                    key={`Color-${index}`}
                                    buttonContainerStyle={{
                                        width: 50,
                                        height: 50,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: selectcolor == items ? COLORS.primary : COLORS.gray2,
                                        color: COLORS.black,
                                        backgroundColor: selectcolor == items ? COLORS.primary : null
                                    }}
                                    label={items}
                                    labelStyle={{
                                        color: selectcolor == items ? COLORS.white : COLORS.darkGray,
                                        ...FONTS.body3
                                    }}
                                    onPress={() => setSelectColor(items, id)}
                                />
                            )
                        })}
                    </View>

                </View>
                <Text
                    style={{
                        ...FONTS.h3,
                        marginTop: 20
                    }}
                >Giá: {"12"}.000đ</Text>

                {/* StepInput */}
                {/* {renderFooter()} */}
            </View>
        </View>
    )
}

function renderFooter() {
    const [qty, setQty] = useState(0);
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 120,
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.radius
            }}
        >
            <StepperInput
                value={qty}
                onAdd={() => setQty(qty + 1)}
                onMinus={() => {
                    if (qty > 0) {
                        setQty(qty - 1)
                    }
                }}
            />
            <TextButton
                buttonContainerStyle={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 60,
                    marginLeft: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                label={"Bỏ vào giỏ hàng"}
            />
        </View>
    )
}

export default function ProductDetail({ navigation }) {
    const [foodItem, setFoodItem] = useState("")
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingTop: 20

            }}
        >
            {/* Header */}
            <HeaderTabs />

            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <ScrollView>
                    {/* Body */}
                    {renderDetails()}
                    {renderFooter()}
                </ScrollView>
            </View>
            {/* Footer */}

            <BottomTabs navigation={navigation} />
        </View>
    )
}