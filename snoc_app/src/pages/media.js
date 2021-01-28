import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallRoundImage from "../components/smallRoundImage"
const Media = () => {
  return (
    <Layout>
      <SEO title="Colorado Media" />
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ marginTop: "190px" }}>Media Page</h1>

        <h4> Dr. John Gozzi - May 1981</h4>
        <h5>Lessons 16 thru 25 from "The Natural Order Process Volume 1</h5>
        <h6  style={{ marginTop: "10px" }}>" These lessons are descriptions of "The Science of Semantics"</h6>
        
        <ul>
          <li>
            <h6>Part 1 Vol. 1, Lesson 16.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/g3pvgq52b95i3n9/1_John%20Gozzi%20Vol1%20lesson%2016%20.mp3?"
              ></source>
            </audio>
          </li>
          <li>
            <h6>Part 2 Vol. 1, Lesson 17.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/apwc32tc0e8ttsd/2_Gozzi%20Vol.%201%2C%20Lesson%2017%20%205-1-1981.mp3?"
              ></source>
            </audio>
          </li>
          <li>
            <h6>Part 3 Vol. 1, Lesson 18.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/ekn63ltfox7awu0/3_John%20Gozzi%20Vol.%201%20Lesson%2018%20May%201981.mp3?"
              ></source>
            </audio>
          </li>
          <li>
            <h6>Part 4 Vol. 1, Lesson 20.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/7c2wg23dgia4d23/4_Gozzi%20Volume%201%20Lesson%2020%2C%205-22-1981.mp3?"
              ></source>
            </audio>
          </li>
          <li>
            <h6>Part 5 Vol. 1, Lesson 22 & 23.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/5q889cgt10ufp09/5_Gozzi%20Volume%201%20lesson%2022%20%26%2023%2C%206-5-1981.mp3?"
              ></source>
            </audio>
          </li>
          <li>
            <h6>Part 6 Vol. 1, Lesson 24 & 25.mp3</h6>
            <audio controls>
              <source
                type="audio/mpeg"
                src="https://dl.dropbox.com/s/bu8by1n6h23kstd/6_Gozzi%20Volume%201%20Lesson%2024%20%26%2025%2C%206-12-1981%20.mp3?"
              ></source>
            </audio>
          </li>
          <h4> Dr. John Gozzi</h4>
          <h5> 2 Part video series:</h5>
          <h6 style={{ marginTop: "10px" }}>"Daily Use of the SNO Teachings"</h6>
          <li>
            <h6>Part 1</h6>
            <video width="300" height="240" controls>
              <source
                type="video/mp4"
                src="https://www.dropbox.com/s/6wacmaarzj2afyq/Daily_use_1.m4v?raw=1"
              ></source>
            </video>
          </li>
          <li>
            <h6>Part 2</h6>
            <video width="300" height="240" controls>
              <source
                type="video/mp4"
                src="https://www.dropbox.com/s/h5moum5m2yd1xbp/Daily_use_2.m4v?raw=1"
              ></source>
            </video>
          </li>
        </ul>
        <div className="sno-media" style={{ textAlign: "center" }}>
          <a href="https://www.sno.org/books-and-mp3s">
            <h6>Please click here for the</h6>
            <h6>SNO Nevada media page</h6>
            <SmallRoundImage filename="rainbow.png" />

            <h6>sno.org</h6>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Media
