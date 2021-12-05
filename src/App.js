import React from 'react';
import './App.css';
import Learn from './learn';

function App() {
  return (
    <div className="App">
      <Learn serverLess="Serverless Full Stack Development" serverlessAI="Serverless AI, BlockChain,and Cloud Development "/>
      <hr/>
      <Learn internship="MEAN Stack Developer" />
      
    </div>
  );
}

export default App;
