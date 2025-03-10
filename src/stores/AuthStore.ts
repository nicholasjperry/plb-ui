import { defineStore } from "pinia";
import { UserDto } from "../dtos/UserDto";
import { v4 as newGuid } from 'uuid';

export const useAuthStore = defineStore('auth', () => {
    const user = new UserDto();
    // const dao = ;

    function handleLogin() {
        console.log('Login clicked');
    }

    async function handleRegister() {
        console.log('Register clicked');
        user.userUid = newGuid();
        // const result = await dao.RegisterUser(user); 
    }

    return {
        handleLogin,
        handleRegister,
        user,
    }
});