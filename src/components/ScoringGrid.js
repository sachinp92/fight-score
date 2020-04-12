import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import SingleRoundScore from './SingleRoundScore';

const ScoringGrid = ({
  fighterOneRoundScores,
  fighterTwoRoundScores,
  fightLength
}) => {
  return (<View style={{alignItems: 'center'}}>
    <Text>Rounds</Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={fighterOneRoundScores}
          renderItem={({ item, index }) => <View style={{backgroundColor: '#dee', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}><Text>{index + 1}</Text></View>}
        />
        <FlatList
          data={fighterOneRoundScores}
          renderItem={({ item }) => <View style={{backgroundColor: '#dee', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}><Text>{item}</Text></View>}
        />
        <FlatList
          data={fighterTwoRoundScores}
          renderItem={({ item }) => <View style={{backgroundColor: '#dee', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}><Text>{item}</Text></View>}
        />
      </View>
    </View>
  </View>);
};

const mapStateToProps = ({
  fighterOneRoundScores,
  fighterTwoRoundScores,
  fightLength
}) => ({
  fighterOneRoundScores,
  fighterTwoRoundScores,
  fightLength
});

export default connect(mapStateToProps)(ScoringGrid);