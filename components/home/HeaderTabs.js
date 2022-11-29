import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../../constants";

export default function HeaderTabs(props) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            height: 70
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding * 2,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.logo}
                    style={{
                        height: 100,
                        width: 100,
                        // tintColor: COLORS.green
                    }}
                />

            </View>
        </View>
    );
}

