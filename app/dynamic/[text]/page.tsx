import Link from "next/link";
import ModalToggle from "./ModalToggle";
import { notFound } from "next/navigation";

export const DYNAMIC_TEXTS = ["one", "two", "three"];

export default async function DynamicPage({
  params,
}: {
  params: { text: string };
}) {
  if (!DYNAMIC_TEXTS.includes(params.text)) return notFound();

  return (
    <main>
      <h1>Dynamic page</h1>
      <p>Param: {params.text}</p>
      <ModalToggle />
      <Link href="/">Back to Home</Link>
    </main>
  );
}

export async function generateStaticParams() {
  // Here we only pre-render the first dynamic page /dynamic/one
  return [
    {
      text: DYNAMIC_TEXTS[0],
    },
  ];
}
