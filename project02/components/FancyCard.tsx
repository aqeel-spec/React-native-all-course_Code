import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1628755615663-d14c78ed24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFkc2hhaGklMjBtb3NxdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Badshahi Mosque</Text>
          <Text style={styles.cardLabel}>Lahore , Pakistan</Text>
          <Text style={styles.cardDes}>
            The Badshahi Mosque was constructed by the Mughal emperor Aurangzeb
            between 1671 and 1673 and was the largest mosque in the world from
            1673 to 1986.
          </Text>
          <Text style={styles.cardFooter}>170 km away from me</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 4,
    color: '#FFFFFF',
  },
  cardLabel: {
    // fontWeight: 'bold',
    fontSize: 14,
    color: '#50DBB4',
    marginBottom: 6,
  },
  cardDes: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#5DA3FA',
  },
});
