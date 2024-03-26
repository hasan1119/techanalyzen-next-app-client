(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [429],
  {
    9339: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/categories/[id]',
        function () {
          return t(1279);
        },
      ]);
    },
    1279: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(2670),
        i = t(6042),
        l = t(9396),
        s = t(5893),
        r = t(9008),
        o = t.n(r),
        c = t(1163),
        u = t(7294),
        d = t(1649),
        m = t(7474);
      n.default = function () {
        var e = (0, c.useRouter)(),
          n = (0, u.useRef)(),
          t = (0, u.useState)(!1),
          r = t[0],
          h = t[1],
          g = e.query.id,
          f = (0, u.useState)({
            title: '',
            description: '',
            slug: '',
            thumbnail: null,
            prevImg: '',
          }),
          p = f[0],
          b = f[1],
          v = function (e) {
            var n = (0, i.Z)({}, p);
            'file' === e.target.type
              ? (n[e.target.name] = e.target.files[0])
              : 'slug' === e.target.name
              ? (n[e.target.name] = e.target.value.toLowerCase().trim())
              : (n[e.target.name] = e.target.value),
              b(n);
          };
        (0, u.useEffect)(
          function () {
            if (p.thumbnail && (0, a.Z)(p.thumbnail, File)) {
              var e = new FileReader();
              (e.onload = function () {
                n.current && (n.current.src = e.result);
              }),
                e.readAsDataURL(p.thumbnail);
            } else
              'string' === typeof p.thumbnail &&
                n.current &&
                (n.current.src =
                  window.location.origin +
                  '/files/thumb/category/' +
                  p.thumbnail);
          },
          [p]
        ),
          (0, u.useEffect)(
            function () {
              g &&
                (h(!0),
                m.Z.get('/category/v1/'.concat(g))
                  .then(function (e) {
                    var n = e.data;
                    b((0, l.Z)((0, i.Z)({}, n), { prevImg: n.thumbnail }));
                  })
                  .catch(function (n) {
                    var t, a;
                    console.log(n),
                      alert(
                        null === n ||
                          void 0 === n ||
                          null === (t = n.response) ||
                          void 0 === t ||
                          null === (a = t.data) ||
                          void 0 === a
                          ? void 0
                          : a.msg
                      ),
                      e.push('/dashboard/categories');
                  })
                  .finally(function () {
                    return h(!1);
                  }));
            },
            [g]
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o(), {
              children: (0, s.jsx)('title', {
                children: 'Edit Category | Techanalyzen',
              }),
            }),
            (0, s.jsxs)('div', {
              className: 'addCategoryContainer dashboardContent container my-4',
              children: [
                (0, s.jsx)('h1', {
                  className: 'mb-3 mx-5',
                  children: 'Update Category ',
                }),
                (0, s.jsxs)('form', {
                  className: 'form form-container mx-5 my-4',
                  onSubmit: function (n) {
                    n.preventDefault();
                    var t = new FormData();
                    t.append('_id', p._id),
                      t.append('title', p.title),
                      t.append('description', p.description),
                      t.append('thumbnail', p.thumbnail),
                      t.append('prevImg', p.prevImg),
                      t.append('slug', p.slug),
                      p._id &&
                      p.thumbnail &&
                      ((0, a.Z)(p.thumbnail, File) ||
                        'string' === typeof p.thumbnail) &&
                      p.description &&
                      p.slug &&
                      p.title
                        ? (h(!0),
                          fetch(
                            'https://techanalyzen.libertysailingschool.net/api/admin/v1/update-category',
                            { method: 'POST', body: t }
                          )
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
                              return h(!1);
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
                          children: 'Category Title',
                        }),
                        (0, s.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'title',
                          name: 'title',
                          value: p.title,
                          onChange: v,
                        }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'mb-3',
                      children: [
                        (0, s.jsx)('label', {
                          htmlFor: 'title',
                          className: 'form-label',
                          children: 'Category Slug',
                        }),
                        (0, s.jsx)('input', {
                          required: !0,
                          type: 'text',
                          className: 'form-control',
                          id: 'slug',
                          name: 'slug',
                          value: p.slug,
                          onChange: v,
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
                          onChange: v,
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
                                    (0, s.jsx)(d.lnH, {}),
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
                                      children: (0, s.jsx)('img', { ref: n }),
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
                          type: 'file',
                          id: 'thumbnail',
                          name: 'thumbnail',
                          onChange: v,
                          accept: 'image/*',
                        }),
                      ],
                    }),
                    (0, s.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-success form-control mt-3',
                      children: r
                        ? (0, s.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : 'Update Category',
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
      return (n = 9339), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
