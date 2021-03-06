import React, { Component } from 'react';
import PostList from './components/PostList'
import Modal from './components/Modal'
import Login from './pages/Login'
import Header from './containers/Header'
import Banner from './containers/Banner'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: true
    }
  }
  //close modal
  closeModal = () => {
    this.setState({
      showModal:false
    })
  }
  render() {
    return (
      <>
      <Header/>
      <Banner/>
      </>
      //  <div>
      //    <h2>Dashbord</h2>
      //    {
      //      this.state.showModal && (
      //        <Modal onClose={ this.closeModal } >Modal Dialog </Modal>
      //      )
      //    }
      //  </div>
    );
  }
}
// function App() {
//   return (
//     <div>
//       <PostList/>
//     </div>
//   );
// }

export default App;
