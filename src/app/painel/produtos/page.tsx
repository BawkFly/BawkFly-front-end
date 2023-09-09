import SectionUserProducts from "@/components/sections/products/products";
import Link from "next/link";
import { Button } from "@mui/material";

export default function PageProducts() {
  return (
    <main>
      <SectionUserProducts />
      <Link href="/painel/produtos/add-produto">
        <Button variant="contained">Add - Produto</Button>
      </Link>
    </main>
  );
}
