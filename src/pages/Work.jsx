import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import works from '../data/works';

const Work = () => {

  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined);

  useEffect(() => {
    const foundWork = works.find((work) => work.slug === workSlug);
    console.log(foundWork);
    setCurrentWork(foundWork);
  }, [workSlug]);
   
  return (
    (currentWork && currentWork.cards.map((card) => (
      <p key={card.id}>{card}</p>
    ))) || <p>No data</p>
  );
};

export default Work;
