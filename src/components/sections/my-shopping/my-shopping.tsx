import { Container, Button } from "@mui/material";
import Link from "next/link";

export type DataSectionMyShopping = {};

export default function SectionMyShopping(data: DataSectionMyShopping) {
  const {} = data;

  return (
    <section>
      <Container>
        <h2>Desenvolver Seção Minhas Compras !</h2>
        <Link href="/painel/minhas-compras/0">
          <Button variant="contained">ID = 0 (ERRO)</Button>
        </Link>
        <Link href="/painel/minhas-compras/1">
          <Button variant="contained">ID = 1</Button>
        </Link>
      </Container>
    </section>
  );
}
