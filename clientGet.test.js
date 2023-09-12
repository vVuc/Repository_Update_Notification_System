const clientGet = require('./clientGet');
const axios = require('axios');

jest.mock('axios');

describe('clientGet', () => {
    it('deve retornar dados quando a chamada à API é bem-sucedida', async () => {
        const mockData = { data: { items: ['item1', 'item2'] }};
        axios.get.mockResolvedValue(mockData);

        const result = await clientGet(axios, 'vVuc', 'Repository_Update_Notification_System');

        expect(result).toEqual(mockData);
    });

    it('deve lançar um erro quando a chamada à API falha', async () => {
        const mockError = new Error('Um erro ocorreu');
        axios.get.mockRejectedValue(mockError);

        await expect(clientGet(axios, 'vVuc', 'Repository_Update_Notification_System')).rejects.toThrow('Um erro ocorreu');
    });
});
