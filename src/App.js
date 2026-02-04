import NavbarIndex from './components/Navbar';
import FooterIndex from './components/Footer';
import Home from './pages/Home';
import ProfileData from './configurations/data/ProfileData';

function App() {
  // ดึงชื่อจาก ProfileData เพื่อส่ง props ไปยัง Navbar และ Footer
  const { name } = ProfileData;

  return (
    <div className="App">
      {/* Navbar - ส่ง props: name */}
      <NavbarIndex name={name} />

      {/* Main Content */}
      <main>
        <Home />
      </main>

      {/* Footer - ส่ง props: name */}
      <FooterIndex name={name} />
    </div>
  );
}

export default App;
