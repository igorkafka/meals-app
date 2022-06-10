import { Text, Image, View, ScrollView} from "react-native";
import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation}) {
    function headerButtonPressHandler() {
        console.log('pressed');
    }
    useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () =>{
              return <IconButton color="white" onPress={headerButtonPressHandler} icon="star"/>
          }
      })
    }, [navigation, headerButtonPressHandler])
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    console.log(selectedMeal.ingredients)
    
    return (<ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>
            {selectedMeal.title}
        </Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText}/>
       <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}/>
        <Subtitle>Steps</Subtitle>
         <List data={selectedMeal.steps}/>
         </View>
         </View>
    </ScrollView>)
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    }, 
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})