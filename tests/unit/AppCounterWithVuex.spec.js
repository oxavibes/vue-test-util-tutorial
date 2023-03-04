import TestingVuex from "@/components/AppCounterWithVuex.vue";

import { createStore } from "vuex";
import { mount } from "@vue/test-utils";

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0,
      };
    },
    getters: {},
    actions: {},
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    },
  });
};

const wrapperFactory = (component) => {
  const store = createVuexStore();

  return mount(component, {
    global: {
      plugins: [store],
    },
  });
};

describe("Testing AppCounterWithVuex", () => {
  it("should render that count is odd", async () => {
    const wrapper = wrapperFactory(TestingVuex);

    await wrapper.find('button[data-action="increment"]').trigger("click");

    expect(wrapper.html()).toContain("Count is odd.");
  });

  it("should render that count is even", async () => {
    const wrapper = wrapperFactory(TestingVuex);

    await wrapper.find("[data-action='increment']").trigger("click");
    await wrapper.find("[data-action='increment']").trigger("click");

    expect(wrapper.html()).toContain("Count is even.");
  });
});
