import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import NavigationItemMobile from "./NavigationItemMobile";

const mockTag = {
  _id: "cmVhY3Rpb24vdGFnOjJFcEdxYUx2TDRmNkFYRVhC",
  position: null,
  slug: "tag-slug",
  name: "Tag Name",
  subTags: {
    edges: []
  }
};

const mockTagWithSubTags = {
  _id: "cmVhY3Rpb24vdGFnOjVXZE5LYXprejZ5TWdrcGY5",
  position: null,
  slug: "tag-slug",
  name: "Tag Name",
  subTags: {
    edges: [
      {
        node: {
          _id: "cmVhY3Rpb24vdGFnOlRFdjdSV1pDTHl1d1dmOWs2",
          position: null,
          slug: "sub-tag-slug",
          name: "Sub Tag Name",
          subTags: {
            edges: []
          }
        }
      },
      {
        node: {
          _id: "cmVhY3Rpb24vdGFnOmJ2MmVEbzV3V3lvNUdNMlN3",
          position: null,
          slug: "sub-tag-slug",
          name: "Sub Tag name",
          subTags: {
            edges: []
          }
        }
      }
    ]
  }
};

const mockTagsWithMoreSubTags = {
  _id: "cmVhY3Rpb24vdGFnOkdyZ1dkYXVwOVB1ZlBYNEp6",
  position: null,
  slug: "tag-slug",
  name: "Tag Name",
  subTags: {
    edges: [
      {
        node: {
          _id: "cmVhY3Rpb24vdGFnOjVXZE5LYXprejZ5TWdrcGY5",
          position: null,
          slug: "sub-tag-slug",
          name: "Sub Tag Slug",
          subTags: {
            edges: [
              {
                node: {
                  _id: "cmVhY3Rpb24vdGFnOlRFdjdSV1pDTHl1d1dmOWs2",
                  position: null,
                  slug: "sub-sub-tag-slug",
                  name: "Sub Sub Tag name"
                }
              },
              {
                node: {
                  _id: "cmVhY3Rpb24vdGFnOmJ2MmVEbzV3V3lvNUdNMlN3",
                  position: null,
                  slug: "sub-sub-tag-slug",
                  name: "Sub Sub Tag Name"
                }
              }
            ]
          }
        }
      },
      {
        node: {
          _id: "cmVhY3Rpb24vdGFnOkZHNnRLdkNvZGVId21Qb05p",
          position: null,
          slug: "sub-tag-slug",
          name: "Sub Tag Name",
          subTags: {
            edges: [
              {
                node: {
                  _id: "cmVhY3Rpb24vdGFnOjREelpZdG1ydTVZaXFYSHR3",
                  position: null,
                  slug: "sub-sub-tag-slug",
                  name: "Sub Sub Tag Name"
                }
              },
              {
                node: {
                  _id: "cmVhY3Rpb24vdGFnOjg3aW1wYTNKUDVhWVFKalJE",
                  position: null,
                  slug: "sub-sub-tag-slug",
                  name: "Sub Sub Tag Name"
                }
              }
            ]
          }
        }
      }
    ]
  }
};

const mockRoutingStore = {
  queryString: ""
};

test("renders with 1 level of tags", () => {
  const component = renderer.create(shallow(<NavigationItemMobile navItem={mockTag} routingStore={mockRoutingStore} />).get(3));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with 2 levels of tags", () => {
  const component = renderer.create(<NavigationItemMobile navItem={mockTagWithSubTags} routingStore={mockRoutingStore} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders with 3 levels of tags", () => {
  const component = renderer.create(<NavigationItemMobile navItem={mockTagsWithMoreSubTags} routingStore={mockRoutingStore} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
