import "./videos.css";
import { MovieCard } from "../../Streaming Components/MovieCard component/MovieCard";
import { useEffect, useState } from "react";
import { searchForVid } from "../../../api/requests";
import Form from "react-bootstrap/Form";
export function Videos({ videos, type }) {
  const [category, setCategory] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [renderedVids, setRenderedVids] = useState(videos);
  useEffect(() => {
    if (searchVal.length > 0 || category !== "") {
      searchForVid(type, category, searchVal)
        .then((res) => {
          setRenderedVids(res.data.data);
        })
        .catch((error) => setRenderedVids([]));
    } else {
      setRenderedVids(videos);
    }
  }, [searchVal, category, videos, type]);
  const searchHandler = (e) => {
    setSearchVal(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.selectedOptions[0].value);
  };
  return (
    <section id="movie-section" className="px-4 my-4 w-100">
      <div className="filters text-center mb-5 d-flex flex-column align-items-center">
        <input
          onChange={searchHandler}
          className="video-search mb-3 filter py-2 px-3 col-12 col-sm-10 col-md-6  rounded-3 bg-transparent"
          type="text"
          placeholder="what are you looking for !"
          value={searchVal}
        />

        <Form.Select
          onChange={categoryHandler}
          className="category-filter filter w-100 py-2 px-3 pe-5 text-capitalize rounded-3"
          aria-label="Default select example"
          defaultValue={""}
        >
          <option value="">all category</option>
          <option value="action">action</option>
          <option value="horror">horror</option>
          <option value="comedy">comedy</option>
          <option value="adventure">adventure</option>
          <option value="romance">romance</option>
          <option value="drama">drama</option>
          <option value="fantasy">fantasy</option>
          <option value="sports">sports</option>
        </Form.Select>
      </div>
      <div className="movie-cards row justify-content-center">
        <h3
          className={`text-center text-capitalize text-light ${
            renderedVids && renderedVids.length === 0 ? "" : "d-none"
          }`}
        >
          {type} not found
        </h3>
        {renderedVids &&
          renderedVids.map((movie) => {
            return (
              <MovieCard
                movie={movie}
                isFav={false}
                key={movie._id}
                type={`video`}
              />
            );
          })}
      </div>
    </section>
  );
}
