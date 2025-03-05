import { Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import HomePage from './Pages/Home-Page/HomePage';
import KurumsalPage from './Pages/Kurumsal_Page/KurumsalPage';

import IletisimPage from './Pages/Iletisim_Page/IletisimPage';

import Trafiksigortasi from './Components/TeklifAl/Trafiksigortasi/Trafiksigortasi';
import SeyahatSigortasi from './Components/TeklifAl/SeyahatSigortasi/SeyahatSigortasi';
import SaglikSigortasi from './Components/TeklifAl/SaglikSigortasi/SaglikSigortasi';
import KonutSigortasi from './Components/TeklifAl/KonutSigortasi/KonutSigortasi';
import KaskoSigortasi from './Components/TeklifAl/KaskoSigortasi/KaskoSigortasi';
import DaskSigortasi from './Components/TeklifAl/DaskSigortasi/DaskSigortasi';
import KampanyaPage from './Pages/Kampanya Page/KampanyaPage';



function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/kurumsal' element={<KurumsalPage/>}/>
        <Route path='/iletisim' element={<IletisimPage/>}/>
        
        <Route path='/trafik' element={<Trafiksigortasi/>}/>
        <Route path='/seyahat' element={<SeyahatSigortasi/>}/>
        <Route path='/saglik' element={<SaglikSigortasi/>}/>
        <Route path='/konut' element={<KonutSigortasi/>}/>
        <Route path='/kasko' element={<KaskoSigortasi/>}/>
        <Route path='/dask' element={<DaskSigortasi/>}/>
        <Route path='/kampanya' element={<KampanyaPage/>}/>
      </Routes> 
    </>
  );
}

export default App;