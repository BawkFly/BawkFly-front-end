import SectionProducts from "@/components/sections/products/products";
import { Button } from "@mui/material";
import Link from "next/link";

export default function PageMarketplace() {
  return (
    <main>
      <SectionProducts />
      <Link href="/painel/marketplace/0">
        <Button variant="contained">Id = 0 (ERRO)</Button>
      </Link>
      <Link href="/painel/marketplace/1">
        <Button variant="contained">Id = 1 </Button>
      </Link>
    </main>
  );
}
