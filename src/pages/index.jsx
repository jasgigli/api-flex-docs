import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">
          Welcome to api-flex Documentation
        </h1>
        <p className="mt-4">
          api-flex is a lightweight and powerful library that simplifies API
          integration...
        </p>
        <h2 className="text-2xl font-bold mt-8">Key Features</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Unified API for fetch and axios</li>
          <li>Automatic Retries</li>
          <li>Token Management</li>
          <li>Error Logging</li>
          <li>Response Caching</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Home;
