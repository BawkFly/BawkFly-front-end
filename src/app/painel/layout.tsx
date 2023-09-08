import SectionMenuDashBoard from "@/components/sections/menu-dashboard/menu-dashboard";
import { Grid } from "@mui/material";

export interface DataLayoutDashboard {
  children: React.ReactNode;
}

export default function LayoutDashboard(data: DataLayoutDashboard) {
  const { children } = data;
  return (
    <main>
      <Grid container columns={16}>
        <Grid item xs={2}>
          <SectionMenuDashBoard />
        </Grid>
        <Grid item>
          {children}
        </Grid>
      </Grid>
    </main>
  );
}
