const API_BASE_URL = "http://localhost:3334";

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
    cache: "no-store",
  });

  if (!response.ok) throw new Error(response.statusText);

  return CodeResponse.OK;
}

type BodyUserLogin = {
  email: string;
  password: string;
};

type ResponseUserLogin = {
  access_token: string;
  token_type: string;
  refresh_token: string;
};

async function getUserLogin(body: BodyUserLogin): Promise<ResponseUserLogin> {
  const response = await fetch(
    `${API_BASE_URL}/user/login?email=${body.email}&password=${body.password}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    }
  );

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as ResponseUserLogin;
}

async function getNewAccessToken(refreshToken: string): Promise<string> {
  const response = await fetch(
    `${API_BASE_URL}/user/refresh-token?refresh_token=${refreshToken}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) throw new Error(response.statusText);

  const { access_token } = (await response.json()) as ResponseUserLogin;

  return access_token;
}

const Api = {
  public: { postUserRegister, getUserLogin },
  private: { getNewAccessToken },
};

export default Api;
