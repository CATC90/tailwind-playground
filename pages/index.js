import Head from "next/head";
import React from "react";
import { Row } from "../components/row";
import { Search } from "../components/search";
import { Table } from "../components/table-wrapper";
import { TableBody } from "../components/table-body";
import { TableHeader } from "../components/table-header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Table>
          <TableHeader>
            <Search />
          </TableHeader>
          <TableBody>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </TableBody>
        </Table>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t bg-white">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
