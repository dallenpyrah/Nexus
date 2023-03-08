import {AxiosInstance} from "axios";

export class LoginService {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    public async login(email: string, password: string): Promise<boolean> {
        try {
            const response = await this.axiosInstance.post('/login', {email, password});
            return response.status === 200;
        } catch (e) {
            return false;
        }
    }
}
