"use client";

import { Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProductCard from "./productCard";
import { getUserLoginAccessToken } from "@/services/auth/auth";
import { useRouter } from "next/navigation";
import Api from "@/services/api/api";
import { ResponseGetProduct } from "@/services/api/endpoints/produtct";

export default function SectionUserProducts() {
  const router = useRouter();

  const [token, setToken] = useState<string>("");
  const [products, setProducts] = useState<Array<ResponseGetProduct>>([]);

  const onDeleteProduct = (id: string) => {
    Api.private
      .deleteProduct(token, id)
      .then((response) => {
        router.refresh();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUserLoginAccessToken()
      .then((token) => {
        console.log(`Token Recebido: ${token}`);
        setToken(token);
      })
      .catch((error) => {
        console.error(error);
        router.replace("/auth/login");
      });
  }, []);

  useEffect(() => {
    Api.private
      .getProducts(token)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  return (
    <Box
      sx={{
        width: "auto",
        minHeight: "100vh",
        bgcolor: "#151515",
        paddingX: "5vw",
        paddingY: "70px",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          padding: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h5" component="h1" sx={{ color: "#fff" }}>
            Produtos
          </Typography>
          <Box
            sx={{
              width: "auto",
              height: "auto",
              borderRadius: "50%",
              border: "2px solid #ffffff42",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              component="h1"
              sx={{
                minWidth: "25px",
                minHeight: "25px",
                display: "flex",
                alingItems: "center",
                justifyContent: "center",
                color: "#fff",
                margin: "6px",
              }}
            >
              {products.length}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" startIcon={<AddCircleIcon />}>
            CRIAR NOVO
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
        }}
      >
        {products.map(({ name, description, id }, index) => (
          <ProductCard
            key={index}
            id={id}
            name={name}
            description={description}
            picture={""}
            link={`produtos/${id}`}
            onDelete={onDeleteProduct}
          />
        ))}
      </Box>
    </Box>
  );
}
