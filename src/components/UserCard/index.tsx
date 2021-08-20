import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Person} from '../../utils/person';

// import { Container } from './styles';

const UserCard = ({data}: Person) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {data});
      }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: data.avatar}}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.subtitlesText}>{`Idade: ${data?.age
              ?.toString()
              .substring(0, 2)}`}</Text>
            <Text style={styles.subtitlesText}>{`Email: ${data.email}`}</Text>
            <Text
              style={styles.subtitlesText}>{`Empresa: ${data.company}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 42,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitlesText: {
    fontSize: 16,
  },
  textsContainer: {
    marginTop: 20,
    marginLeft: 24,
  },
});

export default UserCard;
