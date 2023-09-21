import { handleLogout } from "@/services/auth/auth";

export default function PageDashboard() {
  return (
    <main>
      <button onClick={handleLogout}>logout</button>
    </main>
  );
}
