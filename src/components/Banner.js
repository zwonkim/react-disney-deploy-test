import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import styled from "styled-components";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(undefined);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);

    const movieId =
      //Math.random() 0 이상 1 미만의 부동소숫점 의사 난수를 반환함
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    console.log(movieDetail);
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  //영화 정보가 없을 때 이미지를 불러오지 못 하기 때문에 movie의 초기값을 undefined로 설정하고 정보가 없을 때는 loading창을 띄움
  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!isClicked) {
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {/* title이 없으면 name, name도 없으면 original_name */}
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className='banner__buttons'>
            {/* 영화 정보가 useEffect에 들어있어서 ui가 만들어지는 게 먼저임. 옵셔널체이닝을 통해 정보가 있을 때만 정보를 가져오도록 */}
            {movie.videos?.results[0]?.key ? (
              <button
                className='banner__button play'
                onClick={() => setIsClicked(true)}
              >
                PLAY
              </button>
            ) : null}
          </div>
          <h5 className='banner__description'>
            {truncate(movie.overview, 100)}
          </h5>
        </div>
        <div className='banner--fadeBottom' />
      </header>
    );
  } else {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1`}
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
