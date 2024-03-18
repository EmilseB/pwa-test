// InstallBanner.tsx
import { useState, useEffect } from 'react';

const InstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);
  const [showBanner, setShowBanner] = useState<boolean>(false);

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
    showBanner && (
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
        <p>¡Instala nuestra aplicación para acceder más fácilmente!</p>
        <button onClick={handleInstallClick}>Instalar</button>
        <button onClick={handleDismissClick}>Cerrar</button>
      </div>
    )
  );
};

export default InstallBanner;
