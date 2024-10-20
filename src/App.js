import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitleSponsor from "./Pages/TitleSponsor.js";


import BronzeSponsor from "./Pages/BronzeSponsor";
import SilverSponsor from "./Pages/SilverSponsor";
import SupportSponsor from "./Pages/SupportSponsor";
import GoldSponsor from "./Pages/GoldSponsor";
import Pictures from "./Pages/Pictures";

import PowerHour from "./Pages/PowerHour";
import CorporateChallenges from "./Pages/CorporateChallenges";
import WomenSubstance from "./Pages/WomenSubstance";
import Videos from "./Pages/Videos";
import RealWomen from "./Pages/RealWomen";
import Yes2Her from "./Pages/Yes2Her";
import TransformationChallenges from "./Pages/TransformationChallenges";
import BeyondBlue from "./Pages/BeyondBlue";
import WomenSubstanceToday from "./Pages/WomenSubstanceToday";
import Faqs from "./Pages/Faqs";
import WomenSubstanceTommorow from "./Pages/WomenSubstanceTommorow";
import WomenSubstanceLegend from "./Pages/WomenSubstanceLegend";
import Routes__Maps from "./Pages/Routes__Maps";
import Tentative__10k from "./Components/Tentative__10k";
import Tentative__5k from "./Components/Tentative__5k";
import Tentative__3k from "./Components/Tentative__3k";
import Tentative__Village from "./Components/Tentative__Village";
import EventFlow from "./Pages/EventFlow";
import EventSafetyPolicy from "./Components/EventSafetyPolicy";
import EventSafetyManagment from "./Components/EventSafetyManagment";
import PlannigPhase from "./Components/PlannigPhase";

import Categories from "./Components/Categories";
import NewsMedia from "./Pages/NewsMedia";
import Sponsor from "./Pages/TitleSponsor.js";
import Sponsors from "./Pages/Sponsors";


function App() {
  return (
  <>
 <Router>

  <Routes>
  <Route path="/" element={ <Home/>} />
  <Route path="/sponsors" element={ <Sponsors/>} />
  <Route path="/titlesponsors" element={ <TitleSponsor/>} />
  <Route path="/bronzesponsors" element={ <BronzeSponsor/>} />
  <Route path="/silversponsors" element={ <SilverSponsor/>} />
  <Route path="/supportsponsors" element={ <SupportSponsor/>} />
  <Route path="/goldsponsors" element={ <GoldSponsor/>} />
  <Route path="/pictures" element={ <Pictures/>} />
  <Route path="/videos" element={ <Videos/>} />
  <Route path="/powerhour" element={ <PowerHour/>} />
  <Route path="/corporatechallenges" element={ <CorporateChallenges/>} />

  <Route path="/womensubstance" element={ <WomenSubstance/>} />

  <Route path="/yes2her" element={ <Yes2Her/>} />
  <Route path="/transformationchallenges" element={ <TransformationChallenges/>} />
 
  <Route path="/faqs" element={ <Faqs/>} />
  <Route path="/news" element={ <NewsMedia/>} />
  <Route path="/categories" element={ <Categories/>} />
  <Route path="/womensubstancelegend" element={ <WomenSubstanceLegend/>} />
  <Route path="/womensubstancetoday" element={ <WomenSubstanceToday/>} />
  <Route path="/womensubstancetommorow" element={ <WomenSubstanceTommorow/>} />
  <Route path="/routes__maps/" element={ <Routes__Maps/>} >
  <Route path="Tentative__Route__10k" element={ <Tentative__10k/>} />
  <Route path="Tentative__Route__5k" element={ <Tentative__5k/>} />
  <Route path="Tentative__Route__3k" element={ <Tentative__3k/>} />
  <Route path="VillageLayout" element={ <Tentative__Village/>} />
  </Route>
  <Route path="/eventFlow/" element={ <EventFlow/>} >
  <Route path="Event_Safety_Policy" element={ <EventSafetyPolicy/>} />
  <Route path="Event_Safety_Managment" element={ <EventSafetyManagment/>} />
  <Route path="Plannig_Phase" element={ <PlannigPhase/>} />
    </Route>
  
  </Routes>

</Router>
  </>
  );
}

export default App;
