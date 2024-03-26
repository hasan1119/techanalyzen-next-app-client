(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [436],
  {
    1226: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/categories',
        function () {
          return a(6055);
        },
      ]);
    },
    6055: function (e, s, a) {
      'use strict';
      a.r(s);
      var n = a(5893),
        c = a(9008),
        t = a.n(c),
        i = a(1664),
        r = a.n(i),
        o = a(7294),
        l = a(2920),
        d = a(7474);
      s.default = function () {
        var e = (0, o.useState)([]),
          s = e[0],
          a = e[1],
          c = (0, o.useState)(!1),
          i = c[0],
          h = c[1];
        return (
          (0, o.useEffect)(function () {
            d.Z.get('/category/v1/categories')
              .then(function (e) {
                var s = e.data;
                a(s);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(t(), {
                children: (0, n.jsx)('title', {
                  children: 'Categories | Techanalyzen',
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'categories-container m-5',
                children: [
                  (0, n.jsx)('h1', { children: 'Categories ' }),
                  (0, n.jsx)('hr', {}),
                  s.map(function (e) {
                    var c;
                    return (0, n.jsxs)(
                      'div',
                      {
                        className: 'categories-inner-container p-5',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'category-img',
                            children: (0, n.jsx)('img', {
                              src: 'https://techanalyzen.libertysailingschool.net/files/thumb/category/'.concat(
                                e.thumbnail
                              ),
                              className: 'card-img-top p-0',
                              alt: '',
                            }),
                          }),
                          (0, n.jsxs)('div', {
                            className: 'categories-content',
                            children: [
                              (0, n.jsx)('h5', {
                                className: 'categories-title',
                                children: e.title,
                              }),
                              (0, n.jsxs)('h5', {
                                className: 'categories-slug',
                                children: ['/', e.slug],
                              }),
                              (0, n.jsx)('p', {
                                className: 'categories-description',
                                children: e.description,
                              }),
                              (0, n.jsx)('div', {
                                className: 'accordion',
                                id: 'accordionExample',
                                children:
                                  null === e ||
                                  void 0 === e ||
                                  null === (c = e.subCategories) ||
                                  void 0 === c
                                    ? void 0
                                    : c.map(function (e) {
                                        return (0,
                                        n.jsxs)('div', { className: 'accordion-item', children: [(0, n.jsx)('h2', { className: 'accordion-header', children: (0, n.jsxs)('button', { className: 'accordion-button', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#collapseOne', children: [(0, n.jsx)('img', { src: 'https://techanalyzen.libertysailingschool.net/files/thumb/subCategory/'.concat(e.thumbnail), className: 'me-3', alt: '' }), e.title] }) }), (0, n.jsx)('div', { id: 'collapseOne', className: 'accordion-collapse collapse', 'data-bs-parent': '#accordionExample', children: (0, n.jsxs)('div', { className: 'accordion-body', children: [(0, n.jsx)('p', { className: 'sub-description', children: e.description }), (0, n.jsxs)('div', { className: 'sub-categories-btns', children: [(0, n.jsx)(r(), { href: '', children: (0, n.jsx)('a', { className: 'btn btn-success', children: 'View' }) }), (0, n.jsx)(r(), { href: '/dashboard/sub-categories/'.concat(e._id), children: (0, n.jsx)('a', { className: 'btn btn-warning', children: 'Edit' }) }), (0, n.jsx)(r(), { href: '/dashboard/categories/category._id', children: (0, n.jsx)('a', { className: 'btn btn-danger', children: 'Delete' }) })] })] }) })] }, e._id);
                                      }),
                              }),
                              (0, n.jsxs)('div', {
                                className: 'categories-btns',
                                children: [
                                  (0, n.jsx)(r(), {
                                    href: '/categories/'.concat(e.slug),
                                    children: (0, n.jsx)('a', {
                                      className: 'btn btn-success',
                                      children: 'View course',
                                    }),
                                  }),
                                  (0, n.jsx)(r(), {
                                    href: '/dashboard/categories/'.concat(
                                      e._id
                                    ),
                                    children: (0, n.jsx)('a', {
                                      className: 'btn btn-secondary',
                                      children: 'Edit Category',
                                    }),
                                  }),
                                  e.subCategories && e.subCategories.length
                                    ? ''
                                    : (0, n.jsx)('button', {
                                        className:
                                          'btn btn-danger deleteCategoryBtn',
                                        onClick: function (n) {
                                          return (
                                            (c = e._id),
                                            h(!0),
                                            void d.Z.delete(
                                              '/admin/v1/category/'.concat(c)
                                            )
                                              .then(function (e) {
                                                var n = e.data,
                                                  c = s.filter(function (e) {
                                                    return e.id !== n.id;
                                                  });
                                                a(c),
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
                                                h(!1);
                                              })
                                          );
                                          var c;
                                        },
                                        children: i
                                          ? (0, n.jsx)('div', {
                                              className:
                                                'spinner-border spinner-border-md',
                                              role: 'status',
                                            })
                                          : 'Delete Category',
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e._id
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
      return (s = 1226), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
