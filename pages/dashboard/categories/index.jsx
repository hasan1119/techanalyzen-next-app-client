import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosClient from '../../../utilities/axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosClient
      .get('/category/v1/categories')
      .then(({ data }) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteCategory(id) {
    setLoading(true);
    axiosClient
      .delete(`/admin/v1/category/${id}`)
      .then(({ data }) => {
        const updatedCategories = categories.filter(
          (category) => category.id !== data.id
        );
        setCategories(updatedCategories);
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
        <title>Categories | Techanalyzen</title>
      </Head>
      <div className="categories-container m-5">
        <h1>Categories </h1>
        <hr />

        {categories.map((category) => (
          <div key={category._id} className="categories-inner-container p-5">
            <div className="category-img">
              <img
                src={`/files/thumb/category/${category.thumbnail}`}
                className="card-img-top p-0"
                alt=""
              />
            </div>
            <div className="categories-content">
              <h5 className="categories-title">{category.title}</h5>
              <h5 className="categories-slug">/{category.slug}</h5>
              <p className="categories-description">{category.description}</p>
              <div className="accordion" id="accordionExample">
                {category?.subCategories?.map((subCategory) => {
                  return (
                    <div key={subCategory._id} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <img
                            src={`/files/thumb/subCategory/${subCategory.thumbnail}`}
                            className="me-3"
                            alt=""
                          />
                          {subCategory.title}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="sub-description">
                            {subCategory.description}
                          </p>
                          <div className="sub-categories-btns">
                            <Link href="">
                              <a className="btn btn-success">View</a>
                            </Link>
                            <Link
                              href={`/dashboard/sub-categories/${subCategory._id}`}
                            >
                              <a className="btn btn-warning">Edit</a>
                            </Link>
                            <Link href={`/dashboard/categories/category._id`}>
                              <a className="btn btn-danger">Delete</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="categories-btns">
                <Link href={`/categories/${category.slug}`}>
                  <a className="btn btn-success">View course</a>
                </Link>
                <Link href={`/dashboard/categories/${category._id}`}>
                  <a className="btn btn-secondary">Edit Category</a>
                </Link>
                {category.subCategories && category.subCategories.length ? (
                  ''
                ) : (
                  <button
                    className="btn btn-danger deleteCategoryBtn"
                    onClick={(e) => deleteCategory(category._id)}
                  >
                    {loading ? (
                      <div
                        className="spinner-border spinner-border-md"
                        role="status"
                      ></div>
                    ) : (
                      'Delete Category'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
