/**
 *
 * Footer
 *
 */

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '@navigation/stack/types';
import useUserStore from '@providers/UserProvider';

import FooterStyles from './styles';

import type {PropsType} from './types';

/**
 * Renders a footer view with icons.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onPressAdd - A function to be called when the add button is pressed.
 *
 * @returns A React-Native element representing the footer view with icons.
 */
function Footer({onPressAdd}: PropsType): React.ReactElement {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const {user} = useUserStore(state => ({
    user: state.user,
  }));

  return (
    <View style={FooterStyles.container}>
      <TouchableOpacity>
        <IconFa5 name="home" size={24} style={FooterStyles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="Add"
        style={FooterStyles.addContainer}
        onPress={onPressAdd}
        disabled={user === null}>
        <IconFa5 name="plus" size={20} style={FooterStyles.addIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Ionicons name="person-outline" size={26} style={FooterStyles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
