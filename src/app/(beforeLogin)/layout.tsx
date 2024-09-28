import { PropsWithChildren } from "react";
import styles from "./layout.module.css";
import Image from "next/image";

async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.marvelLogo}>
        <Image src="/images/marvel_logo.svg" alt="Marvel Logo" fill />
      </div>
    </header>
  );
}

export default async function BeforeLoginLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
