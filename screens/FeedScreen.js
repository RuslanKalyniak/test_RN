import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Loyut} from '../src/Loyut';
import {NewsBody} from '../src/NewsBody';
const BASE_URL =
  'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json';

export const FeedScreen = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        setList(data);
      } catch (e) {
        throw e;
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <View>
      <ScrollView>
        <Loyut>
          {list.map(item => (
            <NewsBody data={item} key={item.id} />
          ))}
        </Loyut>
      </ScrollView>
    </View>
  );
};
