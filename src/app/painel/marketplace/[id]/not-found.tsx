import SectionNotFound from "@/components/sections/not-found/not-found";

export default function PageNotFoundProductCheckout() {
  return (
    <main>
      <SectionNotFound
        title="Produto Não encontado !"
        returnPage="/painel/marketplace"
      />
    </main>
  );
}
