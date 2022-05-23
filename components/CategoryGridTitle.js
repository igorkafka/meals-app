import {Pressable, View, Text, StyleSheet} from 'react-native'


function CategoryGridTitle({title, color}) 
{
    return <View>
        <Pressable>
        <View>
            <Text>
                {
                    title
                }
            </Text>
        </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    
})

export default CategoryGridTitle;