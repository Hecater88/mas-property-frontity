const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://virgilio.inmo.cloud/v6/",
      "title": "Prueba de Frontity",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "theme-test"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://virgilio.inmo.cloud/v6/wp-json",
          "postTypes": [
            {
              type: "property",
              endpoint: "property",
              archive: "/properties"
            }
          ],
          "taxonomies": [
            {
              taxonomy: "property_type",
              endpoint: "property_type",
              postTypeEndpoint: "property",
              params: {
                per_page: 10,
                _embed: true
              }
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
