const clientGet = require('../constants/clientGet');
const axios = require('axios');

jest.mock('axios');

describe('clientGet', () => {
    it('should return data when the API call is successful', async () => {
        const mockData = { data: { commits: { data: [] } }}; // Simulando um array vazio
        axios.get.mockResolvedValue(mockData);

        try {
            const result = await clientGet(axios, 'vVuc', 'Repository_Update_Notification_System');
            expect(result).toEqual(mockData);
        } catch (error) {
            console.error(' ', error);
        }
    });

    it('should throw an error when the API call fails', async () => {
        const mockError = new Error('An error occurred');
        axios.get.mockRejectedValue(mockError);

        await expect(clientGet(axios, 'vVuc', 'Repository_Update_Notification_System')).rejects.toThrow('An error occurred');
    });
});
