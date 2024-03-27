import css from './SearchBar.module.css'

const SearchBar=({onChange})=>{
return(
    <div className={css.filterBlock}>
    <label>Find contacts by name</label>
    <input className={css.inputFilter} type="text" onChange={(e)=>onChange(e.target.value)}></input>
    </div>
)
}

export default SearchBar