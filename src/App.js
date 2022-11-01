import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "super-heroes",
          element: <SuperHeroesPage />,
        },
        {
          path: "rq-super-heroes",
          element: <RQSuperHeroesPage />,
        },
        {
          path: "rq-super-heroes/:heroId",
          element: <RQSuperHeroPage />,
        },
        {
          path: "rq-parallel",
          element: <ParallelQueriesPage />,
        },
        {
          path: "rq-dynamic-parallel",
          element: <DynamicParallelPage heroIds={[1, 3]} />,
        },
        {
          path: "rq-dependent-queries",
          element: <DependentQueriesPage email="vishwas@example.com" />,
        },
        {
          path: "rq-paginated-queries",
          element: <PaginatedQueriesPage />,
        },
        {
          path: "rq-infinite-queries",
          element: <InfiniteQueriesPage email="vishwas@example.com" />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
