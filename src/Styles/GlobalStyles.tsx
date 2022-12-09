import { StyleSheet } from 'react-native';
import { myColors } from './Colors';

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 65,
        height: 65,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 8,
    },
    btnDark: {
        width: 65,
        height: 65,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 8,
    },
    btnLight: {
        width: 65,
        height: 65,
        borderRadius: 24,
        backgroundColor: myColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 8,
    },
    btnGray: {
        width: 65,
        height: 65,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    row: {
        maxWidth: '95%',
        flexDirection: 'row',
        marginHorizontal: 8,
        paddingHorizontal: 10
    },
    viewButton: {
        position: 'absolute',
        bottom: 20
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }
});