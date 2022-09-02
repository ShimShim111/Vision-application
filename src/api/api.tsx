import { create } from "apisauce";
import { useQuery } from 'react-query';
const API_BASE_URL = 'https://api.github.com'
const api = create({
  baseURL: API_BASE_URL,
  // headers: { "Content-Type": "application/json", "Accept-Language": "en" },
});
//   const queryClient = useQueryClient();

export const getRepos = async () => {
  const per_page= 20
  const name= 'ahmed' 
  const sort ='desc' 
  // const sort ='asc' 
  const response: any = await api.get(`https://api.github.com/search/repositories?q=${name}+in%3Aname&type=Repositories&per_page=${per_page}&order=${sort}`); //asc //desc
    
  // const response: any = await api.get('https://api.github.com/users/mojombo/repos');
  return response.data;
};

export const getAllLang = async (url:any) => {
  const response: any = await api.get(url);
  return response.data;
};

// export const getRepos = async () =>{
//     await fetch(`https://api.github.com/repositories`)
//     .then(res => res.json())
//     .then(data => {return data})
//    ;
// }



