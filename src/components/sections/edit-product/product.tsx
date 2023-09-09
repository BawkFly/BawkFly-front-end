import { Container } from "@mui/material";

export type DataSectionProduct = {
  loading?: boolean;
};

export default function SectionEditProduct(data: DataSectionProduct) {
  const { loading } = data;

  return loading ? (
    <section>
      <Container>
        <h2>Desenvolver seção Editar Produto Carregando !</h2>
      </Container>
    </section>
  ) : (
    <section>
      <Container>
        <h2>Desenvolver seção Editar Produto !</h2>
      </Container>
    </section>
  );
}
