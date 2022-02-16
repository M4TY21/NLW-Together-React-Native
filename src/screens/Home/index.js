import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile/index';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';
import { CategorySelect } from '../../components/CategorySelect/index';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd activeOpacity={0.8}/>
      </View>

      <View>
        <CategorySelect/>
      </View>
    </View>
  )
}