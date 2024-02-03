"use client";

import { IComment } from "@/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import useSWR from "swr";
import styles from "./comments.module.css";

const fetcher = async (url: string): Promise<IComment[]> => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    // throw new Error(data.message);
    console.error(data.message);
    return [];
  }

  return data;
};

const Comments: FC<{ postSlug: string }> = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    }).then(() => setDesc(""));
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            value={desc}
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map(({ _id, createdAt, desc, user }) => (
              <div className={styles.comment} key={_id}>
                <div className={styles.user}>
                  {user?.image && (
                    <Image
                      src={user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{user.name}</span>
                    <span className={styles.date}>
                      {new Date(createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
