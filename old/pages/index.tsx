import Head from "next/head";
import Header from "@/components/Header";
import Window from "@/components/Window";
import Footer from "@/components/Footer";
import type { GetStaticProps } from "next";
import graphQLClient from "@/graphql/graphQLClient";
import { SAMPLE_QUERY, TALLEST } from "@/graphql/queries";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  console.log("Making GraphQL request...");
  try {
    const data = await graphQLClient.request(TALLEST);
    console.log(data);
    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};

export default function Home({ data }: any) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Window />
        <Footer />
      </main>
    </>
  );
}