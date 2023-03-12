// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigLayout } from "../Layouts/ConfigLayout";
import "./../styles.css";
import { FirstAdminConfigView } from "../Views/FirstAdminConfigView";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Index } from "../Views/Index";
import { ConfigProvider } from "../Contexts/ConfigContext";
import { ConfigView } from "../Views/ConfigView";
import { FirstSchoolConfigView } from "../Views/FirstSchoolConfigView";
import { LoginAuthView } from "../Views/LoginAuthView";
import { AuthProvider } from "../Contexts/AuthContext";
export function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/config" element={<ConfigLayout />}>
              <Route index element={<ConfigView />} />
              <Route path="firstadmin" element={<FirstAdminConfigView />} />
              <Route path="firstschool" element={<FirstSchoolConfigView />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route index element={<LoginAuthView />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
