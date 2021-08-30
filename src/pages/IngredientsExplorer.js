import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';

function IngredientsExplorer() {
  const { myDrink, setMyDrink } = useState('');
  const { filterByName, setFilterByName } = useState('');
  // const { igredientDrink, setIgredientDrink } = useState();
  // const { igredientFood, setIgredientFood } = useState();
  // const history = useHistory();

  const igreHandleChange = ({ target: { value } }) => {
    setMyDrink({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  useEffect(() => {
    try {
      const URL = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${igreHandleChange}`;
      const getIgredientDrink = async () => {
        const requestDrink = await fetch(URL);
        const response = await requestDrink.json();
        console.log(response);
        setRandomDrink(response.drinks[0].idDrink);
      };
      getIgredientDrink();
    } catch (error) {
      console.log(error);
    }
  }, [myDrink]);

  return (

    <div>
      <Header />
      <input
        id="name"
        type="text"
        onChange={ igreHandleChange }
        data-testid="input-player-name"
      />

      <FooterMenu />
    </div>
  );
}

export default IngredientsExplorer;
