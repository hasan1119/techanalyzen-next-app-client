(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6186],
  {
    8255: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/courses/create',
        function () {
          return a(478);
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
          h = d.ClassicEditor;
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
                editor: h,
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
          h = d.ClassicEditor;
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
                editor: h,
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
    478: function (e, t, a) {
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
        h = a(8193),
        p = a(7516),
        b = a(1649),
        f = a(5434),
        x = a(2920),
        g = a(7326),
        j = a(3455),
        v = a(7474);
      t.default = function () {
        var e,
          t = function (e) {
            var t = e.target.value.trim();
            if ('Enter' == e.key) {
              if (!t) return;
              var a = e.target.dataset.topic;
              if ((console.log(a), '' !== a)) {
                var s = w.topics.map(function (e) {
                  return e === a ? t : e;
                });
                R((0, i.Z)((0, r.Z)({}, w), { topics: s })),
                  (k.current.dataset.topic = '');
              } else
                R(
                  (0, i.Z)((0, r.Z)({}, w), {
                    topics: (0, l.Z)(w.topics).concat([t]),
                  })
                );
              k.current.value = '';
            }
          },
          a = function (e) {
            var t = e.target.value.trim();
            if ('Enter' == e.key) {
              if (!t) return;
              var a = e.target.dataset.requirement;
              if ((console.log(a), '' !== a)) {
                var s = w.requirements.map(function (e) {
                  return e === a ? t : e;
                });
                R((0, i.Z)((0, r.Z)({}, w), { requirements: s })),
                  (T.current.dataset.requirement = '');
              } else
                R(
                  (0, i.Z)((0, r.Z)({}, w), {
                    requirements: (0, l.Z)(w.requirements).concat([t]),
                  })
                );
              T.current.value = '';
            }
          },
          o = function (e) {
            A(
              (0, i.Z)(
                (0, r.Z)({}, K),
                (0, s.Z)({}, e.target.name, e.target.value)
              )
            );
          },
          N = (0, m.useRef)(),
          y = (0, m.useRef)(),
          C = (0, m.useState)([]),
          F = C[0],
          P = C[1],
          q = (0, m.useState)(!1),
          D = q[0],
          S = q[1],
          k = (0, m.useRef)(),
          O = (0, m.useRef)(),
          Z = (0, m.useState)(!1),
          E = Z[0],
          L = Z[1],
          T = (0, m.useRef)(),
          _ = (0, d.useRouter)(),
          I = (0, m.useState)({
            title: '',
            description: '',
            batch: 0,
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
          w = I[0],
          R = I[1],
          W = (0, m.useState)({
            id: '',
            name: '',
            totalPrice: '',
            unitPrice: '',
            type: '',
            installments: '',
            description: '',
          }),
          K = W[0],
          A = W[1];
        (0, m.useEffect)(function () {
          v.Z.get('/category/v1/categories')
            .then(function (e) {
              var t = e.data;
              P(t);
            })
            .catch(function (e) {
              console.log(e);
            });
        }, []);
        var M = function (e) {
          var t = (0, r.Z)({}, w);
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
            (0, r.Z)({}, w).subscription.status = e.target.value;
          } else
            'paid' === w.paidOrFree && e.target.name,
              (t[e.target.name] = e.target.value);
          R(t);
        };
        (0, m.useEffect)(
          function () {
            if (w.thumbnail && (0, n.Z)(w.thumbnail, File)) {
              var e = new FileReader();
              (e.onload = function () {
                N.current && (N.current.src = e.result);
              }),
                e.readAsDataURL(w.thumbnail);
            }
          },
          [w]
        );
        return (0, c.jsxs)(c.Fragment, {
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
                  children: 'Create your awesome course',
                }),
                (0, c.jsxs)('form', {
                  className: 'form form-container mx-5 my-4',
                  onSubmit: function (e) {
                    e.preventDefault(),
                      (function () {
                        var e = new FormData();
                        e.append('title', w.title),
                          e.append('description', w.description),
                          e.append('batch', w.batch),
                          e.append('thumbnail', w.thumbnail),
                          e.append('slug', w.slug),
                          e.append('status', w.status),
                          e.append('category', w.category),
                          e.append('subCategory', w.subCategory),
                          e.append(
                            'curriculumDescription',
                            w.curriculumDescription
                          ),
                          e.append('language', w.language),
                          e.append('courseLength', w.courseLength),
                          e.append('totalLesson', w.totalLesson),
                          e.append('totalClass', w.totalClass),
                          e.append('topics', JSON.stringify(w.topics)),
                          e.append('startWithIn', w.startWithIn),
                          e.append(
                            'requirements',
                            JSON.stringify(w.requirements)
                          ),
                          e.append('price', w.price),
                          e.append('paidOrFree', w.paidOrFree),
                          e.append('courseType', w.courseType),
                          e.append('level', w.level),
                          e.append('endDate', w.endDate),
                          e.append('duration', w.duration),
                          e.append('discount', JSON.stringify(w.discount)),
                          e.append('certificate', w.certificate),
                          e.append('attribute', w.attribute),
                          e.append('featured', w.featured),
                          e.append(
                            'subscription',
                            JSON.stringify(w.subscription)
                          ),
                          console.log(w),
                          (
                            'paid' === w.paidOrFree
                              ? w.attribute &&
                                w.category &&
                                w.certificate &&
                                w.courseLength &&
                                w.courseType &&
                                w.curriculumDescription &&
                                w.description &&
                                w.paidOrFree &&
                                w.price &&
                                w.discount &&
                                w.discount.status &&
                                w.discount.percentage &&
                                w.discount.price &&
                                w.category &&
                                w.subCategory &&
                                w.attribute &&
                                w.level &&
                                w.courseLength &&
                                w.totalClass &&
                                w.totalClass &&
                                w.language &&
                                w.certificate &&
                                w.endDate &&
                                w.startWithIn &&
                                w.status &&
                                (0, n.Z)(w.thumbnail, File) &&
                                w.topics.length &&
                                w.requirements.length
                              : w.attribute &&
                                w.category &&
                                w.certificate &&
                                w.courseLength &&
                                w.courseType &&
                                w.curriculumDescription &&
                                w.description &&
                                w.paidOrFree &&
                                w.category &&
                                w.subCategory &&
                                w.attribute &&
                                w.level &&
                                w.courseLength &&
                                w.totalClass &&
                                w.totalClass &&
                                w.language &&
                                w.certificate &&
                                w.endDate &&
                                w.startWithIn &&
                                w.status &&
                                (0, n.Z)(w.thumbnail, File) &&
                                w.topics.length &&
                                w.requirements.length &&
                                w.subscription
                          )
                            ? (console.log(w),
                              S(!0),
                              fetch('/api/admin/v1/course/create', {
                                method: 'POST',
                                body: e,
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (e) {
                                  e.thumbnail && e.thumbnail.msg
                                    ? (0, x.Am)(e.thumbnail.msg)
                                    : e._id
                                    ? _.push('/dashboard/courses')
                                    : console.log(e);
                                })
                                .catch(function (e) {
                                  e.thumbnail &&
                                    e.thumbnail.msg &&
                                    (0, x.Am)(e.thumbnail.msg);
                                }))
                            : ((0, x.Am)('Please fill out all input field!'),
                              console.log('Please fill out all input field!'));
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
                          value: w.title,
                          onChange: M,
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
                          value: w.slug,
                          onChange: M,
                        }),
                      ],
                    }),
                    (0, c.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, c.jsx)('label', {
                          htmlFor: 'batch',
                          className: 'form-label',
                          children: 'Batch No',
                        }),
                        (0, c.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'batch',
                          name: 'batch',
                          value: w.batch,
                          onChange: M,
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
                        (0, c.jsx)(j.Z, { data: w, setData: R }),
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
                              null === w.thumbnail &&
                                (0, c.jsxs)('div', {
                                  className: 'preview',
                                  children: [
                                    (0, c.jsx)(b.lnH, {}),
                                    (0, c.jsx)('span', {
                                      children: 'No file chosen, yet!',
                                    }),
                                  ],
                                }),
                              null !== w.thumbnail &&
                                (0, c.jsxs)(c.Fragment, {
                                  children: [
                                    (0, c.jsx)('div', {
                                      className: 'imgPreview',
                                      children: (0, c.jsx)('img', { ref: N }),
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
                          onChange: M,
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
                          value: w.courseType,
                          onChange: M,
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
                          value: w.status,
                          onChange: M,
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
                          value: w.paidOrFree,
                          onChange: M,
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
                    'paid' == w.paidOrFree &&
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
                                value: w.price,
                                onChange: M,
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
                                value: w.discount.status,
                                onChange: M,
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
                          'On' == w.discount.status &&
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
                                      value: w.discount.percentage,
                                      onChange: M,
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
                                      value: w.discount.price,
                                      onChange: M,
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
                                value: w.subscription.status,
                                onChange: M,
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
                          w.subscription &&
                            'On' === w.subscription.status &&
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
                                    null === (e = w.subscription.packages) ||
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
                                                      children: 'Total Price:',
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
                                                      children: 'Unit Price:',
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
                                                        ' Installments:',
                                                    }),
                                                    e.installments,
                                                    ' Times',
                                                  ],
                                                }),
                                                (0, c.jsxs)('p', {
                                                  className: 'unitPrice',
                                                  children: [
                                                    (0, c.jsx)('b', {
                                                      children: 'Description:',
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
                                                        return (function (e) {
                                                          var t =
                                                            w.subscription.packages.find(
                                                              function (t) {
                                                                return (
                                                                  t.id == e
                                                                );
                                                              }
                                                            );
                                                          A(t),
                                                            O.current.click(),
                                                            (O.current.dataset.id =
                                                              t.id),
                                                            L(!0),
                                                            console.log(t);
                                                        })(e.id);
                                                      },
                                                      className:
                                                        'btn btn-secondary btn-sm',
                                                      children: 'Edit',
                                                    }),
                                                    (0, c.jsx)('button', {
                                                      onClick: function (t) {
                                                        return (function (e) {
                                                          var t =
                                                              w.subscription.packages.filter(
                                                                function (t) {
                                                                  return (
                                                                    t.id !== e
                                                                  );
                                                                }
                                                              ),
                                                            a = (0, r.Z)({}, w);
                                                          (a.subscription.packages =
                                                            t),
                                                            R(a);
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
                                      ref: O,
                                      'data-id': '',
                                      children: (0, c.jsx)(h.dEn, {}),
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
                          value: w.category,
                          onChange: M,
                          children: [
                            (0, c.jsx)('option', {
                              value: '',
                              disabled: !0,
                              children: '--Select--',
                            }),
                            F.map(function (e) {
                              return (0,
                              c.jsx)('option', { value: e._id, children: e.title }, e._id);
                            }),
                          ],
                        }),
                      ],
                    }),
                    w.category
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
                              value: w.subCategory,
                              onChange: M,
                              children: [
                                (0, c.jsx)('option', {
                                  value: '',
                                  disabled: !0,
                                  children: '--Select--',
                                }),
                                F.find(function (e) {
                                  return e._id == w.category;
                                }).subCategories.map(function (e) {
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
                          value: w.attribute,
                          onChange: M,
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
                          value: w.featured,
                          onChange: M,
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
                          value: w.level,
                          onChange: M,
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
                          value: w.courseLength,
                          onChange: M,
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
                          value: w.duration,
                          onChange: M,
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
                          value: w.totalLesson,
                          onChange: M,
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
                          value: w.totalClass,
                          onChange: M,
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
                          value: w.language,
                          onChange: M,
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
                          value: w.certificate,
                          onChange: M,
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
                          value: w.endDate,
                          onChange: M,
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
                          value: w.startWithIn,
                          onChange: M,
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
                        (0, c.jsx)(g.Z, { data: w, setData: R }),
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
                            w.topics.map(function (e) {
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
                                          var t = w.topics.filter(function (t) {
                                            return t !== e;
                                          });
                                          R(
                                            (0, i.Z)((0, r.Z)({}, w), {
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
                                          (k.current.value = e),
                                            (k.current.dataset.topic = e),
                                            k.current.focus();
                                        })(e);
                                      },
                                      children: (0, c.jsx)(p.vpV, {}),
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
                              ref: k,
                              onKeyPress: function (e) {
                                t(e), 'Enter' === e.key && e.preventDefault();
                              },
                              onChange: t,
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
                            w.requirements.map(function (e) {
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
                                          var t = w.requirements.filter(
                                            function (t) {
                                              return t !== e;
                                            }
                                          );
                                          R(
                                            (0, i.Z)((0, r.Z)({}, w), {
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
                                          (T.current.value = e),
                                            (T.current.dataset.requirement = e),
                                            T.current.focus();
                                        })(e);
                                      },
                                      children: (0, c.jsx)(p.vpV, {}),
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
                              ref: T,
                              onKeyPress: function (e) {
                                a(e), 'Enter' === e.key && e.preventDefault();
                              },
                              onChange: a,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, c.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-success form-control mt-3',
                      children: D
                        ? (0, c.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : 'Create Course',
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
                        a = O.current.dataset.id;
                      a
                        ? ((t = w.subscription.packages.map(function (e) {
                            return (
                              console.log('object', e, a), e.id == a ? K : e
                            );
                          })),
                          L(!1),
                          (O.current.dataset.id = ''))
                        : (t = (0, l.Z)(w.subscription.packages).concat([
                            (0, i.Z)((0, r.Z)({}, K), {
                              id: new Date().getTime(),
                            }),
                          ]));
                      var s = (0, r.Z)({}, w);
                      console.log(t),
                        (s.subscription.packages = t),
                        R(s),
                        A({
                          id: '',
                          name: '',
                          totalPrice: '',
                          unitPrice: '',
                          installments: '',
                          description: '',
                        }),
                        y.current.click();
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
                            ref: y,
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
                                value: K.name,
                                onChange: o,
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
                                value: K.totalPrice,
                                onChange: o,
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
                                value: K.unitPrice,
                                onChange: o,
                              }),
                            ],
                          }),
                          (0, c.jsxs)('div', {
                            className: 'mb-3',
                            children: [
                              (0, c.jsx)('label', {
                                htmlFor: 'unitPrice',
                                className: 'form-label',
                                children: 'Type',
                              }),
                              (0, c.jsxs)('select', {
                                required: !0,
                                className: 'form-control',
                                id: 'type',
                                name: 'type',
                                value: K.type,
                                onChange: o,
                                children: [
                                  (0, c.jsx)('option', {
                                    value: '',
                                    disabled: !0,
                                    children: '--Select--',
                                  }),
                                  (0, c.jsx)('option', {
                                    value: 'Daily',
                                    children: 'Daily',
                                  }),
                                  (0, c.jsx)('option', {
                                    value: 'Monthly',
                                    children: 'Monthly',
                                  }),
                                  (0, c.jsx)('option', {
                                    value: 'Yearly',
                                    children: 'Yearly',
                                  }),
                                ],
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
                                value: K.installments,
                                onChange: o,
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
                                value: K.description,
                                onChange: o,
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
                          children: E ? 'Update' : 'Create',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [4617, 2554, 623, 9774, 2888, 179], function () {
      return (t = 8255), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
