import React, { useState } from 'react';
import { CategorySelect } from '../../components/CategorySelect';
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
      guid: {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd activeOpacity={0.8}/>
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>

          <ListHeader
            title="Partidas Agendadadas"
            subtitle="Total "
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Text> { item.guid.name } </Text>
            )}
          />

        </View>
      </View>
    </View>
  )
}