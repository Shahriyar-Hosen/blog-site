import { IPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./card.module.css";

const Card: FC<IPost> = ({
  _id,
  catSlug,
  createdAt,
  desc,
  img,
  slug,
  title,
}) => {
  return (
    <div className={styles.container} key={_id}>
      {img && (
        <div className={styles.imageContainer}>
          <Image src={img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{catSlug}</span>
        </div>
        <Link href={`/posts/${slug}`}>
          <h1>{title}</h1>
        </Link>
        {/* <p className={styles.desc}>{desc.substring(0, 60)}</p> */}
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: desc.substring(0, 60) }}
        />
        <Link href={`/posts/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
