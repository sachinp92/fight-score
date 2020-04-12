import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const FightRoundDisplay = ({ currentRound, fightLength }) => <Text>Round {currentRound} of {fightLength}</Text>;

export default connect(({ currentRound, fightLength }) => ({ currentRound, fightLength }))(FightRoundDisplay);