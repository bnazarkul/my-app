import React from "react";

const PopularPost = () => {
  return(
      <>
        {/* Posts */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <li className="w3-padding-16">
              <img
                  src="https://www.w3schools.com/w3images/workshop.jpg"
                  alt="Image"
                  className="w3-left w3-margin-right"
                  style={{ width: 50 }}
              />
              <span className="w3-large">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li className="w3-padding-16">
              <img
                  src="https://www.w3schools.com/w3images/gondol.jpg"
                  alt="Image"
                  className="w3-left w3-margin-right"
                  style={{ width: 50 }}
              />
              <span className="w3-large">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
            <li className="https://www.w3schools.com/w3images/skies.jpg">
              <img
                  src="https://www.w3schools.com/w3images/skies.jpg"
                  alt="Image"
                  className="w3-left w3-margin-right"
                  style={{ width: 50 }}
              />
              <span className="w3-large">Dorum</span>
              <br />
              <span>Ultricies congue</span>
            </li>
            <li className="w3-padding-16 w3-hide-medium w3-hide-small">
              <img
                  src="https://www.w3schools.com/w3images/rock.jpg"
                  alt="Image"
                  className="w3-left w3-margin-right"
                  style={{ width: 50 }}
              />
              <span className="w3-large">Mingsum</span>
              <br />
              <span>Lorem ipsum dipsum</span>
            </li>
          </ul>
        </div>
        <hr />
        {/* Labels / tags */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Tags</h4>
          </div>
          <div className="w3-container w3-white">
            <p>
              <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            New York
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            London
          </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            IKEA
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            NORWAY
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            DIY
          </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Ideas
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Baby
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Family
          </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            News
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Clothing
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Shopping
          </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Sports
          </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            Games
          </span>
            </p>
          </div>
        </div>
        </>
  )
}

export default PopularPost;