import Head from 'next/head';
import React, { useEffect } from 'react';
import Header from './../components/Home/Banner/Header';

import Main from './../components/Home/Main';

export default function Index() {
  useEffect(() => {
    var chatbox = document.getElementById('fb-customer-chat');
    console.log(chatbox);
    chatbox?.setAttribute('page_id', '103761959143543');
    chatbox?.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v17.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
  return (
    <>
      <Head>
        <title>Home | Techanalyzen</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
