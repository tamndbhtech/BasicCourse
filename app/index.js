import 'react-native-reanimated';
import store from './store';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}