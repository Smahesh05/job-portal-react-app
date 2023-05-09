import { Route, Routes } from "react-router-dom";

import Career from "./components/Career";
import JobDetails from "./components/JobDetails";
import JobForm from "./components/JobForm";
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Career />} />
          <Route path="/job-form/:title" element={<JobForm />} />

          <Route path="/:title" element={<JobDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
