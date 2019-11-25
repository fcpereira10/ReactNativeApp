import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import RegisterCustomer from './RegisterCustomer';
import RegisterCompany from './RegisterCompany';
import { ScrollView } from 'react-native-gesture-handler';


type State = NavigationState<{
  key: string;
  title: string;
}>;

class ScrollableTabBar extends Component<
  {},
  State
> {
  // eslint-disable-next-line react/sort-comp
  static title = 'Scrollable tab bar';
  static backgroundColor = '#ffffff';
  static appbarElevation = 0;

  state = {
    index: 1,
    routes: [
      { key: 'registerCustomer', title: 'Cliente' },
      { key: 'registerCompany', title: 'Empresa' },
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  private renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
    />
  );

  private renderScene = SceneMap({
    registerCustomer: RegisterCustomer,
    registerCompany: RegisterCompany,
  });

  render() {
    return (
      <ScrollView scrollEnabled={false}>
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#ffffff',
  },
  indicator: {
    backgroundColor: '#C87C4B',
  },
  label: {
    fontWeight: '400',
    color: '#000000',
  },
});

export default ScrollableTabBar;