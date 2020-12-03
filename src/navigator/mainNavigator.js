import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315337Navigator from '../features/BlankScreen315337/navigator';
import CopyOfBlankScreen015334Navigator from '../features/CopyOfBlankScreen015334/navigator';
import CopyOfBlankScreen115328Navigator from '../features/CopyOfBlankScreen115328/navigator';
import BlankScreen115327Navigator from '../features/BlankScreen115327/navigator';
import BlankScreen015325Navigator from '../features/BlankScreen015325/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315337: { screen: BlankScreen315337Navigator },
CopyOfBlankScreen015334: { screen: CopyOfBlankScreen015334Navigator },
CopyOfBlankScreen115328: { screen: CopyOfBlankScreen115328Navigator },
BlankScreen115327: { screen: BlankScreen115327Navigator },
BlankScreen015325: { screen: BlankScreen015325Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
