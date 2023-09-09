import { Container } from "@mui/material";

export type DataSectionSale = {
  laoding?: boolean;
};

export default function SectionSale(data: DataSectionSale) {
  const { laoding } = data;

  return laoding ? (
    <Container>
      <h2>Desenvolver seção Venda Carregando !</h2>
    </Container>
  ) : (
    <Container>
      <h2>Desenvolver seção Venda !</h2>
    </Container>
  );
}
