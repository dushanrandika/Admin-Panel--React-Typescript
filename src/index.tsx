import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Test from './components/Test'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Test />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
