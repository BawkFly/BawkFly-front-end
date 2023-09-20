import SectionEditProduct from "@/components/sections/edit-product/edit-product";

export default function PageLoadingEditProduct() {
  return (
    <main>
      <SectionEditProduct loading={true} />
    </main>
  );
}
