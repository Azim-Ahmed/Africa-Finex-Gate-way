import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import BuyerSecondPage from "./components/buyer/BuyerSecondPage";
import LocalbankthirdPage from "./components/buyer/LocalBankThirdPage";
import SelectedCoin from "./components/buyer/SelectedCoin";
import SuccessBuy from "./components/buyer/SuccessBuy";
import TransferOfBuyer from "./components/buyer/TransferOfBuyer";
import Footer from "./components/Footer/Footer";
import NavSection from "./components/Header/NavSection";
import NoServices from "./components/NoServices/NoServices";
import SellFinishedInfo from "./components/Seller/SellFinishedInfo";
import SellIBANaccountDetails from "./components/Seller/SellIBANaccountDetails";
import SellTXIDGenerate from "./components/Seller/SellTXIDGenerate";
import StableCoinSellOne from "./components/Seller/StableCoinSellOne";
import StableCoinSellTwo from "./components/Seller/StableCoinSellTwo";

//created store with createContext
export const UserContext = createContext()

function App() {

  //root states of this whole application
  const [buyerDataPost, setBuyerDataPost] = useState({
    name: "",
    bankName: "",
    quantityItem: "",
    walletId: "",
    swapId: ''
  })
  const [sellerData, setSellerData] = useState({
    token: "",
    sellingQuantity: "",
    walletAddress: "",
    IBANAcc: "",
    TXID: "",
    TXIdInfo: ""
  })

  return (
    <UserContext.Provider value={{
      buyerDataPost,
      setBuyerDataPost,
      sellerData,
      setSellerData
    }}>
      <Router>
        <NavSection />
        <Switch>
          <Route exact path="/">
            <SelectedCoin />
          </Route>
          <Route path="/buyerSecondPage">
            <BuyerSecondPage />

          </Route>
          <Route path="/localbank">
            <LocalbankthirdPage />
          </Route>
          <Route path="/transferofbuyer">
            <TransferOfBuyer />
          </Route>
          <Route path="/success">
            <SuccessBuy />
          </Route>
          <Route path="/stablecoinsellone">
            <StableCoinSellOne />
          </Route>
          <Route path="/stablecoinselltwo">
            <StableCoinSellTwo />
          </Route>
          <Route path="/sellibnaccount">
            <SellIBANaccountDetails />
          </Route>
          <Route path="/selltxidgenerate">
            <SellTXIDGenerate />
          </Route>
          <Route path="/sellfinishedinfo">
            <SellFinishedInfo />
          </Route>
          <Route path="/*">
            <NoServices />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
