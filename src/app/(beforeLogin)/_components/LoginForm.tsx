"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signInWithCredentials } from "@/serverActions/auth";

export default function LoginForm() {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [result, formAction] = useFormState(signInWithCredentials, null);

  useEffect(() => {
    if (result?.status === "success") {
      router.push("/home");
    }
  }, [result?.status]);

  return (
    <form className={styles.form} action={formAction}>
      <h2 className={styles.title}>이메일과 비밀번호를 입력해주세요</h2>
      <input name="email" type="email" placeholder="이메일" />
      <input name="password" type="password" placeholder="비밀번호" />
      {result?.status === "error" && (
        <p className={styles.error}>{result?.message}</p>
      )}
      <button type="submit" disabled={pending}>
        로그인
      </button>
    </form>
  );
}
