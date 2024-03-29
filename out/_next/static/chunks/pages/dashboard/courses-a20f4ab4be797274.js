(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1877],
  {
    2236: function (s, e, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/courses',
        function () {
          return c(5991);
        },
      ]);
    },
    5991: function (s, e, c) {
      'use strict';
      c.r(e);
      var n = c(5893),
        r = c(9008),
        a = c.n(r),
        i = c(1664),
        t = c.n(i),
        d = c(7294),
        o = c(7474);
      e.default = function () {
        var s = (0, d.useState)([]),
          e = s[0],
          c = s[1];
        return (
          (0, d.useEffect)(function () {
            o.Z.get('/v1/courses')
              .then(function (s) {
                var e = s.data;
                c(e);
              })
              .catch(function (s) {
                console.log(s);
              });
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(a(), {
                children: (0, n.jsx)('title', {
                  children: 'My Courses | Techanalyzen',
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'myCourses-container dashboardContent m-5',
                children: [
                  (0, n.jsx)('h2', {
                    className: 'pb-4 ',
                    children:
                      '\u0995\u09cb\u09b0\u09cd\u09b8 \u09b8\u09ae\u09c2\u09b9',
                  }),
                  (0, n.jsx)('hr', {}),
                  (0, n.jsx)('div', {
                    className: 'myCourses-inner-container p-5',
                    children: (0, n.jsx)('div', {
                      className: 'card-container',
                      children: e.map(function (s) {
                        var e = s.title,
                          c = s.description,
                          r = s.thumbnail,
                          a = s._id;
                        return (0,
                        n.jsxs)('div', { className: 'card course-card', children: [(0, n.jsx)('div', { className: 'card-img', children: (0, n.jsx)('img', { src: 'https://techanalyzen.libertysailingschool.net/files/thumb/course/'.concat(r), className: 'card-img-top p-0', alt: '' }) }), (0, n.jsxs)('div', { className: 'card-body p-4', children: [(0, n.jsx)('h5', { className: 'card-title', children: e }), (0, n.jsx)('p', { className: 'card-description', children: (0, n.jsx)('div', { dangerouslySetInnerHTML: { __html: c } }) }), (0, n.jsxs)('div', { className: 'course-btns ', children: [(0, n.jsx)(t(), { href: '/dashboard/courses/view/'.concat(a), children: (0, n.jsx)('a', { className: 'btn btn-success', children: 'View course' }) }), (0, n.jsx)(t(), { href: '/dashboard/courses/edit/'.concat(a), children: (0, n.jsx)('a', { className: 'btn btn-secondary', children: 'Edit course' }) })] })] })] });
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    9008: function (s, e, c) {
      s.exports = c(5443);
    },
  },
  function (s) {
    s.O(0, [9774, 2888, 179], function () {
      return (e = 2236), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
