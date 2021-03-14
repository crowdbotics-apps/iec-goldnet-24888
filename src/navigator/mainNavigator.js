import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile36214667Navigator from '../features/UserProfile36214667/navigator';
import BlankScreen31214662Navigator from '../features/BlankScreen31214662/navigator';
import Settings214661Navigator from '../features/Settings214661/navigator';
import UserProfile214654Navigator from '../features/UserProfile214654/navigator';
import Settings214653Navigator from '../features/Settings214653/navigator';
import Settings214651Navigator from '../features/Settings214651/navigator';
import SignIn2214649Navigator from '../features/SignIn2214649/navigator';
import Settings212453Navigator from '../features/Settings212453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile36214667: { screen: UserProfile36214667Navigator },
BlankScreen31214662: { screen: BlankScreen31214662Navigator },
Settings214661: { screen: Settings214661Navigator },
UserProfile214654: { screen: UserProfile214654Navigator },
Settings214653: { screen: Settings214653Navigator },
Settings214651: { screen: Settings214651Navigator },
SignIn2214649: { screen: SignIn2214649Navigator },
Settings212453: { screen: Settings212453Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
