import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  return (
    <div>
      Home Page / {session?.user?.name}, {session?.accessToken}
    </div>
  );
}
