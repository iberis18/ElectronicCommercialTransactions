import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { NavMenu } from './components/navMenu/NavMenu';
import { AllPurchases } from './components/purchases/purchasesListPages/AllPurchases';
import { MyPurchases } from './components/purchases/purchasesListPages/MyPurchases';
import NewPurchases from './components/purchases/newPurchases/NewPurchases';
import AllSte from './components/ste/allSte/AllSte';
import MySte from './components/ste/mySte/mySte';
import NewSte from './components/ste/newSte/NewSte';
import Companies from './components/companies/Companies';
import Win from './components/transactions/win/Win';
import Participation from './components/transactions/participation/Participation';
import './App.sass';
import { Purchase } from './components/purchases/purchase/Purchase';

function App() {
  return (
    <BrowserRouter>
      <main className='page-container'>
        <NavMenu />
        <div className='page-container__element'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/allPurchases" element={<AllPurchases />} />
            <Route path="/myPurchases" element={<MyPurchases />} />
            <Route path="/newPurchases" element={<NewPurchases />} />
            <Route path="/allSte" element={<AllSte />} />
            <Route path="/mySte" element={<MySte />} />
            <Route path="/newSte" element={<NewSte />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/win" element={<Win />} />
            <Route path="/participation" element={<Participation />} />
            <Route path="/purchase/:id" element={<Purchase /> } />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;