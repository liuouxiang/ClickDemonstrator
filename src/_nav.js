/*
Copyright 2021 RWTH Aachen University
*/

export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-speedometer'
    },
    {
      name: 'Single Product',
      url: '/single-product',
      icon: 'icon-pencil',
      badge: {
        variant: 'info',
        text: 'NEW',
      }
    },
    {
      name: 'WZL/RWTH Aachen',
      url: 'http://www.wzl.rwth-aachen.de',
      icon: 'icon-cloud-download'
    },
    /*
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
    },
    */
  ],
};
