const recipes = [
    {
        id: 1,
        name: "Potato"
    }
]

const RecipeBook = () => {
    return (<>
        <h1>Recipe Book</h1>
        <ol>
            <li>{recipes[0]["name"]}</li>
        </ol>

    </>)
}


export default RecipeBook