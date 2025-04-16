import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CalltoAction } from "./components/sections/CalltoAction";

const App = () => {
  return (
    <Layout title="EdgeAi">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CalltoAction />
    </Layout>
  );
};

export default App;
