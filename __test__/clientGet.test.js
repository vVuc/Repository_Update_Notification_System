const clientGet = require('../constants/clientGet');
const axios = require('axios');

jest.mock('axios');

describe('clientGet', () => {
    it('should return data when the API call is successful', async () => {
        const mockData = { data: { items: ['item1', 'item2'] }};
        axios.get.mockResolvedValue(mockData);

        const result = await clientGet(axios, 'vVuc', 'Repository_Update_Notification_System');

        expect(result).toEqual(mockData);
    });

    it('should throw an error when the API call fails', async () => {
        const mockError = new Error('An error occurred');
        axios.get.mockRejectedValue(mockError);

        await expect(clientGet(axios, 'vVuc', 'Repository_Update_Notification_System')).rejects.toThrow('An error occurred');
    });
});
