import { ICategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./categoryList.module.css";

const getData = async (): Promise<ICategory[]> => {
  const res = await fetch("https://blog-site-psi.vercel.app/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    // throw new Error("Failed");
    console.error("Failed to fetch categories");
    return [];
  }

  return res.json();
};

const CategoryList: FC = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map(({ _id, slug, title, img }) => (
          <Link
            key={_id}
            href={`/blog?cat=${slug}`}
            className={`${styles.category} ${styles[slug]}`}
          >
            {img && (
              <Image
                src={img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
