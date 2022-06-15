import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy";
import { FavoritesContext } from "../store/context/favorite-context";


function FavoriteScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (<View styles={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>)
    }
    return <MealsList items={favoriteMeals}/>
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
    }
})