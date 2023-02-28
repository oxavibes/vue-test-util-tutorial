import TestingVuex from "@/components/TestingVuex.vue";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";

const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0,
      };
    },
    getters: {},
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    },
    actions: {},
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

describe("Testing App", () => {
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

  it("should increment count by one", async () => {
    const wrapper = wrapperFactory(TestingVuex);

    const prevCount = wrapper.vm.count;

    await wrapper.find('[data-action="increment"]').trigger("click");

    expect(wrapper.vm.count).toBe(prevCount + 1);
  });

  it("should decrement count by one", async () => {
    const wrapper = wrapperFactory(TestingVuex);

    const prevCount = wrapper.vm.count;

    await wrapper.find('[data-action="decrement"]').trigger("click");

    expect(wrapper.vm.count).toBe(prevCount - 1);
  });
});
