import { Suspense, lazy } from "react";

import { Loading } from "./LazyLoad/Loading";
import { Main } from "./UI/Main/Main";
import { Nav } from "./UI/Nav/Nav";
import banner from "/assets/Banner.jpg";

const Blur = lazy(() => import("./UI/Header/Blur"));
const Header = lazy(() => import("./UI/Header/Header"));

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      {/* Blur */}
      <Blur banner={banner} />

      {/* Banner */}
      <Header banner={banner} />

      {/* Nav */}
      <Nav />

      {/* Main */}
      <Main />
    </Suspense>
  );
};
