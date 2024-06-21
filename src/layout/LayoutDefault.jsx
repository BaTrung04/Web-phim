import { Layout } from "antd";
import HeaderWeb from "../components/Header/HeaderWeb";
import FooterWeb from "../components/Footer/FooterWeb";
import MainContent from "../components/Main/MainContent";

const LayoutDefault = () => {
  return (
    <Layout>
      <header>
        <HeaderWeb />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <FooterWeb />
      </footer>
    </Layout>
  );
};
export default LayoutDefault;
