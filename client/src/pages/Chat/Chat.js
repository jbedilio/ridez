// import React, {Component} from 'react';
// import io from './../../utils/io.js';

// class Chat extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             message: "",
//             currentMessage: ""
//         };

//     commponentDidMount() {
//         this.subscribeToChat((err, message) => {
//             this.setState({
//                 message
//             });
//         });
//     };

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         if(this.state.message) {

//         }
//     }

//     render() {
//         return (
//             <div className="chatContainer">
//                 <p className="message" id="m"></p>
//             </div>
//         );
//     };

// }

    

// // import { subscribeToTimer } from './../../utils/io.js';

// // class Chat extends React.Component {

// //     constructor(props) {
// //         super(props)

// //         this.state = {
// //             timestamp: 'no timestamp yet'
// //         };


// //         subscribeToTimer((err, timestamp) => this.setState({
// //             timestamp
// //         }));
// //     }

// //     render() {
// //         return (
// //             <div className="App">
// //                 <p className="App-intro">
// //                     This is the timer value: {this.state.timestamp}
// //                 </p>
// //             </div>
// //         );
// //     }
// // }

// // export default Chat;