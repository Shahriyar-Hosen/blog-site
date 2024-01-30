import Menu from "@/components/Menu/Menu";
import CardList from "@/components/cardList/CardList";
import { NextPage } from "next";
import styles from "./blogPage.module.css";

const BlogPage: NextPage<any> = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
