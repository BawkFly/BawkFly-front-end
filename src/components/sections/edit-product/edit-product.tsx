"use client";

import style from "./edit-product.module.scss";
import ElementFormProduct, {
  FormProductValues,
} from "@/components/elements/form-product/form-product";
import Api from "@/services/api/api";
import { getUserLoginAccessToken } from "@/services/auth/auth";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useEffect } from "react";

export type DataSectionProduct = {
  loading?: boolean;
  id: string;
};

export default function SectionEditProduct(data: DataSectionProduct) {
  const { loading, id } = data;

  const router = useRouter();

  const [form, setForm] = useState<FormProductValues | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Update não funcionando !");
  };

  useEffect(() => {
    getUserLoginAccessToken()
      .then((token) => {
        Api.private
          .getProduct(token, id)
          .then((response) => {
            setForm({
              name: { value: response.name, valid: false, invalid: false },
              description: {
                value: response.description,
                valid: false,
                invalid: false,
              },
              image: { value: null, valid: false, invalid: false },
              sellerName: {
                value: response.sallerInName,
                valid: false,
                invalid: false,
              },
              sellerEmail: {
                value: response.sallerInEmail,
                valid: false,
                invalid: false,
              },
              sellerPhoneNumber: {
                value: response.sallerInPhone,
                valid: false,
                invalid: false,
              },
              category: {
                value: response.category,
                valid: false,
                invalid: false,
              },
              format: { value: response.format, valid: false, invalid: false },
              price: { value: "", valid: false, invalid: false },
              products: { value: null, valid: false, invalid: false },
              markdown: {
                value: response.markdown,
                valid: false,
                invalid: false,
              },
              status: {
                value: !!response.status,
                valid: false,
                invalid: false,
              },
            });
          })
          .catch((error) => {
            console.error("Ocorreu um erro", error);
          });
      })
      .catch((error) => {
        console.error("Ocorreu um erro", error);
        router.replace("/auth/login");
      });
  }, []);

  return (
    <section id={style.SectionEditProduct}>
      <Container>
        {form && (
          <ElementFormProduct
            behavior="edit"
            values={form}
            setValues={setForm}
            onSubmit={onSubmit}
          />
        )}
      </Container>
    </section>
  );
}
