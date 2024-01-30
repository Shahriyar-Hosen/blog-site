import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import { NextPage } from "next";
import styles from "./page.module.css";

const Home: NextPage<any> = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
