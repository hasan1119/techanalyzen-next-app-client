import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { IoMdCloudUpload } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import CurriculumDescriptionEditor from '../../../../components/dashboard/Editors/CurriculumDescriptionEditor';
import DescriptionEditor from '../../../../components/dashboard/Editors/DescriptionEditor';
import axiosClient from '../../../../utilities/axios';

const updateCourse = () => {
  const imgRef = useRef();
  const closeBtnRef = useRef();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const topicRef = useRef();
  const requirementRef = useRef();
  const addPackageRef = useRef();
  const [isEditPackage, setEditPackage] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({
    id: '',
    title: '',
    description: '',
    thumbnail: null,
    paidOrFree: '',
    price: 0,
    discount: {
      status: false,
      price: 0,
      percentage: 0,
    },
    attribute: '',
    featured: '',
    category: '',
    subCategory: '',
    level: '',
    courseLength: '',
    totalLesson: '',
    slug: '',
    curriculumDescription: '',
    topics: [],
    requirements: [],
    duration: '',
    totalClass: '',
    language: '',
    courseType: '',
    endDate: '',
    certificate: '',
    status: '',
    startWithIn: '',
    subscription: {
      status: 'Off',
      packages: [],
    },
  });

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/v1/courses/${id}`)
      .then(({ data: courseData }) => {
        console.log(courseData);
        setData({
          ...courseData,
          thumbnail: `/files/thumb/course/${courseData.thumbnail}`,
          id: courseData._id,
        });
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [id, categories]);

  const [subPackage, setPackage] = useState({
    id: '',
    name: '',
    totalPrice: '',
    unitPrice: '',
    installments: '',
    description: '',
  });

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

  // change handler
  const changeHandler = (e) => {
    const newData = { ...data };

    if (e.target.type === 'file') {
      newData[e.target.name] = e.target.files[0];
    } else if (e.target.name === 'discountStatus') {
      newData.discount.status = e.target.value;
    } else if (e.target.name === 'discountPercentage') {
      newData.discount.percentage = parseInt(e.target.value);
    } else if (e.target.name === 'discountPrice') {
      newData.discount.price = parseInt(e.target.value);
    } else if (e.target.name === 'price') {
      newData.price = parseInt(e.target.value);
    } else if (e.target.name === 'slug') {
      newData[e.target.name] = e.target.value.trim();
    } else if (e.target.name === 'subscriptionStatus') {
      const newData = { ...data };
      newData.subscription.status = e.target.value;
    } else if (data.paidOrFree === 'paid' && e.target.name === 'price') {
      newData[e.target.name] = e.target.value;
    } else {
      newData[e.target.name] = e.target.value;
    }

    setData(newData);
  };

  console.log(data);

  useEffect(() => {
    if (data.thumbnail && data.thumbnail instanceof File) {
      const fr = new FileReader();
      fr.onload = function () {
        imgRef.current && (imgRef.current.src = fr.result);
      };
      fr.readAsDataURL(data.thumbnail);
    }
  }, [data]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('id', data.id);
    formData.append('description', data.description);
    formData.append('thumbnail', data.thumbnail);
    formData.append('slug', data.slug);
    formData.append('status', data.status);
    formData.append(
      'category',
      data.category._id ? data.category._id : data.category
    );
    formData.append(
      'subCategory',
      data.subCategory._id ? data.subCategory._id : data.subCategory
    );
    formData.append('curriculumDescription', data.curriculumDescription);
    formData.append('language', data.language);
    formData.append('courseLength', data.courseLength);
    formData.append('totalLesson', data.totalLesson);
    formData.append('totalClass', data.totalClass);
    formData.append('topics', JSON.stringify(data.topics));
    formData.append('startWithIn', data.startWithIn);
    formData.append('requirements', JSON.stringify(data.requirements));
    formData.append('price', data.price);
    formData.append('paidOrFree', data.paidOrFree);
    formData.append('courseType', data.courseType);
    formData.append('level', data.level);
    formData.append('endDate', data.endDate);
    formData.append('duration', data.duration);
    formData.append('discount', JSON.stringify(data.discount));
    formData.append('certificate', data.certificate);
    formData.append('attribute', data.attribute);
    formData.append('featured', data.featured);
    formData.append('subscription', JSON.stringify(data.subscription));
    console.log(data);

    const checkInput = (type) => {
      if (type === 'paid') {
        return (
          data.attribute &&
          data.category &&
          data.certificate &&
          data.courseLength &&
          data.courseType &&
          data.curriculumDescription &&
          data.description &&
          data.paidOrFree &&
          data.price &&
          data.discount &&
          data.discount.status &&
          data.discount.percentage &&
          data.discount.price &&
          data.category &&
          data.subCategory &&
          data.attribute &&
          data.level &&
          data.courseLength &&
          data.totalClass &&
          data.totalClass &&
          data.language &&
          data.certificate &&
          data.endDate &&
          data.startWithIn &&
          data.status &&
          data.topics.length &&
          data.requirements.length
        );
      } else {
        return (
          data.attribute &&
          data.category &&
          data.certificate &&
          data.courseLength &&
          data.courseType &&
          data.curriculumDescription &&
          data.description &&
          data.paidOrFree &&
          data.category &&
          data.subCategory &&
          data.attribute &&
          data.level &&
          data.courseLength &&
          data.totalClass &&
          data.totalClass &&
          data.language &&
          data.certificate &&
          data.endDate &&
          data.startWithIn &&
          data.status &&
          data.topics.length &&
          data.requirements.length &&
          data.subscription
        );
      }
    };

    if (checkInput(data.paidOrFree)) {
      console.log(data);
      setLoading(true);
      fetch(
        'https://techanalyzen.libertysailingschool.net/api/admin/v1/course/update',
        {
          method: 'put',
          body: formData,
        }
      )
        .then((r) => r.json())
        .then((response) => {
          if (response.thumbnail && response.thumbnail.msg) {
            const notify = () => toast(response.thumbnail.msg);
            notify();
            return;
          } else if (response._id) {
            router.push('/dashboard/courses');
          } else {
            console.log(response);
          }
        })
        .catch((err) => {
          if (err.thumbnail && err.thumbnail.msg) {
            const notify = () => toast(err.thumbnail.msg);
            notify();
          }
        });
    } else {
      const notify = () => toast('Please fill out all input field!');
      notify();
      console.log('Please fill out all input field!');
    }
  };

  // Topic handler
  function topicHandler(e) {
    const val = e.target.value.trim();
    if (e.key == 'Enter') {
      if (!val) return;
      const prevTopic = e.target.dataset.topic;
      console.log(prevTopic);
      if (prevTopic !== '') {
        const updatedTopics = data.topics.map((t) => {
          if (t === prevTopic) {
            return val;
          }
          return t;
        });
        setData({ ...data, topics: updatedTopics });
        topicRef.current.dataset.topic = '';
      } else {
        setData({ ...data, topics: [...data.topics, val] });
      }
      topicRef.current.value = '';
    }
  }

  // Requirement handler
  function requirementHandler(e) {
    const val = e.target.value.trim();
    if (e.key == 'Enter') {
      if (!val) return;
      const prevRequirement = e.target.dataset.requirement;
      console.log(prevRequirement);
      if (prevRequirement !== '') {
        const updatedRequirements = data.requirements.map((t) => {
          if (t === prevRequirement) {
            return val;
          }
          return t;
        });
        setData({ ...data, requirements: updatedRequirements });
        requirementRef.current.dataset.requirement = '';
      } else {
        setData({ ...data, requirements: [...data.requirements, val] });
      }
      requirementRef.current.value = '';
    }
  }

  //editTopic
  function editTopic(topic) {
    topicRef.current.value = topic;
    topicRef.current.dataset.topic = topic;
    topicRef.current.focus();
  }

  //editRequirement
  function editRequirement(requirement) {
    requirementRef.current.value = requirement;
    requirementRef.current.dataset.requirement = requirement;
    requirementRef.current.focus();
  }
  //removeRequirement
  function removeRequirement(requirement) {
    const updatedRequirements = data.requirements.filter(
      (t) => t !== requirement
    );
    setData({ ...data, requirements: updatedRequirements });
  }

  //removeTopic
  function removeTopic(topic) {
    const updatedTopics = data.topics.filter((t) => t !== topic);
    setData({ ...data, topics: updatedTopics });
  }

  // addNewPackage
  function addNewPackage(e) {
    e.preventDefault();

    const id = addPackageRef.current.dataset.id;
    let newPackages;
    if (id) {
      newPackages = data.subscription.packages.map((p) => {
        console.log('object', p, id);
        if (p.id == id) {
          return subPackage;
        } else {
          return p;
        }
      });
      setEditPackage(false);
      addPackageRef.current.dataset.id = '';
    } else {
      newPackages = [
        ...data.subscription.packages,
        { ...subPackage, id: new Date().getTime() },
      ];
    }

    const newData = { ...data };
    console.log(newPackages);
    newData.subscription.packages = newPackages;
    setData(newData);
    setPackage({
      id: '',
      name: '',
      totalPrice: '',
      unitPrice: '',
      installments: '',
      description: '',
    });
    closeBtnRef.current.click();
  }

  //editPackage
  function editPackage(id) {
    const thePackage = data.subscription.packages.find((p) => p.id == id);
    setPackage(thePackage);
    addPackageRef.current.click();
    addPackageRef.current.dataset.id = thePackage.id;
    setEditPackage(true);
    console.log(thePackage);
  }

  // packageChangeHandler
  function packageChangeHandler(e) {
    setPackage({ ...subPackage, [e.target.name]: e.target.value });
  }

  // deletePackage
  function deletePackage(id) {
    const newPackages = data.subscription.packages.filter((p) => p.id !== id);
    const newData = { ...data };
    newData.subscription.packages = newPackages;
    setData(newData);
  }

  if (!data._id) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Head>
        <title>Create Course | Techanalyzen</title>
      </Head>
      <div className="createCourseContainer dashboardContent container my-4">
        <h1 className="mb-3 mx-5">Update Course</h1>
        <hr />
        <form
          className="form form-container mx-5 my-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Course Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
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

          {/* Course Slug */}
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Slug
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

          {/* Course Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <DescriptionEditor data={data} setData={setData} />
          </div>

          {/* Course Thumbnail */}
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
                      <img ref={imgRef} src={data.thumbnail} />
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
              className="form-control"
              id="thumbnail"
              name="thumbnail"
              onChange={changeHandler}
              accept="image/*"
            />
          </div>

          {/* course type */}
          <div className="mb-3">
            <label htmlFor="courseType" className="form-label">
              Course Type
            </label>
            <select
              required
              className="form-control"
              id="courseType"
              name="courseType"
              value={data.courseType}
              onChange={changeHandler}
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Pre-Recorded">Pre-Recorded</option>
              <option value="Day Care">Day Care</option>
            </select>
          </div>

          {/* course Status */}
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Course Status
            </label>
            <select
              required
              className="form-control"
              id="status"
              name="status"
              value={data.status}
              onChange={changeHandler}
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Unpublished">Unpublished</option>
            </select>
          </div>

          {/* PaidOrFree */}
          <div className="mb-3">
            <label htmlFor="paidOrFree" className="form-label">
              Paid/Free
            </label>
            <select
              required
              className="form-control"
              id="paidOrFree"
              name="paidOrFree"
              value={data.paidOrFree}
              onChange={changeHandler}
            >
              <option value="" disabled>
                --Select--
              </option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
          </div>

          {/* Price and Discount */}
          {data.paidOrFree == 'paid' && (
            <>
              {/* Original Price */}
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Original Price
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={changeHandler}
                />
              </div>

              {/* Discount Status */}
              <div className="mb-3">
                <label htmlFor="discountStatus" className="form-label">
                  Discount Status
                </label>
                <select
                  required
                  className="form-control"
                  id="discountStatus"
                  name="discountStatus"
                  value={data.discount.status}
                  onChange={changeHandler}
                >
                  <option value="" disabled>
                    --Select--
                  </option>

                  <option value="Off">Off</option>
                  <option value="On">On</option>
                </select>
              </div>

              {/* Discount Percentage */}
              {data.discount.status == 'On' && (
                <>
                  <div className="mb-3">
                    <label htmlFor="discountPercentage" className="form-label">
                      Discount Percentage(%)
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      id="discountPercentage"
                      name="discountPercentage"
                      value={data.discount.percentage}
                      onChange={changeHandler}
                    />
                  </div>

                  {/* discount price */}
                  <div className="mb-3">
                    <label htmlFor="discountPrice" className="form-label">
                      Discount Price
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      id="discountPrice"
                      name="discountPrice"
                      value={data.discount.price}
                      onChange={changeHandler}
                    />
                  </div>
                </>
              )}

              {/* Subscription */}
              <div className="mb-3">
                <label htmlFor="subscriptionStatus" className="form-label">
                  Subscription Status
                </label>
                <select
                  required
                  className="form-control"
                  id="subscriptionStatus"
                  name="subscriptionStatus"
                  value={data.subscription.status}
                  onChange={changeHandler}
                >
                  <option value="" disabled>
                    --Select--
                  </option>
                  <option value="On">On</option>
                  <option value="Off">Off</option>
                </select>
              </div>

              {/* Packages */}
              {data.subscription && data.subscription.status === 'On' && (
                <div className="mb-3">
                  <label htmlFor="Packages" className="form-label">
                    Packages
                  </label>
                  <div className="package_container">
                    {data.subscription.packages?.map((p) => (
                      <div className="package" key={p.name + p.totalPrice}>
                        <p className="name">
                          <b>Name:</b> {p.name}
                        </p>
                        <p className="totalPrice">
                          <b>Total Price:</b> {p.totalPrice}BDT
                        </p>
                        <p className="unitPrice">
                          <b>Unit Price:</b> {p.unitPrice}BDT
                        </p>

                        <p className="installments">
                          <b> installments:</b>
                          {p.installments} Times
                        </p>
                        <p className="unitPrice">
                          <b>Description:</b> {p.description}
                        </p>
                        <div className="action_btn">
                          <button
                            type="button"
                            onClick={() => editPackage(p.id)}
                            className="btn btn-secondary btn-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(e) => deletePackage(p.id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#packageModal"
                      className="addNewPackage"
                      ref={addPackageRef}
                      data-id=""
                    >
                      <AiOutlinePlusCircle />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              required
              className="form-control"
              id="category"
              name="category"
              value={data.category}
              onChange={changeHandler}
            >
              <option value="" disabled>
                --Select--
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          {/* Sub Category */}
          {data.category ? (
            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label">
                Sub Category
              </label>
              <select
                required
                className="form-control"
                id="subCategory"
                name="subCategory"
                value={data.subCategory}
                onChange={changeHandler}
              >
                <option value="" disabled>
                  --Select--
                </option>
                {console.log(
                  categories?.find(
                    (category) => category._id == data.category._id
                  )
                )}
                {categories
                  ?.find((category) => category._id == data?.category?._id)
                  ?.subCategories?.map((sCategory) => (
                    <option key={sCategory._id} value={sCategory._id}>
                      {sCategory.title}
                    </option>
                  ))}
              </select>
            </div>
          ) : (
            ''
          )}

          {/* attribute */}
          <div className="mb-3">
            <label htmlFor="attribute" className="form-label">
              Attribute
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="attribute"
              name="attribute"
              value={data.attribute}
              onChange={changeHandler}
            />
          </div>

          {/* Feature */}
          <div className="mb-3">
            <label htmlFor="featured" className="form-label">
              Featured Message
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="featured"
              name="featured"
              value={data.featured}
              onChange={changeHandler}
            />
          </div>

          {/* Level */}
          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Level
            </label>
            <select
              required
              className="form-control"
              id="level"
              name="level"
              value={data.level}
              onChange={changeHandler}
            >
              <option value="" disabled>
                --Select--
              </option>

              <option value="Beginner">Beginner</option>

              <option value="Intermediate">Intermediate</option>

              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* courseLength */}
          <div className="mb-3">
            <label htmlFor="courseLength" className="form-label">
              Course Length
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="courseLength"
              name="courseLength"
              value={data.courseLength}
              onChange={changeHandler}
            />
          </div>

          {/* Course Duration */}
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">
              Course Duration
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="duration"
              name="duration"
              value={data.duration}
              onChange={changeHandler}
            />
          </div>

          {/* Total Lesson */}
          <div className="mb-3">
            <label htmlFor="totalLesson" className="form-label">
              Total Lessons
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="totalLesson"
              name="totalLesson"
              value={data.totalLesson}
              onChange={changeHandler}
            />
          </div>

          {/* Total Class */}
          <div className="mb-3">
            <label htmlFor="totalClass" className="form-label">
              Total Class
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="totalClass"
              name="totalClass"
              value={data.totalClass}
              onChange={changeHandler}
            />
          </div>

          {/* Language */}
          <div className="mb-3">
            <label htmlFor="language" className="form-label">
              Language
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="language"
              name="language"
              value={data.language}
              onChange={changeHandler}
            />
          </div>

          {/* certificate */}
          <div className="mb-3">
            <label htmlFor="certificate" className="form-label">
              Certificate
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="certificate"
              name="certificate"
              value={data.certificate}
              onChange={changeHandler}
            />
          </div>

          {/* endDate */}
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="endDate"
              name="endDate"
              value={data.endDate}
              onChange={changeHandler}
            />
          </div>

          {/* Start Within */}
          <div className="mb-3">
            <label htmlFor="startWithIn" className="form-label">
              Start Within
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="startWithIn"
              name="startWithIn"
              value={data.startWithIn}
              onChange={changeHandler}
            />
          </div>

          {/* Curriculum Description */}
          <div className="mb-3">
            <label htmlFor="totalLesson" className="form-label">
              Curriculum Description
            </label>
            <CurriculumDescriptionEditor data={data} setData={setData} />
          </div>

          {/* Topics */}
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Topics
            </label>
            <div className="topisContainer">
              {data?.topics?.map((topic) => (
                <div key={topic} className="topic">
                  <p>{topic}</p>
                  <button type="button" onClick={() => removeTopic(topic)}>
                    <MdDeleteOutline />
                  </button>
                  <button type="button" onClick={() => editTopic(topic)}>
                    <BiEditAlt />
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Enter topic name"
                data-topic=""
                ref={topicRef}
                onKeyPress={(e) => {
                  topicHandler(e);
                  e.key === 'Enter' && e.preventDefault();
                }}
                onChange={topicHandler}
              />
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-3">
            <label htmlFor="Requirements" className="form-label">
              Requirements
            </label>
            <div className="topisContainer">
              {data?.requirements?.map((requirement) => (
                <div key={requirement} className="topic">
                  <p>{requirement}</p>
                  <button
                    type="button"
                    onClick={() => removeRequirement(requirement)}
                  >
                    <MdDeleteOutline />
                  </button>
                  <button
                    type="button"
                    onClick={() => editRequirement(requirement)}
                  >
                    <BiEditAlt />
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Enter requirement"
                data-requirement=""
                ref={requirementRef}
                onKeyPress={(e) => {
                  requirementHandler(e);
                  e.key === 'Enter' && e.preventDefault();
                }}
                onChange={requirementHandler}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success form-control mt-3">
            {loading ? (
              <div
                className="spinner-border spinner-border-md"
                role="status"
              ></div>
            ) : (
              'Update Course'
            )}
          </button>
        </form>
      </div>

      {/* Package modal */}
      <div
        className="modal fade"
        id="packageModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="packageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={addNewPackage}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="packageModalLabel">
                  Create Package
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  ref={closeBtnRef}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="name"
                    name="name"
                    value={subPackage.name}
                    onChange={packageChangeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="totalPrice" className="form-label">
                    Total Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalPrice"
                    name="totalPrice"
                    required
                    value={subPackage.totalPrice}
                    onChange={packageChangeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="unitPrice" className="form-label">
                    Unit Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    required
                    id="unitPrice"
                    name="unitPrice"
                    value={subPackage.unitPrice}
                    onChange={packageChangeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="installments" className="form-label">
                    Installments
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="installments"
                    required
                    name="installments"
                    value={subPackage.installments}
                    onChange={packageChangeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="number"
                    className="form-control"
                    required
                    id="description"
                    name="description"
                    value={subPackage.description}
                    onChange={packageChangeHandler}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn w-100 btn-primary">
                  {isEditPackage ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default updateCourse;
