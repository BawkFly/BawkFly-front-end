import SectionNotFound from "@/components/sections/not-found/not-found";

export default function PageNotFoundProduct() {
  return (
    <main>
      <SectionNotFound
        title="Produto não encontrado !"
        returnPage="/painel/minhas-compras"
      />
    </main>
  );
}
