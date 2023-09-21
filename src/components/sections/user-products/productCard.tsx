import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Link from "next/link";
interface ProductCardProps {
  id: string;
  picture: any;
  name: string;
  description: string | undefined;
  link: string;
  onDelete: (id: string) => void;
}

export default function ProductCard(data: ProductCardProps) {
  const { id, name, description, onDelete, link } = data;

  return (
    <Card
      sx={{
        width: "auto",
        borderRadius: "12px",
        margin: "10px",
        maxHeight: "350px",
        cursor: "pointer",
        backgroundColor: "#242424",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        image="https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
      />
      <CardContent
        sx={{
          hwidth: "1000px",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="#fcfcfc">
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="overline" color="#fcfcfc">
            vendas: 0
          </Typography>
          <Typography gutterBottom variant="overline" color="#fcfcfc">
            {" "}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
