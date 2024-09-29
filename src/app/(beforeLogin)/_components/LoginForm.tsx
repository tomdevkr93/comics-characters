"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./LoginForm.module.css";
import { signInWithCredentials } from "@/serverActions/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [result, formAction] = useFormState(signInWithCredentials, {});
  const { error, success } = result;

  useEffect(() => {
    if (success) {
      router.push("/home");
    }
  }, [success]);

  return (
    <form className={styles.form} action={formAction}>
      <h2 className={styles.title}>이메일과 비밀번호를 입력해주세요</h2>
      <input name="email" type="email" placeholder="이메일" />
      <input name="password" type="password" placeholder="비밀번호" />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" disabled={pending}>
        로그인
      </button>
    </form>
  );
}
