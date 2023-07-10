// import { PDFViewer } from '@react-pdf/renderer';
// import MyPDFDocument from "./components/MyPDFDocument";
// import ReportData1 from './assets/samples/report1.json'
// import ReportData2 from './assets/samples/report2.json'
// import { useCallback, useState } from 'react';
import { Header } from './pages/layouts'
import { Main } from './pages/main'
import {Container} from './pages/style.js'
function MyApp() {

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
}

export default MyApp