(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4838],
  {
    2896: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/sub-categories/add',
        function () {
          return a(2194);
        },
      ]);
    },
    2194: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(2670),
        l = a(6042),
        s = a(5893),
        r = a(9008),
        i = a.n(r),
        c = a(1163),
        o = a(7294),
        u = a(1649),
        m = a(7474);
      t.default = function () {
        var e = (0, o.useState)([]),
          t = e[0],
          a = e[1],
          r = (0, c.useRouter)(),
          d = (0, o.useRef)(),
          h = (0, o.useState)(!1),
          b = h[0],
          f = h[1],
          g = (0, o.useState)({
            title: '',
            description: '',
            slug: '',
            thumbnail: null,
            category: '',
          }),
          p = g[0],
          x = g[1];
        (0, o.useEffect)(function () {
          m.Z.get('/category/v1/categories')
            .then(function (e) {
              var t = e.data;
              a(t);
            })
            .catch(function (e) {
              console.log(e);
            });
        }, []);
        var j = function (e) {
          var t = (0, l.Z)({}, p);
          'file' === e.target.type
            ? (t[e.target.name] = e.target.files[0])
            : 'slug' === e.target.name
            ? (t[e.target.name] = e.target.value.toLowerCase().trim())
            : (t[e.target.name] = e.target.value),
            x(t);
        };
        (0, o.useEffect)(
          function () {
            if (p.thumbnail && (0, n.Z)(p.thumbnail, File)) {
              var e = new FileReader();
              (e.onload = function () {
                d.current && (d.current.src = e.result);
              }),
                e.readAsDataURL(p.thumbnail);
            }
          },
          [p]
        );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i(), {
              children: (0, s.jsx)('title', {
                children: 'Add Sub-Category | Techanalyzen',
              }),
            }),
            (0, s.jsxs)('div', {
              className: 'addCategoryContainer dashboardContent container my-4',
              children: [
                (0, s.jsx)('h1', {
                  className: 'mb-3 mx-5',
                  children: 'Add a Sub Category ',
                }),
                (0, s.jsx)('hr', {}),
                (0, s.jsxs)('form', {
                  className: 'form form-container mx-5 my-4',
                  onSubmit: function (e) {
                    e.preventDefault();
                    var t = new FormData();
                    t.append('title', p.title),
                      t.append('description', p.description),
                      t.append('thumbnail', p.thumbnail),
                      t.append('slug', p.slug),
                      t.append('category', p.category),
                      p.thumbnail &&
                      (0, n.Z)(p.thumbnail, File) &&
                      p.description &&
                      p.slug &&
                      p.title
                        ? (f(!0),
                          fetch(
                            'https://techanalyzen.libertysailingschool.net/api/admin/v1/create-sub-category',
                            { method: 'POST', body: t }
                          )
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              (null === e || void 0 === e ? void 0 : e._id) &&
                                r.push('/dashboard/sub-categories');
                            })
                            .catch(function (e) {
                              console.log(e);
                            })
                            .finally(function () {
                              return f(!1);
                            }))
                        : console.log('something went wrong');
                  },
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'title',
                          className: 'form-label',
                          children: 'Sub Category Title',
                        }),
                        (0, s.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'title',
                          name: 'title',
                          value: p.title,
                          onChange: j,
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'title',
                          className: 'form-label',
                          children: 'Sub Category Slug',
                        }),
                        (0, s.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'slug',
                          name: 'slug',
                          value: p.slug,
                          onChange: j,
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'category',
                          className: 'form-label',
                          children: 'Category',
                        }),
                        (0, s.jsxs)('select', {
                          defaultValue: p.category,
                          className: 'form-select',
                          'aria-label': 'Default select example',
                          name: 'category',
                          onChange: j,
                          children: [
                            (0, s.jsx)('option', {
                              value: '',
                              disabled: !0,
                              children: 'Select a category',
                            }),
                            t.map(function (e) {
                              return (0,
                              s.jsx)('option', { value: e._id, children: e.title }, e._id);
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'description',
                          className: 'form-label',
                          children: 'Description',
                        }),
                        (0, s.jsx)('textarea', {
                          required: !0,
                          className: 'form-control',
                          id: 'description',
                          rows: '3',
                          cols: '50',
                          name: 'description',
                          value: p.description,
                          onChange: j,
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'thumbnail',
                          className: 'form-label',
                          children: (0, s.jsxs)('div', {
                            className: 'img_thumb',
                            children: [
                              (0, s.jsx)('p', { children: 'Thumbnail' }),
                              null === p.thumbnail &&
                                (0, s.jsxs)('div', {
                                  className: 'preview',
                                  children: [
                                    (0, s.jsx)(u.lnH, {}),
                                    (0, s.jsx)('span', {
                                      children: 'No file chosen, yet!',
                                    }),
                                  ],
                                }),
                              null !== p.thumbnail &&
                                (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)('div', {
                                      className: 'imgPreview',
                                      children: (0, s.jsx)('img', { ref: d }),
                                    }),
                                    (0, s.jsx)('span', {
                                      className: 'btn btn-primary',
                                      id: 'change_image',
                                      children: 'Change Image',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, s.jsx)('input', {
                          hidden: !0,
                          required: !0,
                          type: 'file',
                          className: 'form-control',
                          id: 'thumbnail',
                          name: 'thumbnail',
                          onChange: j,
                          accept: 'image/*',
                        }),
                      ],
                    }),
                    (0, s.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-success form-control mt-3',
                      children: b
                        ? (0, s.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : 'Create Sub-Category',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    9008: function (e, t, a) {
      e.exports = a(5443);
    },
    2670: function (e, t, a) {
      'use strict';
      function n(e, t) {
        return null != t &&
          'undefined' !== typeof Symbol &&
          t[Symbol.hasInstance]
          ? !!t[Symbol.hasInstance](e)
          : e instanceof t;
      }
      a.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (t = 2896), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
