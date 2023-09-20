"use client";

import { useEffect, useState } from "react";
import style from "./view-product-owner.module.scss";
import { useRouter } from "next/navigation";
import { getUserLoginAccessToken } from "@/services/auth/auth";
import Api from "@/services/api/api";
import { ResponseGetProduct } from "@/services/api/endpoints/produtct";
import { Container, Grid } from "@mui/material";
import HTMLReactParser from "html-react-parser";

export type DataSectionViewProductOwner = { id: string };

export default function SectionViewProductOwner(
  data: DataSectionViewProductOwner
) {
  const { id } = data;
  const [productData, setProductData] = useState<ResponseGetProduct | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    getUserLoginAccessToken()
      .then((token) => {
        Api.private
          .getProduct(token, id)
          .then((response) => setProductData(response))
          .catch((error) => {
            console.log("Ocorreu um erro", error);
            router.replace("/painel/produtos");
          });
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
        router.replace("/auth/login");
      });
  }, []);

  const LoadingNotCompleted = () => {
    return <h2>Desenvolver seção ViewProductOwner ! (Carregando)</h2>;
  };

  const LoadingCompleted = () => {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              className={style.image}
              src="https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
              alt={productData?.name}
            />
          </Grid>
          <Grid item xs={8}>
            <h1 className={style.title}>{productData?.name}</h1>
            <p>{productData?.description}</p>
          </Grid>
          <Grid item xs={4}>
            <h2>Dados do vendedor</h2>
            <h3>Nome</h3>
            <p>{productData?.sallerInName}</p>
            <h3>Email</h3>
            <p>{productData?.sallerInEmail}</p>
            <h3>Telefone</h3>
            <p>{productData?.sallerInPhone}</p>
          </Grid>
          {productData?.markdown && (
            <Grid item xs={12}>
              {HTMLReactParser(productData.markdown)}
            </Grid>
          )}
        </Grid>
      </Container>
    );
  };

  return (
    <section id={style.SectionViewProductOwner}>
      {productData ? <LoadingCompleted /> : <LoadingNotCompleted />}
    </section>
  );
}
