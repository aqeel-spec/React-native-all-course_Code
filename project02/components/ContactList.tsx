import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Aqeel Shazhad',
      status: 'Learnin react native from cresh course',
      imageUrl:
        'https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=qLwLEojs2e-R-5QdJdhDte7mYJ-pApP-ePlQO8Sghr0=',
    },
    {
      uid: 2,
      name: 'Aqeel Shazhad',
      status: 'Learnin react native from cresh course',
      imageUrl:
        'https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=qLwLEojs2e-R-5QdJdhDte7mYJ-pApP-ePlQO8Sghr0=',
    },
    {
      uid: 3,
      name: 'Aqeel Shazhad',
      status: 'Learnin react native from cresh course',
      imageUrl:
        'https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=qLwLEojs2e-R-5QdJdhDte7mYJ-pApP-ePlQO8Sghr0=',
    },
    {
      uid: 4,
      name: 'Aqeel Shazhad',
      status: 'Learnin react native from cresh course',
      imageUrl:
        'https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?b=1&s=170667a&w=0&k=20&c=qLwLEojs2e-R-5QdJdhDte7mYJ-pApP-ePlQO8Sghr0=',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}> {status} </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#EDBF69',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
  },
});
