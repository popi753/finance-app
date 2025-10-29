// const url = import.meta.env.VITE_API;

type onRegisterProps = {
  formData: FormData
};

export async function onRegister({ formData }: onRegisterProps) {
  console.log(formData)
  localStorage.setItem("token", "future_token_here");
  return true;

  // const finalUrl = url + "/register";
  // try {
  //   const response = await fetch(finalUrl, {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //     },
  //     body: formData,
  //   });
  //   if (!response.ok) {
  //     const result = await response.json();
      
  //     throw result.errors;
  //   };
  //   const result = await response.json();
  //   window.localStorage.setItem("token", result.token);
  //   return result;
  // } catch (error: any) {
  //   console.log(error)
  //   throw (error);
  // };
};


type onLoginProps = {
  formData: FormData
};

export async function onLogin({ formData }: onLoginProps) {
  console.log(formData)
  localStorage.setItem("token", "future_token_here");
  return true;

  // const finalUrl = url + "/login";
  // try {
  //   const response = await fetch(finalUrl, {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body : formData,
  //   });
  //   if (!response.ok) {
  //     const result = await response.json();
  //     throw result.errors;

  //   };
  //   const result = await response.json();
  //   window.localStorage.setItem("token", result.token);
  //   return result;
  // } catch (error: any) {
  //   console.log(error)
  //   throw (error);
  // };
};



export async function onCheckProfile(token:string) {
  console.log(token)
  // localStorage.setItem("token", "future_token_here");
  return true;

  // const finalUrl = url + "/check-profile";
  // try {
  //   const response = await fetch(finalUrl, {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //     },
  //     body: formData,
  //   });
  //   if (!response.ok) {
  //     const result = await response.json();
      
  //     throw result.errors;
  //   };
  //   const result = await response.json();
  //   window.localStorage.setItem("token", result.token);
  //   return result;
  // } catch (error: any) {
  //   console.log(error)
  //   throw (error);
  // };
};
