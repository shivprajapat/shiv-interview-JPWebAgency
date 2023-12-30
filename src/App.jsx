import { Toaster } from "sonner";
import { Header, Footer } from "./components";
import Home from "./screen/home";
import Banner from "./screen/banner";
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default App;
