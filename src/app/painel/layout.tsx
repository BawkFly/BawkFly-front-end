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
      <div
        style={{ backgroundColor: "#151515", height: "100%" }}
        className={style.content}
      >
        {children}
      </div>
    </main>
  );
}
