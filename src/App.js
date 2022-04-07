import { Provider } from 'react-redux'
import store from 'store'
import './App.less';
import Example from './Views/example';

function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}

export default App;
