import {useState, useEffect, useContext } from 'react'

import Container from '@mui/material/Container';

import AdaptationReviewList from '../components/AdapatationReviewList';
import AdaptationReviewForm from '../components/AdaptationReviewForm';
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'

import { AppNotificationContext } from '../components/state/AppNotification';

import { getReviews } from '../utils/api/reviews'
import { ClassNames } from '@emotion/react';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const {showNotification}=useContext(AppNotificationContext);
  
  useEffect(()=> {
    loadAllReviews()
  }, [])

  const removeReview = (id) => {
    let currentReviews = reviews.filter((review)=> {
      return review.id !== id
    })
    setReviews(currentReviews)
  }

  const loadAllReviews = () => {
    getReviews().then((data)=> {
      setReviews(data)
      showNotification("All reviews are loaded!","info");
    })
  }

  return <div>
    <SEO />
    <NavBar title={'Adaptation Reviews'} />
    <Container
      sx={{
        pt: 2,
        pb: 2,
      }}
      maxWidth="md"
      component="main"
    >
      <AdaptationReviewForm
        reviews={reviews}
        setReviews={setReviews}
      />
      <AdaptationReviewList
        reviews={reviews}
        removeReview={removeReview}
      />
    </Container>
  </div>
}
