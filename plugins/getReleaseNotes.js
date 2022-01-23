const axios = require('axios');

module.exports = function () {
  return {
    name: 'docusaurus-plugin-getReleaseNotes',
    async loadContent () {
      const res = await axios.get('https://api.github.com/repos/engula/engula/releases');
      const events = res.data.map(item => ({
        title: `Release Engula ${item.name}`,
        date: item.published_at,
        link: item.html_url,
        content: item.body
      }))

      return events;
    },
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
     
      const events = await createData(
        'events.json',
        JSON.stringify(content),
      );

       addRoute({
        path: '/events',
        component: '@site/src/pages/Events',
        modules: {
          events: events,
        },
        exact: true,
      });
    },
  };
};