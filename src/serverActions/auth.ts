"use server";

import { signIn, signOut } from "@/auth";

export interface SignInWithCredentialsResult {
  error?: string;
  success?: boolean;
}

export const signInWithCredentials = async (
  _: SignInWithCredentialsResult,
  formData: FormData
): Promise<SignInWithCredentialsResult> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "이메일과 비밀번호를 입력해주세요" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.error(error);
    return { error: "올바른 이메일과 비밀번호를 입력해주세요" };
  }

  return { success: true };
};

export const signOutWithForm = async () => {
  await signOut();
};
