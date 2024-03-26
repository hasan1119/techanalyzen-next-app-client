import Head from 'next/head';
import { useRouter } from 'next/router';
import { default as React, useEffect, useRef, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import axiosClient from '../../../utilities/axios';

const EditCategory = () => {
  const router = useRouter();
  const imgRef = useRef();
  const [loading, setLoading] = useState(false);
  const { id } = router.query;

  // data
  const [data, setData] = useState({
    title: '',
    description: '',
    slug: '',
    thumbnail: null,
    prevImg: '',
  });

  // change handler
  const changeHandler = (e) => {
    const newData = { ...data };
    if (e.target.type === 'file') {
      newData[e.target.name] = e.target.files[0];
    } else if (e.target.name === 'slug') {
      newData[e.target.name] = e.target.value.toLowerCase().trim();
    } else {
      newData[e.target.name] = e.target.value;
    }
    setData(newData);
  };

  // handle img preview
  useEffect(() => {
    if (data.thumbnail && data.thumbnail instanceof File) {
      const fr = new FileReader();
      fr.onload = function () {
        imgRef.current && (imgRef.current.src = fr.result);
      };
      fr.readAsDataURL(data.thumbnail);
    } else if (typeof data.thumbnail === 'string') {
      imgRef.current &&
        (imgRef.current.src =
          window.location.origin + '/files/thumb/category/' + data.thumbnail);
    }
  }, [data]);

  // get a single category
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axiosClient
      .get(`/category/v1/${id}`)
      .then(({ data }) => {
        setData({ ...data, prevImg: data.thumbnail });
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.msg);
        router.push('/dashboard/categories');
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('_id', data._id);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('thumbnail', data.thumbnail);
    formData.append('prevImg', data.prevImg);
    formData.append('slug', data.slug);

    if (
      data._id &&
      data.thumbnail &&
      (data.thumbnail instanceof File || typeof data.thumbnail === 'string') &&
      data.description &&
      data.slug &&
      data.title
    ) {
      setLoading(true);
      fetch(
        'https://techanalyzen.libertysailingschool.net/api/admin/v1/update-category',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          if (data?._id) {
            router.push('/dashboard/categories');
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    } else {
      console.log('something went wrong');
    }
  };
  return (
    <>
      <Head>
        <title>Edit Category | Techanalyzen</title>
      </Head>
      <div className="addCategoryContainer dashboardContent container my-4">
        <h1 className="mb-3 mx-5">Update Category </h1>
        <form className="form form-container mx-5 my-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Category Title
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={data.title}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Category Slug
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              value={data.slug}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              required
              className="form-control"
              id="description"
              rows="3"
              cols="50"
              name="description"
              value={data.description}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">
              <div className="img_thumb">
                <p>Thumbnail</p>
                {data.thumbnail === null && (
                  <div className="preview">
                    <IoMdCloudUpload />
                    <span>No file chosen, yet!</span>
                  </div>
                )}

                {data.thumbnail !== null && (
                  <>
                    <div className="imgPreview">
                      <img ref={imgRef} />
                    </div>
                    <span className="btn btn-primary" id="change_image">
                      Change Image
                    </span>
                  </>
                )}
              </div>
            </label>
            <input
              hidden
              type="file"
              id="thumbnail"
              name="thumbnail"
              onChange={changeHandler}
              accept="image/*"
            />
          </div>

          <button type="submit" className="btn btn-success form-control mt-3">
            {loading ? (
              <div
                className="spinner-border spinner-border-md"
                role="status"
              ></div>
            ) : (
              'Update Category'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCategory;
