'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2332],
  {
    3152: function (s, e, l) {
      var i = l(5893),
        a = l(1664),
        c = l.n(a),
        r = l(1163),
        n = l(7294),
        t = l(9583),
        o = l(9473),
        h = l(607),
        m = l(7474);
      e.Z = function () {
        var s = function () {
            (x.current.style.left = '-100%'), a(!l);
          },
          e = (0, n.useState)(!1),
          l = e[0],
          a = e[1],
          d = (0, n.useRef)(),
          x = (0, n.useRef)(),
          g = (0, n.useRef)(),
          j = (0, n.useRef)(),
          u = (0, n.useRef)(),
          f = (0, o.I0)(),
          v = (0, r.useRouter)(),
          N = (0, o.v9)(function (s) {
            return s.user;
          }).user,
          p = N._id,
          b = N.firstName,
          w = (N.username, N.lastName),
          k = N.avatar;
        (0, n.useEffect)(
          function () {
            (d.current.onclick = function () {
              l
                ? ((x.current.style.left = '-100%'), a(!l))
                : ((x.current.style.left = '0%'), a(!l));
            }),
              (g.current.onclick = function () {
                (x.current.style.left = '-100%'), a(!l);
              }),
              window.addEventListener('scroll', function () {
                window.scrollY >= 50
                  ? (j.current && (j.current.style.background = '#fff'),
                    j.current &&
                      (j.current.style.boxShadow =
                        '0 1px 2px rgba(0, 0, 0, 0.2)'),
                    u.current &&
                      (window.location.pathname,
                      (u.current.src = '/logo/logo_black.png')))
                  : (j.current && (j.current.style.background = 'transparent'),
                    j.current && (j.current.style.boxShadow = 'none'),
                    u.current &&
                      ('/' == window.location.pathname
                        ? (u.current.src = '/logo/logo_white.png')
                        : (u.current.src = '/logo/logo_black.png')));
              });
          },
          [l]
        );
        var y = function () {
          m.Z.get('/auth/v1/logout')
            .then(function (s) {
              'ok' === s.data.status && (f((0, h.kS)()), v.push('/login'));
            })
            .catch(function (s) {
              console.log(s);
            });
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)('div', {
              className: 'devMsg',
              children: (0, i.jsx)('marquee', {
                behavior: '',
                direction: 'left',
                children:
                  'The website is currently under development. some of the functionality might not work perfectly. it can take 2-3 days to complete, please call us if you need any help',
              }),
            }),
            (0, i.jsx)('header', {
              children: (0, i.jsxs)('nav', {
                className: 'd-flex',
                ref: j,
                children: [
                  (0, i.jsxs)('div', {
                    className: 'navbar container',
                    children: [
                      (0, i.jsx)('button', {
                        className: 'menu-toggler-btn',
                        ref: d,
                        children: (0, i.jsx)(t.Fm7, { className: '' }),
                      }),
                      (0, i.jsx)('div', {
                        className: 'logo',
                        children: (0, i.jsx)(c(), {
                          href: '/',
                          children: (0, i.jsx)('img', {
                            ref: u,
                            src:
                              '/' == window.location.pathname
                                ? '/logo/logo_white.png'
                                : '/logo/logo_black.png',
                            alt: 'Logo',
                          }),
                        }),
                      }),
                      (0, i.jsxs)('ul', {
                        className: 'nav-public-menu',
                        children: [
                          (0, i.jsx)('li', {
                            className: 'menu-item',
                            children: (0, i.jsx)(c(), {
                              href: '/',
                              children: (0, i.jsx)('a', {
                                children: '\u09b9\u09cb\u09ae',
                              }),
                            }),
                          }),
                          (0, i.jsx)('li', {
                            className: 'menu-item',
                            children: (0, i.jsx)(c(), {
                              href: '/about-us',
                              children: (0, i.jsx)('a', {
                                children:
                                  '\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7',
                              }),
                            }),
                          }),
                          (0, i.jsx)('li', {
                            className: 'menu-item',
                            children: (0, i.jsx)(c(), {
                              href: '/contact-us',
                              children: (0, i.jsx)('a', {
                                children:
                                  '\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997 \u0995\u09b0\u09c1\u09a8',
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)('ul', {
                        className: 'nav-auth-menu',
                        children: p
                          ? (0, i.jsxs)('li', {
                              className: 'auth-profile menu-item',
                              children: [
                                (0, i.jsxs)('div', {
                                  className: 'profile_icon',
                                  children: [
                                    (0, i.jsxs)('a', {
                                      href: '#',
                                      children: [
                                        '\u09b9\u09cd\u09af\u09be\u09b2\u09cb, ',
                                        b,
                                        ' ',
                                        w,
                                      ],
                                    }),
                                    (0, i.jsx)('img', {
                                      alt: '',
                                      src: k
                                        ? 'https://techanalyzen.libertysailingschool.net/files/thumb/profile/'.concat(
                                            k
                                          )
                                        : '/assets/images/svg/user.svg',
                                      className: 'ms-2',
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)('ul', {
                                  className: 'auth-sub-menu',
                                  children: [
                                    (0, i.jsx)('div', {
                                      className: 'profileImg',
                                      children: (0, i.jsx)('img', {
                                        src: k
                                          ? 'https://techanalyzen.libertysailingschool.net/files/thumb/profile/'.concat(
                                              k
                                            )
                                          : '/assets/images/svg/user.svg',
                                        alt: 'Profile',
                                      }),
                                    }),
                                    (0, i.jsxs)('h3', {
                                      className: 'displayName',
                                      children: [b, ' ', w],
                                    }),
                                    (0, i.jsxs)('li', {
                                      className: 'sub-menu-item',
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: '/dashboard',
                                          children: (0, i.jsx)('a', {
                                            className: '',
                                            children:
                                              '\u09a1\u09cd\u09af\u09be\u09b8\u09ac\u09cb\u09b0\u09cd\u09a1',
                                          }),
                                        }),
                                        (0, i.jsx)('img', {
                                          alt: '',
                                          src: '/assets/images/svg/dash-board.svg',
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)('li', {
                                      className: 'sub-menu-item',
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: '/dashboard/profile',
                                          children: (0, i.jsx)('a', {
                                            className: '',
                                            children:
                                              '\u09aa\u09cd\u09b0\u09cb\u09ab\u09be\u0987\u09b2',
                                          }),
                                        }),
                                        (0, i.jsx)('img', {
                                          src: '/assets/images/svg/profile.svg',
                                          alt: '',
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)('li', {
                                      className: 'sub-menu-item',
                                      children: [
                                        (0, i.jsx)(c(), {
                                          href: '/notification',
                                          children: (0, i.jsx)('a', {
                                            href: '#',
                                            className: '',
                                            children:
                                              '\u09a8\u09cb\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u09b6\u09a8',
                                          }),
                                        }),
                                        (0, i.jsx)('img', {
                                          alt: '',
                                          src: '/assets/images/svg/notification-svgrepo-com.svg',
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)('li', {
                                      className: 'sub-menu-item',
                                      onClick: y,
                                      children: [
                                        (0, i.jsx)('a', {
                                          className: '',
                                          children:
                                            '\u09b2\u0997\u0986\u0989\u099f',
                                        }),
                                        (0, i.jsx)('img', {
                                          src: '/assets/images/svg/logout.svg',
                                          alt: '',
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)('li', {
                                  className: ' menu-item',
                                  children: (0, i.jsx)(c(), {
                                    href: '/register',
                                    children: (0, i.jsx)('a', {
                                      children: (0, i.jsx)('span', {
                                        className: 'register-btn',
                                        children:
                                          '\u09b0\u09c7\u099c\u09bf\u09b7\u09cd\u099f\u09be\u09b0',
                                      }),
                                    }),
                                  }),
                                }),
                                (0, i.jsx)('li', {
                                  className: 'menu-item signin',
                                  children: (0, i.jsx)(c(), {
                                    href: '/login',
                                    children: (0, i.jsx)('a', {
                                      children: (0, i.jsx)('span', {
                                        className: 'signin-btn',
                                        children: '\u09b2\u0997\u0987\u09a8',
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)('div', {
                    className: 'mobile-navbar container',
                    ref: x,
                    children: [
                      (0, i.jsxs)('div', {
                        className: 'mobile-nav-logo',
                        children: [
                          (0, i.jsx)('span', {
                            className: 'm-logo',
                            children: (0, i.jsx)('img', {
                              src: '/logo/logo_black.png',
                              alt: 'Logo',
                            }),
                          }),
                          (0, i.jsx)('img', {
                            alt: '',
                            src: '/assets/images/svg/cross.svg',
                            className: '',
                            ref: g,
                          }),
                        ],
                      }),
                      (0, i.jsxs)('ul', {
                        className: 'mobile-menu',
                        children: [
                          (0, i.jsx)('li', {
                            onClick: function () {
                              return s();
                            },
                            children: (0, i.jsx)('a', {
                              href: '#',
                              children: '\u09b9\u09cb\u09ae',
                            }),
                          }),
                          (0, i.jsx)('li', {
                            onClick: function () {
                              return s();
                            },
                            children: (0, i.jsx)(c(), {
                              href: '/dashboard',
                              children: (0, i.jsx)('a', {
                                className: '',
                                children:
                                  '\u09a1\u09cd\u09af\u09be\u09b8\u09ac\u09cb\u09b0\u09cd\u09a1',
                              }),
                            }),
                          }),
                          (0, i.jsx)('li', {
                            onClick: function () {
                              return s();
                            },
                            children: (0, i.jsx)('a', {
                              href: '#',
                              className: '',
                              children:
                                '\u09aa\u09cd\u09b0\u09cb\u09ab\u09be\u0987\u09b2',
                            }),
                          }),
                          (0, i.jsx)('li', {
                            onClick: function () {
                              return s();
                            },
                            children: (0, i.jsx)('a', {
                              href: './pages/notifications/notifications.html',
                              className: '',
                              children:
                                '\u09a8\u09cb\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u09b6\u09a8',
                            }),
                          }),
                          (0, i.jsx)('li', {
                            onClick: function () {
                              return s();
                            },
                            children: (0, i.jsx)('a', {
                              href: '#',
                              children:
                                '\u0986\u09b0\u09cb \u099c\u09be\u09a8\u09c1\u09a8',
                            }),
                          }),
                          (0, i.jsx)('li', {
                            children: (0, i.jsx)('a', {
                              href: '#',
                              children:
                                '\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997 \u0995\u09b0\u09c1\u09a8',
                            }),
                          }),
                          p
                            ? (0, i.jsx)('li', {
                                onClick: y,
                                children: (0, i.jsx)('button', {
                                  className: 'logout-btn',
                                  children: '\u09b2\u0997\u0986\u0989\u099f',
                                }),
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                children: [
                                  ' ',
                                  (0, i.jsx)('li', {
                                    className: 'register-btn',
                                    onClick: function () {
                                      return s();
                                    },
                                    children: (0, i.jsx)(c(), {
                                      href: '/register',
                                      children: (0, i.jsx)('a', {
                                        children: (0, i.jsx)('span', {
                                          className: 'register-text',
                                          children:
                                            '\u09b0\u09c7\u099c\u09bf\u09b7\u09cd\u099f\u09be\u09b0',
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)('li', {
                                    className: 'SignIn-btn',
                                    onClick: function () {
                                      return s();
                                    },
                                    children: (0, i.jsx)(c(), {
                                      href: '/login',
                                      children: (0, i.jsx)('a', {
                                        children: (0, i.jsx)('span', {
                                          className: 'signin-btn',
                                          children: '\u09b2\u0997\u0987\u09a8',
                                        }),
                                      }),
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
            }),
          ],
        });
      };
    },
    3928: function (s, e, l) {
      var i = l(5893),
        a = l(1664),
        c = l.n(a);
      l(7294);
      e.Z = function () {
        return (0, i.jsx)('footer', {
          className: 'footer',
          children: (0, i.jsxs)('div', {
            className: 'container main-footer-item',
            children: [
              (0, i.jsx)('div', {
                className: 'middle-part',
                children: (0, i.jsxs)('div', {
                  className: 'row',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'col-lg-3 col-md-6 col-sm-6 me-auto',
                      children: [
                        (0, i.jsx)(c(), {
                          href: '/',
                          children: (0, i.jsx)('a', {
                            className: 'footer-logo',
                            children: (0, i.jsx)('img', {
                              className: 'footer_logo',
                              src: '/logo/logo_white.png',
                              alt: 'Logo',
                            }),
                          }),
                        }),
                        (0, i.jsx)('p', {
                          className: 'text-size-16 footer-text text-white',
                          children:
                            'Unlock Your IT Potential: Empowering Excellence',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'list-unstyled mb-0 social-icons d-block',
                          children: [
                            (0, i.jsx)('li', {
                              className: 'circle me-3',
                              children: (0, i.jsx)('a', {
                                href: 'https://www.facebook.com/techanalyzen',
                                target: '_blank',
                                children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: '/assets/images/svg/facebook-svgrepo-com.svg',
                                }),
                              }),
                            }),
                            (0, i.jsx)('li', {
                              className: 'circle me-3',
                              children: (0, i.jsx)('a', {
                                href: 'https://www.linkedin.com/company/techanalzyen',
                                target: '_blank',
                                children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: '/assets/images/svg/linkedin-svgrepo-com.svg',
                                }),
                              }),
                            }),
                            (0, i.jsx)('li', {
                              className: 'circle me-3',
                              children: (0, i.jsx)('a', {
                                href: 'https://twitter.com/RokibulDev',
                                target: '_blank',
                                children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: '/assets/images/svg/twitter-svgrepo-com.svg',
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)('div', {
                      className: 'col-lg-3 col-md-6 col-sm-6 col-12',
                      children: (0, i.jsxs)('div', {
                        className: 'links footer-content-left',
                        children: [
                          (0, i.jsx)('h4', {
                            className: 'heading text-white',
                            children:
                              '\u0995\u09c1\u0987\u0995 \u09b2\u09bf\u0999\u09cd\u0995',
                          }),
                          (0, i.jsxs)('ul', {
                            className: 'list-unstyled mb-0 d-block',
                            children: [
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: './index.html',
                                    className:
                                      'text-size-16 text text-decoration-none',
                                    children:
                                      '\u0986\u09aa\u0995\u09be\u09ae\u09bf\u0982 \u09b2\u09be\u0987\u09ad \u09ac\u09cd\u09af\u09be\u099a',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: './about.html',
                                    className:
                                      'text-size-16 text text-decoration-none',
                                    children:
                                      '\u09ab\u09cd\u09b0\u09c0 \u09b2\u09be\u0987\u09ad \u0995\u09cd\u09b2\u09be\u09b8',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: './service.html',
                                    className:
                                      'text-size-16 text text-decoration-none',
                                    children:
                                      '\u09b2\u09be\u0987\u09ad \u0993\u09df\u09be\u09b0\u09cd\u0995\u09b6\u09aa',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                    alt: '',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: './projects.html',
                                    className:
                                      'text-size-16 text text-decoration-none',
                                    children:
                                      '\u099c\u09df\u09c7\u09a8 \u0995\u09b0\u09c1\u09a8 \u098f\u0995\u09cd\u09b8\u09aa\u09be\u09b0\u09cd\u099f\u09a6\u09c7\u09b0 \u099f\u09bf\u09ae\u09c7',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: './contact.html',
                                    className:
                                      ' text-size-16 text text-decoration-none',
                                    children: '\u09ac\u09cd\u09b2\u0997',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)('div', {
                      className: 'col-lg-3 col-md-6 col-sm-6 col-12',
                      children: (0, i.jsxs)('div', {
                        className: 'links company footer-content-left',
                        children: [
                          (0, i.jsx)('h4', {
                            className: 'heading text-white',
                            children:
                              '\u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09c0',
                          }),
                          (0, i.jsxs)('ul', {
                            className: 'list-unstyled mb-0 d-block',
                            children: [
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)(c(), {
                                    href: '/about-us',
                                    children: (0, i.jsx)('a', {
                                      className:
                                        ' text-size-16 text text-decoration-none',
                                      children:
                                        '\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7',
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)(c(), {
                                    href: '/supported-browsers',
                                    children: (0, i.jsx)('a', {
                                      className:
                                        ' text-size-16 text text-decoration-none',
                                      children:
                                        '\u09b8\u09be\u09aa\u09cb\u09b0\u09cd\u099f\u09c7\u09a1 \u09ac\u09cd\u09b0\u09be\u0989\u099c\u09be\u09b0',
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)(c(), {
                                    href: '/refund-policy',
                                    children: (0, i.jsx)('a', {
                                      className:
                                        'text-size-16 text text-decoration-none',
                                      children:
                                        '\u09b0\u09bf\u09ab\u09be\u09a8\u09cd\u09a1 \u09aa\u09b2\u09bf\u09b8\u09bf',
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)(c(), {
                                    href: '/privacy-policy',
                                    children: (0, i.jsx)('a', {
                                      className:
                                        ' text-size-16 text text-decoration-none',
                                      children:
                                        '\u09aa\u09cd\u09b0\u09be\u0987\u09ad\u09c7\u09b8\u09c0 \u09aa\u09b2\u09bf\u09b8\u09bf',
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                children: [
                                  (0, i.jsx)('img', {
                                    alt: '',
                                    src: '/assets/images/svg/arrow-right-svgrepo-com.svg',
                                  }),
                                  (0, i.jsx)(c(), {
                                    href: '/terms-and-conditions',
                                    children: (0, i.jsx)('a', {
                                      className:
                                        ' text-size-16 text text-decoration-none',
                                      children:
                                        '\u099f\u09be\u09b0\u09cd\u09ae\u09b8 \u098f\u09ac\u0982 \u09b6\u09b0\u09cd\u09a4\u09be\u09ac\u09b2\u09c0',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)('div', {
                      className: 'col-lg-3 col-md-6 col-sm-6 col-12',
                      children: (0, i.jsxs)('div', {
                        className: 'icon footer-content-left',
                        children: [
                          (0, i.jsx)('h4', {
                            className: 'heading text-white',
                            children:
                              '\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997',
                          }),
                          (0, i.jsxs)('ul', {
                            className:
                              'list-unstyled mb-0 position-relative d-block',
                            children: [
                              (0, i.jsxs)('li', {
                                className: 'text',
                                children: [
                                  (0, i.jsx)('img', {
                                    src: '/assets/images/svg/phone.svg',
                                    alt: 'phone',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: 'tel:+4733378901',
                                    className:
                                      'mb-0 text text-decoration-none text-size-16',
                                    children: '+880 1763-251119',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                className: 'text',
                                children: [
                                  (0, i.jsx)('img', {
                                    src: '/assets/images/svg/email.svg',
                                    alt: 'email',
                                  }),
                                  (0, i.jsx)('a', {
                                    href: '',
                                    className:
                                      'mb-0 text text-decoration-none text-size-16',
                                    children: 'support@techanalyzen.com',
                                  }),
                                ],
                              }),
                              (0, i.jsxs)('li', {
                                className: 'text address',
                                children: [
                                  (0, i.jsx)('img', {
                                    src: '/assets/images/svg/location.svg',
                                    alt: 'address',
                                  }),
                                  (0, i.jsx)('p', {
                                    className: 'text-size-16',
                                    children:
                                      'Mohsin Villa, Bihari Coloy, Ukilpara Road, Naogaon Sadar, Naogaon - 6500',
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
              (0, i.jsx)('div', {
                className: 'copyright',
                children: (0, i.jsx)('div', {
                  className: 'row',
                  children: (0, i.jsx)('div', {
                    className: 'col-12',
                    children: (0, i.jsx)('p', {
                      className: 'mb-0 text-white',
                      children:
                        'Copyright 2023, Techanalyzen.com All Rights Reserved.',
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
