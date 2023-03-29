import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/Profile/Profile';
function App() {
  return (
    <>
     <Profile
        fullName="AMINE ABERCHANE"
        bio="Développeur Full Stack"
        profession="Développeur Full Stack JavaScript"
        handleName={(name) => alert(`Bonjour, mon nom est ${name}`)}
     ></Profile>

    </>
  );
}

export default App;
