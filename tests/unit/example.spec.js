import { mount } from "@vue/test-utils";

const App = {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <div v-if="count % 2 === 0">Count is even.</div>
    <div v-else>Count is odd.</div>
  `,
};

const wrapperFactory = ({ data } = { data: {} }) => {
  const appClone = { ...App }; // Shallow Clone
  return mount(appClone, {
    data,
  });
};

describe("Testing App", () => {
  it("should render that count is odd", () => {
    const wrapper = wrapperFactory({
      data() {
        return {
          count: 1,
        };
      },
    });

    expect(wrapper.html()).toContain("Count is odd.");
  });

  it("should render that count is even", () => {
    const wrapper = wrapperFactory({
      data() {
        return {
          count: 2,
        };
      },
    });

    expect(wrapper.html()).toContain("Count is even.");
  });
});
