import './App.css';
import { UserCard } from './components/UserCard';

const utilisateur = {
  nom: "Doe",
  prénom: "John",
  email: "john.doe@example.com",
  ImageUrl: "https://i.pinimg.com/474x/5b/8f/3d/5b8f3d9f30460aeedbe6a235e2d001d3.jpg",
  };

function App() {
  return (
    <div className="App">
      <UserCard nom={utilisateur.nom} prenom={utilisateur.prenom} email={utilisateur.email} ImageUrl={utilisateur.ImageUrl} />
    </div>
  );
}

export default App;
