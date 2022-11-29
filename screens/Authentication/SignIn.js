import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import TextButton from '../../components/TextButton';
import AuthLayout from './AuthLayout';
import { constants, images, FONTS, SIZES, COLORS, icons } from '../../constants';
import FormInput from '../../components/FormInput';
import CustomSwitch from '../../components/CustomSwitch';
import TextIconButton from '../../components/TextIconButton';
import { utils } from '../../utils'



export default function SignIn({ navigation }) {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [showpass, setShowPass] = useState(false)
    const [erroremail, setErrorEmail] = useState("")
    const [saveMe, setSaveMe] = useState(false)

    function isEnableSignIn() {
        return email != "" && pass != "" & erroremail == ""
    }
    return (
        <AuthLayout
            title="Let Sign you In"
            subtitle="choaf "
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* FORM */}
                <FormInput
                    label={"Email: "}
                    keyboardType="email-address"
                    autoCompleteType='email'
                    onChange={(value) => {
                        //validate
                        utils.validateEmail(value, setErrorEmail)
                        setEmail(value)
                    }}
                    errorMsg={erroremail}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',

                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && erroremail == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && erroremail == "") ? COLORS.green : COLORS.red
                                }}
                            />

                        </View>
                    }
                />

                <FormInput
                    label={"Password: "}
                    secureTextEntry={!showpass}
                    autoCompleteType='password'
                    onChange={(value) => {
                        //validate
                        utils.validatePassword(value, setErrorPass)
                        setPass(value)
                    }}
                    // errorMsg={pass}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => {
                                setShowPass(!showpass)
                            }}
                        >
                            <Image
                                source={showpass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.green
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                {/* SAVE && Forgot */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'

                    }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />
                    <TextButton
                        label={"Forgot password?"}
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />

                </View>
                {/* SIGNIN */}
                <TextButton
                    label={"Sign In"}
                    disabel={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("Home")}
                />
                {/* SIGNUP 58:20*/}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >Don't have an account?</Text>
                    <TextButton
                        label={"Sign up"}
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>

                <View
                    style={{
                        marginTop: 50
                    }}
                >
                    <TextIconButton
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue
                        }}
                        icon={icons.fb}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        label="FACEBOOK"
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white
                        }}
                        onPress={() => {
                            navigation.navigate("Home")
                            // console.log('====================================');
                            // console.log("FB");
                            // console.log('====================================');
                        }}
                    />
                    <TextIconButton
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            marginTop: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        icon={icons.google}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor: null
                        }}
                        label="GOOGLE"
                        labelStyle={{
                            marginLeft: SIZES.radius
                        }}
                        onPress={() => {
                            console.log('====================================');
                            console.log("Google");
                            console.log('====================================');
                        }}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}