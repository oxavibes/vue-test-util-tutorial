import { mount } from "@vue/test-utils";

const App = {
  template: `
    <div>Hello App</div>
  `,
};

describe("Testing App", () => {
  it("should render App correctly", () => {
    const wrapper = mount(App);

    expect(wrapper.html()).toBe("<div>Hello App</div>");
  });
});
