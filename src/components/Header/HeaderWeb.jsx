import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../services/CategoryServices";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo/logo.svg";
const HeaderWeb = () => {
  const [allCategory, setAllCategory] = useState([]);

  const [selectedKey, setSelectedKey] = useState("1");
  const items = allCategory.map((item, index) => ({
    id: item._id,
    key: `${index} + 1`,
    label: item.name,
    path: `/${item.slug}`,
  }));

  useEffect(() => {
    const fetchApiAllCategory = async () => {
      await getAllCategory()
        .then((res) => setAllCategory(res))
        .catch((err) => console.log(err));
    };
    fetchApiAllCategory();
  }, []);
  //console.log(allCategory);

  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    //console.log(e.key);
    const item = items.find((item) => item.key === e.key);
    //console.log("check <<< item", item.id);
    if (item.id) {
      navigate(item.path);
    }
  };

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <Header
      className="header-container"
      style={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        className="demo-logo"
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <img
          src={Logo}
          alt=""
          style={{ width: 250, marginTop: 27, cursor: "pointer" }}
          onClick={handleClickLogo}
        />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        items={items}
        style={{
          flex: 2,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default HeaderWeb;
