import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen315346Navigator from '../features/CopyOfBlankScreen315346/navigator';
import CopyOfBlankScreen315345Navigator from '../features/CopyOfBlankScreen315345/navigator';
import CopyOfBlankScreen315344Navigator from '../features/CopyOfBlankScreen315344/navigator';
import CopyOfBlankScreen315343Navigator from '../features/CopyOfBlankScreen315343/navigator';
import CopyOfBlankScreen315342Navigator from '../features/CopyOfBlankScreen315342/navigator';
import CopyOfBlankScreen315341Navigator from '../features/CopyOfBlankScreen315341/navigator';
import CopyOfBlankScreen315340Navigator from '../features/CopyOfBlankScreen315340/navigator';
import CopyOfBlankScreen315339Navigator from '../features/CopyOfBlankScreen315339/navigator';
import CopyOfBlankScreen315338Navigator from '../features/CopyOfBlankScreen315338/navigator';
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
CopyOfBlankScreen315346: { screen: CopyOfBlankScreen315346Navigator },
CopyOfBlankScreen315345: { screen: CopyOfBlankScreen315345Navigator },
CopyOfBlankScreen315344: { screen: CopyOfBlankScreen315344Navigator },
CopyOfBlankScreen315343: { screen: CopyOfBlankScreen315343Navigator },
CopyOfBlankScreen315342: { screen: CopyOfBlankScreen315342Navigator },
CopyOfBlankScreen315341: { screen: CopyOfBlankScreen315341Navigator },
CopyOfBlankScreen315340: { screen: CopyOfBlankScreen315340Navigator },
CopyOfBlankScreen315339: { screen: CopyOfBlankScreen315339Navigator },
CopyOfBlankScreen315338: { screen: CopyOfBlankScreen315338Navigator },
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
