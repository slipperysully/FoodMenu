import * as React from "react";
import { Text, View, List, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFood: [],
      dataCategories: [],
      loading: false,
      selectCatg: 0
    };
  }

  componentDidMount() {
    const url = "https://tutofox.com/foodapp/api.json";
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataCategories: responseJson.categories,
          dataFood: responseJson.food
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    // Screens
    function AmericanScreen() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <List>
            <FlatList
              //horizontal={true}
              data={this.state.dataFood}
              renderItem={({ item }) => this._renderItemFood(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </List>
        </View>
      );
    }

    function BurgerScreen() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Settings!</Text>
        </View>
      );
    }

    function PizzaScreen() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Home!</Text>
        </View>
      );
    }

    function DrinkScreen() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Home!</Text>
        </View>
      );
    }

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="American" component={AmericanScreen} />
          <Tab.Screen name="Burger" component={BurgerScreen} />
          <Tab.Screen name="Pizza" component={PizzaScreen} />
          <Tab.Screen name="Drink" component={DrinkScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
