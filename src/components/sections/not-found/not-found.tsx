import { Button, Container } from "@mui/material";
import Link from "next/link";

export type DataSectionNotFound = {
  returnPage: string;
  title: string;
}

export default function SectionNotFound(data: DataSectionNotFound) {
  const { returnPage, title } = data;
  return (
    <section>
      <Container>
        <p>(Desenvolver conteudo não encontrado !)</p>
        <h2>{title}</h2>
        <Link href={returnPage}>
          <Button variant="contained">Voltar</Button>
        </Link>
      </Container>
    </section>
  );
}
