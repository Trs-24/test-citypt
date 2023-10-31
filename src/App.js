import Card from "./components/Card";
import QR from "./components/QR";
import { ReactComponent as Logo } from "./assets/logo-cropped.svg";

function App() {
  return (
    <div className="text-3xl text-secondary flex flex-col items-center justify-center gap-4 p-4 min-h-screen">
      <Card color="primary">
        <Logo />
      </Card>
      <Card color="secondary">
        <QR />
        <h1 className="text-xl font-bold">Hollie Champion</h1>
        <p className="text-sm font-bold">PT, DPT</p>
        <h2 className="text-lg font-bold">Physical Therapist</h2>
        <h3 className="text-base">CityPT Inc.</h3>
        <p className="text-base">Tel: (980) 890-7007</p>
        <p className="text-base">Fax: (855) 826-2996</p>
        <p className="text-base">hollie.champion@citypt.com</p>
      </Card>
    </div>
  );
}

export default App;
