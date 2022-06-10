import { FlatList} from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle';

import { CATEGORIES } from './../data/dummy';




function CatogoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) 
{
    function pressHanlder() {
        navigation.navigate('MealsOverView', {
            categoryId: itemData.item.id
         });
    }
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHanlder}/>
}
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
}

export default CatogoriesScreen;