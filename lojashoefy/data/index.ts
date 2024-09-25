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
            cover: 'https://t-static.dafiti.com.br/MO1WwDlAG3zrFYCzbUfSAOvKV2Y=/it-in/430x623/staticf.dafiti.com.br/p/vizzano-sand%c3%a1lia-vizzano-salto-grosso-nude-5137-9856547-1-zoom.jpg'
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
     // { id: 1, idCategory: 1, image: "https://m.media-amazon.com/images/I/51E57XX95kL._AC_SX575_.jpg", title: "Tênis Esportivo X1", description: "Confortável para correr.", price: 199.99 },
    { id: 2, idCategory: 1, image: "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/18/FB9-8539-218/FB9-8539-218_zoom1.jpg?ts=1723226790?ims=1088x", title: "Tênis de Corrida", description: "Leve, ideal para alta performance.", price: 299.99 },
    { id: 3, idCategory: 1, image: "https://m.media-amazon.com/images/I/61npDanQWRL._AC_SY575_.jpg", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
    { id: 4, idCategory: 1, image: "https://m.media-amazon.com/images/I/41umfy5nUSL._AC_SX679_.jpg", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
    { id: 5, idCategory: 1, image: "https://m.media-amazon.com/images/I/51W4uOrz+9L._AC_SY575_.jpg", title: "Tênis Casual", description: "Design moderno e confortável.", price: 149.99 },
    { id: 6, idCategory: 1, image: "https://m.media-amazon.com/images/I/61mj-VekaaL._AC_SL1000_.jpg", title: "Tênis de Corrida Esportivo", description: "Perfeito para exercícios intensos.", price: 249.99 },
    { id: 7, idCategory: 1, image: "https://m.media-amazon.com/images/I/71nf7t0tFCL._AC_SY575_.jpg", title: "Tênis Moderno", description: "Estilo e conforto para o dia a dia.", price: 179.99 },
    { id: 8, idCategory: 1, image: "https://m.media-amazon.com/images/I/61yUds1fUEL._AC_SY575_.jpg", title: "Tênis de Esportes", description: "Resistente e leve.", price: 189.99 },
    { id: 9, idCategory: 1, image: "https://m.media-amazon.com/images/I/71JwC3YcdpL._AC_SY575_.jpg", title: "Tênis Leve", description: "Perfeito para caminhadas longas.", price: 139.99 },
    { id: 10, idCategory: 1, image: "https://m.media-amazon.com/images/I/51cIR+yHDJL._AC_SY575_.jpg", title: "Tênis Casual", description: "Simples e confortável.", price: 109.99 },
    { id: 11, idCategory: 1, image: "https://m.media-amazon.com/images/I/61BSpK7SP-L._AC_SY575_.jpg", title: "Tênis para Academia", description: "Design esportivo e robusto.", price: 219.99 },
    { id: 12, idCategory: 1, image: "https://imgnike-a.akamaihd.net/1920x1920/027915IMA11.jpg", title: "Tênis Nike Performance", description: "Alta performance para corridas.", price: 299.99 },
    { id: 13, idCategory: 1, image: "https://http2.mlstatic.com/D_NQ_NP_986435-MLB52266565556_112022-O.webp", title: "Tênis Casual Moderno", description: "Estilo urbano.", price: 199.99 },
    { id: 14, idCategory: 1, image: "https://static.netshoes.com.br/produtos/sapatenis-casual-couro-legitimo-confortavel-cadarco-estilo/06/LH5-0104-006/LH5-0104-006_zoom1.jpg?ts=1694580457", title: "Tênis Couro Casual", description: "Elegância e conforto.", price: 249.99 },
    { id: 15, idCategory: 1, image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/httpswww/catalog/kauany/tenis-masculino/dc2-8706.jpg", title: "Tênis Esportivo Kauany", description: "Ideal para atividades diárias.", price: 179.99 },
    { id: 16, idCategory: 1, image: "https://m.media-amazon.com/images/I/51fes9Hdf1L._AC_SY575_.jpg", title: "Tênis Confortável", description: "Macio e durável.", price: 159.99 },
    { id: 17, idCategory: 1, image: "https://useharttman.com.br/cdn/shop/files/Sce17d812c08d4d219f385a2de62b3c4c3.webp?v=1721078902&width=600", title: "Tênis Harttman", description: "Leve e respirável.", price: 229.99 },
    { id: 18, idCategory: 1, image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/rilufash/catalog/tenis-casual-masculino-cinza-1.JPG", title: "Tênis Cinza Casual", description: "Perfeito para todas as ocasiões.", price: 129.99 },
    { id: 19, idCategory: 1, image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/migration/b350fccb4d477b217280e40977d3397c6dd94648/tenis-crossfit-rockfit-azul-sola-preta-3.jpg", title: "Tênis Crossfit Rockfit", description: "Para alta performance.", price: 199.99 },
    { id: 20, idCategory: 1, image: "https://www.chiquebloja.com/cdn/shop/files/EBEEF0_b3e37985-cc21-40ef-af53-c95f5901288a_800x.png?v=1724701132?variant=39491769237546&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjwxsm3BhDrARIsAMtVz6O2bPX6zfPhgHt0Rw3835CSJtqr9Y_SqDa2tk7S-_YEYHlUKhwRZGAaAg0JEALw_wcB", title: "Tênis Casual Chic", description: "Estilo e conforto.", price: 169.99 },
    { id: 21, idCategory: 1, image: "https://useharttman.com.br/cdn/shop/files/T_nis_Masculino_Esportivo_Air_Harttman_TN332.webp?v=1725559293&width=600", title: "Tênis Air Harttman", description: "Desempenho esportivo avançado.", price: 259.99 },
    { id: 22, idCategory: 1, image: "https://supermixstore.com/cdn/shop/products/tenis-esportivo-casual-air-mesh-820-394.jpg?v=1634486069&width=700", title: "Tênis Air Mesh", description: "Leveza e respirabilidade.", price: 209.99 },

        
        // Categoria: Sapatos (25 produtos)
        
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
