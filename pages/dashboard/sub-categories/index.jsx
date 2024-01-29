import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosClient from '../../../utilities/axios';

const SubCategories = () => {
  const [subCategories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosClient
      .get('/subCategory/v1/subCategories')
      .then(({ data }) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteSubCategory(id) {
    setLoading(true);
    axiosClient
      .delete(`/admin/v1/subCategory/${id}`)
      .then(({ data }) => {
        const updatedSubCategories = subCategories.filter(
          (subCategory) => subCategory.id !== data.id
        );
        setCategories(updatedSubCategories);
        const notify = () => toast('Successfully deleted!');
        notify();
      })
      .catch(({ response }) => {
        const data = response?.data;
        console.log(data);
        const notify = () => toast(data?.msg || 'Something went wrong!');
        notify();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Head>
        <title>Sub categories | Techanalyzen</title>
      </Head>
      <div className="sub-categories-container m-5">
        <h1>Sub categories </h1>
        <hr />

        {subCategories.map(
          ({ _id, thumbnail, category, title, courses, description, slug }) => {
            return (
              <div key={_id} className="sub-categories-inner-container p-5">
                <div className="sub-category-img">
                  <img
                    src={`/files/thumb/subCategory/${thumbnail}`}
                    className="card-img-top p-0"
                    alt=""
                  />
                </div>
                <div className="sub-categories-content">
                  <h5 className="sub-categories-title">{title}</h5>
                  <h5 className="sub-categories-slug">/{slug}</h5>
                  <p className="sub-categories-description">{description}</p>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <img
                            src="/assets/images/banner/banner2.jpg"
                            className="me-3"
                            alt=""
                          />
                          Course title
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="sub-description">Course description</p>
                          <div className="course-btns">
                            <Link href={`/category/${category.slug}/${slug}`}>
                              <a className="btn btn-success">View</a>
                            </Link>
                            <Link href={`/dashboard/categories/category._id`}>
                              <a className="btn btn-warning">Edit</a>
                            </Link>
                            <Link href={`/dashboard/categories/category._id`}>
                              <a className="btn btn-danger">Delete</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-categories-btns">
                    <Link href={`/categories/${category.slug}/${slug}`}>
                      <a className="btn btn-success">View Sub Category</a>
                    </Link>
                    <Link href={`/dashboard/sub-categories/${_id}`}>
                      <a className="btn btn-secondary">Edit Sub Category</a>
                    </Link>
                    {courses && courses.length ? (
                      ''
                    ) : (
                      <button
                        className="btn btn-danger deleteCategoryBtn"
                        onClick={(e) => deleteSubCategory(_id)}
                      >
                        {loading ? (
                          <div
                            className="spinner-border spinner-border-md"
                            role="status"
                          ></div>
                        ) : (
                          'Delete Sub Category'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default SubCategories;
