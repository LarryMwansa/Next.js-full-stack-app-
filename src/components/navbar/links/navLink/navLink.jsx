"use client";

import Link from "next/link";
import styles from "./navLink.module.css";

const navLink = ({ item }) => {
  return (
    <Link href={item.path} key={item.title}>
      {item.title}
    </Link>
  );
};

export default navLink;
