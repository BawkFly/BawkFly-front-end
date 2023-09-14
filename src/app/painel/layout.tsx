import style from "./style.module.scss";
import SectionMenuDashBoard from "@/components/sections/menu-dashboard/menu-dashboard";

export interface DataLayoutDashboard {
  children: React.ReactNode;
}

export default function LayoutDashboard(data: DataLayoutDashboard) {
  const { children } = data;

  return (
    <main className={style.mainLayout}>
      <SectionMenuDashBoard />
      <div className={style.content}>{children}</div>
    </main>
  );
}
