import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("Perform side effect after data fethcing", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after fetching error!", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );
  const {
    mutate: addHero,
    isLoading: isAddLoading,
    isError: isAddError,
    error: addError,
  } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}> Add Hero</button>
      </div>
      <br />

      <button onClick={refetch}>Fetch Heross</button>
      <br />
      <br />

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
