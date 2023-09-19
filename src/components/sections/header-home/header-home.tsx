import { Container } from "@mui/material";
import Link from "next/link";

export type DataSectionHeaderHome = {}

export default function SectionHeaderHome(data: DataSectionHeaderHome) {
  return (
    <section>
      <Container>
        <h2>Desenvolver seção header home !</h2>
        <ul>
          <li>
            <Link href="/painel">Ir para Painel</Link>
          </li>
          <li>
            <Link href="/auth/login">Ir para Loggin</Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
