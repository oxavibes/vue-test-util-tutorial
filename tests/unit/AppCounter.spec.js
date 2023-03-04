import { mount } from "@vue/test-utils";

import AppCounter from "@/components/AppCounter.vue";

const wrapperFactory = () => {
  return mount(AppCounter);
};

describe("Testing AppCounter", () => {
  it("should render that count is even", async () => {
    const wrapper = wrapperFactory();

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count is even.");
  });

  it("should render that count is odd", async () => {
    const wrapper = wrapperFactory();

    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count is odd.");
  });

  it("should render that count is even", async () => {
    const wrapper = wrapperFactory();

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count is even.");
  });
});
