import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Landing from './Landing/landingpage';
import About from './About/about';
import Projects from './Projects/projects';
import TrainGame from './Projects/TrainGame/trainGame';
import PaceCalculator from './Projects/PaceCalculator/paceCalculator';
import FiveHundred from './Projects/500/500.jsx';
import Photos from './Photos/photos';
import NoisyDetector from './Projects/NoisyDetector/noisyDetector';
import Arbitrage from './Projects/Arbitrage/arbitrage';
import TrioHome from './Projects/Trio/trioHome';
import TrioGame from './Projects/Trio/trioGame';
import Music from './Music/music';
import BusinessBrains from './BusinessBrains/businessBrains';
import NBALadder from './Projects/NBA-Ladder/NBA-Ladder';
import TopArtistsMap from './Projects/TopArtistsMap/topArtistsMap';
import PLPredictions from './Projects/PLPredictions/plPredictions';
import FPLDraftChecker from './Projects/FPLDraft/fplDraftChecker';


const Main = () => (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/CV" element={<Navigate to="/About#cv" replace />}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Projects/Arbitrage" element={<Arbitrage/>}/>
        <Route path="/Projects/Trio" element={<TrioHome/>}/>
        <Route path="/Projects/TrioGame" element={<TrioGame/>}/>
        <Route path="/Projects/TrainGame" element={<TrainGame/>}/>
        <Route path="/Projects/PaceCalculator" element={<PaceCalculator/>}/>
        <Route path="/Projects/FiveHundred" element={<FiveHundred/>}/>
        <Route path="/Projects/Noise" element={<NoisyDetector/>}/>
        <Route path="/Projects/NBA-Ladder" element={<NBALadder/>}/>
        <Route path="/Projects/TopArtistsMap" element={<TopArtistsMap/>}/>
        <Route path="/Projects/PLPredictions" element={<PLPredictions/>}/>
        <Route path="/Projects/FPLDraft" element={<FPLDraftChecker/>}/>
        <Route path="/Projects/Photos" element={<Photos/>}/>
        <Route path="/Photos" element={<Navigate to="/Projects/Photos" replace />}/>
        <Route path="/Projects/Music" element={<Music/>}/>
        <Route path="/Music" element={<Navigate to="/Projects/Music" replace />}/>
        <Route path="/Projects/BusinessBrains" element={<BusinessBrains/>}/>
        <Route path="/BusinessBrains" element={<Navigate to="/Projects/BusinessBrains" replace />}/>
    </Routes>
)

export default Main;
