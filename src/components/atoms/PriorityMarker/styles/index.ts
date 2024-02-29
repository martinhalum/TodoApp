/**
 *
 * PriorityMarker Styles
 *
 */

import {StyleSheet} from 'react-native';
import {MainTheme} from 'theme';

const Wrapper = {
  width: 55,
  height: 15,
  borderRadius: 15,
};

const PriorityMarkerStyles = StyleSheet.create({
  prioWrapper: {
    ...Wrapper,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainTheme.colors.prioPill,
  },
  nonPrioWrapper: {
    ...Wrapper,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainTheme.colors.nonPrioPill,
  },
  nonPrio: {
    ...Wrapper,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: MainTheme.colors.submitLabel,
  },
  nonPrioLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: MainTheme.colors.nonPrioLabel,
  },
});

export default PriorityMarkerStyles;
