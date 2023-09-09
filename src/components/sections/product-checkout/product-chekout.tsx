import { Container } from "@mui/material";

export type DataSectionProductCheckout = {
  loading?: boolean;
};

export default function SectionProductCheckout(
  data: DataSectionProductCheckout
) {
  const { loading } = data;

  return loading ? (
    <section>
      <Container>
        <h2>Desenvolver seção Checkout Produto Carregando !</h2>
      </Container>
    </section>
  ) : (
    <section>
      <Container>
        <h2>Desenvolver seção Checkout Produto !</h2>
      </Container>
    </section>
  );
}
