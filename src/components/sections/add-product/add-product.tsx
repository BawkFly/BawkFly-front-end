"use client"
import React, { useState } from 'react';
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
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhoneNumber, setSellerPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [format, setFormat] = useState('');
  const [language, setLanguage] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<ProductItemProps[]>([]); // Maintain a list of products

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new product object
let newProduct: ProductItemProps = {
  name: productName,
  description: productDescription,
  image: '', // Initialize with an empty string
};

if (productImage) {
  // If productImage is not null, create the URL
  newProduct.image = URL.createObjectURL(productImage); // Convert the image file to a URL
}

// Add the new product to the list of products
setProducts([...products, newProduct]);
    // Reset form fields
    setProductName('');
  setProductDescription('');
  setProductImage(null);
  setSellerName('');
  setSellerEmail('');
  setSellerPhoneNumber('');
  setCategory('');
  setFormat('');
  setLanguage('');
  setPrice('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Get the selected image file
      setProductImage(e.target.files[0]);
    }
  };

  return (
    <section>
      <Container maxWidth="md" style={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Add a Product
        </Typography>
        <form onSubmit={handleProductSubmit}>
          <Grid container spacing={2}>
            {/* Product Image */}
            <Grid item xs={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="product-image">Product Image</InputLabel>
                <Input
                  id="product-image"
                  type="file"
                  onChange={handleImageChange}
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <TextField
                label="Product Description"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
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
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            required
          />
          <TextField
            label="Seller Email"
            fullWidth
            margin="normal"
            type="email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            required
          />
          <TextField
            label="Seller Phone Number"
            fullWidth
            margin="normal"
            type="tel"
            value={sellerPhoneNumber}
            onChange={(e) => setSellerPhoneNumber(e.target.value)}
            required
          />

          {/* Preferences */}
          <Typography variant="h6">Preferences</Typography>
          <Select
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value as string)}
            required
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>
          <TextField
            label="Format"
            fullWidth
            margin="normal"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            required
          />
          <TextField
            label="Language"
            fullWidth
            margin="normal"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
