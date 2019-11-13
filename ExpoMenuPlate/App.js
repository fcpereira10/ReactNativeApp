import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.container}>Music</Text>
    </View>
  );
}

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {

  const [navigationState, setNavigationState] = useState({
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  });

  const indexChangeHandler = (index) => {
    setNavigationState({
      ...navigationState,
      index: index
    });
  };

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
