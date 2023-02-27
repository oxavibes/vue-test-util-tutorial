import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

const App = {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  template: `
    <button @click="increment">Increment</button>
    <div v-if="count % 2 === 0">Count is even.</div>
    <div v-if="count % 2 !== 0">Count is odd.</div>
  `,
};

const wrapperFactory = ({ data } = { data: {} }) => {
  return mount(App, {
    data() {
      return data;
    },
  });
};

describe("Testing App", () => {
  it("should render that count is odd", async () => {
    const wrapper = wrapperFactory({
      data: {
        count: 0,
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count is odd.");
  });

  it("should render that count is even", async () => {
    const wrapper = wrapperFactory({
      data: {
        count: 0,
      },
    });

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.html()).toContain("Count is even.");
  });
});
