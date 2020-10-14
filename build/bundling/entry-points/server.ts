import server from "@frontity/core/src/server";
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

export default server({ packages });

