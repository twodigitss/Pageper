import { useState } from 'react'
import user_pref from '@services/preferences'
import Home from '@pages/Home';
import Side_Menu from "@components/SideMenu";
import AppSettings from "@components/SettingsModal";
import { AppConfig } from '@type/config';
import '@styles/index.css'

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  /* ponytail: Lift configuration state to propagate updates reactively without polling */
  const [config, setConfig] = useState<AppConfig>(user_pref);

  return (
    <>
      <AppSettings 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        config={config}
        onSaveConfig={setConfig}
      />
      <Home config={config} />
      <Side_Menu openModal={() => setIsSettingsOpen(true)}/>
    </>
  )
}

export default App
