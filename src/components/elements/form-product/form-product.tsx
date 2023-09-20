import style from "./form-product.module.scss";
import { FormControlLabel, Grid } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";
import ReactQuill from "react-quill";
import ElementFormProductInput from "../form-product-input/form-product-input";
import { Switch, Button } from "@mui/material";

const Categorys = ["Texto", "Imagem", "Video", "Outro"];

export type FormField<T> = {
  value: T;
  valid: boolean;
  invalid: boolean;
};

export type FormProductValues = {
  name: FormField<string>;
  description: FormField<string>;
  image: FormField<File | null>;
  sellerName: FormField<string>;
  sellerEmail: FormField<string>;
  sellerPhoneNumber: FormField<string>;
  category: FormField<string>;
  format: FormField<string>;
  price: FormField<string>;
  products: FormField<File | null>;
  markdown: FormField<ReactQuill.Value>;
  status: FormField<boolean>;
};

export type DataElementFormProduct = {
  behavior: "new" | "edit";
  id?: string;
  values: FormProductValues;
  setValues: (data: FormProductValues) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function ElementFormProduct(data: DataElementFormProduct) {
  const { values, setValues, onSubmit, behavior } = data;
  const {
    name,
    image,
    category,
    description,
    format,
    price,
    products,
    sellerEmail,
    sellerName,
    sellerPhoneNumber,
    markdown,
    status,
  } = values;

  return (
    <div id={style.ElementFormProduct}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ElementFormProductInput
              type="image"
              label="Imagem principal"
              onChange={(event) => {
                const { valid, invalid } = image;
                const value =
                  (event as ChangeEvent<HTMLInputElement>).target.files?.item(
                    0
                  ) ?? null;
                values.image = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <ElementFormProductInput
              type="text"
              label="Nome do produto"
              value={name.value}
              onChange={(event) => {
                const { valid, invalid } = name;
                const { value } = event.target;
                values.name = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
            <ElementFormProductInput
              type="longText"
              label="Descrição"
              value={description.value}
              onChange={(event) => {
                const { valid, invalid } = description;
                const { value } = event.target;
                values.description = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <ElementFormProductInput
              type="text"
              label="Nome do vendedor"
              value={sellerName.value}
              onChange={(event) => {
                const { valid, invalid } = sellerName;
                const { value } = event.target;
                values.sellerName = { value, valid, invalid };
                setValues({ ...values });
              }}
            />

            <ElementFormProductInput
              type="email"
              label="Email"
              value={sellerEmail.value}
              onChange={(event) => {
                const { valid, invalid } = sellerEmail;
                const { value } = event.target;
                values.sellerEmail = { value, valid, invalid };
                setValues({ ...values });
              }}
            />

            <ElementFormProductInput
              type="tel"
              label="Telefone"
              value={sellerPhoneNumber.value}
              onChange={(event) => {
                const { valid, invalid } = sellerPhoneNumber;
                const { value } = event.target;
                values.sellerPhoneNumber = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <ElementFormProductInput
              type="select"
              label="Categoria"
              options={Categorys}
              value={category.value}
              onChange={(event) => {
                const { valid, invalid } = category;
                const { value } = event.target;
                values.category = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <ElementFormProductInput
              type="number"
              label="Preço"
              value={price.value}
              onChange={(event) => {
                const { valid, invalid } = price;
                const { value } = event.target;
                values.price = { value, valid, invalid };
                setValues({ ...values });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <ReactQuill
              className={style.richText}
              value={markdown.value}
              onChange={(event) => {
                const { valid, invalid } = markdown;
                const value = event;
                values.markdown = { value, valid, invalid };
                setValues({ ...values });
              }}
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
              ]}
            />
          </Grid>
          <Grid item xs={12} className={style.containerSwitch}>
            <FormControlLabel
              control={
                <Switch
                  checked={status.value}
                  onChange={(event) => {
                    const { valid, invalid } = status;
                    const value = event.target.checked;
                    values.status = { value, valid, invalid };
                    setValues({ ...values });
                  }}
                />
              }
              label="Status para venda"
            />
          </Grid>
          <Grid item xs={12} className={style.containerButtons}>
            <Button type="submit" variant="contained">
              {behavior === "new" && "Criar Produto"}
              {behavior === "edit" && "Salvar Alterações"}
            </Button>
            {behavior === "edit" && <Button variant="outlined">Excluir</Button>}
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
