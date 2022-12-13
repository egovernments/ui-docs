import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/navbar/Header";
import Components from "./Pages/components/Components";
import ComponentsTextInput from "./Pages/components/ComponentsTextInput";
import Foundations from "./Pages/foundations/Foundations";
import FoundationsColor from "./Pages/foundations/FoundationsColor";
import FoundationsTypography from "./Pages/foundations/FoundationsTypography";
import FoundationsIconography from "./Pages/foundations/FoundationsIconography";
import Brand from "./Pages/brand/Brand";
import ComponentsHeader from "./Pages/components/ComponentsHeader";
import Input from "./Pages/components/Input";
import RadioPage from "./Pages/components/RadioPage";
import CheckboxPage from "./Pages/components/CheckboxPage";
import ButtonPage from "./Pages/components/ButtonPage";
import ToastMessagePage from "./Pages/components/ToastMessagePage";
import CardsPage from "./Pages/components/CardsPage";
import BannerPage from "./Pages/components/BannerPage";
import BreadCrumbsPage from "./Pages/components/BreadCrumbsPage";
import RatingPage from "./Pages/components/RatingPage";
import ImageViewerPage from "./Pages/components/ImageViewerPage";
import NumbersPage from "./Pages/components/NumbersPage";
import DropDownsPage from "./Pages/components/DropDownsPage";
import UploadFilesPage from "./Pages/components/UploadFilesPage";
import MissionPage from "./Pages/brand/MissionPage";
import PersonalityPage from "./Pages/brand/PersonalityPage";
import PromisePage from "./Pages/brand/PromisePage";
import ValuesPage from "./Pages/brand/ValuesPage";
import ContentPage from "./Pages/content/ContentPage";
import BackLinksPage from "./Pages/components/BackLinksPage";
import ErrorMessagePage from "./Pages/components/ErrorMessagePage";
import DateInputPage from "./Pages/components/DateInputPage";
import FooterPage from "./Pages/components/FooterPage";
import InsetTextPage from "./Pages/components/InsetTextPage";
import NotificationBannerPage from "./Pages/components/NotificationBannerPage";
import PanelPage from "./Pages/components/PanelPage";
import PhaseBannerPage from "./Pages/components/PhaseBannerPage";
import PaginationPage from "./Pages/components/PaginationPage";
import RadioButtonsPage from "./Pages/components/RadioButtonsPage";
import SelectPage from "./Pages/components/SelectPage";
import SkipLinkPage from "./Pages/components/SkipLinkPage";
import SummaryListPage from "./Pages/components/SummaryListPage";
import TablePage from "./Pages/components/TablePage";
import TabsPage from "./Pages/components/TabsPage";
import TagPage from "./Pages/components/TagPage";
import SideNavPage from "./Pages/components/SideNavPage";
import PopUpPage from "./Pages/components/PopUpPage";
import TextAreaPage from "./Pages/components/TextAreaPage";
import WarningTextPage from "./Pages/components/WarningTextPage";
import ErrorSummaryPage from "./Pages/components/ErrorSummaryPage";
import FieldSetPage from "./Pages/components/FieldSetPage";
import DesignPrinciplesPage from "./Pages/brand/DesignPrinciplesPage";
import FoundationsAccessibility from "./Pages/foundations/FoundationsAccessibility";
import BrandingPage from "./Pages/brand/BrandingPage";
import VoiceTonePage from "./Pages/content/VoiceTonePage"
import LanguageSelection from "./Components/patterns/LanguageSelection";
import CitySelection from "./Components/patterns/CitySelection"
import MobileVerification from "./Components/patterns/MobileVerification";
import DocumentRequired from "./Components/patterns/DocumentsRequired";
import Address from "./Components/patterns/Address"
import DocumentsUpload from "./Components/patterns/DocumentsUpload";
import ApplicationSummary from "./Components/patterns/ApplicationSummary";
import Payment from "./Components/patterns/Payment";
import PaymentSuccess from "./Components/patterns/PaymentSuccess";
import CollectFeedback from "./Components/patterns/CollectFeedback";
import EmployeeCollectPayment from "./Components/patterns/EmployeeCollectPayment";
import EmployeeLogin from "./Components/patterns/EmployeeLogin";
import CounterEmployeeForm from "./Components/patterns/CounterEmployeeForm";
import DashboardLanding from "./Components/patterns/DashboardLanding";
import Search from "./Components/patterns/Search";
import Dashboard from "./Components/patterns/Dashboard";
import ResourcesOnePage from "./Components/resources/ResourcesOnePage";
import ApplicationStatus from "./Components/patterns/ApplicationStatus";
import EmployeeDashboard from "./Components/patterns/EmployeeDashboard";
import EmployeeInbox from "./Components/patterns/EmployeeInbox";
import Report from "./Components/patterns/Report";
import Footer from "./Components/componentspage/Footer";
// import { Body, TopBar } from "@egov/digit-ui-react-components"; // for component use

function App() {
  window.Digit = window.Digit || {};

  // return (
  //   <>
  //     <Router>
  //       <Header />
  //       <Switch>
  //         <Route exact path="/ui-docs">
  //           <Home />
  //         </Route>
  //         <Route exact path="/ui-docs/components">
  //           <Components />
  //         </Route>
  //         <Route exact path="/ui-docs/components/text-input">
  //           <ComponentsTextInput />
  //         </Route>
  //         <Route exact path="/ui-docs/components/header">
  //           <ComponentsHeader />
  //         </Route>
  //         <Route exact path="/ui-docs/components/input">
  //           <Input />
  //         </Route>
  //         <Route exact path="/ui-docs/components/radio">
  //           <RadioPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/checkbox">
  //           <CheckboxPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/button">
  //           <ButtonPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/banner">
  //           <BannerPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/toast-message">
  //           <ToastMessagePage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/text-area">
  //           <TextAreaPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/warning-text">
  //           <WarningTextPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/error-summary">
  //           <ErrorSummaryPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/field-set">
  //           <FieldSetPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/cards">
  //           <CardsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/breadcrumbs">
  //           <BreadCrumbsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/ratings">
  //           <RatingPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/image-viewer">
  //           <ImageViewerPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/number">
  //           <NumbersPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/drop-down">
  //           <DropDownsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/upload-file">
  //           <UploadFilesPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/backlink">
  //           <BackLinksPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/error-message">
  //           <ErrorMessagePage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/date-input">
  //           <DateInputPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/footer">
  //           <FooterPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/inset-text">
  //           <InsetTextPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/notification-banner">
  //           <NotificationBannerPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/panel">
  //           <PanelPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/phase-banner">
  //           <PhaseBannerPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/pagination">
  //           <PaginationPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/select">
  //           <SelectPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/radio-buttons">
  //           <RadioButtonsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/skip-link">
  //           <SkipLinkPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/summary-list">
  //           <SummaryListPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/table">
  //           <TablePage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/tabs">
  //           <TabsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/tag">
  //           <TagPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/side-nav">
  //           <SideNavPage />
  //         </Route>
  //         <Route exact path="/ui-docs/components/pop-up">
  //           <PopUpPage />
  //         </Route>
  //         <Route exact path="/ui-docs/foundations">
  //           <Foundations />
  //         </Route>
  //         <Route exact path="/ui-docs/foundations/colors">
  //           <FoundationsColor />
  //         </Route>
  //         <Route exact path="/ui-docs/foundations/typography">
  //           <FoundationsTypography />
  //         </Route>
  //         <Route exact path="/ui-docs/foundations/iconography">
  //           <FoundationsIconography />
  //         </Route>
  //         <Route exact path="/ui-docs/brand">
  //           <Brand />
  //         </Route>
  //         <Route exact path="/ui-docs/brand/mission">
  //           <MissionPage />
  //         </Route>
  //         <Route exact path="/ui-docs/brand/personality">
  //           <PersonalityPage />
  //         </Route>
  //         <Route exact path="/ui-docs/brand/promise">
  //           <PromisePage />
  //         </Route>
  //         <Route exact path="/ui-docs/brand/values">
  //           <ValuesPage />
  //         </Route>
  //         <Route exact path="/ui-docs/content">
  //           <ContentPage />
  //         </Route>
  //         <Route exact path="/ui-docs/patterns">
  //           <PatternsPage />
  //         </Route>
  //         <Route exact path="/ui-docs/resources">
  //           <ResourcesPage />
  //         </Route>
  //         <Redirect to="/ui-docs/" />
  //       </Switch>
  //     </Router>
  //   </>
  // );

  // Fixed extra exacts:

   return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/ui-docs">
            <Home />
          </Route>
          <Route exact path="/ui-docs/components">
            <Components />
          </Route>
          <Route  path="/ui-docs/components/text-input">
            <ComponentsTextInput />
          </Route>
          <Route  path="/ui-docs/components/header">
            <ComponentsHeader />
          </Route>
          <Route  path="/ui-docs/components/input">
            <Input />
          </Route>
          <Route  path="/ui-docs/components/radio">
            <RadioPage />
          </Route>
          <Route  path="/ui-docs/components/checkbox">
            <CheckboxPage />
          </Route>
          <Route  path="/ui-docs/components/button">
            <ButtonPage />
          </Route>
          <Route  path="/ui-docs/components/banner">
            <BannerPage />
          </Route>
          <Route  path="/ui-docs/components/toast-message">
            <ToastMessagePage />
          </Route>
          <Route  path="/ui-docs/components/text-area">
            <TextAreaPage />
          </Route>
          <Route  path="/ui-docs/components/warning-text">
            <WarningTextPage />
          </Route>
          <Route  path="/ui-docs/components/error-summary">
            <ErrorSummaryPage />
          </Route>
          <Route  path="/ui-docs/components/field-set">
            <FieldSetPage />
          </Route>
          <Route  path="/ui-docs/components/cards">
            <CardsPage />
          </Route>
          <Route  path="/ui-docs/components/breadcrumbs">
            <BreadCrumbsPage />
          </Route>
          <Route  path="/ui-docs/components/ratings">
            <RatingPage />
          </Route>
          <Route  path="/ui-docs/components/image-viewer">
            <ImageViewerPage />
          </Route>
          <Route  path="/ui-docs/components/number">
            <NumbersPage />
          </Route>
          <Route  path="/ui-docs/components/drop-down">
            <DropDownsPage />
          </Route>
          <Route  path="/ui-docs/components/upload-file">
            <UploadFilesPage />
          </Route>
          <Route  path="/ui-docs/components/backlink">
            <BackLinksPage />
          </Route>
          <Route  path="/ui-docs/components/error-message">
            <ErrorMessagePage />
          </Route>
          <Route  path="/ui-docs/components/date-input">
            <DateInputPage />
          </Route>
          <Route  path="/ui-docs/components/footer">
            <FooterPage />
          </Route>
          <Route  path="/ui-docs/components/inset-text">
            <InsetTextPage />
          </Route>
          <Route  path="/ui-docs/components/notification-banner">
            <NotificationBannerPage />
          </Route>
          <Route  path="/ui-docs/components/panel">
            <PanelPage />
          </Route>
          <Route  path="/ui-docs/components/phase-banner">
            <PhaseBannerPage />
          </Route>
          <Route  path="/ui-docs/components/pagination">
            <PaginationPage />
          </Route>
          <Route  path="/ui-docs/components/select">
            <SelectPage />
          </Route>
          <Route  path="/ui-docs/components/radio-buttons">
            <RadioButtonsPage />
          </Route>
          <Route  path="/ui-docs/components/skip-link">
            <SkipLinkPage />
          </Route>
          <Route  path="/ui-docs/components/summary-list">
            <SummaryListPage />
          </Route>
          <Route  path="/ui-docs/components/table">
            <TablePage />
          </Route>
          <Route  path="/ui-docs/components/tabs">
            <TabsPage />
          </Route>
          <Route  path="/ui-docs/components/tag">
            <TagPage />
          </Route>
          <Route  path="/ui-docs/components/side-nav">
            <SideNavPage />
          </Route>
          <Route  path="/ui-docs/components/pop-up">
            <PopUpPage />
          </Route>

          <Route exact path="/ui-docs/foundations">
            <Foundations />
          </Route>
          <Route  path="/ui-docs/foundations/colors">
            <FoundationsColor />
          </Route>
          <Route  path="/ui-docs/foundations/typography">
            <FoundationsTypography />
          </Route>
          <Route  path="/ui-docs/foundations/iconography">
            <FoundationsIconography />
          </Route>
          <Route  path="/ui-docs/foundations/accessibility">
            <FoundationsAccessibility />
          </Route>


          <Route exact path="/ui-docs/brand">
            <Redirect to="/ui-docs/brand/designprinciples" />
          </Route>
          {/* <Route  path="/ui-docs/brand/mission">
            <MissionPage />
          </Route>
          <Route  path="/ui-docs/brand/personality">
            <PersonalityPage />
          </Route>
          <Route  path="/ui-docs/brand/promise">
            <PromisePage />
          </Route>
          <Route  path="/ui-docs/brand/values">
            <ValuesPage />
          </Route> */}
          <Route  path="/ui-docs/brand/designprinciples">
            <DesignPrinciplesPage />
          </Route>
           <Route  path="/ui-docs/brand/branding">
            <BrandingPage />
          </Route>

          <Route exact path="/ui-docs/content">
            <Redirect to="/ui-docs/content/voicetone" />
          </Route>
          <Route exact path="/ui-docs/content/voicetone">
            <VoiceTonePage />
          </Route>      

          <Route exact path="/ui-docs/patterns">
            <Redirect to="/ui-docs/patterns/pattern"/>
          </Route>
          <Route  path="/ui-docs/patterns/pattern">
            <LanguageSelection />
          </Route>
          <Route  path="/ui-docs/patterns/CitySelection">
            <CitySelection />
          </Route>
          <Route  path="/ui-docs/patterns/MobileVerification">
            <MobileVerification />
          </Route>
          <Route  path="/ui-docs/patterns/DocumentsRequired">
            <DocumentRequired />
          </Route>
          <Route  path="/ui-docs/patterns/Address">
            <Address />
          </Route>
          <Route  path="/ui-docs/patterns/ApplicationSummary">
            <ApplicationSummary/>
          </Route>
          <Route  path="/ui-docs/patterns/Payment">
            <Payment/>
          </Route> 
          <Route  path="/ui-docs/patterns/PaymentSuccess">
            <PaymentSuccess/>
          </Route>  
          <Route  path="/ui-docs/patterns/DashboardLanding">
            <DashboardLanding/>
          </Route> 
          <Route  path="/ui-docs/patterns/Dashboard">
            <Dashboard/>
          </Route> 
          <Route  path="/ui-docs/patterns/DocumentsUpload">
            <DocumentsUpload/>
          </Route> 
          <Route  path="/ui-docs/patterns/CounterEmployeeForm">
            <CounterEmployeeForm/>
          </Route> 
          <Route  path="/ui-docs/patterns/CounterSearch">
            <Search/>
          </Route>
          <Route  path="/ui-docs/patterns/ApplicationStatus">
            <ApplicationStatus/>
          </Route>
          <Route  path="/ui-docs/patterns/CollectFeedback">
            <CollectFeedback/>
          </Route>
          <Route  path="/ui-docs/patterns/EmployeeLogin">
            <EmployeeLogin/>
          </Route>
          <Route  path="/ui-docs/patterns/EmployeeDashboard">
            <EmployeeDashboard/>
          </Route>
          <Route  path="/ui-docs/patterns/EmployeeInbox">
            <EmployeeInbox/>
          </Route>
          <Route  path="/ui-docs/patterns/Search">
            <Search/>
          </Route> 
          <Route  path="/ui-docs/patterns/Report">
            <Report/>
          </Route>
          <Route  path="/ui-docs/patterns/EmployeeCollectPayment">
            <EmployeeCollectPayment/>
          </Route>


          <Route exact path="/ui-docs/resources">
            <Redirect to="/ui-docs/resources/resource"/>
          </Route>
          <Route  path="/ui-docs/resources/resource">
            <ResourcesOnePage />
          </Route>
    
          <Redirect to="/ui-docs/" /> 
          {/* Redirect if switch doesn't match with any of the above Routes */}
        </Switch>
     <div className="bg-indigo-500 pb-4 text-center">
      <h3 className="text-center">All content on this page by eGov Foundation is licensed under a Creative Commons Attribution 4.0 International License.</h3>
     </div>
      </Router>
    </>
  );
}

export default App;
