import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.primary }}>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6), width: '88%', height: RFPercentage(8), borderRadius: RFPercentage(1.2), backgroundColor: Colors.secondary }} >
                        <Text style={{ fontSize: RFPercentage(2.5), color: Colors.yellow, fontWeight: 'bold' }} >
                            Play FREE win REAL !!
                        </Text>
                    </View>

                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(6), width: '88%', height: RFPercentage(8), borderRadius: RFPercentage(1.2), backgroundColor: Colors.secondary }} >
                        <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.5), color: Colors.white, fontWeight: '600' }} >
                            How does it work ?
                        </Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: RFPercentage(2) }} >
                            <Entypo name="plus" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(5), width: '87%', alignSelf: 'center' }} >
                        <Text style={{ fontWeight: '600', color: Colors.white, fontSize: RFPercentage(2.4) }} >
                            Top 10 Week winners
                        </Text>

                        <View style={{ marginTop: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: '100%', height: RFPercentage(6.5), borderColor: Colors.secondary, borderWidth: RFPercentage(0.1), borderRadius: RFPercentage(1) }} >

                            <Text style={{ marginLeft: RFPercentage(1), color: Colors.white, fontSize: RFPercentage(2.2) }} >
                                Stephen=#10000 | Eddy=#10,00.0
                            </Text>
                        </View>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
                        <MyAppButton
                            title="Menu Bar"
                            padding={RFPercentage(1.7)}
                            // onPress={() => }
                            backgroundColor="#cf3754"
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.1)}
                            width={"28%"}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(6), width: '80%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#885126', borderRadius: RFPercentage(0.5), width: RFPercentage(14), height: RFPercentage(4.2) }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '500' }} >
                                My Points
                            </Text>
                        </View>
                        <Text style={{ position: 'absolute', right: 0, color: Colors.white, fontSize: RFPercentage(2.2), fontWeight: '500' }} >
                            09 May 2022
                        </Text>
                    </View>

                    <Image style={{ borderRadius: RFPercentage(1), marginTop: RFPercentage(6), width: RFPercentage(37), height: RFPercentage(8) }} source={require('../../assets/logo.png')} />

                    <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <Text style={{ color: "#a22a4c", fontSize: RFPercentage(2.2), textDecorationLine: 'underline' }} >
                            Test
                        </Text>

                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#33373b', borderRadius: RFPercentage(10), width: RFPercentage(16), height: RFPercentage(6) }} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '500' }} >
                                Downloade
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;