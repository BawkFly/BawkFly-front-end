"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  Grid,
} from '@mui/material';
import ProductItem, { ProductItemProps } from "@/components/sections/products/productsItem"; // Import the ProductItem component

export type DataSectionAddProduct = {};


export default function SectionAddProduct(data: DataSectionAddProduct) {
  type FormField<T> = {
    value:T,
    valid:boolean,
    invalid:boolean
  }
  
  type FormProduct = {
    productName:FormField<string>,
    productDescription:FormField<string>,
    productImage:FormField<File | null>,
    sellerName:FormField<string>,
    sellerEmail:FormField<string>,
    sellerPhoneNumber:FormField<string>,
    category:FormField<string>,
    format:FormField<string>,
    language:FormField<string>,
    price:FormField<string>,
    products:FormField<ProductItemProps[]>,
    
  }
  const [form,setForm] = useState<FormProduct>({
    productName:{value:"",valid:false,invalid:false},
    productDescription:{value:"",valid:false,invalid:false},
    productImage:{value:null,valid:false,invalid:false},
    sellerName:{value:"",valid:false,invalid:false},
    sellerEmail:{value:"",valid:false,invalid:false},
    sellerPhoneNumber:{value:"",valid:false,invalid:false},
    category:{value:"",valid:false,invalid:false},
    format:{value:"",valid:false,invalid:false},
    language:{value:"",valid:false,invalid:false},
    price:{value:"",valid:false,invalid:false},
    products:{value:([]),valid:false,invalid:false},

  });

  const onSubmit=(event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  }

  const onChangeName = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.productName={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeDescrition = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.productDescription={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeProductImage = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.files[0];
    form.productImage={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeSellerName = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.sellerName={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeSellerEmail = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.sellerEmail={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeSellerPhoneNumber = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.sellerPhoneNumber={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeCategory = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.category={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeFormat = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.format={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangeLanguage = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.language={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  const onChangePrice = (event:ChangeEvent<HTMLInputElement>) => {
    const newValue=event.target.value;
    form.price={value:newValue,valid:false,invalid:false}
    setForm({...form})
  }
  
  const [products, setProducts] = useState<ProductItemProps[]>([]); // Maintain a list of products

  return (
    <section>
      <Container maxWidth="md" style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Add a Product
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            {/* Product Image */}
            <Grid item xs={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="product-image">Product Image</InputLabel>
                <Input
                  id="product-image"
                  type="file"
                  onChange={onChangeProductImage}
                  required
                />
              </FormControl>
            </Grid>

            {/* Product Name and Description */}
            <Grid item xs={8}>
              <TextField
                label="Product Name"
                fullWidth
                margin="normal"
                value={form.productName.value}
                onChange={onChangeName}
                required
              />
              <TextField
                label="Product Description"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={form.productDescription.value}
                onChange={onChangeDescrition}
                required
              />
            </Grid>
          </Grid>

          {/* Seller Information */}
          <Typography variant="h6">Seller Information</Typography>
          <TextField
            label="Seller Name"
            fullWidth
            margin="normal"
            value={form.sellerName.value}
            onChange={onChangeSellerName}
            required
          />
          <TextField
            label="Seller Email"
            fullWidth
            margin="normal"
            type="email"
            value={form.sellerEmail.value}
            onChange={onChangeSellerEmail}
            required
          />
          <TextField
            label="Seller Phone Number"
            fullWidth
            margin="normal"
            type="tel"
            value={form.sellerPhoneNumber.value}
            onChange={onChangeSellerPhoneNumber}
            required
          />

          {/* Preferences */}
          <Typography variant="h6">Preferences</Typography>
          <Select
            label="Category"
            fullWidth
            value={form.category.value}
            onChange={onChangeCategory}
            required
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>
          <TextField
            label="Format"
            fullWidth
            margin="normal"
            value={form.format.value}
            onChange={onChangeFormat}
            required
          />
          <TextField
            label="Language"
            fullWidth
            margin="normal"
            value={form.price.value}
            onChange={onChangePrice}
            required
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            type="number"
            value={form.price.value}
            onChange={onChangePrice}
            required
          />

          <Button variant="contained" color="primary" fullWidth type="submit">
            Add Product
          </Button>
        </form>
      </Container>

    </section>
  );
}
