import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SponsorProvider } from './Context/SponsorContext';
import { CategoryProvider } from './Context/CategoryContext';
import { CampaignProvider } from './Context/CampignContext';
import { RoutesProvider } from './Context/RoutesContex';
import { HighlightsProvider } from './Context/HighlightsContext';
import { SponsorshipProvider } from './Context/SponsorshipContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<CampaignProvider>
<SponsorProvider>
  <CategoryProvider>
<RoutesProvider>
<HighlightsProvider>
<SponsorshipProvider>
  <App/>
</SponsorshipProvider>
</HighlightsProvider>
</RoutesProvider>
  </CategoryProvider>

</SponsorProvider>
</CampaignProvider>

  </React.StrictMode>
);

