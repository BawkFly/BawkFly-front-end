import SectionProductCheckout from "@/components/sections/product-checkout/product-chekout";
import { notFound } from "next/navigation";

export type DataPageProductCheckout = {
  params: { id: string };
};

export default function PageProductCheckout(data: DataPageProductCheckout) {
  const { params } = data;

  if (params.id === "0") notFound();

  return (
    <main>
      <h1>ID: {params.id}</h1>
      <SectionProductCheckout />
    </main>
  );
}
