import { Button } from "@mui/material";
import Link from "next/link";

export type DataSectionMenuDashBoard = {}

export default function SectionMenuDashBoard(data: DataSectionMenuDashBoard) {
  const {} = data;

  return (
    <section>
      <h2>Desenvolver Menu DashBoard</h2>
      <ul>
        <li>
          <Link href="/painel">Ir para Painel</Link>
        </li>
        <li>
          <Link href="/painel/vendas">Ir para Vendas</Link>
        </li>
        <li>
          <Link href="/painel/produtos">Ir para Produtos</Link>
        </li>
        <li>
          <Link href="/painel/marketplace">Ir para Makertplace</Link>
        </li>
        <li>
          <Link href="/painel/financas">Ir para Finanças</Link>
        </li>
        <li>
          <Link href="/painel/minhas-compras">Ir para Minhas Compras</Link>
        </li>
        <li>
          <Button variant="contained">Tema claro/escuro</Button>
        </li>
        <li>
          <Link href="/painel/configuracoes">Ir para Configurações</Link>
        </li>
        <li>
          <Link href="/painel/perfil">Ir para Perfil</Link>
        </li>
      </ul>
    </section>
  );
}
