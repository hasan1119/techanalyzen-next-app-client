(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8026],
  {
    8310: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard',
        function () {
          return n(1611);
        },
      ]);
    },
    1611: function (e, s, n) {
      'use strict';
      n.r(s);
      var c = n(5893),
        l = n(9008),
        r = n.n(l),
        i = (n(7294), n(9473));
      s.default = function () {
        var e = (0, i.v9)(function (e) {
            return e.user;
          }).user,
          s = e.firstName,
          n = e.lastName,
          l = e.username,
          a = e.email,
          t = e.phone,
          d = e.avatar,
          h = ''.concat(s, '  ').concat(n);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(r(), {
              children: (0, c.jsx)('title', {
                children: 'Dashboard | Techanalyzen',
              }),
            }),
            (0, c.jsx)('div', {
              className: 'dashboardContent',
              children: (0, c.jsxs)('div', {
                className: 'overview-container',
                children: [
                  (0, c.jsxs)('h1', {
                    className: 'text-center welcome',
                    children: [
                      'Hello ',
                      (0, c.jsx)('span', { className: 'name', children: h }),
                      ', Welcome to dashboard!',
                    ],
                  }),
                  (0, c.jsxs)('div', {
                    className: 'overview-content',
                    children: [
                      (0, c.jsxs)('div', {
                        className: 'user-profile',
                        children: [
                          (0, c.jsx)('div', {
                            className: 'profile-image',
                            children: (0, c.jsx)('img', {
                              src: d
                                ? 'https://techanalyzen.libertysailingschool.net/files/thumb/profile/'.concat(
                                    d
                                  )
                                : '/logo/profile-img.svg',
                              alt: 'user',
                            }),
                          }),
                          (0, c.jsxs)('div', {
                            className: 'profile-info',
                            children: [
                              (0, c.jsxs)('p', {
                                children: [
                                  (0, c.jsx)('span', { children: 'Username:' }),
                                  ' ',
                                  l,
                                ],
                              }),
                              (0, c.jsxs)('p', {
                                children: [
                                  (0, c.jsx)('span', {
                                    children: 'Full name:',
                                  }),
                                  ' ',
                                  h,
                                ],
                              }),
                              (0, c.jsxs)('p', {
                                children: [
                                  (0, c.jsx)('span', {
                                    children: 'Email Address:',
                                  }),
                                  ' ',
                                  a,
                                ],
                              }),
                              (0, c.jsxs)('p', {
                                children: [
                                  (0, c.jsx)('span', { children: 'Phone:' }),
                                  ' ',
                                  t,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsx)('hr', {}),
                      (0, c.jsxs)('div', {
                        className: 'device-activity',
                        children: [
                          (0, c.jsx)('h2', { children: 'Device Activity' }),
                          (0, c.jsxs)('table', {
                            className:
                              'table table-striped table-sm table-responsive',
                            children: [
                              (0, c.jsx)('thead', {
                                className: 'table-head',
                                children: (0, c.jsxs)('tr', {
                                  children: [
                                    (0, c.jsx)('th', {
                                      scope: 'col',
                                      children: 'Serial',
                                    }),
                                    (0, c.jsx)('th', {
                                      scope: 'col',
                                      children: 'Platform',
                                    }),
                                    (0, c.jsx)('th', {
                                      scope: 'col',
                                      children: 'Date',
                                    }),
                                    (0, c.jsx)('th', {
                                      scope: 'col',
                                      children: 'Action',
                                    }),
                                  ],
                                }),
                              }),
                              (0, c.jsxs)('tbody', {
                                children: [
                                  (0, c.jsxs)('tr', {
                                    children: [
                                      (0, c.jsx)('th', {
                                        scope: 'row',
                                        children: '1',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: (0, c.jsx)('button', {
                                          className: 'btn btn-small btn-danger',
                                          children: 'Remove',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)('tr', {
                                    children: [
                                      (0, c.jsx)('th', {
                                        scope: 'row',
                                        children: '2',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: (0, c.jsx)('button', {
                                          className: 'btn btn-small btn-danger',
                                          children: 'Remove',
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, c.jsxs)('tr', {
                                    children: [
                                      (0, c.jsx)('th', {
                                        scope: 'row',
                                        children: '3',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: 'Windows 10',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: '25-04-2023 05:59 PM',
                                      }),
                                      (0, c.jsx)('td', {
                                        children: (0, c.jsx)('button', {
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
    9008: function (e, s, n) {
      e.exports = n(5443);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (s = 8310), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
