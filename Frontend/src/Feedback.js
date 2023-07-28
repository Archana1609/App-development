import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Feedback.css';

const Contactus = () => {
  const { name, contactNumber, email, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleContactNumberChange = (e) => {
    dispatch({ type: 'UPDATE_CONTACT_NUMBER', payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  const handleMessageChange = (e) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: e.target.value });
  };
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = () => {
  alert('Email has been Sent');
  };

  return (
    <div className='wrapper'>
        
    <div className='back'>
      <div className="arch_contact_us_duplicate">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-mobile-12 wk-desk-5 wk-tab-10 wk-ipadp-5" id="ih6s">
              <p className="text-blk section-head">
                <b>Feedback</b>
              </p>
              <p className="text-blk section-subhead"></p>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-mobile-12 wk-desk-5 wk-tab-9" id="i6df">
              <div className="form-wrapper">
                <input className="input input-element" name="Name" placeholder="Name" value={name} onChange={handleNameChange} />
                <input className="input input-element" name="Contact Number" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} />
                <input className="input input-element" name="Email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <textarea className="textinput input-element" placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
                <button className="logb1" onClick={handleSubmit}>SEND</button>
              </div>
              </div>
           
              </div>
              <div className="social-media-icon-container">
               
              </div>
            </div>
          </div>
        </div>
     </div>
    // </div>
  );
};

export default Contactus;

/*import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFeedback } from './formFeedbackActions';
import './Feedback.css';
import axios from 'axios'

const Feedback = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [rating, setRating] = useState([]);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      email,
      recommendation,
      rating,
      comment,
    };

    // Dispatch the submitFeedback action
    
    props.submitFeedback(feedbackData);

    // Axios POST request to submit feedback data
    axios.post('http://localhost:8080/feed', feedbackData)
      .then((response) => {
        // Handle the response if needed (e.g., show a success message)
        console.log('Feedback submitted successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors if the request fails (e.g., show an error message)
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div>
      <div className="feedbackFormContainer">
        
        <form id="form" onSubmit={handleSubmit}>
          <div className="formField">
          <h1>Feedback</h1>
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label>Would you recommend Us to a friend?</label>
            <label htmlFor="recommend-1">
              <input
                type="radio"
                id="recommend-1"
                name="recommend"
                value="Yes"
                checked={recommendation === 'Yes'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              Yes
            </label>
            <label htmlFor="recommend-2">
              <input
                type="radio"
                id="recommend-2"
                name="recommend"
                value="No"
                checked={recommendation === 'No'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              No
            </label>
            <label htmlFor="recommend-3">
              <input
                type="radio"
                id="recommend-3"
                name="recommend"
                value="Maybe"
                checked={recommendation === 'Maybe'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              Maybe
            </label>
          </div>

          <div className="formField">
            <label>
              How many ratings are you giving us?
              <small>(Check all that apply)</small>
            </label>
            <label htmlFor="rating-1">
              <input
                type="checkbox"
                name="rating"
                value="*"
                checked={rating.includes('*')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              *
            </label>
            <label htmlFor="rating-2">
              <input
                type="checkbox"
                name="rating"
                value="**"
                checked={rating.includes('**')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              **
            </label>
            <label htmlFor="rating-3">
              <input
                type="checkbox"
                name="rating"
                value="***"
                checked={rating.includes('***')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              ***
            </label>
            <label htmlFor="rating-4">
              <input
                type="checkbox"
                name="rating"
                value="****"
                checked={rating.includes('****')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              ****
            </label>
            <label htmlFor="rating-5">
              <input
                type="checkbox"
                name="rating"
                value="*****"
                checked={rating.includes('*****')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              *****
            </label>
          </div>

          <div className="formField">
            <label htmlFor="comment">Any comments or suggestions</label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Enter your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submitButton" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  submitFeedback,
};

export default connect(null, mapDispatchToProps)(Feedback);*/