import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";
import {styled} from "styled-components";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [error,setError] = useState(null);
  const [foodData,setFoodData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [btn,setBtn]= useState("");
    useEffect(()=>{
    async function fetchFoodData(){
      setLoading(true)
      try {
        const response = await fetch(BASE_URL);
      const data = await response.json();
      setFilteredData(data);
      setFoodData(data);
      setLoading(false);
      } catch (error) {
        setError("unable to load data....")
      }
    }
    fetchFoodData();
  },[])
  function  handleChange(event) {
    let searchValue = event.target.value;
    if(searchValue===""){
      setFilteredData(null);
    }
    const filter = foodData?.filter((food)=>(
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    ))
    setFilteredData(filter);
}

const filterBtns = [
{
  name:"All",
  type:"all"
},
{
  name:"Breakfast",
  type:"breakfast"
},
{
  name:"Lunch",
  type:"lunch"
},
{
  name:"Dinner",
  type:"dinner"
},
]
function handleClick(type){
  if(type=="all"){
    setFilteredData(foodData);
    setBtn("all");
    return;
  }
  const filter = foodData?.filter((food)=>(
    food.type.toLowerCase().includes(type.toLowerCase())
  ))
  setFilteredData(filter);

  
}

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading🚀🚀...</div>
  
  
  return <div>
    <Container>
      <TopContainer>
        <h1>G<span className="red">o</span> F< span className="green">oo</span>d</h1>
        <div className="search">
          <input onChange={handleChange} type="text" placeholder="Search food.." />
        </div>
      </TopContainer>
      <FilterButton>
        {filterBtns?.map(bntObj=>(
          <button onClick={()=> handleClick(bntObj.type)}>{bntObj.name}</button>
        ))}
      </FilterButton>
    </Container>
    <FoodContainer>
      <SearchResult foodData={filteredData}/>
    </FoodContainer>
  </div>;
};

export default App;
const Container = styled.div`
  height: 25vh;
  background-color:#323334 ;
  max-width: 1280px;
  margin: 0 auto;
  display:  flex;
  flex-direction: column;
  @media (width < 480px){
    height:20vh;
  }
  
`;
const TopContainer =styled.div`
   display: flex;
   
   justify-content: space-between;
   align-items: center;
   padding: 20px 34px;
   h1{
    font-style: oblique;
    word-spacing: 8px;
    letter-spacing: 2px;
    .red{
      color : red;
    }
    .green{
      color: #75c104;
    }
   }
   .search>input{
    width: 250px;
    padding: 5px 10px;
    border: 1px solif transparent;
    border-radius: 5px;
    outline: none;
   }
   @media (width < 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    margin-bottom: 10px;
   }
   
`
const FilterButton=styled.div`
display: flex;
justify-content: center;
gap: 15px;
  button{
    background-color: #75c104;
    border: none;
    padding: 5px 15px;
    border: 1.3px solid transparent;
    border-radius: 4px;
    cursor: pointer;

  }
  button:hover{
    background-color: #89df07;
  }
`
const FoodContainer = styled.div`
background-image: url('/bg.png');
background-size: cover;
background-origin:border-box;
min-height: 75vh;
max-width: 1280px;
margin: 0 auto;
display: flex;
/* align-items: center; */
justify-content: center;
align-items: center;


@media (width< 480px) {
  min-height: 80vh;
  align-items: flex-start;
  
}

`
