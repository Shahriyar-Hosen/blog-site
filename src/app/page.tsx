import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import { IPage_Cat } from "@/types";
import { NextPage } from "next";
import styles from "./HomePage.module.css";

export interface IHome {
  searchParams: IPage_Cat;
}

const Home: NextPage<IHome> = ({ searchParams }) => {
  const page = Number(searchParams.page) || 1;

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
