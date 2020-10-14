import client from "@frontity/core/src/client";
import theme_test_default from "theme-test/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity_contact_form_7_default from "frontity-contact-form-7/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";

const packages = {
  theme_test_default,
  frontity__wp_source_default,
  frontity_contact_form_7_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
};

export default client({ packages });

if (module["hot"]) {
  module["hot"].accept(
    [
      "@frontity/core/src/client",
      "theme-test/src/index",
      "@frontity/wp-source/src/index",
      "frontity-contact-form-7/src/index",
      "@frontity/tiny-router/src/index",
      "@frontity/html2react/src/index",
    ],
    () => {
      const client = require("@frontity/core/src/client").default;
      const theme_test_default = require("theme-test/src/index").default;
      const frontity__wp_source_default = require("@frontity/wp-source/src/index").default;
      const frontity_contact_form_7_default = require("frontity-contact-form-7/src/index").default;
      const frontity__tiny_router_default = require("@frontity/tiny-router/src/index").default;
      const frontity__html2react_default = require("@frontity/html2react/src/index").default;
      const packages = {
        theme_test_default,
        frontity__wp_source_default,
        frontity_contact_form_7_default,
        frontity__tiny_router_default,
        frontity__html2react_default,
      };
      client({ packages });
    }
  );
}