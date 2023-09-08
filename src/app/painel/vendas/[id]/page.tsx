import SectionSale from "@/components/sections/sale/sale";
import { notFound } from "next/navigation";

export type DataPageSale = {
  params: { id: string };
}

export default function PageSale(data: DataPageSale) {
  const { params } = data;

  //Simulating not found error
  if(params.id === "0"){
    notFound();
  }

  return (
    <main>
      <h1>Id : {params.id}</h1>
      <SectionSale />
    </main>
  );
}
