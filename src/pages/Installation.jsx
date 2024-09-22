import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";

const Installation = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Installation</h1>
        <p className="mt-4">To install api-flex via npm, run:</p>
        <CodeBlock code={`npm install api-flex`} language="bash" />
      </main>
      <Footer />
    </>
  );
};

export default Installation;
