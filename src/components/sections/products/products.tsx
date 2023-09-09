import { Container, Button } from "@mui/material";
import Link from "next/link";

export type DataSectionProducts = {};

export default function SectionProducts(data: DataSectionProducts) {
  const {} = data;

  return (
    <section>
      <Container>
        <h2>Desenvolver Seção Produtos !</h2>
        <Link href="/painel/produtos/0">
          <Button variant="contained">Produto ID = 0 (ERRO)</Button>
        </Link>
        <Link href="/painel/produtos/1">
          <Button variant="contained">Produto ID = 1</Button>
        </Link>
      </Container>
    </section>
  );
}
