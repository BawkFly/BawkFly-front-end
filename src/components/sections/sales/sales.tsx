import { Button, Container } from "@mui/material";
import Link from "next/link";

export type DataSectionSales = {};

export default function SectionSales(data: DataSectionSales) {
  const {} = data;

  return (
    <Container>
      <h2>Desenvolver seção Vendas !</h2>
      <Link href="vendas/0">
        <Button variant="contained">Venda id = 0 (ERRO)</Button>
      </Link>
      <Link href="vendas/1">
        <Button variant="contained">Venda id = 1</Button>
      </Link>
    </Container>
  );
}
