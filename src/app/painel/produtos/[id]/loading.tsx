import SectionEditProduct from "@/components/sections/edit-product/product";

export default function PageLoadingEditProduct() {
  return (
    <main>
      <SectionEditProduct loading={true} />
    </main>
  );
}
