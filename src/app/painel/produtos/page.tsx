import SectionUserProducts from "@/components/sections/user-products/products";
import Link from "next/link";
import { Button } from "@mui/material";

export default function PageProducts() {
  return (
    <main>
      <SectionUserProducts userProducts={[]} />
      <Link href="/painel/produtos/add-produto">
        <Button variant="contained">Add - Produto</Button>
      </Link>
    </main>
  );
}
