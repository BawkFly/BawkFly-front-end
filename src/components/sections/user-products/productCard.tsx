import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface ProductCardProps {
  picture: any;
  name: string;
  description: string | undefined;
  link: string;
}

export default function (data: ProductCardProps) {
  const { name, description, link, picture } = data;

  return (
    <Link href={link} style={{ textDecoration: "none" }} title={name}>
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
          <Button size="small">Editar</Button>
          <Button size="small">Excluir</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
