// components/Products.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from '@mui/material';

export type ProductItemProps = {
  name: string;
  description: string;
  image: string; // You can pass an image URL here
}

const ProductItem: React.FC<ProductItemProps> = ({ name, description, image }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Product Image">
            <img src={image} alt={name} />
          </Avatar>
        }
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
