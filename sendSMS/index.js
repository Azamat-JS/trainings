const notificationapi = require('notificationapi-node-server-sdk').default;

function sendSms() {
  notificationapi.init(
    'nxfjucb3h4hzn0g2yrld37rijf',
    't3qza3qfurylj21o0t4vry5bge725uyz2l19q9kqlnj0n0ggabz8xhp10n',
  );

  notificationapi
    .send({
      type: 'welcome',
      to: {
        id: '6791379f-983e-4fa5-b337-03d236503c98',
        email: 'youremail@gmail.com',
        number: '+998990846500', // Please replace our test number with a valid number to receive this message.
      },
      email: {
        subject: 'gfddd',
        html: 'Hello, wordddddddld!',
      },
      sms: {
        message: 'Murodjon',
      },
    //   inapp: {
    //     title: 'Hello',
    //     url: 'https://example.com',
    //     image: 'https://example.com/image.png',
    //   },
    //   mobile_push: {
    //     title: 'Hello',
    //     message: 'Hello, world!',
    //   },
      web_push: {
        title: 'Hello',
        message: 'Hello, world!',
        icon: 'https://example.com/icon.png',
        url: 'https://example.com',
      },
      call: {
        message: 'Hello, world!',
      },
    //   slack: {
    //     text: 'Hello, world!',
    //   },
    })
    .then((res) => console.log(res.data));
}

module.exports = sendSms;
