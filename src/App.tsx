import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";


const App = () => (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
);

export default App;
