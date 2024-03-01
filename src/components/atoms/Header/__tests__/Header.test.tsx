import {render, screen} from '@testing-library/react-native';
import Header from '../Header';

describe('Header', () => {
  // Renders a header component with a label.
  it('should render header component with label', () => {
    const label = 'Test Label';
    render(<Header label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  // label is an empty string.
  it('should render header component with empty label', () => {
    const label = '';
    render(<Header label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
