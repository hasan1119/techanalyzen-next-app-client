(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1768],
  {
    9937: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/sub-categories/[id]',
        function () {
          return t(1701);
        },
      ]);
    },
    1701: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t(2670),
        i = t(6042),
        s = t(9396),
        l = t(5893),
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
          b = e.query.id,
          g = (0, u.useState)({
            title: '',
            description: '',
            slug: '',
            thumbnail: null,
            prevImg: '',
          }),
          f = g[0],
          p = g[1],
          v = function (e) {
            var n = (0, i.Z)({}, f);
            'file' === e.target.type
              ? (n[e.target.name] = e.target.files[0])
              : 'slug' === e.target.name
              ? (n[e.target.name] = e.target.value.toLowerCase().trim())
              : (n[e.target.name] = e.target.value),
              p(n);
          };
        (0, u.useEffect)(
          function () {
            if (f.thumbnail && (0, a.Z)(f.thumbnail, File)) {
              var e = new FileReader();
              (e.onload = function () {
                n.current && (n.current.src = e.result);
              }),
                e.readAsDataURL(f.thumbnail);
            } else
              'string' === typeof f.thumbnail &&
                n.current &&
                (n.current.src =
                  window.location.origin +
                  'https://techanalyzen.libertysailingschool.net/files/thumb/subCategory/' +
                  f.thumbnail);
          },
          [f]
        ),
          (0, u.useEffect)(
            function () {
              b &&
                (h(!0),
                m.Z.get('/sub-category/v1/'.concat(b))
                  .then(function (e) {
                    var n = e.data;
                    p((0, s.Z)((0, i.Z)({}, n), { prevImg: n.thumbnail }));
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
                      e.push('/dashboard/sub-categories');
                  })
                  .finally(function () {
                    return h(!1);
                  }));
            },
            [b]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(o(), {
              children: (0, l.jsx)('title', {
                children: 'Edit Category | Techanalyzen',
              }),
            }),
            (0, l.jsxs)('div', {
              className: 'addCategoryContainer dashboardContent container my-4',
              children: [
                (0, l.jsx)('h1', {
                  className: 'mb-3 mx-5',
                  children: 'Update Category ',
                }),
                (0, l.jsxs)('form', {
                  className: 'form form-container mx-5 my-4',
                  onSubmit: function (n) {
                    n.preventDefault();
                    var t = new FormData();
                    t.append('_id', f._id),
                      t.append('title', f.title),
                      t.append('description', f.description),
                      t.append('thumbnail', f.thumbnail),
                      t.append('slug', f.slug),
                      t.append('prevImg', f.prevImg),
                      f._id &&
                      f.thumbnail &&
                      ((0, a.Z)(f.thumbnail, File) ||
                        'string' === typeof f.thumbnail) &&
                      f.description &&
                      f.slug &&
                      f.title
                        ? (h(!0),
                          fetch(
                            'https://techanalyzen.libertysailingschool.net/api/admin/v1/update-sub-category',
                            {
                              method: 'POST',
                              body: t,
                            }
                          )
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (n) {
                              console.log(n),
                                (null === n || void 0 === n ? void 0 : n._id) &&
                                  e.push('/dashboard/sub-categories');
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
                          value: f.title,
                          onChange: v,
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
                          value: f.slug,
                          onChange: v,
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
                          value: f.description,
                          onChange: v,
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
                              null === f.thumbnail &&
                                (0, l.jsxs)('div', {
                                  className: 'preview',
                                  children: [
                                    (0, l.jsx)(d.lnH, {}),
                                    (0, l.jsx)('span', {
                                      children: 'No file chosen, yet!',
                                    }),
                                  ],
                                }),
                              null !== f.thumbnail &&
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
                          type: 'file',
                          id: 'thumbnail',
                          name: 'thumbnail',
                          onChange: v,
                          accept: 'image/*',
                        }),
                      ],
                    }),
                    (0, l.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-success form-control mt-3',
                      children: r
                        ? (0, l.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : 'Update Sub-Category',
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
      return (n = 9937), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
