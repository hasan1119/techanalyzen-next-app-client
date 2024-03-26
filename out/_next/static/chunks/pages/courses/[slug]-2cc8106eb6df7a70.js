(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1355],
  {
    2468: function (s, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/courses/[slug]',
        function () {
          return a(9908);
        },
      ]);
    },
    9908: function (s, e, a) {
      'use strict';
      a.r(e);
      var l = a(5893),
        i = a(9008),
        c = a.n(i),
        r = a(1664),
        n = a.n(r),
        d = a(1163),
        m = a(7294),
        t = a(9473),
        o = a(3152),
        x = a(3928),
        h = a(7474);
      e.default = function () {
        var s = function (s) {
            y(s.target.value), console.log(p);
          },
          e = (0, d.useRouter)(),
          a = e.query.slug,
          i = (0, m.useState)({}),
          r = i[0],
          g = i[1],
          v = (0, m.useState)(!0),
          u = v[0],
          j = v[1],
          f = (0, m.useState)(!0),
          b = (f[0], f[1]),
          N = (0, m.useState)('fixed'),
          p = N[0],
          y = N[1],
          w = (0, m.useState)([]),
          k = w[0],
          _ = w[1];
        (0, m.useEffect)(
          function () {
            a &&
              h.Z.get('/v1/courses/'.concat(a))
                .then(function (s) {
                  var e = s.data;
                  e._id
                    ? g(e)
                    : 'notfound' === e.msg && g({ status: 'not-found' }),
                    console.log(e);
                })
                .catch(function (s) {
                  console.log(s);
                })
                .finally(j(!1));
          },
          [a]
        ),
          (0, m.useEffect)(function () {
            h.Z.get('/v1/courses')
              .then(function (s) {
                var e = s.data;
                e.length
                  ? _(e)
                  : 'notfound' === e.msg && _({ status: 'not-found' }),
                  console.log(e);
              })
              .catch(function (s) {
                console.log(s);
              })
              .finally(j(!1));
          }, []);
        var C,
          I = r._id,
          F = r.title,
          T = r.description,
          S = r.instructor,
          O = void 0 === S ? {} : S,
          P = O.firstName,
          E = O.lastName,
          D = (O.username, O.email, O.phone, r.lessons, r.students),
          L = (r.slug, r.status, r.category),
          q = (r.subCategory, r.curriculumDescription),
          H = (r.language, r.courseLength, r.totalLesson, r.totalClass),
          R = r.topics,
          M = r.startWithIn,
          Z = r.requirements,
          B = r.price,
          A = r.subscription,
          V = (r.paidOrFree, r.courseType, r.level),
          W = r.endDate,
          z = r.duration,
          Q = r.discount,
          X = r.certificate,
          Y =
            (r.attribute,
            r.thumbnail,
            r.rating,
            r.reviews,
            (0, t.v9)(function (s) {
              return s.user;
            }).user);
        return u
          ? 'Loading.......'
          : r._id
          ? (0, l.jsxs)('div', {
              children: [
                (0, l.jsx)(c(), {
                  children: (0, l.jsx)('title', {
                    children: 'Home | Techanalyzen',
                  }),
                }),
                (0, l.jsx)(o.Z, {}),
                (0, l.jsx)('main', {
                  children: (0, l.jsxs)('section', {
                    className: 'single-course-detail',
                    children: [
                      (0, l.jsx)('div', { className: 'hello' }),
                      (0, l.jsx)('div', {
                        className: 'container course-content-wrapper',
                        children: (0, l.jsxs)('div', {
                          className: 'row mb-5 course_content_row',
                          children: [
                            (0, l.jsxs)('div', {
                              className:
                                'col-lg-8 mt-5 mb-5 mb-lg-0 course-details-box',
                              children: [
                                (0, l.jsxs)('div', {
                                  className: 'course_top_title',
                                  children: [
                                    (0, l.jsx)('h1', {
                                      className:
                                        'me-5 me-5 courses-header-title',
                                      children: F,
                                    }),
                                    (0, l.jsx)('p', {
                                      className: 'me-5 mb-5 courses-paragraph',
                                      children: (0, l.jsx)('div', {
                                        dangerouslySetInnerHTML: { __html: T },
                                      }),
                                    }),
                                    (0, l.jsx)('a', {
                                      href: '#',
                                      className: 'heart-svg',
                                      children: (0, l.jsx)('img', {
                                        src: '/assets/images/svg/heart.svg',
                                      }),
                                    }),
                                    (0, l.jsxs)('div', {
                                      className:
                                        'course-meta-box d-md-flex align-items-center mb-5',
                                      children: [
                                        (0, l.jsx)('div', {
                                          className:
                                            'border rounded-circle d-inline-block mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5',
                                          children: (0, l.jsx)('div', {
                                            className:
                                              'p-2 course-creator-img-box',
                                            children: (0, l.jsx)('img', {
                                              src: '/assets/images/banner/a.jpg',
                                              className: 'rounded-circle',
                                              width: '68',
                                              height: '68',
                                            }),
                                          }),
                                        }),
                                        (0, l.jsxs)('div', {
                                          className:
                                            'mb-4 mb-md-0 me-md-8 me-lg-4 me-xl-5 course-creator-by-box',
                                          children: [
                                            (0, l.jsxs)('h6', {
                                              className: 'mb-0',
                                              children: [
                                                ' ',
                                                ' \u0987\u09a8\u09cd\u09b8\u099f\u09cd\u09b0\u09be\u0995\u09cd\u099f\u09b0',
                                              ],
                                            }),
                                            (0, l.jsxs)('a', {
                                              href: '#',
                                              children: [
                                                ' ',
                                                ''.concat(P, ' ').concat(E),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)('div', {
                                          className:
                                            'mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-category-box',
                                          children: [
                                            (0, l.jsxs)('h6', {
                                              className: 'mb-0',
                                              children: [
                                                ' ',
                                                ' \u0995\u09cd\u09af\u09be\u099f\u09be\u0997\u09b0\u09bf',
                                              ],
                                            }),
                                            (0, l.jsxs)('a', {
                                              href: '#',
                                              children: [
                                                ' ',
                                                null === L || void 0 === L
                                                  ? void 0
                                                  : L.title,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)('div', {
                                          className:
                                            'mb-4 mb-md-0 me-md-5 me-lg-4 me-xl-5 course-creator-review-box',
                                          children: [
                                            (0, l.jsxs)('h6', {
                                              className: 'mb-0',
                                              children: [
                                                ' ',
                                                ' \u09b0\u09bf\u09ad\u09bf\u0989',
                                              ],
                                            }),
                                            (0, l.jsxs)('div', {
                                              className:
                                                'd-lg-flex align-items-center',
                                              children: [
                                                (0, l.jsxs)('div', {
                                                  className:
                                                    'star-rating mb-2 mb-lg-0',
                                                  children: [
                                                    (0, l.jsx)('img', {
                                                      src: '/assets/images/svg/fill-star.svg',
                                                      alt: 'fill-star',
                                                    }),
                                                    (0, l.jsx)('img', {
                                                      src: '/assets/images/svg/fill-star.svg',
                                                      alt: 'fill-star',
                                                    }),
                                                    (0, l.jsx)('img', {
                                                      src: '/assets/images/svg/fill-star.svg',
                                                      alt: 'fill-star',
                                                    }),
                                                    (0, l.jsx)('img', {
                                                      src: '/assets/images/svg/fill-star.svg',
                                                      alt: 'fill-star',
                                                    }),
                                                    (0, l.jsx)('img', {
                                                      src: '/assets/images/svg/half-star.svg',
                                                      alt: 'half-star',
                                                    }),
                                                  ],
                                                }),
                                                (0, l.jsx)('div', {
                                                  className: ' ms-lg-3',
                                                  children: (0, l.jsxs)(
                                                    'span',
                                                    {
                                                      children: [
                                                        ' ',
                                                        ' \u09ea.\u09eb (\u09ef.\u09ee\u09b9\u09be\u099c\u09be\u09b0+ \u09b0\u09bf\u09ad\u09bf\u0989)',
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  id: 'Overview',
                                  className: 'overview mb-5',
                                  children: [
                                    (0, l.jsxs)('ul', {
                                      className: 'nav border-bottom h4 mb-5',
                                      children: [
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4 active',
                                            href: '#Overview',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0993\u09ad\u09be\u09b0\u09ad\u09bf\u0989',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Curriculum',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0995\u09be\u09b0\u09bf\u0995\u09c1\u09b2\u09be\u09ae',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Instructor',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u09aa\u09cd\u09b0\u09b6\u09bf\u0995\u09cd\u09b7\u0995',
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        (0, l.jsxs)('h3', {
                                          className: 'mt-5',
                                          children: [
                                            ' ',
                                            ' \u09aa\u09be\u09a0\u09cd\u09af\u09b8\u09c2\u099a\u09c0 \u09ac\u09b0\u09cd\u09a3\u09a8\u09be',
                                          ],
                                        }),
                                        (0, l.jsx)('div', {
                                          dangerouslySetInnerHTML: {
                                            __html: q,
                                          },
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        (0, l.jsxs)('h3', {
                                          className: 'mb-5',
                                          children: [
                                            ' ',
                                            ' \u0986\u09aa\u09a8\u09bf \u0995\u09c0 \u0995\u09c0 \u09b6\u09bf\u0996\u09ac\u09c7\u09a8',
                                          ],
                                        }),
                                        (0, l.jsx)('div', {
                                          className: 'row row-cols-lg-2 mb-5',
                                          children: (0, l.jsx)('div', {
                                            className: 'w-100',
                                            children: (0, l.jsx)('ul', {
                                              className:
                                                'list-style-v1 topics list-unstyled',
                                              children:
                                                null === R || void 0 === R
                                                  ? void 0
                                                  : R.map(function (s, e) {
                                                      return (0,
                                                      l.jsxs)('li', { children: [(0, l.jsx)('img', { className: 'tick-inc', src: '/assets/images/svg/tick-mark.svg' }), s] }, s + e);
                                                    }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        (0, l.jsxs)('h3', {
                                          className: 'mb-5',
                                          children: [
                                            ' ',
                                            ' \u09af\u09be \u09af\u09be \u09b2\u09be\u0997\u09ac\u09c7',
                                          ],
                                        }),
                                        (0, l.jsx)('ul', {
                                          className:
                                            'list-style-v2 list-unstyled',
                                          children:
                                            null === Z || void 0 === Z
                                              ? void 0
                                              : Z.map(function (s) {
                                                  return (0,
                                                  l.jsxs)('li', { children: [(0, l.jsx)('img', { className: 'dot-inc', src: '/assets/images/svg/dot-icon.svg' }), (0, l.jsx)('p', {}), s] });
                                                }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)('div', {
                                  id: 'Curriculum',
                                  className: 'curriculum mb-5',
                                  children: [
                                    (0, l.jsxs)('ul', {
                                      className: 'nav border-bottom mb-5',
                                      children: [
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Overview',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0993\u09ad\u09be\u09b0\u09ad\u09bf\u0989',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link active p-4',
                                            href: '#Curriculum',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0995\u09be\u09b0\u09bf\u0995\u09c1\u09b2\u09be\u09ae',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsx)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Instructor',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children:
                                              ' \u09aa\u09cd\u09b0\u09b6\u09bf\u0995\u09cd\u09b7\u0995',
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('div', {
                                      id: 'accordionCurriculum',
                                      children: (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsxs)('div', {
                                            className:
                                              'border rounded shadow mb-5 overflow-hidden',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className:
                                                  'd-flex align-items-center',
                                                id: 'curriculumheadingOne',
                                                children: (0, l.jsx)('h5', {
                                                  className: 'mb-0 w-100',
                                                  children: (0, l.jsxs)(
                                                    'button',
                                                    {
                                                      className:
                                                        'd-flex align-items-center p-5 collapse-accordion-toggle collapsed',
                                                      type: 'button',
                                                      'data-bs-toggle':
                                                        'collapse',
                                                      'data-bs-target':
                                                        '#CurriculumcollapseOne',
                                                      'aria-expanded': 'false',
                                                      'aria-controls':
                                                        'CurriculumcollapseOne',
                                                      children: [
                                                        (0, l.jsx)('span', {
                                                          className:
                                                            'me-4 d-flex',
                                                          children: (0, l.jsx)(
                                                            'img',
                                                            {
                                                              src: '/assets/images/svg/accordion-plus.svg',
                                                            }
                                                          ),
                                                        }),
                                                        'Introduction',
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                              (0, l.jsxs)('div', {
                                                id: 'CurriculumcollapseOne',
                                                className: 'collapse',
                                                'aria-labelledby':
                                                  'curriculumheadingOne',
                                                'data-parent':
                                                  '#accordionCurriculum',
                                                children: [
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Introduction to the course',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children:
                                                              '3 question',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('a', {
                                                            href: '#',
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center ',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Introduction',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsx)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: (0, l.jsx)(
                                                          'div',
                                                          {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-lock.svg',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-clock.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Structure of the course',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('a', {
                                                            href: '#',
                                                            className: '',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center ',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-clock.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Required Tools',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 ',
                                                            children:
                                                              '12 lectures',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Get Your Free E-book',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children:
                                                              '3 question',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('a', {
                                                            href: '#',
                                                            className: '',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
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
                                          (0, l.jsxs)('div', {
                                            className:
                                              'border rounded shadow mb-5 overflow-hidden',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className:
                                                  'd-flex align-items-center',
                                                id: 'curriculumheadingTwo',
                                                children: (0, l.jsx)('h5', {
                                                  className: 'mb-0 w-100',
                                                  children: (0, l.jsxs)(
                                                    'button',
                                                    {
                                                      className:
                                                        'd-flex align-items-center p-5 collapse-accordion-toggle collapsed',
                                                      type: 'button',
                                                      'data-bs-toggle':
                                                        'collapse',
                                                      'data-bs-target':
                                                        '#CurriculumcollapseTwo',
                                                      'aria-expanded': 'false',
                                                      'aria-controls':
                                                        'CurriculumcollapseTwo',
                                                      children: [
                                                        (0, l.jsx)('span', {
                                                          className:
                                                            'me-4 d-flex',
                                                          children: (0, l.jsx)(
                                                            'img',
                                                            {
                                                              src: '/assets/images/svg/accordion-plus.svg',
                                                            }
                                                          ),
                                                        }),
                                                        'Design Basics',
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                              (0, l.jsxs)('div', {
                                                id: 'CurriculumcollapseTwo',
                                                className: 'collapse',
                                                'aria-labelledby':
                                                  'curriculumheadingTwo',
                                                'data-parent':
                                                  '#accordionCurriculum',
                                                children: [
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Intro to Design Basics',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('a', {
                                                            href: '#',
                                                            className: '',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center ',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children: 'Layout',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 ',
                                                            children:
                                                              '12 lectures',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children:
                                                              '5 question',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '45 min',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-clock.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Visual hierarchy',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-1',
                                                            children: '30 min',
                                                          }),
                                                          (0, l.jsx)('a', {
                                                            href: '#',
                                                            className: '',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center ',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-clock.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Visual noise',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 ',
                                                            children:
                                                              '12 lectures',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children:
                                                              '5 question',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'badge me-5 py-2',
                                                            children: '45 min',
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-lock.svg',
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/doc-info.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Iconography',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsx)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: (0, l.jsx)(
                                                          'a',
                                                          {
                                                            href: '#',
                                                            className: '',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-play-btn.svg',
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                    className:
                                                      'border-top px-5 py-4 d-md-flex align-items-center ',
                                                    children: [
                                                      (0, l.jsxs)('div', {
                                                        className:
                                                          'd-flex align-items-center me-auto mb-4 mb-md-0',
                                                        children: [
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-clock.svg',
                                                            }),
                                                          }),
                                                          (0, l.jsx)('div', {
                                                            className:
                                                              'accordion-title ms-4',
                                                            children:
                                                              'Typography',
                                                          }),
                                                        ],
                                                      }),
                                                      (0, l.jsx)('div', {
                                                        className:
                                                          'd-flex align-items-center overflow-auto overflow-md-visible flex-shrink-all',
                                                        children: (0, l.jsx)(
                                                          'div',
                                                          {
                                                            className:
                                                              ' d-flex',
                                                            children: (0,
                                                            l.jsx)('img', {
                                                              src: '/assets/images/svg/accordion-lock.svg',
                                                            }),
                                                          }
                                                        ),
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
                                }),
                                (0, l.jsxs)('div', {
                                  id: 'Instructor',
                                  className: 'instructor mb-5',
                                  children: [
                                    (0, l.jsxs)('ul', {
                                      className: 'nav border-bottom h4 mb-5',
                                      children: [
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Overview',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0993\u09ad\u09be\u09b0\u09ad\u09bf\u0989',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link p-4',
                                            href: '#Curriculum',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u0995\u09be\u09b0\u09bf\u0995\u09c1\u09b2\u09be\u09ae',
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('li', {
                                          className: 'nav-item',
                                          children: (0, l.jsxs)('a', {
                                            className: 'nav-link active p-4',
                                            href: '#Instructor',
                                            'data-bs-toggle': 'smooth-scroll',
                                            'data-bs-offset': '0',
                                            children: [
                                              ' ',
                                              ' \u09aa\u09cd\u09b0\u09b6\u09bf\u0995\u09cd\u09b7\u0995',
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)('h3', {
                                      className: 'mb-5',
                                      children: 'About the instructor',
                                    }),
                                    (0, l.jsxs)('div', {
                                      className:
                                        'd-flex align-items-center mb-5',
                                      children: [
                                        (0, l.jsx)('div', {
                                          className:
                                            'd-inline-block rounded-circle border me-5 p-2',
                                          children: (0, l.jsx)('div', {
                                            className: 'avatar',
                                            children: (0, l.jsx)('img', {
                                              alt: '',
                                              src: '/assets/images/banner/a.jpg',
                                              className:
                                                'avatar-img rounded-circle',
                                            }),
                                          }),
                                        }),
                                        (0, l.jsxs)('div', {
                                          className: 'media-body',
                                          children: [
                                            (0, l.jsx)('h4', {
                                              className: 'mb-2',
                                              children: 'Md. Rokibul Hasan',
                                            }),
                                            (0, l.jsx)('span', {
                                              children:
                                                'Full Stack Web Designer & Developer',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)('div', {
                                      className: 'row mb-5',
                                      children: [
                                        (0, l.jsx)('div', {
                                          className:
                                            'col-12 col-md-auto mb-5 mb-md-0 me-5',
                                          children: (0, l.jsxs)('div', {
                                            className:
                                              'd-flex align-items-center',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className: 'me-3 d-flex',
                                                children: (0, l.jsx)('img', {
                                                  src: '/assets/images/svg/instructor-star.svg',
                                                  alt: '',
                                                }),
                                              }),
                                              (0, l.jsx)('p', {
                                                className: 'ins_text',
                                                children:
                                                  '4.87 Instructor rating',
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('div', {
                                          className:
                                            'col-12 col-md-auto mb-5 mb-md-0 me-5',
                                          children: (0, l.jsxs)('div', {
                                            className:
                                              'd-flex align-items-center',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className: 'me-3 d-flex',
                                                children: (0, l.jsx)('img', {
                                                  src: '/assets/images/svg/instructor-review.svg',
                                                  alt: '',
                                                }),
                                              }),
                                              (0, l.jsx)('p', {
                                                className: 'ins_text',
                                                children: '1,533 reviews',
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('div', {
                                          className:
                                            'col-12 col-md-auto mb-5 mb-md-0 me-5',
                                          children: (0, l.jsxs)('div', {
                                            className:
                                              'd-flex align-items-center',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className: 'me-3 d-flex',
                                                children: (0, l.jsx)('img', {
                                                  alt: '',
                                                  src: '/assets/images/svg/instructor-students.svg',
                                                }),
                                              }),
                                              (0, l.jsx)('p', {
                                                className: 'ins_text',
                                                children: '23,912 students',
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, l.jsx)('div', {
                                          className:
                                            'col-12 col-md-auto mb-5 mb-md-0 me-5',
                                          children: (0, l.jsxs)('div', {
                                            className:
                                              'd-flex align-items-center',
                                            children: [
                                              (0, l.jsx)('div', {
                                                className: 'me-3 d-flex',
                                                children: (0, l.jsx)('img', {
                                                  alt: '',
                                                  src: '/assets/images/svg/accordion-play-btn.svg',
                                                }),
                                              }),
                                              (0, l.jsx)('p', {
                                                className: 'ins_text',
                                                children: '29 courses',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)(l.Fragment, {
                                      children: (0, l.jsxs)('div', {
                                        children: [
                                          (0, l.jsx)('p', {
                                            className: 'mb-4 ins-summary',
                                            children:
                                              'Hello, I\'m Md. Rokibul Hasan, a highly skilled and experienced full stack web designer and developer with over 5 years of industry experience. Throughout my career, I have successfully delivered exceptional web experiences and solved complex problems using innovative solutions. I am also the proud founder of "Coding Club Bangladesh," a YouTube channel where I create video lessons to empower and educate students in the field of web development.',
                                          }),
                                          (0, l.jsx)('p', {
                                            className: 'mb-4 ins-summary',
                                            children:
                                              'Skills: Front-end Development: Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React.js, Angular, or Vue.js. I possess a deep understanding of responsive design, cross-browser compatibility, and web accessibility best practices.',
                                          }),
                                          (0, l.jsx)('p', {
                                            className: 'mb-4 ins-summary',
                                            children:
                                              'Back-end Development: Experienced in server-side technologies such as Node.js, Express.js. I have hands-on experience with RESTful APIs, database management (SQL and NoSQL), and efficient server deployment.',
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)('div', {
                              className:
                                'col-lg-4 col-md-12 mt-5 course-enroll-box',
                              children: [
                                (0, l.jsxs)('div', {
                                  className:
                                    'course-des d-block border p-2 shadow mb-5',
                                  children: [
                                    (0, l.jsxs)('a', {
                                      href: 'https://www.youtube.com/c/codingclubbangladesh?sub_confirmation=1',
                                      className:
                                        'd-block sk-thumbnail rounded mb-1',
                                      target: '_blank',
                                      'data-fancybox': '',
                                      children: [
                                        (0, l.jsx)('div', {
                                          className:
                                            'play-video rounded-circle bg-white size-20-all d-inline-flex align-items-center justify-content-center position-absolute center ',
                                          children: (0, l.jsx)('img', {
                                            src: '/assets/images/svg/video-play.svg',
                                            alt: '',
                                          }),
                                        }),
                                        (0, l.jsx)('img', {
                                          className: 'rounded shadow-light-lg',
                                          src: '/assets/images/single-course/single-product.jpg',
                                          alt: '...',
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)('div', {
                                      className:
                                        'pt-5 pb-4 px-5 px-lg-3 px-xl-5',
                                      children: [
                                        (0, l.jsxs)('div', {
                                          className:
                                            'd-flex align-items-center days-left mb-5',
                                          children: [
                                            (0, l.jsx)('img', {
                                              src: '/assets/images/svg/offer-clock.svg',
                                              alt: '',
                                            }),
                                            (0, l.jsx)('span', {
                                              className: 'ms-3',
                                              children: M,
                                            }),
                                          ],
                                        }),
                                        'Off' === A.status
                                          ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                (0, l.jsx)('h2', {
                                                  className: 'mb-3',
                                                  children:
                                                    '\u0995\u09cb\u09b0\u09cd\u09b8 \u09ab\u09bf\u0983',
                                                }),
                                                'On' === Q.status
                                                  ? (0, l.jsxs)('div', {
                                                      className:
                                                        'd-flex align-items-center mb-2 price-of-course',
                                                      children: [
                                                        (0, l.jsxs)('h2', {
                                                          className: 'mb-0',
                                                          children: [
                                                            '\u09f3 ',
                                                            B,
                                                          ],
                                                        }),
                                                        (0, l.jsxs)('del', {
                                                          className: 'ms-3',
                                                          children: [
                                                            '\u09f3 ',
                                                            Q.price,
                                                          ],
                                                        }),
                                                        (0, l.jsxs)('div', {
                                                          className:
                                                            'badge text-white ms-auto fw-normal',
                                                          children: [
                                                            Q.percentage,
                                                            '% \u099b\u09be\u09dc',
                                                          ],
                                                        }),
                                                      ],
                                                    })
                                                  : (0, l.jsx)('label', {
                                                      htmlFor: 'fixedPackage',
                                                      children: (0, l.jsx)(
                                                        'div',
                                                        {
                                                          className:
                                                            'd-flex align-items-center mb-2 price-of-course',
                                                          children: (0, l.jsxs)(
                                                            'h2',
                                                            {
                                                              className: 'mb-0',
                                                              children: [
                                                                ' ',
                                                                (0, l.jsx)(
                                                                  'input',
                                                                  {
                                                                    type: 'radio',
                                                                    checked:
                                                                      'fixed' ===
                                                                      p,
                                                                    value:
                                                                      'fixed',
                                                                    name: 'package',
                                                                    hidden: !0,
                                                                    id: 'fixedPackage',
                                                                  }
                                                                ),
                                                                '\u09f3 ',
                                                                B,
                                                                ' \u099f\u09be\u0995\u09be \u09ae\u09be\u09a4\u09cd\u09b0',
                                                              ],
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                              ],
                                            })
                                          : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                (0, l.jsx)('h2', {
                                                  className: 'mb-3',
                                                  children:
                                                    '\u0995\u09cb\u09b0\u09cd\u09b8 \u09ab\u09bf\u0983',
                                                }),
                                                'On' === Q.status
                                                  ? (0, l.jsx)('button', {
                                                      className: 'btn w-100',
                                                      children: (0, l.jsx)(
                                                        'label',
                                                        {
                                                          className: 'w-100',
                                                          htmlFor:
                                                            'packageFixedPrice',
                                                          children: (0, l.jsxs)(
                                                            'div',
                                                            {
                                                              className:
                                                                'd-flex align-items-center mb-2 price-of-course',
                                                              children: [
                                                                (0, l.jsxs)(
                                                                  'h2',
                                                                  {
                                                                    className:
                                                                      'mb-0',
                                                                    children: [
                                                                      (0,
                                                                      l.jsx)(
                                                                        'input',
                                                                        {
                                                                          type: 'radio',
                                                                          checked:
                                                                            'fixed' ===
                                                                            p,
                                                                          value:
                                                                            'fixed',
                                                                          name: 'package',
                                                                          id: 'packageFixedPrice',
                                                                          onChange:
                                                                            s,
                                                                        }
                                                                      ),
                                                                      ' ',
                                                                      '\u09f3 ',
                                                                      B,
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, l.jsxs)(
                                                                  'del',
                                                                  {
                                                                    className:
                                                                      'ms-3',
                                                                    children: [
                                                                      '\u09f3 ',
                                                                      Q.price,
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, l.jsxs)(
                                                                  'div',
                                                                  {
                                                                    className:
                                                                      'badge text-white ms-auto fw-normal',
                                                                    children: [
                                                                      Q.percentage,
                                                                      '% \u099b\u09be\u09dc',
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    })
                                                  : (0, l.jsx)('div', {
                                                      className:
                                                        'd-flex align-items-center mb-2 price-of-course',
                                                      children: (0, l.jsx)(
                                                        'button',
                                                        {
                                                          className: 'btn',
                                                          children: (0, l.jsx)(
                                                            'label',
                                                            {
                                                              style: {
                                                                cursor:
                                                                  'pointer',
                                                              },
                                                              htmlFor:
                                                                'fixedPrice',
                                                              children: (0,
                                                              l.jsxs)('h2', {
                                                                className:
                                                                  'mb-0',
                                                                children: [
                                                                  (0, l.jsx)(
                                                                    'input',
                                                                    {
                                                                      type: 'radio',
                                                                      checked:
                                                                        'fixed' ===
                                                                        p,
                                                                      onChange:
                                                                        s,
                                                                      value:
                                                                        'fixed',
                                                                      name: 'selectedPackage',
                                                                      id: 'fixedPrice',
                                                                    }
                                                                  ),
                                                                  '\u09f3 ',
                                                                  B,
                                                                  ' \u099f\u09be\u0995\u09be \u09ae\u09be\u09a4\u09cd\u09b0',
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                (0, l.jsx)('h2', {
                                                  className: 'mt-4',
                                                  children:
                                                    '\u09b8\u09be\u09ac\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09aa\u09b6\u09a8\u0983',
                                                }),
                                                (0, l.jsx)('div', {
                                                  className:
                                                    'd-flex align-items-cente mb-2 mt-3 price-of-course price_of_course_subscription',
                                                  children:
                                                    null === A ||
                                                    void 0 === A ||
                                                    null === (C = A.packages) ||
                                                    void 0 === C
                                                      ? void 0
                                                      : C.map(function (e) {
                                                          return (0,
                                                          l.jsx)('div', { className: 'subscription_radio d-grid', children: (0, l.jsx)('button', { className: 'btn', style: { width: '100%', outline: 'none', border: 'none' }, children: (0, l.jsx)('label', { htmlFor: e.name, style: { cursor: 'pointer', width: '100%' }, children: (0, l.jsxs)('div', { className: 'radio_box', children: [(0, l.jsxs)('div', { className: 'd-flex align-items-center mb-2', children: [(0, l.jsx)('input', { type: 'radio', checked: p === e.name, onChange: s, value: e.name, name: 'selectedPackage', id: e.name }), (0, l.jsxs)('p', { className: 'mb-0 s_name', children: ['Name: ', e.name] })] }), (0, l.jsxs)('div', { className: 'd-flex justify-content-between s_font', children: [(0, l.jsxs)('p', { children: ['\u09ae\u09cb\u099f \u09ae\u09c2\u09b2\u09cd\u09af: ', (0, l.jsxs)('b', { children: ['\u09f3', e.totalPrice] })] }), (0, l.jsxs)('p', { children: ['\u0987\u0989\u09a8\u09bf\u099f \u09ae\u09c2\u09b2\u09cd\u09af: ', (0, l.jsxs)('b', { children: ['\u09f3', e.unitPrice] })] })] }), (0, l.jsxs)('div', { className: 'd-flex justify-content-between s_font', children: [(0, l.jsxs)('p', { children: ['\u0995\u09bf\u09b8\u09cd\u09a4\u09bf: ', (0, l.jsx)('b', { children: e.installments })] }), (0, l.jsxs)('p', { children: ['\u09aa\u09cd\u09b0\u0995\u09be\u09b0: ', (0, l.jsx)('b', { children: e.type })] })] })] }) }) }) });
                                                        }),
                                                }),
                                              ],
                                            }),
                                        (0, l.jsx)('button', {
                                          className:
                                            'buy-btn btn btn-primary btn-block mb-3',
                                          type: 'button',
                                          name: 'button',
                                          onClick: function (s) {
                                            s.preventDefault(),
                                              Y._id
                                                ? (b(!0),
                                                  h.Z.post(
                                                    '/v1/courses/enroll',
                                                    { id: I, type: p }
                                                  )
                                                    .then(function (s) {
                                                      var a = s.data;
                                                      (
                                                        null === a ||
                                                        void 0 === a
                                                          ? void 0
                                                          : a._id
                                                      )
                                                        ? e.push(
                                                            '/checkout/'.concat(
                                                              a._id
                                                            )
                                                          )
                                                        : console.log(a);
                                                    })
                                                    .catch(console.log)
                                                    .finally(function () {
                                                      return b(!1);
                                                    }))
                                                : e.push(
                                                    '/login?redirect='.concat(
                                                      e.asPath
                                                    )
                                                  );
                                          },
                                          children:
                                            '\u098f\u09a8\u09b0\u09cb\u09b2 \u0995\u09b0\u09c1\u09a8',
                                        }),
                                        (0, l.jsxs)('ul', {
                                          className:
                                            'list-group list-group-flush',
                                          children: [
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-duration-clock.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsxs)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children: [
                                                    ' ',
                                                    '\u09b8\u09ae\u09df\u09b8\u09c0\u09ae\u09be',
                                                  ],
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [' ', ' ', z],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-lecture.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsxs)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children: [
                                                    ' ',
                                                    '\u09b2\u09c7\u0995\u099a\u09be\u09b0 \u09b8\u0982\u0996\u09cd\u09af\u09be',
                                                  ],
                                                }),
                                                (0, l.jsx)('span', {
                                                  children: H,
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-enroll.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsxs)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children: [
                                                    ' ',
                                                    '\u09a8\u09a5\u09bf\u09ad\u09c1\u0995\u09cd\u09a4',
                                                  ],
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [
                                                    ' ',
                                                    null === D || void 0 === D
                                                      ? void 0
                                                      : D.length,
                                                    ' \u099c\u09a8',
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-language.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsxs)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children: [
                                                    ' ',
                                                    '\u0995\u09cb\u09b0\u09cd\u09b8\u09c7\u09b0 \u09ad\u09be\u09b7\u09be',
                                                  ],
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [
                                                    ' ',
                                                    '\u09ac\u09be\u0982\u09b2\u09be',
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-skill-level.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsx)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children:
                                                    '\u09a6\u0995\u09cd\u09b7\u09a4\u09be \u09b8\u09cd\u09a4\u09b0',
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [' ', V],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-deadline.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsx)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children:
                                                    '\u09b6\u09c7\u09b7 \u09a4\u09be\u09b0\u09bf\u0996',
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [' ', W],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsxs)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-3',
                                              children: [
                                                (0, l.jsx)('div', {
                                                  className: ' d-flex icon-uxs',
                                                  children: (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/course-certificate-badge.svg',
                                                    alt: '',
                                                  }),
                                                }),
                                                (0, l.jsx)('h6', {
                                                  className:
                                                    'mb-0 ms-3 me-auto',
                                                  children:
                                                    '\u09b8\u09a8\u09a6\u09aa\u09a4\u09cd\u09b0',
                                                }),
                                                (0, l.jsxs)('span', {
                                                  children: [' ', X],
                                                }),
                                              ],
                                            }),
                                            (0, l.jsx)('li', {
                                              className:
                                                'list-group-item d-flex align-items-center py-4',
                                              children: (0, l.jsxs)('a', {
                                                href: '#',
                                                className:
                                                  'mx-auto d-flex align-items-center mt-2',
                                                children: [
                                                  (0, l.jsx)('img', {
                                                    src: '/assets/images/svg/share.svg',
                                                    alt: '',
                                                  }),
                                                  (0, l.jsx)('span', {
                                                    className: 'ms-3',
                                                    children:
                                                      '\u098f\u0987 \u0995\u09cb\u09b0\u09cd\u09b8 \u09b6\u09c7\u09af\u09bc\u09be\u09b0 \u0995\u09b0\u09c1\u09a8',
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
                                (0, l.jsxs)('div', {
                                  className:
                                    'd-block p-5 shadow leatest-course-box',
                                  children: [
                                    (0, l.jsx)('h3', {
                                      className: 'mb-5',
                                      children:
                                        '\u09b8\u09b0\u09cd\u09ac\u09be\u09a7\u09bf\u0995 \u09aa\u099b\u09a8\u09cd\u09a6\u0995\u09c3\u09a4 \u0995\u09cb\u09b0\u09cd\u09b8\u09b8\u09ae\u09c2\u09b9',
                                    }),
                                    (0, l.jsx)('ul', {
                                      className: 'list-group list-group-flush',
                                      children: k.map(function (s) {
                                        return (0,
                                        l.jsx)(n(), { href: '/courses/'.concat(s.slug), children: (0, l.jsx)('a', { className: 'text-decoration-none', children: (0, l.jsxs)('li', { className: 'media d-flex align-items-center mb-5', children: [(0, l.jsx)('div', { className: 'w-100p d-block me-4', style: { maxWidth: '150px' }, children: (0, l.jsx)('img', { alt: '', src: 'https://techanalyzen.libertysailingschool.net/files/thumb/course/'.concat(s.thumbnail), className: 'avatar-img w-100 rounded' }) }), (0, l.jsxs)('div', { className: 'media-body flex-grow-1', children: [(0, l.jsx)('div', { className: 'd-block', children: (0, l.jsx)('h6', { className: ' mb-3', children: s.title }) }), (0, l.jsx)('del', { className: 'me-4 mb-5', children: s.discount.price }), (0, l.jsxs)('ins', { className: 'mb-5 ', children: [' \u09f3 ', s.price] })] })] }) }) });
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
                (0, l.jsx)(x.Z, {}),
              ],
            })
          : void 0;
      };
    },
    9008: function (s, e, a) {
      s.exports = a(5443);
    },
  },
  function (s) {
    s.O(0, [2332, 9774, 2888, 179], function () {
      return (e = 2468), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
