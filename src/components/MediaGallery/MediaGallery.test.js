import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "mobx-react";
import MediaGallery from "./MediaGallery";

const uiStore = {
  appConfig: {
    publicRuntimeConfig: {
      placeholderImageUrls: {
        productGrid: ""
      }
    }
  }
};

const mediaItems = [
  {
    toGrid: 1,
    priority: 0,
    productId: "cmVhY3Rpb24vcHJvZHVjdDpCQ1RNWjZIVHhGU3BwSkVTaw==",
    variantId: "cmVhY3Rpb24vcHJvZHVjdDo2cWlxUHdCa2VKZHRkUWM0Rw==",
    URLs: {
      large: "/resources/placeholder.gif",
      medium: "/resources/placeholder.gif",
      original: "/resources/placeholder.gif",
      small: "/resources/placeholder.gif",
      thumbnail: "/resources/placeholder.gif"
    }
  },
  {
    toGrid: 1,
    priority: 0,
    productId: "cmVhY3Rpb24vcHJvZHVjdDpCQ1RNWjZIVHhGU3BwSkVTaw==",
    variantId: "cmVhY3Rpb24vcHJvZHVjdDo2cWlxUHdCa2VKZHRkUWM0Rw==",
    URLs: {
      large: "/resources/placeholder.gif",
      medium: "/resources/placeholder.gif",
      original: "/resources/placeholder.gif",
      small: "/resources/placeholder.gif",
      thumbnail: "/resources/placeholder.gif"
    }
  }
];

test("basic snapshot", () => {
  const component = renderer.create(<Provider uiStore={uiStore}>
    <MediaGallery mediaItems={mediaItems} uiStore={{}} />
  </Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
