import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });
describe('Example Test', () => {
    let wrapper, View;
    beforeEach(() => {
        View = () => <h1>Testing</h1>;
        wrapper = mount(<View />);
    });
    it('Match SnapShot', () => {
        expect(renderer.create(<View />)).toMatchSnapshot();
    });
    it('Page has test', () => {
        expect(wrapper.text().includes('Testing')).toBe(true);
    });
});
//# sourceMappingURL=Example.spec.jsx.map