(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9084],
  {
    7042: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/overview',
        function () {
          return n(8148);
        },
      ]);
    },
    1611: function (e, s, n) {
      'use strict';
      n.r(s);
      var r = n(5893),
        c = n(9008),
        l = n.n(c),
        i = (n(7294), n(9473));
      s.default = function () {
        var e = (0, i.v9)(function (e) {
            return e.user;
          }).user,
          s = e.firstName,
          n = e.lastName,
          c = e.username,
          t = e.email,
          a = e.phone,
          d = e.avatar,
          h = ''.concat(s, '  ').concat(n);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l(), {
              children: (0, r.jsx)('title', {
                children: 'Dashboard | Techanalyzen',
              }),
            }),
            (0, r.jsx)('div', {
              className: 'dashboardContent',
              children: (0, r.jsxs)('div', {
                className: 'overview-container',
                children: [
                  (0, r.jsxs)('h1', {
                    className: 'text-center welcome',
                    children: [
                      'Hello ',
                      (0, r.jsx)('span', { className: 'name', children: h }),
                      ', Welcome to dashboard!',
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'overview-content',
                    children: [
                      (0, r.jsxs)('div', {
                        className: 'user-profile',
                        children: [
                          (0, r.jsx)('div', {
                            className: 'profile-image',
                            children: (0, r.jsx)('img', {
                              src: d
                                ? 'https://techanalyzen.libertysailingschool.net/files/thumb/profile/'.concat(
                                    d
                                  )
                                : '/logo/profile-img.svg',
                              alt: 'user',
                            }),
                          }),
                          (0, r.jsxs)('div', {
                            className: 'profile-info',
                            children: [
                              (0, r.jsxs)('p', {
                                children: [
                                  (0, r.jsx)('span', { children: 'Username:' }),
                                  ' ',
                                  c,
                                ],
                              }),
                              (0, r.jsxs)('p', {
                                children: [
                                  (0, r.jsx)('span', {
                                    children: 'Full name:',
                                  }),
                                  ' ',
                                  h,
                                ],
                              }),
                              (0, r.jsxs)('p', {
                                children: [
                                  (0, r.jsx)('span', {
                                    children: 'Email Address:',
                                  }),
                                  ' ',
                                  t,
                                ],
                              }),
                              (0, r.jsxs)('p', {
                                children: [
                                  (0, r.jsx)('span', { children: 'Phone:' }),
                                  ' ',
                                  a,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)('hr', {}),
                      (0, r.jsxs)('div', {
                        className: 'device-activity',
                        children: [
                          (0, r.jsx)('h2', { children: 'Device Activity' }),
                          (0, r.jsxs)('table', {
                            className:
                              'table table-striped table-sm table-responsive',
                            children: [
                              (0, r.jsx)('thead', {
                                className: 'table-head',
                                children: (0, r.jsxs)('tr', {
                                  children: [
                                    (0, r.jsx)('th', {
                                      scope: 'col',
                                      children: 'Serial',
                                    }),
                                    (0, r.jsx)('th', {
                                      scope: 'col',
                                      children: 'Platform',
                                    }),
                                    (0, r.jsx)('th', {
                                      scope: 'col',
                                      children: 'Date',
                                    }),
                                    (0, r.jsx)('th', {
                                      scope: 'col',
                                      children: 'Action',
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)('tbody', {
                                children: [
                                  (0, r.jsxs)('tr', {
                                    children: [
                                      (0, r.jsx)('th', {
                                        scope: 'row',
                                        children: '1',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: (0, r.jsx)('button', {
                                          className: 'btn btn-small btn-danger',
                                          children: 'Remove',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)('tr', {
                                    children: [
                                      (0, r.jsx)('th', {
                                        scope: 'row',
                                        children: '2',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: (0, r.jsx)('button', {
                                          className: 'btn btn-small btn-danger',
                                          children: 'Remove',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)('tr', {
                                    children: [
                                      (0, r.jsx)('th', {
                                        scope: 'row',
                                        children: '3',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, r.jsx)('td', {
                                        children: (0, r.jsx)('button', {
                                          className: 'btn btn-small btn-danger',
                                          children: 'Remove',
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    8148: function (e, s, n) {
      'use strict';
      n.r(s);
      var r = n(5893),
        c = (n(7294), n(1611));
      s.default = function () {
        return (0, r.jsx)(r.Fragment, { children: (0, r.jsx)(c.default, {}) });
      };
    },
    9008: function (e, s, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (s = 7042), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
