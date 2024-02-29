/**
 *
 * TodoTaskModal Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const TodoTaskModalStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: MainTheme.colors.background,
    paddingTop: 26,
    paddingHorizontal: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 15,
  },
  subtaskContainer: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: MainTheme.colors.background,
    paddingTop: 26,
    paddingHorizontal: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    color: MainTheme.colors.modalNav,
    fontSize: 16,
  },
  headerLabel: {
    fontSize: 16,
    color: MainTheme.colors.dateHeader,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  subtaskBodyContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  inputLabel: {
    color: MainTheme.colors.dateHeader,
    fontWeight: '700',
    marginBottom: 8,
  },
  inputStyle: {
    height: 45,
    padding: 10,
    borderRadius: 8,
    backgroundColor: MainTheme.colors.nonPrioCard,
    color: MainTheme.colors.dateHeader,
  },
  dateLabel: {
    color: MainTheme.colors.dateLabel,
  },
  descriptionStyle: {
    marginTop: 8,
    height: 185,
    padding: 10,
    borderRadius: 8,
    backgroundColor: MainTheme.colors.nonPrioCard,
    color: MainTheme.colors.dateHeader,
  },
});

export default TodoTaskModalStyles;
