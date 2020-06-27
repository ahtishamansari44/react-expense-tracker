import React from 'react';
import {Header} from './components/header'
import {Balance} from './components/balance'
import {IncomExpenses} from './components/incomExpenses'
import {TranactionList} from './components/tranactionList'
import {AddTransaction} from './components/addTransaction'
import {TransProvider} from './transContext'

import './App.css';



function App() {
  return (
    <TransProvider>
    <div className="container">
     <Header />
     <Balance />
     <IncomExpenses />
     <TranactionList />
     <AddTransaction />
    </div>
    </TransProvider>
  );
}

export default App;
