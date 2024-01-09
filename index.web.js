import {AppRegistry} from 'react-native';
import App from './App';
import name from './app.json';

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
