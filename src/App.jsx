import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import AboutUs from "./components/AboutUs";
import { Services } from "./components/Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="faqs" element={<FAQs />} />
      <Route path="contact" element={<Contact />} />
       */}
        {/* Assuming you want to include sub-routes for services */}
        {/* <Route path="services/home-loan" element={<HomeLoan />} />
      <Route path="services/first-home-buyer" element={<FirstHomeBuyer />} />
      <Route path="services/refinancing" element={<Refinancing />} />
      <Route path="services/commercial-loan" element={<CommercialLoan />} />
      <Route path="services/asset-finance" element={<AssetFinance />} />
      <Route path="services/personal-loan" element={<PersonalLoan />} />
      <Route path="services/smsf-lending" element={<SMSFLending />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
