import { render } from '@testing-library/react';

import LibsUi from './LibsUi';

describe('LibsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsUi />);
    expect(baseElement).toBeTruthy();
  });
});
