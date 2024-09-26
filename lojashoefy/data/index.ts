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
            cover: 'https://cdn.dooca.store/154615/products/10na001-242-amarelo-4-2_1600x1600+fill_ffffff.jpg?v=1723140978'
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
        { id: 26, idCategory: 2, image: "https://m.media-amazon.com/images/I/61p6XnfmK3L._AC_SY575_.jpg", title: "Sapato Social", description: "Elegante para eventos formais.", price: 499.99 },
        { id: 27, idCategory: 2, image: "https://m.media-amazon.com/images/I/51AzLiHEHML._AC_SY575_.jpg", title: "Sapato de Couro", description: "Durável e resistente.", price: 299.99 },
        { id: 28, idCategory: 2, image: "https://m.media-amazon.com/images/I/51++PAjdZAL._AC_SY625_.jpg", title: "Sapato Casual", description: "Perfeito para o dia a dia.", price: 199.99 },
        { 
            id: 29, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/61p6XnfmK3L._AC_SY575_.jpg", 
            title: "Sapato Social Clássico em Couro Preto", 
            description: "Sapato social masculino em couro legítimo preto, ideal para ocasiões formais e elegantes. Confortável e estiloso.", 
            price: 80.00 
          },
          { 
            id: 30, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/51AzLiHEHML._AC_SY575_.jpg", 
            title: "Sapato Social Masculino Café em Couro", 
            description: "Sapato masculino social na cor café, feito em couro de alta qualidade, oferecendo conforto e sofisticação.", 
            price: 70.00 
          },
          { 
            id: 31, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/51++PAjdZAL._AC_SY625_.jpg", 
            title: "Sapato Social Masculino Couro com Fivela", 
            description: "Elegante sapato social masculino com fivela, confeccionado em couro legítimo, ideal para eventos formais.", 
            price: 86.00 
          },
          { 
            id: 32, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/41URJku2P1L._AC_SY575_.jpg", 
            title: "Sapato Social Masculino Preto com Solado Antiderrapante", 
            description: "Sapato social preto com solado antiderrapante, perfeito para conforto e segurança durante o uso prolongado.", 
            price: 50.00 
          },
          { 
            id: 33, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/61X+wcixjXS._AC_SX575_.jpg", 
            title: "Sapato Social Masculino Moderno em Couro", 
            description: "Design moderno e confortável, este sapato social masculino é ideal para o trabalho e eventos casuais.", 
            price: 75.00 
          },
          { 
            id: 34, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/61A8FF+BpoL._AC_SY575_.jpg", 
            title: "Sapato Social Masculino Confortável", 
            description: "Sapato social masculino com palmilha anatômica, ideal para longas jornadas de trabalho ou eventos formais.", 
            price: 74.00 
          },
          { 
            id: 35, 
            idCategory: 2, 
            image: "https://paivaness.com/cdn/shop/products/sapato-de-couro-social-masculino-marrom-38-872-519_500x.jpg?v=1696991427", 
            title: "Sapato Social Masculino Marrom em Couro", 
            description: "Sapato social de couro marrom, com acabamento elegante e ideal para ambientes corporativos.", 
            price: 79.00 
          },
          { 
            id: 36, 
            idCategory: 2, 
            image: "https://paivaness.com/cdn/shop/products/sapato-de-couro-social-masculino-preto-38-872-687_500x.jpg?v=1696991427", 
            title: "Sapato Social Masculino Preto Elegante", 
            description: "Sapato social preto com design elegante e acabamento refinado, perfeito para eventos e reuniões de negócios.", 
            price: 60.00 
          },
          { 
            id: 37, 
            idCategory: 2, 
            image: "https://static.netshoes.com.br/produtos/sapato-masculino-social-anatomico/38/7EX-0168-138/7EX-0168-138_zoom1.jpg?ts=1698691840?ims=1088x", 
            title: "Sapato Social Masculino Anatômico", 
            description: "Sapato social anatômico que oferece conforto extra, com acabamento em couro de alta qualidade.", 
            price: 80.00 
          },
          { 
            id: 38, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/51Eet5WdJ1L._AC_SY575_.jpg", 
            title: "Sapato Social com Detalhes em Couro", 
            description: "Sapato social masculino com detalhes em couro texturizado, unindo estilo e conforto.", 
            price: 65.00 
          },
          { 
            id: 39, 
            idCategory: 2, 
            image: "https://m.media-amazon.com/images/I/71XYWXHY-hL._AC_SX575_.jpg", 
            title: "Sapato Social Masculino Premium", 
            description: "Sapato social premium com acabamento de alta qualidade, ideal para executivos e ocasiões formais.", 
            price: 62.00 
          },
          { 
            id: 40, 
            idCategory: 2, 
            image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/bigionic/catalog/vicenza/3951-preto-1.jpg", 
            title: "Sapato Social em Couro Preto", 
            description: "Sapato social preto com design clássico e durabilidade em couro de alta qualidade.", 
            price: 49.00 
          },
          { 
            id: 41, 
            idCategory: 2, 
            image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/bigionic/catalog/vicenza/3951-mouro-3.jpg", 
            title: "Sapato Social Masculino Marrom Clássico", 
            description: "Sapato social marrom com design clássico e elegante, ideal para qualquer ocasião formal.", 
            price: 79.00 
          },
          { 
            id: 42, 
            idCategory: 2, 
            image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/bigionic/catalog/fotos/fotos-novas/377-preto-sapato-social-masculino-03.jpg", 
            title: "Sapato Social Masculino com Solado Macio", 
            description: "Sapato social masculino preto, com solado macio e design moderno, proporcionando conforto extra.", 
            price: 60.00 
          },
          { 
            id: 43, 
            idCategory: 2, 
            image: "https://www.lojausualwear.com.br/cdn/shop/files/Sadadfc01ed6543ad81382e76b452265bS_700x.webp?v=1718658831", 
            title: "Sapato Social Casual e Confortável", 
            description: "Sapato social casual, leve e confortável, ideal para uso diário em ambientes corporativos.", 
            price: 68.00 
          },
          { 
            id: 44, 
            idCategory: 2, 
            image: "https://www.amazon.com.br/Sapato-Masculino-Elegante-Costurado-Confort%C3%A1vel/dp/B0CJYH131K?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1QC10W23U0A2R", 
            title: "Sapato Social Masculino Elegante Costurado", 
            description: "Sapato social com costura reforçada, proporcionando durabilidade e elegância.", 
            price: 66.00 
          },
          { 
            id: 45, 
            idCategory: 2, 
            image: "https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(80)/bigionic/catalog/italy-loye/02img-5821.jpg", 
            title: "Sapato Social Estilo Italiano", 
            description: "Sapato social estilo italiano, com design refinado e acabamento superior em couro.", 
            price: 55.00 
          },
          
        // ... Adicionar mais 22 produtos na categoria Sapatos
        
        // Categoria: Sandálias (20 produtos)
        { id: 46, idCategory: 3, image: "https://m.media-amazon.com/images/I/41n3PfklF2L._AC_SY575_.jpg", title: "Chinelo Casual Comfort", description: "Chinelo masculino confortável, ideal para o uso diário.", price: 49.99 },
        { id: 47, idCategory: 3, image: "https://m.media-amazon.com/images/I/41MDJYZglRL._AC_SY575_.jpg", title: "Chinelo de Praia Flex", description: "Perfeito para dias ensolarados na praia, com design flexível.", price: 69.99 },
        { id: 48, idCategory: 3, image: "https://m.media-amazon.com/images/I/51NlZIRfw3L._AC_SY575_.jpg", title: "Sandália Casual Masculina", description: "Sandália de alta durabilidade para ocasiões casuais.", price: 74.99 },
        { id: 49, idCategory: 3, image: "https://m.media-amazon.com/images/I/61NPc+mqsUL._AC_SY575_.jpg", title: "Chinelo Sport Vibe", description: "Chinelo com design esportivo e solado confortável.", price: 89.99 },
        { id: 50, idCategory: 3, image: "https://m.media-amazon.com/images/I/417eBNaAy0L._AC_SY575_.jpg", title: "Chinelo Conforto Diurno", description: "Ideal para quem busca conforto em todas as atividades do dia.", price: 59.99 },
        { id: 51, idCategory: 3, image: "https://m.media-amazon.com/images/I/51xPzhFohDL._AC_SY575_.jpg", title: "Chinelo Leve e Estiloso", description: "Chinelo leve com design moderno, excelente para o dia a dia.", price: 64.99 },
        { id: 52, idCategory: 3, image: "https://m.media-amazon.com/images/I/51KKT1sJBCL._AC_SY575_.jpg", title: "Sandália Casual Lux", description: "Sandália com acabamento premium, perfeita para ocasiões especiais.", price: 79.99 },
        { id: 53, idCategory: 3, image: "https://m.media-amazon.com/images/I/51KKT1sJBCL._AC_SY575_.jpg", title: "Sandália Casual Lux II", description: "Modelo semelhante, com leve variação no design.", price: 82.99 },
        { id: 54, idCategory: 3, image: "https://m.media-amazon.com/images/I/61mxt-eGPnL._AC_SY575_.jpg", title: "Chinelo Esportivo Masculino", description: "Resistente e confortável para atividades físicas e caminhadas longas.", price: 77.99 },
        { id: 55, idCategory: 3, image: "https://m.media-amazon.com/images/I/61P297e1VOL._AC_SY575_.jpg", title: "Chinelo Basic Comfort", description: "Design simples e confortável para o uso diário.", price: 59.99 },
        { id: 56, idCategory: 3, image: "https://m.media-amazon.com/images/I/41n3PfklF2L._AC_SY575_.jpg", title: "Chinelo Classic Fit", description: "Chinelo clássico com ajuste perfeito e solado macio.", price: 49.99 },
        { id: 57, idCategory: 3, image: "https://m.media-amazon.com/images/I/515DP-BT5PL._AC_SY575_.jpg", title: "Sandália Summer Breeze", description: "Ideal para dias quentes, com ventilação adequada para os pés.", price: 79.99 },
        { id: 58, idCategory: 3, image: "https://m.media-amazon.com/images/I/518Yc3wneoL._AC_SX575_.jpg", title: "Chinelo Esporte Fit", description: "Perfeito para caminhadas e exercícios leves ao ar livre.", price: 71.99 },
        { id: 59, idCategory: 3, image: "https://m.media-amazon.com/images/I/617X-3gAu2L._AC_SY575_.jpg", title: "Sandália Masculina Confort", description: "Sandália masculina com solado macio e ajuste confortável.", price: 83.99 },
        { id: 60, idCategory: 3, image: "https://m.media-amazon.com/images/I/81phan0s0xL._AC_SY575_.jpg", title: "Chinelo Summer Wave", description: "Chinelo com design praiano, leve e resistente à água.", price: 72.99 },
        { id: 61, idCategory: 3, image: "https://static.netshoes.com.br/produtos/chinelo-masculino-de-dedo-cartago-montreal-11729/06/G70-2780-006/G70-2780-006_zoom1.jpg?ts=1706537781?ims=1088x", title: "Chinelo Cartago Montreal", description: "Chinelo clássico Cartago, ideal para o conforto diário.", price: 67.99 },
        { id: 62, idCategory: 3, image: "https://m.media-amazon.com/images/I/51woSZgfl0L._AC_SY575_.jpg", title: "Chinelo Relax Feet", description: "Modelo leve com amortecimento ideal para o uso prolongado.", price: 68.99 },
        { id: 63, idCategory: 3, image: "https://m.media-amazon.com/images/I/617X-3gAu2L._AC_SY575_.jpg", title: "Chinelo Beach Comfort", description: "Modelo casual para quem ama passar o tempo na praia.", price: 79.99 },
        { id: 64, idCategory: 3, image: "https://m.media-amazon.com/images/I/51DF7F1yX4L._AC_SY575_.jpg", title: "Chinelo Classic Sport", description: "Chinelo com design esportivo, ótimo para atividades ao ar livre.", price: 75.99 },
        { id: 65, idCategory: 3, image: "https://m.media-amazon.com/images/I/61InWj9FDrL._AC_SY575_.jpg", title: "Sandália Casual Day", description: "Sandália versátil para o dia a dia com conforto extra.", price: 79.99 },
        
        // ... Adicionar mais 17 produtos na categoria Sandálias
        
        // Categoria: Sapatos Infantis (15 produtos)
        { id: 66, idCategory: 4, image: "https://cdn.dooca.store/154615/products/10na001-242-amarelo-4-2_1600x1600+fill_ffffff.jpg?v=1723140978", title: "", description: "", price: 49.99 },
        { id: 67, idCategory: 4, image: "https://kimimocalcados.cdn.magazord.com.br/img/2024/06/produto/900/babuche-infantil-menino-3.jpg?ims=600x600", title: "", description: "", price: 39.99 },
        { id: 68, idCategory: 4, image: "https://kimimocalcados.cdn.magazord.com.br/img/2024/06/produto/862/sandalia-infantil-menina-3.jpg?ims=600x600", title: "", description: "", price: 89.99 },
        { id: 69, idCategory: 4, image: "https://cdn.dooca.store/154615/products/10me001-242-rosa-2-2_620x620+fill_ffffff.jpg?v=1723140907", title: "", description: "", price: 89.99 },
        { id: 70, idCategory: 4, image: "https://images.tcdn.com.br/img/img_prod/693399/sandalia_infantil_masculina_chinelo_infantil_masculino_1541_1_7cdd33455172d0c8921e0de9e1f73f47.jpg", title: "", description: "", price: 89.99 },
        { id: 71, idCategory: 4, image: "https://static.netshoes.com.br/produtos/chinelo-infantil-ipanema-super-mario-menino/92/J07-7354-392/J07-7354-392_zoom1.jpg?ts=1719227470?ims=1088x", title: "", description: "", price: 89.99 },
        { id: 72, idCategory: 4, image: "https://static.zattini.com.br/produtos/chinelo-infantil-grendene-ipanema-sonic-race-menino/87/CDT-2675-187/CDT-2675-187_zoom1.jpg?ts=1719857819?ims=1088x", title: "", description: "", price: 89.99 },
        { id:73 , idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58911491-1200-auto?v=638591476334600000&width=1200&height=auto&aspect=true", title: "", description: "", price: 89.99 },
        { id: 74, idCategory: 4, image: "https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwc2349601/product-images/4148304_1069_TOP-TIMES-FLAMENGO_A.png?sw=680&sh=680", title: "", description: "", price: 89.99 },
        { id: 75, idCategory: 4, image: "https://static.netshoes.com.br/produtos/papete-juvenil-rider-line-plus-ii/24/G71-3160-024/G71-3160-024_zoom1.jpg?ts=1719858817?ims=1088x  ", title: "", description: "", price: 89.99 },
        { id: 76, idCategory: 4, image: "https://www.riachuelo.com.br/sandalia-papete-infantil-rider-free-style-grendene-15426084_sku_azul-claro?sku=15426084002&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1ACXbeQx53PWhboOt9gcV1z9_4ej04k5rp8DlyN77ze8s_dlLB_FGBoC3BAQAvD_BwE  ", title: "", description: "", price: 89.99 },
        { id: 77, idCategory: 4, image: "https://images2.marisa.com.br/medias/sys_master/images/images/hf9/he0/15788902481950/SANDALIA-INFO-GRENDENE-23050-AZM-23-24-10056320350-C1.jpg ", title: "", description: "", price: 89.99 },
        { id: 78, idCategory: 4, image: "", title: "", description: "", price: 89.99 },
        { id: 79, idCategory: 4, image: "", title: "", description: "", price: 89.99 },
        { id: 80, idCategory: 4, image: "", title: "", description: "", price: 89.99 },
        { id: 81, idCategory: 4, image: "", title: "", description: "", price: 89.99 },


        // ... Adicionar mais 12 produtos na categoria Sapatos Infantis

        // Categoria: Sapatos Femininos (15 produtos)
        { id: 86, idCategory: 5, image: "https://picsum.photos/id/85/200/200", title: "Sapato Feminino Elegante", description: "Design moderno.", price: 129.99 },
        { id: 87, idCategory: 5, image: "https://picsum.photos/id/86/200/200", title: "Sandália Feminina", description: "Confortável e estilosa.", price: 79.99 },
        { id: 88, idCategory: 5, image: "https://picsum.photos/id/87/200/200", title: "Salto Alto Feminino", description: "Elegante para ocasiões especiais.", price: 199.99 },
        // ... Adicionar mais 12 produtos na categoria Sapatos Femininos
    ]
};
