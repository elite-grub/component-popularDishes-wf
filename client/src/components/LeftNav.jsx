import React from 'react';

import '../../dist/styles.css';

// class LeftNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <span className="left-nav">
//         <h5>svg tag of left arrow</h5>
//       </span>
//     );
//   }
// }

const LeftNav = () => (
  <div className="left-nav">
    <img height="18" width="18" src="https://s3-us-west-1.amazonaws.com/elite-grub-photos/Ic_chevron_left_48px.svg"></img>
  </div >
);

export default LeftNav;
