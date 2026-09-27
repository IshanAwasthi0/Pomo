import Link from "next/dist/client/link";

export default async function Home() {
  return (
    <>
      <Link href="/home"><button>Sign in</button></Link>
    </>
  );
}
