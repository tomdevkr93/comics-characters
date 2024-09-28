import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default async function LoginPage() {
  return (
    <main className={styles.main}>
      <Image
        src="/images/my_disney.svg"
        alt="Disney Logo"
        width={87}
        height={36}
      />
      <form className={styles.form}>
        <h2 className={styles.title}>아이디와 비밀번호를 입력해주세요</h2>
        <input name="id" type="text" placeholder="아이디" />
        <input name="password" type="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      <span className={styles.divider} />
      <p className={styles.signUp}>
        아이디가 없으신가요? <Link href="/signup">회원가입</Link>
      </p>
    </main>
  );
}
