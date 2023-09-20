import SectionEditProduct from "@/components/sections/edit-product/edit-product";

export type DataPageProduct = {
  params: { id: string };
};

export default function PageEditProduct(data: DataPageProduct) {
  const { params } = data;

  return (
    <main style={{backgroundColor:"#151515", height:"100%"}}>
      <SectionEditProduct id={params.id} />
    </main>
  );
}
