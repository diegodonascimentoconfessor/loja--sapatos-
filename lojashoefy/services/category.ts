import { data } from "../data";


// database.ts
export type Product = {
    id: number;
    idCategory: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
  
  // O resto do seu código para criar a tabela e gerenciar produtos
  

export const getCategoryById = (id:number) => {
    return data.categories.find(item => item.id === id);
}

export const getAllCategories = () =>{
    return data.categories;
}