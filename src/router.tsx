
import React, { lazy, Suspense, type ReactNode } from 'react';
import { Route, Routes, Navigate, useLocation, Outlet } from 'react-router-dom';
import Loader from './components/Loader';




// Lazy load components
const Login = lazy(() => import('./Auth/login'));
const Register = lazy(() => import('./Auth/register'));
const PatientDashboard = lazy(() => import('./pages/patient/Home/PatientDashboard'));

const Header = lazy(() => import('./components/header'));
const SymptomMonitoring = lazy(() => import('./pages/patient/Monitoring/symptomMonitoring'));
const Vitals = lazy(() => import('./pages/patient/Monitoring/Vitals'));
const Prescription = lazy(() => import('./pages/patient/Monitoring/Prescription'));
const SymptomsMonitoring = lazy(() => import('./pages/patient/Monitoring/Symptoms'));
const Education = lazy(() => import('./pages/patient/education/Education'));
const EducationDetails = lazy(() => import('./pages/patient/education/EducationDetails'));
 const Collaboration=lazy(()=>import('./pages/patient/collabroation/Collaboration'));
 const Community=lazy(()=>import('./pages/patient/community/Community'))
 const CommunityDeatils =lazy(()=> import('./pages/patient/community/CommunityDeatils'))
 const PatientProfile=lazy(()=>import('./pages/patient/patientprofile/PatientProfile'))
 

 //doctor screen
 const DoctorDashboard = lazy(() => import('./pages/doctor/Home/DoctorDashboard'));
 const MyPatientList=lazy(()=>import('./pages/doctor/MyPatientList/MyPatientList'))


const getUserRole = (): string | null => localStorage.getItem('role');

interface ProtectedRouteProps {
  role: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, children }) => {
  const userRole = getUserRole();
  return userRole === role ? <>{children}</> : <Navigate to="/" replace />;
};

const AppRouter: React.FC = () => {
  const userRole = getUserRole();
  const location = useLocation();

  const hideHeaderPaths = ['/', '/sign-up'];
  const shouldShowHeader = userRole && !hideHeaderPaths.includes(location.pathname);

  return (
    <>
      <Suspense fallback={<div className='flex items-center justify-center text-center mt-5'>

        <Loader />
      </div>}>
        {shouldShowHeader && <Header />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />

          <Route
            path="/patient-dashboard"
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/symptom-monitoring"
            element={
              <ProtectedRoute role="patient">
                <SymptomMonitoring /> <Outlet />
              </ProtectedRoute>
            }
          >
            <Route index element={<SymptomsMonitoring />} />
            <Route path="vitals" element={<Vitals />} />
            <Route path="prescription" element={<Prescription />} />
          </Route>

          <Route
            path="/patient-education"
            element={
              <ProtectedRoute role="patient">
                <Education />
              </ProtectedRoute>
            }
          >
            
          </Route>
          <Route
              path="/patient-education/:id"
              element={
                <ProtectedRoute role="patient">
                  <EducationDetails />
                </ProtectedRoute>
              }
            />

                <Route
            path="/collabroation"
            element={
              <ProtectedRoute role="patient">
             <Collaboration/>
              </ProtectedRoute>
            }
          >
            
          </Route>


<Route
            path="/community"
            element={
              <ProtectedRoute role="patient">
             <Community/>
              </ProtectedRoute>
            }
          >

          </Route>

          <Route path='/communityDe/:id'
          element={<ProtectedRoute role='patient'>
            <CommunityDeatils/>
          </ProtectedRoute>}/>
          
              <Route
            path="/patient-profile"
            element={
              <ProtectedRoute role="patient">
             <PatientProfile/>
              </ProtectedRoute>
            }
          >

          </Route>

          <Route
            path="/doctor-dashboard"
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
           <Route
            path="/my-patient-list"
            element={
              <ProtectedRoute role="doctor">
                <   MyPatientList />
              </ProtectedRoute>
            }
          />
       
          {/* Fallback Route for 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
