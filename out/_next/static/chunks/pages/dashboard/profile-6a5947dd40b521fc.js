(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1389],
  {
    540: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard/profile',
        function () {
          return s(1555);
        },
      ]);
    },
    1555: function (e, a, s) {
      'use strict';
      s.r(a),
        s.d(a, {
          default: function () {
            return v;
          },
        });
      var l = s(5893),
        t = s(9008),
        n = s.n(t),
        r = s(7294),
        i = function () {
          return (0, l.jsx)('div', {
            children: (0, l.jsx)('div', {
              children: (0, l.jsxs)('table', {
                className: 'table table-striped mt-5',
                children: [
                  (0, l.jsx)('thead', {
                    children: (0, l.jsxs)('tr', {
                      children: [
                        (0, l.jsx)('th', { scope: 'col', children: '#' }),
                        (0, l.jsx)('th', { scope: 'col', children: 'Course' }),
                        (0, l.jsx)('th', { scope: 'col', children: 'Price' }),
                        (0, l.jsx)('th', {
                          scope: 'col',
                          children: 'Payment Status',
                        }),
                        (0, l.jsx)('th', {
                          scope: 'col',
                          children: 'Payment Method',
                        }),
                        (0, l.jsx)('th', { scope: 'col', children: 'Date' }),
                        (0, l.jsx)('th', { scope: 'col', children: 'Action' }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('tbody', {
                    children: (0, l.jsxs)('tr', {
                      children: [
                        (0, l.jsx)('th', { scope: 'row', children: '1' }),
                        (0, l.jsx)('td', {
                          children: 'Complete Web Development Course',
                        }),
                        (0, l.jsx)('td', { children: '\u09f3 4500' }),
                        (0, l.jsx)('td', { children: 'Verified' }),
                        (0, l.jsx)('td', { children: 'Manual Bkash ' }),
                        (0, l.jsx)('td', { children: '10-06-2021' }),
                        (0, l.jsx)('td', {
                          children: (0, l.jsx)('button', {
                            className: 'btn btn-success',
                            children: 'Invoice Download',
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        c = s(4924),
        o = s(6042),
        d = s(9396),
        m = s(9583),
        h = s(9473),
        x = s(2920),
        u = s(607),
        p = s(7474),
        j = function () {
          var e = function (e) {
              y(
                (0, d.Z)(
                  (0, o.Z)({}, w),
                  (0, c.Z)({}, e.target.name, e.target.value)
                )
              );
            },
            a = (0, h.I0)(),
            s = (0, h.v9)(function (e) {
              return e.user;
            }).user,
            t = (s.firstName, s.lastName, s.email, s.avatar),
            n = (0, r.useRef)(),
            i = (0, r.useState)(!0),
            j = i[0],
            f = i[1],
            b = (0, r.useState)({ firstName: '', lastName: '', avatar: null }),
            N = b[0],
            v = b[1],
            g = (0, r.useState)({ password: '', confirmPassword: '' }),
            w = g[0],
            y = g[1],
            _ = function (e) {
              if ('file' !== e.target.type)
                v(
                  (0, d.Z)(
                    (0, o.Z)({}, N),
                    (0, c.Z)({}, e.target.name, e.target.value)
                  )
                );
              else {
                var a = e.target.files;
                if (a && a[0]) {
                  var s = new FileReader();
                  (s.onload = function (e) {
                    n.current.src = e.target.result;
                  }),
                    s.readAsDataURL(a[0]),
                    v((0, d.Z)((0, o.Z)({}, N), { avatar: a[0] }));
                } else console.log('opps!');
              }
            };
          return (
            (0, r.useEffect)(
              function () {
                N.firstName !== s.firstName ||
                N.lastName !== s.lastName ||
                null !== N.avatar
                  ? f(!1)
                  : f(!0);
              },
              [N]
            ),
            (0, r.useEffect)(
              function () {
                v({
                  firstName: s.firstName,
                  lastName: s.lastName,
                  avatar: s.avatar,
                });
              },
              [s]
            ),
            (0, l.jsx)('div', {
              className: 'profile_box mt-5 py-5',
              children: (0, l.jsx)('div', {
                className: 'container',
                children: (0, l.jsxs)('div', {
                  className: 'row',
                  children: [
                    (0, l.jsx)('div', {
                      className: 'col-xl-6',
                      children: (0, l.jsxs)('div', {
                        className: 'personal_detail',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'title',
                            children:
                              '\u09aa\u09be\u09b0\u09cd\u09b8\u09cb\u09a8\u09be\u09b2 \u09a1\u09bf\u099f\u09c7\u0987\u09b2\u09b8',
                          }),
                          (0, l.jsxs)('div', {
                            className: 'form_box',
                            children: [
                              (0, l.jsx)('img', {
                                src: t
                                  ? '/files/thumb/profile/'.concat(t)
                                  : '/logo/profile-img.svg',
                                alt: 'Logo',
                                ref: n,
                                className: 'img-fluid profile_avatar',
                              }),
                              (0, l.jsxs)('form', {
                                onSubmit: function (e) {
                                  e.preventDefault();
                                  var s = new FormData();
                                  s.append('firstName', N.firstName),
                                    s.append('lastName', N.lastName),
                                    s.append('avatar', N.avatar),
                                    fetch(
                                      'https://techanalyzen.libertysailingschool.net/api/v1/user/updateInfo',
                                      { method: 'PUT', body: s }
                                    )
                                      .then(function (e) {
                                        return e.json();
                                      })
                                      .then(function (e) {
                                        a((0, u.Vx)(e));
                                        (0, x.Am)('Successfully Updated!');
                                      })
                                      .catch(function (e) {
                                        console.log(e);
                                      });
                                },
                                className: 'row g-3',
                                children: [
                                  (0, l.jsx)('div', {
                                    className: 'col-md-12 text-center',
                                    children: (0, l.jsx)('div', {
                                      className: 'upload-btn-wrapper',
                                      children: (0, l.jsx)('div', {
                                        className: 'image_btn',
                                        children: (0, l.jsx)('label', {
                                          htmlFor: 'avatar_file',
                                          style: { cursor: 'pointer' },
                                          children: (0, l.jsxs)('button', {
                                            type: 'button',
                                            style: { pointerEvents: 'none' },
                                            className: 'btn btn-primary',
                                            children: [
                                              '\u099b\u09ac\u09bf \u0986\u09aa\u09b2\u09cb\u09a1 \u0995\u09b0\u09c1\u09a8 ',
                                              (0, l.jsx)(m.kO5, {}),
                                              (0, l.jsx)('input', {
                                                id: 'avatar_file',
                                                name: 'avatar',
                                                onChange: _,
                                                type: 'file',
                                                hidden: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, l.jsxs)('div', {
                                    className: 'col-md-12',
                                    children: [
                                      (0, l.jsx)('label', {
                                        htmlFor: 'fastName',
                                        className: 'form-label',
                                        children:
                                          '\u09a8\u09be\u09ae\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a5\u09ae \u0985\u0982\u09b6',
                                      }),
                                      (0, l.jsx)('input', {
                                        type: 'text',
                                        'aria-label': 'First name',
                                        className: 'form-control',
                                        id: 'fastName',
                                        name: 'firstName',
                                        value: N.firstName,
                                        onChange: _,
                                        placeholder:
                                          '\u09a8\u09be\u09ae\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a5\u09ae \u0985\u0982\u09b6',
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)('div', {
                                    className: 'col-md-12',
                                    children: [
                                      (0, l.jsx)('label', {
                                        htmlFor: 'lastName',
                                        className: 'form-label',
                                        children:
                                          '\u09a8\u09be\u09ae\u09c7\u09b0 \u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u0985\u0982\u09b6',
                                      }),
                                      (0, l.jsx)('input', {
                                        type: 'text',
                                        'aria-label': 'First name',
                                        className: 'form-control',
                                        id: 'lastName',
                                        name: 'lastName',
                                        value: N.lastName,
                                        onChange: _,
                                        placeholder:
                                          '\u09a8\u09be\u09ae\u09c7\u09b0 \u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u0985\u0982\u09b6',
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'col-md-12',
                                    children: (0, l.jsxs)('div', {
                                      children: [
                                        (0, l.jsx)('label', {
                                          htmlFor: 'exampleInputEmail1',
                                          className: 'form-label',
                                          children:
                                            '\u0987\u09ae\u09c7\u0987\u09b2',
                                        }),
                                        (0, l.jsx)('input', {
                                          type: 'email',
                                          className: 'form-control',
                                          id: 'exampleInputEmail1',
                                          'aria-describedby': 'emailHelp',
                                          name: 'email',
                                          disabled: !0,
                                          style: { cursor: 'not-allowed' },
                                          placeholder:
                                            '\u0987\u09ae\u09c7\u0987\u09b2',
                                          value: s.email,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'col-12 text-end mt-4',
                                    children: (0, l.jsxs)('button', {
                                      disabled: j,
                                      type: 'submit',
                                      className:
                                        'btn btn-primary dashboard_btn',
                                      children: [
                                        '\u0986\u09aa\u09a1\u09c7\u099f \u0995\u09b0\u09c1\u09a8 ',
                                        (0, l.jsx)(m.l_A, {
                                          className: 'ms-3',
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)('div', {
                      className: 'col-xl-6',
                      children: (0, l.jsxs)('div', {
                        className: 'password_change',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'title',
                            children:
                              '\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u0995\u09b0\u09c1\u09a8',
                          }),
                          (0, l.jsxs)('div', {
                            className: 'form_box',
                            children: [
                              (0, l.jsx)('img', {
                                style: {
                                  width: '265px',
                                  margin: '',
                                  border: '0',
                                },
                                src: '/logo/password.svg',
                                alt: 'Logo',
                              }),
                              (0, l.jsxs)('form', {
                                onSubmit: function (e) {
                                  if (
                                    (e.preventDefault(),
                                    w.password !== w.confirmPassword)
                                  )
                                    return (0, x.Am)('Password do not match')();
                                  p.Z.put(
                                    'https://techanalyzen.libertysailingschool.net/api/user/'.concat(
                                      s._id
                                    ),
                                    { method: 'PUT', body: JSON.stringify(N) }
                                  )
                                    .then(function (e) {
                                      return e.json();
                                    })
                                    .then(function (e) {
                                      e._id
                                        ? alert('User updated successfully')
                                        : alert(e.msg);
                                    });
                                },
                                className: 'row g-3',
                                children: [
                                  (0, l.jsxs)('div', {
                                    className: 'col-md-12',
                                    children: [
                                      (0, l.jsx)('label', {
                                        htmlFor: 'inputPassword3',
                                        className: 'col-sm-12 col-form-label',
                                        children:
                                          '\u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1',
                                      }),
                                      (0, l.jsx)('div', {
                                        className: 'col-sm-12',
                                        children: (0, l.jsx)('input', {
                                          type: 'password',
                                          className: 'form-control',
                                          id: 'inputPassword3',
                                          placeholder:
                                            '\u09a8\u09a4\u09c1\u09a8 \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1',
                                          name: 'password',
                                          onChange: e,
                                          value: w.password,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'col-md-12',
                                    children: (0, l.jsxs)('div', {
                                      children: [
                                        (0, l.jsx)('label', {
                                          htmlFor: 'inputPassword4',
                                          className: 'col-sm-12 col-form-label',
                                          children:
                                            '\u0995\u09a8\u09ab\u09be\u09b0\u09cd\u09ae \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1',
                                        }),
                                        (0, l.jsx)('div', {
                                          className: 'col-sm-12',
                                          children: (0, l.jsx)('input', {
                                            type: 'password',
                                            className: 'form-control',
                                            id: 'inputPassword4',
                                            placeholder:
                                              '\u0995\u09a8\u09ab\u09be\u09b0\u09cd\u09ae \u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1',
                                            name: 'confirmPassword',
                                            onChange: e,
                                            value: w.confirmPassword,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, l.jsx)('div', {
                                    className: 'col-12',
                                    children: (0, l.jsxs)('button', {
                                      type: 'submit',
                                      className:
                                        'btn btn-primary dashboard_btn d-block w-100',
                                      children: [
                                        '\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09b8\u09c7\u099f \u0995\u09b0\u09bf ',
                                        (0, l.jsx)(m.l_A, {
                                          className: 'ms-3',
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        f = function () {
          return (0, l.jsx)('div', {
            className: 'wallet mt-5',
            children: (0, l.jsx)('div', {
              className: 'container',
              children: (0, l.jsxs)('div', {
                className: 'row',
                children: [
                  (0, l.jsx)('div', {
                    className: 'col-xl-6',
                    children: (0, l.jsxs)('div', {
                      className: 'left_box',
                      children: [
                        (0, l.jsx)('h3', {
                          children: 'Your Techanalyzen Wallet',
                        }),
                        (0, l.jsx)('p', {
                          children:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum veniam minus, fuga nesciunt pariatur!',
                        }),
                        (0, l.jsx)('h6', {
                          children: 'You can withdraw your money',
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)('div', {
                    className: 'col-xl-6',
                    children: (0, l.jsxs)('div', {
                      className: 'right_box',
                      children: [
                        (0, l.jsx)('h4', {
                          children: 'Current Wallet Balance',
                        }),
                        (0, l.jsxs)('div', {
                          className: 'price mb-3',
                          children: [
                            '\u09f3 0 ',
                            (0, l.jsx)('span', { children: 'BDT' }),
                          ],
                        }),
                        (0, l.jsxs)('a', {
                          href: '#',
                          children: [
                            'Refer Techanalyzen to earn more ',
                            (0, l.jsx)(m.Z1Y, {}),
                          ],
                        }),
                        (0, l.jsx)('div', {
                          className: 'note',
                          children: '* wallet balance is non-transferable',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        b = function () {
          return (0, l.jsx)('div', {
            children: (0, l.jsxs)('div', {
              className: 'tab-content',
              id: 'myTabContent',
              children: [
                (0, l.jsx)('div', {
                  className: 'tab-pane fade show active',
                  id: 'home',
                  role: 'tabpanel',
                  'aria-labelledby': 'home-tab',
                  children: (0, l.jsx)(j, {}),
                }),
                (0, l.jsx)('div', {
                  className: 'tab-pane fade',
                  id: 'profile',
                  role: 'tabpanel',
                  'aria-labelledby': 'profile-tab',
                  children: (0, l.jsx)(i, {}),
                }),
                (0, l.jsx)('div', {
                  className: 'tab-pane fade',
                  id: 'contact',
                  role: 'tabpanel',
                  'aria-labelledby': 'contact-tab',
                  children: (0, l.jsx)(f, {}),
                }),
              ],
            }),
          });
        },
        N = function () {
          return (0, l.jsx)('div', {
            children: (0, l.jsxs)('ul', {
              className: 'nav nav-tabs',
              id: 'myTab',
              role: 'tablist',
              children: [
                (0, l.jsx)('li', {
                  className: 'nav-item',
                  role: 'presentation',
                  children: (0, l.jsx)('button', {
                    className: 'nav-link active',
                    id: 'home-tab',
                    'data-bs-toggle': 'tab',
                    'data-bs-target': '#home',
                    type: 'button',
                    role: 'tab',
                    'aria-controls': 'home',
                    'aria-selected': 'true',
                    children:
                      '\u098f\u0995\u09be\u0989\u09a8\u09cd\u099f \u09a1\u09bf\u099f\u09c7\u0987\u09b2\u09b8',
                  }),
                }),
                (0, l.jsx)('li', {
                  className: 'nav-item',
                  role: 'presentation',
                  children: (0, l.jsx)('button', {
                    className: 'nav-link',
                    id: 'profile-tab',
                    'data-bs-toggle': 'tab',
                    'data-bs-target': '#profile',
                    type: 'button',
                    role: 'tab',
                    'aria-controls': 'profile',
                    'aria-selected': 'false',
                    children:
                      '\u09af\u09be\u09ac\u09a4\u09c0\u09df \u09b2\u09c7\u09a8\u09a6\u09c7\u09a8',
                  }),
                }),
                (0, l.jsx)('li', {
                  className: 'nav-item',
                  role: 'presentation',
                  children: (0, l.jsx)('button', {
                    className: 'nav-link',
                    id: 'contact-tab',
                    'data-bs-toggle': 'tab',
                    'data-bs-target': '#contact',
                    type: 'button',
                    role: 'tab',
                    'aria-controls': 'contact',
                    'aria-selected': 'false',
                    children: 'Wallet',
                  }),
                }),
              ],
            }),
          });
        },
        v = function () {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(n(), {
                children: (0, l.jsx)('title', {
                  children: 'Profile | Techanalyzen',
                }),
              }),
              (0, l.jsx)('div', {
                className: 'dashboardContent',
                children: (0, l.jsx)('div', {
                  className: 'container px-4',
                  children: (0, l.jsxs)('div', {
                    className: 'dashboard_profile',
                    children: [(0, l.jsx)(N, {}), (0, l.jsx)(b, {})],
                  }),
                }),
              }),
            ],
          });
        };
    },
    9008: function (e, a, s) {
      e.exports = s(5443);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (a = 540), e((e.s = a));
      var a;
    });
    var a = e.O();
    _N_E = a;
  },
]);
