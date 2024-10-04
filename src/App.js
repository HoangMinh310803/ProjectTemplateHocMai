import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import QuestionPage from "./pages/QuestionPage";
import AnswerPage from "./pages/AnswerPage";
import AnswerProcessPage from "./pages/AnswerProcessPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/QuestionPage" element={<QuestionPage />} />
          <Route path="/AnswerPage" element={<AnswerPage />} />
          <Route path="/AnswerProcessPage" element={<AnswerProcessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
