import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';

import RegisterPage  from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HomePage from './pages/HomePage.jsx';

import ProtectedRoute from './ProtectedRoute.jsx';
import { TaskProvider } from './context/TaskContext.jsx'


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
      <Routes>
        <Route path = '/' element= {<HomePage/>} /> //publica 
        <Route path = '/login' element= {<LoginPage/>} /> //publica 
        <Route path = '/register' element= {<RegisterPage/>} /> //publica 
        
        <Route element={<ProtectedRoute/>}>
          <Route path = '/tasks' element= {<TasksPage/>} /> //usuario logueado 
          <Route path = '/add-task' element= {<TaskFormPage/>} /> //usuario logueado
          <Route path = '/tasks/:id' element= {<TaskFormPage/>} /> //usuario logueado
          <Route path = '/profile' element= {<ProfilePage/>} /> //usuario logueado
        </Route>
      </Routes>
        </BrowserRouter>
    </TaskProvider> 
    </AuthProvider>
  )
}

export default App