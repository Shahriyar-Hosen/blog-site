import { IPage_Cat, IPost } from "@/types";
import { FC } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

export interface IGetPosts {
  posts: IPost[];
  count: number;
}

const getData = async (page: number, cat?: string): Promise<IGetPosts> => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  // Todo
  if (!res.ok) {
    // throw new Error("Failed");
    console.error("Failed to fetch posts");
    return { posts: [], count: 0 };
  }

  return res.json();
  // return { posts: [], count: 0 };
};

const CardList: FC<IPage_Cat> = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext = POST_PER_PAGE * (Number(page) - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
      <Pagination page={Number(page)} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
