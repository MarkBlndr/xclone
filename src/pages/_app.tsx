import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";

import { SideNav } from "~/components/SideNav";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>X Clone</title>
        <meta
          name="description"
          content="This is an X (Twitter) clone by Mark Blinder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex items-start sm:pr-4">
        <SideNav />
        <div className="min-h-screen flex-grow border-x">
          <Component {...pageProps} /> {/* render all the children */}
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
