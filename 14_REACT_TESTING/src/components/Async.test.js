import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async components', () => {
    test('render post success', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'm1', title: 'reactjs' }],
        });
        render(<Async />);

        const listItem = await screen.findAllByRole('listitem');
        expect(listItem).not.toHaveLength(0);
    });
});