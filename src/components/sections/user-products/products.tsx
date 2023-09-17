import { Container, Button, Grid } from "@mui/material";
import Link from "next/link";
import ProductItem, { ProductItemProps } from "@/components/sections/products/productsItem"; // Import the ProductItem component

export type DataSectionProducts = {
  userProducts: ProductItemProps[]; // Assuming you pass userProducts as a prop
};

export default function SectionUserProducts(data: DataSectionProducts) {
  const { userProducts } = data;

  return (
    <section>
      <Container>
        <h2>Desenvolver Seção Produtos do Usuario !</h2>
        <Link href="/painel/produtos/0">
          <Button variant="contained">Produto ID = 0 (ERRO)</Button>
        </Link>
        <Link href="/painel/produtos/1">
          <Button variant="contained">Produto ID = 1</Button>
        </Link>

        {/* Product Listing Section */}
        <Grid container spacing={2}>
          {userProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductItem
                name={product.name}
                description={product.description}
                image={product.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
