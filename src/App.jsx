import AppInsurance from "./components/AppInsurance";
import { InsuranceProvider } from "./context/InsuranceProvider";

function App() {
  return (
    <InsuranceProvider>
      <AppInsurance />
    </InsuranceProvider>
  );
}

export default App;
