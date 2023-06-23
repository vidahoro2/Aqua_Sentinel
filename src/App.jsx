import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";

import Landing from 'pages/landing/landing'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Register from 'pages/register/register'
import AcademiaDocentes from 'pages/docentes/academia-docentes'
import Login from 'pages/login/login'
import Profile from 'pages/profile/profile';
import CursoView from 'pages/curso/CursoView';
import ModuloView from 'pages/modulo/Modulo';
import Materiales from 'pages/materiales/Materiales';
import SchoolsPage from 'pages/admin/admin'
import CoursesView from 'pages/admin/curso/cursos'
import CourseForm from 'pages/admin/curso/crearcurso'
import ModulesView from 'pages/admin/curso/modulo/modulo';
import ModuleForm from 'pages/admin/curso/modulo/crearmodulo';
import LeccionForm from 'pages/admin/curso/modulo/crearleccion';
import UsuarioForm from 'pages/admin/usuario/crearusuario';
import { AuthContextProvider } from 'context/authContext';
import PublicRoute from 'components/router/PublicRout';
import PrivateRoute from 'components/router/PrivateRout';
import CoursePage from 'pages/admin/admincurse'
import { useParams } from 'react-router-dom';

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PublicRoute />}>
            <Route index element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Landing />} />
          </Route>
          <Route exact path="/private" element={<PrivateRoute />}>
            <Route path="/private/academiadocentes" element={<AcademiaDocentes />} />
            <Route path="/private/profile" element={<Profile />} />
            <Route path="/private/home" element={<Landing />} />
            <Route path="/private/curso/:id" element={<CursoView />} />
            <Route path="/private/modulo/:id_modulo" element={<ModuloView />} />
            <Route path="/private/materiales" element={<Materiales />} />
            <Route path="/private/admin" element={<SchoolsPage />} />
            <Route path="/private/admin/list_courses" element={<CoursePage />} />
            <Route path="/private/admin/course" element={<CoursesView />} />
            <Route path="/private/admin/crear_curso" element={<CourseForm />} />
            <Route path="/private/admin/module" element={<ModulesView />} />
            <Route path="/private/admin/crear_modulo" element={<ModuleForm />} />
            <Route path="/private/admin/crear_leccion" element={<LeccionForm />} />
            <Route path="/private/admin/crear_cuentas" element={<UsuarioForm />} /></Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};
export default App;