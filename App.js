import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import FadeInScreen from './screens/FadeInScreen';
import SequenceScreen from './screens/SequenceScreen';
import ParallelScreen from './screens/ParallelScreen';
import StaggerScreen from './screens/StaggerScreen';
import InterpolateScreen from './screens/InterpolateScreen';
import LayoutScreen from './screens/LayoutScreen';
import FadeInScreenHook from './screens/FadeInScreenHook';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  FadeIn: FadeInScreenHook,
  Sequence: SequenceScreen,
  Parallel: ParallelScreen,
  Stagger: StaggerScreen,
  Interpolation: InterpolateScreen,
  LayoutAnimation: LayoutScreen,
});

export default createAppContainer(AppNavigator);
