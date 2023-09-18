const API_BASE_URL = "http://localhost:3334";

// const defaultOptions: RequestInit = {
//   headers: {
//     Accept: "*/*",
//   },
//   cache: "no-store",
// };

enum CodeResponse {
  OK = 200,
  VALIDATION_ERRO = 422,
  ERROR = 400,
}

type BodyUserRegister = {
  name: string;
  email: string;
  password: string;
};

async function postUserRegister(body: BodyUserRegister): Promise<CodeResponse> {
  const response = await fetch(`${API_BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error(response.statusText);

  return CodeResponse.OK;
}

const Api = {
  public: { postUserRegister },
  private: {},
};

export default Api;
