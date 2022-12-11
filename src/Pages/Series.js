import React from "react";
import {
  comedySeries,
  documentarySeries,
  netflixOriginals,
  popularSeries,
  romanceSeries,
  topRatedSeries,
} from "../apis/apiSeriesData";
import Row from "../components/Row";
import "./Series.css";

function Series() {
  return (
    <div className="series">
      <Row title="Netflix Originals" fetchRow={netflixOriginals} />
      <Row title="Top-Rated" fetchRow={topRatedSeries} />
      <Row title="Popular" fetchRow={popularSeries} />
      <Row title="Romance" fetchRow={romanceSeries} />
      <Row title="Comedy" fetchRow={comedySeries} />
      <Row title="Documentary" fetchRow={documentarySeries} />
    </div>
  );
}

export default Series;
