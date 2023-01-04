import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

// {...movie} 로 구조분해할당해서 prop을 내렸기 때문에 이렇게 prop을 이렇게 쓸 수 있었음
const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef(null);
  console.log(ref.current);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
        <div className='modal' ref={ref}>
          <span
            className='modal-close'
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </span>
          <img
            className='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt='modal__poster-img'
          />
          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__user_perc'>100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className='modal__title'>{title ? title : name}</h2>
            <p className='modal__overview'>평점: {vote_average}</p>
            <p className='modal__overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
