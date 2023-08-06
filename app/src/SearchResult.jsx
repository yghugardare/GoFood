import { styled } from "styled-components";
import { BASE_URL } from "./App";

function SearchResult({ foodData }) {
  return (
    <FoodCards>
      {/* map over food data and create a card for each item */}
      {/* dont forget to use optional chaining */}
      {foodData?.map((food) => (
        <Card>
          <div className="image">
            <img src={BASE_URL + food.image} alt="food image" />
          </div>
          <div className="info">
            <h2>{food.name}</h2>
            <p>{food.text}</p>
            <button>${food.price.toFixed(2)}</button>
          </div>
        </Card>
      ))}
    </FoodCards>
  );
}

export default SearchResult;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  row-gap: 32px;
  column-gap: 20px;
`;
const Card = styled.div`
  padding: 20px 10px;
  width: 340px;
  height: 167px;
  display: flex;
  align-items: center;
  border-radius: 19.447px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  @media (width<480px){
    position: relative;
  top: 40px;
  }
  .info {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: end;
    /* flex-wrap: wrap; */
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
    button {
      border-radius: 5px;
      background: #ff4343;
      color: white;
      padding: 6px 10px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid transparent;
    }
    button:hover {
      background-color: transparent;
      border: 1px solid #ff4343;
    }
  }
`;
