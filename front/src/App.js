import React, { useState} from "react";
import './App.css';

/*
* 영화 등록 컴포넌트
* 영화 리스트 보여주는 컴포넌트
*/
function App() {

  //서버의 데이터베이스에다가 저장

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [movies, setMovies] = useState([
  ]);

    const onChangeName = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value);
        console.log(price);
    }

    const onClickButton = () => {
      console.log(name, price);
      const temp = movies.concat({name: name, price: price})
      setMovies(temp);
    }

  return (
    <div className="App">
      <h1>hello World</h1>
      <div>
        <div>
          <h3>영화 리스트</h3>
          {movies.map((movie)=>{
            return(
              <div>
                <ul>
                  <li>영화 제목: {movie.name}</li>
                  <li>영화 가격: {movie.price}</li>
                </ul>
              </div>
            );
            })}
        </div>
            <h3>영화등록하기!</h3>
            <div>
                <span>영화 이름: </span>
                <input type="text" 
                value={name}
                onChange={onChangeName}
                placeholder="영화 이름을 입력해주세요!">
        
                </input>
            </div>
            <div>
                <span>영화 가격: </span>
                <input type="number" 
                value={price}
                onChange={onChangePrice}
                placeholder="영화 가격을 입력해주세요!">
        
                </input>
            </div>
            <button onClick={onClickButton}>등록하기</button>
        </div>
    </div>
  );
}

export default App;
