import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestuarantShowScreen from "./src/screens/RestuarantShowScreen";


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestuarantShow: RestuarantShowScreen
   
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business search",
    },
  }
);

export default createAppContainer(navigator);
