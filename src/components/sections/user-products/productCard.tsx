import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
  const { id, name, description, picture, onDelete, link } = data;

  return (
    <Card sx={{ width: "auto", borderRadius: "12px", margin: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link}>
          <Button size="small">Editar</Button>
        </Link>
        <Button
          size="small"
          onClick={() => {
            onDelete(id);
          }}
        >
          Excluir
        </Button>
      </CardActions>
    </Card>
  );
}
