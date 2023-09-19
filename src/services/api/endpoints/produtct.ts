import { API_BASE_URL } from "../api";

export type ResponseGetProduct = {
  name: string;
  format: string;
  markdown: string;
  sallerInName: string;
  sallerInEmail: string;
  sallerInPhone: string;
  category_id: string;
  id: string;
  owner_id: string;
  description: string;
  status: number;
  created_at: string;
};

export async function getProducts(accessToken: string): Promise<Array<ResponseGetProduct>> {
  const response = await fetch(`${API_BASE_URL}/product`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-cache",
  });

  if (!response.ok) throw new Error("Error em Get Products");

  const rawData = await response.json();

  return rawData as Array<ResponseGetProduct>;
}
