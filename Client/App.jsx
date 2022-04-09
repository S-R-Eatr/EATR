
import React, { component } from 'react';
import MainContainer from './Containers/MainContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <MainContainer />
          </div>
        )
    };

};

export default App;