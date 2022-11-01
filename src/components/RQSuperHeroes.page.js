import { Link } from "react-router-dom";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fethcing", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after fetching error!", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heross</button>
      {/* {data?.map((heroName, i) => (
        <div key={i}>{heroName}</div>
      ))} */}

      {data?.data.map((hero, i) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
