(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1738],
  {
    6222: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/categories/add',
        function () {
          return t(8937);
        },
      ]);
    },
    8937: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(2670),
        s = t(6042),
        l = t(5893),
        i = t(9008),
        r = t.n(i),
        o = t(1163),
        c = t(7294),
        m = t(1649);
      n.default = function () {
        var e = (0, o.useRouter)(),
          n = (0, c.useRef)(),
          t = (0, c.useState)(!1),
          i = t[0],
          u = t[1],
          d = (0, c.useState)({
            title: '',
            description: '',
            slug: '',
            thumbnail: null,
          }),
          h = d[0],
          f = d[1],
          b = function (e) {
            var n = (0, s.Z)({}, h);
            'file' === e.target.type
              ? (n[e.target.name] = e.target.files[0])
              : 'slug' === e.target.name
              ? (n[e.target.name] = e.target.value.toLowerCase().trim())
              : (n[e.target.name] = e.target.value),
              f(n);
          };
        (0, c.useEffect)(
          function () {
            if (h.thumbnail && (0, a.Z)(h.thumbnail, File)) {
              var e = new FileReader();
              (e.onload = function () {
                n.current && (n.current.src = e.result);
              }),
                e.readAsDataURL(h.thumbnail);
            }
          },
          [h]
        );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r(), {
              children: (0, l.jsx)('title', {
                children: 'Add Category | Techanalyzen',
              }),
            }),
            (0, l.jsxs)('div', {
              className: 'addCategoryContainer dashboardContent container my-4',
              children: [
                (0, l.jsx)('h1', {
                  className: 'mb-3 mx-5',
                  children: 'Add a Category ',
                }),
                (0, l.jsxs)('form', {
                  className: 'form form-container mx-5 my-4',
                  onSubmit: function (n) {
                    n.preventDefault();
                    var t = new FormData();
                    t.append('title', h.title),
                      t.append('description', h.description),
                      t.append('thumbnail', h.thumbnail),
                      t.append('slug', h.slug),
                      h.thumbnail &&
                      (0, a.Z)(h.thumbnail, File) &&
                      h.description &&
                      h.slug &&
                      h.title
                        ? (u(!0),
                          fetch('/api/admin/v1/create-category', {
                            method: 'POST',
                            body: t,
                          })
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (n) {
                              console.log(n),
                                (null === n || void 0 === n ? void 0 : n._id) &&
                                  e.push('/dashboard/categories');
                            })
                            .catch(function (e) {
                              console.log(e);
                            })
                            .finally(function () {
                              return u(!1);
                            }))
                        : console.log('something went wrong');
                  },
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, l.jsx)('label', {
                          htmlFor: 'title',
                          className: 'form-label',
                          children: 'Category Title',
                        }),
                        (0, l.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'title',
                          name: 'title',
                          value: h.title,
                          onChange: b,
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, l.jsx)('label', {
                          htmlFor: 'title',
                          className: 'form-label',
                          children: 'Category Slug',
                        }),
                        (0, l.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'slug',
                          name: 'slug',
                          value: h.slug,
                          onChange: b,
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, l.jsx)('label', {
                          htmlFor: 'description',
                          className: 'form-label',
                          children: 'Description',
                        }),
                        (0, l.jsx)('textarea', {
                          required: !0,
                          className: 'form-control',
                          id: 'description',
                          rows: '3',
                          cols: '50',
                          name: 'description',
                          value: h.description,
                          onChange: b,
                        }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, l.jsx)('label', {
                          htmlFor: 'thumbnail',
                          className: 'form-label',
                          children: (0, l.jsxs)('div', {
                            className: 'img_thumb',
                            children: [
                              (0, l.jsx)('p', { children: 'Thumbnail' }),
                              null === h.thumbnail &&
                                (0, l.jsxs)('div', {
                                  className: 'preview',
                                  children: [
                                    (0, l.jsx)(m.lnH, {}),
                                    (0, l.jsx)('span', {
                                      children: 'No file chosen, yet!',
                                    }),
                                  ],
                                }),
                              null !== h.thumbnail &&
                                (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)('div', {
                                      className: 'imgPreview',
                                      children: (0, l.jsx)('img', { ref: n }),
                                    }),
                                    (0, l.jsx)('span', {
                                      className: 'btn btn-primary',
                                      id: 'change_image',
                                      children: 'Change Image',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('input', {
                          hidden: !0,
                          required: !0,
                          type: 'file',
                          className: 'form-control',
                          id: 'thumbnail',
                          name: 'thumbnail',
                          onChange: b,
                          accept: 'image/*',
                        }),
                      ],
                    }),
                    (0, l.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-success form-control mt-3',
                      children: i
                        ? (0, l.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : 'Create Category',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    9008: function (e, n, t) {
      e.exports = t(5443);
    },
    2670: function (e, n, t) {
      'use strict';
      function a(e, n) {
        return null != n &&
          'undefined' !== typeof Symbol &&
          n[Symbol.hasInstance]
          ? !!n[Symbol.hasInstance](e)
          : e instanceof n;
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (n = 6222), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
