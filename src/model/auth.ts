const url = import.meta.env.VITE_API + "auth";

type onRegisterProps = {
    user: {
      name: string,
      email: string,
      password: string
    }
};

export async function onRegister({ user }: onRegisterProps) {

  const finalUrl = url + "/register";
  try {
        const response = await fetch(finalUrl, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Yype" : "application/json",
          },
          body: JSON.stringify(user)
        });
        if (!response.ok) {
          throw response;
        };
        const result = await response.json();
        window.localStorage.setItem("token", result.token);
        return result.success;
  } catch (error: any) {
        if (error.status) {
          const result = await error.json();
          throw result.error;  
        }else{
          throw "something went wrong";
        }
  };
};

type onLoginProps = {
    user: {
      email: string,
      password: string
    }
};

export async function onLogin({ user }: onLoginProps) {

  const finalUrl = url + "/login";
  try {
        const response = await fetch(finalUrl, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "content-type" : "application/json",
          },
          body: JSON.stringify(user)
        });
        if (!response.ok) {
          throw response;
        };
        const result = await response.json();
        window.localStorage.setItem("token", result.token);
        return result.success;
  } catch (error: any) {
        if (error.status) {
          const result = await error.json();
          throw result.error;  
        }else{
          throw "something went wrong";
        }
  };
};

export async function onCheckProfile(token:string) {

  const finalUrl = url + "/profile";
  try {
      const response = await fetch(finalUrl, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization" : `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw response;
      };
      const result = await response.json();
      return result;
  } catch (error: any) {
      throw (error);
  };
};
