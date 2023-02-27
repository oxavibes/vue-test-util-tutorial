import { mount } from "@vue/test-utils";

const App = {
  props: {
    count: {
      type: Number,
    },
  },
  template: `
    <div v-if="count % 2 === 0">Count is even.</div>
    <div v-else>Count is odd.</div>
  `,
};

describe("Testing App", () => {
  it("should render that count is odd", () => {
    const wrapper = mount(App, {
      props: {
        count: 1,
      },
    });

    expect(wrapper.html()).toContain("Count is odd.");
  });

  it("should render that count is even", () => {
    const wrapper = mount(App, {
      props: {
        count: 2,
      },
    });

    expect(wrapper.html()).toContain("Count is even.");
  });
});
