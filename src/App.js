import "./App.css";

import PublicLayout from "./layouts/PublicLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <PublicLayout>
      <Register />
    </PublicLayout>
  );
}

export default App;
