import SectionViewProductOwner from "@/components/sections/view-product-owner/view-product-owner";

export type DataPageViewProduct = {
  params: {
    id: string;
  };
};

export default function PageViewProductOwner(data: DataPageViewProduct) {
  const { params } = data;

  return (
    <main style={{backgroundColor:"#151515", height:"100%"}}>
      <SectionViewProductOwner id={params.id} />
    </main>
  );
}
