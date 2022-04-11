import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  // const scene = useSelector(store => store.sceneState);
  const scene = 'home';
  // const hideFavorites = useSelector(store => store.favsList.length < 4);
  const hideFavorites = false;
  
  
  //in MainContainer: < Header scene={this.state.scene}/>
  // constructor(props) {
  //   super(props);

  // }
  // scene = props.scene;

  // const renderSwitch = () => {
  //   this.header=(<title>Title</title>);
  //   switch (scene) {
  //     case 'feed':
  //       return (
  //         <>
  //         <button id="back">Back</button>
  //         <title>Eatr</title>
  //         <button id="favorites" disabled={hideFavorites}>Back</button>
  //         </>
  //       );
  //     case 'favorites': 
  //       return (
  //         <>
  //         <button id="back">Back</button>
  //         <title>Eatr</title>
  //         <p>Congrats! Here are your liked options</p>
  //         </>
  //       );
  //     default:
  //       return (
  //         <title>Eatr</title>
  //       );
  //   }
  // }

  const renderSwitch = {
    header: <title>Eatr</title>
  }
  
  // return (
  //   <div>
  //     {renderSwitch.header}
  //     </div>
  // );

  return (
    <h2>Hello from Header</h2>
  )

}
export default Header;