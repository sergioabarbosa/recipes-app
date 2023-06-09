import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FooterMenu from '../components/FooterMenu';

function ExplorerDrinksForIngredients() {
  const forceLimit = 12;
  const [myIgredients, setMyIgredients] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    try {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const getIgredientDrink = async () => {
        const requestIgredient = await fetch(URL);
        const response = await requestIgredient.json();
        const { drinks } = response;
        const base = drinks.map((drink) => (drink.strIngredient1));
        const ingredientsBase = base.slice(0, forceLimit);
        setMyIgredients(
          ingredientsBase,
        );
        console.log(ingredientsBase);
      };
      getIgredientDrink();
    } catch (error) {
      // console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${myIgredients}`;
      console.log(myIgredients);
      const getImageIngredent = async () => {
        const requestImageIgredient = await fetch(URL);
        const response = await requestImageIgredient.json();
        console.log(response);
        const { drinks } = response;
        console.log(drinks);
        const base = drinks.map((drink) => (drink.strDrinkThumb));
        console.log(drinks);
        const imageBase = base.slice(0, forceLimit);
        setImage(
          imageBase,
        );
        console.log(imageBase);
      };
      getImageIngredent();
    } catch (error) {
      // console.log(error);
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {Object.values(myIgredients)
          .map((igredient, index) => (
            <div key={ index }>
              <div>
                <img
                  src="www.thecocktaildb.com/images/ingredients/gin-Small.png"
                  alt="imagem do igrediente"
                />
              </div>
              Nome:
              {' '}
              {igredient}
            </div>
            // <h1>{igredient}</h1>
          ))}
        {/* {console.log(myIgredients)} */}
      </div>
      <FooterMenu />
    </div>
  );
}

export default ExplorerDrinksForIngredients;
