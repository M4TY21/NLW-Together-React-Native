import React, { useState } from 'react';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { FlatList, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '20/02 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '20/02 ás 20:40',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd activeOpacity={0.8}/>
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        hasChecked={false}
      />

      <View style={styles.content}>

        <ListHeader
          title="Partidas Agendadadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <ListDivider/>}
          renderItem={({ item }) => (
            <Appointment data={item} activeOpacity={0.8}/>
          )}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
}