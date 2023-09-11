import style from "./style.module.scss";
import SectionMenuDashBoard from "@/components/sections/menu-dashboard/menu-dashboard";
import { headers } from "next/headers";

export interface DataLayoutDashboard {
  children: React.ReactNode;
}

export default function LayoutDashboard(data: DataLayoutDashboard) {
  const { children } = data;
  return (
    <main className={style.mainLayout}>
      <SectionMenuDashBoard
        initialPage={headers().get("referer")?.split("/")?.at(4) || ""}
      />
      <div className={style.content}>{children}</div>
    </main>
  );
}
