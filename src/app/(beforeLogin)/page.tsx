import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.marvelLogo}>
        <Image src="/images/marvel_logo.svg" alt="Marvel Logo" fill />
      </div>
      <button type="button" className={styles.closeButton}>
        <Image src="/icons/close.svg" alt="Close" fill />
      </button>
    </header>
  );
}

export default async function LoginPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <Image
            src="/images/my_disney.svg"
            alt="Disney Logo"
            width={87}
            height={36}
          />

          <h2 className={styles.title}>아이디와 비밀번호를 입력해주세요</h2>
          <input name="id" type="text" placeholder="아이디" />
          <input name="password" type="password" placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
        <span className={styles.divider} />
        <p className={styles.signUp}>
          아이디가 없으신가요? <Link href="/signup">회원가입</Link>
        </p>
        <ul className={styles.logoParade}></ul>
      </main>
    </div>
  );
}
