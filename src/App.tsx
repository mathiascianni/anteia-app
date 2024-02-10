import { IonApp, setupIonicReact } from "@ionic/react";
import Routes from "./routes/Routes";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Routes />
  </IonApp>
);

export default App;
