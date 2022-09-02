import { View,Text } from "react-native"
import React, { useState } from 'react';

import { TouchableOpacity } from "react-native-gesture-handler"
// import { Text } from "react-native-svg"
// import { Descending } from "src/constans/icons"
import { styles } from "src/style/style"
import theme from "theme/globalTheme"
import { OButton } from "./OButton";


export const ToggleButton= (props:any) =>{
    return(
        <View style={styles.sort}>
            <OButton
            currentButton={props.currentButton}
            setCurrentButton={props.setCurrentButton}
            title={'Ascending'}
            setSort={props.setSort}
            />

            <OButton
            currentButton={props.currentButton}
            setCurrentButton={props.setCurrentButton}
            title={'Descending'}
            setSort={props.setSort}
            />
        </View>
)
}