import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

beforeEach(() => {
  (global as any).fetch = jest.fn((input: RequestInfo) => {
    const url = String(input);
    let body = { code: 0, success: true, error: null, user: null };

    if (url.includes('/api/sliders')) {
      body = { data: [] } as any;
    }

    if (url.includes('/api/lessons')) {
      body = { code: 0, data: { list: [], hasMore: false } } as any;
    }

    return Promise.resolve({
      json: () => Promise.resolve(body),
    });
  });
});

test('renders app navigation', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText('首页')).toBeInTheDocument();
});
