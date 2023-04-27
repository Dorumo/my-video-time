import React from 'react';
import { useParams } from 'react-router-dom'

import DescriptionHeader from '../../components/DescriptionHeader';
import Footer from '../../components/Footer';
import { Highlights } from '../../components/Highlights';
import { Loading } from '../../components/Loading';
import useCourseData from '../../hook/useCourseData';

function Description() {
  const params = useParams()
  const { course, isLoading } = useCourseData(params.id);
  return (
    <div className="items-center justify-center">
      <DescriptionHeader />

      <main>
        {isLoading && <Loading />}
        <div className="max-w-7xl m-auto mt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Highlights
              key={ course.id }
              title={ course.title }
              subtitle={ course.author }
              ratingStarNumber={ course.stars }
              countRatingPeople={ course.avaliations }
              pricePerHour={ course.price }
              imgSrc={ course.imageUrl }
              alt={ course.title }
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Description;
