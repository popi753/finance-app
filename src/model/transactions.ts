// const url = import.meta.env.VITE_API;

export type transaction = {
//   id: number,
  name: string,
  category: string,
  date: string,
  amount: number,
}

export type meta = {
  current_page: number,
  last_page: number,
}

type result = {
  transactions: transaction[],
  meta: meta
}

type onFetchTransactionsProps = {
  page: number,
  search?: string,
  category?: string,
  sort?: string,
}

export async function onFetchTransactions({ page, category, search, sort }: onFetchTransactionsProps): Promise<result> {

 const mypromise = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(true);
    }, 1000);
 });

 await mypromise;

  const finalurl = "url" + "/transactions"
    + (page ? "?page=" + page : "")
    + (category ? (page ? "&" : "?") + "category=" + category : "")
    + (search ? ((page || category) ? "&" : "?") + "search=" + search : "")
    + (sort ? ((page || category || search) ? "&" : "?") + "sort=" + sort : "");

    console.log(finalurl);

    const transactions : transaction[] = [{name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:-45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:-45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},
             {name:"Emma Richarson", category:"Dining Out", date:"23 Jan 2024", amount:45.00},]

    return {transactions, meta: {current_page:1, last_page:10}};

//   try {
//     const response = await fetch(finalurl, {
//       method: "GET",
//       headers: {
//         "Accept": "application/json",
//       }
//     });
//     if (!response.ok) {
//       throw "something went wrong";
//     };
//     const result = await response.json();
//     
//     return result;
//   } catch (error: any) {
//     throw new Error((error));
//   }
};