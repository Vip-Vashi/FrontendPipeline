import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';


describe('All Tests',()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('Learn React');
    expect(linkElement).toBeInTheDocument();
  });
});


test("Snapshot test", () => {
  render(<App/>);
  const comp = renderer.create(<App/>)
  const tree = comp.toJSON();
  expect(tree).toMatchSnapshot();

});
