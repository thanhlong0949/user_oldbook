import {fetcher} from "./Fetcher";

const path = {
    update: "/address/update-address",
    create: "/address/create-new-address",
    getAll: "/address/get-all-address-By"
};

function creatAddress(data: any){
    return fetcher({url: path.create, method: "post", data: data});
}

function updateAddress(data: any){
    return fetcher({url: path.update, method: "put", data: data});
}

function getAllAddress(){
    return fetcher({url: path.getAll, method: "get"});
}

export default {
    creatAddress,
    updateAddress,
    getAllAddress,
}