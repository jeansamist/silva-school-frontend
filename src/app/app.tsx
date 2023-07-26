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
import { AppLayout } from "../Layouts/AppLayout";
import { LoadingProvider } from "../Contexts/LoadingContext";
import { DashboardView } from "../Views/DashboardView";
import { ClassesView } from "../Views/ClassesView";
import { ClassView } from "../Views/ClassView";
import { ClassRoomView } from "../Views/ClassRoomView";
import { SelectSchoolView } from "../Views/SelectSchoolView";
import { ApiProvider } from "../Contexts/ApiContext";
import { ToastProvider } from "../Contexts/ToastContext";
import { AlertProvider } from "../Contexts/AlertContext";
import { ShowStudentView } from "../Views/ShowStudentView";
import { ConfirmProvider } from "../Contexts/ConfirmContext";
export function App() {
  return (
    <LoadingProvider>
      <ConfigProvider>
        <AuthProvider>
          <ApiProvider>
            <ToastProvider>
              <AlertProvider>
                <ConfirmProvider>
                  <Router>
                    <Routes>
                      <Route path="/" element={<AppLayout />}>
                        <Route path="/" element={<Index />}>
                          <Route index element={<DashboardView />} />
                          <Route path="/classes" element={<ClassesView />} />
                          <Route path="/classes/class_level/:class_level_id" element={<ClassView />} />
                          <Route path="/classes/class_level/:class_level_id/classroom/:class_room_id" element={<ClassRoomView />} />
                          <Route
                            path="/classes/class_level/:class_level_id/classroom/:class_room_id/student/:student_id"
                            element={<ShowStudentView />}
                          />
                        </Route>
                        <Route path="/selectschool" element={<SelectSchoolView />} />
                        <Route path="/config" element={<ConfigLayout />}>
                          <Route index element={<ConfigView />} />
                          <Route path="firstadmin" element={<FirstAdminConfigView />} />
                          <Route path="firstschool" element={<FirstSchoolConfigView />} />
                        </Route>
                        <Route path="/auth" element={<AuthLayout />}>
                          <Route index element={<LoginAuthView />} />
                        </Route>
                      </Route>
                    </Routes>
                  </Router>
                </ConfirmProvider>
              </AlertProvider>
            </ToastProvider>
          </ApiProvider>
        </AuthProvider>
      </ConfigProvider>
    </LoadingProvider>
  );
}

export default App;
