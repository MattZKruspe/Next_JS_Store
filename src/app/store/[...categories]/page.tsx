interface CategoryProps{

    params:{
        categories: String
    }

}

export default function Category(props:CategoryProps){

    const { categories } = props.params

    return(
        <h1>Categoria Dinámica {categories}</h1>
    )
}
