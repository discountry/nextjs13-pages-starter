import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}
