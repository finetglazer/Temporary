import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppContextProvider } from "./AppContextProvider.jsx";
// import Deposit from "./pages/Deposit/Deposit.jsx";
// import Disable2FA from "./pages/Disable2FA/Disable2FA.jsx";
// import ForgetPassword from "./pages/ForgetPassword";
// import HeaderNavbar from "./pages/HeaderNavbar/HeaderNavbar";
// import Home from "./pages/Home/Home";
import Login from "./pages/Login";
// import NavbarSide from "./pages/NavbarSide/NavbarSide";
// import PaymentMethodsManagement from "./pages/PaymentMethod/PaymentMethodsManagement.jsx";
// import Register from "./pages/Register";
// import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
// import TwoFactorAuthenticationSettings from "./pages/SettingPage/2FASettings/2FASettings.jsx";
// import ChangePassword from "./pages/SettingPage/ChangePassword/ChangePassword.jsx";
// import GenerateRecoveryKeys from "./pages/SettingPage/GenerateRecoveryKeys/GenerateRecoveryKeys.jsx";
// import Setting from "./pages/SettingPage/Setting";
// import Support from "./pages/Support";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails.jsx";
import TransactionHistory from "./pages/TransactionHistory/TransactionHistory.jsx";
// import Enable2FA from "./pages/Enable2FA/Enable2FA.jsx";
// import UpdatePhoneNumber from "./pages/UpdatePhoneNumber/UpdatePhoneNumber.jsx";
// import Wallet from "./pages/Wallet.jsx";
// import Withdraw from "./pages/Withdraw/Withdraw.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
// import DepositChoosePaymentMethod from "./pages/Deposit/DepositChoosePaymentMethod.jsx";
// import WithdrawChoosePaymentMethod from "./pages/Withdraw/WithdrawChoosePaymentMethod.jsx";
// import TwoFaVerification from "./pages/2FaVerification/TwoFaVerification.jsx";
import StockTable from "./pages/StockTable/StockeTable.jsx";
import StockTableWithOrderForm from "./pages/StockTable/StockTableWithOrderForm.jsx";


const Layout = () => {
  const location = useLocation();
  const showNavbar = ["/home", "/wallet", "/support", "/setting"].includes(
    location.pathname
  );

  return (
    <>
      {showNavbar && <NavbarSide />}
      {showNavbar && <HeaderNavbar />}
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/*<Route path="/register" element={<Register />} />*/}
          {/*<Route path="/forget-password" element={<ForgetPassword />} />*/}
          {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
          {/*<Route path="/home" element={<Home />} />*/}
          {/*<Route path=":accountId/withdraw/choose-payment-method" element={<WithdrawChoosePaymentMethod />} />*/}
          {/*<Route path=":accountId/withdraw/:paymentMethodId" element={<Withdraw/>} />*/}
          {/*<Route path=":accountId/deposit/choose-payment-method" element={<DepositChoosePaymentMethod />} />*/}
          {/*<Route path=":accountId/deposit/:paymentMethodId" element={<Deposit/>} />*/}
          {/*<Route path="/wallet" element={<Wallet />} />*/}
          {/*<Route path="/support" element={<Support />} />*/}
          {/*<Route path="/setting" element={<Setting />} />*/}
          {/*<Route path="/setting/2fa-settings" element={<TwoFactorAuthenticationSettings />} />*/}
          {/*<Route path="/setting/change-password" element={<ChangePassword />} />*/}
          {/*<Route path="/setting/generate-recovery-keys" element={<GenerateRecoveryKeys />} />*/}
          {/*<Route path="/payment-methods" element={<PaymentMethodsManagement />} />*/}
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/transaction-history/:transactionId/details" element={<TransactionDetails />} />
          {/*<Route path="/two-factor-auth" element={<Enable2FA />} /> /!* Add this route *!/*/}
          {/*<Route path="/2fa-verify" element={<TwoFaVerification />} />*/}
          {/*<Route path="/profile/update-phone" element={<UpdatePhoneNumber />} />*/}
          {/*<Route path="/profile/disable2FA" element={<Disable2FA />} />*/}
          <Route path="/:accountId/portfolio" element={<Portfolio />}/>
          {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
          <Route path="/market" element={<StockTableWithOrderForm />} />
        </Routes>
      </AppContextProvider>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
