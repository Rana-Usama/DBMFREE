import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//components
import MyAppButton from './../components/common/MyAppButton';
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={styles.screen}>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={styles.playFreeTextContainer} >
                        <Text style={{ fontSize: RFPercentage(2.5), color: Colors.yellow, fontWeight: 'bold' }} >
                            Play FREE win REAL !!
                        </Text>
                    </View>

                    <View style={styles.howDoesItWorkContainer} >
                        <Text style={styles.howDoesItWorkText} >
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
                        <View style={styles.winner} >
                            <Text style={styles.winnerText} >
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

                    <View style={styles.pointsContainer} >
                        <View style={styles.myPointsSubContainer} >
                            <Text style={{ color: Colors.white, fontSize: RFPercentage(2), fontWeight: '500' }} >
                                My Points
                            </Text>
                        </View>
                        <Text style={styles.date} >
                            09 May 2022
                        </Text>
                    </View>

                    <Image style={styles.image} source={require('../../assets/logo.png')} />

                    <View style={styles.downloadeContainer} >
                        <Text style={{ color: "#a22a4c", fontSize: RFPercentage(2.2), textDecorationLine: 'underline' }}>
                            Test
                        </Text>

                        <TouchableOpacity activeOpacity={0.8} style={styles.downloade} >
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    playFreeTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(6),
        width: '88%',
        height: RFPercentage(8),
        borderRadius: RFPercentage(1.2),
        backgroundColor: Colors.secondary
    },
    howDoesItWorkContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFPercentage(6),
        width: '88%',
        height: RFPercentage(8),
        borderRadius: RFPercentage(1.2),
        backgroundColor: Colors.secondary
    },
    howDoesItWorkText: {
        marginLeft: RFPercentage(2),
        fontSize: RFPercentage(2.5),
        color: Colors.white,
        fontWeight: '600'
    },
    winner: {
        marginTop: RFPercentage(3),
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: RFPercentage(6.5),
        borderColor: Colors.secondary,
        borderWidth: RFPercentage(0.1),
        borderRadius: RFPercentage(1)
    },
    winnerText: {
        marginLeft: RFPercentage(1),
        color: Colors.white,
        fontSize: RFPercentage(2.2)
    },
    pointsContainer: {
        marginTop: RFPercentage(6),
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    myPointsSubContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#885126',
        borderRadius: RFPercentage(0.5),
        width: RFPercentage(14),
        height: RFPercentage(4.2)
    },
    date: {
        position: 'absolute',
        right: 0,
        color: Colors.white,
        fontSize: RFPercentage(2.2),
        fontWeight: '500'
    },
    image: {
        borderRadius: RFPercentage(1),
        marginTop: RFPercentage(6),
        width: RFPercentage(37),
        height: RFPercentage(8)
    },
    downloadeContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    downloade: {
        marginLeft: RFPercentage(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33373b',
        borderRadius: RFPercentage(10),
        width: RFPercentage(16),
        height: RFPercentage(6)
    }

})

export default HomeScreen;