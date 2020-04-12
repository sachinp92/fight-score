import React from 'react';
import { Button } from 'react-native';
const RoundScoreButton = ({ nextPage }) => <Button title="Score Round" onPress={() => nextPage()} />;
export default RoundScoreButton;