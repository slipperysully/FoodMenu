import _ from "lodash";
import * as React from "react";
import { Text, View, Image, FlatList, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const FoodContext = React.createContext({
  food: {}
});

function AmericanScreen() {
  const { food } = React.useContext(FoodContext);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Menú" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <FlatList
        data={food["1"]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Image
              style={{ width: 90, height: 90, marginTop: 5 }}
              source={{ uri: item.image }}
            />
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: "center", color: "red", fontSize: 18 }}>
              Precio: {item.price} usd{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

function BurgerScreen() {
  const { food } = React.useContext(FoodContext);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Menú" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <FlatList
        data={food["2"]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Image
              style={{ width: 90, height: 90, marginTop: 5 }}
              source={{ uri: item.image }}
            />
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: "center", color: "red", fontSize: 18 }}>
              Precio: {item.price} usd{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

function PizzaScreen() {
  const { food } = React.useContext(FoodContext);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Menú" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <FlatList
        data={food["3"]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Image
              style={{ width: 90, height: 90, marginTop: 5 }}
              source={{ uri: item.image }}
            />
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: "center", color: "red", fontSize: 18 }}>
              Precio: {item.price} usd{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

function DrinkScreen() {
  const { food } = React.useContext(FoodContext);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Menú" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <FlatList
        data={food["4"]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Image
              style={{ width: 90, height: 90, marginTop: 5 }}
              source={{ uri: item.image }}
            />
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: "center", color: "red", fontSize: 18 }}>
              Precio: {item.price} usd{" "}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default class App extends React.Component {
  state = {
    food: [],
    loading: false,
    selectCatg: 0
  };

  componentDidMount() {
    const url = "https://tutofox.com/foodapp/api.json";
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        const food = _.groupBy(responseJson.food, "categorie");

        this.setState({
          food,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <FoodContext.Provider
        value={{
          food: this.state.food
        }}
      >
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="American" component={AmericanScreen} />
            <Tab.Screen name="Burger" component={BurgerScreen} />
            <Tab.Screen name="Pizza" component={PizzaScreen} />
            <Tab.Screen name="Drink" component={DrinkScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </FoodContext.Provider>
    );
  }
}
