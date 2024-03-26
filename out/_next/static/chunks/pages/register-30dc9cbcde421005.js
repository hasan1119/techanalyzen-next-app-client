(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    922: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/register',
        function () {
          return r(3233);
        },
      ]);
    },
    3233: function (e, s, r) {
      'use strict';
      r.r(s),
        r.d(s, {
          default: function () {
            return P;
          },
        });
      var n = r(6042),
        a = r(9396),
        t = r(5893),
        i = r(9008),
        l = r.n(i),
        o = r(1163),
        c = r(7294),
        d = r(3152),
        u = r(3928),
        m = r(7568),
        h = r(414),
        p = r(1664),
        f = r.n(p),
        x = r(8193),
        v = r(7474),
        j = r(3589),
        g = function (e) {
          var s = e.setStep,
            r = e.userInfo,
            i = e.setUserInfo,
            l = e.error,
            o = e.setError,
            d = function (e) {
              var s = [],
                r = !0;
              return e
                ? (e.length < 8 &&
                    (s.push('Password must contains 8 characters'), (r = !1)),
                  /[a-z]/.test(e) || (s.push('1 lowercase'), (r = !1)),
                  /[A-Z]/.test(e) || (s.push('1 uppercase'), (r = !1)),
                  /\d/.test(e) || (s.push('a number'), (r = !1)),
                  /[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(e) ||
                    (s.push('a special character'), (r = !1)),
                  s.length
                    ? o(
                        (0, a.Z)((0, n.Z)({}, l), {
                          password: s.join(', ') + '!',
                        })
                      )
                    : o((0, a.Z)((0, n.Z)({}, l), { password: '' })),
                  r)
                : (s.push('Password is required!'),
                  (r = !1),
                  o((0, a.Z)((0, n.Z)({}, l), { password: s.join(', ') })),
                  r);
            },
            u = function (e) {
              var s = e.firstName,
                r = e.lastName,
                a = e.email,
                t = e.password,
                i = e.gender,
                c = e.phone,
                u = e.confirmPassword,
                m = e.username,
                h = (e.referredBy, !0),
                p = (0, n.Z)({}, l);
              return (
                s || ((p.firstName = 'First name is required!'), (h = !1)),
                r || ((p.lastName = 'Last name is required!'), (h = !1)),
                c || ((p.phone = 'Phone is required!'), (h = !1)),
                a
                  ? (0, j.o)(a) || ((p.email = 'Email is not valid'), (h = !1))
                  : ((p.email = 'Email is required!'), (h = !1)),
                d(t) || ((p.password = 'Password is not strong!'), (h = !1)),
                t !== u &&
                  ((p.confirmPassword = "Password doesn't match!"), (h = !1)),
                i || ((p.gender = 'Gender is required!'), (h = !1)),
                m
                  ? m.length < 3 &&
                    ((p.username = 'Username must be at least 4 character!'),
                    (h = !1))
                  : ((p.username = 'Username is required!'), (h = !1)),
                o(p),
                h
              );
            },
            p = function (e) {
              var s = e.target.name,
                t = e.target.value;
              ('password' !== s && 'confirmPassword' !== s) ||
                (clearTimeout(S.current),
                (S.current = setTimeout(function () {
                  'password' === s &&
                    d(t) &&
                    o((0, a.Z)((0, n.Z)({}, l), { password: '' }));
                  'confirmPassword' === s &&
                    (r.password !== t
                      ? o(
                          (0, a.Z)((0, n.Z)({}, l), {
                            confirmPassword: "Password does't match",
                          })
                        )
                      : o((0, a.Z)((0, n.Z)({}, l), { confirmPassword: '' })));
                }, 800))),
                'email' === s &&
                  (clearTimeout(S.current),
                  (S.current = setTimeout(
                    (0, m.Z)(function () {
                      var e, s;
                      return (0, h.__generator)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              r.trys.push([0, 4, , 5]),
                              (0, j.o)(t)
                                ? [
                                    4,
                                    v.Z.post('/auth/v1/check/email', {
                                      email: t,
                                    }),
                                  ]
                                : [3, 2]
                            );
                          case 1:
                            return (
                              'error' === (e = r.sent().data).status
                                ? o(
                                    (0, a.Z)((0, n.Z)({}, l), {
                                      email: e.email,
                                    })
                                  )
                                : 'success' === e.status
                                ? o((0, a.Z)((0, n.Z)({}, l), { email: '' }))
                                : o(
                                    (0, a.Z)((0, n.Z)({}, l), {
                                      email: 'Something went wrong!',
                                    })
                                  ),
                              [3, 3]
                            );
                          case 2:
                            o(
                              (0, a.Z)((0, n.Z)({}, l), {
                                email: 'Invalid email address',
                              })
                            ),
                              (r.label = 3);
                          case 3:
                            return [3, 5];
                          case 4:
                            return (s = r.sent()), console.log(s), [3, 5];
                          case 5:
                            return [2];
                        }
                      });
                    }),
                    800
                  ))),
                'username' === s &&
                  (clearTimeout(S.current),
                  (S.current = setTimeout(
                    (0, m.Z)(function () {
                      var e, s;
                      return (0, h.__generator)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              r.trys.push([0, 4, , 5]),
                              t.length >= 3
                                ? [
                                    4,
                                    v.Z.post('/auth/v1/check/username', {
                                      username: t,
                                    }),
                                  ]
                                : [3, 2]
                            );
                          case 1:
                            return (
                              'error' === (e = r.sent().data).status
                                ? o(
                                    (0, a.Z)((0, n.Z)({}, l), {
                                      username: e.username,
                                    })
                                  )
                                : 'success' === e.status
                                ? o((0, a.Z)((0, n.Z)({}, l), { username: '' }))
                                : o(
                                    (0, a.Z)((0, n.Z)({}, l), {
                                      username: 'Something went wrong!',
                                    })
                                  ),
                              [3, 3]
                            );
                          case 2:
                            o(
                              (0, a.Z)((0, n.Z)({}, l), {
                                username:
                                  'Username needs to be minimum 3 characters',
                              })
                            ),
                              (r.label = 3);
                          case 3:
                            return [3, 5];
                          case 4:
                            return (s = r.sent()), console.log(s), [3, 5];
                          case 5:
                            return [2];
                        }
                      });
                    }),
                    800
                  )));
              var c = (0, n.Z)({}, l);
              (c[e.target.name] = ''), o(c);
              var u = (0, n.Z)({}, r);
              (u[s] = t), i(u);
            },
            g = (0, c.useState)(!1),
            N = g[0],
            Z = g[1],
            w = (0, c.useState)(!1),
            b = w[0],
            _ = w[1],
            y = (0, c.useRef)(),
            P = (0, c.useRef)(),
            I = (0, c.useState)(!1),
            E = (I[0], I[1]),
            S = (0, c.useRef)();
          function T() {
            return (
              (T = (0, m.Z)(function (e) {
                return (0, h.__generator)(this, function (a) {
                  return (
                    e.preventDefault(),
                    u(r) &&
                      (E(!0),
                      v.Z.post('/auth/v1/send/email', (0, n.Z)({}, r))
                        .then(function (e) {
                          var a = e.data;
                          'success' === a.status &&
                            (i((0, n.Z)({}, r, a.userInfo)), s('EMAIL_OTP'));
                        })
                        .catch(function (e) {
                          var s = e.response.data;
                          'error' === s.status
                            ? o((0, n.Z)({}, l, s))
                            : console.log(s);
                        })
                        .finally(function () {
                          E(!1);
                        })),
                    [2]
                  );
                });
              })),
              T.apply(this, arguments)
            );
          }
          var O = function (e) {
            'password' === e
              ? (console.log(y.current.type, N),
                (y.current.type = N ? 'password' : 'text'),
                Z(!N))
              : (_(!b), (P.current.type = b ? 'password' : 'text'));
          };
          return (0, t.jsxs)('div', {
            className: 'login_container',
            children: [
              (0, t.jsx)('div', {
                className: 'img',
                children: (0, t.jsx)('img', {
                  src: '/assets/images/auth/email-form-img.png',
                }),
              }),
              (0, t.jsx)('div', {
                className: 'login-content login-content-info',
                children: (0, t.jsxs)('form', {
                  className: 'info_form',
                  onSubmit: function (e) {
                    return T.apply(this, arguments);
                  },
                  children: [
                    (0, t.jsx)('div', {
                      className: 'title',
                      children: (0, t.jsx)('h2', {
                        children:
                          '\u09ac\u09cd\u09af\u0995\u09cd\u09a4\u09bf\u0997\u09a4 \u09a4\u09a5\u09cd\u09af',
                      }),
                    }),
                    (0, t.jsxs)('div', {
                      className: 'row',
                      children: [
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', { children: 'First name' }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsx)('div', {
                                  className: 'input',
                                  children: (0, t.jsx)('input', {
                                    className: 'input',
                                    onChange: p,
                                    value: r.firstName || '',
                                    type: 'text',
                                    name: 'firstName',
                                    id: 'firstName',
                                    placeholder: 'Enter your first name',
                                  }),
                                }),
                              }),
                              l.firstName &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.firstName || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', { children: 'Last name' }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsx)('div', {
                                  className: 'input',
                                  children: (0, t.jsx)('input', {
                                    className: 'input',
                                    onChange: p,
                                    value: r.lastName || '',
                                    type: 'text',
                                    name: 'lastName',
                                    id: 'lastName',
                                    placeholder: 'Enter your Last name',
                                  }),
                                }),
                              }),
                              l.lastName &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.lastName || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', {
                                htmlFor: 'phone',
                                children: 'Phone',
                              }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsx)('div', {
                                  className: 'input ',
                                  children: (0, t.jsx)('input', {
                                    disabled: !0,
                                    className: 'input disable',
                                    onChange: p,
                                    type: 'number',
                                    id: 'phone',
                                    readOnly: !0,
                                    value: r.phone || '',
                                    name: 'phone',
                                    placeholder: 'Enter your phone',
                                  }),
                                }),
                              }),
                              l.phone &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.phone || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', {
                                htmlFor: 'username',
                                children: 'Username',
                              }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsx)('div', {
                                  className: 'input',
                                  children: (0, t.jsx)('input', {
                                    className: 'input',
                                    type: 'text',
                                    id: 'username',
                                    onChange: p,
                                    value: r.username || '',
                                    name: 'username',
                                    placeholder: 'Enter your username',
                                  }),
                                }),
                              }),
                              l.username &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.username || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-12 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', {
                                htmlFor: 'email',
                                children: 'Email',
                              }),
                              (0, t.jsx)('div', {
                                className: 'input_container input_info',
                                children: (0, t.jsx)('div', {
                                  className: 'input',
                                  children: (0, t.jsx)('input', {
                                    className: 'input',
                                    name: 'email',
                                    type: 'text',
                                    id: 'email',
                                    onChange: p,
                                    value: r.email || '',
                                    placeholder: 'Enter your email',
                                  }),
                                }),
                              }),
                              l.email &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.email || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', { children: 'Password' }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsxs)('div', {
                                  className: 'input ',
                                  children: [
                                    (0, t.jsx)('input', {
                                      type: 'password',
                                      ref: y,
                                      value: r.password || '',
                                      name: 'password',
                                      onChange: p,
                                      id: 'password',
                                      placeholder: 'Enter password',
                                      className: 'pass',
                                    }),
                                    N
                                      ? (0, t.jsx)('div', {
                                          className: 'toggle_pass',
                                          onClick: function () {
                                            return O('password');
                                          },
                                          children: (0, t.jsx)(x.I0d, {}),
                                        })
                                      : (0, t.jsx)('div', {
                                          className: 'toggle_pass',
                                          onClick: function () {
                                            return O('password');
                                          },
                                          children: (0, t.jsx)(x.Zju, {}),
                                        }),
                                  ],
                                }),
                              }),
                              l.password &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.password || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-lg-6 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', {
                                children: 'Confirm password',
                              }),
                              (0, t.jsx)('div', {
                                className: 'input_container',
                                children: (0, t.jsxs)('div', {
                                  className: 'input',
                                  children: [
                                    (0, t.jsx)('input', {
                                      className: 'pass',
                                      ref: P,
                                      value: r.confirmPassword || '',
                                      type: 'password',
                                      id: 'confirmPassword',
                                      onChange: p,
                                      name: 'confirmPassword',
                                      placeholder: 'Enter password again',
                                    }),
                                    b
                                      ? (0, t.jsx)('div', {
                                          className: 'toggle_pass',
                                          onClick: O,
                                          children: (0, t.jsx)(x.I0d, {}),
                                        })
                                      : (0, t.jsx)('div', {
                                          className: 'toggle_pass',
                                          onClick: function () {
                                            return O('confirmPassword');
                                          },
                                          children: (0, t.jsx)(x.Zju, {}),
                                        }),
                                  ],
                                }),
                              }),
                              l.confirmPassword &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.confirmPassword || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-12 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form-group ',
                            children: [
                              (0, t.jsx)('label', { children: 'Gender' }),
                              (0, t.jsxs)('div', {
                                className: 'mt-3 d-flex ',
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'check_gender me-5',
                                    children: (0, t.jsxs)('div', {
                                      className: 'maleBox ',
                                      children: [
                                        (0, t.jsx)('input', {
                                          defaultChecked: 'male' === r.gender,
                                          type: 'radio',
                                          name: 'gender',
                                          onChange: p,
                                          value: 'male',
                                          id: 'male',
                                        }),
                                        (0, t.jsx)('label', {
                                          className: 'status-label',
                                          htmlFor: 'male',
                                          children: 'Male',
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)('div', {
                                    className: 'check_gender ',
                                    children: (0, t.jsxs)('div', {
                                      className: 'femaleBox ',
                                      children: [
                                        (0, t.jsx)('input', {
                                          defaultChecked: 'female' === r.gender,
                                          type: 'radio',
                                          name: 'gender',
                                          value: 'female',
                                          onChange: p,
                                          id: 'female',
                                        }),
                                        (0, t.jsx)('label', {
                                          className: 'status-label',
                                          htmlFor: 'female',
                                          children: 'Female',
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.gender &&
                                (0, t.jsx)('div', {
                                  className: 'errorMsg',
                                  children: l.gender || '',
                                }),
                            ],
                          }),
                        }),
                        (0, t.jsx)('div', {
                          className: 'col-12 my-3',
                          children: (0, t.jsxs)('div', {
                            className: 'form_group',
                            children: [
                              (0, t.jsx)('label', {
                                htmlFor: 'referredBy',
                                children: 'Referral Code (Optional)',
                              }),
                              (0, t.jsxs)('div', {
                                className: 'input_container pe-5',
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'input',
                                    children: (0, t.jsx)('input', {
                                      value: r.referredBy || '',
                                      type: 'text',
                                      id: 'referredBy',
                                      onChange: p,
                                      className: '',
                                      name: 'referredBy',
                                      placeholder: 'Enter ReferCode',
                                    }),
                                  }),
                                  l.referredBy &&
                                    (0, t.jsx)('div', {
                                      className: 'errorMsg',
                                      children: l.referredBy || '',
                                    }),
                                  l.common &&
                                    (0, t.jsx)('div', {
                                      className: 'errorMsg',
                                      children: l.common || '',
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)('button', {
                      type: 'submit',
                      className: 'common_btn',
                      children:
                        '\u098f\u0997\u09bf\u09df\u09c7 \u09af\u09be\u09a8',
                    }),
                    (0, t.jsxs)('p', {
                      className:
                        'w-100 jump_to d-flex align-items-center justify-content-center',
                      children: [
                        'Already have an account?',
                        ' ',
                        (0, t.jsx)(f(), {
                          href: '/signin',
                          children: (0, t.jsx)('a', { children: 'Login' }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        N = r(9473),
        Z = r(607);
      var w = function (e) {
          var s = e.userInfo,
            r = e.setUserInfo,
            i = e.error,
            l = e.setError,
            d = e.setStep,
            u = function (e) {
              var s = e.firstName,
                r = e.lastName,
                t = e.email,
                o = e.password,
                c = e.gender,
                d = e.confirmPassword,
                u = e.username,
                m = (e.referredBy, !0);
              return (
                s ||
                  (l(
                    (0, a.Z)((0, n.Z)({}, i), {
                      firstName: 'First name is required!',
                    })
                  ),
                  (m = !1)),
                r ||
                  (l(
                    (0, a.Z)((0, n.Z)({}, i), {
                      lastName: 'Last name is required!',
                    })
                  ),
                  (m = !1)),
                t
                  ? (0, j.o)(t) ||
                    (l(
                      (0, a.Z)((0, n.Z)({}, i), { email: 'Email is not valid' })
                    ),
                    (m = !1))
                  : (l(
                      (0, a.Z)((0, n.Z)({}, i), { email: 'Email is required!' })
                    ),
                    (m = !1)),
                (function (e) {
                  return e
                    ? e.length < 8
                      ? (l(
                          (0, a.Z)((0, n.Z)({}, i), {
                            password: 'Password needs to be 8 characters',
                          })
                        ),
                        !1)
                      : /[a-z]/.test(e)
                      ? /[A-Z]/.test(e)
                        ? /\d/.test(e)
                          ? /[~`!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(e)
                            ? (l((0, a.Z)((0, n.Z)({}, i), { password: '' })),
                              !0)
                            : (l(
                                (0, a.Z)((0, n.Z)({}, i), {
                                  password:
                                    'Password must have at least one special character',
                                })
                              ),
                              !1)
                          : (l(
                              (0, a.Z)((0, n.Z)({}, i), {
                                password:
                                  'Password must have at least one Number',
                              })
                            ),
                            !1)
                        : (l(
                            (0, a.Z)((0, n.Z)({}, i), {
                              password:
                                'Password must have at least one uppercase',
                            })
                          ),
                          !1)
                      : (l(
                          (0, a.Z)((0, n.Z)({}, i), {
                            password:
                              'Password must have at least one lowercase',
                          })
                        ),
                        !1)
                    : (l(
                        (0, a.Z)((0, n.Z)({}, i), {
                          password: 'Password is required!',
                        })
                      ),
                      !1);
                })(o) || (m = !1),
                o !== d &&
                  (l(
                    (0, a.Z)((0, n.Z)({}, i), {
                      confirmPassword: "Password doesn't match",
                    })
                  ),
                  (m = !1)),
                c ||
                  (l(
                    (0, a.Z)((0, n.Z)({}, i), { gender: 'Gender is required!' })
                  ),
                  (m = !1)),
                u
                  ? u.length < 3 &&
                    (l(
                      (0, a.Z)((0, n.Z)({}, i), {
                        username: 'Username must be at least 4 charectar!',
                      })
                    ),
                    (m = !1))
                  : (l(
                      (0, a.Z)((0, n.Z)({}, i), {
                        username: 'Username is required!',
                      })
                    ),
                    (m = !1)),
                m
              );
            },
            p = (0, c.useState)(0),
            f = p[0],
            g = p[1],
            w = (0, c.useRef)(),
            b = (0, c.useState)(''),
            _ = b[0],
            y = b[1],
            P = (0, N.I0)(),
            I = (0, o.useRouter)();
          function E() {
            return (
              (E = (0, m.Z)(function (e) {
                return (0, h.__generator)(this, function (t) {
                  return (
                    e.preventDefault(),
                    u(s) &&
                      v.Z.post('/auth/v1/send/email', (0, n.Z)({}, s))
                        .then(function (e) {
                          var a = e.data;
                          'success' === a.status &&
                            (r((0, n.Z)({}, s, a.userInfo)),
                            g(30),
                            (w.current = setInterval(function () {
                              g(function (e) {
                                return e - 1;
                              });
                            }, 1e3)),
                            l({}));
                        })
                        .catch(function (e) {
                          var s = e.response.data;
                          'error' === s.status &&
                            l(
                              (0, a.Z)((0, n.Z)({}, i), {
                                emailOTP: s.email || s.common,
                              })
                            );
                        }),
                    [2]
                  );
                });
              })),
              E.apply(this, arguments)
            );
          }
          return (
            (0, c.useEffect)(function () {
              w.current = setInterval(function () {
                g(function (e) {
                  return e - 1;
                });
              }, 1e3);
            }, []),
            (0, c.useEffect)(
              function () {
                f <= 0 && clearInterval(w.current);
              },
              [f]
            ),
            (0, t.jsxs)('div', {
              className: 'login_container',
              children: [
                (0, t.jsx)('div', {
                  className: 'img',
                  children: (0, t.jsx)('img', {
                    src: '/assets/images/auth/email-verification.png',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'login-content',
                  children: (0, t.jsxs)('form', {
                    onSubmit: function (e) {
                      e.preventDefault();
                      try {
                        var r =
                            ('number' === typeof (c = Number(_)) &&
                              (c = c.toString()),
                            'string' === typeof c &&
                              4 === c.length &&
                              !!/^\d+$/.test(c)),
                          t = ((o = s.phone), /^01[0-9]{9}$/.test(o));
                        r && t
                          ? v.Z.post(
                              '/auth/v1/verify/email',
                              (0, a.Z)((0, n.Z)({}, s), { verifyCode: _ })
                            )
                              .then(function (e) {
                                var s = e.data;
                                return (
                                  console.log(s),
                                  P((0, Z.x4)(s.user)),
                                  I.push('/dashboard')
                                );
                              })
                              .catch(function (e) {
                                var s = e.response;
                                return console.log(s);
                              })
                          : l(
                              (0, a.Z)((0, n.Z)({}, i), {
                                emailOTP: 'Invalid OTP',
                              })
                            );
                      } catch (d) {
                        console.log(d);
                      }
                      var o, c;
                    },
                    className: 'form',
                    children: [
                      (0, t.jsx)('div', {
                        className: 'title',
                        children: (0, t.jsx)('h2', {
                          children:
                            '\u0987-\u09ae\u09c7\u0987\u09b2 \u09ad\u09c7\u09b0\u09bf\u09ab\u09bf\u0995\u09c7\u09b6\u09a8',
                        }),
                      }),
                      (0, t.jsxs)('div', {
                        className: 'form_group',
                        children: [
                          (0, t.jsx)('label', {
                            htmlFor: '',
                            children:
                              '\u0987-\u09ae\u09c7\u0987\u09b2\u09c7 \u09aa\u09be\u09a0\u09be\u09a8\u09cb \u09ea \u09a1\u09bf\u099c\u09bf\u099f\u09c7\u09b0 \u0995\u09cb\u09a1\u099f\u09bf \u09b2\u09bf\u0996\u09c1\u09a8',
                          }),
                          (0, t.jsx)('div', {
                            className: 'input_container',
                            children: (0, t.jsx)('div', {
                              className: 'input',
                              children: (0, t.jsx)('input', {
                                maxLength: '4',
                                placeholder:
                                  '\u098f\u0996\u09be\u09a8\u09c7 \u0995\u09cb\u09a1 \u09a6\u09bf\u09a8',
                                className: 'input',
                                type: 'number',
                                value: _,
                                onChange: function (e) {
                                  l(
                                    (0, a.Z)((0, n.Z)({}, i), { emailOTP: '' })
                                  ),
                                    y(e.target.value.trim());
                                },
                                name: 'emailOTP',
                              }),
                            }),
                          }),
                          i.emailOTP &&
                            (0, t.jsx)('div', {
                              className: 'errorMsg',
                              children: i.emailOTP,
                            }),
                        ],
                      }),
                      (0, t.jsx)('button', {
                        type: 'submit',
                        className: 'common_btn otp-btn',
                        children:
                          '\u09ad\u09c7\u09b0\u09bf\u09ab\u09be\u0987 & \u09b8\u09be\u0987\u09a8-\u0987\u09a8',
                      }),
                      (0, t.jsxs)('div', {
                        className: 'resend_otp',
                        children: [
                          (0, t.jsx)('p', {
                            children:
                              '\u0995\u09cb\u09a8\u09cb \u0995\u09cb\u09a1 \u09aa\u09be\u09a8\u09a8\u09bf?',
                          }),
                          f > 0
                            ? (0, t.jsxs)('p', {
                                children: [
                                  '\u0986\u09ac\u09be\u09b0 \u0985\u09a8\u09c1\u09b0\u09cb\u09a7 \u099c\u09be\u09a8\u09be\u09a4\u09c7 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8',
                                  (0, t.jsxs)('span', {
                                    children: [
                                      f,
                                      ' \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1',
                                    ],
                                  }),
                                ],
                              })
                            : (0, t.jsx)('button', {
                                onClick: function (e) {
                                  return E.apply(this, arguments);
                                },
                                type: 'button',
                                className: 'resend_btn',
                                children:
                                  '\u09aa\u09c1\u09a8\u09b0\u09be\u09df OTP \u09aa\u09be\u09a0\u09be\u09a8',
                              }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'forget_number wrong_number_box',
                        children: [
                          (0, t.jsx)('p', {
                            children:
                              '\u0987-\u09ae\u09c7\u0987\u09b2 \u09ad\u09c1\u09b2 \u09b9\u09df\u09a8\u09bf \u09a4\u09cb?',
                          }),
                          (0, t.jsxs)('div', {
                            className: 'edit_number',
                            children: [
                              (0, t.jsx)('span', {
                                className: 'edit_userinfo',
                                children: s.email,
                              }),
                              (0, t.jsxs)('span', {
                                onClick: function () {
                                  d('EMAIL');
                                },
                                style: { cursor: 'pointer', color: '#e91e63' },
                                children: [
                                  (0, t.jsx)(x.QML, {}),
                                  ' \u0987-\u09ae\u09c7\u0987\u09b2 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u0995\u09b0\u09c1\u09a8',
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
            })
          );
        },
        b = function (e) {
          var s = e.setStep,
            r = e.setUserInfo,
            i = e.userInfo,
            l = (e.device, e.error),
            o = e.loading,
            d = e.setLoading,
            u = e.setError,
            p = (0, c.useRef)(),
            x = (0, c.useRef)();
          function g() {
            return (
              (g = (0, m.Z)(function (e) {
                return (0, h.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        e.preventDefault(),
                        (0, j.A)(i.phone)
                          ? (d(!0),
                            [
                              4,
                              v.Z.post('/auth/v1/send/sms', { phone: i.phone })
                                .then(function (e) {
                                  var a = e.data;
                                  console.log(a),
                                    r((0, n.Z)({}, i, a.userInfo)),
                                    s('SMS_OTP');
                                })
                                .catch(function (e) {
                                  var s = e.response.data;
                                  'waiting' === s.status
                                    ? ((x.current = s.duration),
                                      (p.current = setInterval(function () {
                                        x.current < 1
                                          ? (clearInterval(p.current),
                                            u(
                                              (0, a.Z)((0, n.Z)({}, l), {
                                                phone: '',
                                              })
                                            ))
                                          : ((x.current = x.current - 1),
                                            u(
                                              (0, a.Z)((0, n.Z)({}, l), {
                                                phone: 'Please wait '.concat(
                                                  x.current,
                                                  ' seconds'
                                                ),
                                              })
                                            ));
                                      }, 1e3)))
                                    : 'exist' === s.status &&
                                      u(
                                        (0, a.Z)((0, n.Z)({}, l), {
                                          phone:
                                            'User already exist with the number! please login',
                                        })
                                      );
                                })
                                .finally(function () {
                                  d(!1);
                                }),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return t.sent(), [3, 3];
                    case 2:
                      u(
                        (0, a.Z)((0, n.Z)({}, l), {
                          phone: 'Invalid Phone Number',
                        })
                      ),
                        (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              })),
              g.apply(this, arguments)
            );
          }
          var N = function (e) {
            var s;
            clearTimeout(s),
              (s = setTimeout(function () {
                var s = (0, j.A)(e);
                u(
                  s
                    ? (0, a.Z)((0, n.Z)({}, l), { phone: '' })
                    : (0, a.Z)((0, n.Z)({}, l), {
                        phone: 'Phone number is not valid',
                      })
                );
              }, 800));
          };
          return (0, t.jsxs)('div', {
            className: 'login_container',
            children: [
              (0, t.jsx)('div', {
                className: 'img',
                children: (0, t.jsx)('img', {
                  src: '/assets/images/auth/bg.svg',
                }),
              }),
              (0, t.jsx)('div', {
                className: 'login-content',
                children: (0, t.jsxs)('form', {
                  onSubmit: function (e) {
                    return g.apply(this, arguments);
                  },
                  className: 'login_form',
                  children: [
                    (0, t.jsx)('div', {
                      className: 'title',
                      children: (0, t.jsx)('h2', {
                        children:
                          '\u09b6\u09c7\u0996\u09be\u09b0 \u09a8\u09a4\u09c1\u09a8 \u099c\u0997\u09a4\u09c7 \u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae',
                      }),
                    }),
                    (0, t.jsxs)('div', {
                      className: 'form_group',
                      children: [
                        (0, t.jsxs)('label', {
                          htmlFor: '',
                          children: [
                            '\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0',
                            (0, t.jsx)('span', { children: '*' }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          className: 'input_container',
                          children: [
                            (0, t.jsxs)('div', {
                              className: 'flag',
                              children: [
                                (0, t.jsx)('img', {
                                  src: '/assets/images/auth/bd-flag.png',
                                  alt: '',
                                }),
                                (0, t.jsx)('span', { children: '+88' }),
                              ],
                            }),
                            (0, t.jsx)('div', {
                              className: 'input',
                              children: (0, t.jsx)('input', {
                                placeholder:
                                  '\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0 \u09a6\u09bf\u09a8',
                                className: 'input',
                                value: i.phone,
                                onChange: function (e) {
                                  var s = e.target.value;
                                  r(function (e) {
                                    return (0,
                                    a.Z)((0, n.Z)({}, e), { phone: s });
                                  }),
                                    u({}),
                                    N(s);
                                },
                                type: 'number',
                                name: 'phone',
                                maxLength: 11,
                                required: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.phone &&
                      (0, t.jsx)('div', {
                        className: 'errorMsg',
                        children: l.phone,
                      }),
                    (0, t.jsx)('button', {
                      className: 'common_btn btn-primary formBtn',
                      type: 'submit',
                      children: o
                        ? (0, t.jsx)('div', {
                            className: 'spinner-border spinner-border-md',
                            role: 'status',
                          })
                        : '\u098f\u0997\u09bf\u09df\u09c7 \u09af\u09be\u09a8',
                    }),
                    (0, t.jsxs)('p', {
                      className:
                        'w-100 jump_to d-flex align-items-center justify-content-center',
                      children: [
                        'Already have an account?',
                        ' ',
                        (0, t.jsx)(f(), {
                          href: '/login',
                          children: (0, t.jsx)('a', { children: 'Login' }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        _ = r(6154),
        y = function (e) {
          var s = e.userInfo,
            r = e.setUserInfo,
            i = e.setError,
            l = e.error,
            o = e.loading,
            d = e.setLoading,
            u = e.setStep,
            p = function (e) {
              return (
                'number' === typeof e && (e = e.toString()),
                'string' === typeof e && 4 === e.length && !!/^\d+$/.test(e)
              );
            },
            f = function (e) {
              return /^01[0-9]{9}$/.test(e);
            },
            j = (0, c.useState)(''),
            g = j[0],
            N = j[1],
            Z = (0, c.useState)(100),
            w = Z[0],
            b = Z[1],
            y = (0, c.useRef)();
          function P() {
            return (
              (P = (0, m.Z)(function (e) {
                var r, t;
                return (0, h.__generator)(this, function (o) {
                  return (
                    e.preventDefault(),
                    (r = p(Number(g))),
                    (t = f(s.phone)),
                    r && t
                      ? (d(!0),
                        _.Z.post(
                          ''.concat(
                            window.location.origin,
                            'https://techanalyzen.libertysailingschool.net/api/auth/v1/verify/otp'
                          ),
                          (0, a.Z)((0, n.Z)({}, s), { OTP: g })
                        )
                          .then(function (e) {
                            var s = e.data;
                            'success' === s.status && u('EMAIL'),
                              console.log(s);
                          })
                          .catch(function (e) {
                            var s = e.response.data;
                            'error' === s.status &&
                              i((0, a.Z)((0, n.Z)({}, l), { OTP: s.message })),
                              console.log(s);
                          })
                          .finally(function () {
                            d(!1);
                          }))
                      : i((0, a.Z)((0, n.Z)({}, l), { OTP: 'Invalid OTP' })),
                    [2]
                  );
                });
              })),
              P.apply(this, arguments)
            );
          }
          return (
            (0, c.useEffect)(function () {
              y.current = setInterval(function () {
                b(function (e) {
                  return e - 1;
                });
              }, 1e3);
            }, []),
            (0, c.useEffect)(
              function () {
                w <= 0 && clearInterval(y.current);
              },
              [w]
            ),
            (0, t.jsxs)('div', {
              className: 'login_container',
              children: [
                (0, t.jsx)('div', {
                  className: 'img',
                  children: (0, t.jsx)('img', {
                    src: '/assets/images/auth/Mobile login-bro.png',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'login-content',
                  children: (0, t.jsxs)('form', {
                    onSubmit: function (e) {
                      return P.apply(this, arguments);
                    },
                    className: 'form',
                    children: [
                      (0, t.jsx)('div', {
                        className: 'title',
                        children: (0, t.jsx)('h2', {
                          children:
                            'OTP \u09ad\u09c7\u09b0\u09bf\u09ab\u09bf\u0995\u09c7\u09b6\u09a8',
                        }),
                      }),
                      (0, t.jsxs)('div', {
                        className: 'form_group',
                        children: [
                          (0, t.jsx)('label', {
                            htmlFor: '',
                            children:
                              '\u09ae\u09cb\u09ac\u09be\u0987\u09b2\u09c7 \u09aa\u09be\u09a0\u09be\u09a8\u09cb \u09ea \u09a1\u09bf\u099c\u09bf\u099f\u09c7\u09b0 \u0995\u09cb\u09a1\u099f\u09bf \u09b2\u09bf\u0996\u09c1\u09a8',
                          }),
                          (0, t.jsx)('div', {
                            className: 'input_container',
                            children: (0, t.jsx)('div', {
                              className: 'input',
                              children: (0, t.jsx)('input', {
                                maxLength: '4',
                                placeholder:
                                  '\u098f\u0996\u09be\u09a8\u09c7 \u0995\u09cb\u09a1 \u09a6\u09bf\u09a8',
                                className: 'input',
                                value: g,
                                onChange: function (e) {
                                  var s = e.target.value;
                                  N(s), i({});
                                },
                                type: 'number',
                                name: 'SMSOTP',
                              }),
                            }),
                          }),
                        ],
                      }),
                      l.OTP &&
                        (0, t.jsx)('div', {
                          className: 'errorMsg',
                          children: l.OTP || '',
                        }),
                      (0, t.jsx)('button', {
                        type: 'submit',
                        className: 'common_btn otp-btn',
                        children: o
                          ? (0, t.jsx)('div', {
                              className: 'spinner-border spinner-border-md',
                              role: 'status',
                            })
                          : '\u098f\u0997\u09bf\u09df\u09c7 \u09af\u09be\u09a8',
                      }),
                      (0, t.jsxs)('div', {
                        className: 'resend_otp',
                        children: [
                          (0, t.jsx)('p', {
                            children:
                              '\u0995\u09cb\u09a8\u09cb \u0995\u09cb\u09a1 \u09aa\u09be\u09a8\u09a8\u09bf?',
                          }),
                          w > 0
                            ? (0, t.jsxs)('p', {
                                children: [
                                  '\u0986\u09ac\u09be\u09b0 \u0985\u09a8\u09c1\u09b0\u09cb\u09a7 \u099c\u09be\u09a8\u09be\u09a4\u09c7 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8',
                                  (0, t.jsxs)('span', {
                                    children: [
                                      ' ',
                                      w,
                                      ' \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1',
                                    ],
                                  }),
                                ],
                              })
                            : (0, t.jsx)('button', {
                                onClick: function (e) {
                                  f(s.phone)
                                    ? v.Z.post('/auth/v1/send/sms', {
                                        phone: s.phone,
                                      })
                                        .then(function (e) {
                                          var t = e.data.userInfo;
                                          r(
                                            (0, a.Z)((0, n.Z)({}, s), {
                                              id: t.id,
                                            })
                                          ),
                                            b(30),
                                            (y.current = setInterval(
                                              function () {
                                                b(function (e) {
                                                  return e - 1;
                                                });
                                              },
                                              1e3
                                            ));
                                        })
                                        .catch(function (e) {
                                          console.log(e);
                                        })
                                        .finally(function () {
                                          d(!1);
                                        })
                                    : i(
                                        (0, a.Z)((0, n.Z)({}, l), {
                                          phone: 'Invalid Phone Number',
                                        })
                                      );
                                },
                                type: 'button',
                                className: 'resend_btn',
                                children:
                                  '\u09aa\u09c1\u09a8\u09b0\u09be\u09df OTP \u09aa\u09be\u09a0\u09be\u09a8',
                              }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'forget_number wrong_number_box',
                        children: [
                          (0, t.jsx)('p', {
                            children:
                              '\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0 \u09ad\u09c1\u09b2 \u09b9\u09df\u09a8\u09bf \u09a4\u09cb?',
                          }),
                          (0, t.jsxs)('div', {
                            className: 'edit_number',
                            children: [
                              (0, t.jsx)('span', {
                                className: 'info',
                                children: s.phone,
                              }),
                              (0, t.jsxs)('span', {
                                onClick: function () {
                                  u('PHONE');
                                },
                                style: { cursor: 'pointer', color: '#e91e63' },
                                children: [
                                  (0, t.jsx)(x.QML, {}),
                                  ' \u09a8\u09ae\u09cd\u09ac\u09b0 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8 \u0995\u09b0\u09c1\u09a8',
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
            })
          );
        },
        P = function () {
          var e = (0, c.useState)('PHONE'),
            s = e[0],
            r = e[1],
            i = (0, c.useState)({
              firstName: '',
              lastName: '',
              gender: '',
              password: '',
              confirmPassword: '',
              emailOTP: '',
              phone: '',
              email: '',
              SMSOTP: '',
              username: '',
              referredBy: '',
            }),
            m = i[0],
            h = i[1],
            p = (0, c.useState)(!1),
            f = p[0],
            x = p[1],
            v = (0, c.useState)({
              firstName: '',
              lastName: '',
              username: '',
              email: '',
              phone: '',
              gender: '',
              password: '',
              confirmPassword: '',
            }),
            j = v[0],
            N = v[1],
            Z = (0, o.useRouter)().query.referredBy;
          return (
            (0, c.useEffect)(function () {
              console.log('query-> '.concat(Z)),
                h((0, a.Z)((0, n.Z)({}, m), { referredBy: Z }));
            }, []),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(l(), {
                  children: (0, t.jsx)('title', {
                    children: 'Register | Techanalyzen',
                  }),
                }),
                (0, t.jsx)(d.Z, {}),
                (0, t.jsxs)('div', {
                  className: 'container',
                  children: [
                    'PHONE' === s &&
                      (0, t.jsx)(b, {
                        setStep: r,
                        setUserInfo: h,
                        userInfo: m,
                        loading: f,
                        setLoading: x,
                        error: j,
                        setError: N,
                      }),
                    'SMS_OTP' === s &&
                      (0, t.jsx)(y, {
                        setUserInfo: h,
                        userInfo: m,
                        setStep: r,
                        error: j,
                        setError: N,
                        loading: f,
                        setLoading: x,
                      }),
                    'EMAIL' === s &&
                      (0, t.jsx)(g, {
                        userInfo: m,
                        setStep: r,
                        setUserInfo: h,
                        error: j,
                        setError: N,
                        loading: f,
                        setLoading: x,
                      }),
                    'EMAIL_OTP' === s &&
                      (0, t.jsx)(w, {
                        setUserInfo: h,
                        userInfo: m,
                        error: j,
                        setError: N,
                        setStep: r,
                        loading: f,
                        setLoading: x,
                      }),
                  ],
                }),
                (0, t.jsx)(u.Z, {}),
              ],
            })
          );
        };
    },
    3589: function (e, s, r) {
      'use strict';
      function n(e) {
        return /^01[0-9]{9}$/.test(e);
      }
      function a(e) {
        return !!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
      }
      r.d(s, {
        A: function () {
          return n;
        },
        o: function () {
          return a;
        },
      });
    },
    9008: function (e, s, r) {
      e.exports = r(5443);
    },
  },
  function (e) {
    e.O(0, [4617, 2332, 9774, 2888, 179], function () {
      return (s = 922), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
