// pages/index.js
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);
  const [showBanner, setShowBanner] = useState<boolean>(true);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó la instalación');
        } else {
          console.log('El usuario canceló la instalación');
        }
        setShowBanner(false);
      });
    }
  };

  const handleDismissClick = () => {
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
          <p>¡Instala nuestra aplicación para acceder más fácilmente!</p>
          <button onClick={handleInstallClick}>Instalar</button>
          <button onClick={handleDismissClick}>Cerrar</button>
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          flexDirection: "column",
        }}
      >
        <p>Hola mundo</p>
        <div style={{ marginTop:10}}>
          <button onClick={() => alert("Bienvenidos")}>click aqui</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
