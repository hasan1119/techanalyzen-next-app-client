import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../../../utilities/axios';

const ViewCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/v1/courses/${id}`)
      .then(({ data }) => {
        setCourse(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return <div>{course.title}</div>;
};

export default ViewCourse;
