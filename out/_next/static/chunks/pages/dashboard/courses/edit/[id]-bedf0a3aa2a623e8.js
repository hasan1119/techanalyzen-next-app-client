(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3452],
  {
    5823: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/courses/edit/[id]',
        function () {
          return a(3343);
        },
      ]);
    },
    7326: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(6042),
        n = a(5893),
        r = a(7294);
      function i(e) {
        var t = e.data,
          i = e.setData,
          l = (0, r.useRef)(),
          c = (0, r.useState)(!1),
          o = c[0],
          u = c[1],
          d = l.current || {},
          m = d.CKEditor,
          p = d.ClassicEditor;
        return (
          (0, r.useEffect)(function () {
            (l.current = {
              CKEditor: a(3813).CKEditor,
              ClassicEditor: a(5234),
            }),
              u(!0);
          }, []),
          o
            ? (0, n.jsx)(m, {
                editor: p,
                data: t.curriculumDescription,
                onInit: function (e) {
                  console.log('Editor is ready to use!', e);
                },
                onChange: function (e, a) {
                  var n = a.getData(),
                    r = (0, s.Z)({}, t);
                  (r.curriculumDescription = n), i(r), console.log(t);
                },
              })
            : (0, n.jsx)('div', { children: 'Editor loading' })
        );
      }
    },
    3455: function (e, t, a) {
      'use strict';
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(6042),
        n = a(5893),
        r = a(7294);
      function i(e) {
        var t = e.data,
          i = e.setData,
          l = (0, r.useRef)(),
          c = (0, r.useState)(!1),
          o = c[0],
          u = c[1],
          d = l.current || {},
          m = d.CKEditor,
          p = d.ClassicEditor;
        return (
          (0, r.useEffect)(function () {
            (l.current = {
              CKEditor: a(3813).CKEditor,
              ClassicEditor: a(5234),
            }),
              u(!0);
          }, []),
          o
            ? (0, n.jsx)(m, {
                editor: p,
                data: t.description,
                onInit: function (e) {
                  console.log('Editor is ready to use!', e);
                },
                onChange: function (e, a) {
                  var n = a.getData(),
                    r = (0, s.Z)({}, t);
                  (r.description = n), i(r), console.log(t);
                },
              })
            : (0, n.jsx)('div', { children: 'Editor loading' })
        );
      }
    },
    3343: function (e, t, a) {
      'use strict';
      a.r(t);
      var s = a(4924),
        n = a(2670),
        r = a(6042),
        i = a(9396),
        l = a(797),
        c = a(5893),
        o = a(9008),
        u = a.n(o),
        d = a(1163),
        m = a(7294),
        p = a(8193),
        h = a(7516),
        b = a(1649),
        f = a(5434),
        g = a(2920),
        x = a(7326),
        j = a(3455),
        v = a(7474);
      t.default = function () {
        var e,
          t,
          a,
          o,
          N,
          y = function (e) {
            var t = e.target.value.trim();
            if ('Enter' == e.key) {
              if (!t) return;
              var a = e.target.dataset.topic;
              if ((console.log(a), '' !== a)) {
                var s = A.topics.map(function (e) {
                  return e === a ? t : e;
                });
                M((0, i.Z)((0, r.Z)({}, A), { topics: s })),
                  (_.current.dataset.topic = '');
              } else
                M(
                  (0, i.Z)((0, r.Z)({}, A), {
                    topics: (0, l.Z)(A.topics).concat([t]),
                  })
                );
              _.current.value = '';
            }
          },
          C = function (e) {
            var t = e.target.value.trim();
            if ('Enter' == e.key) {
              if (!t) return;
              var a = e.target.dataset.requirement;
              if ((console.log(a), '' !== a)) {
                var s = A.requirements.map(function (e) {
                  return e === a ? t : e;
                });
                M((0, i.Z)((0, r.Z)({}, A), { requirements: s })),
                  (L.current.dataset.requirement = '');
              } else
                M(
                  (0, i.Z)((0, r.Z)({}, A), {
                    requirements: (0, l.Z)(A.requirements).concat([t]),
                  })
                );
              L.current.value = '';
            }
          },
          F = function (e) {
            H(
              (0, i.Z)(
                (0, r.Z)({}, J),
                (0, s.Z)({}, e.target.name, e.target.value)
              )
            );
          },
          P = (0, m.useRef)(),
          q = (0, m.useRef)(),
          D = (0, m.useState)([]),
          k = D[0],
          S = D[1],
          Z = (0, m.useState)(!1),
          O = Z[0],
          E = Z[1],
          _ = (0, m.useRef)(),
          L = (0, m.useRef)(),
          T = (0, m.useRef)(),
          I = (0, m.useState)(!1),
          R = I[0],
          w = I[1],
          W = (0, d.useRouter)(),
          K = W.query.id,
          U = (0, m.useState)({
            id: '',
            title: '',
            description: '',
            thumbnail: null,
            paidOrFree: '',
            price: 0,
            discount: { status: !1, price: 0, percentage: 0 },
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
            subscription: { status: 'Off', packages: [] },
          }),
          A = U[0],
          M = U[1];
        (0, m.useEffect)(
          function () {
            E(!0),
              v.Z.get('/v1/courses/'.concat(K))
                .then(function (e) {
                  var t = e.data;
                  console.log(t),
                    M(
                      (0, i.Z)((0, r.Z)({}, t), {
                        thumbnail: '/files/thumb/course/'.concat(t.thumbnail),
                        id: t._id,
                      })
                    );
                })
                .catch(console.log)
                .finally(function () {
                  return E(!1);
                });
          },
          [K, k]
        );
        var B = (0, m.useState)({
            id: '',
            name: '',
            totalPrice: '',
            unitPrice: '',
            installments: '',
            description: '',
          }),
          J = B[0],
          H = B[1];
        (0, m.useEffect)(function () {
          v.Z.get('/category/v1/categories')
            .then(function (e) {
              var t = e.data;
              S(t);
            })
            .catch(function (e) {
              console.log(e);
            });
        }, []);
        var V = function (e) {
          var t = (0, r.Z)({}, A);
          if ('file' === e.target.type) t[e.target.name] = e.target.files[0];
          else if ('discountStatus' === e.target.name)
            t.discount.status = e.target.value;
          else if ('discountPercentage' === e.target.name)
            t.discount.percentage = parseInt(e.target.value);
          else if ('discountPrice' === e.target.name)
            t.discount.price = parseInt(e.target.value);
          else if ('price' === e.target.name)
            t.price = parseInt(e.target.value);
          else if ('slug' === e.target.name)
            t[e.target.name] = e.target.value.trim();
          else if ('subscriptionStatus' === e.target.name) {
            (0, r.Z)({}, A).subscription.status = e.target.value;
          } else
            'paid' === A.paidOrFree && e.target.name,
              (t[e.target.name] = e.target.value);
          M(t);
        };
        console.log(A),
          (0, m.useEffect)(
            function () {
              if (A.thumbnail && (0, n.Z)(A.thumbnail, File)) {
                var e = new FileReader();
                (e.onload = function () {
                  P.current && (P.current.src = e.result);
                }),
                  e.readAsDataURL(A.thumbnail);
              }
            },
            [A]
          );
        return A._id
          ? (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(u(), {
                  children: (0, c.jsx)('title', {
                    children: 'Create Course | Techanalyzen',
                  }),
                }),
                (0, c.jsxs)('div', {
                  className:
                    'createCourseContainer dashboardContent container my-4',
                  children: [
                    (0, c.jsx)('h1', {
                      className: 'mb-3 mx-5',
                      children: 'Update Course',
                    }),
                    (0, c.jsx)('hr', {}),
                    (0, c.jsxs)('form', {
                      className: 'form form-container mx-5 my-4',
                      onSubmit: function (e) {
                        e.preventDefault(),
                          (function () {
                            var e = new FormData();
                            e.append('title', A.title),
                              e.append('id', A.id),
                              e.append('description', A.description),
                              e.append('thumbnail', A.thumbnail),
                              e.append('slug', A.slug),
                              e.append('status', A.status),
                              e.append(
                                'category',
                                A.category._id ? A.category._id : A.category
                              ),
                              e.append(
                                'subCategory',
                                A.subCategory._id
                                  ? A.subCategory._id
                                  : A.subCategory
                              ),
                              e.append(
                                'curriculumDescription',
                                A.curriculumDescription
                              ),
                              e.append('language', A.language),
                              e.append('courseLength', A.courseLength),
                              e.append('totalLesson', A.totalLesson),
                              e.append('totalClass', A.totalClass),
                              e.append('topics', JSON.stringify(A.topics)),
                              e.append('startWithIn', A.startWithIn),
                              e.append(
                                'requirements',
                                JSON.stringify(A.requirements)
                              ),
                              e.append('price', A.price),
                              e.append('paidOrFree', A.paidOrFree),
                              e.append('courseType', A.courseType),
                              e.append('level', A.level),
                              e.append('endDate', A.endDate),
                              e.append('duration', A.duration),
                              e.append('discount', JSON.stringify(A.discount)),
                              e.append('certificate', A.certificate),
                              e.append('attribute', A.attribute),
                              e.append('featured', A.featured),
                              e.append(
                                'subscription',
                                JSON.stringify(A.subscription)
                              ),
                              console.log(A),
                              (
                                'paid' === A.paidOrFree
                                  ? A.attribute &&
                                    A.category &&
                                    A.certificate &&
                                    A.courseLength &&
                                    A.courseType &&
                                    A.curriculumDescription &&
                                    A.description &&
                                    A.paidOrFree &&
                                    A.price &&
                                    A.discount &&
                                    A.discount.status &&
                                    A.discount.percentage &&
                                    A.discount.price &&
                                    A.category &&
                                    A.subCategory &&
                                    A.attribute &&
                                    A.level &&
                                    A.courseLength &&
                                    A.totalClass &&
                                    A.totalClass &&
                                    A.language &&
                                    A.certificate &&
                                    A.endDate &&
                                    A.startWithIn &&
                                    A.status &&
                                    A.topics.length &&
                                    A.requirements.length
                                  : A.attribute &&
                                    A.category &&
                                    A.certificate &&
                                    A.courseLength &&
                                    A.courseType &&
                                    A.curriculumDescription &&
                                    A.description &&
                                    A.paidOrFree &&
                                    A.category &&
                                    A.subCategory &&
                                    A.attribute &&
                                    A.level &&
                                    A.courseLength &&
                                    A.totalClass &&
                                    A.totalClass &&
                                    A.language &&
                                    A.certificate &&
                                    A.endDate &&
                                    A.startWithIn &&
                                    A.status &&
                                    A.topics.length &&
                                    A.requirements.length &&
                                    A.subscription
                              )
                                ? (console.log(A),
                                  E(!0),
                                  fetch(
                                    'https://techanalyzen.libertysailingschool.net/api/admin/v1/course/update',
                                    { method: 'put', body: e }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      e.thumbnail && e.thumbnail.msg
                                        ? (0, g.Am)(e.thumbnail.msg)
                                        : e._id
                                        ? W.push('/dashboard/courses')
                                        : console.log(e);
                                    })
                                    .catch(function (e) {
                                      e.thumbnail &&
                                        e.thumbnail.msg &&
                                        (0, g.Am)(e.thumbnail.msg);
                                    }))
                                : ((0, g.Am)(
                                    'Please fill out all input field!'
                                  ),
                                  console.log(
                                    'Please fill out all input field!'
                                  ));
                          })();
                      },
                      children: [
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'title',
                              className: 'form-label',
                              children: 'Title',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'title',
                              name: 'title',
                              value: A.title,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'slug',
                              className: 'form-label',
                              children: 'Slug',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'slug',
                              name: 'slug',
                              value: A.slug,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'description',
                              className: 'form-label',
                              children: 'Description',
                            }),
                            (0, c.jsx)(j.Z, { data: A, setData: M }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'thumbnail',
                              className: 'form-label',
                              children: (0, c.jsxs)('div', {
                                className: 'img_thumb',
                                children: [
                                  (0, c.jsx)('p', { children: 'Thumbnail' }),
                                  null === A.thumbnail &&
                                    (0, c.jsxs)('div', {
                                      className: 'preview',
                                      children: [
                                        (0, c.jsx)(b.lnH, {}),
                                        (0, c.jsx)('span', {
                                          children: 'No file chosen, yet!',
                                        }),
                                      ],
                                    }),
                                  null !== A.thumbnail &&
                                    (0, c.jsxs)(c.Fragment, {
                                      children: [
                                        (0, c.jsx)('div', {
                                          className: 'imgPreview',
                                          children: (0, c.jsx)('img', {
                                            ref: P,
                                            src: A.thumbnail,
                                          }),
                                        }),
                                        (0, c.jsx)('span', {
                                          className: 'btn btn-primary',
                                          id: 'change_image',
                                          children: 'Change Image',
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                            (0, c.jsx)('input', {
                              hidden: !0,
                              type: 'file',
                              className: 'form-control',
                              id: 'thumbnail',
                              name: 'thumbnail',
                              onChange: V,
                              accept: 'image/*',
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'courseType',
                              className: 'form-label',
                              children: 'Course Type',
                            }),
                            (0, c.jsxs)('select', {
                              required: !0,
                              className: 'form-control',
                              id: 'courseType',
                              name: 'courseType',
                              value: A.courseType,
                              onChange: V,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Online',
                                  children: 'Online',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Offline',
                                  children: 'Offline',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Pre-Recorded',
                                  children: 'Pre-Recorded',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Day Care',
                                  children: 'Day Care',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'status',
                              className: 'form-label',
                              children: 'Course Status',
                            }),
                            (0, c.jsxs)('select', {
                              required: !0,
                              className: 'form-control',
                              id: 'status',
                              name: 'status',
                              value: A.status,
                              onChange: V,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Draft',
                                  children: 'Draft',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Published',
                                  children: 'Published',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Unpublished',
                                  children: 'Unpublished',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'paidOrFree',
                              className: 'form-label',
                              children: 'Paid/Free',
                            }),
                            (0, c.jsxs)('select', {
                              required: !0,
                              className: 'form-control',
                              id: 'paidOrFree',
                              name: 'paidOrFree',
                              value: A.paidOrFree,
                              onChange: V,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'paid',
                                  children: 'Paid',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'free',
                                  children: 'Free',
                                }),
                              ],
                            }),
                          ],
                        }),
                        'paid' == A.paidOrFree &&
                          (0, c.jsxs)(c.Fragment, {
                            children: [
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'price',
                                    className: 'form-label',
                                    children: 'Original Price',
                                  }),
                                  (0, c.jsx)('input', {
                                    required: !0,
                                    type: 'number',
                                    className: 'form-control',
                                    id: 'price',
                                    name: 'price',
                                    value: A.price,
                                    onChange: V,
                                  }),
                                ],
                              }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'discountStatus',
                                    className: 'form-label',
                                    children: 'Discount Status',
                                  }),
                                  (0, c.jsxs)('select', {
                                    required: !0,
                                    className: 'form-control',
                                    id: 'discountStatus',
                                    name: 'discountStatus',
                                    value: A.discount.status,
                                    onChange: V,
                                    children: [
                                      (0, c.jsx)('option', {
                                        value: '',
                                        disabled: !0,
                                        children: '--Select--',
                                      }),
                                      (0, c.jsx)('option', {
                                        value: 'Off',
                                        children: 'Off',
                                      }),
                                      (0, c.jsx)('option', {
                                        value: 'On',
                                        children: 'On',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              'On' == A.discount.status &&
                                (0, c.jsxs)(c.Fragment, {
                                  children: [
                                    (0, c.jsxs)('div', {
                                      className: 'mb-3',
                                      children: [
                                        (0, c.jsx)('label', {
                                          htmlFor: 'discountPercentage',
                                          className: 'form-label',
                                          children: 'Discount Percentage(%)',
                                        }),
                                        (0, c.jsx)('input', {
                                          required: !0,
                                          type: 'number',
                                          className: 'form-control',
                                          id: 'discountPercentage',
                                          name: 'discountPercentage',
                                          value: A.discount.percentage,
                                          onChange: V,
                                        }),
                                      ],
                                    }),
                                    (0, c.jsxs)('div', {
                                      className: 'mb-3',
                                      children: [
                                        (0, c.jsx)('label', {
                                          htmlFor: 'discountPrice',
                                          className: 'form-label',
                                          children: 'Discount Price',
                                        }),
                                        (0, c.jsx)('input', {
                                          required: !0,
                                          type: 'number',
                                          className: 'form-control',
                                          id: 'discountPrice',
                                          name: 'discountPrice',
                                          value: A.discount.price,
                                          onChange: V,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'subscriptionStatus',
                                    className: 'form-label',
                                    children: 'Subscription Status',
                                  }),
                                  (0, c.jsxs)('select', {
                                    required: !0,
                                    className: 'form-control',
                                    id: 'subscriptionStatus',
                                    name: 'subscriptionStatus',
                                    value: A.subscription.status,
                                    onChange: V,
                                    children: [
                                      (0, c.jsx)('option', {
                                        value: '',
                                        disabled: !0,
                                        children: '--Select--',
                                      }),
                                      (0, c.jsx)('option', {
                                        value: 'On',
                                        children: 'On',
                                      }),
                                      (0, c.jsx)('option', {
                                        value: 'Off',
                                        children: 'Off',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              A.subscription &&
                                'On' === A.subscription.status &&
                                (0, c.jsxs)('div', {
                                  className: 'mb-3',
                                  children: [
                                    (0, c.jsx)('label', {
                                      htmlFor: 'Packages',
                                      className: 'form-label',
                                      children: 'Packages',
                                    }),
                                    (0, c.jsxs)('div', {
                                      className: 'package_container',
                                      children: [
                                        null ===
                                          (e = A.subscription.packages) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return (0, c.jsxs)(
                                                'div',
                                                {
                                                  className: 'package',
                                                  children: [
                                                    (0, c.jsxs)('p', {
                                                      className: 'name',
                                                      children: [
                                                        (0, c.jsx)('b', {
                                                          children: 'Name:',
                                                        }),
                                                        ' ',
                                                        e.name,
                                                      ],
                                                    }),
                                                    (0, c.jsxs)('p', {
                                                      className: 'totalPrice',
                                                      children: [
                                                        (0, c.jsx)('b', {
                                                          children:
                                                            'Total Price:',
                                                        }),
                                                        ' ',
                                                        e.totalPrice,
                                                        'BDT',
                                                      ],
                                                    }),
                                                    (0, c.jsxs)('p', {
                                                      className: 'unitPrice',
                                                      children: [
                                                        (0, c.jsx)('b', {
                                                          children:
                                                            'Unit Price:',
                                                        }),
                                                        ' ',
                                                        e.unitPrice,
                                                        'BDT',
                                                      ],
                                                    }),
                                                    (0, c.jsxs)('p', {
                                                      className: 'installments',
                                                      children: [
                                                        (0, c.jsx)('b', {
                                                          children:
                                                            ' installments:',
                                                        }),
                                                        e.installments,
                                                        ' Times',
                                                      ],
                                                    }),
                                                    (0, c.jsxs)('p', {
                                                      className: 'unitPrice',
                                                      children: [
                                                        (0, c.jsx)('b', {
                                                          children:
                                                            'Description:',
                                                        }),
                                                        ' ',
                                                        e.description,
                                                      ],
                                                    }),
                                                    (0, c.jsxs)('div', {
                                                      className: 'action_btn',
                                                      children: [
                                                        (0, c.jsx)('button', {
                                                          type: 'button',
                                                          onClick: function () {
                                                            return (function (
                                                              e
                                                            ) {
                                                              var t =
                                                                A.subscription.packages.find(
                                                                  function (t) {
                                                                    return (
                                                                      t.id == e
                                                                    );
                                                                  }
                                                                );
                                                              H(t),
                                                                T.current.click(),
                                                                (T.current.dataset.id =
                                                                  t.id),
                                                                w(!0),
                                                                console.log(t);
                                                            })(e.id);
                                                          },
                                                          className:
                                                            'btn btn-secondary btn-sm',
                                                          children: 'Edit',
                                                        }),
                                                        (0, c.jsx)('button', {
                                                          onClick: function (
                                                            t
                                                          ) {
                                                            return (function (
                                                              e
                                                            ) {
                                                              var t =
                                                                  A.subscription.packages.filter(
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        t.id !==
                                                                        e
                                                                      );
                                                                    }
                                                                  ),
                                                                a = (0, r.Z)(
                                                                  {},
                                                                  A
                                                                );
                                                              (a.subscription.packages =
                                                                t),
                                                                M(a);
                                                            })(e.id);
                                                          },
                                                          className:
                                                            'btn btn-danger btn-sm',
                                                          children: 'Delete',
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                e.name + e.totalPrice
                                              );
                                            }),
                                        (0, c.jsx)('button', {
                                          type: 'button',
                                          'data-bs-toggle': 'modal',
                                          'data-bs-target': '#packageModal',
                                          className: 'addNewPackage',
                                          ref: T,
                                          'data-id': '',
                                          children: (0, c.jsx)(p.dEn, {}),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'category',
                              className: 'form-label',
                              children: 'Category',
                            }),
                            (0, c.jsxs)('select', {
                              required: !0,
                              className: 'form-control',
                              id: 'category',
                              name: 'category',
                              value: A.category,
                              onChange: V,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                k.map(function (e) {
                                  return (0,
                                  c.jsx)('option', { value: e._id, children: e.title }, e._id);
                                }),
                              ],
                            }),
                          ],
                        }),
                        A.category
                          ? (0, c.jsxs)('div', {
                              className: 'mb-3',
                              children: [
                                (0, c.jsx)('label', {
                                  htmlFor: 'subCategory',
                                  className: 'form-label',
                                  children: 'Sub Category',
                                }),
                                (0, c.jsxs)('select', {
                                  required: !0,
                                  className: 'form-control',
                                  id: 'subCategory',
                                  name: 'subCategory',
                                  value: A.subCategory,
                                  onChange: V,
                                  children: [
                                    (0, c.jsx)('option', {
                                      value: '',
                                      disabled: !0,
                                      children: '--Select--',
                                    }),
                                    console.log(
                                      null === k || void 0 === k
                                        ? void 0
                                        : k.find(function (e) {
                                            return e._id == A.category._id;
                                          })
                                    ),
                                    null ===
                                      (t =
                                        null === k || void 0 === k
                                          ? void 0
                                          : k.find(function (e) {
                                              var t;
                                              return (
                                                e._id ==
                                                (null === A ||
                                                void 0 === A ||
                                                null === (t = A.category) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t._id)
                                              );
                                            })) ||
                                    void 0 === t ||
                                    null === (a = t.subCategories) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e) {
                                          return (0,
                                          c.jsx)('option', { value: e._id, children: e.title }, e._id);
                                        }),
                                  ],
                                }),
                              ],
                            })
                          : '',
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'attribute',
                              className: 'form-label',
                              children: 'Attribute',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'attribute',
                              name: 'attribute',
                              value: A.attribute,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'featured',
                              className: 'form-label',
                              children: 'Featured Message',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'featured',
                              name: 'featured',
                              value: A.featured,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'level',
                              className: 'form-label',
                              children: 'Level',
                            }),
                            (0, c.jsxs)('select', {
                              required: !0,
                              className: 'form-control',
                              id: 'level',
                              name: 'level',
                              value: A.level,
                              onChange: V,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Beginner',
                                  children: 'Beginner',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Intermediate',
                                  children: 'Intermediate',
                                }),
                                (0, c.jsx)('option', {
                                  value: 'Advanced',
                                  children: 'Advanced',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'courseLength',
                              className: 'form-label',
                              children: 'Course Length',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'courseLength',
                              name: 'courseLength',
                              value: A.courseLength,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'duration',
                              className: 'form-label',
                              children: 'Course Duration',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'duration',
                              name: 'duration',
                              value: A.duration,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'totalLesson',
                              className: 'form-label',
                              children: 'Total Lessons',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'totalLesson',
                              name: 'totalLesson',
                              value: A.totalLesson,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'totalClass',
                              className: 'form-label',
                              children: 'Total Class',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'totalClass',
                              name: 'totalClass',
                              value: A.totalClass,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'language',
                              className: 'form-label',
                              children: 'Language',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'language',
                              name: 'language',
                              value: A.language,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'certificate',
                              className: 'form-label',
                              children: 'Certificate',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'certificate',
                              name: 'certificate',
                              value: A.certificate,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'endDate',
                              className: 'form-label',
                              children: 'End Date',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'endDate',
                              name: 'endDate',
                              value: A.endDate,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'startWithIn',
                              className: 'form-label',
                              children: 'Start Within',
                            }),
                            (0, c.jsx)('input', {
                              required: !0,
                              type: 'text',
                              className: 'form-control',
                              id: 'startWithIn',
                              name: 'startWithIn',
                              value: A.startWithIn,
                              onChange: V,
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'totalLesson',
                              className: 'form-label',
                              children: 'Curriculum Description',
                            }),
                            (0, c.jsx)(x.Z, { data: A, setData: M }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: '',
                              className: 'form-label',
                              children: 'Topics',
                            }),
                            (0, c.jsxs)('div', {
                              className: 'topisContainer',
                              children: [
                                null === A ||
                                void 0 === A ||
                                null === (o = A.topics) ||
                                void 0 === o
                                  ? void 0
                                  : o.map(function (e) {
                                      return (0, c.jsxs)(
                                        'div',
                                        {
                                          className: 'topic',
                                          children: [
                                            (0, c.jsx)('p', { children: e }),
                                            (0, c.jsx)('button', {
                                              type: 'button',
                                              onClick: function () {
                                                return (function (e) {
                                                  var t = A.topics.filter(
                                                    function (t) {
                                                      return t !== e;
                                                    }
                                                  );
                                                  M(
                                                    (0, i.Z)((0, r.Z)({}, A), {
                                                      topics: t,
                                                    })
                                                  );
                                                })(e);
                                              },
                                              children: (0, c.jsx)(f.F1H, {}),
                                            }),
                                            (0, c.jsx)('button', {
                                              type: 'button',
                                              onClick: function () {
                                                return (function (e) {
                                                  (_.current.value = e),
                                                    (_.current.dataset.topic =
                                                      e),
                                                    _.current.focus();
                                                })(e);
                                              },
                                              children: (0, c.jsx)(h.vpV, {}),
                                            }),
                                          ],
                                        },
                                        e
                                      );
                                    }),
                                (0, c.jsx)('input', {
                                  type: 'text',
                                  placeholder: 'Enter topic name',
                                  'data-topic': '',
                                  ref: _,
                                  onKeyPress: function (e) {
                                    y(e),
                                      'Enter' === e.key && e.preventDefault();
                                  },
                                  onChange: y,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            (0, c.jsx)('label', {
                              htmlFor: 'Requirements',
                              className: 'form-label',
                              children: 'Requirements',
                            }),
                            (0, c.jsxs)('div', {
                              className: 'topisContainer',
                              children: [
                                null === A ||
                                void 0 === A ||
                                null === (N = A.requirements) ||
                                void 0 === N
                                  ? void 0
                                  : N.map(function (e) {
                                      return (0, c.jsxs)(
                                        'div',
                                        {
                                          className: 'topic',
                                          children: [
                                            (0, c.jsx)('p', { children: e }),
                                            (0, c.jsx)('button', {
                                              type: 'button',
                                              onClick: function () {
                                                return (function (e) {
                                                  var t = A.requirements.filter(
                                                    function (t) {
                                                      return t !== e;
                                                    }
                                                  );
                                                  M(
                                                    (0, i.Z)((0, r.Z)({}, A), {
                                                      requirements: t,
                                                    })
                                                  );
                                                })(e);
                                              },
                                              children: (0, c.jsx)(f.F1H, {}),
                                            }),
                                            (0, c.jsx)('button', {
                                              type: 'button',
                                              onClick: function () {
                                                return (function (e) {
                                                  (L.current.value = e),
                                                    (L.current.dataset.requirement =
                                                      e),
                                                    L.current.focus();
                                                })(e);
                                              },
                                              children: (0, c.jsx)(h.vpV, {}),
                                            }),
                                          ],
                                        },
                                        e
                                      );
                                    }),
                                (0, c.jsx)('input', {
                                  type: 'text',
                                  placeholder: 'Enter requirement',
                                  'data-requirement': '',
                                  ref: L,
                                  onKeyPress: function (e) {
                                    C(e),
                                      'Enter' === e.key && e.preventDefault();
                                  },
                                  onChange: C,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsx)('button', {
                          type: 'submit',
                          className: 'btn btn-success form-control mt-3',
                          children: O
                            ? (0, c.jsx)('div', {
                                className: 'spinner-border spinner-border-md',
                                role: 'status',
                              })
                            : 'Update Course',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsx)('div', {
                  className: 'modal fade',
                  id: 'packageModal',
                  'data-bs-backdrop': 'static',
                  'data-bs-keyboard': 'false',
                  tabIndex: '-1',
                  'aria-labelledby': 'packageModalLabel',
                  'aria-hidden': 'true',
                  children: (0, c.jsx)('div', {
                    className: 'modal-dialog',
                    children: (0, c.jsx)('div', {
                      className: 'modal-content',
                      children: (0, c.jsxs)('form', {
                        onSubmit: function (e) {
                          e.preventDefault();
                          var t,
                            a = T.current.dataset.id;
                          a
                            ? ((t = A.subscription.packages.map(function (e) {
                                return (
                                  console.log('object', e, a), e.id == a ? J : e
                                );
                              })),
                              w(!1),
                              (T.current.dataset.id = ''))
                            : (t = (0, l.Z)(A.subscription.packages).concat([
                                (0, i.Z)((0, r.Z)({}, J), {
                                  id: new Date().getTime(),
                                }),
                              ]));
                          var s = (0, r.Z)({}, A);
                          console.log(t),
                            (s.subscription.packages = t),
                            M(s),
                            H({
                              id: '',
                              name: '',
                              totalPrice: '',
                              unitPrice: '',
                              installments: '',
                              description: '',
                            }),
                            q.current.click();
                        },
                        children: [
                          (0, c.jsxs)('div', {
                            className: 'modal-header',
                            children: [
                              (0, c.jsx)('h1', {
                                className: 'modal-title fs-5',
                                id: 'packageModalLabel',
                                children: 'Create Package',
                              }),
                              (0, c.jsx)('button', {
                                type: 'button',
                                className: 'btn-close',
                                'data-bs-dismiss': 'modal',
                                'aria-label': 'Close',
                                ref: q,
                              }),
                            ],
                          }),
                          (0, c.jsxs)('div', {
                            className: 'modal-body',
                            children: [
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'name',
                                    className: 'form-label',
                                    children: 'Name',
                                  }),
                                  (0, c.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    required: !0,
                                    id: 'name',
                                    name: 'name',
                                    value: J.name,
                                    onChange: F,
                                  }),
                                ],
                              }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'totalPrice',
                                    className: 'form-label',
                                    children: 'Total Price',
                                  }),
                                  (0, c.jsx)('input', {
                                    type: 'number',
                                    className: 'form-control',
                                    id: 'totalPrice',
                                    name: 'totalPrice',
                                    required: !0,
                                    value: J.totalPrice,
                                    onChange: F,
                                  }),
                                ],
                              }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'unitPrice',
                                    className: 'form-label',
                                    children: 'Unit Price',
                                  }),
                                  (0, c.jsx)('input', {
                                    type: 'number',
                                    className: 'form-control',
                                    required: !0,
                                    id: 'unitPrice',
                                    name: 'unitPrice',
                                    value: J.unitPrice,
                                    onChange: F,
                                  }),
                                ],
                              }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'installments',
                                    className: 'form-label',
                                    children: 'Installments',
                                  }),
                                  (0, c.jsx)('input', {
                                    type: 'number',
                                    className: 'form-control',
                                    id: 'installments',
                                    required: !0,
                                    name: 'installments',
                                    value: J.installments,
                                    onChange: F,
                                  }),
                                ],
                              }),
                              (0, c.jsxs)('div', {
                                className: 'mb-3',
                                children: [
                                  (0, c.jsx)('label', {
                                    htmlFor: 'description',
                                    className: 'form-label',
                                    children: 'Description',
                                  }),
                                  (0, c.jsx)('textarea', {
                                    type: 'number',
                                    className: 'form-control',
                                    required: !0,
                                    id: 'description',
                                    name: 'description',
                                    value: J.description,
                                    onChange: F,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, c.jsx)('div', {
                            className: 'modal-footer',
                            children: (0, c.jsx)('button', {
                              type: 'submit',
                              className: 'btn w-100 btn-primary',
                              children: R ? 'Update' : 'Create',
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            })
          : (0, c.jsx)('p', { children: 'Loading' });
      };
    },
  },
  function (e) {
    e.O(0, [4617, 2554, 623, 9774, 2888, 179], function () {
      return (t = 5823), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
