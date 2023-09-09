import SectionEditProduct from "@/components/sections/edit-product/product";
import { notFound } from "next/navigation";

export type DataPageProduct = {
  params: { id: string };
};

export default function PageEditProduct(data: DataPageProduct) {
  const { params } = data;

  if (params.id == "0") notFound();

  return (
    <main>
      <h1>Id: {params.id}</h1>
      <SectionEditProduct />
    </main>
  );
}
