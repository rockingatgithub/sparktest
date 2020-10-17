import { App } from "../../src/components/App";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

// Snapshot for Home React Component
describe(">>>H O M E --- Snapshot", () => {
  it("+++capturing Snapshot of Home", () => {
    const renderedValue = renderer.create(<App />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
