import Head from "next/head";
import Home from "../src/components/Home/Home";

export default function App() {
  return (
    <div>
      <Head>
        <title>Whiteboard Plugin</title>
        <meta name="description" content="Built by Team Seneca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
