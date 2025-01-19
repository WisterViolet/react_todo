export default function SearchBar({filterText, isUnfinishedOnly, onFilterTextChange, onIsUnfinishedOnlyChange}:{
    filterText: string,
    isUnfinishedOnly: boolean,
    onFilterTextChange: (filterText:string)=>void,
    onIsUnfinishedOnlyChange: (checked:boolean)=>void
  }){
    return (
      <form>
        <input 
          type="text" 
          placeholder='Search' 
          value={filterText} 
          onChange={(e)=>onFilterTextChange(e.target.value)}/>
        <label>
        <input 
          type="checkbox" 
          checked={isUnfinishedOnly}
          onChange={(e)=>onIsUnfinishedOnlyChange(e.target.checked)} />Only show tasks unfinished
        </label>
      </form>
    );
  }