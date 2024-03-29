(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [211],
  {
    3289: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/sub-categories',
        function () {
          return a(1365);
        },
      ]);
    },
    1365: function (e, s, a) {
      'use strict';
      a.r(s);
      var c = a(5893),
        n = a(9008),
        t = a.n(n),
        r = a(1664),
        i = a.n(r),
        o = a(7294),
        l = a(2920),
        d = a(7474);
      s.default = function () {
        var e = (0, o.useState)([]),
          s = e[0],
          a = e[1],
          n = (0, o.useState)(!1),
          r = n[0],
          u = n[1];
        return (
          (0, o.useEffect)(function () {
            d.Z.get('/subCategory/v1/subCategories')
              .then(function (e) {
                var s = e.data;
                console.log(s), a(s);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []),
          (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(t(), {
                children: (0, c.jsx)('title', {
                  children: 'Sub categories | Techanalyzen',
                }),
              }),
              (0, c.jsxs)('div', {
                className: 'sub-categories-container m-5',
                children: [
                  (0, c.jsx)('h1', { children: 'Sub categories ' }),
                  (0, c.jsx)('hr', {}),
                  s.map(function (e) {
                    var n = e._id,
                      t = e.thumbnail,
                      o = e.category,
                      h = e.title,
                      b = e.courses,
                      g = e.description,
                      m = e.slug;
                    return (0, c.jsxs)(
                      'div',
                      {
                        className: 'sub-categories-inner-container p-5',
                        children: [
                          (0, c.jsx)('div', {
                            className: 'sub-category-img',
                            children: (0, c.jsx)('img', {
                              src: 'https://techanalyzen.libertysailingschool.net/files/thumb/subCategory/'.concat(
                                t
                              ),
                              className: 'card-img-top p-0',
                              alt: '',
                            }),
                          }),
                          (0, c.jsxs)('div', {
                            className: 'sub-categories-content',
                            children: [
                              (0, c.jsx)('h5', {
                                className: 'sub-categories-title',
                                children: h,
                              }),
                              (0, c.jsxs)('h5', {
                                className: 'sub-categories-slug',
                                children: ['/', m],
                              }),
                              (0, c.jsx)('p', {
                                className: 'sub-categories-description',
                                children: g,
                              }),
                              (0, c.jsx)('div', {
                                className: 'accordion',
                                id: 'accordionExample',
                                children: (0, c.jsxs)('div', {
                                  className: 'accordion-item',
                                  children: [
                                    (0, c.jsx)('h2', {
                                      className: 'accordion-header',
                                      children: (0, c.jsxs)('button', {
                                        className: 'accordion-button',
                                        type: 'button',
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#collapseOne',
                                        children: [
                                          (0, c.jsx)('img', {
                                            src: '/assets/images/banner/banner2.jpg',
                                            className: 'me-3',
                                            alt: '',
                                          }),
                                          'Course title',
                                        ],
                                      }),
                                    }),
                                    (0, c.jsx)('div', {
                                      id: 'collapseOne',
                                      className: 'accordion-collapse collapse',
                                      'data-bs-parent': '#accordionExample',
                                      children: (0, c.jsxs)('div', {
                                        className: 'accordion-body',
                                        children: [
                                          (0, c.jsx)('p', {
                                            className: 'sub-description',
                                            children: 'Course description',
                                          }),
                                          (0, c.jsxs)('div', {
                                            className: 'course-btns',
                                            children: [
                                              (0, c.jsx)(i(), {
                                                href: '/category/'
                                                  .concat(o.slug, '/')
                                                  .concat(m),
                                                children: (0, c.jsx)('a', {
                                                  className: 'btn btn-success',
                                                  children: 'View',
                                                }),
                                              }),
                                              (0, c.jsx)(i(), {
                                                href: '/dashboard/categories/category._id',
                                                children: (0, c.jsx)('a', {
                                                  className: 'btn btn-warning',
                                                  children: 'Edit',
                                                }),
                                              }),
                                              (0, c.jsx)(i(), {
                                                href: '/dashboard/categories/category._id',
                                                children: (0, c.jsx)('a', {
                                                  className: 'btn btn-danger',
                                                  children: 'Delete',
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, c.jsxs)('div', {
                                className: 'sub-categories-btns',
                                children: [
                                  (0, c.jsx)(i(), {
                                    href: '/categories/'
                                      .concat(o.slug, '/')
                                      .concat(m),
                                    children: (0, c.jsx)('a', {
                                      className: 'btn btn-success',
                                      children: 'View Sub Category',
                                    }),
                                  }),
                                  (0, c.jsx)(i(), {
                                    href: '/dashboard/sub-categories/'.concat(
                                      n
                                    ),
                                    children: (0, c.jsx)('a', {
                                      className: 'btn btn-secondary',
                                      children: 'Edit Sub Category',
                                    }),
                                  }),
                                  b && b.length
                                    ? ''
                                    : (0, c.jsx)('button', {
                                        className:
                                          'btn btn-danger deleteCategoryBtn',
                                        onClick: function (e) {
                                          return (
                                            (c = n),
                                            u(!0),
                                            void d.Z.delete(
                                              '/admin/v1/subCategory/'.concat(c)
                                            )
                                              .then(function (e) {
                                                var c = e.data,
                                                  n = s.filter(function (e) {
                                                    return e.id !== c.id;
                                                  });
                                                a(n),
                                                  (0, l.Am)(
                                                    'Successfully deleted!'
                                                  );
                                              })
                                              .catch(function (e) {
                                                var s = e.response,
                                                  a =
                                                    null === s || void 0 === s
                                                      ? void 0
                                                      : s.data;
                                                console.log(a),
                                                  (0, l.Am)(
                                                    (null === a || void 0 === a
                                                      ? void 0
                                                      : a.msg) ||
                                                      'Something went wrong!'
                                                  );
                                              })
                                              .finally(function () {
                                                u(!1);
                                              })
                                          );
                                          var c;
                                        },
                                        children: r
                                          ? (0, c.jsx)('div', {
                                              className:
                                                'spinner-border spinner-border-md',
                                              role: 'status',
                                            })
                                          : 'Delete Sub Category',
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      n
                    );
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    9008: function (e, s, a) {
      e.exports = a(5443);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (s = 3289), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
