import { View,Text, StyleSheet} from "react-native";



function Subtitle({children}) {
    return <View tyle={styles.subTitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
    </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitleContainer: {
        padding: 6,
        marginHorizontal: 12    ,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})