import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export default async function LoginPage() {
  return (
    <main className={styles.main}>
      <Image
        src="/images/my_disney.svg"
        alt="Disney Logo"
        width={87}
        height={36}
      />
      <LoginForm />
      <span className={styles.divider} />
      <p className={styles.signUp}>
        아이디가 없으신가요? <Link href="/signup">회원가입</Link>
      </p>
    </main>
  );
}
