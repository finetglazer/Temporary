import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AppContextProvider } from "./AppContextProvider.jsx";
import Login from "./pages/Login.jsx";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails.jsx";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import StockTableWithOrderForm from "./pages/StockTable/StockTableWithOrderForm.jsx";
import OrderHistory from "./pages/OrderHistory/OrderHistory.jsx";
import AppLayout from "./components/Layout/AppLayout.jsx";

const App = () => {
  return (
      <Router>
        <AppContextProvider>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/transaction-history" element={<TransactionHistory />} />
              <Route path="/transaction-history/:transactionId/details" element={<TransactionDetails />} />
              <Route path="/:accountId/portfolio" element={<Portfolio />}/>
              <Route path="/market" element={<StockTableWithOrderForm />} />
              <Route path="/order-history" element={<OrderHistory />} />
            </Routes>
          </AppLayout>
        </AppContextProvider>
      </Router>
  );
};

export default App;