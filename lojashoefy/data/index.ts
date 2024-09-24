import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
    categories: Category[],
    products: Product[]
};

export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Tênis',
            cover: 'https://static.netshoes.com.br/produtos/tenis-olympikus-delta-masculino/44/2I2-5006-244/2I2-5006-244_zoom1.jpg?ts=1706284031?ims=1088x'
        },
        {
            id: 2,
            title: 'Sapatos',
            cover: 'https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(transparent):quality(80)/elitedos/catalog/calcados-com-selo-couro/31026mog-31006pt.png'
        },
        {
            id: 3,
            title: 'Sandálias',
            cover: 'https://t-static.dafiti.com.br/MO1WwDlAG3zrFYCzbUfSAOvKV2Y=/fit-in/430x623/static.dafiti.com.br/p/vizzano-sand%c3%a1lia-vizzano-salto-grosso-nude-5137-9856547-1-zoom.jpg'
        },
        {
            id: 4,
            title: 'Sapatos Infantis',
            cover: 'https://t-static.dafiti.com.br/MO1WwDlAG3zrFYCzbUfSAOvKV2Y=/fit-in/430x623/static.dafiti.com.br/p/vizzano-sand%c3%a1lia-vizzano-salto-grosso-nude-5137-9856547-1-zoom.jpg'
        },
        {
            id: 5,
            title: 'Sapatos Femininos',
            cover: 'https://t-static.dafiti.com.br/MO1WwDlAG3zrFYCzbUfSAOvKV2Y=/fit-in/430x623/static.dafiti.com.br/p/vizzano-sand%c3%a1lia-vizzano-salto-grosso-nude-5137-9856547-1-zoom.jpg'
        }
    ],
    products: [
        // Categoria: Tênis (25 produtos)
        { id: 1, idCategory: 1, image: "https://m.media-amazon.com/images/I/61948-pIgYL._AC_SY575_.jpg", title: "Tênis Esportivo X1", description: "Confortável para correr.", price: 199.99 },
        { id: 2, idCategory: 1, image: "https://http2.mlstatic.com/D_NQ_NP_866786-MLB77623586470_072024-O.webp", title: "Tênis de Corrida", description: "Leve, ideal para alta performance.", price: 299.99 },
        { id: 3, idCategory: 1, image: "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/90/NQQ-4378-890/NQQ-4378-890_zoom1.jpg?ts=1724755093?ims=1088x", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
        {id: 4, idCategory: 1, image: "", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
        {id: 5, idCategory: 1, image: "", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
        
        
        // ... Adicionar mais 22 produtos na categoria Tênis
        
        // Categoria: Sapatos (25 produtos)
        { id: 26, idCategory: 2, image: "https://picsum.photos/id/25/200/200", title: "Sapato Social", description: "Elegante para eventos formais.", price: 499.99 },
        { id: 27, idCategory: 2, image: "https://picsum.photos/id/26/200/200", title: "Sapato de Couro", description: "Durável e resistente.", price: 299.99 },
        { id: 28, idCategory: 2, image: "https://picsum.photos/id/27/200/200", title: "Sapato Casual", description: "Perfeito para o dia a dia.", price: 199.99 },
        // ... Adicionar mais 22 produtos na categoria Sapatos
        
        // Categoria: Sandálias (20 produtos)
        { id: 51, idCategory: 3, image: "https://picsum.photos/id/50/200/200", title: "Sandália de Praia", description: "Leve e confortável.", price: 59.99 },
        { id: 52, idCategory: 3, image: "https://picsum.photos/id/51/200/200", title: "Sandália Casual", description: "Ideal para o verão.", price: 79.99 },
        { id: 53, idCategory: 3, image: "https://picsum.photos/id/52/200/200", title: "Sandália de Couro", description: "Durável e estilosa.", price: 99.99 },
        // ... Adicionar mais 17 produtos na categoria Sandálias
        
        // Categoria: Sapatos Infantis (15 produtos)
        { id: 71, idCategory: 4, image: "https://picsum.photos/id/70/200/200", title: "Sapato Infantil Colorido", description: "Confortável e divertido.", price: 49.99 },
        { id: 72, idCategory: 4, image: "https://picsum.photos/id/71/200/200", title: "Sandália Infantil", description: "Perfeita para brincadeiras.", price: 39.99 },
        { id: 73, idCategory: 4, image: "https://picsum.photos/id/72/200/200", title: "Tênis Infantil", description: "Leve e prático.", price: 89.99 },
        // ... Adicionar mais 12 produtos na categoria Sapatos Infantis

        // Categoria: Sapatos Femininos (15 produtos)
        { id: 86, idCategory: 5, image: "https://picsum.photos/id/85/200/200", title: "Sapato Feminino Elegante", description: "Design moderno.", price: 129.99 },
        { id: 87, idCategory: 5, image: "https://picsum.photos/id/86/200/200", title: "Sandália Feminina", description: "Confortável e estilosa.", price: 79.99 },
        { id: 88, idCategory: 5, image: "https://picsum.photos/id/87/200/200", title: "Salto Alto Feminino", description: "Elegante para ocasiões especiais.", price: 199.99 },
        // ... Adicionar mais 12 produtos na categoria Sapatos Femininos
    ]
};
