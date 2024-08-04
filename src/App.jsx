function App() {

  const ingredients = [
    {name: 'Flour', available: true},
    {name: 'Sugar', available: false},
    {name: 'Eggs', available: true},
    {name: 'Butter', available: true},
    {name: 'Vanilla Extract', available: false}
  ];
  
  return (
    <>
      <h1>Recipe Ingredients</h1>
      <ul>
        {ingredients.map((ingredient, index) => 
          <li 
            key={index} 
            className={ingredient.available ? 'available' : 'missing'}
          >
            {ingredient.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default App;
