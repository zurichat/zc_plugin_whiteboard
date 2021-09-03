import Head from "next/head";
import Home from "../src/components/Home/Home";
import Toolbar4 from "../src/components/Toolbar4/Toolbar4";

export default function App() {
  return (
    <div>
      <Head>
        <title>Whiteboard Plugin</title>
        <meta name="description" content="Built by Team Seneca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <Toolbar4/>
    </div>
  );
}
