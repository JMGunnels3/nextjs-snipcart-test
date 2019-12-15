import ProductList from "../components/ProductList";
import Head from 'next/head'
// import "../assets/index.scss";

const Index = props => {
  return (
    <div className="app">
      <Head>
        <meta name="description" content="Buy beautiful, high quality carpetrs for your home." />
        <title>Beautiful, high quality carpets | CarpetCity</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.css" />
      </Head>
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <div hidden id="snipcart" data-api-key="ODI2NjE3MDctYzIzMS00MmQxLWFlZDktN2Q2YTFlNTBiZTllNjM3MTIwMzYxMTYwNTA4MTMx"></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.js"></script>
    </div>
  );
};
Index.getInitialProps = async () => {
  // Fetch from an API or CMS here
  return {
    products: [
      {
        id: "nextjs-seo_carpet1",
        name: "Straight and Narrow",
        price: 25.0,
        image: "https://cdn11.bigcommerce.com/s-fb6ki7xr/images/stencil/500x659/products/5723/13355/IMG_1284__70575.1565810266.jpg?c=2",
        description:
          "Revitalize your living room with this durable and stain hiding carpet."
      }
    ]
  };
};

export default Index;
