import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { faArrowRight, faStar, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { Review } from './Review';

function App() {
  
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submitter, setSubmitter] = useState('Unknown');
  const [reviewId, setReviewId] = useState(0);
  const [averageReview, setAvgReview] = useState(0);
  const [like, setLikes] = useState(0);
  const [dislike, setDislikes] = useState(0);
  const [darkModeOn, setDarkMode] = useState(false);

  const getReviewContent = (event) => {
    setReview(event.target.value);
    // console.log('Review: '+review);
  }

  const getRating = (event) => {
    setRating(event.target.value);
    // console.log('Rating: '+rating);
  }

  const getSubmitter = (event) => {
    setSubmitter(event.target.value);
    // console.log('By: '+submitter);
  }

  const addReview = () => {
    setReviewId(reviewId + 1);
    const obj = {
      submitter: submitter,
      submissionDate: `${new Date().toDateString()} @ ${new Date().toLocaleTimeString()}`,
      dateFormat: generateReviewDate(new Date()),
      reviewContent: review,
      likes: 0,
      dislikes: 0,
      rating: parseFloat(rating),
      reviewId: reviewId
    }
    setAvgReview(((averageReview*reviews.length) + obj.rating) / (reviews.length+1));
    setReviews([...reviews, obj]);
  }

  const deleteReview = (reviewId) => {
    const newReview = reviews.filter((r) => {
      return reviewId !== r.reviewId
    });
    setReviews(newReview);
  }

  const addLike = (reviewId) => {
    const item = reviews.filter((r) => {
      return reviewId === r.reviewId;
    })

    item[0].likes++;
    setLikes(like + 1);
    setReviews(reviews);
  }

  const addDislike = (reviewId) => {
    const item = reviews.filter((r) => {
      return reviewId === r.reviewId;
    })

    item[0].dislikes++;
    setDislikes(dislike + 1);
    setReviews(reviews);
  }

  const changeMode = () => {
    setDarkMode(!darkModeOn);
  }

  return (
    <div className="App">

      <h2>Add Review</h2>
      <button onClick={changeMode}>
        <FontAwesomeIcon icon={darkModeOn ? faSun : faMoon}/>
      </button>
      <div>
        <p>Average Review: {averageReview.toFixed(2)}</p>
      
        <div>
          <button style={{background: 'transparent', border: 'transparent'}} ><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: '25px'}}/></button>
          <button style={{background: 'transparent', border: 'transparent'}} ><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: '25px'}}/></button>
          <button style={{background: 'transparent', border: 'transparent'}} ><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: '25px'}}/></button>
          <button style={{background: 'transparent', border: 'transparent'}} ><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: '25px'}}/></button>
          <button style={{background: 'transparent', border: 'transparent'}} ><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: '25px'}}/></button>
        </div>

      
      </div>

      <div>
        <input type='text' placeholder='Review' onChange={getReviewContent}/>
        <input type='number' max={5} min={1} step={0.5} onChange={getRating}/>
        <input type='text' placeholder='Name' onChange={getSubmitter}/>
        <button onClick={addReview}><FontAwesomeIcon icon={faArrowRight} style={{color: 'green'}}/></button>
      </div>

      <div className='review-list'>
        {
          reviews.map((r, value) => {
            return <Review mode={darkModeOn} dislike={addDislike} addLike={addLike} deleteReview={deleteReview} review={r} key={value}/>
          })
        }
      </div>

    </div>
  );
}

/**
 * Generate formatted date for comment
 * @param {Date} date to be formatted
 * @returns returns comment
 */
function generateReviewDate(date) {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  console.log(month + '/' + day + '/' + year);
  return month + '/' + day + '/' + year;
}

export default App;
