import { faStar, faStarHalf,faTrash, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Review = (props) => {
    let stars = [];
    for (let i=0; i<Math.floor(props.review.rating); i++){
        stars.push(1);
    }

    if (props.review.rating > Math.floor(props.review.rating))
        stars.push(0.5);

    return (
        <div className='review' style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'rgb(101,101,101)'}}> 
            <div className='header' style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'black'}}>
                <h3 className='review-title' style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'rgb(101,101,101)'}}>{props.review.submitter}</h3>
                <h4 className='review-date' style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'rgb(144, 144, 144)'}}> {props.review.dateFormat}</h4>
                <button className='review-delete-btn' style={{background: props.mode ? 'gray' : 'white', border: `1px solid ${props.mode ? 'gray' : 'white'}`}} onClick={() => props.deleteReview(props.review.reviewId)}><FontAwesomeIcon icon={faTrash}  style={{color: 'tomato'}}/></button>
            </div>

            <div className='stars'>
                {stars.map((star, value) => {
                    if (star === 1)
                        return (<FontAwesomeIcon key={value} icon={faStar}  style={{color: 'gold'}}/>)
                    else if (star === 0.5)
                        return (<FontAwesomeIcon key={value} icon={faStarHalf} style={{color: 'gold'}}/>)
                })}
            </div>
            <p className='review-content' style={{backgroundColor: props.mode ? 'gray' : 'white', color: props.mode ? 'white' : 'black'}}>{props.review.reviewContent}</p>
            <div className='review-buttons'>
                <button style={{background: props.mode ? 'gray' : 'white', border: `1px solid ${props.mode ? 'gray' : 'white'}`}} onClick={() => props.addLike(props.review.reviewId)} className='like-btn'><FontAwesomeIcon icon={faThumbsUp} /></button>
                <p style={{background: props.mode ? 'gray' : 'white', border: `1px solid ${props.mode ? 'gray' : 'white'}`}}>{props.review.likes}</p>
                <button style={{background: props.mode ? 'gray' : 'white', border: `1px solid ${props.mode ? 'gray' : 'white'}`}} onClick={() => props.dislike(props.review.reviewId)} className='dislike-btn'><FontAwesomeIcon icon={faThumbsDown} /></button>
                <p style={{background: props.mode ? 'gray' : 'white', border: `1px solid ${props.mode ? 'gray' : 'white'}`}}>{props.review.dislikes}</p>
            </div>
        </div>
    )
}