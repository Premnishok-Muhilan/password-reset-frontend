import instance from "./instance";

const userServices = {
  register: async (data) => {
    return await instance.post("/users/register", data);
  },
};

export default userServices;
