
import './App.css'
import InputPage from './components/inputs/InputPage'
import MainModal from './components/results/MainModal'
import React from 'react';

function App() {
 
  const [modalVisible, setModalVisible] = React.useState(false);
  
  

  return (
    <> 
    {
      modalVisible && <MainModal setModalVisible={setModalVisible} />
    }
    
      <InputPage setModalVisible={setModalVisible} />   
    </>
  )
}

export default App
