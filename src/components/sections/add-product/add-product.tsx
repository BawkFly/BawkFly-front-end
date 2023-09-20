"use client";
import style from "./add-product.module.scss";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";
import ElementFormProduct, {
  FormProductValues,
} from "@/components/elements/form-product/form-product";
import Api from "@/services/api/api";
import { getUserLoginAccessToken } from "@/services/auth/auth";
import { BodyPostProduct } from "@/services/api/endpoints/produtct";

export type DataSectionAddProduct = {};

export default function SectionAddProduct(data: DataSectionAddProduct) {
  const router = useRouter();

  const [form, setForm] = useState<FormProductValues>({
    name: { value: "", valid: false, invalid: false },
    description: { value: "", valid: false, invalid: false },
    image: { value: null, valid: false, invalid: false },
    sellerName: { value: "", valid: false, invalid: false },
    sellerEmail: { value: "", valid: false, invalid: false },
    sellerPhoneNumber: { value: "", valid: false, invalid: false },
    category: { value: "", valid: false, invalid: false },
    format: { value: "", valid: false, invalid: false },
    price: { value: "", valid: false, invalid: false },
    products: { value: null, valid: false, invalid: false },
    markdown: { value: "", valid: false, invalid: false },
    status: { value: true, valid: false, invalid: false },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      name,
      category,
      description,
      format,
      image,
      markdown,
      price,
      products,
      sellerEmail,
      sellerName,
      sellerPhoneNumber,
      status,
    } = form;

    let valid = false;

    for (const [key, value] of Object.entries(form)) {
      valid = value.valid;
      if (!valid) break;
    }

    if (valid) {
      console.log("Dados invalidos !");
      return;
    }

    console.log("Enviado !");

    getUserLoginAccessToken()
      .then((token) => {
        const body: BodyPostProduct = {
          name: name.value,
          category: category.value,
          description: description.value,
          format: format.value,
          markdown: markdown.value.toString(),
          sallerInEmail: sellerEmail.value,
          sallerInName: sellerName.value,
          sallerInPhone: sellerPhoneNumber.value,
          status: status.value ? 1 : 0,
        };

        Api.private
          .postProduct(token, body)
          .then((respose) => {
            router.replace("/painel/produtos");
          })
          .catch((error) => {
            console.error("Ocorreu um erro", error);
          });
      })
      .catch((error) => {
        console.error("Ocorreu um erro", error);
      });
  };

  return (
    <section id={style.SectionAddProduct}>
      <Container>
        <ElementFormProduct
          behavior="new"
          values={form}
          setValues={setForm}
          onSubmit={onSubmit}
        />
      </Container>
    </section>
  );
}
