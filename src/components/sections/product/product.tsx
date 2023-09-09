import { Container } from "@mui/material";

export type DataSectionProduct = {
  loading?: boolean;
};

export default function SectionProduct(data: DataSectionProduct) {
  const { loading } = data;
  return loading ? (
    <section>
      <Container>
        <h2>Desenvolver seção Produto Carregando!</h2>
      </Container>
    </section>
  ) : (
    <section>
      <Container>
        <h2>Desenvolver seção Produto !</h2>
      </Container>
    </section>
  );
}
