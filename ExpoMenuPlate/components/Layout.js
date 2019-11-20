import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, BottomNavigation, Text, Button } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// const HomeScreen = () => {
//     return (
//         <View>
//             <Text>Home Screen</Text>
//         </View>
//     );
// };

const Layout = () => {
    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
    });

    const indexChangeHandler = (index) => {
        setNavigationState({
            ...navigationState,
            index: index
        });
    };

    const [navigationState, setNavigationState] = useState({
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'queue-music' },
        ],
    });

    return (
        <PaperProvider theme={theme}>
            <BottomNavigation
                navigationState={navigationState}
                onIndexChange={indexChangeHandler}
                renderScene={renderScene}
            />
        </PaperProvider>
    );
};

export default Layout;