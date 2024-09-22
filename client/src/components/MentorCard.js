import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import person1 from "../images/person1.svg";
import person2 from "../images/person2.svg";
import person3 from "../images/person3.svg";
import person4 from "../images/person4.svg";
import person5 from "../images/person5.svg";
import person6 from "../images/person6.svg";
import person7 from "../images/person7.svg";

const images = {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
};

const MentorCard = ({ mentor }) => {

  const [showMentorDetails, setShowMentorDetails] = useState(false)
  const handleCloseMentorDetails = () => setShowMentorDetails(false)
  const handleShowMentorDetails = () => setShowMentorDetails(true)
  // TODO - change the image to be dynamic
  // const image = images[`person${(parseInt(mentor.email % 7)) + 1}`];
  return (
    <>
    <button onClick={handleShowMentorDetails}>
      <div className="card" style={{ width: "18rem" }}>
        {/* Make sure the path to the image is correct */}
        <img src={person5} alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <h3>
              {mentor.first_name} {mentor.last_name}
            </h3>
          </h5>
          <p className="card-text">
            <p>{mentor.programming_languages.split(', ').join(', ')}</p>
          </p>
        </div>
      </div>
    </button>

    {/* pop-up - all mentor's details */}
    <Modal show={showMentorDetails} onHide={handleCloseMentorDetails} animation={false} centered>
      <Modal.Header closeButton>
          <Modal.Title>Mentor's Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={person5} alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <h3>
              {mentor.first_name} {mentor.last_name}
            </h3>
          </h5>
          <p>{mentor.programming_languages.split(', ').join(', ')}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <label>contact:</label>
        <p>{mentor.email}</p>
        <p>{mentor.phone_number}</p>
        <a className="link-opacity-10-hover" href={mentor.linkedin}>
          Linkedin Profile
        </a>
      </Modal.Footer>
  </Modal>
  </>
  );
};

export default MentorCard;
