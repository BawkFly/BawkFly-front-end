import SectionQuickPresentation from "@/components/sections/quick-presentation/quick-presentation";
import style from "./layout.module.scss";
import { Container, Grid } from "@mui/material";

export interface DataLayoutDashboard {
  children: React.ReactNode;
}

export default function LayoutDashboard(data: DataLayoutDashboard) {
  const { children } = data;

  return (
    <main className={style.main}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <SectionQuickPresentation />
          </Grid>
          <Grid item xs={4}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
